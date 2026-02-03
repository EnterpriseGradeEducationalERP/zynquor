import { ArrowUpRight } from 'lucide-react';

export const serviceGroups = [
    {
        label: "Intelligent Systems",
        bgColor: "#F5731B", // Primary Brand Orange
        textColor: "#fff",
        links: [
            { label: "AI & Automation", href: "/services/ai-automation" },
            { label: "CRM & Sales Systems", href: "/services/sales-systems" },
            { label: "Infrastructure & DevOps", href: "/services/infrastructure" }
        ]
    },
    {
        label: "Growth Engines",
        bgColor: "#E06514", // Slightly Darker Orange
        textColor: "#fff",
        links: [
            { label: "Digital Marketing", href: "/services/digital-marketing" },
            { label: "Sales & Lead Gen", href: "/services/lead-gen" },
            { label: "HR & Staffing", href: "/services/staffing" }
        ]
    },
    {
        label: "Product Engineering",
        bgColor: "#C8550D", // Deepest Orange
        textColor: "#fff",
        links: [
            { label: "App Development", href: "/services/app-dev" },
            { label: "Custom Software", href: "/services/app-dev" },
            { label: "Mobile Solutions", href: "/services/app-dev" }
        ]
    }
];
