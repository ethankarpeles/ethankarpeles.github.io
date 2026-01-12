import Navbar from "@components/Navbar/Navbar.tsx";
import resume from "@assets/documents/resume.pdf"

export default function Resume() {
    return (<>
        <Navbar />
        <FileView />
    </>);
}

function FileView() {
    return (
        <object type='application/pdf' data={resume}>
            <p>
                Your browser does not support PDFs. <a href={resume}>Download PDF</a>
            </p>
        </object>
    );
}