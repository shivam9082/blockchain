
import email from "../assets/images/email.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";
import youtube from "../assets/images/youtube.png";
const ContactUs = () => {

    const data = [
        {
            src: email, 
            link: "land_registration@123gmail.com",
            to : "https://mail.google.com/mail/u/0/"
        },
        {
            src: instagram, 
            link: "land_registration",
            to : "https://www.instagram.com/"
        },
        {
            src: linkedin, 
            link: "land_registration_27",
            to: "https://www.linkedin.com/"
        },
        {
            src: twitter, 
            link: "land_registration_31",
            to: "https://x.com/"
        },
        {
            src: youtube, 
            link: "www.youtube.com",
            to : "https://www.youtube.com/"
        }
    ];

    return (
        <div >
            <div className=" text-center  py-4 text-3xl font-bold">You can Contact us from our below social media accounts.</div>
           
                 {
            data.map((x,index) => (
                
                <div key={index} className="flex p-4 justify-evenly">
                   <div> <img src={x.src}  className="h-20"/> </div>
                   <div className="text-center text-2xl p-4 w-3"> <a href={x.to} target="_blank">{x.link}</a> </div>
                </div>
                
            ))
        }
           
<div className="text-xl font-bold m-4 text-center">Give your feedback..</div>
<div className="flex justify-center">
    <textarea  className=" mb-4 h-48 w-1/2 border-2 border-gray-300 hover:border-black focus:outline-none focus:border-red-900 rounded-lg p-4"></textarea>
    
</div>
<div className="flex justify-center"><button className=" text-xl w-1/2 border-2 border-black p-2 rounded-xl mb-2 hover:bg-gray-400"><a href={`mailto:py22mcf1r31@student.nitw.ac.in`}>Submit</a></button></div>


        </div>
    );
}

export default ContactUs;
