import reductions from "@assets/documents/scholars-day-poster.pdf";

export default function Resume() {
    return <FileView />;
}

function FileView() {
    return (
        <object type='application/pdf' data={reductions}>
            <p>
                Your browser does not support PDFs. <a href={reductions}>Download PDF</a>
            </p>
        </object>
    );
}