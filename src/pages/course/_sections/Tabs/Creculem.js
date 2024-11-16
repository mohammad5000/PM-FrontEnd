import CustomizedAccordions from "@/components/Accordion";


export default function Creculem() {
    
const topics = [
    {
      id: 0,
      Topic: "Leadership and Team Dynamics",
      content: [
        { id: 0, text: "Video on effective leadership styles.", type: "video", field: "People" },
        { id: 1, text: "Article on conflict resolution in teams.", type: "article", field: "People" },
        { id: 2, text: "Training material on building trust among teams.", type: "material", field: "People" }
      ]
    },
    {
      id: 1,
      Topic: "Sustainable Business Practices",
      content: [
        { id: 3, text: "Video on green technologies for businesses.", type: "video", field: "resource" },
        { id: 4, text: "Article on reducing carbon footprint in business operations.", type: "article", field: "Business Environment" },
        { id: 5, text: "resource guide on sustainable business models.", type: "material", field: "Business Environment" }
      ]
    },
    {
      id: 2,
      Topic: "Employee Development and Training",
      content: [
        { id: 6, text: "Video on designing employee training programs.", type: "video", field: "People" },
        { id: 7, text: "Article on the benefits of ongoing professional development.", type: "article", field: "People" },
        { id: 8, text: "Material on effective mentorship programs.", type: "material", field: "People" }
      ]
    },
    {
      id: 3,
      Topic: "resource Management in the Modern Age",
      content: [
        { id: 9, text: "Video on optimizing resource allocation.", type: "video", field: "resource" },
        { id: 10, text: "Article on resource forecasting and planning.", type: "article", field: "resource" },
        { id: 11, text: "Material on advanced resource management techniques.", type: "material", field: "resource" }
      ]
    },
    {
      id: 4,
      Topic: "Digital Transformation and Innovation",
      content: [
        { id: 12, text: "Video on integrating AI into business processes.", type: "video", field: "Business Environment" },
        { id: 13, text: "Article on the future of business automation.", type: "article", field: "Business Environment" },
        { id: 14, text: "Material on navigating digital disruption in business.", type: "material", field: "Business Environment" }
      ]
    }
  ];
    return(
        <div>
            <CustomizedAccordions mainTopic={"Course Details"} accordionData={topics}/>
        </div>
    )
}