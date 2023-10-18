import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ClickableChip from "../components/ClickableChip";
import PostCard from "../components/PostCard";

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
				"I want to research lung cancer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in. Id aliquet risus feugiat in ante metus dictum at tempor. Bibendum at varius vel pharetra vel. Pretium viverra suspendisse potenti nullam ac tortor vitae. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Vel pharetra vel turpis nunc",
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
			]
		},
		{
			title: "Breast Cancer Research",
			description:
				"I want to research breast cancer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in. Id aliquet risus feugiat in ante metus dictum at tempor. Bibendum at varius vel pharetra vel. Pretium viverra suspendisse potenti nullam ac tortor vitae. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Vel pharetra vel turpis nunc ",
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
		},
		{
			title:
				"Using Machine Learning for dentistry applications",
			description:
				"I want to use ML to diagnose x ray scans. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in. Id aliquet risus feugiat in ante metus dictum at tempor. Bibendum at varius vel pharetra vel. Pretium viverra suspendisse potenti nullam ac tortor vitae. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Vel pharetra vel turpis nunc",
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
		},
		{
			title: "Using IOT devices to keep track of patients",
			description:
				"I want to keep track of patients using IOT devices. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in. Id aliquet risus feugiat in ante metus dictum at tempor. Bibendum at varius vel pharetra vel. Pretium viverra suspendisse potenti nullam ac tortor vitae. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Vel pharetra vel turpis nunc",
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
		},
		{
			title: "Dentistry Research",
			description: "I want to conduct research in the field of dentistry. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in. Id aliquet risus feugiat in ante metus dictum at tempor. Bibendum at varius vel pharetra vel. Pretium viverra suspendisse potenti nullam ac tortor vitae. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Vel pharetra vel turpis nunc",
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
		},
		{
			title: "Pediatric Medicine Studies",
			description: "I want to explore pediatric medicine and its advancements. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in. Id aliquet risus feugiat in ante metus dictum at tempor. Bibendum at varius vel pharetra vel. Pretium viverra suspendisse potenti nullam ac tortor vitae. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Vel pharetra vel turpis nunc",
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
		},
		{
			title: "Cancer Research",
			description: "I want to contribute to cancer research and treatment. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in. Id aliquet risus feugiat in ante metus dictum at tempor. Bibendum at varius vel pharetra vel. Pretium viverra suspendisse potenti nullam ac tortor vitae. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Vel pharetra vel turpis nunc",
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
		},
		{
			title: "Patient Care Improvement",
			description: "I aim to enhance patient care and healthcare services. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in. Id aliquet risus feugiat in ante metus dictum at tempor. Bibendum at varius vel pharetra vel. Pretium viverra suspendisse potenti nullam ac tortor vitae. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Vel pharetra vel turpis nunc",
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
		},
		{
			title: "Cardiology Innovations",
			description: "I want to focus on innovative solutions in cardiology. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in. Id aliquet risus feugiat in ante metus dictum at tempor. Bibendum at varius vel pharetra vel. Pretium viverra suspendisse potenti nullam ac tortor vitae. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Vel pharetra vel turpis nunc",
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
		},
	];
	const [data, setData] = useState([...prevData]);

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
						/>
					</Grid>
				))}
			</Grid>
		);
	}

	return (
		<div className="content">
			<div style={{display:"flex", flexDirection: "row", justifyContent: "space-between"}}>
				<h1>Discover Opportunities</h1>
				<Button
					type="submit"
					variant="contained"
					style={{ width: "10%" }}
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
	);
}

export default Home;
