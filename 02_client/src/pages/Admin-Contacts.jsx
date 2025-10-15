import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AdminContacts = () => {
    const [contacts, setContacts] = useState([]);
    const { token, url } = useAuth();
    const navigate = useNavigate();

    // *************** Fetch All Contacts ***************
    const getAllContacts = async () => {
        try {
            const response = await fetch(`${url}/api/admin/contacts`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const ContactData = await response.json();
            console.log("Admin-Contacts.jsx Data : ", ContactData);

            if (response.ok) {
                if (Array.isArray(ContactData)) {
                    setContacts(ContactData);
                } else {
                    setContacts([]); // fallback if backend returns unexpected type
                }
            } else {
                toast.warning(ContactData.message);
                navigate("/");
            }
        } catch (error) {
            console.log(`Admin Contacts frontend error : ${error}`);
        }
    };

    useEffect(() => {
        getAllContacts();
    }, []);

    // *************** Delete Contact ***************
    const deleteUser = async (id) => {
        try {
            const response = await fetch(`${url}/api/admin/contacts/delete/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();

            if (response.ok) {
                toast.success(data.message);
                getAllContacts(); // refresh list after deletion
            } else {
                toast.warning(data.message);
                navigate("/");
            }
        } catch (error) {
            console.log(`Admin-Contacts.jsx DELETE Contact Error : ${error}`);
        }
    };

    // *************** Render ***************
    return (
        <section>
            <div className="container">
                <h1 className="main-heading">User Messages</h1>
            </div>

            <div className="container">
                {contacts.length === 0 ? (
                    <div className="text-center text-gray-500 text-lg mt-10">
                        <h1>📭 No messages found</h1>
                    </div>
                ) : (
                    <table>
                        <thead>
                            <tr className="table-row contacts-table-tr">
                                <th className="No">No.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Message</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contacts.map((curr, index) => (
                                <tr key={index} className="contacts-table-tr">
                                    <td className="index">{index + 1}</td>
                                    <td><div className="username">{curr.username}</div></td>
                                    <td><div className="email">{curr.email}</div></td>
                                    <td><div className="message">{curr.message}</div></td>
                                    <td>
                                        <div className="delete">
                                            <button onClick={() => deleteUser(curr._id)}>Delete</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </section>
    );
};

export default AdminContacts;
