// import Button from "../components/button";

"use client"

import Image from "next/image";
import thumb from "@/public/images.jpg";

export default function about() {

    return (
        <main className='mt-10'>
            <div>This is About page <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum illo amet velit necessitatibus dolorem eos accusantium aut, soluta deserunt porro.
            </span></div>

            <div>
                {/* <Button /> */}
            </div>

            <div>
                <Image placeholder="blur" src={thumb} alt="Thumb image" />
            </div>
        </main>
    )
}
