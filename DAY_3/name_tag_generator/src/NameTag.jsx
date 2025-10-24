import { useState } from "react"

function NameTag() {
    let [name, setName] = useState("")
    let [title, setTitle] = useState("")
    let [company, setCompany] = useState("")

    // function nameInput() {
    //     return (e) => setName(e.target.value)
        
    // }
   
    // function titleInput() {
    //     return (e) => setTitle(e.target.value)
    // }
    
    // function companyInput() {
    //     return (e) => setCompany(e.target.value)
    // }
    
    function download() {
        return alert(`--- NAME TAG ---\nHello, my name is\n${name.toUpperCase()}\n${title}\n${company}`)
    }

    return(
        <div>
            <div className="inputs">
                <h3> Name tag Generator</h3>
                <input value={name} onChange={(e) => setName(e.target.value)}  type="text" placeholder="Enter your name"></input>
                <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="Enter your Job title"></input>
                <input value={company} onChange={(e) => setCompany(e.target.value)} type="text" placeholder="Enter your Company"></input>
            </div>
            <div className="inputs2">
                <h1>--- NAME TAG ---</h1>
                <h3>Hello, my name is</h3>
                <h2> {name.toUpperCase()}</h2>
                <h2>{title}</h2>
                <h2>{company}</h2>
                <div className="buttonB">
                    <button type="submit" onClick={download}>Download</button>
                </div>
                   
            </div>
            

        </div>


            
    )

}



export default NameTag;