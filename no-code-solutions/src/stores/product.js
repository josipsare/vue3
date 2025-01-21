
import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
  }),
  actions: {
    async fetchProducts() {
      return new Promise((resolve) => {
        setTimeout(() => {
          this.products = [
            {
              "id": 1,
              "name": "CRM Integration Tool",
              "description": "Automate data synchronization between your CRM and other business systems.",
              "longDescription": "The CRM Integration Tool is a comprehensive solution designed to unify all your customer relationship data across multiple platforms. With this tool, you can seamlessly synchronize customer data, sales activity, and business metrics, ensuring that your team always has access to the latest information. By automating data transfer between your CRM and tools like email marketing platforms, analytics dashboards, and project management software, this integration reduces manual errors and improves efficiency. Whether you're managing a large customer base or trying to scale your business operations, this tool eliminates the silos between systems, enabling better communication and collaboration across departments. It also supports customizable workflows, so you can tailor data synchronization to match your unique business processes. Ideal for companies looking to enhance productivity, improve data accuracy, and gain deeper insights into customer behavior, the CRM Integration Tool is a must-have for any organization aiming for seamless connectivity.",
              "price": 199
            },
            {
              "id": 2,
              "name": "Email Campaign Automation",
              "description": "Create and send automated email campaigns to segmented contacts.",
              "longDescription": "Email Campaign Automation empowers your business to craft highly personalized and targeted email campaigns effortlessly. With built-in features such as A/B testing, audience segmentation, and dynamic content generation, this tool ensures that your emails resonate with every recipient. By automating the scheduling and sending of campaigns, it eliminates repetitive tasks, freeing up your marketing team to focus on strategy and creativity. Integration with CRM systems means you can leverage customer data to tailor emails to individual preferences, boosting engagement and conversion rates. Real-time analytics allow you to monitor campaign performance, track open rates, click-through rates, and measure ROI effectively. Whether you're a small business looking to nurture leads or an enterprise aiming to scale email outreach, this tool is designed to optimize every aspect of email marketing. Save time, reduce costs, and ensure that your message reaches the right audience at the right time with Email Campaign Automation.",
              "price": 149
            },
            {
              "id": 3,
              "name": "Lead Generation Automation",
              "description": "Automate lead collection through web forms and integrate them into your CRM.",
              "longDescription": "Lead Generation Automation is a powerful tool that revolutionizes how businesses capture and manage potential customers. By automating the process of lead collection through dynamic and customizable web forms, it ensures that no opportunity slips through the cracks. The tool seamlessly integrates with your CRM, automatically importing lead data with relevant details such as contact information, preferences, and source of inquiry. This not only saves time but also reduces errors caused by manual data entry. Advanced features like lead scoring and tagging help prioritize high-value prospects, enabling your sales team to focus on converting the most promising leads. The tool also supports multi-channel lead generation, including social media, email campaigns, and landing pages, allowing you to reach audiences wherever they are. Perfect for businesses aiming to scale their customer base efficiently, Lead Generation Automation streamlines the entire process, from capturing leads to nurturing them into loyal customers.",
              "price": 129
            },
            {
              "id": 4,
              "name": "Workflow Automation Tool",
              "description": "Automate internal business processes such as document approvals and task assignments.",
              "longDescription": "The Workflow Automation Tool is a cutting-edge solution designed to streamline and optimize your organization's internal processes. This tool enables businesses to automate repetitive tasks such as document approvals, task assignments, and progress tracking, ensuring that operations run smoothly and efficiently. With an intuitive interface, you can design custom workflows that match your specific business needs, from simple task handoffs to complex multi-step approval chains. Notifications and reminders ensure that everyone stays on track, reducing delays and boosting productivity. Integration with popular project management and communication tools makes it easy to incorporate this solution into your existing tech stack. Whether you're looking to manage large projects, improve cross-departmental collaboration, or simply reduce administrative overhead, the Workflow Automation Tool provides a flexible and scalable solution. By automating mundane tasks, your team can focus on high-impact work, fostering innovation and driving business growth.",
              "price": 179
            },
            {
              "id": 5,
              "name": "Inventory Management Automation",
              "description": "Automate real-time stock and order tracking.",
              "longDescription": "Inventory Management Automation offers a robust and reliable way to handle all aspects of stock management with ease. This tool provides real-time tracking of inventory levels, order statuses, and stock movements across multiple locations, ensuring that you always have an accurate picture of your supply chain. Automated alerts notify you of low stock levels, expiring items, or delayed shipments, allowing you to take proactive measures to prevent disruptions. The tool integrates seamlessly with e-commerce platforms, POS systems, and supply chain management software, providing a centralized hub for all inventory-related data. Customizable reporting features allow you to analyze trends, forecast demand, and optimize stock levels to minimize costs and maximize efficiency. Whether you're running a small retail business or managing a complex distribution network, Inventory Management Automation ensures that your operations remain smooth, scalable, and customer-focused.",
              "price": 249
            },
            {
              "id": 6,
              "name": "Customer Support Ticket Automation",
              "description": "Automate the process of managing customer tickets and responding to frequently asked questions.",
              "longDescription": "Customer Support Ticket Automation simplifies the way you handle customer inquiries by automating the ticket management process. This tool is equipped with features like AI-powered chatbots, automated ticket routing, and predefined response templates, ensuring that every customer receives timely and accurate assistance. It can integrate with your existing help desk software to centralize all support requests in one place, making it easier for your team to prioritize and resolve issues. Real-time notifications and escalation options help address critical tickets without delay, while analytics dashboards provide insights into response times, ticket volume, and customer satisfaction. For businesses that aim to improve their customer service while reducing operational costs, this tool is indispensable. It not only enhances the customer experience but also frees up your support team to focus on resolving complex queries, fostering long-term loyalty.",
              "price": 169
            },
            {
              "id": 7,
              "name": "Marketing Automation Dashboard",
              "description": "Centralize your marketing activities and analyze campaign results in real time.",
              "longDescription": "The Marketing Automation Dashboard is your all-in-one solution for managing, executing, and analyzing marketing campaigns. This tool consolidates multiple marketing channels, such as social media, email, and paid ads, into a single, user-friendly platform. Its intuitive design allows you to track campaign performance in real-time, monitor KPIs, and generate actionable insights. Features like audience segmentation, personalized messaging, and automation rules help you deliver the right content to the right audience at the right time. The dashboard also integrates seamlessly with CRM systems and analytics tools, providing a 360-degree view of your marketing efforts. Whether you're launching a new product, nurturing leads, or driving brand awareness, this tool equips you with the insights and automation needed to achieve your goals effectively. With its robust analytics and easy-to-use interface, the Marketing Automation Dashboard helps businesses optimize their marketing strategy and maximize ROI.",
              "price": 220
            },
            {
              "id": 8,
              "name": "Document Signing Automation",
              "description": "Automate the process of document signing via e-signature.",
              "longDescription": "Document Signing Automation streamlines the way contracts, agreements, and other official documents are signed and managed. This tool allows businesses to send, track, and sign documents digitally, eliminating the need for physical paperwork. Advanced features include secure e-signature technology, automated reminders, and audit trails to ensure compliance and security. It integrates with popular cloud storage platforms, making document retrieval and sharing a breeze. Whether you're closing deals, onboarding employees, or formalizing partnerships, this tool simplifies the entire process. By reducing the turnaround time for document approval and signature, businesses can enhance operational efficiency and focus on strategic objectives. Ideal for teams of all sizes, this tool saves time, reduces costs, and provides a seamless experience for all parties involved.",
              "price": 99
            },
            {
              "id": 9,
              "name": "Business Reporting Automation",
              "description": "Automate the generation of business reports from all key business platforms.",
              "longDescription": "Business Reporting Automation takes the hassle out of generating insightful, data-driven reports. This tool connects to all your key business platforms, such as sales, marketing, finance, and operations systems, to compile and generate comprehensive reports with minimal effort. With pre-built templates and customizable reporting options, you can tailor reports to suit specific business needs. Features like automated scheduling, real-time data syncing, and interactive dashboards enable you to track performance metrics effortlessly. Whether you're analyzing revenue trends, tracking employee productivity, or evaluating marketing campaign effectiveness, this tool delivers accurate and actionable insights. By automating report generation, businesses can save hours of manual work, reduce errors, and make informed decisions faster. It's the perfect solution for companies looking to stay competitive in a data-driven world.",
              "price": 179
            },
            {
              "id": 10,
              "name": "Employee Onboarding Automation",
              "description": "Automate the employee onboarding process, from data entry to training.",
              "longDescription": "Employee Onboarding Automation transforms the traditionally time-consuming onboarding process into a seamless, efficient experience. This tool automates tasks such as data collection, document signing, and orientation scheduling, reducing the workload on HR teams. Customizable workflows allow businesses to tailor the onboarding experience to fit their culture and processes. Integrated training modules ensure that new hires can quickly get up to speed on company policies, tools, and responsibilities. Automated reminders and progress tracking keep both HR managers and employees informed, ensuring no step is overlooked. By streamlining administrative tasks and creating a positive first impression for new hires, this tool enhances employee satisfaction and productivity from day one. It's ideal for businesses of all sizes seeking to optimize their onboarding processes while improving overall efficiency.",
              "price": 199
            }
          ];
          console.log("Fetched products:", this.products);
          resolve();
        }, 1000);
      });
    },
  },
});
