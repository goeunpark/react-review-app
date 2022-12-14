import HeaderLink from "./HeaderLink";

const Header = (props) => {
    console.log(props.secret)
    
    const headerLinks = props.linkData.map((data) => {
        return <HeaderLink data={data} key={data.name}/>
    });

    return (
        <div>
            {headerLinks}
        </div>
    );
}

export default Header;