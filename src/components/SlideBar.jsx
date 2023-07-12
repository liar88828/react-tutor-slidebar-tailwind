import React from "react";
// import YtIcon from './youtube.png'
import randomColor from "randomcolor";
import
{
  AiOutlineArrowLeft,
  AiOutlineSchedule,
  AiFillPieChart,
  AiOutlineInbox,
  AiFillSetting,
  AiOutlineFileSearch,
  AiOutlineSearch,
  AiOutlineYoutube,
} from "react-icons/ai";
import { MdAccountCircle, MdAnalytics } from "react-icons/md";

const menuList = [
  { title: "Dashboard", icon: AiFillPieChart },
  { title: "Inbox", icon: AiOutlineInbox, },
  { title: "Accont", icon: MdAccountCircle, gap: true },
  { title: "Schedure", icon: AiOutlineSchedule },
  { title: "Search", icon: AiOutlineSearch },
  { title: "Files", icon: AiOutlineFileSearch },
  { title: "Analytic", icon: MdAnalytics, gap: true },
  { title: "Setting", icon: AiFillSetting },
];

export const SlideBar = () =>
{
  const [ open, setOpen ] = React.useState( true );
  const [ number, setNumber ] = React.useState( true );
  let color = randomColor();
  let color2 = randomColor();
  // const colorChange = setInterval(color, 1000);


  const [ warna, setWarna ] = React.useState( '' );
  React.useEffect( () =>
  {
    setInterval( () =>
    {
      setNumber( prevState => prevState + 1 )
      setWarna( color, color2 );
    }, 5000 );
  }, [] );
  console.log( warna );

  return (
    <div className="flex"> { number }
      <div className={ ` ${ open ? "w-72" : "w-20" } h-screen bg-dark-purple relative transition-all duration-150` } >
        <AiOutlineArrowLeft
          className={ `bg-white w-10 h-10 -right-3 absolute pl-2 rounded-full   border-red-800 border-2 transition-all duration-500 ${ !open && "rotate-180" }` }
          onClick={ () => setOpen( !open ) }
          style={ { cursor: "pointer", transform: open && "rotate(180deg)", } } ></AiOutlineArrowLeft>
        <div className="flex gap-4">
          {/* logo -----------------------*/ }
          <AiOutlineYoutube
            style={ { transform: open && "rotate(180deg)", } }
            className={ ` text-red-600  w-40 h-20 duration-500 ${ !open && "rotate-180" } ` } />

          {/* name logo------------- */ }
          { open && (
            <h3
              className="text-white mt-4 w-4 font-bold text-22"
              style={ {
                transition: open && "opacity 2s linear",
              } }
            >
              {/* chenge color */ }
              <span
                className="transition-all duration-75"
                style={ {
                  color: color2,
                  // background: `linear-gradient(to bottom,  ${color} 0%,${color2} 100%)`,


                  // color: "linear-gradient(#e66465,#9198e5)",
                  // background: "linear-gradient(to bottom, Transparente 0%,Transparente 50%,red 50%,red 100%)",
                  //  color2,
                  transition: "all 5s ease",
                  // WebkitTransition: "all .5s ease",
                  // MozTransition: "all .5s ease"

                } }
              // style={{
              //   backgroundColor: counter % 2 === 0 ? "red" : "green",
              //   transition: "all .5s ease",
              //   WebkitTransition: "all .5s ease",
              //   MozTransition: "all .5s ease"
              // }}
              >
                LOGO TUBE
              </span>
            </h3>
          ) }
          {/* <img src={YtIcon} alt="yt" /> */ }
        </div>
        {/* <div className="card" style={{ background: "linear-gradient(to bottom, Transparente 0%,Transparente 50%,red 50%,red 100%)" }}>hahahah</div> */ }

        <AiOutlineYoutube style={ { transform: [ { rotate: "90deg" } ] } } />

        <ul className="mt-10 p-4 ">
          { menuList.map( ( item, index ) =>
          {
            const Icons = item.icon
            return (
              // border-2 border-gray-200 rounded mt-2
              <li
                style={ {
                  background: `linear-gradient(to bottom,
                     ${ color } 0%,${ color2 } 100%)`,
                  transition: "all .5s ease",
                  WebkitTransition: "all .5s ease",
                  MozTransition: "all .5s ease"
                } }
                className={ `flex gap-4 p-2 
                ${ item.gap ? 'mt-9' : 'mt-2' }
                ${ !open && 'justify-center' }
                group
              hover:bg-blue-800 
              rounded-md transition-all duration-300
              cursor:pointer
              `}
                key={ index }
              >
                <span className={ `
                  text-white  hover:scale-100`}
                  style={ { color: color } }

                ><Icons size={ '26px' } />
                </span>
                {
                  open && <span
                    className="text-white
                  hover:font-bold
                  group-hover:text-red-100 "
                  >{ item.title }</span>
                }
              </li>
            )
          } ) }
        </ul>

      </div>
    </div >
  );
};

