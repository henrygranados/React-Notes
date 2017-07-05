import React from 'react';
import axios from 'axios';

class Test extends React.Component {

    constructor() {
        super();
        this.state = {
            showReply: false,
            person: {
                name: "Mike",
                lastname: "Brown",
                response: []
            },

        };

        this.arr = [1,2,3,4,5,6,7,8, 12];
        // this.handleClick = this.handleClick.bind(this);
        this.areEventNumbers = this.areEventNumbers.bind(this);
    }

    // componentDidMount() {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')
    //         .then((response) => {
    //             console.log(response.data)
    //             console.log(response.data[0].title)
    //             const currentPerson = this.state.person
    //             this.setState({
    //                 person: { ...currentPerson, response: response.data}
    //             });
    //         });
    // }

    /* This method executes AJAX call */
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users/')
            .then((response) => {
                this.setState({
                    person: Object.assign({}, this.state.person, { response: response.data })
                });
            });
    }

    /* Simple method to alert a name on the page when button is clicked */
    handleClick() {
    alert(this.state.person.name);
    }


    /* This method will get ONLY even numbers from array */
    areEventNumbers(){
       let evenNumbers = this.arr.filter((item) =>{
           return item % 2 === 0;
       })

       return evenNumbers;
    }

    showAndHide(e){
        e.preventDefault();
        this.setState({showReply: !this.state.showReply})
    }


    /*  This method changes values from dropDown Select Element (Java, C++) */
    change1(event){
    this.setState({someValue1: event.target.value});
    }

    /* This method changes values from dropdown select element in AJAX response */
    change2(event){
        this.setState({someValue2: event.target.value});
    }


    render() {
        const person = this.state.person;
        console.log(person.response)

        const tableStyle = {
            borderBottom: "4px solid #000000"
        }

        const tableHeaderStyle = {
            background: "#cccccc"
        }

        //debugger; // Run the code with your console open and see what
                  // this.state.person looks like.  Make sure render is
                  // called at least twice (this debugger should stop
                  // execution each time it's hit.
        return (
            <div>
                <br/><br/>
                <hr/>
                <div>
                    <select id="lang" onChange={this.change1.bind(this)} value={this.state.someValue1}>
                        <option value="select">Select</option>
                        <option value="Java">Java</option>
                        <option value="C++">C++</option>
                    </select>
                    <p></p>
                    <p>{this.state.someValue1}</p>
                </div>


                <hr/>
                <div>
                    <select onChange={this.change2.bind(this)} value={this.state.someValue2}>
                        {
                            person.response.map((eachNumber, idx) => {
                                return (
                                    <option value = {eachNumber.id + ":" + eachNumber.name + ":"+ eachNumber.email} key={`item-${idx}`}>
                                        {eachNumber.name}
                                    </option>
                                )
                            })
                        }
                    </select>
                    <div>

                        { //Check if value is undefined, then split data
                            (typeof this.state.someValue2 === 'undefined')
                                ? <div>The value is undefined</div>
                                : <table style={tableStyle}>
                                    <thead style={tableHeaderStyle}>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                    </tr>
                                    </thead>
                                    <tbody><tr>{this.state.someValue2.split(":").map((eachInformation, idx) => {
                                    return <td key={`item-${idx}`}>
                                            {eachInformation}
                                           </td>;
                                    })}</tr></tbody></table>
                        }
                    </div>
                </div>
                <br/>

                <div>
                    <a onClick={this.showAndHide.bind(this)} href='#'>Click to Show and Hide</a>
                    {/*{alert("Show and Hide")}*/}
                </div>
                <hr/>
                <div>
                    <ul>
                        {
                            this.areEventNumbers().map((eachNumber, idx) => {
                                return (
                                    <li key={`item-${idx}`}>
                                        {eachNumber}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <hr/>

                <button onClick={this.handleClick.bind(this)}>
                    Say Hello
                </button>
                <hr/>
                <h1>{person.name + " " + person.lastname}</h1>
                <hr/>

                <ul>
                    {
                        person.response.map((eachItem, idx) => {
                            return (
                                <li key={`item-${idx}`}>
                                    {eachItem.name}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }

}
export default Test;