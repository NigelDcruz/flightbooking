import "./Sidebar.scss";
import FormFilter from './Filters/FormFilter/FormFilter';
import SliderFilter from './Filters/SliderFilter/SilderFilter'

function Sidebar() {
  return (
        <aside>
          <FormFilter />
          <SliderFilter min={0} max={1000}/>
        </aside>
  );
}

export default Sidebar;
