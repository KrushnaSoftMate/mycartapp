import React from 'react'

interface InfoCardProps<T> {
    item: T;
    title: string;
}

const InfoCard = <T,>({ item, title }: InfoCardProps<T>) => {
    return (
        <div style={{ border: "1px dashed #999", padding: "10px", margin: "10px 0" }}>
            <h4 style={{ marginBottom: "10px" }}>{title}</h4>
            <pre style={{ fontSize: "12px", background: "#f5f5f5", color: "#333", padding: "6px" }}>
                {JSON.stringify(item, null, 2)}
            </pre>
        </div>
    )
}

export default InfoCard
