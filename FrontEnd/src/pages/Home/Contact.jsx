import ContactData from "../../assets/resources/ContactData"
import Section from "../../components/Section";

export const Contact = ()=> {


  
        return (
           <div className="pt-[340px] md:pt-[80px]"> 
            <Section title="Say Hello To Me"/>
            <div className="contact-details mt-12 text-tertiary-tertiary-2 px-12 h-[40vh]">
                <div>{'{'}</div>
              {Object.entries(ContactData).map(([key, value], index) => (
                <div key={index} className="detail-item px-4">
                  <strong>{key}:</strong> 
                  {Array.isArray(value) ? (
                    <ul>
                      {value.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <span>{value}</span>
                  )}
                </div>
              ))}
               <div>{'}'}</div>
            </div>
            </div>
          );

}