import { useRecordContext } from "react-admin";

export const UserTitle = () => {
    const record = useRecordContext();
    console.log(record)
    return <span>Kullanıcı {record ? `"${record.username}"` : ''}</span>;
};
