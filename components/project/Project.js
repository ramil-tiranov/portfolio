import { NavLink } from 'react-router-dom';
import './style.css';
// код который выводит 1 проект (страница с выбором проектов)
const Project = ({title, img, index}) => {  // {title, img, index}- короткая запись вместо (props) прописал ({то что беру у родительского компонента})
	// props- это объект, который содержит все атрибуты и значения, переданные компоненту в React. Он представляет собой способ передачи данных от родительского компонента к дочернему компоненту и позволяет управлять поведением и отображением компонентов на основе этих данных.
	return (
		<NavLink to={`/project/${index}`}>
		
			<li className="project ">
			
				<img src={img} alt= {title} className="project__img" />
				<h3 className="project__title">{title}</h3> 
											   {/* здесь пишу вместо {props.title} просто {title}  */}
			</li>
		
		</NavLink>
	);
};

export default Project;
