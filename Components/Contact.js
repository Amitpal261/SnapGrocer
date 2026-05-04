
// import React ,{Component}from 'react'
// import Information from './Information';
// import Information2 from './Information2';

// class Contact extends Component {
//     constructor(props) {
//     super(props);
//     this.state = { count: 0 ,message :null }; //it change the data through reconcillation method
//     console.log("amit" , this);
    
//   }

//   componentDidMount() {
//    let a = 0;
//     const Api = async () => {
//       const fetchData = await fetch("https://api.github.com/users/yusufChoudhary");
//        const jsonData = await fetchData.json()
//        this.setState({ message : jsonData})
//        console.log(jsonData);
       
//     }
//    this.amit= setInterval(()=>{
//       console.log(a++);
//     },1000)
//     Api()
//   }

//   componentDidUpdate() {
//     console.log("Updated");
//   }

//   componentWillUnmount() {
//     clearInterval(this.amit)
//   }

//   render(){
//     return(
//       <div >
//         <h1>NAME : {this.props.name}</h1>
//         <h2>VILLAGE : {this.props.add}</h2>
//         <h2>COUNT : {this.state.count}</h2>
//        <h2>MESSAGE : {this.state.message?.login}</h2>
//         <button onClick={()=>this.setState({count:this.state.count+1})}>INCREASE</button>
//         <br />
//         <button onClick={()=>this.setState({count:this.state.count-1})}>DECEASE</button>
//         <br />
//            <button onClick={() =>
//           this.setState({message : this.state.message.login})
//         }>
//           SHOW MESSAGE
//         </button>
      
//       <Information name = "SUMIT" cat = "Nabalik"/>
//       <Information2 name = "KUNAT" cat = "balik"/>
// </div>      
//     )
//   }
// }

// export default Contact


import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 p-6'>
      <div className='w-full max-w-5xl bg-white rounded-2xl shadow-xl grid md:grid-cols-2 overflow-hidden'>

        {/* Left Section (Image + Info) */}
        <div className='relative bg-orange-500'>
          <img
            src='https://images.unsplash.com/photo-1521791136064-7986c2920216'
            alt='contact'
            className='absolute inset-0 w-full h-full object-cover opacity-30'
          />

          <div className='relative z-10 text-white p-10 flex flex-col justify-between h-full'>
            <div>
              <h1 className='text-3xl font-bold mb-4'>Let’s Talk</h1>
              <p className='text-orange-100 leading-relaxed'>
                Have a question, project idea, or just want to say hello? Our team is always here to help you.
              </p>
            </div>

            <div className='space-y-5 mt-10'>
              <div className='flex items-center gap-3'>
                <Mail className='w-5 h-5' />
                <span className='text-sm'>support@example.com</span>
              </div>
              <div className='flex items-center gap-3'>
                <Phone className='w-5 h-5' />
                <span className='text-sm'>+91 98765 43210</span>
              </div>
              <div className='flex items-center gap-3'>
                <MapPin className='w-5 h-5' />
                <span className='text-sm'>Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <div className='p-10'>
          <div className='mb-8'>
            <h2 className='text-2xl font-semibold text-gray-800'>Contact Us</h2>
            <p className='text-gray-500 text-sm mt-2'>Fill in the form below and we’ll get back to you within 24 hours.</p>
          </div>

          <form className='flex flex-col gap-5'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <input
                type='text'
                placeholder='First Name'
                className='bg-gray-100 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500'
              />
              <input
                type='text'
                placeholder='Last Name'
                className='bg-gray-100 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500'
              />
            </div>

            <input
              type='email'
              placeholder='Email Address'
              className='bg-gray-100 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500'
            />

            <input
              type='text'
              placeholder='Subject'
              className='bg-gray-100 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500'
            />

            <textarea
              rows='4'
              placeholder='Your Message'
              className='bg-gray-100 border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-orange-500'
            ></textarea>

            <button
              type='submit'
              className='bg-orange-500 hover:bg-orange-600 transition-all duration-200 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg'
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
