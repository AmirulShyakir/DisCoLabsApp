import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ClickableChip from "../components/ClickableChip";
import PostCard from "../components/PostCard";
import NewsCard from "../components/NewsCard";

function Home() {
	const [selectedTopic, setSelectedTopic] = useState("All"); // State to hold the selected chip

	const handleChipPress = (topic) => {
		console.info(`You clicked the ${topic} Chip.`);
		setSelectedTopic(topic); // Update the selected chip
	};

	const location = useLocation();
	
	const prevData = [
		{
			title: "Cancer Research",
			description:
				"I am embarking on a research endeavor focused on lung cancer. Exploring the complexities of this disease, my study aims to delve into the intricate molecular and genetic factors contributing to lung cancer development. This research seeks to uncover novel insights into the pathogenesis of lung cancer, examining potential biomarkers, treatment modalities, and preventive strategies. By scrutinizing the interplay of genetic predispositions, environmental factors, and lifestyle choices, the ultimate goal is to contribute to the advancement of targeted therapies and personalized interventions for individuals affected by lung cancer. This undertaking aligns with the broader objective of enhancing our understanding of lung cancer at a molecular level, fostering breakthroughs that can positively impact patient outcomes and pave the way for more effective medical interventions.",
			topics: ["Cancer"],
      clinician: {
				name: "Dr. Lisa Miller",
        role: "Oncologist at City Medical Center",
				id: 1,
			},
			participants: [
				{
					name: "Dr. Lisa Miller",
					role: "Oncologist at City Medical Center",
					id: 20,
				},
				{
					name: "Dr. John Smith",
					role: "Surgeon at Central Hospital",
					id: 21,
				},
			],
			discussion: [
				{
					posterId: 1, // Corresponds to the clinician's id
					comment: "Exciting research topic!",
					likes: 1,
				},
				{
					posterId: 20, // Corresponds to the participant's id
					comment: "I'm interested in this research.",
					likes: 1,
				},
				{
					posterId: 21,
					comment: "I have experience in surgical procedures for lung cancer.",
					likes: 2,
				},
			],
			likes: 1,
		},
		{
			title: "Breast Cancer Research",
			description:
				"Embarking on a research initiative centered around breast cancer, my focus is on unraveling the intricacies of this prevalent disease. This study aims to delve into the genetic and molecular underpinnings of breast cancer, with a keen interest in identifying potential biomarkers, innovative treatment approaches, and preventive strategies. By examining the complex interplay between genetic factors, environmental influences, and lifestyle choices, the overarching goal is to contribute to advancements in targeted therapies and personalized interventions for individuals affected by breast cancer. This research seeks to deepen our understanding of breast cancer at a molecular level, with the ultimate aim of driving progress in medical interventions and improving patient outcomes.",
			topics: ["Cancer"],
      clinician: {
				name: "Dr. Robert Davis",
        role: "Cardiologist at Heart Health Clinic",
				id: 2,
			},
			participants: [
				{
					name: "Dr. Emily Johnson",
					role: "Pediatrician at Sunny Clinic",
					id: 22,
				},
				{
					name: "Dr. Sarah Wilson",
					role: "Research Scientist at ABC Research Institute",
					id: 23,
				},
			],
			discussion: [
				{
					posterId: 2, // Corresponds to the clinician's id
					comment: "Breast cancer is an important field of study.",
					likes: 0,
				},
				{
					posterId: 22, // Corresponds to the participant's id
					comment: "I'm passionate about pediatric medicine.",
					likes: 1,
				},
				{
					posterId: 23,
					comment: "I can provide insights on research methodologies.",
					likes: 2,
				},
				// Add more discussion objects here
			],
			likes: 4,
		},
		{
			title:
				"Using Machine Learning for dentistry applications",
			description:
				"Exploring the transformative potential of machine learning in dentistry, this research delves into innovative applications poised to revolutionize oral healthcare. Harnessing the power of artificial intelligence, the study investigates how machine learning algorithms can enhance diagnostics, treatment planning, and patient care in the field of dentistry. From automating image analysis for early detection of oral diseases to optimizing treatment recommendations based on personalized patient data, the research aims to pave the way for more efficient, accurate, and patient-centric dental practices. By seamlessly integrating cutting-edge technology into the dental domain, this investigation seeks to unlock novel avenues for improving overall oral health outcomes and advancing the future of dentistry.",
			topics: ["Dentistry"],
      clinician: {
				name: "James Johnson",
        role: "Admin staff at XYZ Children's Hospital",
				id: 3,
			},
			participants: [
				{
					name: "Dr. James Brown",
					role: "Data Scientist at XYZ University",
					id: 24,
				},
			],
			discussion: [
				{
					posterId: 3, // Corresponds to the clinician's id
					comment: "This is an interesting topic!",
					likes: 0,
				},
				{
					posterId: 24, // Corresponds to the participant's id
					comment: "I have experience in this area.",
					likes: 1,
				},
			],
			likes: 3,
		},
		{
			title: "Using IOT devices to keep track of patients",
			description:
				"In this research endeavor, the focus is on pioneering the integration of Internet of Things (IoT) devices to establish a comprehensive system for continuous patient health monitoring. The study aims to explore the vast potential of IoT technologies in tracking and analyzing vital health metrics in real-time. By employing a network of connected devices, this research seeks to enhance patient care by providing healthcare professionals with immediate and accurate insights into patients' well-being. The overarching goal is to establish a robust and scalable framework that not only improves the quality of patient monitoring but also enables timely interventions, ultimately contributing to more personalized and effective healthcare strategies.",
			topics: ["Patient Care"],
      clinician: {
				name: "James Johnson",
        role: "Admin staff at XYZ Children's Hospital",
				id: 4,
			},
			participants: [
				{
					name: "Dr. Maria Garcia",
					role: "Machine Learning Researcher at XYZ Company",
					id: 25,
				},
			],
			discussion: [
				{
					posterId: 4, // Corresponds to the clinician's id
					comment: "Monitoring patients with IOT devices can improve care.",
					likes: 1,
				},
				{
					posterId: 25, // Corresponds to the participant's id
					comment: "I'm experienced in machine learning for healthcare applications.",
					likes: 1,
				},
				// Add more discussion objects here
			],
			likes: 2,
		},
		{
			title: "Advancing Oral Health Through Innovative Investigations",
			description: "In this exploration of dentistry research, the focus is on advancing our understanding of oral health through innovative investigations. This research initiative seeks to uncover new insights into dental conditions, treatment modalities, and preventive strategies. From delving into the molecular foundations of oral diseases to evaluating the efficacy of emerging dental technologies, the goal is to contribute to the evolution of dental practices and patient care. By embracing cutting-edge methodologies and interdisciplinary approaches, this research aims to play a pivotal role in shaping the future of dentistry, driving improvements in diagnostics, treatments, and overall oral health outcomes.",
			topics: ["Dentistry"],
			clinician: {
				name: "Dr. John Smith",
				role: "Clinician at XX Hospital",
				id: 5,
			},
			participants: [
				{
					name: "Dr. William Brown",
					role: "Dentist at Bright Smiles Clinic",
					id: 34,
				},
			],
			discussion: [
				{
					posterId: 5, // Corresponds to the clinician's id
					comment: "Dentistry research is essential for oral health.",
					likes: 0,
				},
				{
					posterId: 34, // Corresponds to the participant's id
					comment: "I have experience in dental procedures and research.",
					likes: 0,
				},
				// Add more discussion objects here
			],
			likes: 0,
		},
		{
			title: "Pediatric Medicine Studies",
			description: "This research initiative is dedicated to Pediatric Medicine Studies, focusing on the holistic health and well-being of children. Delving into various aspects of pediatric care, the research aims to explore innovative approaches to diagnostics, treatments, and preventive measures tailored specifically for the unique needs of young patients. By examining the intersection of medical advancements and child-centric healthcare practices, this research seeks to contribute valuable insights that can shape the future of pediatric medicine. The ultimate goal is to enhance the quality of healthcare for children, ensuring they receive the best possible medical care to foster a healthy and thriving start in life.",
			topics: ["Pediatric"],
			clinician: {
				name: "Dr. Emily Johnson",
				role: "Surgeon at YY Hospital",
				id: 6,
			},
			participants: [
				{
					name: "Dr. Robert Lee",
					role: "Cancer Researcher at Research Lab XYZ",
					id: 26,
				},
				{
					name: "Dr. Jennifer White",
					role: "Cardiologist at Heart Hospital",
					id: 27,
				},
			],
			discussion: [
				{
					posterId: 6, // Corresponds to the clinician's id
					comment: "Pediatric medicine is a vital field for child health.",
					likes: 1,
				},
				{
					posterId: 26, // Corresponds to a participant's id
					comment: "I have experience in cancer research for pediatric patients.",
					likes: 2,
				},
				{
					posterId: 27, // Corresponds to a participant's id
					comment: "Cardiology insights can benefit pediatric care.",
					likes: 0,
				},
				// Add more discussion objects here
			],
			likes: 2,
		},
		{
			title: "Cancer Research",
			description: "In the expansive realm of cancer research, this initiative is committed to unraveling the complexities of the disease and inspiring transformative breakthroughs. The research encompasses a comprehensive exploration of various cancer types, with a focus on understanding the underlying mechanisms, identifying novel therapeutic targets, and advancing personalized treatment strategies. By integrating multidisciplinary approaches and leveraging cutting-edge technologies, the goal is to contribute to the ongoing efforts in cancer prevention, early detection, and innovative treatments. This research seeks to be a beacon of progress in the fight against cancer, aiming to improve patient outcomes, enhance quality of life, and ultimately contribute to the global mission of conquering this formidable disease.",
			topics: ["Cancer"],
			clinician: {
				name: "Dr. Emily Johnson",
				role: "Surgeon at YY Hospital",
				id: 7,
			},
			participants: [
				{
					name: "Dr. Michael Johnson",
					role: "Neurologist at Brain Institute",
					id: 28,
				},
				{
					name: "Dr. Susan Davis",
					role: "Pharmaceutical Researcher at XYZ Pharma",
					id: 29,
				},
				{
					name: "Dr. Richard Wilson",
					role: "Bioinformatician at Genomics Lab",
					id: 30,
				},
			],
			discussion: [
				{
					posterId: 7, // Corresponds to the clinician's id
					comment: "Cancer research is critical for patient care.",
					likes: 0,
				},
				{
					posterId: 28, // Corresponds to a participant's id
					comment: "I specialize in neurological aspects of cancer.",
					likes: 1,
				},
				{
					posterId: 29, // Corresponds to a participant's id
					comment: "Pharmaceutical research plays a key role in cancer treatment.",
					likes: 0,
				},
				{
					posterId: 30, // Corresponds to a participant's id
					comment: "Bioinformatics aids in genomics research for cancer.",
					likes: 3,
				},
				// Add more discussion objects here
			],
			likes: 5,
		},
		{
			title: "Patient Care Improvement",
			description: "This initiative is dedicated to the continuous enhancement of patient care, focusing on innovative strategies to elevate healthcare experiences. The research aims to identify and implement transformative approaches that prioritize patient well-being, satisfaction, and overall quality of care. From streamlining communication channels to embracing technology-driven solutions, the goal is to foster a patient-centric healthcare environment. Through a combination of interdisciplinary collaboration, data-driven insights, and a commitment to excellence, this research seeks to contribute to the ongoing evolution of patient care, ensuring that individuals receive compassionate, efficient, and personalized healthcare services.",
			topics: ["Patient Care"],
			clinician: {
				name: "Dr. Michael Davis",
				role: "Pharmacist at ZZ Clinic",
				id: 8,
			},
			participants: [
				{
					name: "Dr. Julia Adams",
					role: "Psychiatrist at Mental Health Clinic",
					id: 31,
				},
			],
			discussion: [
				{
					posterId: 8, // Corresponds to the clinician's id
					comment: "Improving patient care is crucial for better healthcare services.",
					likes: 0,
				},
				{
					posterId: 31, // Corresponds to a participant's id
					comment: "Psychiatry can contribute to patient care enhancements.",
					likes: 0,
				},
				// Add more discussion objects here
			],
			likes: 1,
		},
		{
			title: "Cardiology Innovations",
			description: "This research initiative is dedicated to exploring and advancing cardiology innovations, with a focus on enhancing heart health through cutting-edge investigations. The aim is to delve into novel diagnostic tools, treatment modalities, and preventive strategies for cardiovascular conditions. By integrating technological advancements, molecular insights, and clinical approaches, this research seeks to contribute to the evolution of cardiology practices. The ultimate goal is to improve patient outcomes, optimize cardiovascular care, and inspire breakthroughs that address the complex challenges associated with heart health.",
			topics: ["Cardiology"],
			clinician: {
				name: "Dr. Sarah Wilson",
				role: "Research Scientist at ABC Research Institute",
				id: 9,
			},
			participants: [
				{
					name: "Dr. Daniel Robinson",
					role: "Environmental Scientist at Eco Institute",
					id: 32,
				},
			],
			discussion: [
				{
					posterId: 9, // Corresponds to the clinician's id
					comment: "Innovations in cardiology can save lives and improve heart health.",
					likes: 0,
				},
				{
					posterId: 32, // Corresponds to a participant's id
					comment: "Environmental science might offer unique perspectives for cardiology.",
					likes: 1,
				},
				// Add more discussion objects here
			],
			likes: 0,
		},
	];
	const [data, setData] = useState([...prevData]);

	const newsData = [
		{
			title: "Khoo Pilot Award",
			description:"Singhealth Duke NUS is awarding $30000 grant for clinical and translational research projects.",
			type: "Grant",
			link: "https://www.singhealthdukenus.com.sg/research/grant-calendar/khoo-pilot-award-(kpa)"
		},
		{
			title: "Singapore Healthcare Management 2023",
			description: "At this Congress, thought leaders from various areas of expertise, such as healthcare management and supply chain management to share their insights and best practices.",
			type: "Workshop",
			link: "https://www.singaporehealthcaremanagement.sg/Pages/home.aspx"
		},
		{
			title: "MOH Health Innovation Fund",
			description: "New MHI Fund to consolidate existing MOH Innovation funding streams (RIEP, HPF) under one grant framework to better drive national health innovation initiatives and alignment of innovation agenda",
			type: "Grant",
			link: "https://www.singhealthdukenus.com.sg/research/grant-calendar/moh-health-innovation-(mhi)-fund"
		},
	];

	useEffect(() => {
    if (location.state && location.state.newPostData) {
			console.log("New Post Data Received:", location.state.newPostData); // Log the new post data
      // Update the data state with the new post data
      setData((prevData) => [...prevData, location.state.newPostData]);
    }
  }, [location.state]);

	const filteredData =
		selectedTopic === "All"
			? data
			: data.filter((item) => {
		// Check if item.topics is an array or a single string
		const topicsArray = Array.isArray(item.topics)
			? item.topics
			: [item.topics];

		return topicsArray.includes(selectedTopic);
	});

	const navigate = useNavigate();
	function navigateToCreatePost() {
  	navigate('/createPost');
	}

	function CardList({ data }) {
		return (
			<Grid container spacing={2}>
				{data.map((item, index) => (
					// Use a conditional check to render the last item if showNewPost is true
					<Grid item xs={6} key={index}>
						<PostCard
							key={index}
							title={item.title}
							description={item.description}
							postOwner={item.clinician}
							participants={item.participants}
							discussion={item.discussion}
							likes={item.likes}
						/>
					</Grid>
				))}
			</Grid>
		);
	}

	function NewsList({data}) {
		return (
			<Grid>
				{data.map((item, index) => (
					// Use a conditional check to render the last item if showNewPost is true
					<Grid item xs={6} key={index}>
						<NewsCard
							key={index}
							title={item.title}
							description={item.description}
							type={item.type}
						/>
					</Grid>
				))}
			</Grid>
		)
	}

	return (
		<div style={{display: "flex"}}>
			<div className="content" style={{flex: 4}}>
				<div style={{display:"flex", flexDirection: "row", justifyContent: "space-between"}}>
					<h1>Discover Opportunities</h1>
					<Button
						type="submit"
						variant="contained"
						onClick={navigateToCreatePost}
						startIcon={<AddIcon />}
					>
						New Post
					</Button>
				</div>
				<Stack direction="row" spacing={1}>
					<ClickableChip label="All" onClick={() => handleChipPress("All")} />
					<ClickableChip
						label="Dentistry"
						onClick={() => handleChipPress("Dentistry")}
					/>
					<ClickableChip
						label="Pediatric"
						onClick={() => handleChipPress("Pediatric")}
					/>
					<ClickableChip
						label="Pediatric"
						onClick={() => handleChipPress("Cardiology")}
					/>
					<ClickableChip
						label="Cancer"
						onClick={() => handleChipPress("Cancer")}
					/>
					<ClickableChip
						label="Patient Care"
						onClick={() => handleChipPress("Patient Care")}
					/>
				</Stack>
				<CardList data={filteredData}/>
			</div>
			<div className="discussionMembers" style={{flex: 1}}>
				<h2>Latest News</h2>
				<NewsList data={newsData}/>
			</div>
		</div>
	);
}

export default Home;
