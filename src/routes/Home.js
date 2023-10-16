import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import ClickableChip from "../components/ClickableChip";
import PostCard from "../components/PostCard";

function Home() {
	const [selectedTopic, setSelectedTopic] = useState("All"); // State to hold the selected chip

	const handleChipPress = (topic) => {
		console.info(`You clicked the ${topic} Chip.`);
		setSelectedTopic(topic); // Update the selected chip
	};

	const data = [
		{
			title: "Cancer Research",
			description:
				"I want to research lung cancer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in. Id aliquet risus feugiat in ante metus dictum at tempor. Bibendum at varius vel pharetra vel. Pretium viverra suspendisse potenti nullam ac tortor vitae. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Vel pharetra vel turpis nunc",
			topics: ["Cancer"],
      clinician: {
				name: "Dr. Lisa Miller",
        role: "Oncologist at City Medical Center"
			},
		},
		{
			title: "Breast Cancer Research",
			description:
				"I want to research breast cancer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in. Id aliquet risus feugiat in ante metus dictum at tempor. Bibendum at varius vel pharetra vel. Pretium viverra suspendisse potenti nullam ac tortor vitae. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Vel pharetra vel turpis nunc ",
			topics: ["Cancer"],
      clinician: {
				name: "Dr. Robert Davis",
        role: "Cardiologist at Heart Health Clinic"
			},
		},
		{
			title:
				"Using Machine Learning to diagnose X-ray scans for dentistry applications",
			description:
				"I want to use ML to diagnose x ray scans. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in. Id aliquet risus feugiat in ante metus dictum at tempor. Bibendum at varius vel pharetra vel. Pretium viverra suspendisse potenti nullam ac tortor vitae. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Vel pharetra vel turpis nunc",
			topics: ["Dentistry"],
      clinician: {
				name: "James Johnson",
        role: "Admin staff at XYZ Children's Hospital"
			},
		},
		{
			title: "Using IOT devices to keep track of patients",
			description:
				"I want to keep track of patients using IOT devices. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet purus gravida quis blandit turpis cursus in. Id aliquet risus feugiat in ante metus dictum at tempor. Bibendum at varius vel pharetra vel. Pretium viverra suspendisse potenti nullam ac tortor vitae. Eget gravida cum sociis natoque penatibus et magnis dis parturient. Vel pharetra vel turpis nunc",
			topics: ["Patient Care"],
      clinician: {
				name: "James Johnson",
        role: "Admin staff at XYZ Children's Hospital"
			},
		},
		{
			title: "Dentistry Research",
			description: "I want to conduct research in the field of dentistry.",
			topics: ["Dentistry"],
			clinician: {
				name: "Dr. John Smith",
				role: "Clinician at XX Hospital",
			},
		},
		{
			title: "Pediatric Medicine Studies",
			description: "I want to explore pediatric medicine and its advancements.",
			topics: ["Pediatric"],
			clinician: {
				name: "Dr. Emily Johnson",
				role: "Surgeon at YY Hospital",
			},
		},
		{
			title: "Cancer Research",
			description: "I want to contribute to cancer research and treatment.",
			topics: ["Cancer"],
			clinician: {
				name: "Dr. Emily Johnson",
				role: "Surgeon at YY Hospital",
			},
		},
		{
			title: "Patient Care Improvement",
			description: "I aim to enhance patient care and healthcare services.",
			topics: ["Patient Care"],
			clinician: {
				name: "Dr. Michael Davis",
				role: "Pharmacist at ZZ Clinic",
			},
		},
		{
			title: "Cardiology Innovations",
			description: "I want to focus on innovative solutions in cardiology.",
			topics: ["Cardiology"],
			clinician: {
				name: "Dr. Sarah Wilson",
				role: "Research Scientist at ABC Research Institute",
			},
		},
	];

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

	function CardList({ data }) {
		return (
			<Grid container spacing={2}>
				{data.map((item, index) => (
					<Grid item xs={6} key={index}>
						<PostCard
							key={index}
							title={item.title}
							description={item.description}
							postOwner={item.clinician || {}}
						/>
					</Grid>
				))}
			</Grid>
		);
	}

	return (
		<div className="content">
			<h1>Discover Opportunities</h1>
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
			<CardList data={filteredData} />
		</div>
	);
}

export default Home;
