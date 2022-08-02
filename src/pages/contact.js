import formik from 'formik'

const Contact = () => {
    return <>
        <h1 className='font-bold text-4xl'>Contactame</h1>
        <p className='font-bold text-gray-600'>Creemos cosas nuevas juntos...</p>
        <form className='flex flex-col gap-5 mt-5 w-50 text-center justify-center'>
            <label>
            <input type='text' required  maxLength={100} name={'nombre'} placeholder={'Nombre'} className="outline-none w-64 rounded h-8 m-2 text-black"></input>
            </label>
            <label>
            <input placeholder={'Correo Electronico'} className="outline-none w-64 rounded h-8 m-2 text-black"></input>
            </label>
            <textarea placeholder={'Mensaje'} className="outline-none w-64 rounded h-32 m-2 text-black border-solid border-[#8233FF]"></textarea>
            <button className="bg-[#8233FF] rounded">Enviar</button>
        </form>
    </>
}

export default Contact;