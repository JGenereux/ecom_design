export default function OptionSelector({ selectedOption, setOption, options }: { selectedOption: string, setOption: React.Dispatch<React.SetStateAction<string>>, options: string[] }) {
    return <div className="flex flex-row gap-4">
        {options.map((option) => (
            <OptionButton option={option} setOption={setOption} key={option} selectedOption={selectedOption} />
        ))}
    </div>
}

function OptionButton({ option, setOption, selectedOption }: { option: string, setOption: React.Dispatch<React.SetStateAction<string>>, selectedOption: string }) {
    return <button className={`border-2 border-black rounded-md px-2 py-1 font-nav-font cursor-pointer ${selectedOption === option ? 'bg-black text-white' : ''}`} onClick={() => setOption(option)}>{option}</button>
}