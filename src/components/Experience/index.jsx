import { Container } from "react-bootstrap";
import {
	VerticalTimeline,
	VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BiCodeAlt } from "react-icons/bi";
import { IoSchool } from "react-icons/io5";

function Experience() {
	return (
		<section className='page-section' id='experience-section'>
			<Container>
				<h1 className='mb-4'>Experiencia</h1>
				<div className='experience'>
					<VerticalTimeline lineColor='#4E148C'>
						<VerticalTimelineElement
							className='vertical-timeline-element--education'
							date='2010 - 2014'
							iconStyle={{
								background: "#17bed2",
								color: "#fff"
							}}
							icon={<BiCodeAlt />}>
							<h3 className='vertical-timeline-element-title'>
								Lorem 1
							</h3>
							<p>
								{" "}
								Lorem ipsum
								dolor sit amet
								consectetur,
								adipisicing
								elit. Maiores
								eum architecto
								eius eos in
								numquam
								doloribus ad
								illo assumenda
								commodi quos nam
								ea accusamus,
								molestiae
								minima, cumque
								delectus! Eaque,
								adipisci!
							</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className='vertical-timeline-element--education'
							date='2010 - 2014'
							iconStyle={{
								background: "#17bed2",
								color: "#fff"
							}}
							icon={<BiCodeAlt />}>
							<h3 className='vertical-timeline-element-title'>
								Lorem 1
							</h3>
							<p>
								{" "}
								Lorem ipsum
								dolor sit amet
								consectetur,
								adipisicing
								elit. Maiores
								eum architecto
								eius eos in
								numquam
								doloribus ad
								illo assumenda
								commodi quos nam
								ea accusamus,
								molestiae
								minima, cumque
								delectus! Eaque,
								adipisci!
							</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className='vertical-timeline-element--education'
							date='2010 - 2014'
							iconStyle={{
								background: "#17bed2",
								color: "#fff"
							}}
							icon={<BiCodeAlt />}>
							<h3 className='vertical-timeline-element-title'>
								Lorem 1
							</h3>
							<p>
								{" "}
								Lorem ipsum
								dolor sit amet
								consectetur,
								adipisicing
								elit. Maiores
								eum architecto
								eius eos in
								numquam
								doloribus ad
								illo assumenda
								commodi quos nam
								ea accusamus,
								molestiae
								minima, cumque
								delectus! Eaque,
								adipisci!
							</p>
						</VerticalTimelineElement>
						<VerticalTimelineElement
							className='vertical-timeline-element--education'
							date='2014 - 2018'
							iconStyle={{
								background: "#17bed2",
								color: "#fff"
							}}
							icon={<IoSchool />}>
							<h3 className='vertical-timeline-element-title'>
								Lorem 2
							</h3>

							<h4 className='vertical-timeline-element-subtitle'>
								Lorem sub 2
							</h4>

							<p>
								{" "}
								Lorem, ipsum
								dolor sit amet
								consectetur
								adipisicing
								elit. Iste
								exercitationem
								similique, totam
								placeat qui
								ullam voluptatum
								delectus
								incidunt nulla
								sit quibusdam
								veniam commodi
								explicabo minus
								debitis est
								eaque enim
								corrupti.
							</p>
						</VerticalTimelineElement>
					</VerticalTimeline>
				</div>
			</Container>
		</section>
	);
}

export default Experience;
