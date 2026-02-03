import { HomeHero } from "../components/home/HomeHero";
import { HomeSidebar } from "../components/home/HomeSidebar";
import { HomeChallenges } from "../components/home/HomeChallenges";
import { HomeCoreSolution } from "../components/home/HomeCoreSolution";
import { HomeServicesSnapshot } from "../components/home/HomeServicesSnapshot";
import { HomeCaseStudies } from "../components/home/HomeCaseStudies";
import { HomeScale } from "../components/home/HomeScale";

export default function Home() {
  return (
    <>
      <HomeSidebar />
      <main className="md:ml-[120px] pt-1">
        {/* pt-1 or no padding, since Hero has relative positioning. Layout component has main padding, we might need to override it?
            The HTML has main with md:ml-[120px] and pt-24. 
            Our Global layout (Layout.tsx or Navbar.tsx presence) adds padding.
            If this page component is child of RootLayout, and RootLayout has <main className="flex-grow pt-24">, then we have 2 mains?
            Usually page.tsx children are inside the layout's main.
            If I want to override the sidebar margin, I can't easily pop out of layout's main.
            However, I can just apply the margin to these sections or a wrapper div.
        */}
        <div className="relative">
          <HomeHero />
          <HomeChallenges />
          <HomeCoreSolution />
          <HomeServicesSnapshot />
          <HomeCaseStudies />
          <HomeScale />
        </div>
      </main>
    </>
  );
}
