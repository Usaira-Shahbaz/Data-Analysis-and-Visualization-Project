
## Project Overview

Welcome to the **Data Analysis and Visualization Project - Phase 1** repository! This project is part of the coursework for **CS-352 Data Analysis and Visualization** at Namal University Mianwali. In this phase, we focus on preprocessing and preparing the **Brazilian E-Commerce Public Dataset by Olist** for sentiment analysis. The dataset is sourced from Kaggle and contains detailed information about orders, customers, products, payments, reviews, and sellers in the Brazilian e-commerce ecosystem.

The primary goal of Phase 1 is to merge multiple dataset files, clean the data, reorder columns for clarity, and translate a subset of customer review comments from Portuguese to English to enable sentiment analysis in subsequent phases.

---
## Team Members

- **Zaheer Abbas**
- **Usaira Shahbaz**
- **Ahmad Mustafa**


---

## Dataset

The dataset used in this project is the **Brazilian E-Commerce Public Dataset by Olist**, available on Kaggle:
- [Dataset Link](https://www.kaggle.com/datasets/olistbr/brazilian-ecommerce)
- It includes multiple CSV files such as orders, customers, order items, products, payments, reviews, and sellers, which are merged and processed in this phase.

---

## Project Structure

- **`notebooks/`**: Contains the Jupyter Notebook with the code for data preprocessing.
  - `Olist_Data_Preprocessing.ipynb`: The main notebook for merging, cleaning, and translating the dataset.
- **`data/`**: Directory for input and output data files (not tracked in Git due to size; see instructions below).
  - Input: Raw CSV files from the Olist dataset.
  - Output: Processed files like `final_merged_dataset.csv`, `cleaned_dataset.csv`, `14column.csv`, and `FINAL.csv`.
- **`README.md`**: This file.

---

## Objectives of Phase 1

1. **Data Merging**: Combine multiple Olist dataset files into a single DataFrame using appropriate keys (e.g., `order_id`, `customer_id`).
2. **Data Cleaning**: Remove unnecessary columns (e.g., indices 0, 1, 6, 7) to streamline the dataset.
3. **Column Reordering**: Organize the DataFrame into a logical sequence of 14 columns for easier analysis.
4. **Translation**: Translate a subset of `review_comment_message` (rows 1000–9999) from Portuguese to English using the `deep_translator` library.
5. **Output Generation**: Save the processed dataset as `FINAL.csv` for use in future phases.

---

## Tools and Libraries

- **Python 3.11**: Core programming language.
- **Pandas**: For data manipulation and merging.
- **deep_translator**: For translating review comments using Google Translate API.
- **Jupyter Notebook**: For interactive development and documentation.
- **Kaggle**: Platform hosting the dataset.

---

## Setup Instructions

### Prerequisites
- Python 3.11 installed.
- Jupyter Notebook or JupyterLab installed.
- Git installed for cloning the repository.

### Steps
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Usaira-Shahbaz/Data-Analysis-and-Visualization-Project.git
   cd Data-Analysis-and-Visualization-Project/Phase-1
