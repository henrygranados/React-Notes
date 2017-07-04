import React from 'react';
import axios from 'axios';


class Test extends React.Component {

    constructor() {
        super();
        this.state = {
            showReply: false,
            person: {
                name: "Mike",
                lastname: "Brownsssabcd",
                response: []
            }
        };

        this.arr = [1,2,3,4,5,6,7,8, 12];
        this.handleClick = this.handleClick.bind(this);
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

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                this.setState({
                    person: Object.assign({}, this.state.person, { response: response.data })
                });
            });
    }


    handleClick() {
    alert(this.state.person.name);
    }


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

    render() {
        const person = this.state.person;
        //debugger; // Run the code with your console open and see what
                  // this.state.person looks like.  Make sure render is
                  // called at least twice (this debugger should stop
                  // execution each time it's hit.
        return (
            <div>
                <div>
                    <p>Some text</p>
                    <a onClick={this.showAndHide.bind(this)} href='#'>Click to Show and Hide</a>
                    {alert("Show and Hide")}
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

                <button onClick={this.handleClick}>
                    Say hello
                </button>
                <hr/>
                <h1>{person.name + " " + person.lastname}</h1>
                <hr/>

                <ul>
                    {
                        person.response.map((eachItem, idx) => {
                            return (
                                <li key={`item-${idx}`}>
                                    {eachItem.title}
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