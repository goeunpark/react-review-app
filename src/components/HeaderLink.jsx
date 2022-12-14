const HeaderLink = ({data}) => {
    return (<div>
        <a href={data.link} aria-label={data.description} className="header-link">{data.name}</a>
        </div>
    ); 
}

export default HeaderLink;
