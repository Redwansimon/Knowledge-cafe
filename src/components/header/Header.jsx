import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between items-center border-b-2 mx-4 px-4'>
            <h1 className="text-3xl font-bold">Knowledge Cafee</h1>
            <img src={profile} alt="" />
        </header>
    );
};

export default Header;