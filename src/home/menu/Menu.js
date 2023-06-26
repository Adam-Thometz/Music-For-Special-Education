import { useContext } from "react";
import { PopupContext } from "_context/PopupContext";
import { useNavigate } from "react-router-dom";

import { useSelector } from "react-redux";

import "./Menu.css";

import WindowNavbar from "_components/window-nav/WindowNavbar";
import Button from "_components/button/Button";
import GoalFilter from "goal-filter/GoalFilter";

import menuOptions from "./menuOptions";
import activities from "_data/_activities/activityList";
import goalIcons from "_media/goal-filter/goal-icons";
import getCoveredSubjects from "_utils/goal-filter/getCoveredSubjects";

const Menu = ({ type = null }) => {
  const { menu } = useSelector((state) => state.general);
  const { setCurrPopup } = useContext(PopupContext)
  const navigate = useNavigate();

  const options = type
    ? type === "all"
      ? Object.values(activities).filter((a) => a.activityType === "games")
      : Object.values(activities).filter((a) => a.genre === type)
    : menuOptions[menu];

  const optionDisplay = options.map((option, i) => {
    const action = option.name === "COMMON CORE"
      ? () => setCurrPopup({ title: "Common Core Standards", popup: <GoalFilter /> })
      : () => navigate(option.url);
    if (type) console.log(option.name, getCoveredSubjects(option.goalsCovered))
    return (
      <Button
        key={i}
        colorId={i % 4}
        onClick={action}
        icon={option.icon}
      >
        {option.name}
        {type ? <div className="Menu-subject-icons">
          {getCoveredSubjects(option.goalsCovered).map(subject => (
            <img src={goalIcons[subject]} alt="" />
          ))}
        </div> : null}
      </Button>
    );
  });

  return (
    <>
      <WindowNavbar page={type ? `${type.toUpperCase()} GAMES` : null} />
      <div className="Menu-options">{optionDisplay}</div>
    </>
  );
};

export default Menu;
