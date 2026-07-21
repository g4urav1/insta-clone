export default function Accounts(props) {
    return (
        <div className=" justify-between flex items-center" >
            <div className="flex items-center gap-2">
            <img className="bg-bg rounded-full w-10" src={props.pfp} alt="pfp" />
            <p>{props.Username}</p></div>
            <p className="text-primary">Follow</p>
        </div>
    )
}
