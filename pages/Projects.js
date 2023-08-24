import Project from '../components/project/Project';  // здесь я импортировал Project в Projects. Projects - родительский компонент, Project - дочерний компонент. Теперь могу использовать props

import {projects} from "./../helpers/ProjectsList"
// здесь выводятся все 6 проектов
const Projects = () => {
	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">Projects</h2>
				<ul className="projects">
					{projects.map((project,index) =>{
						// projects.map((project,index) => . массив projects я обрабатываю с помощью метода map().(map-применяет переданную функцию к каждому элементу массива и возвращает новый массив).
						// (project,index) =>{} функция которая применяется к каждому елементу массива. project - это новый массив который принимает в себя параметры. Здесь "project" представляет текущий элемент массива "projects"
						return (
						<Project 
							key = {index}
							// key = {index}, в map нужен ключ который будет уникальным. в данном случае мы дали ему индекс массива.
							title={project.title} 
							// title={project.title} - созданный массив project взял в себя от массива элемент title. и все это мы поместили в переменную title, которую с помощью props мы передали
							img={project.img}
							index={index}
							// и похоже key нельзя использовать как переменную. создали другую переменную
						/>
						);
					})}
				</ul>
			</div>
		</main>
	);
};

export default Projects;
