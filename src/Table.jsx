import TableNum from "./TableNum";

export default function Table({ table }) {
    return (
        <>
            {table.map((num, index) => (
                <TableNum key={index} num={num} />
            ))}
        </>
    );
}
