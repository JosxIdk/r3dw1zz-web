import Image from 'next/image'

const Me = () => {
    return <>
        <h1 className="font-bold font-mono underline decoration-[#8233FF] text-4xl">ACERCA DE MÍ</h1>
        <div className="flex gap-10 items-center justify-center text-white md:flex-row flex-col-reverse w-full md:absolute md:top-2/4 md:left-2/4 md:transform md:-translate-x-2/4 md:-translate-y-2/4">
            <div className="md:w-2/4 w-3/4">
                <h1 className="font-bold font-mono text-4xl w-96"><span className="text-[#8233FF]">ʀ3ᴅᴡ1ᴢᴢ</span>, descubre quien soy...</h1>
                <p className="mt-2 border-solid border-[#8233FF]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur dignissim pharetra. Duis et enim ut magna ullamcorper condimentum. Curabitur id efficitur enim. Quisque pulvinar quis odio ut tempus. Quisque pretium nec dui sed dictum. Phasellus fermentum venenatis enim ac pretium. Curabitur nisi elit, feugiat ac fermentum a, scelerisque id leo. Etiam consectetur dui non sagittis hendrerit. Mauris rutrum arcu sed tempus auctor. Duis maximus, enim eget lacinia aliquet, enim ligula dictum mi, quis congue leo risus blandit magna. Sed bibendum elit non quam dignissim ullamcorper. Phasellus in venenatis dui. Cras nec leo cursus, convallis purus iaculis, convallis leo.</p>
            </div>
            <img src="/img-bg.png" className="w-64 h-64 ml-1"></img>
        </div>
    </>
}

export default Me;
