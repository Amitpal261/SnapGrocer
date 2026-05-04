import { render,screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../Contact.js";
import { Disc } from "lucide-react";

describe("Contact page testing",()=>{
    it("Contact page is testing",()=>{
        render(<Contact/>)  
        const abc = screen.getByText("Submit")
        // screen(abc).getByText("Submit")
        expect(abc).toBeInTheDocument()
    })

    test("Contact page ",()=>{
        render(<Contact/>)
        // const abc = screen.getByPlaceholderText("Name")
        const abc = screen.getAllByRole("textbox")
        // screen(abc).getByText("Submit")
        // expect(abc).toBeInTheDocument()
        // console.log("Check : ", abc.length);
        // console.log(abc[1]);    
        // expect(abc.length).toBe(3)
         expect(abc.length).not.toBe(2)
    })
    describe("Contact button testing  ",()=>{   
    it("Contact button testing ",()=>{
        render(<Contact/>)
        const abc = screen.getByRole("button")
        // screen(abc).getByText("Submit")
        expect(abc).toBeInTheDocument()
    })
    it("Contact button testing ",()=>{
        render(<Contact/>)
        const abc = screen.getByRole("button")  
        // screen(abc).getByText("Submit")
        expect(abc).toHaveTextContent("Submit")
    })
})  
})

