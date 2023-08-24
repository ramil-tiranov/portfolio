
import { useParams } from 'react-router-dom';
import { projects } from '../helpers/ProjectsList';
import BtnGitHub from './../components/btnGitHub/BtnGitHub'

// страница, с определенным проетом (когда зашел на проект)

const OneProect = () => {
	const {id} = useParams();    // const {id} = useParams();  - id принимает тот параметр который мы вводим в поисковик. А именно path="/project/:id" то что будет заместо :id
	const project = projects[id]; // project это переменная которая принимает массив projects. в квадратных скобках мы указываем его индекс [0,1,2,3,4,5]. и подставляем туда id. То есть теперь id будет указывать индекс массива { projects }. Теперь project выводит информацию опеределенного индекса. не всех 6 а именно одного
	
	

    return (
		<main className="section">
			<div className="container">
				<div className="project-details">
					<h1 className="title-1">{project.title}</h1> 
					                        {/* {project.title} - из массива берем title(определенного индекса) и выводим на экран */}
					<img
						src={project.imgBig}
						alt="{project.title}"
						className="project-details__cover"
					/>

					<div className="project-details__desc">
						<p>{project.skills}</p>
						
					</div>

					{project.gitHubLink && 
					<BtnGitHub link="https://github.com"  />}
					{/* project.gitHubLink && - если у массива есть gitHub тогда выполняется код после && то есть мы из реакта достаем кнопку */}
					
				</div>
			</div>
			
			
			<div className='linku'>
			<a href={project.pre} ><p className='linkp'>Previous</p></a>
			<a href={project.next} ><p className='linkn'>Next</p></a>
			
			</div>
	
	
			
				
		</main>
	);
}

export default OneProect;