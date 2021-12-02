import React, {useEffect, useState} from 'react';
import "./Styles/index.css"
import {Button, Card, Carousel} from "react-bootstrap";
import {useHistory} from "react-router-dom";
import firebase from "firebase/compat";
import {log} from "@craco/craco/lib/logger";

const Home = () => {

	const [events, setEvents] = useState(null);
	const history = useHistory();
	const firestoreDb = firebase.firestore()

	function fetchEvents() {

		firestoreDb.collection('HomePageCrouselImage').get().then((res)=>{
			setEvents(res.docs);
			console.log(res.docs[0].data())
			console.log("hello")
			console.log(events)

		}).catch((err) => {
			console.log(err)
		});


	}

	useEffect(()=>{
		fetchEvents()

	},[])

return (
	// <div className="iframe-container">
	// <iframe  src="http://iiitvadodara.ac.in" title="description" allowFullScreen></iframe>
	// </div>
	<div className="container-fluid px-0">

		<Carousel className="h-50" slide={false}>

			{events?
				events.map((value)=>{return (
					<Carousel.Item interval={10000} >
						<img style={{ height:'75vh'}}
							 className="d-block w-100"
							 src={value.data().imgURL}
							 alt="Image One"
						/>
						<Carousel.Caption>
							{/*<h3>Label for first slide</h3>*/}
							{/*<p>Sample Text for Image One</p>*/}
						</Carousel.Caption>
					</Carousel.Item>
				)}):log("no events")
			}



		</Carousel>

		{/*<Carousel className="h-50" slide={false}>*/}
		{/*	<Carousel.Item interval={10000} >*/}
		{/*		<img style={{ height:'75vh'}}*/}
		{/*			className="d-block w-100"*/}
		{/*			src="http://iiitvadodara.ac.in/img/I_Day.jpg"*/}
		{/*			alt="Image One"*/}
		{/*		/>*/}
		{/*		<Carousel.Caption>*/}
		{/*			/!*<h3>Label for first slide</h3>*!/*/}
		{/*			/!*<p>Sample Text for Image One</p>*!/*/}
		{/*		</Carousel.Caption>*/}
		{/*	</Carousel.Item>*/}
		{/*	<Carousel.Item interval={10000}>*/}
		{/*		<img style={{ height:'75vh'}}*/}
		{/*			className="d-block w-100"*/}
		{/*			src="http://iiitvadodara.ac.in/img/convo_2019/1.jpg"*/}
		{/*			alt="Image Two"*/}
		{/*		/>*/}
		{/*		<Carousel.Caption>*/}
		{/*			/!*<h3>Label for second slide</h3>*!/*/}
		{/*			/!*<p>Sample Text for Image Two</p>*!/*/}
		{/*		</Carousel.Caption>*/}
		{/*	</Carousel.Item>*/}
		{/*	<Carousel.Item interval={10000} >*/}
		{/*		<img style={{ height:'75vh'}}*/}
		{/*			 className="d-block w-100"*/}
		{/*			 src="https://firebasestorage.googleapis.com/v0/b/iiitv-198b6.appspot.com/o/ContentImages%2FIIITV-HOSTEL.jpg?alt=media&token=198177ba-0e28-4004-9277-058ab8a0abd4"*/}
		{/*			 alt="Image One"*/}
		{/*		/>*/}
		{/*		<Carousel.Caption>*/}
		{/*			<h3 className="text-5xl text-dark">IIIT Vadodara Hostel</h3>*/}

		{/*		</Carousel.Caption>*/}
		{/*	</Carousel.Item>*/}
		{/*	<Carousel.Item interval={10000}>*/}
		{/*		<img style={{ height:'75vh'}}*/}
		{/*			 className="d-block w-100"*/}
		{/*			 src="http://iiitvadodara.ac.in/img/gallery/AppliedCSwithAndroid_Group-front.jpg"*/}
		{/*			 alt="Image Two"*/}
		{/*		/>*/}
		{/*		<Carousel.Caption>*/}
		{/*			/!*<h3>Label for second slide</h3>*!/*/}
		{/*			/!*<p>Sample Text for Image Two</p>*!/*/}
		{/*		</Carousel.Caption>*/}
		{/*	</Carousel.Item>*/}
		{/*</Carousel>*/}

		<div className="container mx-lg-5">
			<Card className="w-75 m-4">
				<Card.Header className="text-2xl">Announcements</Card.Header>
				<Card.Body>
					<Card.Title>JOSAA Counselling</Card.Title>
					<Card.Text className="text-blue-600">
						DASA 2021 - B.Tech 2021-22: Reporting Process at the Institute.
					</Card.Text>
					<Button className="w-25" variant="outline-secondary" href="http://iiitvadodara.ac.in/pdf/DASA_Gandhinagar_Merged.pdf" target="_blank">Click to view</Button>
				</Card.Body>
				<Card.Body>
					<Card.Title>New Students</Card.Title>
					<Card.Text className="text-blue-600">
						Mode of Teaching and Learning for 1st Year B.Tech Students
					</Card.Text>
					<Button className="w-25" variant="outline-secondary" href="http://iiitvadodara.ac.in/pdf/Admission/NN_5_Mode_of_Teaching_Learning_1st_Year_BTech_Students.pdf" target="_blank">Click to view</Button>
				</Card.Body>
			</Card>
		</div>

	</div>
);
};

export default Home;
