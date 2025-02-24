import { Mail, MailText } from "../components/Mail";

function MailToMe () {
    return (
        <div className="flex flex-col h-screen w-full md:flex-row bg-gray-100">
            <div className="flex flex-col h-full w-full md:w-[50%] py-16 px-16">
                <Mail/>
            </div>
            <div className="flex flex-col h-full w-full md:w-[50%] py-16 pr-16">
                <MailText/>
            </div>  
        </div>
    );
}
export default MailToMe;