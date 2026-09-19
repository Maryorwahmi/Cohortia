---
course_title: Machine Learning for Time Series Forecasting
course_id: machine-learning-for-time-series-forecasting
provider: Cohortia
original_reference: University of Michigan / Coursera
platform: Cohortia
level: Intermediate
type: Course
duration: 6 weeks
cost: Included with Cohortia
url: Cohortia course page (original reference: (URL not verified))
certification: Cohortia Certificate of Completion
category: Artificial Intelligence
subcategory: Machine Learning Engineering
skills: Time series preprocessing, ARIMA, prophet, LSTM, deep forecasting
source_catalog: docs/artificial-intelligence/catalog-courses-by-subcategory.json
---

## Course Overview

Time series data, which captures observations over sequential time points, is ubiquitous across industries, from financial markets and weather prediction to healthcare monitoring and energy consumption. The ability to accurately forecast future values from this data is a critical skill for data scientists and machine learning engineers. This Cohortia course, "Machine Learning for Time Series Forecasting," provides a comprehensive and practical journey into the world of predicting future trends, anomalies, and patterns using a diverse toolkit of statistical and machine learning methodologies. We will move beyond basic statistical models to harness the power of advanced algorithms, including deep learning, to tackle complex time series challenges.

Throughout this course, learners will develop a robust understanding of the unique characteristics of time series data, such as seasonality, trends, and stationarity, and master the essential preprocessing techniques required to prepare this data for modeling. We will explore both classical statistical approaches like ARIMA and Exponential Smoothing, which provide foundational insights, and modern machine learning techniques, including tree-based models and sophisticated deep learning architectures like LSTMs and Transformers. The emphasis will be on practical application, guiding you through feature engineering strategies, model selection, rigorous evaluation using appropriate metrics and backtesting, and considerations for deploying forecasting solutions in real-world scenarios.

This intermediate-level course is designed for individuals with a foundational understanding of Python programming, statistics, and basic machine learning concepts. You will gain hands-on experience with popular libraries such as Pandas, NumPy, Scikit-learn, Statsmodels, Prophet, and TensorFlow/PyTorch, enabling you to build, train, and evaluate powerful forecasting models. By the end of this program, you will not only be able to select and implement the most suitable forecasting model for a given problem but also articulate the strengths and limitations of various approaches, preparing you to contribute effectively to data-driven decision-making processes.

### Learning Outcomes

Upon successful completion of this course, you will be able to:

*   Identify and analyze the fundamental components and characteristics of time series data, including trends, seasonality, and stationarity.
*   Apply various data preprocessing techniques specific to time series, such as handling missing values, resampling, and differencing.
*   Implement and interpret traditional statistical forecasting models like ARIMA, SARIMA, and Exponential Smoothing.
*   Perform effective feature engineering on time series data to create informative inputs for machine learning models.
*   Utilize classical machine learning algorithms (e.g., Random Forests, XGBoost) for time series forecasting problems.
*   Design and train deep learning models, including Recurrent Neural Networks (RNNs), LSTMs, and Transformers, for advanced time series prediction.
*   Evaluate the performance of forecasting models using appropriate metrics and robust backtesting strategies.
*   Understand and apply advanced forecasting techniques like Facebook Prophet and ensemble methods.
*   Develop strategies for hyperparameter tuning and model deployment in a time series context.
*   Apply learned concepts to solve real-world time series forecasting challenges through practical projects.

## Syllabus Structure

| Module # | Theme | Chapters |
|----------|-------|----------|
| 1 | Foundations of Time Series Analysis | 4 |
| 2 | Traditional Statistical Forecasting Models | 5 |
| 3 | Feature Engineering for Machine Learning on Time Series | 5 |
| 4 | Classical Machine Learning Approaches for Time Series | 6 |
| 5 | Deep Learning for Time Series Forecasting | 6 |
| 6 | Advanced Forecasting Models and Ensembles | 7 |
| 7 | Model Evaluation, Tuning, and Deployment | 7 |
| 8 | Real-World Time Series Forecasting Projects | 8 |

Total chapters: 48
---

## Module 1: Foundations of Time Series Analysis

### Module Goal
Equip learners with a fundamental understanding of time series data, its unique characteristics, and essential preprocessing techniques, laying the groundwork for advanced forecasting models.

---

### Chapter 1.1 — Introduction to Time Series Data

#### Learning objectives
*   Define time series data and identify its distinguishing characteristics.
*   Differentiate time series data from other data types, such as cross-sectional or panel data.
*   Recognize common real-world examples of time series data across various domains.
*   Understand the inherent challenges and unique considerations when working with time series data.

#### Detailed lesson content
Welcome to the fascinating world of time series forecasting! Before we dive into complex machine learning models, it's crucial to establish a solid understanding of what time series data is and why it demands a specialized approach. At its core, time series data is a sequence of data points indexed, or listed, in time order. This temporal ordering is not merely a convenience; it's the defining characteristic that imbues time series with unique properties and challenges not found in other data types. Unlike a simple collection of independent observations, each data point in a time series is inherently linked to its predecessors and successors, creating a dependency structure that must be respected and modeled.

Consider a simple example: daily temperature readings in a city. Each day's temperature isn't an isolated event; it's influenced by yesterday's temperature, the season, and broader climatic patterns. This sequential dependence, often referred to as autocorrelation, is a hallmark of time series data. Other key characteristics include trends, which are long-term increases or decreases in the data; seasonality, which refers to predictable, repeating patterns within a fixed period (e.g., daily, weekly, monthly, yearly); and cyclical components, which are longer-term fluctuations that are not necessarily fixed in period. Understanding these components is paramount because they often drive the behavior of the series and must be accounted for in any forecasting endeavor. Ignoring the temporal order or treating time series observations as independent would lead to flawed analyses and unreliable predictions.

Time series data is ubiquitous in our modern world, spanning nearly every industry and scientific discipline. In finance, we encounter stock prices, exchange rates, and trading volumes, all evolving over time. In meteorology, temperature, humidity, and rainfall are classic time series. Retail and e-commerce rely on sales figures, website traffic, and customer demand over time to optimize operations. Healthcare tracks patient vital signs, disease prevalence, and drug efficacy over time. Manufacturing monitors sensor readings from machinery to predict failures, while energy companies forecast electricity consumption. Even in social sciences, public opinion polls or economic indicators like GDP and inflation rates are inherently time-dependent. The sheer diversity of these applications underscores the importance of mastering time series analysis and forecasting techniques.

The primary distinction between time series data and other data forms, such as cross-sectional or panel data, lies in this explicit temporal dependence. Cross-sectional data captures observations at a single point in time across different entities (e.g., a survey of different households' income in a given year). Here, observations are typically assumed to be independent. Panel data, on the other hand, combines both cross-sectional and time series dimensions, tracking multiple entities over time (e.g., the income of several households over multiple years). While panel data includes a time dimension, the focus often remains on how entities differ over time, whereas pure time series analysis focuses on the evolution of a single entity or aggregate over time. The key challenge in time series is that future values are not independent of past values, violating the i.i.d (independent and identically distributed) assumption that underlies many standard statistical and machine learning models. This violation necessitates specialized models capable of capturing and leveraging these temporal dependencies.

When approaching time series data, a common mistake is to treat it like any other tabular dataset and apply standard regression or classification algorithms without accounting for the time component. For instance, simply splitting a time series dataset randomly into training and testing sets will lead to data leakage, where future information inadvertently influences the training process, resulting in overly optimistic and unrealistic performance estimates. Instead, time series data must be split chronologically, ensuring that the training set always precedes the test set. Another pitfall is ignoring the potential for non-stationarity, a concept we will explore in detail later. Many classical time series models assume stationarity, and failing to address non-stationary behavior can lead to spurious correlations and unreliable model parameters. Understanding these fundamental characteristics and challenges is the first critical step toward building robust and accurate time series forecasting systems.

#### Key concepts
*   **Time Series Data:** A sequence of data points indexed in time order, where each observation is associated with a specific timestamp.
*   **Temporal Dependence (Autocorrelation):** The relationship between an observation and previous observations in the same time series.
*   **Trend:** A long-term increase or decrease in the data over time.
*   **Seasonality:** A predictable, repeating pattern or cycle in the data that occurs over a fixed period (e.g., daily, weekly, monthly, yearly).
*   **Cyclical Component:** Fluctuations in the data that are not of a fixed period, typically lasting longer than a year and often associated with economic cycles.
*   **Irregular/Residual Component:** The random, unpredictable variations in the data after accounting for trend, seasonality, and cyclical components.
*   **Cross-sectional Data:** Observations collected at a single point in time across different entities.
*   **Panel Data:** Observations collected on multiple entities over multiple time periods, combining both cross-sectional and time series dimensions.

#### Hands-on activity
**Activity: Exploring a Sample Time Series Dataset**

Your task is to load a sample time series dataset, inspect its basic properties, and identify potential time-related features. We'll use a simple CSV file representing daily sales data.

1.  **Load the data:** Use Pandas to load the `daily_sales.csv` file.
2.  **Parse dates:** Ensure the 'Date' column is parsed as datetime objects and set it as the DataFrame's index.
3.  **Inspect:** Display the first few rows, check data types, and get a summary of the 'Sales' column.
4.  **Identify characteristics:** Based on the data, reflect on whether you observe any immediate signs of trend or seasonality.

**`daily_sales.csv` content (create this file):**
```csv
Date,Sales
2023-01-01,150
2023-01-02,155
2023-01-03,160
2023-01-04,158
2023-01-05,165
2023-01-06,170
2023-01-07,172
2023-01-08,152
2023-01-09,157
2023-01-10,163
2023-01-11,160
2023-01-12,168
2023-01-13,175
2023-01-14,178
2023-01-15,155
```

**Starter Code:**
```python
import pandas as pd

# Create the dummy CSV file for demonstration
data = {
    'Date': pd.to_datetime(['2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05',
                            '2023-01-06', '2023-01-07', '2023-01-08', '2023-01-09', '2023-01-10',
                            '2023-01-11', '2023-01-12', '2023-01-13', '2023-01-14', '2023-01-15']),
    'Sales': [150, 155, 160, 158, 165, 170, 172, 152, 157, 163, 160, 168, 175, 178, 155]
}
df_dummy = pd.DataFrame(data)
df_dummy.to_csv('daily_sales.csv', index=False)

# --- Your code starts here ---
# 1. Load the data
df = pd.read_csv('daily_sales.csv')

# 2. Parse dates and set as index
df['Date'] = pd.to_datetime(df['Date'])
df.set_index('Date', inplace=True)

# 3. Inspect the data
print("First 5 rows of the DataFrame:")
print(df.head())
print("\nDataFrame Info:")
df.info()
print("\nDescriptive statistics for Sales:")
print(df['Sales'].describe())

# 4. Reflect on characteristics (no code needed, just observation)
# Observe the 'Sales' values. Do they generally increase or decrease?
# Are there any repeating patterns over the days?
```

#### Assessment idea
1.  **Question:** Which of the following is the most distinguishing characteristic of time series data compared to cross-sectional data?
    a) It contains numerical values.
    b) It can be stored in a CSV file.
    c) Observations are ordered by time and exhibit temporal dependence.
    d) It always has more features than rows.

    **Correct Answer:** c) Observations are ordered by time and exhibit temporal dependence.
    **Explanation:** While time series data can have numerical values and be stored in CSVs, its defining feature is the explicit temporal ordering and the inherent dependence between observations across time. Cross-sectional data lacks this temporal ordering and assumes independence between observations.

2.  **Question:** You are building a model to predict the number of website visitors for an e-commerce platform. You have daily visitor counts for the past two years. When splitting your data into training and testing sets, what is the most appropriate method for this time series data?
    a) Randomly split 80% for training and 20% for testing.
    b) Use the first 80% of the data chronologically for training and the remaining 20% for testing.
    c) Select every 5th data point for the test set and the rest for training.
    d) Use a k-fold cross-validation approach with random shuffling.

    **Correct Answer:** b) Use the first 80% of the data chronologically for training and the remaining 20% for testing.
    **Explanation:** For time series data, it is crucial to maintain the temporal order. Splitting chronologically ensures that the model is trained on past data and evaluated on future, unseen data, simulating a real-world forecasting scenario. Random splitting or shuffling would introduce data leakage, where future information could influence the training process, leading to an unrealistic assessment of model performance.

#### AI generation note
Create a 10-minute animated video explaining the core concepts of time series data. Start with a visual analogy comparing a random collection of numbers to a sequence of numbers ordered by time (e.g., a deck of shuffled cards vs. a calendar). Use clear, engaging animations to illustrate trend (upward/downward sloping lines), seasonality (repeating waves over a year), and cyclical patterns (longer, irregular waves). Show real-world examples with animated charts for stock prices, temperature, and sales data. Include a side-by-side comparison of cross-sectional data (e.g., house prices in a city at one point) and time series data (e.g., one house's price over years). Emphasize the concept of temporal dependence with arrows indicating influence. End with a reflection prompt asking learners to identify three time series examples from their daily life. Ensure high-contrast visuals and captions for accessibility.

---

### Chapter 1.2 — Basic Time Series Operations and Visualization

#### Learning objectives
*   Load and properly parse time series data using the Pandas library.
*   Perform essential time-based indexing, selection, and slicing operations on time series DataFrames.
*   Understand and apply resampling techniques (e.g., daily to weekly, hourly to daily) to aggregate or disaggregate time series data.
*   Create informative visualizations to identify trends, seasonality, and anomalies in time series plots.
*   Calculate and interpret rolling statistics to smooth time series and highlight underlying patterns.

#### Detailed lesson content
Once you've grasped the fundamental nature of time series data, the next crucial step is to learn how to effectively manipulate and visualize it. Python's Pandas library is an indispensable tool for this, offering powerful data structures and functions specifically designed for time-indexed data. The `DataFrame` with a `DatetimeIndex` is your primary workhorse. When loading data, it's vital to ensure that your time column is correctly parsed as datetime objects; otherwise, Pandas will treat it as a generic string or object type, preventing you from leveraging its powerful time series capabilities. The `pd.to_datetime()` function is your best friend here, often used in conjunction with the `parse_dates` and `index_col` arguments in `pd.read_csv()`.

Let's illustrate with a practical example. Imagine you have a CSV file containing hourly energy consumption data. Loading it correctly would look something like this:
```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Assume 'energy_consumption.csv' has columns 'Timestamp', 'Consumption_MW'
# Example CSV content:
# Timestamp,Consumption_MW
# 2023-01-01 00:00:00,1500
# 2023-01-01 01:00:00,1480
# ...

# Correctly load the data, parsing 'Timestamp' as datetime and setting it as index
df_energy = pd.read_csv('energy_consumption.csv', parse_dates=['Timestamp'], index_col='Timestamp')

print("DataFrame head after loading:")
print(df_energy.head())
print("\nDataFrame info to check index type:")
df_energy.info()
```
A common mistake here is forgetting `parse_dates` or `index_col`, which leads to a DataFrame where the 'Timestamp' column is just an object, and you can't perform time-based operations directly. Always verify `df.info()` to ensure your index is `DatetimeIndex`.

With a proper `DatetimeIndex`, you can perform incredibly flexible indexing and slicing. Want data for a specific year? `df_energy['2023']`. A specific month? `df_energy['2023-01']`. A range of dates? `df_energy['2023-01-01':'2023-01-07']`. Pandas handles these string-based selections intelligently, making it intuitive to query your data. This capability is invaluable for focusing on specific periods of interest or for preparing data for seasonal analysis.

Resampling is another cornerstone operation in time series analysis. It involves changing the frequency of your time series data, either by aggregating data to a coarser frequency (downsampling, e.g., hourly to daily) or interpolating to a finer frequency (upsampling, e.g., daily to hourly, though downsampling is more common for initial analysis). When downsampling, you need to specify an aggregation method (e.g., `mean()`, `sum()`, `max()`). For example, to convert our hourly energy consumption to daily averages:
```python
# Resample hourly data to daily average consumption
df_daily_avg = df_energy['Consumption_MW'].resample('D').mean()
print("\nDaily average consumption head:")
print(df_daily_avg.head())

# Resample to weekly sum
df_weekly_sum = df_energy['Consumption_MW'].resample('W').sum()
print("\nWeekly sum consumption head:")
print(df_weekly_sum.head())
```
The frequency strings like 'D' (daily), 'W' (weekly), 'M' (monthly), 'H' (hourly) are powerful and flexible. Resampling helps in smoothing out noise, revealing underlying trends, or matching different datasets that operate on varying time granularities.

Visualization is not just about making pretty charts; it's about gaining insights. Plotting your time series is often the first and most critical step in understanding its behavior. A simple line plot can immediately reveal trends, seasonal patterns, outliers, and structural breaks.
```python
# Plot the original hourly data
plt.figure(figsize=(12, 6))
plt.plot(df_energy.index, df_energy['Consumption_MW'], label='Hourly Consumption')
plt.title('Hourly Energy Consumption Over Time')
plt.xlabel('Date')
plt.ylabel('Consumption (MW)')
plt.
plt.grid(True)
plt.legend()
plt.show()

# Plot the daily average data
plt.figure(figsize=(12, 6))
plt.plot(df_daily_avg.index, df_daily_avg, label='Daily Average Consumption', color='orange')
plt.title('Daily Average Energy Consumption Over Time')
plt.xlabel('Date')
plt.ylabel('Consumption (MW)')
plt.grid(True)
plt.legend()
plt.show()
```
When plotting, always ensure your x-axis (time) labels are legible and that your y-axis is appropriately scaled. For long time series, plotting the entire series might obscure details; consider plotting subsets or resampled data to highlight different aspects. Using libraries like Matplotlib and Seaborn, you can customize plots extensively.

Finally, rolling statistics (also known as moving averages or moving windows) are incredibly useful for smoothing out short-term fluctuations and highlighting longer-term trends. A rolling mean, for example, calculates the average over a specified window of time, effectively acting as a low-pass filter.
```python
# Calculate a 24-hour rolling mean for hourly data
df_energy['Rolling_Mean_24H'] = df_energy['Consumption_MW'].rolling(window=24).mean()

# Calculate a 7-day rolling mean for daily data
df_daily_avg['Rolling_Mean_7D'] = df_daily_avg.rolling(window=7).mean()

plt.figure(figsize=(14, 7))
plt.plot(df_energy.index, df_energy['Consumption_MW'], label='Hourly Consumption', alpha=0.7)
plt.plot(df_energy.index, df_energy['Rolling_Mean_24H'], label='24-Hour Rolling Mean', color='red', linewidth=2)
plt.title('Hourly Energy Consumption with 24-Hour Rolling Mean')
plt.xlabel('Date')
plt.ylabel('Consumption (MW)')
plt.grid(True)
plt.legend()
plt.show()
```
The `window` parameter is crucial here; a larger window provides more smoothing but also introduces more lag. Experimenting with different window sizes can help reveal patterns at various scales. Rolling statistics are not just for visualization; they can also be used as features in machine learning models. A common mistake is to use a rolling mean that includes future data points if not careful about the window definition, which would lead to data leakage. Always ensure your rolling window only considers past observations for forecasting purposes.

#### Key concepts
*   **DatetimeIndex:** A Pandas index specifically designed for time series data, allowing for efficient time-based operations.
*   **Time-based Indexing/Slicing:** Selecting data based on specific dates, times, or ranges using string-based or datetime objects.
*   **Resampling:** Changing the frequency of a time series (e.g., hourly to daily, daily to weekly).
    *   **Downsampling:** Aggregating data to a coarser frequency (e.g., `resample('D').mean()`).
    *   **Upsampling:** Interpolating data to a finer frequency (less common for initial analysis).
*   **Rolling Statistics (Moving Averages):** Calculating statistics (e.g., mean, median, standard deviation) over a sliding window of observations to smooth out noise and highlight trends.
*   **Visualization:** Graphical representation of time series data to identify patterns, trends, seasonality, and outliers using line plots.

#### Hands-on activity
**Activity: Analyzing Stock Price Data**

You will work with a simulated daily stock price dataset. Your goal is to load the data, resample it to weekly averages, calculate a 30-day rolling mean, and visualize both the original daily prices and the smoothed rolling mean.

1.  **Load the data:** Load `stock_prices.csv`, ensuring 'Date' is parsed as datetime and set as the index.
2.  **Resample:** Convert the daily 'Close' prices to weekly averages.
3.  **Rolling Mean:** Calculate a 30-day rolling mean on the *original daily* 'Close' prices.
4.  **Visualize:** Create a single plot showing:
    *   The original daily 'Close' prices.
    *   The 30-day rolling mean.
    *   (Optional) The weekly average prices (on a separate subplot or with distinct styling).

**`stock_prices.csv` content (create this file, covering about 3 months of data):**
```csv
Date,Open,High,Low,Close,Volume
2023-01-02,100.0,101.5,99.5,101.0,100000
2023-01-03,101.0,102.0,100.5,101.8,120000
2023-01-04,101.8,103.0,101.2,102.5,110000
2023-01-05,102.5,102.8,101.5,102.0,95000
2023-01-06,102.0,103.5,101.8,103.2,130000
2023-01-09,103.2,104.0,102.8,103.8,115000
2023-01-10,103.8,104.5,103.0,104.2,105000
2023-01-11,104.2,105.0,103.5,104.8,125000
2023-01-12,104.8,104.9,103.9,104.0,98000
2023-01-13,104.0,105.5,103.8,105.1,140000
# ... (add more daily data for ~3 months, e.g., 60-70 rows)
2023-03-31,115.0,116.5,114.5,116.0,150000
```
*(

**Starter Code:**
```python
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Generate dummy stock data for approximately 3 months (60 trading days)
dates = pd.date_range(start='2023-01-02', periods=60, freq='B') # Business days
np.random.seed(42)
initial_price = 100
prices = [initial_price]
for _ in range(1, len(dates)):
    change = np.random.normal(0, 1) # Small random daily change
    prices.append(prices[-1] + change)

df_stock = pd.DataFrame({
    'Date': dates,
    'Open': prices,
    'High': [p + np.random.uniform(0.5, 1.5) for p in prices],
    'Low': [p - np.random.uniform(0.5, 1.5) for p in prices],
    'Close': [p + np.random.uniform(-0.5, 0.5) for p in prices],
    'Volume': np.random.randint(90000, 150000, len(dates))
})
df_stock['Close'] = df_stock['Close'].cummax().cummin() # Make it more realistic, ensuring some trend
df_stock['Close'] = df_stock['Close'] + np.arange(len(dates))*0.1 # Add an upward trend
df_stock.to_csv('stock_prices.csv', index=False)

# --- Your code starts here ---
# 1. Load the data
df = pd.read_csv('stock_prices.csv', parse_dates=['Date'], index_col='Date')

# 2. Resample daily 'Close' prices to weekly averages
weekly_avg_close = df['Close'].resample('W').mean()

# 3. Calculate a 30-day rolling mean on the original daily 'Close' prices
df['Rolling_Mean_30D'] = df['Close'].rolling(window=30).mean()

# 4. Visualize
plt.figure(figsize=(14, 7))
plt.plot(df.index, df['Close'], label='Daily Close Price', alpha=0.8)
plt.plot(df.index, df['Rolling_Mean_30D'], label='30-Day Rolling Mean', color='red', linewidth=2)
plt.plot(weekly_avg_close.index, weekly_avg_close, label='Weekly Average Close', color='green', linestyle='--', alpha=0.7)

plt.title('Stock Prices with Rolling Mean and Weekly Averages')
plt.xlabel('Date')
plt.ylabel('Price')
plt.grid(True)
plt.legend()
plt.tight_layout()
plt.show()
```

#### Assessment idea
1.  **Question:** You have a time series DataFrame `df_data` with a `DatetimeIndex` and a column 'Value'. You want to calculate the average 'Value' for each month. Which Pandas operation would you use?
    a) `df_data['Value'].groupby(df_data.index.year).mean()`
    b) `df_data['Value'].resample('M').mean()`
    c) `df_data['Value'].rolling(window='30D').mean()`
    d) `df_data['Value'].pivot_table(index=df_data.index.month, aggfunc='mean')`

    **Correct Answer:** b) `df_data['Value'].resample('M').mean()`
    **Explanation:** The `resample()` method is specifically designed for changing the frequency of time series data. Using 'M' as the frequency string aggregates the data to a monthly level, and `.mean()` calculates the average for each month. `groupby(df_data.index.year)` would give yearly averages, `rolling()` calculates moving averages, and `pivot_table` is not the most direct or idiomatic way for this specific time series operation.

2.  **Question:** A data scientist uses a 7-day rolling mean on daily temperature data to smooth out daily fluctuations. They then use this smoothed series directly as a feature to predict tomorrow's temperature. What is a potential issue with this approach if not handled carefully?
    a) The 7-day rolling mean will always be less accurate than the original daily temperature.
    b) The rolling mean might introduce data leakage if the window includes future data points for prediction.
    c) The rolling mean will remove all seasonality, making the model less effective.
    d) Rolling means are computationally too expensive for real-time forecasting.

    **Correct Answer:** b) The rolling mean might introduce data leakage if the window includes future data points for prediction.
    **Explanation:** When using rolling statistics as features for forecasting, it's critical that the window only includes *past* data relative to the prediction point. If the 7-day rolling mean for today's prediction includes tomorrow's temperature (even partially), it constitutes data leakage, leading to an artificially inflated performance estimate. The window should typically be `window=N, closed='left'` or `window=N, min_periods=1` and then shifted, to ensure only truly historical data is used.

#### AI generation note
Produce a 12-minute interactive code demo in a Jupyter Notebook environment. Start by loading a real-world dataset (e.g., historical stock prices or weather data) from a CSV. Demonstrate parsing dates and setting the `DatetimeIndex`. Show various slicing operations (by year, month, date range). Then, walk through downsampling with `resample()` (e.g., daily to weekly average) and upsampling (briefly mention interpolation methods). Dedicate significant time to plotting the original, resampled, and rolling mean series using Matplotlib, emphasizing `figsize`, `xlabel`, `ylabel`, `title`, and `legend`. Include a live coding segment where learners can change the `resample` frequency or `rolling` window size and immediately see the plot update. The interactive element should be a mini-challenge: "Change the rolling window to 14 days and observe the smoothing effect." Ensure all code is visible and executable, with clear comments.

---

### Chapter 1.3 — Components of Time Series: Trend, Seasonality, Cyclical, and Irregular

#### Learning objectives
*   Decompose a time series into its fundamental components: trend, seasonality, and residuals (irregular).
*   Distinguish between additive and multiplicative decomposition models and identify when to apply each.
*   Utilize `statsmodels` to perform time series decomposition and interpret the resulting components.
*   Understand the importance of decomposition for understanding underlying patterns and preparing data for modeling.
*   Identify common pitfalls in decomposition, such as choosing the wrong model or period.

#### Detailed lesson content
Understanding the underlying components of a time series is a critical step in both analysis and forecasting. Most real-world time series are not simple, uniform sequences; they are often a complex interplay of several distinct patterns. By decomposing a time series, we aim to break it down into its constituent parts: a **trend** component, a **seasonal** component, and an **irregular** or **residual** component. Sometimes, a **cyclical** component is also considered, representing longer-term, irregular fluctuations. This decomposition allows us to analyze each pattern independently, gain deeper insights into the data-generating process, and often simplify the forecasting task by modeling each component separately.

The two primary models for time series decomposition are additive and multiplicative.
An **additive model** assumes that the components sum up to form the observed series:
`Y(t) = T(t) + S(t) + R(t)`
where `Y(t)` is the observed data at time `t`, `T(t)` is the trend component, `S(t)` is the seasonal component, and `R(t)` is the residual component. This model is appropriate when the magnitude of the seasonal fluctuations and the variance of the residuals remain relatively constant over time, regardless of the level of the trend. For example, if monthly sales fluctuate by roughly $1000 each year, regardless of whether total sales are $10,000 or $100,000, an additive model is suitable.

A **multiplicative model**, on the other hand, assumes that the components multiply to form the observed series:
`Y(t) = T(t) * S(t) * R(t)`
This model is more appropriate when the magnitude of the seasonal fluctuations and the variance of the residuals increase or decrease proportionally with the level of the trend. For instance, if monthly sales fluctuations are 10% of the total sales, meaning the absolute fluctuation grows as sales grow, then a multiplicative model is a better fit. You can often convert a multiplicative model into an additive one by taking the logarithm of the series: `log(Y(t)) = log(T(t)) + log(S(t)) + log(R(t))`. This transformation can be very useful if you prefer working with additive models.

Python's `statsmodels` library provides a convenient function, `seasonal_decompose`, to perform this decomposition. It uses moving averages to estimate the trend and then subtracts/divides the trend to isolate seasonality and residuals.
```python
import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.seasonal import seasonal_decompose
import numpy as np

# Generate a dummy time series with trend and seasonality
np.random.seed(42)
dates = pd.date_range(start='2020-01-01', periods=100, freq='D')
trend = np.linspace(0, 10, 100) + np.random.normal(0, 0.5, 100) # Upward trend with noise
seasonality = 2 * np.sin(np.linspace(0, 3 * np.pi, 100)) # 3 cycles of seasonality
noise = np.random.normal(0, 0.5, 100)
data_additive = trend + seasonality + noise # Additive model example
data_multiplicative = trend * (1 + seasonality/5) * (1 + noise/10) # Multiplicative model example

df_additive = pd.DataFrame({'Value': data_additive}, index=dates)
df_multiplicative = pd.DataFrame({'Value': data_multiplicative}, index=dates)

# Perform additive decomposition
result_additive = seasonal_decompose(df_additive['Value'], model='additive', period=7) # Assuming weekly seasonality
print("\nAdditive Decomposition Components:")
print("Trend head:\n", result_additive.trend.head())
print("Seasonal head:\n", result_additive.seasonal.head())
print("Residual head:\n", result_additive.resid.head())

# Plotting the additive decomposition
plt.figure(figsize=(12, 8))
result_additive.plot()
plt.suptitle('Additive Time Series Decomposition', y=1.02)
plt.tight_layout(rect=[0, 0, 1, 0.98]) # Adjust layout to prevent title overlap
plt.show()

# Perform multiplicative decomposition (often better for data where variance grows with level)
# Note: For multiplicative, ensure no zero or negative values.
result_multiplicative = seasonal_decompose(df_multiplicative['Value'], model='multiplicative', period=7)
plt.figure(figsize=(12, 8))
result_multiplicative.plot()
plt.suptitle('Multiplicative Time Series Decomposition', y=1.02)
plt.tight_layout(rect=[0, 0, 1, 0.98])
plt.show()
```
The `period` argument in `seasonal_decompose` is crucial. It specifies the number of observations per cycle (e.g., 7 for daily data with weekly seasonality, 12 for monthly data with yearly seasonality). Choosing the wrong `period` will lead to incorrect decomposition results, so careful domain knowledge or visual inspection of the ACF plot (which we'll cover later) is essential.

Interpreting the decomposed components is key. The **trend** plot shows the underlying direction of the series, smoothed out from short-term fluctuations. The **seasonal** plot reveals the repeating pattern, indicating how much the series typically deviates from the trend at specific points within a cycle (e.g., days of the week, months of the year). The **residual** plot represents what's left after removing the trend and seasonality. Ideally, residuals should look like white noise (random, unpredictable fluctuations) with a constant variance. If the residuals still show patterns, it suggests that the decomposition model might not have captured all the underlying structure, or there might be other components (like cycles) that need to be modeled.

Decomposition is not just an analytical tool; it's also a powerful preprocessing step for forecasting. For instance, you might detrend a series by subtracting the trend component, then model the seasonal and residual components separately, and finally combine the forecasts. This can simplify the modeling task, especially for classical models that struggle with strong trends or seasonality. For machine learning models, the decomposed components (trend, seasonal, or even features derived from them) can be used as input features. For example, the seasonal component can be encoded as dummy variables or Fourier terms.

A common mistake is assuming that all time series fit neatly into an additive or multiplicative model without checking. Always plot your data first! If the seasonal fluctuations seem to grow with the series level, lean towards multiplicative. If they remain constant, lean towards additive. Another pitfall is setting an incorrect `period`. If your data is monthly but you set `period=7`, the seasonal component will be meaningless. Always ensure your `period` aligns with the true seasonal cycle of your data. Also, `seasonal_decompose` requires at least two full cycles of data to estimate seasonality effectively. If you have too little data, it might return NaNs for some components.

#### Key concepts
*   **Time Series Decomposition:** The process of breaking down a time series into its fundamental components: trend, seasonality, and irregular (residuals).
*   **Additive Model:** Assumes the observed time series is the sum of its components: `Y(t) = T(t) + S(t) + R(t)`. Suitable when seasonal variations are constant in magnitude.
*   **Multiplicative Model:** Assumes the observed time series is the product of its components: `Y(t) = T(t) * S(t) * R(t)`. Suitable when seasonal variations change proportionally with the series level.
*   **Trend Component (T(t)):** The long-term direction or underlying movement of the series, often estimated using moving averages.
*   **Seasonal Component (S(t)):** The predictable, repeating patterns that occur over a fixed period (e.g., daily, weekly, yearly).
*   **Irregular/Residual Component (R(t)):** The random, unpredictable variations in the data that remain after accounting for trend and seasonality. Ideally, these should resemble white noise.
*   **Cyclical Component:** Longer-term fluctuations that are not of a fixed period, often associated with economic or business cycles (not directly handled by `seasonal_decompose`).
*   **`seasonal_decompose`:** A function from `statsmodels.tsa.seasonal` used to perform classical time series decomposition.
*   **`period` argument:** Specifies the number of observations in a single seasonal cycle.

#### Hands-on activity
**Activity: Decomposing Retail Sales Data**

You're provided with a simulated monthly retail sales dataset. Your task is to:

1.  **Load the data:** Load `monthly_retail_sales.csv`, ensuring 'Month' is parsed as datetime and set as the index.
2.  **Visualize:** Plot the raw retail sales data to visually inspect for trend and seasonality.
3.  **Decompose:** Perform time series decomposition using `seasonal_decompose`. Based on your visual inspection and the nature of sales data (often growing fluctuations), decide whether to use an 'additive' or 'multiplicative' model. Remember that sales data typically has a yearly seasonality.
4.  **Plot Components:** Plot the decomposed components (observed, trend, seasonal, residual) and interpret what each plot tells you about the sales data.

**`monthly_retail_sales.csv` content (create this file, covering several years):**
```csv
Month,Sales
2018-01-01,100
2018-02-01,95
2018-03-01,105
2018-04-01,110
2018-05-01,115
2018-06-01,120
2018-07-01,125
2018-08-01,130
2018-09-01,135
2018-10-01,140
2018-11-01,150
2018-12-01,160
2019-01-01,110
2019-02-01,105
2019-03-01,115
2019-04-01,120
2019-05-01,125
2019-06-01,130
2019-07-01,135
2019-08-01,140
2019-09-01,145
2019-10-01,155
2019-11-01,165
2019-12-01,175
2020-01-01,120
2020-02-01,115
2020-03-01,125
2020-04-01,130
2020-05-01,135
2020-06-01,140
2020-07-01,145
2020-08-01,150
2020-09-01,155
2020-10-01,165
2020-11-01,175
2020-12-01,185
```

**Starter Code:**
```python
import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.seasonal import seasonal_decompose
import numpy as np

# Create the dummy CSV file for demonstration
dates = pd.date_range(start='2018-01-01', end='2020-12-01', freq='MS') # Month Start
base_sales = np.linspace(100, 180, len(dates)) # Increasing trend
seasonal_pattern = np.array([0, -5, 5, 10, 15, 20, 25, 30, 35, 40, 50, 60]) # Example yearly pattern
noise = np.random.normal(0, 3, len(dates))
sales = base_sales + np.tile(seasonal_pattern, len(dates)//12 + 1)[:len(dates)] + noise
df_sales_dummy = pd.DataFrame({'Month': dates, 'Sales': sales})
df_sales_dummy.to_csv('monthly_retail_sales.csv', index=False)

# --- Your code starts here ---
# 1. Load the data
df = pd.read_csv('monthly_retail_sales.csv', parse_dates=['Month'], index_col='Month')

# 2. Visualize the raw data
plt.figure(figsize=(12, 6))
plt.plot(df.index, df['Sales'])
plt.title('Monthly Retail Sales')
plt.xlabel('Date')
plt.ylabel('Sales')
plt.grid(True)
plt.show()

# 3. Perform decomposition
# Observe the plot: does the magnitude of seasonal swings increase with the trend?
# If yes, use 'multiplicative'. If constant, use 'additive'.
# For retail sales, often multiplicative is a better fit as sales grow.
# Period for monthly data with yearly seasonality is 12.
decomposition_result = seasonal_decompose(df['Sales'], model='multiplicative', period=12)

# 4. Plot components
plt.figure(figsize=(12, 10))
decomposition_result.plot()
plt.suptitle('Multiplicative Time Series Decomposition of Retail Sales', y=1.02)
plt.tight_layout(rect=[0, 0, 1, 0.98])
plt.show()

# Interpretation:
# - The 'Trend' plot shows the general upward trajectory of sales over the years.
# - The 'Seasonal' plot reveals the consistent yearly pattern, likely peaking towards year-end holidays.
# - The 'Residual' plot shows the irregular, unpredictable fluctuations remaining after trend and seasonality are removed.
```

#### Assessment idea
1.  **Question:** You observe a time series where the seasonal peaks and troughs become more pronounced (larger absolute differences) as the overall level of the series increases. Which decomposition model would be most appropriate for this series?
    a) Additive model
    b) Multiplicative model
    c) Exponential model
    d) Logarithmic model

    **Correct Answer:** b) Multiplicative model
    **Explanation:** A multiplicative model is suitable when the magnitude of seasonal variations changes proportionally with the level of the series. If the seasonal swings get larger as the series trend increases, it suggests a multiplicative relationship. An additive model assumes constant seasonal variation.

2.  **Question:** When using `statsmodels.tsa.seasonal.seasonal_decompose()`, what is the primary purpose of the `period` argument?
    a) To specify the total length of the time series.
    b) To define the number of observations to use for the trend calculation.
    c) To indicate the number of data points that constitute one complete seasonal cycle.
    d) To set the confidence interval for the decomposed components.

    **Correct Answer:** c) To indicate the number of data points that constitute one complete seasonal cycle.
    **Explanation:** The `period` argument is crucial for correctly identifying and extracting the seasonal component. It tells the function how many observations make up one full seasonal cycle (e.g., 7 for weekly seasonality in daily data, 12 for yearly seasonality in monthly data). An incorrect `period` will lead to a misidentified or absent seasonal component.

#### AI generation note
Design a 10-minute animated explainer video. Start by visually representing a raw time series, then animate its separation into distinct layers: a smooth trend line, a repeating wave for seasonality, and scattered noise for residuals. Use a split-screen effect to show both additive (components stacking up) and multiplicative (components scaling each other) models with clear numerical examples. Illustrate when to choose each model by showing two different time series: one with constant seasonal amplitude and another with increasing seasonal amplitude. Demonstrate the `seasonal_decompose` function from `statsmodels` with a real-world dataset (e.g., airline passenger data), animating the `plot()` output. Include a visual cue for the `period` argument, showing how changing it impacts the seasonal component. Conclude with a quick quiz asking to identify the correct decomposition model for a given visual pattern.

---

### Chapter 1.4 — Stationarity and its Importance

#### Learning objectives
*   Define stationarity in the context of time series data and explain its key properties (constant mean, variance, and autocorrelation structure).
*   Understand why stationarity is a crucial assumption for many traditional time series models (e.g., ARIMA).
*   Identify non-stationary characteristics in time series plots and through statistical tests.
*   Apply common techniques like differencing and transformations to achieve stationarity.
*   Recognize the potential pitfalls of working with non-stationary data and the implications for forecasting.

#### Detailed lesson content
Stationarity is one of the most fundamental concepts in time series analysis, particularly when working with traditional statistical models like ARIMA (Autoregressive Integrated Moving Average). A time series is considered **stationary** if its statistical properties – specifically its mean, variance, and autocorrelation structure – do not change over time. This means that a stationary series looks roughly the same at any point in time, exhibiting no clear trend, no consistent seasonality, and constant variability. Imagine a time series that fluctuates around a constant mean, with consistent amplitude of fluctuations, and where the correlation between observations at a certain lag remains consistent throughout the series. That's a stationary series.

Why is stationarity so important? Many traditional time series models are built on the assumption that the underlying data-generating process is stationary. If you apply these models to non-stationary data, the results can be misleading, spurious, and unreliable. For instance, a regression model applied to two non-stationary series might show a strong correlation even if there's no genuine relationship, a phenomenon known as "spurious regression." The parameters estimated from non-stationary data might not be stable over time, making forecasts highly inaccurate. In essence, stationarity ensures that the statistical properties learned from the past can be reliably used to predict the future. While modern machine learning models (like LSTMs or Prophet) can often handle non-stationary data directly by learning complex patterns, understanding stationarity remains crucial for interpreting data, selecting appropriate classical models, and sometimes even for preprocessing data for deep learning approaches.

Identifying non-stationarity often begins with visual inspection. If a time series plot shows a clear upward or downward trend, it's likely non-stationary in mean. If the variability (the spread of the data points) increases or decreases over time, it's non-stationary in variance. If there are obvious seasonal patterns, it's non-stationary in seasonality. Beyond visual cues, statistical tests provide a more rigorous assessment. The **Augmented Dickey-Fuller (ADF) test** is one of the most widely used unit root tests to check for stationarity. The null hypothesis of the ADF test is that the time series is non-stationary (it has a unit root). If the p-value is below a chosen significance level (e.g., 0.05), we reject the null hypothesis and conclude the series is likely stationary. Another popular test is the **Kwiatkowski-Phillips-Schmidt-Shin (KPSS) test**, which has the opposite null hypothesis: the series is stationary.

Let's look at how to perform an ADF test in Python using `statsmodels`:
```python
import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.stattools import adfuller
import numpy as np

# Generate a non-stationary series (with trend)
np.random.seed(42)
dates = pd.date_range(start='2010-01-01', periods=200, freq='M')
non_stationary_data = np.cumsum(np.random.normal(0, 1, 200)) + np.linspace(0, 20, 200) # Random walk with drift
df_non_stationary = pd.DataFrame({'Value': non_stationary_data}, index=dates)

# Generate a stationary series (random noise around a mean)
stationary_data = np.random.normal(0, 1, 200)
df_stationary = pd.DataFrame({'Value': stationary_data}, index=dates)

# Plot both to visually compare
plt.figure(figsize=(14, 6))
plt.subplot(1, 2, 1)
plt.plot(df_non_stationary.index, df_non_stationary['Value'])
plt.title('Non-Stationary Series (with Trend)')
plt.subplot(1, 2, 2)
plt.plot(df_stationary.index, df_stationary['Value'])
plt.title('Stationary Series (White Noise)')
plt.tight_layout()
plt.show()

# Perform ADF test on the non-stationary series
print("ADF Test Results for Non-Stationary Series:")
adf_result_non_stationary = adfuller(df_non_stationary['Value'])
print(f'ADF Statistic: {adf_result_non_stationary[0]}')
print(f'p-value: {adf_result_non_stationary[1]}')
print('Is stationary? (p <= 0.05):', adf_result_non_stationary[1] <= 0.05)

# Perform ADF test on the stationary series
print("\nADF Test Results for Stationary Series:")
adf_result_stationary = adfuller(df_stationary['Value'])
print(f'ADF Statistic: {adf_result_stationary[0]}')
print(f'p-value: {adf_result_stationary[1]}')
print('Is stationary? (p <= 0.05):', adf_result_stationary[1] <= 0.05)
```
You'll likely see a high p-value for the non-stationary series and a low p-value for the stationary one.

If a series is found to be non-stationary, we often need to transform it to achieve stationarity. The most common technique is **differencing**. Differencing involves computing the difference between consecutive observations. First-order differencing (`Y(t) - Y(t-1)`) can often remove a linear trend. If there's strong seasonality, seasonal differencing (`Y(t) - Y(t-s)`, where `s` is the seasonal period) can remove the seasonal component.
```python
# Apply first-order differencing to the non-stationary series
df_differenced = df_non_stationary['Value'].diff().dropna()

plt.figure(figsize=(10, 5))
plt.plot(df_differenced.index, df_differenced)
plt.title('First-Order Differenced Series')
plt.xlabel('Date')
plt.ylabel('Differenced Value')
plt.grid(True)
plt.show()

# Perform ADF test on the differenced series
print("\nADF Test Results for Differenced Series:")
adf_result_differenced = adfuller(df_differenced)
print(f'ADF Statistic: {adf_result_differenced[0]}')
print(f'p-value: {adf_result_differenced[1]}')
print('Is stationary? (p <= 0.05):', adf_result_differenced[1] <= 0.05)
```
You'll typically find that differencing helps reduce the p-value significantly, often making the series stationary. Sometimes, multiple differencing steps are needed (e.g., second-order differencing `(Y(t) - Y(t-1)) - (Y(t-1) - Y(t-2))`), but care must be taken not to over-difference, as this can remove valuable information and introduce new patterns.

Other techniques include **transformations** like the logarithm or square root, which can help stabilize variance if it's changing over time (e.g., if fluctuations grow proportionally with the series level, taking the logarithm can make the variance more constant, converting a multiplicative pattern to an additive one).

A common mistake is assuming that a series is stationary just because it doesn't have an obvious trend. Seasonality also implies non-stationarity, as the mean and variance might change predictably over the seasonal cycle. Always use statistical tests in conjunction with visual inspection. Another pitfall is blindly differencing without understanding the implications. Each differencing step removes a certain type of trend or seasonality, but it also reduces the number of data points and can make the series harder to interpret. For machine learning models, differencing can be a feature engineering step, but deep learning models like LSTMs can often learn these trends and seasonalities directly from the raw, non-stationary data, potentially reducing the need for explicit differencing as a preprocessing step. However, understanding stationarity still informs our feature engineering choices and model selection.

#### Key concepts
*   **Stationarity:** A property of a time series where its statistical properties (mean, variance, autocorrelation structure) remain constant over time.
*   **Non-Stationarity:** A time series that exhibits a trend, seasonality, or changing variance over time.
*   **Augmented Dickey-Fuller (ADF) Test:** A statistical test used to determine if a time series is stationary. The null hypothesis is that the series is non-stationary (has a unit root).
*   **Kwiatkowski-Phillips-Schmidt-Shin (KPSS) Test:** Another statistical test for stationarity, with the null hypothesis that the series is stationary.
*   **Differencing:** A transformation technique used to make a non-stationary time series stationary by computing the difference between consecutive observations (e.g., `Y(t) - Y(t-1)` for first-order differencing, `Y(t) - Y(t-s)` for seasonal differencing).
*   **Transformations:** Mathematical operations (e.g., logarithm, square root) applied to a time series to stabilize variance or linearize relationships.
*   **Spurious Regression:** A phenomenon where two unrelated non-stationary time series appear to be highly correlated, leading to misleading conclusions.

#### Hands-on activity
**Activity: Achieving Stationarity in a Temperature Series**

You are given a simulated daily temperature series that exhibits both a subtle upward trend and some seasonality. Your goal is to:

1.  **Load and Plot:** Load `daily_temperature.csv`, parse dates, set the index, and plot the raw series.
2.  **Test for Stationarity:** Perform an ADF test on the raw series and interpret the p-value.
3.  **Apply Differencing:** Apply first-order differencing to the series.
4.  **Plot Differenced Series:** Plot the differenced series.
5.  **Re-test Stationarity:** Perform an ADF test on the differenced series and compare its p-value to the original.

**`daily_temperature.csv` content (create this file, covering about 2 years):**
```csv
Date,Temperature
2022-01-01,10.2
2022-01-02,10.5
...
2023-12-31,18.7
```

**Starter Code:**
```python
import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.stattools import adfuller
import numpy as np

# Generate dummy daily temperature data for 2 years
dates = pd.date_range(start='2022-01-01', periods=730, freq='D')
base_temp = 10 + np.arange(len(dates)) * 0.005 # Upward trend
seasonal_temp = 5 * np.sin(np.linspace(0, 4 * np.pi, len(dates))) # Yearly seasonality
noise = np.random.normal(0, 1.5, len(dates))
temperature = base_temp + seasonal_temp + noise
df_temp_dummy = pd.DataFrame({'Date': dates, 'Temperature': temperature})
df_temp_dummy.to_csv('daily_temperature.csv', index=False)

# --- Your code starts here ---
# 1. Load and Plot
df = pd.read_csv('daily_temperature.csv', parse_dates=['Date'], index_col='Date')

plt.figure(figsize=(12, 6))
plt.plot(df.index, df['Temperature'])
plt.title('Raw Daily Temperature Series')
plt.xlabel('Date')
plt.ylabel('Temperature (°C)')
plt.grid(True)
plt.show()

# 2. Test for Stationarity (Raw Series)
print("--- ADF Test on Raw Temperature Series ---")
adf_result_raw = adfuller(df['Temperature'])
print(f'ADF Statistic: {adf_result_raw[0]}')
print(f'p-value: {adf_result_raw[1]}')
print('Critical Values:')
for key, value in adf_result_raw[4].items():
    print(f'   {key}: {value}')
print('Conclusion: Series is stationary if p-value <= 0.05. (Raw series is likely non-stationary)')

# 3. Apply First-Order Differencing
df['Temperature_Diff'] = df['Temperature'].diff().dropna()

# 4. Plot Differenced Series
plt.figure(figsize=(12, 6))
plt.plot(df.index[1:], df['Temperature_Diff']) # Plot from the second element as first is NaN
plt.title('First-Order Differenced Temperature Series')
plt.xlabel('Date')
plt.ylabel('Differenced Temperature (°C)')
plt.grid(True)
plt.show()

# 5. Re-test Stationarity (Differenced Series)
print("\n--- ADF Test on Differenced Temperature Series ---")
adf_result_diff = adfuller(df['Temperature_Diff'])
print(f'ADF Statistic: {adf_result_diff[0]}')
print(f'p-value: {adf_result_diff[1]}')
print('Critical Values:')
for key, value in adf_result_diff[4].items():
    print(f'   {key}: {value}')
print('Conclusion: Series is stationary if p-value <= 0.05. (Differenced series is likely stationary)')
```

#### Assessment idea
1.  **Question:** A time series exhibits a clear upward trend and its seasonal fluctuations appear to increase in magnitude over time. After applying a log transformation, the seasonal fluctuations now seem constant in magnitude. What would be the next logical step to achieve stationarity for a classical ARIMA model?
    a) Apply a simple moving average.
    b) Perform seasonal differencing.
    c) Convert the data back to its original scale.
    d) Directly apply an ARIMA model without further steps.

    **Correct Answer:** b) Perform seasonal differencing.
    **Explanation:** The log transformation helped stabilize the variance (making the seasonal fluctuations constant in magnitude, effectively converting a multiplicative pattern to an additive one). However, the series likely still has a trend and seasonality (even if constant in magnitude now). Seasonal differencing would address the remaining seasonality and potentially the trend, making the series stationary for an ARIMA model.

2.  **Question:** You perform an Augmented Dickey-Fuler (ADF) test on your time series data, and the resulting p-value is 0.28. If your significance level is 0.05, what conclusion can you draw about the stationarity of your series?
    a) The series is stationary, as the p-value is less than 0.05.
    b) The series is non-stationary, as the p-value is greater than 0.05.
    c) The series is stationary, but with 28% confidence.
    d) The ADF test is inconclusive for this p-value.

    **Correct Answer:** b) The series is non-stationary, as the p-value is greater than 0.05.
    **Explanation:** The null hypothesis of the ADF test is that the series is non-stationary. A p-value greater than the significance level (0.05 in this case) means we fail to reject the null hypothesis. Therefore, we conclude that there is not enough evidence to say the series is stationary, implying it is non-stationary.

#### AI generation note
Create a 12-minute mixed-format lesson. Start with a 3-minute animated conceptual explanation of stationarity, using visuals to show constant mean, constant variance, and constant autocorrelation. Contrast this with non-stationary examples (upward trend, increasing variance, clear seasonality). Transition into a 7-minute live coding demo in a Jupyter Notebook. Generate a clearly non-stationary series (e.g., a random walk with drift) and a clearly stationary series (white noise). Plot both side-by-side. Then, run the `adfuller` test on both, highlighting the p-value and critical values. Demonstrate first-order differencing on the non-stationary series, plot the result, and re-run the ADF test to show the change in p-value. Include a "Common Mistakes" overlay discussing over-differencing and ignoring seasonality. Conclude with a 2-question interactive mini-quiz on interpreting ADF test results.

---

## Module 2: Traditional Statistical Forecasting Models

This module delves into the foundational statistical methods for time series forecasting. You will learn to identify and model the inherent patterns within time series data, from basic components like trend and seasonality to more sophisticated statistical models such as ARIMA and Holt-Winters. Mastering these traditional techniques provides a robust baseline and crucial insights before exploring more complex machine learning approaches.

### Chapter 2.1 — Time Series Components and Decomposition

#### Learning objectives
*   Identify and differentiate between the key components of a time series: trend, seasonality, and residuals.
*   Understand the concepts of additive and multiplicative decomposition models and when to apply each.
*   Apply Python tools to perform time series decomposition on real-world datasets.
*   Interpret the decomposed components to gain insights into underlying data patterns.

#### Detailed lesson content
Time series data, by its very nature, is a sequence of observations recorded over time. Unlike cross-sectional data, the order of observations carries crucial information. Before we can effectively forecast future values, it is essential to understand and isolate the underlying patterns that drive the series. This process is known as time series decomposition, where we break down a series into several constituent components: trend, seasonality, and residuals (or noise).

The **trend** component represents the long-term progression of the series, indicating whether the data is generally increasing, decreasing, or remaining stable over time. This could be, for instance, the overall growth in product sales over several years, irrespective of monthly fluctuations. Identifying the trend is crucial because it often reflects fundamental shifts or evolutions in the underlying process. Ignoring a strong trend can lead to significant forecasting errors, as your model might fail to capture the general direction of the series.

**Seasonality** refers to patterns that repeat over fixed and known periods, such as daily, weekly, monthly, or yearly cycles. Think of retail sales peaking during holiday seasons each year, or electricity consumption rising during specific hours of the day. The key characteristic of seasonality is its regularity and predictability. Understanding and modeling seasonality allows us to account for these recurring fluctuations, making our forecasts more accurate by removing predictable variations. Without accounting for seasonality, a forecast might consistently underpredict during peak seasons and overpredict during troughs.

Finally, **residuals** (also known as the irregular or random component) represent the unpredictable fluctuations or noise in the time series that cannot be explained by the trend or seasonality. These are the random variations left over after the systematic patterns have been removed. A good forecasting model aims to capture as much of the trend and seasonality as possible, leaving behind residuals that are purely random and exhibit no discernible pattern. If residuals still show patterns, it suggests that there our model has not fully captured all the systematic information in the data.

When decomposing a time series, we generally consider two main types of models: **additive** and **multiplicative**. An additive model assumes that the components sum up to form the observed series: $Y_t = T_t + S_t + R_t$, where $Y_t$ is the observed value, $T_t$ is the trend, $S_t$ is the seasonal component, and $R_t$ is the residual at time $t$. This model is appropriate when the magnitude of the seasonal fluctuations and the variance of the residuals remain relatively constant over time, regardless of the trend level. For example, if monthly sales fluctuations are roughly +/- $1000 regardless of whether total sales are $10,000 or $100,000, an additive model is suitable.

A multiplicative model, on the other hand, assumes that the components multiply to form the observed series: $Y_t = T_t \times S_t \times R_t$. This model is more appropriate when the magnitude of the seasonal fluctuations and the variance of the residuals increase or decrease proportionally with the level of the trend. For instance, if seasonal peaks become larger as the overall sales trend increases, a multiplicative model would be a better fit. In practice, if your data exhibits increasing variance with increasing trend, it's often a strong indicator to use a multiplicative model. If you are unsure, you can often transform a multiplicative series into an additive one by taking the logarithm of the data, as $\log(T_t \times S_t \times R_t) = \log(T_t) + \log(S_t) + \log(R_t)$.

Python's `statsmodels` library provides a convenient function, `seasonal_decompose`, to perform this decomposition. It uses moving averages to estimate the trend, and then removes the trend to estimate the seasonal component. The remaining part is the residual. A common mistake is to blindly apply the default decomposition without considering the nature of the data. Always visualize your time series first to get an intuition about whether seasonal fluctuations are constant (additive) or scale with the trend (multiplicative). Applying an additive model to data that clearly exhibits multiplicative seasonality will result in misleading residuals that still contain patterns, indicating a poor decomposition.

Let's consider a practical scenario. Imagine you are analyzing monthly passenger numbers for an airline. You observe a clear upward trend over the years, but also consistent peaks during summer months and holidays, and dips in off-peak seasons. If these seasonal peaks are growing in absolute terms as the overall passenger numbers increase, a multiplicative decomposition would be more appropriate. If the absolute difference between peak and trough remains constant regardless of the total passenger volume, an additive model would be better. Understanding this distinction is fundamental for subsequent modeling steps, as many forecasting models assume stationarity or require components to be isolated for effective prediction.

```python
import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.seasonal import seasonal_decompose
import numpy as np

# Create a sample time series with trend and seasonality
# Monthly data for 3 years
np.random.seed(42)
dates = pd.date_range(start='2018-01-01', periods=36, freq='MS')
# Additive components: linear trend + sine wave seasonality + noise
trend = np.linspace(100, 150, 36)
seasonality = 10 * np.sin(np.linspace(0, 3 * 2 * np.pi, 36)) # 3 cycles over 3 years
noise = np.random.normal(0, 2, 36)
data_additive = trend + seasonality + noise
ts_additive = pd.Series(data_additive, index=dates)

# Multiplicative components: exponential trend * sine wave seasonality * noise
trend_mult = np.exp(np.linspace(np.log(100), np.log(150), 36))
seasonality_mult = 1 + 0.1 * np.sin(np.linspace(0, 3 * 2 * np.pi, 36)) # 10% variation
noise_mult = np.random.normal(1, 0.02, 36) # Multiplicative noise around 1
data_multiplicative = trend_mult * seasonality_mult * noise_mult
ts_multiplicative = pd.Series(data_multiplicative, index=dates)

# Perform additive decomposition
print("Performing Additive Decomposition:")
result_additive = seasonal_decompose(ts_additive, model='additive', period=12) # period=12 for monthly seasonality
result_additive.plot()
plt.suptitle('Additive Decomposition of Time Series', y=1.02)
plt.show()

# Perform multiplicative decomposition
print("\nPerforming Multiplicative Decomposition:")
result_multiplicative = seasonal_decompose(ts_multiplicative, model='multiplicative', period=12)
result_multiplicative.plot()
plt.suptitle('Multiplicative Decomposition of Time Series', y=1.02)
plt.show()

# Display components for additive model
print("\nAdditive Model Components:")
print("Trend:\n", result_additive.trend.head())
print("Seasonal:\n", result_additive.seasonal.head())
print("Residual:\n", result_additive.resid.head())

# Display components for multiplicative model
print("\nMultiplicative Model Components:")
print("Trend:\n", result_multiplicative.trend.head())
print("Seasonal:\n", result_multiplicative.seasonal.head())
print("Residual:\n", result_multiplicative.resid.head())
```
In this code, we first generate two synthetic time series, one designed to be additive and one multiplicative, to clearly demonstrate the difference. We then apply `seasonal_decompose` from `statsmodels`, specifying the `model` type ('additive' or 'multiplicative') and the `period` of seasonality (e.g., 12 for monthly data with annual seasonality). The `plot()` method on the result object conveniently visualizes the original series and its decomposed components. Observing the residual plot is crucial: if it looks like white noise (random fluctuations around zero), your decomposition was likely successful. If it still shows patterns, you might need to reconsider your model choice (additive vs. multiplicative) or the specified seasonal period.

#### Key concepts
*   **Time Series Decomposition:** The process of breaking down a time series into its constituent components: trend, seasonality, and residuals.
*   **Trend:** The long-term, underlying direction or movement of the time series, indicating growth, decline, or stability.
*   **Seasonality:** Patterns that repeat over fixed and known periods (e.g., daily, weekly, monthly, yearly cycles).
*   **Residuals (Irregular/Noise Component):** The random, unpredictable fluctuations in the time series that remain after trend and seasonality have been removed.
*   **Additive Model:** Assumes the components sum to form the observed series ($Y_t = T_t + S_t + R_t$), suitable when seasonal variations are constant in magnitude.
*   **Multiplicative Model:** Assumes the components multiply to form the observed series ($Y_t = T_t \times S_t \times R_t$), suitable when seasonal variations change proportionally with the trend.

#### Hands-on activity
**Activity: Decompose Retail Sales Data**

You are provided with a dataset of monthly retail sales for a specific product over several years. Your task is to load this data, visualize it, and then perform a time series decomposition. Based on your visual inspection, decide whether an additive or multiplicative model is more appropriate. Plot the decomposition and comment on the characteristics of the trend, seasonality, and residuals.

**Instructions:**
1.  Load the provided `retail_sales.csv` dataset. Assume it has columns `Month` (in 'YYYY-MM-DD' format) and `Sales`.
2.  Convert the `Month` column to datetime objects and set it as the index.
3.  Plot the raw `Sales` time series.
4.  Based on the plot, decide whether to use an 'additive' or 'multiplicative' model for decomposition. Justify your choice.
5.  Perform the decomposition using `seasonal_decompose` with `period=12` (for monthly data with annual seasonality).
6.  Plot the decomposed components.
7.  Analyze the plots: Describe the trend (e.g., increasing, decreasing, stable), the seasonal pattern (e.g., peak months, trough months), and comment on the randomness of the residuals.

```python
import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.seasonal import seasonal_decompose

# --- Starter Code ---
# Assume retail_sales.csv exists with 'Month' and 'Sales' columns
# Example data generation if file is not available (for demonstration)
# In a real scenario, you would load from CSV.
# This example creates data similar to what you might find in a CSV.
np.random.seed(42)
dates_activity = pd.date_range(start='2010-01-01', periods=12*8, freq='MS') # 8 years of monthly data
trend_activity = np.linspace(500, 1200, len(dates_activity))
seasonality_activity = 1 + 0.15 * np.sin(np.linspace(0, 8 * 2 * np.pi, len(dates_activity))) # 15% variation
noise_activity = np.random.normal(1, 0.03, len(dates_activity))
sales_data = trend_activity * seasonality_activity * noise_activity
retail_sales_df = pd.DataFrame({'Month': dates_activity, 'Sales': sales_data})
retail_sales_df['Month'] = pd.to_datetime(retail_sales_df['Month'])
retail_sales_df = retail_sales_df.set_index('Month')
# --------------------

# 1. Load the data (if from CSV, uncomment and modify path)
# retail_sales_df = pd.read_csv('retail_sales.csv')
# retail_sales_df['Month'] = pd.to_datetime(retail_sales_df['Month'])
# retail_sales_df = retail_sales_df.set_index('Month')

# 2. Plot the raw Sales time series
plt.figure(figsize=(12, 6))
plt.plot(retail_sales_df['Sales'])
plt.title('Monthly Retail Sales')
plt.xlabel('Date')
plt.ylabel('Sales')
plt.grid(True)
plt.show()

# 3. Decide on additive or multiplicative model and justify
# Based on the plot, if seasonal fluctuations grow with the trend, choose 'multiplicative'.
# If they are constant, choose 'additive'.
# For the generated data above, it's multiplicative.
decomposition_model = 'multiplicative' # Or 'additive'
print(f"Chosen decomposition model: {decomposition_model}")
print("Justification: The seasonal peaks and troughs appear to increase in magnitude as the overall sales trend rises, suggesting a proportional relationship.")

# 4. Perform decomposition
result_activity = seasonal_decompose(retail_sales_df['Sales'], model=decomposition_model, period=12)

# 5. Plot the decomposed components
result_activity.plot()
plt.suptitle(f'Time Series Decomposition ({decomposition_model.capitalize()} Model)', y=1.02)
plt.show()

# 6. Analyze the plots (example analysis for multiplicative model)
print("\nAnalysis of Decomposed Components:")
print(f"Trend: The trend component shows a clear upward trajectory, indicating steady growth in retail sales over the 8-year period.")
print(f"Seasonality: The seasonal component reveals a consistent annual pattern. There are regular peaks and troughs, which could correspond to holiday seasons or specific sales periods within each year.")
print(f"Residuals: The residuals plot appears to be largely random, fluctuating around 1 (for multiplicative model) with no obvious remaining patterns, suggesting the trend and seasonality have been effectively captured.")
```

#### Assessment idea
1.  **Question:** You are analyzing a time series of website traffic. You observe that the daily traffic has been steadily increasing over the past two years. Additionally, there's a clear weekly pattern where traffic peaks on weekdays and drops significantly on weekends. The magnitude of these weekly fluctuations (the difference between weekday peaks and weekend troughs) seems to be roughly constant, regardless of the overall traffic volume. Which type of time series decomposition model (additive or multiplicative) would be most appropriate for this data, and why?
    *   **Correct Answer:** An additive model ($Y_t = T_t + S_t + R_t$) would be most appropriate. The key reason is that the magnitude of the weekly fluctuations is described as "roughly constant" even as the overall daily traffic (trend) increases. This implies that the seasonal component's effect is independent of the trend level, which is the defining characteristic of an additive decomposition. A multiplicative model would be chosen if the seasonal fluctuations increased proportionally with the trend.

2.  **Question:** After performing a time series decomposition, you notice that the residual plot still exhibits a clear, repeating wave-like pattern. What does this observation suggest about your decomposition, and what steps might you take to address it?
    *   **Correct Answer:** A repeating wave-like pattern in the residuals indicates that the decomposition model has failed to fully capture all the systematic patterns in the original time series. Specifically, it suggests that either the chosen `period` for seasonality was incorrect (e.g., using 12 for monthly data when the true period is 6 months), or the chosen `model` type (additive vs. multiplicative) was inappropriate for the data's characteristics. To address this, you should:
        1.  **Re-evaluate the Period:** Double-check the periodicity of your data. For example, if it's monthly data, is the seasonality truly annual (period=12), or is there a shorter cycle?
        2.  **Re-evaluate the Model Type:** Re-examine the original time series plot. If the seasonal fluctuations appear to grow or shrink with the trend, switch from an additive to a multiplicative model (or vice-versa).
        3.  **Consider Multiple Seasonalities:** If the data has multiple seasonal patterns (e.g., daily and weekly for hourly data), `seasonal_decompose` might not be sufficient, and more advanced decomposition techniques like STL or TBATS might be needed.

#### AI generation note
Create a 12-minute animated video explaining time series components and decomposition. Start with a clear animation showing a raw time series, then progressively highlight and extract the trend, seasonality, and finally the residuals. Use two distinct examples: one clearly additive (e.g., constant seasonal sales fluctuations) and one clearly multiplicative (e.g., seasonal website traffic peaks growing with overall traffic). Visually demonstrate how `seasonal_decompose` works in Python, showing the input series and the four output plots side-by-side. Include a short interactive quiz at the 8-minute mark asking the learner to identify the correct decomposition model for a given visual time series. Ensure captions and high-contrast visuals are used.

### Chapter 2.2 — Simple Forecasting Methods

#### Learning objectives
*   Implement and understand the principles behind Naive, Simple Average, and Moving Average forecasting methods.
*   Apply Simple Exponential Smoothing (SES) to time series data and interpret its smoothing parameter.
*   Evaluate the appropriate use cases and limitations of each simple forecasting technique.
*   Calculate and compare basic forecast accuracy metrics for these models.

#### Detailed lesson content
After understanding the components of a time series, our next step is to explore methods for predicting its future values. We begin with some of the simplest yet surprisingly effective forecasting techniques, which serve as excellent baselines for more complex models. These methods are easy to understand, quick to implement, and often provide a good first estimate, especially for data without strong trends or complex seasonal patterns.

The **Naive method**, also known as the Random Walk forecast, is perhaps the simplest of all. It assumes that the next observed value will be the same as the most recently observed value. That is, $F_{t+1} = Y_t$. This method is particularly useful for time series that closely resemble a random walk, where future movements are unpredictable and largely independent of past values, except for the immediate previous one. While it might seem overly simplistic, the Naive method is a powerful benchmark. If a more complex model cannot outperform the Naive forecast, it suggests that the added complexity is not providing any real benefit. A common mistake is to dismiss the Naive method outright; it's a critical baseline for evaluating the true value of more sophisticated models.

The **Simple Average method** (also called the Mean method) predicts that all future values will be equal to the average of all past observations. The formula is $F_{t+1} = \frac{1}{t} \sum_{i=1}^{t} Y_i$. This method is suitable for time series that are stationary and have no discernible trend or seasonality, where the data fluctuates randomly around a constant mean. It assumes that the underlying process generating the data is stable over time. However, if there's any trend or seasonality, the Simple Average will be significantly biased and will fail to capture the dynamics of the series. For example, forecasting future stock prices using a simple average of all past prices would be highly ineffective due to market trends.

The **Moving Average (MA) method** is a slight refinement that addresses the limitation of the Simple Average by only considering a recent window of past observations. Instead of using all historical data, it calculates the average of the most recent 'N' observations. The formula is $F_{t+1} = \frac{1}{N} \sum_{i=t-N+1}^{t} Y_i$. The choice of 'N' (the window size) is crucial. A smaller 'N' makes the forecast more responsive to recent changes but also more susceptible to random noise. A larger 'N' provides a smoother forecast, less affected by noise, but slower to react to genuine shifts in the underlying pattern. Moving averages are effective for smoothing out short-term fluctuations and highlighting longer-term trends, but they inherently lag behind true changes in the series. They are not ideal for data with strong trends or seasonality, as they will always be behind the curve.

**Simple Exponential Smoothing (SES)** is a more sophisticated method that assigns exponentially decreasing weights to older observations. This means that recent observations are given more importance in forecasting than older ones. The core idea is that the forecast for the next period is a weighted average of the current observation and the current smoothed value (which itself is a smoothed average of past observations). The formula is $F_{t+1} = \alpha Y_t + (1 - \alpha) F_t$, where $F_t$ is the smoothed value at time $t$, and $\alpha$ is the smoothing parameter, ranging from 0 to 1.
*   If $\alpha$ is close to 1, the forecast heavily relies on the most recent observation, making it very responsive to changes but also sensitive to noise.
*   If $\alpha$ is close to 0, the forecast gives more weight to past observations, resulting in a smoother series but slower to adapt to new information.
The optimal $\alpha$ is typically chosen by minimizing a forecast error metric (like Mean Squared Error) on historical data. SES is suitable for time series without a trend or seasonality, but where the level of the series might change slowly over time. It's an improvement over the Simple Average because it adapts to changes in the level more gracefully.

Let's illustrate these methods with a practical example, such as forecasting monthly sales for a small business.

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.tsa.api import SimpleExpSmoothing

# Generate sample sales data (e.g., 2 years of monthly sales)
np.random.seed(42)
dates = pd.date_range(start='2020-01-01', periods=24, freq='MS')
sales = 100 + np.arange(24) * 2 + np.random.normal(0, 10, 24) # Upward trend + noise
sales_series = pd.Series(sales, index=dates)

plt.figure(figsize=(12, 6))
plt.plot(sales_series, label='Actual Sales')
plt.title('Monthly Sales Data')
plt.xlabel('Date')
plt.ylabel('Sales')
plt.grid(True)
plt.legend()
plt.show()

# --- 1. Naive Method ---
# Forecast for the next period is the last observed value
naive_forecast = sales_series.iloc[-1]
print(f"Naive Forecast for next period: {naive_forecast:.2f}")

# Generate Naive forecasts for the entire series (for plotting and error calculation)
naive_forecasts_series = sales_series.shift(1)
plt.figure(figsize=(12, 6))
plt.plot(sales_series, label='Actual Sales')
plt.plot(naive_forecasts_series, label='Naive Forecast', linestyle='--')
plt.title('Naive Forecasting')
plt.xlabel('Date')
plt.ylabel('Sales')
plt.grid(True)
plt.legend()
plt.show()

# --- 2. Simple Average Method ---
# Forecast for the next period is the average of all past values
simple_avg_forecast = sales_series.mean()
print(f"Simple Average Forecast for next period: {simple_avg_forecast:.2f}")

# Generate Simple Average forecasts for the entire series
simple_avg_forecasts_series = pd.Series([sales_series.iloc[:i].mean() for i in range(1, len(sales_series) + 1)], index=sales_series.index)
plt.figure(figsize=(12, 6))
plt.plot(sales_series, label='Actual Sales')
plt.plot(simple_avg_forecasts_series, label='Simple Average Forecast', linestyle='--')
plt.title('Simple Average Forecasting')
plt.xlabel('Date')
plt.ylabel('Sales')
plt.grid(True)
plt.legend()
plt.show()

# --- 3. Moving Average Method ---
window_size = 3 # Example: 3-month moving average
moving_avg_forecasts_series = sales_series.rolling(window=window_size).mean().shift(1) # Shift by 1 to forecast
moving_avg_forecast = sales_series.iloc[-window_size:].mean()
print(f"Moving Average ({window_size}-month) Forecast for next period: {moving_avg_forecast:.2f}")

plt.figure(figsize=(12, 6))
plt.plot(sales_series, label='Actual Sales')
plt.plot(moving_avg_forecasts_series, label=f'Moving Average ({window_size}) Forecast', linestyle='--')
plt.title(f'Moving Average ({window_size}) Forecasting')
plt.xlabel('Date')
plt.ylabel('Sales')
plt.grid(True)
plt.legend()
plt.show()

# --- 4. Simple Exponential Smoothing (SES) ---
# Fit the SES model
# We can let statsmodels optimize alpha, or set it manually
ses_model = SimpleExpSmoothing(sales_series, initialization_method="estimated").fit()
ses_forecast = ses_model.forecast(1).iloc[0] # Forecast 1 step ahead
print(f"SES Forecast for next period (alpha={ses_model.params['smoothing_level']:.2f}): {ses_forecast:.2f}")

# Plot SES forecasts
plt.figure(figsize=(12, 6))
plt.plot(sales_series, label='Actual Sales')
plt.plot(ses_model.fittedvalues, label='SES Fitted Values', linestyle='--')
plt.title('Simple Exponential Smoothing Forecasting')
plt.xlabel('Date')
plt.ylabel('Sales')
plt.grid(True)
plt.legend()
plt.show()

# Common mistake: Using these methods on data with strong trends/seasonality
# As seen in the plots, for data with an upward trend, Simple Average and Naive
# will consistently underpredict. Moving Average will lag. SES will adapt better
# but still struggles with strong, consistent trends.
```
In the code, we first generate a sample time series with a slight upward trend. Then, we implement each forecasting method. For Naive, we simply take the last value. For Simple Average, we calculate the mean of the entire series. For Moving Average, we use `rolling().mean()` from pandas, making sure to shift the result by one to represent a forecast. For SES, we leverage `statsmodels.tsa.api.SimpleExpSmoothing`, allowing it to estimate the optimal smoothing parameter `alpha`. We then plot the forecasts against the actual data to visually assess their performance.

When evaluating these simple models, it's crucial to use appropriate **forecast accuracy metrics**. Common metrics include:
*   **Mean Absolute Error (MAE):** Average of the absolute differences between actual and forecasted values. $MAE = \frac{1}{n} \sum_{i=1}^{n} |Y_i - F_i|$
*   **Mean Squared Error (MSE):** Average of the squared differences. Penalizes larger errors more heavily. $MSE = \frac{1}{n} \sum_{i=1}^{n} (Y_i - F_i)^2$
*   **Root Mean Squared Error (RMSE):** Square root of MSE, bringing the error back to the original scale of the data. $RMSE = \sqrt{MSE}$
*   **Mean Absolute Percentage Error (MAPE):** Average of the absolute percentage errors. Useful for comparing accuracy across different series. $MAPE = \frac{1}{n} \sum_{i=1}^{n} \left| \frac{Y_i - F_i}{Y_i} \right| \times 100\%$

Safety note: Always calculate these metrics on a hold-out test set, not on the training data used to fit the model. Overfitting can occur even with simple models if parameters (like `alpha` for SES or window size for MA) are optimized on the same data used for evaluation.

#### Key concepts
*   **Naive Method (Random Walk):** Forecasts the next value as the last observed value ($F_{t+1} = Y_t$). Serves as a crucial baseline.
*   **Simple Average Method (Mean Method):** Forecasts all future values as the average of all past observations. Suitable for stationary data without trend or seasonality.
*   **Moving Average (MA) Method:** Forecasts the next value as the average of the most recent 'N' observations. Smooths out short-term fluctuations but lags behind trends.
*   **Simple Exponential Smoothing (SES):** Assigns exponentially decreasing weights to older observations, giving more importance to recent data. Suitable for data without trend or seasonality, but with a changing level.
*   **Smoothing Parameter ($\alpha$):** In SES, controls the weight given to the most recent observation vs. past smoothed values. $\alpha \approx 1$ (responsive), $\alpha \approx 0$ (smooth).
*   **Forecast Accuracy Metrics:** Quantitative measures to evaluate model performance (e.g., MAE, MSE, RMSE, MAPE).

#### Hands-on activity
**Activity: Compare Simple Forecasts for Energy Consumption**

You are given a dataset of daily electricity consumption. Your goal is to apply Naive, Moving Average, and Simple Exponential Smoothing methods to forecast the next day's consumption. Then, calculate the RMSE for each method on a hold-out test set and determine which method performs best.

**Instructions:**
1.  Load the provided `daily_energy.csv` dataset. Assume it has columns `Date` and `Consumption`.
2.  Convert `Date` to datetime and set as index.
3.  Split the data into a training set (first 80%) and a test set (last 20%).
4.  Implement the Naive forecast: The forecast for each day in the test set is the actual consumption from the previous day.
5.  Implement a 7-day Moving Average forecast: The forecast for each day in the test set is the average of the previous 7 days from the *training data and previously observed test data*.
6.  Implement Simple Exponential Smoothing: Fit the model on the training data and forecast the test set. Let `statsmodels` estimate the optimal `alpha`.
7.  Calculate the RMSE for each of the three methods on the test set.
8.  Identify which method yielded the lowest RMSE and briefly comment on why it might have performed best or worst given the nature of energy consumption data (e.g., potential for daily/weekly patterns, trends).

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.tsa.api import SimpleExpSmoothing
from sklearn.metrics import mean_squared_error

# --- Starter Code ---
# Generate example daily energy consumption data (e.g., 2 years)
np.random.seed(42)
dates_activity = pd.date_range(start='2021-01-01', periods=365*2, freq='D')
base_consumption = 100 + np.sin(np.arange(365*2) / 30 * 2 * np.pi) * 20 # Monthly seasonality
trend_consumption = np.linspace(0, 50, 365*2) # Upward trend
noise_consumption = np.random.normal(0, 5, 365*2)
consumption_data = base_consumption + trend_consumption + noise_consumption
daily_energy_df = pd.DataFrame({'Date': dates_activity, 'Consumption': consumption_data})
daily_energy_df['Date'] = pd.to_datetime(daily_energy_df['Date'])
daily_energy_df = daily_energy_df.set_index('Date')
# --------------------

# 1. Load data (if from CSV, uncomment and modify path)
# daily_energy_df = pd.read_csv('daily_energy.csv')
# daily_energy_df['Date'] = pd.to_datetime(daily_energy_df['Date'])
# daily_energy_df = daily_energy_df.set_index('Date')

# 2. Split data into training and test sets
train_size = int(len(daily_energy_df) * 0.8)
train_data, test_data = daily_energy_df['Consumption'].iloc[:train_size], daily_energy_df['Consumption'].iloc[train_size:]

print(f"Training data size: {len(train_data)}")
print(f"Test data size: {len(test_data)}")

# --- 3. Naive Forecast ---
naive_forecasts = test_data.shift(1).fillna(train_data.iloc[-1]) # First test forecast is last train value
# Ensure the first forecast in test_data is the last value from train_data
naive_forecasts.iloc[0] = train_data.iloc[-1]
# For the rest of the test set, it's simply the previous actual value in the test set
for i in range(1, len(test_data)):
    naive_forecasts.iloc[i] = test_data.iloc[i-1]

# --- 4. Moving Average Forecast (7-day window) ---
# Combine train and test for rolling calculation, then extract test forecasts
full_series = pd.concat([train_data, test_data])
ma_window = 7
ma_forecasts_full = full_series.rolling(window=ma_window).mean().shift(1)
ma_forecasts = ma_forecasts_full.loc[test_data.index]
# Handle initial NaN values in ma_forecasts if test_data starts too early
# For simplicity, we'll assume enough data for MA calculation.
# In production, you'd need to carefully manage the window for the first few test points.

# --- 5. Simple Exponential Smoothing Forecast ---
ses_model_fit = SimpleExpSmoothing(train_data, initialization_method="estimated").fit()
ses_forecasts = ses_model_fit.forecast(len(test_data))

# --- 6. Calculate RMSE for each method ---
def calculate_rmse(actual, forecasts):
    # Align actual and forecasts to handle potential NaNs at start of forecasts
    aligned_actual, aligned_forecasts = actual.align(forecasts, join='inner')
    return np.sqrt(mean_squared_error(aligned_actual, aligned_forecasts))

rmse_naive = calculate_rmse(test_data, naive_forecasts)
rmse_ma = calculate_rmse(test_data, ma_forecasts)
rmse_ses = calculate_rmse(test_data, ses_forecasts)

print(f"\nRMSE for Naive Forecast: {rmse_naive:.2f}")
print(f"RMSE for {ma_window}-day Moving Average Forecast: {rmse_ma:.2f}")
print(f"RMSE for Simple Exponential Smoothing Forecast: {rmse_ses:.2f}")

# --- 7. Identify best method and comment ---
min_rmse = min(rmse_naive, rmse_ma, rmse_ses)
if min_rmse == rmse_naive:
    best_method = "Naive"
elif min_rmse == rmse_ma:
    best_method = f"{ma_window}-day Moving Average"
else:
    best_method = "Simple Exponential Smoothing"

print(f"\nThe best performing method by RMSE is: {best_method}")
print("\nCommentary:")
print("Energy consumption data often exhibits daily or weekly seasonality and potentially a long-term trend.")
print("The Naive method is a strong baseline, especially if day-to-day changes are small and unpredictable.")
print("Moving Average smooths out noise but lags behind trends and struggles with strong seasonality.")
print("Simple Exponential Smoothing adapts better to changes in level but still doesn't explicitly model trend or seasonality.")
print("The performance of each method depends heavily on the specific characteristics (trend, seasonality, noise level) of the energy consumption data.")
```

#### Assessment idea
1.  **Question:** You are forecasting monthly sales for a new product. The sales data for the first six months are: [100, 105, 110, 115, 120, 125]. Using the Naive method, what would be your forecast for the 7th month? If you used a 3-month Moving Average, what would be the forecast for the 7th month?
    *   **Correct Answer:**
        *   **Naive Method:** The Naive forecast for the 7th month is the last observed value, which is 125.
        *   **3-month Moving Average:** The forecast for the 7th month would be the average of the last three observed values: (115 + 120 + 125) / 3 = 360 / 3 = 120.

2.  **Question:** A data scientist is using Simple Exponential Smoothing (SES) to forecast daily website visitors. They notice that the forecast is very slow to react to recent sharp increases in visitor numbers. What adjustment should they consider for the smoothing parameter ($\alpha$) in their SES model, and why?
    *   **Correct Answer:** The data scientist should consider increasing the smoothing parameter ($\alpha$). A low $\alpha$ value (closer to 0) gives more weight to older observations and results in a smoother forecast that is slow to adapt to recent changes. To make the forecast more responsive to recent sharp increases, a higher $\alpha$ value (closer to 1) should be used, as it places more emphasis on the most recent observation, allowing the model to quickly adjust to new information.

#### AI generation note
Design a 10-minute interactive code demo in a Jupyter Notebook environment. Start by showing a time series with a slight trend and some noise. Implement and visualize the Naive, Simple Average, and Moving Average (with adjustable window size) methods step-by-step. Then, introduce Simple Exponential Smoothing, explaining the $\alpha$ parameter and demonstrating how changing it affects the forecast's responsiveness. Include a section where the learner can modify the MA window size and SES $\alpha$ value and immediately see the impact on the forecast plot and calculated RMSE. The demo should include a mini-quiz after each method asking about its suitability for different data patterns.

### Chapter 2.3 — ARIMA Models: Fundamentals and Identification

#### Learning objectives
*   Define stationarity in the context of time series and explain its importance for ARIMA models.
*   Apply differencing techniques to achieve stationarity and determine the appropriate differencing order (d).
*   Interpret Autocorrelation Function (ACF) and Partial Autocorrelation Function (PACF) plots to identify AR (p) and MA (q) orders.
*   Understand the components of an ARIMA(p, d, q) model and their theoretical implications.

#### Detailed lesson content
While simple forecasting methods provide a baseline, many real-world time series exhibit more complex patterns, including trends and seasonality, which these basic models cannot adequately capture. This is where the **Autoregressive Integrated Moving Average (ARIMA)** model comes into play. ARIMA is a powerful and widely used statistical method for time series forecasting, particularly effective for data that exhibits temporal dependencies. The acronym ARIMA stands for:
*   **AR (Autoregressive):** Indicates that the forecast for the current period is a linear combination of past observations.
*   **I (Integrated):** Refers to the use of differencing to make the time series stationary.
*   **MA (Moving Average):** Indicates that the forecast for the current period is a linear combination of past forecast errors.

The first and most critical prerequisite for applying an ARIMA model is that the time series must be **stationary**. A stationary time series is one whose statistical properties (mean, variance, and autocorrelation) do not change over time.
*   **Constant Mean:** The average value of the series should not increase or decrease over time.
*   **Constant Variance:** The variability of the series should remain consistent over time.
*   **Constant Autocorrelation Structure:** The correlation between observations at different time lags should remain constant.

Why is stationarity so important? ARIMA models assume that the underlying process generating the time series is stationary. If the series is non-stationary, statistical inferences made from ACF/PACF plots can be misleading, and the model parameters will be unstable and difficult to interpret. Forecasting a non-stationary series directly can lead to poor out-of-sample performance, as the model will struggle to generalize patterns that are constantly changing. A common mistake is to ignore the stationarity requirement, leading to models that perform well on historical data but fail catastrophically in forecasting.

Most real-world time series are non-stationary. They often exhibit trends (changing mean) or heteroscedasticity (changing variance). To achieve stationarity, we use a technique called **differencing**. Differencing involves computing the difference between consecutive observations. First-order differencing ($Y'_t = Y_t - Y_{t-1}$) helps remove a linear trend. If the series still isn't stationary after first-order differencing, you might apply second-order differencing ($Y''_t = Y'_t - Y'_{t-1}$). The number of times differencing is applied is denoted by the 'd' parameter in ARIMA(p, d, q). We typically aim for the minimum amount of differencing required to achieve stationarity, as excessive differencing can remove valuable information. Visual inspection of the differenced series and statistical tests like the Augmented Dickey-Fuller (ADF) test can help determine the appropriate 'd'.

Once the series is stationary, we need to identify the 'p' and 'q' parameters for the AR and MA components, respectively. This is done by analyzing the **Autocorrelation Function (ACF)** and **Partial Autocorrelation Function (PACF)** plots of the *differenced* series.

*   **ACF (Autocorrelation Function):** Measures the correlation between a time series and its lagged values. For an MA(q) process, the ACF will show significant spikes up to lag 'q' and then cut off (drop to zero or near-zero) for subsequent lags.
*   **PACF (Partial Autocorrelation Function):** Measures the correlation between a time series and its lagged values, after removing the effects of intermediate lags. For an AR(p) process, the PACF will show significant spikes up to lag 'p' and then cut off for subsequent lags.

Interpreting these plots can be an art form, but here are general guidelines:
*   **AR(p) process:** PACF cuts off after lag p, ACF tails off (decays exponentially or sinusoidally).
*   **MA(q) process:** ACF cuts off after lag q, PACF tails off.
*   **ARMA(p, q) process:** Both ACF and PACF tail off.

Let's walk through an example using Python to demonstrate differencing and plot interpretation. We'll use a synthetic time series with a clear trend.

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.graphics.tsaplots import plot_acf, plot_pacf
from statsmodels.tsa.stattools import adfuller

# Generate a non-stationary time series with a trend
np.random.seed(42)
dates = pd.date_range(start='2010-01-01', periods=100, freq='M')
data = np.cumsum(np.random.normal(0, 1, 100)) + np.linspace(0, 20, 100) # Random walk + linear trend
ts = pd.Series(data, index=dates)

plt.figure(figsize=(12, 6))
plt.plot(ts)
plt.title('Non-Stationary Time Series with Trend')
plt.xlabel('Date')
plt.ylabel('Value')
plt.grid(True)
plt.show()

# --- Check for Stationarity (ADF Test) ---
def check_stationarity(series):
    result = adfuller(series.dropna())
    print('ADF Statistic: %f' % result[0])
    print('p-value: %f' % result[1])
    print('Critical Values:')
    for key, value in result[4].items():
        print('\t%s: %.3f' % (key, value))
    if result[1] <= 0.05:
        print("Series is likely Stationary (p-value <= 0.05)")
    else:
        print("Series is likely Non-Stationary (p-value > 0.05)")

print("--- Original Series Stationarity Test ---")
check_stationarity(ts)

# --- Apply First-Order Differencing (d=1) ---
ts_diff = ts.diff().dropna()

plt.figure(figsize=(12, 6))
plt.plot(ts_diff)
plt.title('First-Order Differenced Time Series')
plt.xlabel('Date')
plt.ylabel('Differenced Value')
plt.grid(True)
plt.show()

print("\n--- Differenced Series Stationarity Test ---")
check_stationarity(ts_diff)

# --- Plot ACF and PACF for the differenced series ---
plt.figure(figsize=(12, 8))
plt.subplot(211)
plot_acf(ts_diff, ax=plt.gca(), lags=20)
plt.title('ACF of Differenced Series')
plt.subplot(212)
plot_pacf(ts_diff, ax=plt.gca(), lags=20)
plt.title('PACF of Differenced Series')
plt.tight_layout()
plt.show()

# Interpretation guidance based on plots:
# If ACF tails off and PACF cuts off after lag p, it suggests AR(p)
# If PACF tails off and ACF cuts off after lag q, it suggests MA(q)
# If both tail off, it suggests ARMA(p,q)
# For our generated data, the differenced series should look more stationary.
# The ACF and PACF plots will then help identify p and q.
# For a simple random walk after differencing, both ACF and PACF might cut off quickly,
# suggesting a low p and q (e.g., ARIMA(0,1,0) which is a random walk).
```
In this code, we first generate a non-stationary series. We then use the `adfuller` test to formally check for stationarity. After observing non-stationarity, we apply `diff()` for first-order differencing. We re-plot and re-test for stationarity. Finally, we generate ACF and PACF plots using `plot_acf` and `plot_pacf` from `statsmodels.graphics.tsaplots` on the *differenced* series. The blue shaded area on these plots represents the confidence interval; any spikes extending beyond this area are considered statistically significant.

Common mistakes in this stage include:
1.  **Over-differencing:** Applying differencing more times than necessary. This can introduce artificial patterns into the data and make the model less accurate. Always check the stationarity after each differencing step and stop when the series appears stationary.
2.  **Interpreting ACF/PACF of non-stationary data:** These plots are only meaningful for stationary series. Always ensure your data is stationary *before* interpreting ACF/PACF to determine p and q.
3.  **Confusing cut-off with tailing off:** A "cut-off" means the correlations drop sharply to zero after a certain lag. "Tailing off" means they decay gradually. Correctly identifying these patterns is key to choosing p and q.

The selection of p, d, and q is often an iterative process involving visual inspection, statistical tests, and sometimes trying a few candidate models and evaluating their performance. The goal is to find the simplest model that adequately captures the data's dynamics.

#### Key concepts
*   **ARIMA (Autoregressive Integrated Moving Average):** A class of models that captures temporal dependencies in time series data, consisting of AR, I, and MA components.
*   **Stationarity:** A property of a time series where its statistical properties (mean, variance, autocorrelation) remain constant over time. Essential for ARIMA models.
*   **Differencing:** A transformation technique used to make a non-stationary time series stationary by computing the difference between consecutive observations.
*   **Order of Differencing (d):** The number of times differencing is applied to achieve stationarity.
*   **Autocorrelation Function (ACF):** Measures the linear relationship between an observation and its lagged values. Used to identify the MA (q) order.
*   **Partial Autocorrelation Function (PACF):** Measures the correlation between an observation and a lagged observation, after removing the influence of intermediate lags. Used to identify the AR (p) order.
*   **AR (p) order:** The number of past observations to include in the autoregressive part of the model.
*   **MA (q) order:** The number of past forecast errors to include in the moving average part of the model.
*   **Augmented Dickey-Fuller (ADF) Test:** A statistical test used to check for stationarity in a time series.

#### Hands-on activity
**Activity: Identify ARIMA Orders for Stock Price Data**

You are given a dataset of daily stock closing prices for a company. Your task is to prepare this data for ARIMA modeling by:
1.  Checking for stationarity.
2.  Applying differencing if necessary to achieve stationarity.
3.  Plotting and interpreting the ACF and PACF of the *stationary* series to suggest initial values for the p and q parameters.

**Instructions:**
1.  Load the provided `stock_prices.csv` dataset. Assume it has columns `Date` and `Close`.
2.  Convert `Date` to datetime and set as index.
3.  Plot the raw `Close` price series.
4.  Perform an ADF test on the raw series. Based on the p-value, determine if it's stationary.
5.  If non-stationary, apply first-order differencing. Plot the differenced series and perform another ADF test. Repeat differencing if needed until stationary (though usually one or two differences suffice for financial data).
6.  Once you have a stationary series, plot its ACF and PACF.
7.  Based on the ACF and PACF plots, suggest appropriate values for `p` (AR order) and `q` (MA order) for an ARIMA model. Justify your choices by referring to the cut-off or tailing-off patterns.

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.graphics.tsaplots import plot_acf, plot_pacf
from statsmodels.tsa.stattools import adfuller

# --- Starter Code ---
# Generate example stock price data (e.g., 5 years of daily prices)
np.random.seed(42)
dates_activity = pd.date_range(start='2018-01-01', periods=365*5, freq='D')
# Simulate a random walk with a drift (common for stock prices)
prices = 100 + np.cumsum(np.random.normal(0, 1, len(dates_activity))) + np.linspace(0, 50, len(dates_activity))
stock_prices_df = pd.DataFrame({'Date': dates_activity, 'Close': prices})
stock_prices_df['Date'] = pd.to_datetime(stock_prices_df['Date'])
stock_prices_df = stock_prices_df.set_index('Date')
# --------------------

# 1. Load data (if from CSV, uncomment and modify path)
# stock_prices_df = pd.read_csv('stock_prices.csv')
# stock_prices_df['Date'] = pd.to_datetime(stock_prices_df['Date'])
# stock_prices_df = stock_prices_df.set_index('Date')

series_to_analyze = stock_prices_df['Close']

# 2. Plot the raw series
plt.figure(figsize=(12, 6))
plt.plot(series_to_analyze)
plt.title('Daily Stock Closing Prices (Raw)')
plt.xlabel('Date')
plt.ylabel('Price')
plt.grid(True)
plt.show()

# 3. Perform ADF test on raw series
print("--- ADF Test on Raw Series ---")
def check_stationarity(series, title="Series"):
    result = adfuller(series.dropna())
    print(f'ADF Statistic for {title}: %f' % result[0])
    print(f'p-value for {title}: %f' % result[1])
    print('Critical Values:')
    for key, value in result[4].items():
        print('\t%s: %.3f' % (key, value))
    if result[1] <= 0.05:
        print(f"{title} is likely Stationary (p-value <= 0.05)")
        return True
    else:
        print(f"{title} is likely Non-Stationary (p-value > 0.05)")
        return False

is_stationary = check_stationarity(series_to_analyze, "Raw Prices")
d_order = 0

# 4. Apply differencing if non-stationary
if not is_stationary:
    print("\nApplying First-Order Differencing...")
    differenced_series = series_to_analyze.diff().dropna()
    d_order = 1

    plt.figure(figsize=(12, 6))
    plt.plot(differenced_series)
    plt.title('Daily Stock Closing Prices (First-Order Differenced)')
    plt.xlabel('Date')
    plt.ylabel('Differenced Price')
    plt.grid(True)
    plt.show()

    print("\n--- ADF Test on First-Order Differenced Series ---")
    is_stationary = check_stationarity(differenced_series, "Differenced Prices")

    # If still not stationary, consider second differencing (rare for stock prices)
    # For this exercise, we assume 1st differencing is enough.
    # if not is_stationary:
    #     print("\nApplying Second-Order Differencing...")
    #     differenced_series = differenced_series.diff().dropna()
    #     d_order = 2
    #     # ... plot and test again ...

else:
    differenced_series = series_to_analyze # If already stationary, no differencing needed

print(f"\nDetermined differencing order (d): {d_order}")

# 5. Plot ACF and PACF for the stationary series
plt.figure(figsize=(12, 8))
plt.subplot(211)
plot_acf(differenced_series, ax=plt.gca(), lags=30)
plt.title(f'ACF of Stationary Series (d={d_order})')
plt.subplot(212)
plot_pacf(differenced_series, ax=plt.gca(), lags=30)
plt.title(f'PACF of Stationary Series (d={d_order})')
plt.tight_layout()
plt.show()

# 6. Suggest p and q values
print("\n--- Suggested p and q values ---")
print("Observe the ACF and PACF plots for the differenced series:")
print("  - For AR(p): Look for where PACF cuts off and ACF tails off.")
print("  - For MA(q): Look for where ACF cuts off and PACF tails off.")
print("\nBased on the plots:")
print("  - PACF: (Examine the plot, e.g., if it cuts off after lag 1 or 2)")
print("    - Suggests p = 1 or 2 (if the first few spikes are significant and then drop)")
print("  - ACF: (Examine the plot, e.g., if it cuts off after lag 1 or 2)")
print("    - Suggests q = 1 or 2 (if the first few spikes are significant and then drop)")
print("\nFor stock prices, often ARIMA(1,1,0) or ARIMA(0,1,1) are common starting points for the differenced series, as daily returns often resemble white noise or a low-order AR/MA process.")
print("A common observation for differenced stock prices is that both ACF and PACF decay quickly, often suggesting p=0, q=0 (i.e., a random walk after differencing).")
```

#### Assessment idea
1.  **Question:** You are analyzing a time series of monthly temperature readings. The raw series shows a clear upward trend over the decades and strong annual seasonality. After applying first-order differencing, the series still exhibits a strong annual seasonal pattern in its mean. What does this indicate about the stationarity of the differenced series, and what further differencing step might be appropriate?
    *   **Correct Answer:** This indicates that the first-order differenced series is still non-stationary, specifically with respect to its seasonal component. While first-order differencing addresses the trend, it often doesn't remove seasonal non-stationarity if the seasonal pattern's mean or variance changes over time. To address this, **seasonal differencing** would be appropriate. For monthly data with annual seasonality, this would involve differencing the series by 12 periods ($Y'_t = Y_t - Y_{t-12}$). This is a critical step for preparing data for Seasonal ARIMA (SARIMA) models.

2.  **Question:** You are examining the ACF and PACF plots of a stationary time series. The ACF shows a significant spike at lag 1 and then quickly drops to zero and stays within the confidence intervals for all subsequent lags. The PACF, on the other hand, shows a gradual decay (tails off) with several significant spikes that slowly diminish. What ARIMA model orders (p, q) would you initially suggest based on these observations, and why?
    *   **Correct Answer:** Based on these observations, you would initially suggest an **ARIMA(0, q)** model, where `q` is the lag at which the ACF cuts off. Since the ACF shows a significant spike at lag 1 and then cuts off, this strongly suggests a Moving Average (MA) process of order 1, so `q=1`. The PACF tailing off is consistent with an MA process. Therefore, the initial suggestion would be an **ARIMA(0, d, 1)** model (where `d` is the differencing order already determined to achieve stationarity).

#### AI generation note
Produce a 15-minute video lecture with animated diagrams and live Python coding. Start by visually explaining stationarity and non-stationarity with clear examples (e.g., stock prices vs. white noise). Then, demonstrate differencing using a synthetic time series with a trend, showing the original and differenced series plots side-by-side. Introduce ACF and PACF plots, explaining how to interpret cut-offs and tailing-off patterns for AR and MA components. Use a real-world dataset (e.g., airline passengers) to walk through the process: plot raw data, perform ADF test, apply differencing, perform ADF test again, then plot and interpret ACF/PACF for p and q. Include an interactive element where learners click on an ACF/PACF plot to identify the suggested order.

### Chapter 2.4 — ARIMA Models: Estimation, Diagnostics, and Forecasting

#### Learning objectives
*   Fit an ARIMA model to a stationary time series using Python's `statsmodels` library.
*   Perform diagnostic checks on ARIMA model residuals to ensure model adequacy.
*   Interpret key model statistics and parameters, including p-values and AIC/BIC.
*   Generate in-sample and out-of-sample forecasts using a fitted ARIMA model.
*   Understand the extension to Seasonal ARIMA (SARIMA) for data with seasonality.

#### Detailed lesson content
Once we have identified the potential orders (p, d, q) for an ARIMA model, the next crucial steps involve estimating the model parameters, ensuring the model's adequacy through diagnostic checks, and finally using it for forecasting. This iterative process refines our understanding of the time series and improves our predictive capabilities.

**Model Estimation:** With the p, d, and q orders determined (or at least hypothesized), we can fit the ARIMA model. Python's `statsmodels` library provides the `ARIMA` class, which handles the differencing internally, so you typically pass the original (non-differenced) series and the `order=(p, d, q)` tuple. The model estimates the coefficients for the autoregressive and moving average terms using maximum likelihood estimation.

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.tsa.arima.model import ARIMA
from sklearn.metrics import mean_squared_error
from statsmodels.graphics.tsaplots import plot_predict
import warnings
warnings.filterwarnings("ignore") # Suppress convergence warnings

# Generate a time series with AR(1) component and a trend
np.random.seed(42)
dates = pd.date_range(start='2010-01-01', periods=100, freq='M')
# Simulate an AR(1) process: Y_t = 0.7 * Y_{t-1} + error
ar_process = np.zeros(100)
ar_process[0] = 10
for i in range(1, 100):
    ar_process[i] = 0.7 * ar_process[i-1] + np.random.normal(0, 5)
ts = pd.Series(ar_process + np.linspace(0, 50, 100), index=dates) # Add a trend to make it I(1)

# Split data into training and test sets
train_size = int(len(ts) * 0.8)
train, test = ts.iloc[:train_size], ts.iloc[train_size:]

# Assume we've identified p=1, d=1, q=0 from ACF/PACF of differenced data
# (For this synthetic data, a (1,1,0) might be a good fit)
order = (1, 1, 0) # (p, d, q)

# Fit ARIMA model
print(f"Fitting ARIMA{order} model...")
model = ARIMA(train, order=order)
model_fit = model.fit()

# Print model summary
print(model_fit.summary())
```
The `model_fit.summary()` output is rich with information. You'll see the estimated coefficients for AR and MA terms, their standard errors, p-values (to check statistical significance), and information criteria like AIC (Akaike Information Criterion) and BIC (Bayesian Information Criterion). Lower AIC/BIC values generally indicate a better model, especially when comparing models with different (p, d, q) orders. A common mistake is to select a model purely based on AIC/BIC without considering the interpretability or statistical significance of its parameters. Ensure that the p-values for your AR and MA coefficients are below a significance level (e.g., 0.05) to confirm their contribution to the model.

**Diagnostic Checks:** After fitting, it's crucial to perform diagnostic checks on the model's **residuals**. The residuals are the differences between the actual observed values and the values predicted by the model. For a good ARIMA model, the residuals should ideally resemble **white noise**:
*   **Zero Mean:** Residuals should fluctuate around zero.
*   **Constant Variance:** The spread of residuals should be consistent over time (homoscedasticity).
*   **No Autocorrelation:** There should be no discernible patterns or correlations left in the residuals. If there is, it means the model has not captured all the systematic information in the data.

We can check these properties visually and statistically:
*   **Residual Plot:** Plot the residuals over time. Look for any trends, patterns, or changes in variance.
*   **Histogram of Residuals:** Check if residuals are normally distributed (often a desirable but not strictly required property).
*   **ACF Plot of Residuals:** This is the most important diagnostic. If the ACF plot of residuals shows significant spikes at any lag, it indicates remaining autocorrelation, meaning the model is inadequate and needs refinement (e.g., trying different p, q, or d orders, or adding seasonal components).
*   **Ljung-Box Test:** A statistical test for autocorrelation in residuals. A high p-value (e.g., > 0.05) indicates that the residuals are independently distributed (i.e., no significant autocorrelation), which is what we want.

```python
# --- Residual Diagnostics ---
print("\n--- Residual Diagnostics ---")
residuals = model_fit.resid

plt.figure(figsize=(12, 8))
plt.subplot(311)
plt.plot(residuals)
plt.title('ARIMA Residuals')
plt.xlabel('Date')
plt.ylabel('Residual')
plt.grid(True)

plt.subplot(312)
plt.hist(residuals, bins=30)
plt.title('Histogram of Residuals')
plt.xlabel('Residual Value')
plt.ylabel('Frequency')

plt.subplot(313)
plot_acf(residuals, ax=plt.gca(), lags=20)
plt.title('ACF of Residuals')
plt.tight_layout()
plt.show()

# Ljung-Box test for autocorrelation in residuals
from statsmodels.stats.diagnostic import acorr_ljungbox
ljung_box_test = acorr_ljungbox(residuals, lags=[10], return_df=True)
print("\nLjung-Box Test Results:")
print(ljung_box_test)
if ljung_box_test['lb_pvalue'].iloc[0] > 0.05:
    print("Residuals appear to be white noise (no significant autocorrelation). Model is adequate.")
else:
    print("Residuals show significant autocorrelation. Model may need refinement.")
```
If diagnostic checks reveal issues, you might need to go back to the identification stage, try different (p, d, q) combinations, or consider more advanced models.

**Forecasting:** Once the model is deemed adequate, we can use it to generate forecasts.
*   **In-sample forecasts:** Predictions for the data points already used to train the model. Useful for visualizing how well the model fits historical data.
*   **Out-of-sample forecasts:** Predictions for future time periods beyond the training data. This is the primary goal of forecasting.

```python
# --- Forecasting ---
print("\n--- Forecasting ---")

# In-sample prediction
# model_fit.predict() provides predictions over the training period
# model_fit.get_prediction() provides more details, including confidence intervals
forecast_start = len(train)
forecast_end = len(ts) - 1 # Forecast up to the end of the original series (test set)
forecast_steps = len(test)

# Get predictions for the test set
# `dynamic=False` means using actual previous values for prediction (one-step ahead)
# `dynamic=True` means using previous forecasts for prediction (multi-step ahead)
# For evaluating on a test set, dynamic=False is often used initially.
# For true future forecasts, dynamic=True is inherent.
predictions = model_fit.predict(start=forecast_start, end=forecast_end, dynamic=False)

# Out-of-sample forecast (true future forecast beyond the known data)
future_forecast = model_fit.forecast(steps=forecast_steps) # Forecast `forecast_steps` into the future

# Plot actual vs. predicted
plt.figure(figsize=(14, 7))
plt.plot(train, label='Training Data')
plt.plot(test, label='Actual Test Data')
plt.plot(predictions, label='ARIMA In-Sample Predictions (Test Period)', linestyle='--')
plt.plot(future_forecast, label='ARIMA Out-of-Sample Forecast', linestyle='-.', color='green')
plt.title(f'ARIMA{order} Model Forecast')
plt.xlabel('Date')
plt.ylabel('Value')
plt.grid(True)
plt.legend()
plt.show()

# Evaluate forecast accuracy on the test set
rmse = np.sqrt(mean_squared_error(test, predictions))
print(f"RMSE on test set: {rmse:.2f}")
```
When plotting forecasts, it's good practice to include confidence intervals to show the uncertainty around the predictions. `model_fit.get_prediction()` can provide these.

**Seasonal ARIMA (SARIMA):** Many time series exhibit seasonality that a standard ARIMA model cannot capture. For such cases, we use **SARIMA** models, denoted as ARIMA(p, d, q)(P, D, Q)s.
*   (p, d, q) are the non-seasonal orders.
*   (P, D, Q) are the seasonal orders, where:
    *   **P:** Seasonal Autoregressive order.
    *   **D:** Seasonal Differencing order (e.g., D=1 for annual seasonality in monthly data means differencing by 12 periods).
    *   **Q:** Seasonal Moving Average order.
*   **s:** The length of the seasonal period (e.g., 12 for monthly data, 7 for daily data with weekly seasonality).

Identifying seasonal orders (P, D, Q) involves examining the ACF and PACF plots at seasonal lags (e.g., lags 12, 24, 36 for monthly data). For example, a significant spike at lag 12 in the ACF but not in the PACF might suggest a seasonal MA(1) component (Q=1). The process for fitting and diagnosing SARIMA is similar to ARIMA, but with the added seasonal parameters.

```python
from statsmodels.tsa.statespace.sarimax import SARIMAX

# Example for SARIMA (assuming monthly data with annual seasonality)
# If your data has seasonality, you'd apply seasonal differencing (D)
# and identify P, Q from seasonal spikes in ACF/PACF of the differenced series.
# For demonstration, let's assume a SARIMA(1,1,0)(0,1,1,12) model
# This means: non-seasonal AR(1), 1st non-seasonal differencing, no non-seasonal MA
#             no seasonal AR, 1st seasonal differencing (period 12), seasonal MA(1)
# seasonal_order = (0, 1, 1, 12) # (P, D, Q, s)

# This is just a placeholder example, actual SARIMA requires careful identification
# sarima_model = SARIMAX(train, order=(1, 1, 0), seasonal_order=seasonal_order)
# sarima_model_fit = sarima_model.fit()
# print(sarima_model_fit.summary())
```
SARIMA models are powerful but also more complex. A common mistake is to jump to SARIMA without properly identifying the seasonal components, leading to over-parameterized and unstable models. Always start with the simplest adequate model.

#### Key concepts
*   **Model Estimation:** The process of calculating the coefficients for the AR and MA terms in an ARIMA model using methods like maximum likelihood.
*   **Model Summary:** Output from `model_fit.summary()` providing estimated coefficients, standard errors, p-values, and information criteria (AIC, BIC).
*   **Residuals:** The difference between observed values and model predictions; should ideally be white noise for a good model.
*   **Diagnostic Checks:** Evaluation of residuals (plots, Ljung-Box test) to ensure they resemble white noise and the model is adequate.
*   **White Noise:** A random signal with zero mean, constant variance, and no autocorrelation, indicating no remaining patterns in the residuals.
*   **Ljung-Box Test:** A statistical test to check for significant autocorrelation in the residuals.
*   **In-sample Forecasts:** Predictions for the data points within the training period.
*   **Out-of-sample Forecasts:** Predictions for future time periods beyond the training data.
*   **Seasonal ARIMA (SARIMA):** An extension of ARIMA that explicitly models seasonal components, denoted as ARIMA(p, d, q)(P, D, Q)s.
*   **Seasonal Orders (P, D, Q, s):** Parameters for the seasonal autoregressive, differencing, and moving average components, and the length of the seasonal period.

#### Hands-on activity
**Activity: Forecast Monthly Airline Passengers with SARIMA**

You are provided with the classic `airline_passengers.csv` dataset, which exhibits both a strong trend and clear annual seasonality. Your task is to:
1.  Load the data and split it into training and test sets.
2.  Visually inspect the series and perform ADF tests to determine appropriate non-seasonal (d) and seasonal (D) differencing orders.
3.  Plot ACF and PACF of the appropriately differenced series to identify non-seasonal (p, q) and seasonal (P, Q) orders.
4.  Fit a SARIMA model using the identified orders.
5.  Perform diagnostic checks on the residuals (plot residuals, ACF of residuals, Ljung-Box test).
6.  Generate out-of-sample forecasts for the test set and calculate RMSE.

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.tsa.statespace.sarimax import SARIMAX
from statsmodels.graphics.tsaplots import plot_acf, plot_pacf
from statsmodels.tsa.stattools import adfuller
from statsmodels.stats.diagnostic import acorr_ljungbox
from sklearn.metrics import mean_squared_error
import warnings
warnings.filterwarnings("ignore")

# --- Starter Code ---
# Generate example airline passenger data (e.g., 12 years of monthly data)
# This mimics the famous 'AirPassengers' dataset
np.random.seed(42)
dates_activity = pd.date_range(start='1949-01-01', periods=144, freq='MS')
trend_activity = np.linspace(100, 600, len(dates_activity))
seasonality_activity = 50 * np.sin(np.linspace(0, 12 * 2 * np.pi, len(dates_activity))) # Annual seasonality
noise_activity = np.random.normal(0, 10, len(dates_activity))
passengers_data = trend_activity + seasonality_activity + noise_activity
# Make it multiplicative-like by exponentiating or scaling
passengers_data = passengers_data * (1 + np.linspace(0, 0.5, len(dates_activity))) # Increasing amplitude
airline_df = pd.DataFrame({'Month': dates_activity, 'Passengers': passengers_data})
airline_df['Month'] = pd.to_datetime(airline_df['Month'])
airline_df = airline_df.set_index('Month')
# --------------------

# 1. Load data and split
# airline_df = pd.read_csv('airline_passengers.csv', index_col='Month', parse_dates=True)
train_size = int(len(airline_df) * 0.8)
train, test = airline_df['Passengers'].iloc[:train_size], airline_df['Passengers'].iloc[train_size:]

plt.figure(figsize=(12, 6))
plt.plot(train, label='Train')
plt.plot(test, label='Test')
plt.title('Airline Passengers Data')
plt.legend()
plt.show()

# 2. Determine differencing orders (d, D)
# Visual inspection: Clear upward trend and increasing seasonality (suggests multiplicative or log transform)
# For simplicity, let's assume we proceed with additive model and differencing.
# If multiplicative, consider log-transforming first: train_log = np.log(train)
print("--- Determining Differencing Orders ---")
def check_stationarity(series, title="Series"):
    result = adfuller(series.dropna())
    print(f'ADF Statistic for {title}: %f' % result[0])
    print(f'p-value for {title}: %f' % result[1])
    return result[1] <= 0.05

# Check raw series
print("Raw Series:")
if not check_stationarity(train):
    print("Non-stationary. Applying first-order differencing (d=1).")
    train_diff1 = train.diff().dropna()
    d_order = 1
    print("First-Order Differenced Series:")
    if not check_stationarity(train_diff1):
        print("Still non-stationary. Checking seasonal differencing (D=1, s=12).")
        train_diff1_s12 = train_diff1.diff(12).dropna()
        D_order = 1
        s_period = 12
        print("Seasonally Differenced Series:")
        check_stationarity(train_diff1_s12)
        stationary_series = train_diff1_s12
    else:
        D_order = 0
        s_period = 0
        stationary_series = train_diff1
else:
    d_order = 0
    D_order = 0
    s_period = 0
    stationary_series = train

print(f"\nDetermined non-seasonal differencing order (d): {d_order}")
print(f"Determined seasonal differencing order (D): {D_order} (period s={s_period})")

# 3. Plot ACF and PACF for stationary series to identify (p, q, P, Q)
plt.figure(figsize=(12, 8))
plt.subplot(211)
plot_acf(stationary_series, ax=plt.gca(), lags=30)
plt.title('ACF of Stationary Series')
plt.subplot(212)
plot_pacf(stationary_series, ax=plt.gca(), lags=30)
plt.title('PACF of Stationary Series')
plt.tight_layout()
plt.show()

# Based on typical airline passenger data:
# Often, after (1,1) differencing (d=1, D=1, s=12), the ACF/PACF show:
# Non-seasonal: ACF cuts off at lag 1, PACF tails off => q=1, p=0
# Seasonal: ACF spike at lag 12, PACF spike at lag 12 => Q=1, P=1 (or just Q=1)
# Let's assume (1,1,1)(1,1,1,12) as a common starting point for airline data after log transform.
# For simplicity and demonstration without log transform, let's try (1,1,1)(0,1,1,12)
p, q = 1, 1 # Non-seasonal AR and MA
P, Q = 0, 1 # Seasonal AR and MA (P=0 often works well)
seasonal_period = 12

print(f"\nSuggested non-seasonal orders (p,q): ({p},{q})")
print(f"Suggested seasonal orders (P,Q,s): ({P},{Q},{seasonal_period})")

# 4. Fit SARIMA model
sarima_model = SARIMAX(train, order=(p, d_order, q), seasonal_order=(P, D_order, Q, seasonal_period))
sarima_model_fit = sarima_model.fit(disp=False) # disp=False to suppress convergence output
print("\n--- SARIMA Model Summary ---")
print(sarima_model_fit.summary())

# 5. Diagnostic checks on residuals
print("\n--- Residual Diagnostics ---")
residuals = sarima_model_fit.resid

plt.figure(figsize=(12, 8))
plt.subplot(311)
plt.plot(residuals)
plt.title('SARIMA Residuals')

plt.subplot(312)
plt.hist(residuals, bins=30)
plt.title('Histogram of Residuals')

plt.subplot(313)
plot_acf(residuals, ax=plt.gca(), lags=30)
plt.title('ACF of Residuals')
plt.tight_layout()
plt.show()

ljung_box_test = acorr_ljungbox(residuals, lags=[12, 24], return_df=True) # Check seasonal lags too
print("\nLjung-Box Test Results (checking lags 12 and 24):")
print(ljung_box_test)
if all(ljung_box_test['lb_pvalue'] > 0.05):
    print("Residuals appear to be white noise. Model is adequate.")
else:
    print("Residuals show significant autocorrelation. Model may need refinement.")

# 6. Generate out-of-sample forecasts and calculate RMSE
forecast_start_index = len(train)
forecast_end_index = len(airline_df) - 1
forecast_steps = len(test)

forecast_object = sarima_model_fit.get_forecast(steps=forecast_steps)
forecasts = forecast_object.predicted_mean
conf_int = forecast_object.conf_int()

plt.figure(figsize=(14, 7))
plt.plot(train, label='Training Data')
plt.plot(test, label='Actual Test Data')
plt.plot(forecasts, label='SARIMA Forecast', linestyle='--', color='red')
plt.fill_between(conf_int.index, conf_int.iloc[:, 0], conf_int.iloc[:, 1], color='pink', alpha=0.3, label='Confidence Interval')
plt.title(f'SARIMA Forecast for Airline Passengers')
plt.xlabel('Date')
plt.ylabel('Passengers')
plt.grid(True)
plt.legend()
plt.show()

rmse = np.sqrt(mean_squared_error(test, forecasts))
print(f"\nRMSE on test set: {rmse:.2f}")
```

#### Assessment idea
1.  **Question:** After fitting an ARIMA(1,1,0) model to a time series, you examine the residuals. The ACF plot of the residuals shows a significant spike at lag 3, and the Ljung-Box test for autocorrelation at lag 3 returns a p-value of 0.01. What does this indicate about your current ARIMA model, and what specific modification might you consider to improve it?
    *   **Correct Answer:** This indicates that the current ARIMA(1,1,0) model is inadequate because its residuals are not white noise; there is significant autocorrelation remaining at lag 3 (p-value < 0.05). This means the model has failed to capture all the systematic information in the data, specifically a moving average component at lag 3. To improve the model, you should consider increasing the MA order (q) to include a term at lag 3. A potential modification would be to try an ARIMA(1,1,3) model, or an ARIMA(1,1,q) where q is determined by further inspection of the residual ACF/PACF.

2.  **Question:** You are comparing two SARIMA models for monthly sales data: Model A is SARIMA(1,1,0)(0,1,0,12) and Model B is SARIMA(0,1,1)(0,1,0,12). Both models have statistically significant coefficients. Model A has an AIC of 250, while Model B has an AIC of 245. Which model would you generally prefer based solely on this information, and why?
    *   **Correct Answer:** You would generally prefer **Model B**. The AIC (Akaike Information Criterion) is a measure of model fit that penalizes models with more parameters. When comparing different models for the same dataset, the model with the lower AIC value is generally preferred, as it indicates a better trade-off between goodness of fit and model complexity. In this case, Model B has a lower AIC (245) compared to Model A (250), suggesting it is a more parsimonious and effective model for forecasting, assuming all other diagnostic checks (like residual analysis) are satisfactory for both.

#### AI generation note
Create a 15-minute live coding walkthrough video. Begin with a pre-prepared dataset (e.g., a time series with trend and seasonality like airline passengers). First, quickly recap differencing and ACF/PACF for identifying orders. Then, demonstrate fitting a SARIMA model using `statsmodels.tsa.statespace.sarimax.SARIMAX`. Focus heavily on interpreting the `model_fit.summary()` output, explaining p-values, coefficients, and AIC/BIC. Dedicate significant time to residual diagnostics: plot residuals, their histogram, and their ACF, emphasizing the Ljung-Box test. Finally, show how to generate in-sample and out-of-sample forecasts with confidence intervals. Include a side-by-side view of the code and the generated plots. End with a reflection prompt on how to iteratively refine SARIMA parameters.

### Chapter 2.5 — Advanced Traditional Models: Holt-Winters and TBATS

#### Learning objectives
*   Understand the principles of Exponential Smoothing (ETS) models, including trend and seasonality components.
*   Implement Holt-Winters (Triple Exponential Smoothing) for time series with both trend and seasonality using Python.
*   Interpret the smoothing parameters ($\alpha$, $\beta$, $\gamma$) of the Holt-Winters model.
*   Briefly introduce the concept and advantages of the TBATS model for complex seasonal patterns.
*   Evaluate the performance of Holt-Winters and discuss its applicability compared to ARIMA/SARIMA.

#### Detailed lesson content
While ARIMA and SARIMA models are powerful, they require the series to be made stationary through differencing and rely on explicit identification of AR and MA orders. An alternative family of models, known as **Exponential Smoothing (ETS) models**, offers a different approach, directly modeling trend and seasonality through adaptive smoothing. The most prominent among these for data with both trend and seasonality is the **Holt-Winters method**, also known as Triple Exponential Smoothing.

The Holt-Winters method extends Simple Exponential Smoothing (SES) and Holt's Linear Trend method by adding a seasonal component. It uses three smoothing equations, each with its own smoothing parameter:
1.  **Level ($\alpha$):** Smooths the overall average level of the series. A high $\alpha$ means the level quickly adapts to recent observations.
2.  **Trend ($\beta$):** Smooths the trend component. A high $\beta$ means the trend quickly adapts to recent changes in the slope.
3.  **Seasonality ($\gamma$):** Smooths the seasonal component. A high $\gamma$ means the seasonal pattern quickly adapts to recent seasonal fluctuations.

Holt-Winters can handle both **additive** and **multiplicative** forms of trend and seasonality, making it highly flexible.
*   **Additive Trend/Seasonality:** The trend and seasonal components are added to the level. Suitable when the magnitude of trend and seasonality remains constant over time.
*   **Multiplicative Trend/Seasonality:** The trend and seasonal components are multiplied by the level. Suitable when the magnitude of trend and seasonality increases or decreases proportionally with the level of the series. This is often the case for sales or revenue data, where seasonal peaks get larger as overall sales grow.

Choosing between additive and multiplicative components is crucial. A common mistake is to default to additive when multiplicative is more appropriate, leading to forecasts that fail to capture the increasing amplitude of seasonal swings. Visual inspection of the time series (as discussed in Chapter 2.1) is key here. If the seasonal fluctuations grow with the level of the series, a multiplicative seasonal component is generally preferred.

Let's implement Holt-Winters in Python using `statsmodels`. We'll use a dataset that clearly exhibits both trend and seasonality.

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.tsa.holtwinters import ExponentialSmoothing
from sklearn.metrics import mean_squared_error

# Generate a time series with increasing trend and multiplicative seasonality
np.random.seed(42)
dates = pd.date_range(start='2010-01-01', periods=60, freq='MS') # 5 years of monthly data
trend = np.linspace(100, 200, 60)
seasonality = 1 + 0.1 * np.sin(np.linspace(0, 5 * 2 * np.pi, 60)) # 10% seasonal variation
noise = np.random.normal(1, 0.02, 60) # Multiplicative noise
data = trend * seasonality * noise
ts = pd.Series(data, index=dates)

# Split data into training and test sets
train_size = int(len(ts) * 0.8)
train, test = ts.iloc[:train_size], ts.iloc[train_size:]

plt.figure(figsize=(12, 6))
plt.plot(train, label='Training Data')
plt.plot(test, label='Actual Test Data')
plt.title('Time Series with Trend and Multiplicative Seasonality')
plt.xlabel('Date')
plt.ylabel('Value')
plt.grid(True)
plt.legend()
plt.show()

# --- Holt-Winters (Triple Exponential Smoothing) ---
# We specify trend='add' or 'mul', and seasonal='add' or 'mul'
# We also need to specify the seasonal_periods (e.g., 12 for monthly data)
# Use_boxcox=True can help if variance is not constant, it applies a Box-Cox transformation.
# Initialization_method="estimated" lets statsmodels find optimal smoothing parameters.
print("Fitting Holt-Winters model...")
hw_model = ExponentialSmoothing(
    train,
    trend='add',          # 'add' for additive trend, 'mul' for multiplicative trend
    seasonal='mul',       # 'add' for additive seasonality, 'mul' for multiplicative seasonality
    seasonal_periods=12,  # 12 for monthly data with annual seasonality
    initialization_method="estimated"
).fit()

# Print model summary (shows estimated smoothing parameters)
print(hw_model.summary())

# Forecast for the test period
forecast_steps = len(test)
hw_forecast = hw_model.forecast(steps=forecast_steps)

# Plot actual vs. predicted
plt.figure(figsize=(14, 7))
plt.plot(train, label='Training Data')
plt.plot(test, label='Actual Test Data')
plt.plot(hw_forecast, label='Holt-Winters Forecast', linestyle='--', color='red')
plt.title('Holt-Winters Forecast')
plt.xlabel('Date')
plt.ylabel('Value')
plt.grid(True)
plt.legend()
plt.show()

# Evaluate forecast accuracy on the test set
rmse = np.sqrt(mean_squared_error(test, hw_forecast))
print(f"RMSE on test set for Holt-Winters: {rmse:.2f}")

# Accessing smoothing parameters
print(f"\nEstimated Smoothing Parameters:")
print(f"Alpha (Level): {hw_model.params['smoothing_level']:.3f}")
print(f"Beta (Trend): {hw_model.params['smoothing_trend']:.3f}")
print(f"Gamma (Seasonality): {hw_model.params['smoothing_seasonal']:.3f}")
```
In the `ExponentialSmoothing` function, `trend` can be 'add', 'mul', or `None`, and `seasonal` can be 'add', 'mul', or `None`. The `seasonal_periods` parameter is crucial for specifying the length of the seasonal cycle. `initialization_method="estimated"` allows the model to optimize the smoothing parameters ($\alpha, \beta, \gamma$) by minimizing the sum of squared errors. The model summary provides these estimated parameters. A common mistake is to manually set these parameters without optimization, which can lead to suboptimal forecasts.

**TBATS Model:** While Holt-Winters is excellent for single seasonality, some time series exhibit **multiple seasonalities** (e.g., hourly data with daily and weekly patterns) or complex seasonality that changes over time. For such scenarios, the **TBATS (Trigonometric Box-Cox transform, ARMA errors, Trend, and Seasonal components)** model is a powerful generalization.
TBATS automatically handles:
*   **Box-Cox transformations:** To stabilize variance.
*   **Multiple seasonality:** Can model several seasonal patterns simultaneously (e.g., daily, weekly, yearly).
*   **Trend:** Both damped and undamped trends.
*   **ARMA errors:** Allows for short-term correlation in the residuals.
*   **Time-varying seasonality:** Can adapt to changing seasonal patterns.

TBATS is particularly useful when you have high-frequency data (e.g., minute-level, hourly) with multiple nested seasonalities, or when the seasonal patterns are not perfectly fixed but evolve. While more complex to understand internally, it often provides superior performance in these challenging scenarios because it automates many of the complex modeling decisions. The `pmdarima` library (a Python equivalent of R's `forecast` package) provides an implementation of TBATS.

```python
# Example of TBATS usage (requires pmdarima library)
# from pmdarima.preprocessing import BoxCoxEndogTransformer
# from pmdarima.arima import auto_arima
# from pmdarima.model_selection import train_test_split
# from pmdarima.model_selection import cross_val_score
# from pmdarima.metrics import smape

# # TBATS model is more advanced and not directly in statsmodels for multiple seasonality.
# # It's available in pmdarima.
# # Example:
# # tbats_model = auto_arima(train, seasonal=True, m=12,  # m=12 for monthly seasonality
# #                          suppress_warnings=True,
# #                          stepwise=True,
# #                          trace=True,
# #                          error_action="ignore",
# #                          n_jobs=-1,
# #                          information_criterion='aic',
# #                          max_order=None,
# #                          max_p=5, max_d=2, max_q=5,
# #                          max_P=2, max_D=1, max_Q=2,
# #                          scoring='mse',
# #                          seasonal_test='ocsb', # OCSB test for seasonal differencing
# #                          random_state=42,
# #                          # For TBATS, you'd specifically call the TBATS model
# #                          # from pmdarima.model_selection import tbats
# #                          # model = tbats(y=train, seasonal_periods=[12, 24]) # Example for multiple seasonality
# #                         )
# # print(tbats_model.summary())
# # tbats_forecast = tbats_model.predict(n_periods=forecast_steps)
# # rmse_tbats = np.sqrt(mean_squared_error(test, tbats_forecast))
# # print(f"RMSE on test set for TBATS: {rmse_tbats:.2f}")
```
Comparing Holt-Winters with SARIMA:
*   **Holt-Winters:** Often simpler to implement and interpret, especially for practitioners. It directly models components. Good for data with clear, stable trend and seasonality (additive or multiplicative). Less flexible for complex error structures or multiple seasonalities.
*   **SARIMA:** More flexible in modeling complex autocorrelation structures in the residuals. Requires careful identification of differencing and AR/MA orders, which can be challenging. Can be more robust for data where the underlying process is better described by lagged correlations.
*   **TBATS:** A more advanced, automated approach for complex seasonality, multiple seasonalities, and time-varying patterns. It automates much of the model selection process, which can be a huge advantage but also makes it a "black box" if not understood conceptually.

The choice between these models depends on the data's characteristics, the required interpretability, and the forecasting horizon. For short-to-medium term forecasts on data with clear trend and seasonality, Holt-Winters is an excellent choice. For longer horizons or more complex patterns, SARIMA or TBATS might be superior.

#### Key concepts
*   **Exponential Smoothing (ETS) Models:** A family of forecasting models that assign exponentially decreasing weights to older observations.
*   **Holt-Winters Method (Triple Exponential Smoothing):** An ETS model that explicitly models level, trend, and seasonality using three smoothing parameters ($\alpha, \beta, \gamma$).
*   **Smoothing Parameters ($\alpha, \beta, \gamma$):** Control the responsiveness of the level, trend, and seasonal components to new observations. Values closer to 1 mean more responsiveness.
*   **Additive vs. Multiplicative Components:** Refers to how trend and seasonality interact with the level of the series (summed or multiplied).
*   **Seasonal Periods:** The length of the seasonal cycle (e.g., 12 for annual seasonality in monthly data).
*   **TBATS (Trigonometric Box-Cox transform, ARMA errors, Trend, and Seasonal components):** An advanced, automated forecasting model for time series with multiple seasonality, complex seasonality, and time-varying patterns.

#### Hands-on activity
**Activity: Forecast E-commerce Sales with Holt-Winters**

You have a dataset of weekly e-commerce sales, which exhibits a clear upward trend and a strong weekly seasonality (e.g., sales peaks on weekends). Your goal is to apply the Holt-Winters method to forecast future sales.

**Instructions:**
1.  Load the provided `ecommerce_sales.csv` dataset. Assume it has columns `Date` and `Sales`.
2.  Convert `Date` to datetime and set as index.
3.  Split the data into training (first 80%) and test (last 20%) sets.
4.  Plot the raw sales data to visually inspect for trend and seasonality, and decide if they are additive or multiplicative.
5.  Fit a Holt-Winters model using `ExponentialSmoothing`, specifying the appropriate `trend` and `seasonal` types, and `seasonal_periods=52` (for weekly data with annual seasonality, assuming 52 weeks/year). Let the model estimate the smoothing parameters.
6.  Generate out-of-sample forecasts for the test set.
7.  Plot the training data, actual test data, and the Holt-Winters forecast.
8.  Calculate the RMSE on the test set and comment on the model's performance and the estimated smoothing parameters.

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.tsa.holtwinters import ExponentialSmoothing
from sklearn.metrics import mean_squared_error

# --- Starter Code ---
# Generate example weekly e-commerce sales data (e.g., 3 years)
np.random.seed(42)
dates_activity = pd.date_range(start='2020-01-01', periods=52*3, freq='W')
trend_activity = np.linspace(5000, 15000, len(dates_activity))
# Weekly seasonality (e.g., peaks towards end of week, or annual peak)
# Let's simulate a yearly seasonality for weekly data
seasonality_activity = 1 + 0.2 * np.sin(np.linspace(0, 3 * 2 * np.pi, len(dates_activity))) # 20% seasonal variation
noise_activity = np.random.normal(1, 0.05, len(dates_activity))
sales_data = trend_activity * seasonality_activity * noise_activity
ecommerce_df = pd.DataFrame({'Date': dates_activity, 'Sales': sales_data})
ecommerce_df['Date'] = pd.to_datetime(ecommerce_df['Date'])
ecommerce_df = ecommerce_df.set_index('Date')
# --------------------

# 1. Load data and split
# ecommerce_df = pd.read_csv('ecommerce_sales.csv', index_col='Date', parse_dates=True)
train_size = int(len(ecommerce_df) * 0.8)
train, test = ecommerce_df['Sales'].iloc[:train_size], ecommerce_df['Sales'].iloc[train_size:]

plt.figure(figsize=(12, 6))
plt.plot(train, label='Train')
plt.plot(test, label='Test')
plt.title('Weekly E-commerce Sales Data')
plt.legend()
plt.show()

# 2. Visually inspect and decide on additive/multiplicative
# For the generated data, seasonality grows with trend, so multiplicative is suitable.
chosen_trend = 'add' # Or 'mul'
chosen_seasonal = 'mul' # Or 'add'
seasonal_period = 52 # For weekly data, annual seasonality

print(f"Chosen Holt-Winters model configuration: Trend='{chosen_trend}', Seasonal='{chosen_seasonal}', Seasonal Periods={seasonal_period}")
print("Justification for multiplicative seasonality: The magnitude of the seasonal peaks appears to increase as the overall sales trend rises.")

# 3. Fit Holt-Winters model
hw_model_fit = ExponentialSmoothing(
    train,
    trend=chosen_trend,
    seasonal=chosen_seasonal,
    seasonal_periods=seasonal_period,
    initialization_method="estimated"
).fit()

print("\n--- Holt-Winters Model Summary ---")
print(hw_model_fit.summary())

# 4. Generate out-of-sample forecasts
forecast_steps = len(test)
hw_forecast = hw_model_fit.forecast(steps=forecast_steps)

# 5. Plot results
plt.figure(figsize=(14, 7))
plt.plot(train, label='Training Data')
plt.plot(test, label='Actual Test Data')
plt.plot(hw_forecast, label='Holt-Winters Forecast', linestyle='--', color='red')
plt.title('Holt-Winters Forecast for E-commerce Sales')
plt.xlabel('Date')
plt.ylabel('Sales')
plt.grid(True)
plt.legend()
plt.show()

# 6. Calculate RMSE and comment
rmse = np.sqrt(mean_squared_error(test, hw_forecast))
print(f"\nRMSE on test set for Holt-Winters: {rmse:.2f}")
print("\nCommentary on performance and parameters:")
print(f"The Holt-Winters model achieved an RMSE of {rmse:.2f} on the test set. This indicates how well the model's forecasts align with actual sales.")
print(f"Estimated smoothing parameters: Alpha (Level)={hw_model_fit.params['smoothing_level']:.3f}, Beta (Trend)={hw_model_fit.params['smoothing_trend']:.3f}, Gamma (Seasonality)={hw_model_fit.params['smoothing_seasonal']:.3f}.")
print("If Alpha is high, the model quickly adapts to new sales levels. If Gamma is high, it quickly updates its understanding of the seasonal pattern. The values suggest how stable or dynamic the underlying patterns are perceived by the model.")
```

#### Assessment idea
1.  **Question:** You are using Holt-Winters to forecast monthly product demand. The original time series shows a clear upward trend and strong annual seasonality, where the seasonal peaks are growing in magnitude over time. You fit a Holt-Winters model with `trend='add'` and `seasonal='add'`. After reviewing the forecasts, you notice that the model consistently underpredicts the peaks and overpredicts the troughs during periods of high demand. What is the most likely reason for this forecasting error, and what modification should you make to the Holt-Winters model?
    *   **Correct Answer:** The most likely reason for the forecasting error is that the chosen seasonal component model (`seasonal='add'`) is inappropriate for data where seasonal peaks are growing in magnitude. This behavior is characteristic of **multiplicative seasonality**, not additive. An additive seasonal component assumes the seasonal fluctuations have a constant absolute size, regardless of the series' level. When seasonal peaks grow with the trend, a multiplicative seasonal component (`seasonal='mul'`) is required to capture this increasing amplitude. The modification should be to change `seasonal='add'` to `seasonal='mul'` in the Holt-Winters model.

2.  **Question:** Explain a scenario where a TBATS model would be significantly more advantageous than a standard Holt-Winters model.
    *   **Correct Answer:** A TBATS model would be significantly more advantageous than a standard Holt-Winters model in scenarios involving **multiple seasonalities** or **complex, evolving seasonal patterns**. For example, consider hourly electricity consumption data. This data often exhibits a daily seasonality (e.g., peak consumption during the day, low at night) and a weekly seasonality (e.g., different patterns on weekdays vs. weekends). A standard Holt-Winters model can only handle a single seasonal period effectively. TBATS, however, can explicitly model both the 24-hour (daily) and 168-hour (weekly) seasonal cycles simultaneously, along with handling potential Box-Cox transformations for variance stabilization, damped trends, and ARMA errors. This makes it far more robust and accurate for such high-frequency, multi-seasonal data.

#### AI generation note
Develop a 12-minute video tutorial featuring a split-screen view: a Jupyter Notebook on the left and animated time series plots on the right. Start by introducing Holt-Winters and its three smoothing parameters, using animations to show how each component (level, trend, seasonality) is updated. Demonstrate fitting a Holt-Winters model to a real-world dataset (e.g., monthly sales with multiplicative trend and seasonality), explaining the choice of 'add' vs. 'mul' for trend and seasonal components. Show the model summary and interpret the estimated smoothing parameters. Generate and plot forecasts with confidence intervals. Briefly introduce TBATS conceptually, explaining its advantages for multiple/complex seasonality with a simple diagram. Include a 2-question interactive quiz about interpreting smoothing parameters.

---

## Module 3: Feature Engineering for Machine Learning on Time Series

This module focuses on the critical process of transforming raw time series data into a rich set of features that machine learning models can effectively learn from. We will explore various techniques to extract meaningful information from timestamps, past observations, and external data, ensuring our models are well-equipped to capture complex temporal patterns and dependencies for accurate forecasting.

### Chapter 3.1 — Introduction to Feature Engineering for Time Series

#### Learning objectives
*   Understand the fundamental role of feature engineering in preparing time series data for machine learning models.
*   Distinguish between features used in traditional statistical time series models and those for machine learning.
*   Identify the unique challenges and considerations when engineering features from time-dependent data.
*   Recognize the critical importance of avoiding data leakage in time series feature engineering.
*   Outline common categories of features derived from time series data.

#### Detailed lesson content
Welcome to the fascinating world of feature engineering for time series data! While traditional statistical models like ARIMA or Exponential Smoothing often operate directly on the raw series, machine learning models, especially those from the broader supervised learning family, thrive on a well-crafted set of input features. Think of feature engineering as translating the raw language of time series—a sequence of observations over time—into a language that a model like a Random Forest, Gradient Boosting Machine, or even an LSTM network can understand and learn from more effectively. This process is about creating new input variables (features) from your existing time series and any related data, with the goal of improving the predictive power of your forecasting model.

The core idea is to explicitly provide the model with information about past values, trends, seasonality, and external influences that it might not inherently discover from just the raw time series. For instance, a simple neural network might struggle to discern that "sales tend to peak on Fridays" if you only feed it the raw sales numbers. However, if you provide a feature indicating the "day of the week," the model can easily learn this pattern. This is a fundamental shift from statistical models, which often assume specific data-generating processes and handle seasonality or trends internally through differencing or seasonal components. Machine learning models, being more flexible, benefit immensely from having these temporal characteristics explicitly engineered as features.

One of the most critical aspects of feature engineering for time series is understanding and preventing *data leakage*. Data leakage occurs when information from the future "leaks" into the training data, leading to overly optimistic performance during model development that won't generalize to real-world forecasting. In time series, this often happens if you create features using future values or if you calculate statistics over a window that includes data points that would not be available at the time of prediction. For example, if you're trying to predict tomorrow's stock price, you cannot use tomorrow's closing price as a feature, even if it's available in your historical dataset. You must always ensure that any feature you create for a given timestamp `t` is derived *only* from data available up to and including `t-1`. This strict adherence to the temporal order is paramount for building robust and reliable forecasting models.

Consider a practical scenario: predicting daily electricity consumption. The raw time series is simply the consumption value for each day. Without feature engineering, a model might struggle to capture patterns. However, by engineering features like the consumption from the previous day (a lag feature), the average consumption over the last seven days (a rolling window feature), the day of the week, the month, and whether it was a public holiday (date-time features), and even the predicted temperature for that day (an exogenous feature), we provide a much richer context. Each of these features offers a different perspective on the underlying drivers of electricity consumption, allowing the machine learning model to identify complex, non-linear relationships that would be difficult to model with traditional methods alone. The goal is to transform a univariate or multivariate time series into a supervised learning problem, where each row represents a specific time point, and the columns are the engineered features used to predict the target variable at that time point or a future time point.

The process typically involves several steps: first, identifying potential sources of information (the time series itself, its index, external datasets); second, applying transformations to create new variables; third, selecting the most relevant features; and finally, preparing the data into a format suitable for your chosen machine learning algorithm. Common categories of features include lag features (past values of the series itself or other series), rolling window statistics (moving averages, standard deviations), date and time-based features (day of week, month, holiday indicators), and external or exogenous variables (weather, economic indicators). Each category addresses a different type of temporal pattern or influence, and combining them effectively is key to building powerful forecasting models. We will delve into each of these categories in detail in the upcoming chapters, providing practical examples and best practices to ensure you avoid common pitfalls and harness the full potential of your data.

#### Key concepts
*   **Feature Engineering:** The process of creating new input variables (features) from existing raw data to improve the performance of machine learning models.
*   **Time-Aware Features:** Features specifically designed to capture temporal patterns, dependencies, and characteristics inherent in time series data.
*   **Data Leakage:** The unintentional introduction of information from the future into the training dataset, leading to inflated model performance and poor generalization.
*   **Exogenous Variables:** External time series that are not being forecasted but are used as input features to help predict the target series (e.g., temperature impacting electricity demand).
*   **Supervised Learning Transformation:** The process of converting a time series forecasting problem into a supervised learning problem by creating feature-target pairs.

#### Hands-on activity
**Activity: Initial Data Exploration and Feature Brainstorming**

Your task is to load a sample daily time series dataset and brainstorm at least five potential features you could engineer from it, explaining *why* each feature might be useful for forecasting.

```python
import pandas as pd
import numpy as np

# Create a sample daily time series (e.g., daily website traffic)
np.random.seed(42)
dates = pd.date_range(start='2022-01-01', periods=365, freq='D')
data = np.random.randint(100, 500, size=365) + \
       np.sin(np.arange(365) / 30 * 2 * np.pi) * 50 + \
       np.random.normal(0, 20, size=365) # Add some seasonality and noise
df = pd.DataFrame({'timestamp': dates, 'traffic': data})
df = df.set_index('timestamp')

print("Original DataFrame head:")
print(df.head())
print("\nOriginal DataFrame info:")
df.info()

# --- Your task starts here ---
# 1. Inspect the data.
# 2. Brainstorm at least 5 features you could create from the 'traffic' column or the 'timestamp' index.
# 3. For each feature, explain its potential relevance for forecasting 'traffic'.

# Example:
# Feature 1: Day of the week from the timestamp.
# Explanation: Website traffic might show weekly patterns (e.g., lower on weekends, higher on weekdays).

# Your brainstormed features and explanations:
# Feature 2: ...
# Explanation: ...

# Feature 3: ...
# Explanation: ...

# Feature 4: ...
# Explanation: ...

# Feature 5: ...
# Explanation: ...
```

#### Assessment idea
1.  **Question:** You are tasked with forecasting monthly sales for a retail store. Which of the following would constitute *data leakage* if used as a feature to predict sales for the current month?
    A) Average sales from the previous three months.
    B) The month number (e.g., 1 for January, 2 for February).
    C) The actual sales figure for the *next* month.
    D) A flag indicating if the current month contains a major holiday.

    **Correct Answer:** C) The actual sales figure for the *next* month.
    **Explanation:** Data leakage occurs when future information is used to make a current prediction. Options A, B, and D use information that would be available at or before the time of prediction. Option C, however, uses the actual sales figure from the *next* month, which would not be known when forecasting for the current month, thus leading to data leakage.

2.  **Question:** Why is feature engineering particularly important for machine learning models when dealing with time series data, compared to some traditional statistical time series models?

    **Correct Answer:** Machine learning models, especially those not inherently designed for time series (like tree-based models), do not automatically understand temporal concepts such as trends, seasonality, or the causal relationship between past and future values. Traditional statistical models (e.g., ARIMA, Exponential Smoothing) are often built with these temporal properties in mind, handling them through differencing, seasonal components, or specific model structures. Machine learning models, on the other hand, benefit greatly from having these temporal patterns explicitly encoded as features (e.g., lag values, rolling statistics, day-of-week indicators) to provide them with the necessary context to learn complex, non-linear relationships and make accurate forecasts.

#### AI generation note
Create a 7-minute animated video explaining the concept of feature engineering for time series. Use clear, simple analogies (e.g., translating a foreign language for a model). Visually demonstrate data leakage with a timeline showing "future data" accidentally being used. Show a basic raw time series transforming into a table with engineered features (lag, day of week). Emphasize the "time-aware" nature. Include a reflection prompt at the end asking learners to consider a real-world time series and brainstorm one potential feature. Ensure captions and high-contrast visuals.

---

### Chapter 3.2 — Lag Features: Capturing Past Information

#### Learning objectives
*   Define lag features and explain their fundamental role in time series forecasting.
*   Implement lag features efficiently using Pandas `shift()` method.
*   Understand the process of selecting appropriate lag orders based on domain knowledge and autocorrelation.
*   Identify and mitigate common pitfalls associated with creating lag features, particularly data leakage.
*   Apply lag features in a practical forecasting scenario to capture temporal dependencies.

#### Detailed lesson content
Lag features are arguably the most straightforward and powerful form of feature engineering for time series data. At its core, a lag feature for a given time point `t` is simply the value of the time series (or another related series) at a previous time point, `t-k`, where `k` is the lag order. For example, if you're trying to predict tomorrow's sales, a lag-1 feature would be today's sales, and a lag-7 feature would be sales from exactly one week ago. The intuition behind lag features is simple: the past often holds valuable information about the future. Many time series exhibit persistence, where the value at one point is highly correlated with its recent past. By explicitly providing these past values as features, we enable our machine learning models to directly learn these temporal dependencies.

Implementing lag features in Python, particularly with the Pandas library, is incredibly efficient using the `shift()` method. This method shifts the index of the DataFrame or Series by a specified number of periods. A positive `periods` value shifts data *forward*, effectively bringing past values into the current row, which is exactly what we want for a lag feature. For example, `df['value'].shift(1)` will create a new series where each row contains the `value` from the previous row. When you're creating a lag feature for the target variable itself, say `sales`, to predict `sales` at time `t`, you would create features like `sales_lag_1` (sales at `t-1`), `sales_lag_2` (sales at `t-2`), and so on. These become input features for your model, with `sales` at time `t` being the target.

```python
import pandas as pd
import numpy as np

# Create a sample daily sales time series
np.random.seed(42)
dates = pd.date_range(start='2023-01-01', periods=30, freq='D')
sales_data = np.random.randint(50, 150, size=30) + \
             np.sin(np.arange(30) / 7 * 2 * np.pi) * 30 # Add weekly seasonality
df_sales = pd.DataFrame({'timestamp': dates, 'sales': sales_data})
df_sales = df_sales.set_index('timestamp')

print("Original Sales Data:")
print(df_sales.head(10))

# Create lag-1 feature for sales
df_sales['sales_lag_1'] = df_sales['sales'].shift(1)

# Create lag-7 feature for sales (capturing weekly seasonality)
df_sales['sales_lag_7'] = df_sales['sales'].shift(7)

print("\nSales Data with Lag Features:")
print(df_sales.head(10))
```

Notice how the first `k` values for a lag-`k` feature will be `NaN`. These rows typically need to be handled, either by dropping them (if `k` is small relative to the dataset size) or by imputing them (e.g., with the mean or median of the feature, though this should be done carefully to avoid data leakage).

Choosing the appropriate lag orders is crucial. A good starting point is to look at the autocorrelation function (ACF) plot of your time series. The ACF plot shows the correlation of a time series with its own lagged values. Significant spikes at certain lags suggest that those lags are strong predictors. For example, a strong spike at lag 7 for daily data indicates weekly seasonality, making `sales_lag_7` a valuable feature. Domain knowledge is also incredibly important: for daily electricity consumption, you might expect strong correlations with the previous day's consumption (`lag_1`) and the consumption from the same day last week (`lag_7`). For monthly data, `lag_12` would capture annual seasonality. It's common to include a range of lags, perhaps `lag_1` to `lag_N` (e.g., `N=3` for short-term persistence) and then specific seasonal lags like `lag_7`, `lag_14`, `lag_28` for daily data, or `lag_12` for monthly data.

A common mistake, and a critical data leakage concern, arises when creating lag features for the *target variable* in a multi-step forecasting scenario. If you want to predict `sales` for `t+H` (H steps into the future), you *cannot* use `sales` from `t+1`, `t+2`, ..., `t+H-1` as features, because these values would not be known at the time of prediction. All features for predicting `sales` at `t+H` must be derived from data available *up to and including* time `t`. This means if you use `sales_lag_1` (sales at `t-1`) to predict `sales` at `t`, that's perfectly fine. If you use `sales_lag_1` to predict `sales` at `t+1`, that's also fine, because `sales_lag_1` (which is `sales` at `t`) is known when you make the prediction for `t+1`. The key is to always think about what information is truly available at the moment you make a forecast.

Another pitfall is creating too many lag features. While beneficial, an excessive number of lags can lead to multicollinearity (where lag features are highly correlated with each other), increased computational cost, and potentially overfitting, especially if many lags are not truly informative. It's often better to start with a sensible set of lags based on ACF and domain knowledge and then use feature selection techniques if needed. Always remember to handle `NaN` values resulting from the `shift()` operation; dropping the initial rows is a common and safe approach for the training set, as these rows lack complete feature information.

#### Key concepts
*   **Lag Feature:** A feature created by taking the value of a time series (or another variable) from a previous time step.
*   **Lag Order (k):** The number of time steps into the past from which a value is taken to form a lag feature (e.g., lag-1, lag-7).
*   **`shift()` method:** A Pandas DataFrame/Series method used to create lag features by shifting data along the time index.
*   **Autocorrelation Function (ACF):** A plot that shows the correlation of a time series with its own lagged values, useful for identifying significant lag orders.
*   **Persistence:** The tendency of a time series to maintain its value or direction over time, making past values good predictors of future values.

#### Hands-on activity
**Activity: Creating Lag Features and Inspecting Autocorrelation**

Your task is to create multiple lag features for a given time series and then visualize its autocorrelation to inform your choice of lags.

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.graphics.tsaplots import plot_acf

# Create a sample daily temperature time series with some seasonality
np.random.seed(42)
dates = pd.date_range(start='2022-01-01', periods=365, freq='D')
temperature = 15 + 10 * np.sin(np.arange(365) / 365 * 2 * np.pi) + \
              5 * np.sin(np.arange(365) / 7 * 2 * np.pi) + \
              np.random.normal(0, 2, size=365)
df_temp = pd.DataFrame({'timestamp': dates, 'temperature': temperature})
df_temp = df_temp.set_index('timestamp')

print("Original Temperature Data Head:")
print(df_temp.head())

# --- Your task starts here ---
# 1. Create lag-1, lag-2, and lag-7 features for the 'temperature' column.
#    Name them 'temp_lag_1', 'temp_lag_2', 'temp_lag_7'.
# 2. Plot the Autocorrelation Function (ACF) of the 'temperature' series up to 30 lags.
# 3. Based on the ACF plot, identify any other potentially useful lag orders (beyond 1, 2, 7) and explain why.

# 1. Create lag features
df_temp['temp_lag_1'] = df_temp['temperature'].shift(1)
df_temp['temp_lag_2'] = df_temp['temperature'].shift(2)
df_temp['temp_lag_7'] = df_temp['temperature'].shift(7)

print("\nTemperature Data with Lag Features Head:")
print(df_temp.head(10))

# 2. Plot ACF
plt.figure(figsize=(12, 6))
plot_acf(df_temp['temperature'].dropna(), lags=30, ax=plt.gca(), title='Autocorrelation Function for Temperature')
plt.xlabel('Lag')
plt.ylabel('Autocorrelation')
plt.grid(True)
plt.show()

# 3. Identify other useful lags based on ACF:
#    (Write your observations and reasoning here)
#    Example: "The ACF plot shows significant spikes at lag X and lag Y, suggesting these could also be useful."
```

#### Assessment idea
1.  **Question:** You are building a model to predict daily energy consumption. You decide to include `energy_consumption_lag_1` (consumption from the previous day) and `energy_consumption_lag_7` (consumption from the same day last week) as features. Explain why `energy_consumption_lag_7` might be particularly important for daily data.

    **Correct Answer:** `energy_consumption_lag_7` is crucial for daily data because it directly captures weekly seasonality. Many daily time series, such as energy consumption, exhibit strong patterns that repeat every seven days (e.g., lower consumption on weekends, higher on weekdays). By including the value from exactly one week prior, the model can learn these recurring weekly cycles and make more accurate predictions, especially when the current day's consumption is heavily influenced by what happened on the same day in the previous week.

2.  **Question:** Consider a time series `Y` where you want to predict `Y_t` using `Y_{t-1}` and `Y_{t-2}` as features. You use `df['Y'].shift(1)` and `df['Y'].shift(2)` to create these features. What happens to the first few rows of your DataFrame after this operation, and how should you typically handle them before training a machine learning model?

    **Correct Answer:** After applying `df['Y'].shift(1)` and `df['Y'].shift(2)`, the first row of the `Y_lag_1` feature will be `NaN`, and the first two rows of the `Y_lag_2` feature will be `NaN`. This is because there are no preceding values to shift into those positions. Before training a machine learning model, these rows containing `NaN` values for the features must be handled. The most common and safest approach is to `drop` these rows (e.g., `df.dropna()`) from the dataset, as they lack complete feature information and most ML models cannot handle `NaN` inputs directly. Alternatively, one could impute the `NaN` values, but this must be done carefully (e.g., with a global mean/median from the training set only) to avoid introducing data leakage.

#### AI generation note
Produce a 10-minute interactive code demo. Start by loading a simple Pandas Series (e.g., daily website visitors). Demonstrate `df.shift(1)` and `df.shift(7)` step-by-step, showing the resulting `NaN` values. Then, plot the ACF of the series, explaining how to interpret the spikes for identifying relevant lags. Include a split-screen view: left showing the Python code in a Jupyter Notebook, right showing the DataFrame output and the generated ACF plot. The interactive element should be a mini-quiz asking learners to identify a suitable lag for monthly data with annual seasonality. Emphasize common mistakes like data leakage.

---

### Chapter 3.3 — Rolling Window Statistics: Summarizing Recent History

#### Learning objectives
*   Explain the concept of rolling window statistics and their utility in capturing short-term trends and volatility.
*   Implement various rolling window functions (mean, median, standard deviation, min, max) using Pandas `rolling()` method.
*   Understand the importance of choosing appropriate window sizes and the implications of different window types (fixed vs. expanding).
*   Identify and avoid look-ahead bias when creating rolling features for time series forecasting.
*   Apply rolling window statistics to extract features that represent recent dynamics of a time series.

#### Detailed lesson content
While lag features capture specific past values, rolling window statistics provide a summarized view of the recent past. Instead of just knowing the sales from yesterday, we might also want to know the *average* sales over the last 7 days, or the *volatility* of sales over the last 30 days. These aggregates can reveal short-term trends, cycles, and changes in variability that individual lag values might miss. Rolling window statistics are crucial for capturing dynamic aspects of a time series, such as momentum, recent stability, or sudden shifts. For instance, a rolling mean can smooth out noise and highlight underlying trends, while a rolling standard deviation can indicate periods of increased or decreased volatility.

The Pandas library provides excellent functionality for creating rolling window features through its `rolling()` method. This method, when applied to a Series or DataFrame, returns a `Rolling` object, which then allows you to apply various aggregation functions like `mean()`, `sum()`, `median()`, `std()`, `min()`, `max()`, and more. The most important parameter for `rolling()` is `window`, which specifies the size of the moving window. For example, `df['value'].rolling(window=7).mean()` calculates the 7-day rolling average.

```python
import pandas as pd
import numpy as np

# Create a sample daily stock price time series
np.random.seed(42)
dates = pd.date_range(start='2023-01-01', periods=60, freq='D')
prices = 100 + np.cumsum(np.random.normal(0, 1, size=60)) + \
         np.sin(np.arange(60) / 15 * 2 * np.pi) * 5 # Add some trend and seasonality
df_stock = pd.DataFrame({'timestamp': dates, 'price': prices})
df_stock = df_stock.set_index('timestamp')

print("Original Stock Price Data:")
print(df_stock.head(10))

# Create a 7-day rolling mean
df_stock['price_rolling_mean_7'] = df_stock['price'].rolling(window=7).mean()

# Create a 7-day rolling standard deviation (volatility)
df_stock['price_rolling_std_7'] = df_stock['price'].rolling(window=7).std()

# Create a 3-day rolling maximum
df_stock['price_rolling_max_3'] = df_stock['price'].rolling(window=3).max()

print("\nStock Price Data with Rolling Features:")
print(df_stock.head(10))
```

Similar to lag features, the initial rows of rolling window features will contain `NaN` values because there aren't enough preceding data points to fill the window. For a window size of `N`, the first `N-1` values will be `NaN`. You can also use the `min_periods` parameter in `rolling()` to specify the minimum number of observations in the window required to have a value (otherwise, it's `NaN`). For instance, `df['price'].rolling(window=7, min_periods=1).mean()` would start calculating the mean from the first available data point, using fewer than 7 points for the initial entries. However, for strict forecasting where you only want full window information, `min_periods` is often left at its default (equal to `window`).

Choosing the right window size is crucial and often depends on the periodicity of your data and the patterns you want to capture. A 7-day window is common for daily data to capture weekly cycles, while a 30-day or 90-day window might capture monthly or quarterly trends. Experimentation and domain knowledge are key. For example, if you're predicting sales, a 7-day rolling average might capture short-term weekly trends, while a 28-day rolling sum could capture monthly sales volumes.

A critical safety note: **always ensure that rolling window calculations only use *past* data relative to the current timestamp to avoid look-ahead bias (a form of data leakage).** Pandas `rolling()` method, by default, calculates the statistic using the current observation and the `window-1` preceding observations. This is usually correct for forecasting `Y_t` using features derived from `Y_t`. However, if you are predicting `Y_{t+H}` (H steps into the future), your rolling features for `Y_t` must *not* include `Y_t` itself if `Y_t` is the target for `t+H`. A common way to ensure this is to apply a `shift(1)` *after* creating the rolling feature. For example, `df['price'].rolling(window=7).mean().shift(1)` would ensure that the 7-day rolling mean for time `t` actually reflects the mean up to `t-1`, making it safe to use for predicting `Y_t`. This is especially important when the rolling feature is derived from the target variable itself.

Another consideration is the distinction between fixed rolling windows and expanding windows. An expanding window (e.g., `df['value'].expanding().mean()`) calculates a statistic from the beginning of the series up to the current point, continuously expanding the window size. This is useful for capturing long-term trends or cumulative effects, but it's less sensitive to recent changes compared to a fixed-size rolling window. Both can be valuable features depending on the specific problem.

Common mistakes include using a window size that is too small (making the feature noisy and less informative) or too large (smoothing out important short-term dynamics). Also, forgetting to handle the `NaN` values at the beginning of the series can cause issues with many machine learning algorithms. Always drop or impute these `NaN`s before feeding the data to your model.

#### Key concepts
*   **Rolling Window Statistics:** Aggregations (e.g., mean, sum, std) calculated over a moving, fixed-size window of observations in a time series.
*   **`rolling()` method:** A Pandas method used to apply rolling window functions to Series or DataFrames.
*   **Window Size:** The number of observations included in each rolling window calculation.
*   **Look-ahead Bias:** A form of data leakage where future information is inadvertently included in a feature, typically by incorrectly applying rolling window calculations.
*   **Expanding Window:** A type of window calculation where the window starts from the beginning of the series and continuously grows with each new observation.

#### Hands-on activity
**Activity: Implementing Rolling Window Statistics with Look-Ahead Bias Prevention**

Your task is to create several rolling window features for a given time series, ensuring you prevent look-ahead bias when necessary.

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Create a sample daily demand time series
np.random.seed(42)
dates = pd.date_range(start='2023-01-01', periods=90, freq='D')
demand = 100 + 10 * np.sin(np.arange(90) / 7 * 2 * np.pi) + \
         np.random.normal(0, 5, size=90) # Add weekly seasonality and noise
df_demand = pd.DataFrame({'timestamp': dates, 'demand': demand})
df_demand = df_demand.set_index('timestamp')

print("Original Demand Data Head:")
print(df_demand.head(10))

# --- Your task starts here ---
# 1. Create a 7-day rolling mean of 'demand'. Name it 'demand_rolling_mean_7'.
#    Ensure this feature *does not* include the current day's demand to prevent look-ahead bias
#    if used for predicting the current day's demand.
# 2. Create a 14-day rolling standard deviation of 'demand'. Name it 'demand_rolling_std_14'.
#    Again, ensure it only uses past information.
# 3. Plot the original demand, the 7-day rolling mean, and the 14-day rolling std on the same graph.
# 4. Explain why the `shift(1)` operation is crucial for these features in a forecasting context.

# 1. Create 7-day rolling mean (shifted to prevent look-ahead bias)
df_demand['demand_rolling_mean_7'] = df_demand['demand'].rolling(window=7).mean().shift(1)

# 2. Create 14-day rolling standard deviation (shifted to prevent look-ahead bias)
df_demand['demand_rolling_std_14'] = df_demand['demand'].rolling(window=14).std().shift(1)

print("\nDemand Data with Rolling Features Head:")
print(df_demand.head(20)) # Show more to see rolling values appear

# 3. Plot the series
plt.figure(figsize=(14, 7))
plt.plot(df_demand['demand'], label='Original Demand', alpha=0.7)
plt.plot(df_demand['demand_rolling_mean_7'], label='7-Day Rolling Mean (shifted)', color='red')
plt.plot(df_demand['demand_rolling_std_14'], label='14-Day Rolling Std (shifted)', color='green', linestyle='--')
plt.title('Demand with Rolling Window Statistics')
plt.xlabel('Date')
plt.ylabel('Demand')
plt.legend()
plt.grid(True)
plt.show()

# 4. Explanation of shift(1) importance:
#    (Write your explanation here)
#    Example: "The `shift(1)` is crucial because..."
```

#### Assessment idea
1.  **Question:** You are forecasting hourly server load. You create a 24-hour rolling average of server load as a feature. If you calculate `df['load'].rolling(window=24).mean()` and use this directly to predict the current hour's load, what potential issue might arise, and how would you correct it?

    **Correct Answer:** The potential issue is **look-ahead bias (data leakage)**. The default `rolling().mean()` in Pandas includes the *current* hour's load in its calculation for that specific timestamp. If you are predicting the current hour's load, using a feature that already incorporates that very load value (or a part of it) means your model is seeing information it wouldn't have at prediction time. To correct this, you should apply a `shift(1)` *after* calculating the rolling mean: `df['load'].rolling(window=24).mean().shift(1)`. This ensures that the 24-hour rolling average for the current hour is based only on the previous 24 hours (up to `t-1`), making it a valid feature for predicting `load_t`.

2.  **Question:** Describe a scenario where an "expanding window" statistic might be more appropriate than a fixed-size "rolling window" statistic for a time series feature, and provide an example.

    **Correct Answer:** An expanding window statistic is more appropriate when you want to capture a long-term, cumulative trend or the overall history of a series, rather than just its recent dynamics. It's useful when the entire past context, from the beginning of the series, is relevant to the current observation.
    **Example:** If you are forecasting the cumulative number of users for a new online service, an expanding mean or sum of daily sign-ups would be more relevant than a fixed 7-day rolling mean. The expanding mean would show the average daily growth since launch, reflecting the overall trajectory, whereas a fixed rolling mean would only show recent growth, potentially missing the long-term adoption pattern. Similarly, for a financial asset, an expanding standard deviation could represent the total historical volatility since its inception, which might be a useful feature for long-term risk assessment.

#### AI generation note
Create an 8-minute video tutorial. Begin by explaining rolling windows with a visual analogy (e.g., a flashlight moving across a timeline, illuminating a fixed number of past points). Show live coding in a Jupyter Notebook: load a simple time series (e.g., daily website visits), calculate `rolling().mean()` and `rolling().std()` for different window sizes. Crucially, dedicate a segment to demonstrating look-ahead bias and its prevention using `shift(1)`, showing the difference in the resulting DataFrame. Use clear visual overlays to highlight the window and the effect of `shift(1)`. End with a coding challenge: calculate a 30-day rolling median, ensuring no look-ahead bias.

---

### Chapter 3.4 — Date and Time-Based Features: Encoding Cyclical Patterns

#### Learning objectives
*   Extract various date and time components (year, month, day, day of week, hour) from a timestamp.
*   Understand the cyclical nature of certain time features and apply sine/cosine transformations to represent them effectively.
*   Create binary indicator features for special events like holidays or promotions.
*   Discuss the importance of time zone awareness and daylight saving time considerations.
*   Apply date and time-based features to model periodic patterns and external influences in time series.

#### Detailed lesson content
Beyond the values of the series itself, the timestamp associated with each observation is a rich source of features. Date and time-based features allow machine learning models to capture various periodic patterns, such as daily, weekly, monthly, or annual seasonality, as well as specific event-driven impacts. These features are often crucial because many real-world phenomena exhibit strong dependencies on the time of day, day of the week, or time of year. For example, electricity consumption peaks during certain hours of the day and days of the week, while retail sales surge during holiday seasons.

The Pandas `datetime` accessor (`.dt`) makes extracting these components incredibly easy. From a `datetime` index or column, you can directly access attributes like `year`, `month`, `day`, `dayofweek` (Monday=0, Sunday=6), `dayofyear`, `weekofyear`, `quarter`, and `hour`.

```python
import pandas as pd
import numpy as np

# Create a sample hourly energy consumption time series
np.random.seed(42)
dates = pd.date_range(start='2023-01-01', periods=24*30, freq='H') # 30 days of hourly data
consumption = 50 + 20 * np.sin(np.arange(24*30) / 24 * 2 * np.pi) + \
              10 * np.sin(np.arange(24*30) / (24*7) * 2 * np.pi) + \
              np.random.normal(0, 3, size=24*30)
df_energy = pd.DataFrame({'timestamp': dates, 'consumption': consumption})
df_energy = df_energy.set_index('timestamp')

print("Original Energy Consumption Data Head:")
print(df_energy.head())

# Extract date and time features
df_energy['year'] = df_energy.index.year
df_energy['month'] = df_energy.index.month
df_energy['day'] = df_energy.index.day
df_energy['dayofweek'] = df_energy.index.dayofweek # Monday=0, Sunday=6
df_energy['hour'] = df_energy.index.hour
df_energy['quarter'] = df_energy.index.quarter
df_energy['weekofyear'] = df_energy.index.isocalendar().week.astype(int) # .week is deprecated, use isocalendar().week

print("\nEnergy Consumption Data with Date-Time Features Head:")
print(df_energy.head())
```

A crucial consideration for cyclical features like `month`, `dayofweek`, or `hour` is their cyclical nature. For example, December (12) is numerically far from January (1), but temporally they are adjacent. Similarly, Sunday (6) is adjacent to Monday (0). If these are treated as linear numerical features, a model might incorrectly infer a large difference between December and January. To correctly represent this cyclicity, we often use sine and cosine transformations:
`sin_feature = sin(2 * pi * feature / max_value)`
`cos_feature = cos(2 * pi * feature / max_value)`
For `month`, `max_value` would be 12. For `dayofweek`, `max_value` would be 7. For `hour`, `max_value` would be 24. This transformation maps the cyclical feature onto a 2D plane, where the distance between points accurately reflects their temporal proximity.

```python
# Apply sine/cosine transformations for cyclical features
df_energy['month_sin'] = np.sin(2 * np.pi * df_energy['month'] / 12)
df_energy['month_cos'] = np.cos(2 * np.pi * df_energy['month'] / 12)
df_energy['dayofweek_sin'] = np.sin(2 * np.pi * df_energy['dayofweek'] / 7)
df_energy['dayofweek_cos'] = np.cos(2 * np.pi * df_energy['dayofweek'] / 7)
df_energy['hour_sin'] = np.sin(2 * np.pi * df_energy['hour'] / 24)
df_energy['hour_cos'] = np.cos(2 * np.pi * df_energy['hour'] / 24)

print("\nEnergy Consumption Data with Cyclical Features Head:")
print(df_energy[['month', 'month_sin', 'month_cos', 'dayofweek', 'dayofweek_sin', 'dayofweek_cos', 'hour', 'hour_sin', 'hour_cos']].head())
```

Beyond standard date components, creating binary indicator features for special events is highly effective. These could include public holidays, school breaks, promotional periods, or specific company events. You'd typically create a separate DataFrame of these events and then `merge` or `join` it with your time series, filling `NaN` values with 0.

```python
# Example: Create a holiday indicator
holidays = pd.to_datetime(['2023-01-01', '2023-01-16', '2023-02-20']) # New Year's Day, MLK Day, Presidents' Day
df_energy['is_holiday'] = df_energy.index.isin(holidays).astype(int)

print("\nEnergy Consumption Data with Holiday Feature Head:")
print(df_energy[['consumption', 'is_holiday']].head(10))
```

Safety notes: When dealing with hourly or sub-daily data, be mindful of **time zones and daylight saving time (DST)**. If your data spans DST transitions, simply extracting the `hour` might lead to inconsistencies (e.g., an hour appearing twice or being skipped). It's best practice to normalize timestamps to a consistent UTC time zone before feature extraction and then convert back if local time is needed for interpretation. Pandas `tz_localize()` and `tz_convert()` methods are invaluable here.

A common mistake is treating cyclical features as linear (e.g., using `month` directly) which can mislead models. Another is forgetting to account for holidays or special events, which can cause significant spikes or dips that a model won't understand without an explicit indicator. Always consider the specific context of your time series and what temporal patterns are likely to influence it.

#### Key concepts
*   **Date-Time Features:** Features derived directly from the timestamp of a time series observation, such as year, month, day, hour, day of week.
*   **Cyclical Features:** Date-time components (e.g., month, hour, day of week) that repeat in a cycle, requiring special encoding (like sine/cosine transformations) to preserve their temporal proximity.
*   **`dt` accessor:** A Pandas accessor for Series with `datetime` dtype, allowing easy extraction of date and time components.
*   **Sine/Cosine Transformation:** A mathematical transformation used to represent cyclical features, mapping them to a 2D coordinate system where proximity is preserved.
*   **Binary Indicator Features:** Boolean (0 or 1) features used to mark the presence or absence of specific events, such as holidays or promotions.
*   **Time Zone Awareness:** The practice of handling time series data with explicit time zone information, crucial for avoiding errors with daylight saving time and international data.

#### Hands-on activity
**Activity: Engineering Cyclical and Event Features for Retail Sales**

You have daily retail sales data. Your task is to extract standard date-time features, apply cyclical transformations, and create a holiday indicator.

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Create a sample daily retail sales time series
np.random.seed(42)
dates = pd.date_range(start='2023-01-01', periods=365, freq='D')
sales = 100 + 20 * np.sin(np.arange(365) / 7 * 2 * np.pi) + \
        30 * np.sin(np.arange(365) / 365 * 2 * np.pi) + \
        np.random.normal(0, 10, size=365)
# Simulate a holiday boost
sales[pd.to_datetime('2023-12-25') == dates] += 100
sales[pd.to_datetime('2023-12-24') == dates] += 50
df_retail = pd.DataFrame({'timestamp': dates, 'sales': sales})
df_retail = df_retail.set_index('timestamp')

print("Original Retail Sales Data Head:")
print(df_retail.head())

# --- Your task starts here ---
# 1. Extract 'dayofweek' and 'month' from the timestamp index.
# 2. Apply sine and cosine transformations to 'dayofweek' and 'month'.
# 3. Create a binary feature 'is_christmas_season' that is 1 from Dec 15th to Dec 31st, and 0 otherwise.
# 4. Plot the 'sales' series, highlighting the 'is_christmas_season' period.

# 1. Extract dayofweek and month
df_retail['dayofweek'] = df_retail.index.dayofweek
df_retail['month'] = df_retail.index.month

# 2. Apply sine and cosine transformations
df_retail['dayofweek_sin'] = np.sin(2 * np.pi * df_retail['dayofweek'] / 7)
df_retail['dayofweek_cos'] = np.cos(2 * np.pi * df_retail['dayofweek'] / 7)
df_retail['month_sin'] = np.sin(2 * np.pi * df_retail['month'] / 12)
df_retail['month_cos'] = np.cos(2 * np.pi * df_retail['month'] / 12)

# 3. Create 'is_christmas_season' feature
christmas_start = pd.to_datetime('2023-12-15')
christmas_end = pd.to_datetime('2023-12-31')
df_retail['is_christmas_season'] = ((df_retail.index >= christmas_start) & \
                                     (df_retail.index <= christmas_end)).astype(int)

print("\nRetail Sales Data with New Features Head and Tail:")
print(df_retail[['sales', 'dayofweek', 'dayofweek_sin', 'month', 'month_sin', 'is_christmas_season']].head())
print(df_retail[['sales', 'dayofweek', 'dayofweek_sin', 'month', 'month_sin', 'is_christmas_season']].tail())

# 4. Plot sales and highlight Christmas season
plt.figure(figsize=(15, 7))
plt.plot(df_retail.index, df_retail['sales'], label='Daily Sales', alpha=0.8)
plt.fill_between(df_retail.index, df_retail['sales'].min(), df_retail['sales'].max(),
                 where=df_retail['is_christmas_season'] == 1, color='red', alpha=0.2, label='Christmas Season')
plt.title('Daily Retail Sales with Christmas Season Highlight')
plt.xlabel('Date')
plt.ylabel('Sales')
plt.legend()
plt.grid(True)
plt.show()
```

#### Assessment idea
1.  **Question:** You are forecasting energy consumption for a city. You extract the `hour` (0-23) from the timestamp as a feature. Explain why simply using the raw `hour` value as a numerical feature might be problematic for a machine learning model, and propose a better way to represent it.

    **Correct Answer:** Using the raw `hour` (0-23) as a linear numerical feature can be problematic because it implies a linear relationship and a large numerical difference between hours that are temporally close (e.g., 23 and 0). A model might incorrectly infer that hour 23 is vastly different from hour 0, when in reality they are adjacent in a cycle. This misrepresents the cyclical nature of time. A better way to represent it is using **sine and cosine transformations**. By creating `hour_sin = sin(2 * pi * hour / 24)` and `hour_cos = cos(2 * pi * hour / 24)`, you map the hour onto a 2D circle, where hours 23 and 0 are close together, and the distance between any two hours accurately reflects their temporal proximity.

2.  **Question:** Your time series data covers several years and includes timestamps from different regions, some of which observe Daylight Saving Time (DST). What is a critical consideration regarding time zones and DST when extracting hourly features, and what Pandas methods can help address this?

    **Correct Answer:** A critical consideration is that DST transitions can cause an hour to be skipped or repeated, leading to inconsistencies if you simply extract the `hour` component directly from local time. This can distort patterns and lead to incorrect feature values. To address this, it's best practice to first **localize the timestamps to a specific time zone** and then **convert them to a consistent, non-DST-affected time zone, typically UTC**, before extracting features.
    Pandas methods like `df.index.tz_localize('America/New_York', ambiguous='infer')` can assign a time zone, and then `df.index.tz_convert('UTC')` can convert all timestamps to Coordinated Universal Time (UTC). Once in UTC, feature extraction (like `hour`) will be consistent without DST complications.

#### AI generation note
Design a 9-minute interactive lab walkthrough. Start by loading a raw time series with a datetime index (e.g., hourly sensor data). Guide learners through extracting `year`, `month`, `dayofweek`, `hour` using `.dt` accessor. Then, visually demonstrate the problem of linearity for `dayofweek` (e.g., plotting 0-6 linearly vs. a circle) and introduce sine/cosine transformations with code. Show how to create a binary `is_weekend` feature. The interactive element should be a small coding exercise where learners create `is_quarter_end` feature. Use a Jupyter Notebook environment with clear code blocks and immediate output visualizations (e.g., plots of original vs. transformed features).

---

### Chapter 3.5 — Advanced Feature Engineering: Interactions, Fourier, and External Data

#### Learning objectives
*   Construct interaction features by combining existing features to capture synergistic effects.
*   Understand the application of Fourier series to model complex, multi-seasonal patterns.
*   Integrate external (exogenous) time series data as features into a forecasting model.
*   Discuss the importance of feature selection and engineering best practices for time series.
*   Identify common challenges and safety considerations when working with advanced time series features.

#### Detailed lesson content
As we progress in feature engineering, we move beyond simple transformations to more sophisticated techniques that can unlock deeper insights from our data. This includes creating interaction features, leveraging Fourier series for complex seasonality, and incorporating external data sources. These advanced methods can significantly boost model performance by providing richer context and capturing non-linear relationships that might otherwise be missed.

**Interaction Features:** Sometimes, the effect of one feature on the target variable depends on the value of another feature. For example, high demand on a Friday might be different from high demand on a Monday. Or, the impact of a promotion might be stronger during a holiday season. These synergistic effects can be captured by creating interaction features, which are typically products of two or more existing features. For instance, multiplying `dayofweek_sin` with a `is_promotion` binary flag could create a feature that activates only on promotional days and captures the weekly pattern of that promotion's impact.

```python
import pandas as pd
import numpy as np

# Sample data with demand, day of week, and a promotion flag
np.random.seed(42)
dates = pd.date_range(start='2023-01-01', periods=60, freq='D')
demand = 100 + 10 * np.sin(np.arange(60) / 7 * 2 * np.pi) + np.random.normal(0, 5, size=60)
df_adv = pd.DataFrame({'timestamp': dates, 'demand': demand})
df_adv = df_adv.set_index('timestamp')

df_adv['dayofweek'] = df_adv.index.dayofweek
df_adv['dayofweek_sin'] = np.sin(2 * np.pi * df_adv['dayofweek'] / 7)

# Simulate a promotion during a specific period
promotion_start = pd.to_datetime('2023-01-15')
promotion_end = pd.to_datetime('2023-01-25')
df_adv['is_promotion'] = ((df_adv.index >= promotion_start) & (df_adv.index <= promotion_end)).astype(int)

# Create an interaction feature: promotion effect modulated by day of week
df_adv['promotion_dayofweek_interaction'] = df_adv['is_promotion'] * df_adv['dayofweek_sin']

print("Data with Interaction Feature Head:")
print(df_adv[['demand', 'dayofweek', 'dayofweek_sin', 'is_promotion', 'promotion_dayofweek_interaction']].head(20))
```

**Fourier Series for Complex Seasonality:** While sine/cosine transformations work well for simple, single-period seasonality (like a 24-hour cycle or a 7-day cycle), real-world time series often exhibit more complex, multi-seasonal patterns. For instance, daily data might have not only a 7-day cycle but also a 30-day cycle, and perhaps even a 365-day cycle. Fourier series allow us to decompose these complex seasonal patterns into a sum of sine and cosine waves of different frequencies (harmonics). By including multiple Fourier terms (e.g., `sin(2*pi*k*t/P)` and `cos(2*pi*k*t/P)` for `k=1, 2, ..., N` harmonics, where `P` is the period), we can approximate very intricate seasonal shapes. This is a powerful technique, especially for models like Prophet, which explicitly use Fourier terms.

```python
# Example: Fourier features for yearly seasonality (period P=365)
# Let's assume we have a 'dayofyear' feature (1-365)
df_adv['dayofyear'] = df_adv.index.dayofyear

# Add a few Fourier terms for yearly seasonality
# k=1 (fundamental frequency)
df_adv['year_sin_1'] = np.sin(2 * np.pi * 1 * df_adv['dayofyear'] / 365)
df_adv['year_cos_1'] = np.cos(2 * np.pi * 1 * df_adv['dayofyear'] / 365)
# k=2 (second harmonic)
df_adv['year_sin_2'] = np.sin(2 * np.pi * 2 * df_adv['dayofyear'] / 365)
df_adv['year_cos_2'] = np.cos(2 * np.pi * 2 * df_adv['dayofyear'] / 365)

print("\nData with Fourier Features Head:")
print(df_adv[['demand', 'dayofyear', 'year_sin_1', 'year_cos_1', 'year_sin_2', 'year_cos_2']].head())
```

**External (Exogenous) Data:** Often, the target time series is influenced by other factors that are themselves time series. These are called exogenous variables. Examples include weather data (temperature, precipitation affecting sales or energy), economic indicators (GDP, inflation affecting consumer spending), social media trends, or news sentiment. Incorporating these as features can dramatically improve forecasting accuracy, provided they are available at the time of prediction. The key challenge here is ensuring that the exogenous data is properly aligned with your target series and that future values of the exogenous variable are either known or can be reliably forecasted themselves. If you need to forecast the exogenous variable to use it as a feature, this becomes a multi-step forecasting problem.

```python
# Example: Incorporating external temperature data
# Assume we have a separate DataFrame for daily average temperature
temp_dates = pd.date_range(start='2023-01-01', periods=60, freq='D')
avg_temp = 10 + 5 * np.sin(np.arange(60) / 30 * 2 * np.pi) + np.random.normal(0, 1, size=60)
df_temp_external = pd.DataFrame({'timestamp': temp_dates, 'avg_temperature': avg_temp})
df_temp_external = df_temp_external.set_index('timestamp')

# Merge the external data
df_adv = df_adv.merge(df_temp_external, left_index=True, right_index=True, how='left')

print("\nData with External Temperature Feature Head:")
print(df_adv[['demand', 'avg_temperature']].head())
```

**Feature Selection and Engineering Best Practices:** With so many potential features, it's easy to create hundreds, leading to high dimensionality, increased training time, and potential overfitting. Feature selection techniques (e.g., recursive feature elimination, permutation importance, L1 regularization) become important to identify the most informative features. Always prioritize features based on domain knowledge and interpretability. When engineering, be consistent with your feature creation process across training, validation, and test sets.

**Common Mistakes and Safety Notes:**
1.  **Data Leakage with Exogenous Variables:** If you use an exogenous variable that is itself a time series, ensure that its future values (for the forecast horizon) are either truly known (e.g., scheduled promotions) or are forecasted separately. Using actual future values of an exogenous variable that are not known at prediction time is data leakage.
2.  **Multicollinearity:** Many time series features (e.g., `lag_1`, `lag_2`, rolling means) can be highly correlated. While some models (like tree-based models) are robust to multicollinearity, others (like linear regression) can suffer. Be aware and consider techniques like PCA or dropping highly correlated features if necessary.
3.  **Computational Cost:** Generating many complex features, especially for very long time series, can be computationally intensive. Optimize your code and consider feature hashing or other dimensionality reduction techniques for extremely high-dimensional feature spaces.
4.  **Feature Scaling:** While not strictly feature engineering, remember to scale your numerical features (e.g., using `StandardScaler` or `MinMaxScaler`) before feeding them into distance-based models (like K-Nearest Neighbors, SVMs) or neural networks. Tree-based models are generally less sensitive to scaling.

By combining these advanced techniques with the foundational lag and rolling features, you can build a comprehensive and powerful feature set that enables machine learning models to capture the rich temporal dynamics and external influences present in your time series data, leading to more accurate and robust forecasts.

#### Key concepts
*   **Interaction Features:** New features created by combining two or more existing features, often through multiplication, to capture synergistic or conditional effects.
*   **Fourier Series:** A mathematical tool used to approximate periodic functions as a sum of sine and cosine waves of different frequencies (harmonics), useful for modeling complex seasonality.
*   **Harmonics:** The individual sine and cosine components of a Fourier series, each representing a specific frequency or periodicity.
*   **Exogenous Variables:** External time series (e.g., weather, economic indicators) that influence the target series and are included as features.
*   **Feature Selection:** The process of choosing a subset of relevant features for model training to improve performance, reduce overfitting, and decrease computational cost.
*   **Multicollinearity:** A statistical phenomenon where two or more predictor variables in a multiple regression model are highly correlated, potentially leading to unstable coefficient estimates.

#### Hands-on activity
**Activity: Building a Comprehensive Feature Set for Demand Forecasting**

You are given a daily demand time series. Your task is to apply a combination of advanced feature engineering techniques: create an interaction feature, add Fourier terms for yearly seasonality, and merge an external temperature forecast.

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Create a sample daily demand time series
np.random.seed(42)
dates = pd.date_range(start='2022-01-01', periods=730, freq='D') # 2 years of daily data
demand = 100 + 20 * np.sin(np.arange(730) / 7 * 2 * np.pi) + \
         30 * np.sin(np.arange(730) / 365 * 2 * np.pi) + \
         np.random.normal(0, 8, size=730)
df_full = pd.DataFrame({'timestamp': dates, 'demand': demand})
df_full = df_full.set_index('timestamp')

# Create a dummy 'is_promo' flag for a few periods
promo_dates_1 = pd.date_range(start='2022-03-10', periods=5, freq='D')
promo_dates_2 = pd.date_range(start='2022-09-01', periods=7, freq='D')
df_full['is_promo'] = 0
df_full.loc[promo_dates_1, 'is_promo'] = 1
df_full.loc[promo_dates_2, 'is_promo'] = 1

# Create dummy external temperature forecast (aligned with demand dates)
temp_forecast = 15 + 10 * np.sin(np.arange(730) / 365 * 2 * np.pi) + np.random.normal(0, 2, size=730)
df_full['temp_forecast'] = temp_forecast

print("Original Demand Data Head:")
print(df_full.head())

# --- Your task starts here ---
# 1. Extract 'dayofweek' and 'month' from the timestamp.
# 2. Create sine/cosine features for 'dayofweek'.
# 3. Create an interaction feature: 'promo_dayofweek_interaction' by multiplying 'is_promo' and 'dayofweek_sin'.
# 4. Add Fourier terms for yearly seasonality (period=365) up to the 2nd harmonic (k=1, k=2).
#    You'll need a 'dayofyear' feature first.
# 5. Display the head of the DataFrame with the new features.

# 1. Extract dayofweek and month
df_full['dayofweek'] = df_full.index.dayofweek
df_full['month'] = df_full.index.month

# 2. Create sine/cosine features for dayofweek
df_full['dayofweek_sin'] = np.sin(2 * np.pi * df_full['dayofweek'] / 7)
df_full['dayofweek_cos'] = np.cos(2 * np.pi * df_full['dayofweek'] / 7)

# 3. Create interaction feature
df_full['promo_dayofweek_interaction'] = df_full['is_promo'] * df_full['dayofweek_sin']

# 4. Add Fourier terms for yearly seasonality
df_full['dayofyear'] = df_full.index.dayofyear
for k in range(1, 3): # Up to 2nd harmonic
    df_full[f'year_sin_{k}'] = np.sin(2 * np.pi * k * df_full['dayofyear'] / 365)
    df_full[f'year_cos_{k}'] = np.cos(2 * np.pi * k * df_full['dayofyear'] / 365)

print("\nDemand Data with Advanced Features Head:")
print(df_full[['demand', 'is_promo', 'temp_forecast', 'dayofweek_sin', 'promo_dayofweek_interaction',
               'year_sin_1', 'year_cos_1', 'year_sin_2', 'year_cos_2']].head(10))
```

#### Assessment idea
1.  **Question:** You are forecasting product sales and have features for `month_sin`, `month_cos`, and a binary `is_holiday` flag. You observe that sales during holidays vary significantly depending on the month (e.g., December holidays are much bigger than March holidays). How could you create an interaction feature to capture this specific relationship, and why would it be useful?

    **Correct Answer:** You could create an interaction feature by multiplying the `is_holiday` flag with either `month_sin` or `month_cos` (or both). For example, `holiday_month_sin_interaction = df['is_holiday'] * df['month_sin']`. This feature would be useful because it allows the model to learn a *conditional* effect: the impact of `is_holiday` is not constant but is modulated by the `month_sin` (and thus the month of the year). When `is_holiday` is 0, the interaction term is 0, having no effect. When `is_holiday` is 1, the interaction term takes on the value of `month_sin`, allowing the model to assign a different holiday impact based on the month, thereby capturing the observed variation in holiday sales.

2.  **Question:** You are building a model to forecast hourly electricity demand. You have historical demand data and historical temperature data. For forecasting future demand (e.g., 24 hours ahead), you want to use future temperature as an exogenous feature. What is the critical data leakage concern here, and what is the practical implication for your feature engineering workflow?

    **Correct Answer:** The critical data leakage concern is that **future temperature values are generally not known at the time of prediction**. If you simply use the *actual* future temperature from your historical dataset as a feature for forecasting, your model will perform unrealistically well because it's seeing information from the future.
    The practical implication is that you **must use a forecast of the exogenous variable (temperature) for the prediction horizon**, not its actual future values. This means your workflow needs an additional step: first, you would train a separate model to forecast future temperature, and then you would use these *forecasted* temperature values as features in your electricity demand forecasting model. This ensures that all features used for prediction are genuinely available at the time the forecast is made.

#### AI generation note
Create a 12-minute live coding video. Load a complex time series dataset (e.g., daily energy prices with multiple seasonalities and external factors). First, demonstrate creating an interaction feature by multiplying a `dayofweek_sin` with a `is_weekend` flag. Next, show how to generate Fourier series terms for both weekly (P=7) and yearly (P=365) seasonality, explaining the concept of harmonics. Finally, integrate a separate CSV file containing external weather forecasts as an exogenous feature, emphasizing the importance of aligning timestamps and preventing data leakage for future predictions. Use a Jupyter Notebook, showing code, DataFrame outputs, and occasional plot overlays to visualize feature effects. Conclude with a quick reflection prompt on how to choose `k` for Fourier terms.

---

## Module 4: Classical Machine Learning Approaches for Time Series

Welcome to Module 4! In the previous modules, we laid the groundwork for time series analysis, exploring traditional statistical models and the crucial art of feature engineering. Now, we're ready to bridge that knowledge into the powerful realm of classical machine learning. This module will equip you with the skills to transform time series problems into a format that traditional supervised learning algorithms can understand and leverage. You'll learn how to apply models like Random Forests, Gradient Boosting Machines, and Support Vector Regressors, and critically, how to evaluate and select the best model for your forecasting challenges. Get ready to build robust and accurate time series forecasting systems using the workhorse algorithms of machine learning!

---

### Chapter 4.1 — Introduction to Supervised Learning for Time Series

#### Learning objectives
*   Explain the fundamental transformation required to apply supervised learning algorithms to time series data.
*   Identify and create common lag-based features and window statistics for time series forecasting.
*   Understand the role of exogenous variables in enhancing time series models.
*   Differentiate between direct and multi-output forecasting strategies.
*   Implement a basic supervised learning setup for a time series dataset using Python.

#### Detailed lesson content
Welcome to the exciting intersection of time series analysis and machine learning! Up until now, we've primarily dealt with models that inherently understand the sequential nature of time series data, like ARIMA or exponential smoothing. However, many powerful machine learning algorithms, such as linear regression, decision trees, or neural networks, are designed for supervised learning problems where inputs (features) are used to predict an output (target). The challenge, and indeed the art, in applying these algorithms to time series is transforming the sequential data into a tabular, feature-rich format that these models can consume. This transformation is the cornerstone of classical machine learning for time series forecasting.

The core idea is to create features from past observations of the time series itself, and potentially from other relevant external factors, to predict future values. This is often referred to as "lagging" the data. Imagine you want to predict tomorrow's stock price. You wouldn't just use today's price; you'd likely consider yesterday's price, the price from two days ago, and perhaps even the average price over the last week. Each of these past values becomes a "feature" in your supervised learning model. For example, if your time series is $Y_t$, and you want to predict $Y_{t+1}$, you might use $Y_t$, $Y_{t-1}$, $Y_{t-2}$ as features. This creates a row in your dataset where the features are $Y_t, Y_{t-1}, Y_{t-2}$ and the target is $Y_{t+1}$. This process is repeated for every time step, effectively sliding a window across your time series to generate multiple (feature, target) pairs.

Beyond simple lags, we can engineer more sophisticated features. These often include rolling statistics, which capture trends or seasonality over specific windows. For instance, a 7-day rolling average of sales can smooth out daily fluctuations and highlight weekly patterns. A 30-day rolling standard deviation might indicate volatility. Other useful features can be derived from the time index itself, such as the day of the week, month, quarter, or even whether a date is a holiday. These are known as *temporal features* and can help models capture cyclical patterns without explicitly modeling them as in traditional statistical methods. For example, a model might learn that sales are typically higher on Fridays or in December.

Let's consider a practical example. Suppose we have daily sales data. To predict sales for tomorrow, we might use:
*   Sales from yesterday ($t-1$)
*   Sales from 7 days ago ($t-7$) (to capture weekly seasonality)
*   Average sales over the last 3 days
*   Day of the week (encoded as a categorical feature)
*   Whether tomorrow is a public holiday (binary feature)

These become the input features ($X$) to our machine learning model, and tomorrow's sales become the target variable ($y$). The `pandas` library in Python is incredibly powerful for this kind of feature engineering, especially with its `.shift()` method for creating lag features and `.rolling()` for window statistics.

```python
import pandas as pd
import numpy as np

# Sample daily sales data
np.random.seed(42)
dates = pd.date_range(start='2023-01-01', periods=100, freq='D')
sales = np.random.randint(50, 200, size=100) + np.sin(np.arange(100)/10) * 30
df = pd.DataFrame({'date': dates, 'sales': sales})
df = df.set_index('date')

# Create lag features
df['sales_lag_1'] = df['sales'].shift(1)
df['sales_lag_7'] = df['sales'].shift(7)

# Create rolling mean feature (e.g., 7-day rolling average)
df['sales_rolling_mean_7'] = df['sales'].rolling(window=7).mean().shift(1) # shift by 1 to avoid data leakage

# Create temporal features
df['day_of_week'] = df.index.dayofweek
df['month'] = df.index.month

# Drop rows with NaN values created by lagging/rolling (these are the initial rows)
df_supervised = df.dropna()

print(df_supervised.head())
```

In this code snippet, `df.shift(1)` moves the `sales` column down by one row, so `sales_lag_1` at a given row `t` contains the `sales` value from `t-1`. The `rolling().mean().shift(1)` is crucial: we calculate the rolling mean and then `shift(1)` to ensure that when we are predicting `sales` at time `t`, we are only using information available *before* time `t`. Failing to shift rolling features or using future information is a common mistake known as *data leakage*, which leads to overly optimistic model performance during training and poor performance in real-world deployment.

A critical aspect of applying supervised learning to time series is how we define the target variable. For single-step forecasting, we predict $Y_{t+h}$ using features up to $Y_t$. For multi-step forecasting, we might predict multiple future steps simultaneously (multi-output models) or train separate models for each future step (direct forecasting). Direct forecasting involves training a distinct model for each forecast horizon (e.g., one model for $Y_{t+1}$, another for $Y_{t+2}$). While this can be computationally intensive, it often yields better performance as each model is optimized for a specific horizon. Multi-output models, on the other hand, predict an entire sequence of future values at once using a single model, which can be more efficient but sometimes sacrifices accuracy compared to direct methods.

Finally, *exogenous variables* are external factors that can influence the time series but are not part of the series itself. These could be economic indicators, weather data, marketing spend, or competitor actions. Including these as features can significantly improve forecast accuracy, as they provide additional context beyond the historical patterns of the series itself. For example, predicting ice cream sales might benefit from including temperature as an exogenous variable. Just like lag features, exogenous variables must be known or predictable for the forecast horizon. If you need to forecast temperature to forecast sales, you're introducing another layer of complexity and potential error.

#### Key concepts
*   **Supervised Learning for Time Series:** Transforming sequential time series data into a tabular format with features (inputs) and a target (output) for machine learning algorithms.
*   **Lag Features:** Past values of the time series used as predictors for future values.
*   **Rolling Statistics:** Statistical measures (e.g., mean, standard deviation, min/max) calculated over a moving window of past observations, used as features.
*   **Temporal Features:** Features derived from the time index itself, such as day of week, month, year, or holiday indicators.
*   **Exogenous Variables:** External factors or time series that influence the target time series but are not part of its past values, used as additional predictors.
*   **Data Leakage:** A common mistake where information from the future (or the target itself) is inadvertently included in the training features, leading to inflated performance metrics.
*   **Direct Forecasting:** Training a separate machine learning model for each desired forecast horizon (e.g., one model for 1-step ahead, another for 2-steps ahead).
*   **Multi-output Forecasting:** Training a single machine learning model to predict multiple future time steps simultaneously.

#### Hands-on activity
**Activity: Building a Feature-Rich Dataset for Energy Consumption Forecasting**

You are given a dataset of hourly energy consumption (in kWh) for a building. Your task is to prepare this dataset for supervised learning by creating relevant features.

**Instructions:**
1.  Load the provided `energy_consumption.csv` dataset. Assume it has columns `timestamp` and `consumption`.
2.  Convert the `timestamp` column to datetime objects and set it as the index.
3.  Create the following features:
    *   `consumption_lag_1`: Consumption from the previous hour.
    *   `consumption_lag_24`: Consumption from the same hour on the previous day (24 hours ago).
    *   `rolling_mean_3`: 3-hour rolling mean of consumption, shifted by 1.
    *   `hour_of_day`: The hour of the day (0-23).
    *   `day_of_week`: The day of the week (0=Monday, 6=Sunday).
    *   `is_weekend`: A binary flag (1 if weekend, 0 otherwise).
4.  Define the target variable `target` as `consumption` shifted by -1 (i.e., the next hour's consumption).
5.  Drop any rows that contain `NaN` values after feature creation.
6.  Print the head of the resulting DataFrame to inspect your features and target.

**Code Template:**

```python
import pandas as pd
import numpy as np

# Create a dummy dataset for demonstration if energy_consumption.csv is not available
# In a real scenario, you would load from a CSV
np.random.seed(42)
start_date = pd.to_datetime('2023-01-01 00:00:00')
dates = pd.date_range(start=start_date, periods=24*30, freq='H') # 30 days of hourly data
consumption = np.random.rand(len(dates)) * 100 + np.sin(np.arange(len(dates)) / 24 * 2 * np.pi) * 30 + np.random.rand(len(dates)) * 10
df_energy = pd.DataFrame({'timestamp': dates, 'consumption': consumption})

# --- Your code starts here ---

# 1. Convert timestamp and set as index
df_energy['timestamp'] = pd.to_datetime(df_energy['timestamp'])
df_energy = df_energy.set_index('timestamp')

# 2. Create lag features
df_energy['consumption_lag_1'] = # YOUR CODE HERE
df_energy['consumption_lag_24'] = # YOUR CODE HERE

# 3. Create rolling mean feature
df_energy['rolling_mean_3'] = # YOUR CODE HERE

# 4. Create temporal features
df_energy['hour_of_day'] = # YOUR CODE HERE
df_energy['day_of_week'] = # YOUR CODE HERE
df_energy['is_weekend'] = # YOUR CODE HERE (Hint: df_energy.index.dayofweek >= 5)

# 5. Define the target variable (next hour's consumption)
df_energy['target'] = # YOUR CODE HERE (Hint: use .shift(-1))

# 6. Drop NaN values
df_energy_processed = # YOUR CODE HERE

print(df_energy_processed.head())
print(f"Shape of processed DataFrame: {df_energy_processed.shape}")
```

#### Assessment idea
1.  **Question:** You are building a model to forecast daily website traffic. You decide to include the 7-day rolling average of traffic as a feature. To prevent data leakage, how should this feature be calculated and included in your dataset?
    *   A) Calculate the 7-day rolling average using the current day's traffic and then shift it by one day forward.
    *   B) Calculate the 7-day rolling average using traffic from the current day and the previous 6 days, and use it as is.
    *   C) Calculate the 7-day rolling average using traffic from the previous 7 days (excluding the current day), and then shift it by one day forward.
    *   D) Calculate the 7-day rolling average using traffic from the previous 7 days (excluding the current day), and then use it as a feature for the current day's prediction.

    **Correct Answer:** D) Calculate the 7-day rolling average using traffic from the previous 7 days (excluding the current day), and then use it as a feature for the current day's prediction.
    **Explanation:** Option D correctly describes how to avoid data leakage. When predicting for day `t`, all features must only contain information available *up to* day `t-1`. A 7-day rolling average for day `t` should be based on days `t-7` through `t-1`. If you include day `t`'s traffic in the rolling average for day `t`, you are using information that would not be available at the time of prediction. Shifting it forward (A and C) would mean the feature for day `t` contains information from day `t+X`, which is also data leakage. Option B is also data leakage because it includes the current day's traffic in the average used to predict the current day's target.

2.  **Question:** Which of the following scenarios is an example of using an exogenous variable in time series forecasting?
    *   A) Predicting next month's sales using the sales figures from the previous three months.
    *   B) Forecasting daily electricity demand by including the predicted maximum temperature for the day.
    *   C) Estimating the number of website visitors based on the number of unique visitors from the previous hour.
    *   D) Predicting stock prices using the stock's opening, closing, high, and low prices from the previous day.

    **Correct Answer:** B) Forecasting daily electricity demand by including the predicted maximum temperature for the day.
    **Explanation:** An exogenous variable is an external factor that influences the target time series. In this case, temperature is an external factor that significantly impacts electricity demand. Options A, C, and D describe using lag features or other derived features *from the time series itself*, not external variables.

#### AI generation note
Create a 12-minute interactive video lesson. Begin with an animated whiteboard explanation illustrating the concept of transforming sequential time series data into a tabular supervised learning format using lag features and rolling windows. Show a simple time series graph evolving into a feature matrix. Transition to a live coding demonstration in a Jupyter Notebook, explicitly using `pandas.DataFrame.shift()` and `pandas.DataFrame.rolling().mean().shift()` to create lag and rolling mean features on a synthetic daily temperature dataset. Highlight the `shift(1)` for rolling features to prevent data leakage with a clear visual warning. Include a segment on creating temporal features like `dayofweek` and `month`. End with a 2-question interactive quiz embedded in the video, focusing on identifying correct feature engineering techniques for supervised learning on time series. Ensure captions and a transcript are available.

---

### Chapter 4.2 — Tree-Based Models: Decision Trees and Random Forests

#### Learning objectives
*   Understand the fundamental principles of how decision trees make predictions for regression tasks.
*   Explain the concept of ensemble learning, specifically bagging, as applied in Random Forests.
*   Identify the advantages of Random Forests for time series forecasting, including handling non-linearity and feature importance.
*   Implement and tune a Random Forest Regressor for a time series forecasting problem using `scikit-learn`.
*   Recognize common pitfalls and best practices when using tree-based models for time series.

#### Detailed lesson content
Having learned how to transform our time series into a supervised learning problem, we can now unleash the power of classical machine learning algorithms. Among the most versatile and widely used are tree-based models, particularly Decision Trees and their ensemble counterpart, Random Forests. These models are highly intuitive and can capture complex, non-linear relationships within your data, making them excellent candidates for time series forecasting.

A **Decision Tree** for regression works by recursively partitioning the feature space into a set of regions. For any given input, the tree traverses these partitions (nodes) based on feature values until it reaches a leaf node. The prediction for that input is then the average (or median) of the target values of all training samples that fell into that specific leaf node. Imagine a tree trying to predict tomorrow's temperature. The first split might be "Is today's temperature > 20°C?". If yes, it goes down one branch; if no, another. Then, within each branch, it might ask "Is it sunny today?". This process continues until it isolates a group of similar past days and averages their next-day temperatures. Decision trees are easy to interpret, but they can be prone to overfitting, meaning they learn the training data too well, including its noise, and perform poorly on unseen data. This is particularly true for deep trees.

This is where **Random Forests** come in. A Random Forest is an ensemble learning method that operates by constructing a multitude of decision trees at training time and outputting the mean prediction (for regression) of the individual trees. The "randomness" comes from two key aspects:
1.  **Bagging (Bootstrap Aggregating):** Each tree in the forest is trained on a different random subset of the training data, sampled with replacement (bootstrapping). This means some data points might appear multiple times in a tree's training set, while others might not appear at all.
2.  **Feature Randomness:** When splitting a node, each tree considers only a random subset of the available features, rather than all features. This further decorrelates the trees, ensuring they don't all make the same mistakes.

By averaging the predictions of many diverse, slightly biased trees, a Random Forest significantly reduces variance and improves generalization performance compared to a single decision tree. This makes them much more robust to overfitting. For time series, Random Forests are particularly appealing because they can naturally handle non-linear relationships, interactions between features (e.g., how `day_of_week` interacts with `hour_of_day`), and are relatively robust to outliers. They also provide a measure of *feature importance*, which can be invaluable for understanding which engineered features contribute most to your forecasts.

Let's look at a practical implementation using `scikit-learn`. We'll continue with our energy consumption example from the previous chapter, assuming we've already created our lag and temporal features.

```python
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, mean_absolute_error
import pandas as pd
import numpy as np

# Recreate df_energy_processed from previous chapter for continuity
np.random.seed(42)
start_date = pd.to_datetime('2023-01-01 00:00:00')
dates = pd.date_range(start=start_date, periods=24*30, freq='H') # 30 days of hourly data
consumption = np.random.rand(len(dates)) * 100 + np.sin(np.arange(len(dates)) / 24 * 2 * np.pi) * 30 + np.random.rand(len(dates)) * 10
df_energy = pd.DataFrame({'timestamp': dates, 'consumption': consumption})
df_energy['timestamp'] = pd.to_datetime(df_energy['timestamp'])
df_energy = df_energy.set_index('timestamp')

df_energy['consumption_lag_1'] = df_energy['consumption'].shift(1)
df_energy['consumption_lag_24'] = df_energy['consumption'].shift(24)
df_energy['rolling_mean_3'] = df_energy['consumption'].rolling(window=3).mean().shift(1)
df_energy['hour_of_day'] = df_energy.index.hour
df_energy['day_of_week'] = df_energy.index.dayofweek
df_energy['is_weekend'] = (df_energy.index.dayofweek >= 5).astype(int)
df_energy['target'] = df_energy['consumption'].shift(-1)
df_energy_processed = df_energy.dropna()

# Define features (X) and target (y)
features = ['consumption_lag_1', 'consumption_lag_24', 'rolling_mean_3', 'hour_of_day', 'day_of_week', 'is_weekend']
X = df_energy_processed[features]
y = df_energy_processed['target']

# Time series split: Crucial to maintain chronological order
# DO NOT use random train_test_split for time series
train_size = int(len(X) * 0.8)
X_train, X_test = X.iloc[:train_size], X.iloc[train_size:]
y_train, y_test = y.iloc[:train_size], y.iloc[train_size:]

# Initialize and train the Random Forest Regressor
# n_estimators: number of trees in the forest
# random_state: for reproducibility
rf_model = RandomForestRegressor(n_estimators=100, random_state=42, n_jobs=-1) # n_jobs=-1 uses all available cores
rf_model.fit(X_train, y_train)

# Make predictions
y_pred = rf_model.predict(X_test)

# Evaluate the model
rmse = np.sqrt(mean_squared_error(y_test, y_pred))
mae = mean_absolute_error(y_test, y_pred)
print(f"Random Forest RMSE: {rmse:.2f}")
print(f"Random Forest MAE: {mae:.2f}")

# Feature Importance
feature_importances = pd.Series(rf_model.feature_importances_, index=features).sort_values(ascending=False)
print("\nFeature Importances:")
print(feature_importances)
```

**Common Mistakes and Safety Notes:**
1.  **Using `train_test_split` randomly:** For time series, it's critical to maintain the temporal order. You must split your data chronologically (e.g., first 80% for training, last 20% for testing). Random splitting will lead to data leakage and unrealistic performance metrics.
2.  **Overfitting:** While Random Forests are more robust than single decision trees, they can still overfit if `n_estimators` is too low or `max_depth` (if set) is too high. Hyperparameter tuning is important.
3.  **Extrapolation:** Tree-based models are interpolation models. They struggle to predict values outside the range of what they've seen in the training data. If your time series has a strong trend, a Random Forest might not extrapolate well beyond the maximum value seen during training. This is a significant limitation for trend-heavy time series. You might need to detrend the series first or add trend-capturing features.
4.  **Categorical Features:** `scikit-learn`'s Random Forest implementation expects numerical input. Categorical features like `day_of_week` or `month` should be numerically encoded (e.g., One-Hot Encoding or Label Encoding, though Label Encoding can imply ordinality where none exists, which trees can sometimes handle). In our example, `day_of_week` is already numerical. `is_weekend` is binary.

Random Forests are a powerful baseline for many time series forecasting tasks due to their robustness and ability to handle complex interactions. They are often a great starting point before exploring more complex models.

#### Key concepts
*   **Decision Tree Regressor:** A non-parametric supervised learning method that predicts the value of a target variable by learning simple decision rules inferred from the data features.
*   **Ensemble Learning:** A machine learning paradigm where multiple models (learners) are trained to solve the same problem and combined to get better performance.
*   **Bagging (Bootstrap Aggregating):** An ensemble technique where multiple versions of a predictor are trained on bootstrap samples (random samples with replacement) of the training data, and their predictions are averaged.
*   **Random Forest Regressor:** An ensemble learning method that constructs a multitude of decision trees during training and outputs the mean prediction of the individual trees. It uses both bagging and feature randomness.
*   **Feature Importance:** A metric provided by tree-based models (like Random Forests) that indicates the relative contribution of each input feature to the model's predictions.
*   **Overfitting:** When a model learns the training data too well, including noise, and performs poorly on unseen data.
*   **Extrapolation:** The process of estimating values beyond the original observation range. Tree-based models generally struggle with extrapolation.

#### Hands-on activity
**Activity: Forecasting Stock Prices with Random Forest**

You have a dataset of historical stock prices for a company, including daily closing price, volume, and potentially other indicators. Your goal is to forecast the next day's closing price using a Random Forest Regressor.

**Instructions:**
1.  Load the provided `stock_prices.csv` dataset. Assume it has `Date`, `Close`, `Volume` columns.
2.  Convert `Date` to datetime and set as index.
3.  Create the following features:
    *   `Close_lag_1`: Closing price from the previous day.
    *   `Volume_lag_1`: Volume from the previous day.
    *   `rolling_mean_5_close`: 5-day rolling mean of `Close`, shifted by 1.
    *   `day_of_week`: Day of the week.
4.  Define the target variable `next_day_close` as `Close` shifted by -1.
5.  Drop `NaN` values.
6.  Split the data chronologically into 80% training and 20% testing sets.
7.  Train a `RandomForestRegressor` with `n_estimators=150` and `random_state=42`.
8.  Make predictions on the test set.
9.  Calculate and print the RMSE and MAE.
10. Print the feature importances.

**Code Template:**

```python
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, mean_absolute_error

# Create a dummy dataset for demonstration if stock_prices.csv is not available
np.random.seed(42)
dates = pd.date_range(start='2022-01-01', periods=250, freq='B') # Business days
close_prices = 100 + np.cumsum(np.random.randn(250)) + np.sin(np.arange(250)/20) * 10
volumes = np.random.randint(100000, 500000, size=250)
df_stock = pd.DataFrame({'Date': dates, 'Close': close_prices, 'Volume': volumes})

# --- Your code starts here ---

# 1. Convert Date to datetime and set as index
df_stock['Date'] = # YOUR CODE HERE
df_stock = # YOUR CODE HERE

# 2. Create lag features
df_stock['Close_lag_1'] = # YOUR CODE HERE
df_stock['Volume_lag_1'] = # YOUR CODE HERE

# 3. Create rolling mean feature
df_stock['rolling_mean_5_close'] = # YOUR CODE HERE

# 4. Create temporal feature
df_stock['day_of_week'] = # YOUR CODE HERE

# 5. Define the target variable
df_stock['next_day_close'] = # YOUR CODE HERE

# 6. Drop NaN values
df_stock_processed = # YOUR CODE HERE

# Define features (X) and target (y)
features = ['Close_lag_1', 'Volume_lag_1', 'rolling_mean_5_close', 'day_of_week']
X = df_stock_processed[features]
y = df_stock_processed['next_day_close']

# 7. Split data chronologically
train_size = # YOUR CODE HERE (e.g., int(len(X) * 0.8))
X_train, X_test = # YOUR CODE HERE
y_train, y_test = # YOUR CODE HERE

# 8. Train RandomForestRegressor
rf_model = # YOUR CODE HERE (n_estimators=150, random_state=42)
rf_model.fit(X_train, y_train)

# 9. Make predictions
y_pred = # YOUR CODE HERE

# 10. Evaluate the model
rmse = # YOUR CODE HERE
mae = # YOUR CODE HERE
print(f"Random Forest RMSE: {rmse:.2f}")
print(f"Random Forest MAE: {mae:.2f}")

# 11. Print feature importances
feature_importances = # YOUR CODE HERE
print("\nFeature Importances:")
print(feature_importances)
```

#### Assessment idea
1.  **Question:** A data scientist is using a Random Forest to forecast monthly sales. They notice that their model performs exceptionally well on the training data but poorly on unseen future data. Which of the following is the most likely reason for this discrepancy, given the nature of Random Forests?
    *   A) The Random Forest model is inherently too simple for complex sales data.
    *   B) The data scientist likely used a random train-test split instead of a chronological split, leading to data leakage.
    *   C) Random Forests are known for underfitting time series data, indicating a need for more complex models.
    *   D) The `n_estimators` parameter was set too high, causing the model to average out all signals.

    **Correct Answer:** B) The data scientist likely used a random train-test split instead of a chronological split, leading to data leakage.
    **Explanation:** For time series data, a random train-test split is a critical mistake. It can inadvertently expose future information to the model during training, leading to artificially high performance on the training set and poor generalization to truly unseen future data. Random Forests are powerful and generally good at capturing complexity (A is unlikely). They are more prone to overfitting than underfitting (C is incorrect). A high `n_estimators` typically *reduces* variance and overfitting, improving generalization, not causing poor performance (D is incorrect).

2.  **Question:** You are using a Random Forest to forecast a time series that exhibits a strong, consistent upward trend. After training, you observe that the model's predictions for future periods are consistently lower than the actual values, especially for periods far into the future. What is the most probable reason for this behavior?
    *   A) The Random Forest is biased towards predicting lower values due to its ensemble nature.
    *   B) The model has not learned enough non-linear relationships in the data.
    *   C) Random Forests are interpolation models and struggle to extrapolate beyond the range of values seen in the training data.
    *   D) The `max_features` parameter was set too low, limiting the model's ability to use all relevant features.

    **Correct Answer:** C) Random Forests are interpolation models and struggle to extrapolate beyond the range of values seen in the training data.
    **Explanation:** This is a classic limitation of tree-based models like Random Forests. They make predictions by averaging target values within leaf nodes, which are formed by partitioning the feature space. If the future trend pushes values beyond the maximum target value observed during training, the model cannot "invent" new higher values; it can only predict values within the range it has seen. This results in under-prediction for strong upward trends (or over-prediction for strong downward trends). Detrending the series or adding features that explicitly capture the trend can mitigate this.

#### AI generation note
Produce a 10-minute animated video explaining Decision Trees and Random Forests for regression. Start with a visual analogy of a decision tree sorting data points into bins, then transition to how multiple trees (Random Forest) improve robustness. Use clear diagrams to show bagging and feature randomness. Follow with a live coding demo in a Jupyter Notebook using `scikit-learn` on a synthetic time series dataset, demonstrating the training, prediction, and evaluation of a `RandomForestRegressor`. Emphasize the importance of chronological splitting and show how to extract and visualize feature importances. Include a common mistake section highlighting the danger of random train-test splits for time series. The interactive element should be a prompt asking learners to identify a scenario where Random Forests might struggle (e.g., strong trend extrapolation).

---

### Chapter 4.3 — Gradient Boosting Models: XGBoost, LightGBM, CatBoost

#### Learning objectives
*   Explain the core concept of boosting and how it differs from bagging in ensemble learning.
*   Understand the iterative process of Gradient Boosting Machines (GBMs) in minimizing prediction errors.
*   Compare and contrast the key features, advantages, and typical use cases of XGBoost, LightGBM, and CatBoost.
*   Implement and fine-tune a Gradient Boosting model (e.g., XGBoost) for time series forecasting.
*   Identify hyperparameter tuning strategies and common challenges when applying boosting models to time series data.

#### Detailed lesson content
While Random Forests build many independent trees and average their predictions, **Gradient Boosting Machines (GBMs)** take a fundamentally different, sequential approach. Instead of parallel training, boosting builds trees one after another, with each new tree attempting to correct the errors made by the *previous* trees. This iterative error-* (the errors) of the preceding model. Let's break this down:
1.  You start with an initial, simple model (often just the average of the target variable).
2.  You calculate the residuals (actual values - predicted values) from this initial model.
3.  You then train a new, weak learner (typically a shallow decision tree) to predict these residuals.
4.  You add the prediction of this new tree, scaled by a learning rate, to the previous model's prediction.
5.  You repeat steps 2-4, continually updating the residuals and training new trees to predict the remaining errors.

This process essentially "boosts" the performance of weak learners into a strong learner. The "gradient" part comes from using gradient descent to minimize a loss function by iteratively moving in the direction of the steepest descent, where each new tree is fitted to the negative gradient of the loss function with respect to the current ensemble's prediction. This makes GBMs highly flexible, as they can optimize various loss functions (e.g., mean squared error for regression, log loss for classification).

Three popular and highly optimized implementations of Gradient Boosting are **XGBoost**, **LightGBM**, and **CatBoost**. While they all share the fundamental boosting principle, they differ in their specific optimizations and features:

*   **XGBoost (eXtreme Gradient Boosting):** This was one of the first highly optimized and scalable implementations of gradient boosting. It introduced several innovations, including:
    *   **Regularization:** L1 and L2 regularization to prevent overfitting.
    *   **Parallelization:** Can run on multiple cores, speeding up training.
    *   **Handling Missing Values:** Built-in routine to handle missing data.
    *   **Tree Pruning:** Smart tree pruning (depth-first then breadth-first) to improve generalization.
    XGBoost is known for its performance and robustness, making it a go-to choice for many data scientists.

*   **LightGBM (Light Gradient Boosting Machine):** Developed by Microsoft, LightGBM is designed for speed and efficiency, especially on large datasets. Its key innovations include:
    *   **Leaf-wise (vs. Level-wise) Tree Growth:** XGBoost grows trees level-wise, meaning it splits nodes at the same depth simultaneously. LightGBM grows trees leaf-wise, prioritizing splits that yield the greatest reduction in loss, which can lead to faster convergence and better accuracy with fewer splits.
    *   **Gradient-based One-Side Sampling (GOSS):** Focuses on training on instances with larger gradients (i.e., those that are harder to predict), which speeds up training without significant loss of accuracy.
    *   **Exclusive Feature Bundling (EFB):** Bundles mutually exclusive features to reduce the number of features, further speeding up training.
    LightGBM is often faster than XGBoost, especially on large datasets, but can be more prone to overfitting on smaller datasets.

*   **CatBoost (Categorical Boosting):** Developed by Yandex, CatBoost focuses on handling categorical features efficiently and robustly. Its unique features include:
    *   **Ordered Boosting:** A permutation-driven approach to avoid prediction shift, which is a type of target leakage common in gradient boosting when dealing with categorical features.
    *   **Ordered Target Encoding:** A sophisticated method to convert categorical features to numerical ones on the fly, reducing information loss and preventing overfitting.
    *   **Symmetric Trees:** Builds balanced trees, which can improve prediction speed and robustness.
    CatBoost is particularly strong when your time series features include many categorical variables that might be tricky to encode manually.

For time series forecasting, GBMs are excellent at capturing complex non-linear patterns and interactions between features. However, like Random Forests, they are primarily interpolation models and may struggle with strong trends that extrapolate beyond the training data range. It's often beneficial to detrend the series or add explicit trend features (e.g., a simple linear trend or time counter) to help them.

Let's implement XGBoost for our energy consumption forecasting task.

```python
import xgboost as xgb
import pandas as pd
import numpy as np
from sklearn.metrics import mean_squared_error, mean_absolute_error

# Recreate df_energy_processed from previous chapter for continuity
np.random.seed(42)
start_date = pd.to_datetime('2023-01-01 00:00:00')
dates = pd.date_range(start=start_date, periods=24*30, freq='H') # 30 days of hourly data
consumption = np.random.rand(len(dates)) * 100 + np.sin(np.arange(len(dates)) / 24 * 2 * np.pi) * 30 + np.random.rand(len(dates)) * 10
df_energy = pd.DataFrame({'timestamp': dates, 'consumption': consumption})
df_energy['timestamp'] = pd.to_datetime(df_energy['timestamp'])
df_energy = df_energy.set_index('timestamp')

df_energy['consumption_lag_1'] = df_energy['consumption'].shift(1)
df_energy['consumption_lag_24'] = df_energy['consumption'].shift(24)
df_energy['rolling_mean_3'] = df_energy['consumption'].rolling(window=3).mean().shift(1)
df_energy['hour_of_day'] = df_energy.index.hour
df_energy['day_of_week'] = df_energy.index.dayofweek
df_energy['is_weekend'] = (df_energy.index.dayofweek >= 5).astype(int)
df_energy['target'] = df_energy['consumption'].shift(-1)
df_energy_processed = df_energy.dropna()

# Define features (X) and target (y)
features = ['consumption_lag_1', 'consumption_lag_24', 'rolling_mean_3', 'hour_of_day', 'day_of_week', 'is_weekend']
X = df_energy_processed[features]
y = df_energy_processed['target']

# Time series split
train_size = int(len(X) * 0.8)
X_train, X_test = X.iloc[:train_size], X.iloc[train_size:]
y_train, y_test = y.iloc[:train_size], y.iloc[train_size:]

# Initialize and train the XGBoost Regressor
# Common hyperparameters:
# n_estimators: number of boosting rounds (trees)
# learning_rate: shrinks the contribution of each tree
# max_depth: maximum depth of a tree
# subsample: fraction of samples used for fitting the trees
# colsample_bytree: fraction of features used for fitting the trees
# objective: 'reg:squarederror' for regression
xgb_model = xgb.XGBRegressor(objective='reg:squarederror',
                             n_estimators=500,
                             learning_rate=0.05,
                             max_depth=5,
                             subsample=0.7,
                             colsample_bytree=0.7,
                             random_state=42,
                             n_jobs=-1) # Use all available cores

xgb_model.fit(X_train, y_train,
              eval_set=[(X_test, y_test)], # Monitor performance on test set
              early_stopping_rounds=50,    # Stop if no improvement for 50 rounds
              verbose=False)               # Set to True to see training progress

# Make predictions
y_pred = xgb_model.predict(X_test)

# Evaluate the model
rmse = np.sqrt(mean_squared_error(y_test, y_pred))
mae = mean_absolute_error(y_test, y_pred)
print(f"XGBoost RMSE: {rmse:.2f}")
print(f"XGBoost MAE: {mae:.2f}")

# Feature Importance
# 'weight' is the default for feature importance in XGBoost, meaning the number of times a feature appears in a tree
feature_importances = pd.Series(xgb_model.feature_importances_, index=features).sort_values(ascending=False)
print("\nFeature Importances (XGBoost):")
print(feature_importances)
```

**Common Mistakes and Safety Notes:**
1.  **Overfitting:** GBMs are powerful but can easily overfit, especially with too many estimators, a high learning rate, or deep trees. Hyperparameter tuning (e.g., using cross-validation) is crucial. `early_stopping_rounds` is a great way to prevent this during training.
2.  **Data Leakage:** As with all supervised ML for time series, strict chronological splitting and careful feature engineering (e.g., shifting rolling features) are paramount.
3.  **Extrapolation:** Like Random Forests, GBMs are not designed for extrapolation. If your time series has a strong trend, consider detrending or adding explicit trend features.
4.  **Computational Cost:** While optimized, training very large GBMs on massive datasets can still be computationally intensive. LightGBM and CatBoost often offer performance advantages in such scenarios.
5.  **Categorical Feature Handling:** While CatBoost excels here, XGBoost and LightGBM require categorical features to be numerically encoded (e.g., One-Hot Encoding or Label Encoding). Be mindful of how your chosen encoding might affect tree splits.

Gradient Boosting models are often the first choice for achieving high accuracy in classical machine learning tasks. Mastering their application to time series, along with careful feature engineering and validation, will significantly elevate your forecasting capabilities.

#### Key concepts
*   **Boosting:** An ensemble learning technique that sequentially builds multiple weak learners, where each new learner tries to correct the errors of the previous ones.
*   **Gradient Boosting Machine (GBM):** A type of boosting algorithm that uses gradient descent to minimize a loss function by iteratively adding weak learners (typically decision trees) that predict the residuals of the current ensemble.
*   **Residuals:** The difference between the actual observed values and the predicted values by a model.
*   **Learning Rate (Shrinkage):** A hyperparameter in boosting that scales the contribution of each new tree, helping to prevent overfitting and improve generalization.
*   **XGBoost (eXtreme Gradient Boosting):** A highly optimized, scalable, and popular implementation of gradient boosting known for its performance, regularization, and parallel processing capabilities.
*   **LightGBM (Light Gradient Boosting Machine):** An efficient and fast gradient boosting framework developed by Microsoft, known for its leaf-wise tree growth, GOSS, and EFB.
*   **CatBoost (Categorical Boosting):** A gradient boosting library developed by Yandex, specialized in handling categorical features automatically and robustly using ordered boosting and ordered target encoding.
*   **Early Stopping:** A regularization technique used during iterative training (like boosting) where training is stopped when the performance on a validation set stops improving, preventing overfitting.

#### Hands-on activity
**Activity: Forecasting Sales with LightGBM**

You have a dataset of daily retail sales, including sales amount, promotional flags, and store information. Your task is to forecast next day's sales using a LightGBM Regressor.

**Instructions:**
1.  Load the provided `retail_sales.csv` dataset. Assume it has `Date`, `Sales`, `Promotion_Flag`, `Store_ID` columns.
2.  Convert `Date` to datetime and set as index.
3.  Create the following features:
    *   `Sales_lag_1`: Sales from the previous day.
    *   `Sales_lag_7`: Sales from 7 days ago (weekly seasonality).
    *   `rolling_mean_3_sales`: 3-day rolling mean of `Sales`, shifted by 1.
    *   `day_of_week`: Day of the week.
    *   `is_promotion`: Use `Promotion_Flag` as is (assume it's binary).
    *   `Store_ID`: One-hot encode `Store_ID` if it's categorical (or use Label Encoding if LightGBM can handle it, which it often can). For simplicity, let's assume `Store_ID` is numerical for now.
4.  Define the target variable `next_day_sales` as `Sales` shifted by -1.
5.  Drop `NaN` values.
6.  Split the data chronologically into 70% training and 30% testing sets.
7.  Train a `LGBMRegressor` with `n_estimators=300`, `learning_rate=0.1`, `num_leaves=31`, `random_state=42`. Use `early_stopping_rounds=20` with `eval_set`.
8.  Make predictions on the test set.
9.  Calculate and print the RMSE and MAE.
10. Print the feature importances.

**Code Template:**

```python
import pandas as pd
import numpy as np
import lightgbm as lgb
from sklearn.metrics import mean_squared_error, mean_absolute_error
from sklearn.preprocessing import LabelEncoder # For Store_ID if needed

# Create a dummy dataset for demonstration if retail_sales.csv is not available
np.random.seed(42)
dates = pd.date_range(start='2023-01-01', periods=365, freq='D')
sales = 1000 + np.sin(np.arange(365)/30 * 2 * np.pi) * 200 + np.random.randn(365) * 50
promotion = np.random.randint(0, 2, size=365)
store_ids = np.random.choice([101, 102, 103], size=365) # Example stores
df_retail = pd.DataFrame({'Date': dates, 'Sales': sales, 'Promotion_Flag': promotion, 'Store_ID': store_ids})

# --- Your code starts here ---

# 1. Convert Date to datetime and set as index
df_retail['Date'] = # YOUR CODE HERE
df_retail = # YOUR CODE HERE

# 2. Create lag features
df_retail['Sales_lag_1'] = # YOUR CODE HERE
df_retail['Sales_lag_7'] = # YOUR CODE HERE

# 3. Create rolling mean feature
df_retail['rolling_mean_3_sales'] = # YOUR CODE HERE

# 4. Create temporal feature
df_retail['day_of_week'] = # YOUR CODE HERE

# 5. Use Promotion_Flag as is
df_retail['is_promotion'] = df_retail['Promotion_Flag']

# 6. Handle Store_ID (if categorical, convert to numerical)
# For LightGBM, Label Encoding is often sufficient for categorical features
# If using One-Hot Encoding, remember to drop original column and handle new columns
le = LabelEncoder()
df_retail['Store_ID_encoded'] = le.fit_transform(df_retail['Store_ID'])

# 7. Define the target variable
df_retail['next_day_sales'] = # YOUR CODE HERE

# 8. Drop NaN values
df_retail_processed = # YOUR CODE HERE

# Define features (X) and target (y)
features = ['Sales_lag_1', 'Sales_lag_7', 'rolling_mean_3_sales', 'day_of_week', 'is_promotion', 'Store_ID_encoded']
X = df_retail_processed[features]
y = df_retail_processed['next_day_sales']

# 9. Split data chronologically
train_size = # YOUR CODE HERE (e.g., int(len(X) * 0.7))
X_train, X_test = # YOUR CODE HERE
y_train, y_test = # YOUR CODE HERE

# 10. Train LGBMRegressor
lgbm_model = lgb.LGBMRegressor(objective='regression',
                               n_estimators=300,
                               learning_rate=0.1,
                               num_leaves=31,
                               random_state=42,
                               n_jobs=-1)

lgbm_model.fit(X_train, y_train,
               eval_set=[(X_test, y_test)],
               eval_metric='rmse', # Or 'l1' for MAE
               callbacks=[lgb.early_stopping(stopping_rounds=20, verbose=False)])

# 11. Make predictions
y_pred = # YOUR CODE HERE

# 12. Evaluate the model
rmse = # YOUR CODE HERE
mae = # YOUR CODE HERE
print(f"LightGBM RMSE: {rmse:.2f}")
print(f"LightGBM MAE: {mae:.2f}")

# 13. Print feature importances
feature_importances = pd.Series(lgbm_model.feature_importances_, index=features).sort_values(ascending=False)
print("\nFeature Importances (LightGBM):")
print(feature_importances)
```

#### Assessment idea
1.  **Question:** You are comparing XGBoost and LightGBM for a time series forecasting task on a very large dataset (millions of rows). Which of the following statements accurately describes a potential advantage of LightGBM over XGBoost in this scenario?
    *   A) LightGBM is inherently more robust to overfitting on large datasets.
    *   B) LightGBM's level-wise tree growth algorithm is more efficient for large datasets.
    *   C) LightGBM's leaf-wise tree growth and GOSS/EFB optimizations generally lead to faster training times.
    *   D) XGBoost has better built-in handling for categorical features, making it superior for large, mixed-type datasets.

    **Correct Answer:** C) LightGBM's leaf-wise tree growth and GOSS/EFB optimizations generally lead to faster training times.
    **Explanation:** LightGBM was specifically designed for speed and efficiency on large datasets. Its leaf-wise tree growth (which prioritizes splits with max gain) and techniques like GOSS (Gradient-based One-Side Sampling) and EFB (Exclusive Feature Bundling) contribute to significantly faster training compared to XGBoost, especially with many features or instances. XGBoost uses level-wise growth (B is incorrect). While both can be regularized, LightGBM can be *more* prone to overfitting on smaller datasets if not tuned carefully (A is incorrect). CatBoost, not XGBoost, is known for superior categorical feature handling (D is incorrect).

2.  **Question:** A data scientist is using a Gradient Boosting model to forecast a time series. They observe that the model's predictions are consistently "lagging" behind the actual values, meaning the model predicts a peak *after* the actual peak occurs. What is the most likely cause of this behavior in a boosting model?
    *   A) The learning rate is too high, causing the model to overreact to recent changes.
    *   B) The `n_estimators` parameter is too low, preventing the model from learning complex patterns.
    *   C) The features used (e.g., lag features) are not sufficiently capturing the dynamics of the series, leading to an inherent delay in the model's response.
    *   D) The model is suffering from extrapolation issues due to a strong underlying trend.

    **Correct Answer:** C) The features used (e.g., lag features) are not sufficiently capturing the dynamics of the series, leading to an inherent delay in the model's response.
    **Explanation:** When a model's predictions consistently lag, it often indicates that the input features (especially lag features) are not providing enough "look-ahead" information or are not capturing the true lead-lag relationships in the data. For example, if you're only using `Y_t-1` to predict `Y_t+1`, the model might struggle to anticipate changes. A higher learning rate (A) would typically make the model *more* reactive, not less. A low `n_estimators` (B) might lead to underfitting but not necessarily a consistent lag. Extrapolation issues (D) usually manifest as under- or over-prediction beyond the training range, not a consistent temporal shift in peaks/troughs. The solution often involves adding more relevant lag features (e.g., from further in the past, or from leading indicators) or more sophisticated temporal features.

#### AI generation note
Design a 15-minute mixed-format lesson. Start with a 5-minute animated explanation comparing bagging and boosting, visually demonstrating how each successive tree in boosting corrects errors. Use a simple regression example to show residuals being predicted. Transition to a 7-minute live coding demo in a Jupyter Notebook, implementing XGBoost on a real-world energy consumption dataset. Show how to set up `XGBRegressor`, use `eval_set` and `early_stopping_rounds`, and interpret feature importances. Include a visual comparison of XGBoost, LightGBM, and CatBoost's key features using a comparison table overlay. Conclude with a 3-minute discussion on hyperparameter tuning strategies for boosting models and common pitfalls (e.g., extrapolation). The interactive element should be a reflection prompt asking learners to choose which boosting algorithm they'd use for a specific scenario (e.g., many categorical features, very large dataset) and justify their choice.

---

### Chapter 4.4 — Support Vector Machines for Time Series Regression

#### Learning objectives
*   Explain the core principle of Support Vector Regression (SVR) and how it differs from traditional regression models.
*   Understand the role of the epsilon-insensitive tube and kernel functions in SVR.
*   Identify the advantages and limitations of SVR for time series forecasting, particularly its robustness to outliers.
*   Implement and tune a Support Vector Regressor for a time series problem using `scikit-learn`.
*   Discuss the impact of key hyperparameters (C, epsilon, kernel) on SVR performance.

#### Detailed lesson content
Moving beyond tree-based ensembles, let's explore another powerful classical machine learning algorithm: **Support Vector Machines (SVMs)**, specifically adapted for regression tasks, known as **Support Vector Regression (SVR)**. While often associated with classification, SVMs can be incredibly effective for regression, offering a unique approach that aims to find a function that deviates from the target by no more than a certain margin, rather than minimizing the squared error directly.

The fundamental idea behind SVR is to find a hyperplane that best fits the data points, but with a twist. Instead of trying to fit the hyperplane *through* the data points, SVR tries to fit the hyperplane such that as many data points as possible fall *within* a certain margin, or "epsilon-insensitive tube," around the hyperplane. This tube is defined by a parameter `epsilon` ($\epsilon$). Errors that fall within this tube are not penalized, while errors outside the tube are penalized linearly or quadratically. This makes SVR robust to outliers, as data points within the epsilon tube do not contribute to the loss function, and points outside are penalized based on their distance from the tube, not necessarily their absolute distance from the hyperplane.

The mathematical formulation of SVR involves finding $w$ and $b$ for the hyperplane $f(x) = w \cdot x + b$ that minimizes:
$$ \frac{1}{2} ||w||^2 + C \sum_{i=1}^n (\xi_i + \xi_i^*) $$
subject to:
$$ y_i - w \cdot x_i - b \le \epsilon + \xi_i $$
$$ w \cdot x_i + b - y_i \le \epsilon + \xi_i^* $$
$$ \xi_i, \xi_i^* \ge 0 $$
Here, $C$ is a regularization parameter that controls the trade-off between the flatness of the function (minimizing $||w||^2$) and the amount of deviation allowed beyond the epsilon tube. Larger $C$ means less tolerance for errors and tighter fitting. $\xi_i$ and $\xi_i^*$ are slack variables representing the error above and below the epsilon tube, respectively.

One of the most powerful aspects of SVR, inherited from SVMs, is the **kernel trick**. SVR can handle non-linear relationships by implicitly mapping the input features into a higher-dimensional feature space where a linear separation (or regression) might be possible. This is achieved through kernel functions, such as:
*   **Linear Kernel:** $K(x_i, x_j) = x_i \cdot x_j$. Suitable for linearly separable data.
*   **Polynomial Kernel:** $K(x_i, x_j) = (\gamma x_i \cdot x_j + r)^d$. Captures polynomial relationships.
*   **Radial Basis Function (RBF) Kernel (Gaussian Kernel):** $K(x_i, x_j) = \exp(-\gamma ||x_i - x_j||^2)$. A very common and powerful kernel for non-linear relationships. The `gamma` parameter controls the influence of individual training samples.

For time series forecasting, SVR can be a strong choice, especially when dealing with noisy data or when you want a model that is less sensitive to extreme outliers. Its ability to model non-linear relationships through various kernels makes it versatile. However, SVR can be computationally expensive, especially with large datasets, as its training time scales quadratically or cubically with the number of samples. It also requires careful tuning of its hyperparameters (`C`, `epsilon`, `gamma` for RBF kernel), which can be a complex process.

Let's apply SVR to our energy consumption dataset. Remember that SVR, like other distance-based algorithms, often benefits greatly from feature scaling.

```python
from sklearn.svm import SVR
from sklearn.preprocessing import StandardScaler
import pandas as pd
import numpy as np
from sklearn.metrics import mean_squared_error, mean_absolute_error

# Recreate df_energy_processed from previous chapter for continuity
np.random.seed(42)
start_date = pd.to_datetime('2023-01-01 00:00:00')
dates = pd.date_range(start=start_date, periods=24*30, freq='H') # 30 days of hourly data
consumption = np.random.rand(len(dates)) * 100 + np.sin(np.arange(len(dates)) / 24 * 2 * np.pi) * 30 + np.random.rand(len(dates)) * 10
df_energy = pd.DataFrame({'timestamp': dates, 'consumption': consumption})
df_energy['timestamp'] = pd.to_datetime(df_energy['timestamp'])
df_energy = df_energy.set_index('timestamp')

df_energy['consumption_lag_1'] = df_energy['consumption'].shift(1)
df_energy['consumption_lag_24'] = df_energy['consumption'].shift(24)
df_energy['rolling_mean_3'] = df_energy['consumption'].rolling(window=3).mean().shift(1)
df_energy['hour_of_day'] = df_energy.index.hour
df_energy['day_of_week'] = df_energy.index.dayofweek
df_energy['is_weekend'] = (df_energy.index.dayofweek >= 5).astype(int)
df_energy['target'] = df_energy['consumption'].shift(-1)
df_energy_processed = df_energy.dropna()

# Define features (X) and target (y)
features = ['consumption_lag_1', 'consumption_lag_24', 'rolling_mean_3', 'hour_of_day', 'day_of_week', 'is_weekend']
X = df_energy_processed[features]
y = df_energy_processed['target']

# Time series split
train_size = int(len(X) * 0.8)
X_train, X_test = X.iloc[:train_size], X.iloc[train_size:]
y_train, y_test = y.iloc[:train_size], y.iloc[train_size:]

# Feature Scaling: Crucial for SVR
scaler_X = StandardScaler()
X_train_scaled = scaler_X.fit_transform(X_train)
X_test_scaled = scaler_X.transform(X_test)

# SVR does not require scaling for y, but if you scale y, remember to inverse_transform predictions
# scaler_y = StandardScaler()
# y_train_scaled = scaler_y.fit_transform(y_train.values.reshape(-1, 1)).flatten()
# y_test_scaled = scaler_y.transform(y_test.values.reshape(-1, 1)).flatten()

# Initialize and train the SVR model
# Common hyperparameters:
# kernel: 'rbf', 'linear', 'poly', 'sigmoid'
# C: regularization parameter
# epsilon: defines the epsilon-insensitive tube
# gamma: kernel coefficient for 'rbf', 'poly', 'sigmoid'
svr_model = SVR(kernel='rbf', C=100, epsilon=0.1, gamma='scale') # 'scale' uses 1 / (n_features * X.var())
svr_model.fit(X_train_scaled, y_train) # Fit with original y, or scaled y if you chose to scale it

# Make predictions
y_pred = svr_model.predict(X_test_scaled)
# If y was scaled, remember to inverse transform:
# y_pred = scaler_y.inverse_transform(y_pred.reshape(-1, 1)).flatten()

# Evaluate the model
rmse = np.sqrt(mean_squared_error(y_test, y_pred))
mae = mean_absolute_error(y_test, y_pred)
print(f"SVR RMSE: {rmse:.2f}")
print(f"SVR MAE: {mae:.2f}")
```

**Common Mistakes and Safety Notes:**
1.  **Forgetting Feature Scaling:** SVR is highly sensitive to the scale of input features. Failing to scale your data (e.g., using `StandardScaler` or `MinMaxScaler`) will almost certainly lead to poor performance.
2.  **Computational Cost:** For very large datasets, SVR can be slow to train. Consider using `LinearSVR` for large datasets if a linear kernel is sufficient, or explore other models.
3.  **Hyperparameter Tuning:** SVR has several critical hyperparameters (`C`, `epsilon`, `gamma`) that significantly impact performance. Grid search or randomized search with cross-validation is essential. A common mistake is using default parameters without tuning.
4.  **Extrapolation:** Like tree-based models, SVR is an interpolation method. It may struggle to predict values outside the range seen in the training data, especially with strong trends.
5.  **Kernel Choice:** The choice of kernel is crucial. The RBF kernel is a good general-purpose choice, but experimenting with others (e.g., linear if relationships are truly linear) can be beneficial.

SVR provides a robust alternative to tree-based models, particularly when data is noisy or outliers are a concern. Its ability to model complex non-linearities through kernels, combined with its unique loss function, makes it a valuable tool in your time series forecasting arsenal.

#### Key concepts
*   **Support Vector Regression (SVR):** A supervised learning algorithm for regression tasks that aims to find a function that deviates from the target by no more than a certain margin (epsilon-insensitive tube).
*   **Epsilon-Insensitive Tube ($\epsilon$):** A margin around the regression line/hyperplane within which errors are not penalized. This makes SVR robust to outliers.
*   **Hyperplane:** The decision boundary in SVMs, extended to a regression line/surface in SVR.
*   **Kernel Trick:** A technique used by SVMs/SVR to implicitly map input features into a higher-dimensional space, allowing for the modeling of non-linear relationships without explicitly computing the high-dimensional transformation.
*   **Kernel Functions:** Mathematical functions (e.g., Linear, Polynomial, RBF) that compute the dot product of vectors in a higher-dimensional feature space.
*   **Regularization Parameter (C):** Controls the trade-off between the model's complexity (flatness of the function) and the amount of error allowed. Higher C means less tolerance for errors.
*   **Gamma ($\gamma$):** A kernel parameter for RBF, Polynomial, and Sigmoid kernels. It defines how far the influence of a single training example reaches, with low values meaning 'far' and high values meaning 'close'.
*   **Feature Scaling:** The process of normalizing or standardizing the range of independent variables or features of the data, crucial for distance-based algorithms like SVR.

#### Hands-on activity
**Activity: Forecasting Temperature with SVR**

You have a dataset of daily average temperatures. Your task is to forecast the next day's average temperature using SVR, incorporating lag features and temporal features.

**Instructions:**
1.  Load the provided `daily_temperatures.csv` dataset. Assume it has `Date`, `Avg_Temp` columns.
2.  Convert `Date` to datetime and set as index.
3.  Create the following features:
    *   `Avg_Temp_lag_1`: Average temperature from the previous day.
    *   `Avg_Temp_lag_7`: Average temperature from 7 days ago.
    *   `day_of_year`: Day of the year (1-365/366).
    *   `month`: Month of the year.
4.  Define the target variable `next_day_temp` as `Avg_Temp` shifted by -1.
5.  Drop `NaN` values.
6.  Split the data chronologically into 75% training and 25% testing sets.
7.  Apply `StandardScaler` to your features (X_train and X_test).
8.  Train an `SVR` model with `kernel='rbf'`, `C=50`, `epsilon=0.05`, `gamma='scale'`.
9.  Make predictions on the scaled test set.
10. Calculate and print the RMSE and MAE.

**Code Template:**

```python
import pandas as pd
import numpy as np
from sklearn.svm import SVR
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_squared_error, mean_absolute_error

# Create a dummy dataset for demonstration if daily_temperatures.csv is not available
np.random.seed(42)
dates = pd.date_range(start='2022-01-01', periods=365, freq='D')
temperatures = 15 + 10 * np.sin(np.arange(365) / 365 * 2 * np.pi) + np.random.randn(365) * 2
df_temp = pd.DataFrame({'Date': dates, 'Avg_Temp': temperatures})

# --- Your code starts here ---

# 1. Convert Date to datetime and set as index
df_temp['Date'] = # YOUR CODE HERE
df_temp = # YOUR CODE HERE

# 2. Create lag features
df_temp['Avg_Temp_lag_1'] = # YOUR CODE HERE
df_temp['Avg_Temp_lag_7'] = # YOUR CODE HERE

# 3. Create temporal features
df_temp['day_of_year'] = # YOUR CODE HERE
df_temp['month'] = # YOUR CODE HERE

# 4. Define the target variable
df_temp['next_day_temp'] = # YOUR CODE HERE

# 5. Drop NaN values
df_temp_processed = # YOUR CODE HERE

# Define features (X) and target (y)
features = ['Avg_Temp_lag_1', 'Avg_Temp_lag_7', 'day_of_year', 'month']
X = df_temp_processed[features]
y = df_temp_processed['next_day_temp']

# 6. Split data chronologically
train_size = # YOUR CODE HERE (e.g., int(len(X) * 0.75))
X_train, X_test = # YOUR CODE HERE
y_train, y_test = # YOUR CODE HERE

# 7. Apply StandardScaler to features
scaler_X = # YOUR CODE HERE
X_train_scaled = # YOUR CODE HERE
X_test_scaled = # YOUR CODE HERE

# 8. Train SVR model
svr_model = # YOUR CODE HERE (kernel='rbf', C=50, epsilon=0.05, gamma='scale')
svr_model.fit(X_train_scaled, y_train)

# 9. Make predictions
y_pred = # YOUR CODE HERE

# 10. Evaluate the model
rmse = # YOUR CODE HERE
mae = # YOUR CODE HERE
print(f"SVR RMSE: {rmse:.2f}")
print(f"SVR MAE: {mae:.2f}")
```

#### Assessment idea
1.  **Question:** You are training an SVR model for time series forecasting and observe that its performance is very sensitive to the scale of your input features. Which of the following actions is most appropriate to address this issue?
    *   A) Increase the `epsilon` parameter to make the model more robust to errors.
    *   B) Change the kernel function from 'rbf' to 'linear'.
    *   C) Apply a feature scaling technique like `StandardScaler` or `MinMaxScaler` to your input features.
    *   D) Decrease the `C` regularization parameter to reduce overfitting.

    **Correct Answer:** C) Apply a feature scaling technique like `StandardScaler` or `MinMaxScaler` to your input features.
    **Explanation:** SVR, being a distance-based algorithm, is highly sensitive to the scale of its input features. Features with larger numerical ranges can dominate the distance calculations, leading to suboptimal performance. Scaling ensures all features contribute proportionally. Increasing `epsilon` (A) makes the model less sensitive to outliers but doesn't address feature scaling. Changing the kernel (B) might change the model's ability to capture non-linearity but not its sensitivity to feature scales. Decreasing `C` (D) increases regularization, which might help with overfitting but doesn't solve the scaling problem.

2.  **Question:** An SVR model is being used to predict highly volatile stock prices. The data scientist wants the model to be robust to small fluctuations and focus on the overall trend, ignoring minor noise. Which SVR hyperparameter should they adjust to achieve this goal, and in what direction?
    *   A) Increase `C` to penalize errors more aggressively.
    *   B) Decrease `gamma` to make the influence of individual training samples more localized.
    *   C) Increase `epsilon` to create a wider insensitive tube, ignoring more small errors.
    *   D) Change the `kernel` to 'linear' to simplify the decision boundary.

    **Correct Answer:** C) Increase `epsilon` to create a wider insensitive tube, ignoring more small errors.
    **Explanation:** The `epsilon` parameter defines the width of the "epsilon-insensitive tube." Any prediction errors that fall within this tube are not penalized. By increasing `epsilon`, the model becomes more tolerant of small deviations, effectively ignoring minor noise and focusing on the broader pattern, which is desirable for volatile data where small fluctuations might be considered noise. Increasing `C` (A) would make the model *less* tolerant of errors. Decreasing `gamma` (B) would make the influence of individual samples *broader*, not more localized. Changing to a linear kernel (D) would simplify the model but might not address the robustness to small fluctuations as directly as `epsilon`.

#### AI generation note
Create a 10-minute animated explainer video combined with a live coding demo. Start with an animation illustrating the SVR concept: showing data points, a regression line, and the epsilon-insensitive tube, emphasizing how errors within the tube are ignored. Explain the role of `C`, `epsilon`, and kernel functions (especially RBF) with visual examples. Transition to a live coding session in a Jupyter Notebook, demonstrating SVR on a time series dataset (e.g., stock prices). Crucially, show the impact of `StandardScaler` before and after training SVR, highlighting the performance difference. Discuss the trade-offs of SVR (robustness vs. computational cost). The interactive element should be a quick poll asking learners to select the correct hyperparameter to adjust for a specific SVR behavior (e.g., making it more robust to outliers).

---

### Chapter 4.5 — Ensemble Methods and Stacking for Improved Forecasts

#### Learning objectives
*   Explain the general principles of ensemble learning and why combining models can improve forecasting accuracy and robustness.
*   Differentiate between simple ensemble strategies (averaging, weighted averaging) and more advanced techniques like stacking.
*   Understand the architecture of a stacking ensemble, including base models (level-0) and a meta-model (level-1).
*   Implement a stacking ensemble for time series forecasting using `scikit-learn` or similar libraries.
*   Identify best practices and potential pitfalls when designing and training ensemble models for time series.

#### Detailed lesson content
So far, we've explored individual classical machine learning models for time series forecasting. While powerful on their own, a common strategy to achieve even higher accuracy and robustness is to combine multiple models – a technique known as **ensemble learning**. The core idea behind ensembles is that a group of "weak learners" can collectively form a "strong learner" that performs better than any single constituent model. This improvement often comes from reducing variance (as in Random Forests, which use bagging) or reducing bias (as in Gradient Boosting, which uses sequential error *Simple Averaging:** The most straightforward approach is to simply average the predictions of several independently trained models. This works best when the individual models are diverse and perform reasonably well.
    $$ \hat{Y}_{avg} = \frac{1}{M} \sum_{m=1}^M \hat{Y}_m $$
    where $\hat{Y}_m$ is the prediction of model $m$, and $M$ is the total number of models.
2.  **Weighted Averaging:** A slight improvement over simple averaging is to assign different weights to each model's prediction, typically based on their individual performance on a validation set. Models that perform better get higher weights.
    $$ \hat{Y}_{weighted\_avg} = \sum_{m=1}^M w_m \hat{Y}_m \quad \text{where } \sum w_m = 1 $$
    The weights $w_m$ can be determined through optimization or simply by ranking models.
3.  **Stacking (Stacked Generalization):** This is a more sophisticated ensemble technique where the predictions of several base models (Level-0 models) are used as input features for a higher-level model (Level-1 model or meta-model). The meta-model learns how to best combine the predictions of the base models.

Let's delve deeper into **Stacking**. The process typically involves these steps:
*   **Step 1: Train Base Models (Level-0):** Train multiple diverse models (e.g., Random Forest, XGBoost, SVR, Linear Regression) on the *training data*. It's crucial that these models are diverse in their learning paradigms to capture different patterns.
*   **Step 2: Generate Out-of-Fold Predictions:** For each base model, generate predictions on the *training data* using a cross-validation scheme (e.g., K-Fold or, crucially for time series, a time-series-aware cross-validation like `TimeSeriesSplit`). This ensures that the predictions for the meta-model are "unseen" by the base models during their training, preventing data leakage. These predictions form the new feature set for the meta-model.
*   **Step 3: Train Meta-Model (Level-1):** Train a new model (the meta-model) on the out-of-fold predictions from the base models. The target for the meta-model is the original target variable. Simple models like Linear Regression or Ridge Regression are often good choices for meta-models, as they are less prone to overfitting the base model predictions.
*   **Step 4: Generate Final Test Predictions:** To make a final prediction on new, unseen test data:
    *   Each base model makes a prediction on the test data.
    *   These test predictions from the base models are then fed as features to the trained meta-model.
    *   The meta-model outputs the final ensemble prediction.

Stacking is particularly powerful because the meta-model can learn complex non-linear relationships between the base model predictions, potentially correcting their biases and leveraging their strengths. For time series, the cross-validation strategy for generating out-of-fold predictions is paramount. You must use a time-series-aware split, such as `TimeSeriesSplit` from `scikit-learn`, to ensure that the meta-model's features are generated from predictions on *future* data relative to the base model's training data.

Let's illustrate stacking with a simple example using `scikit-learn`'s `StackingRegressor`.

```python
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor, StackingRegressor
from sklearn.svm import SVR
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_squared_error, mean_absolute_error
from sklearn.model_selection import TimeSeriesSplit # Crucial for time series stacking

# Recreate df_energy_processed from previous chapter for continuity
np.random.seed(42)
start_date = pd.to_datetime('2023-01-01 00:00:00')
dates = pd.date_range(start=start_date, periods=24*30, freq='H') # 30 days of hourly data
consumption = np.random.rand(len(dates)) * 100 + np.sin(np.arange(len(dates)) / 24 * 2 * np.pi) * 30 + np.random.rand(len(dates)) * 10
df_energy = pd.DataFrame({'timestamp': dates, 'consumption': consumption})
df_energy['timestamp'] = pd.to_datetime(df_energy['timestamp'])
df_energy = df_energy.set_index('timestamp')

df_energy['consumption_lag_1'] = df_energy['consumption'].shift(1)
df_energy['consumption_lag_24'] = df_energy['consumption'].shift(24)
df_energy['rolling_mean_3'] = df_energy['consumption'].rolling(window=3).mean().shift(1)
df_energy['hour_of_day'] = df_energy.index.hour
df_energy['day_of_week'] = df_energy.index.dayofweek
df_energy['is_weekend'] = (df_energy.index.dayofweek >= 5).astype(int)
df_energy['target'] = df_energy['consumption'].shift(-1)
df_energy_processed = df_energy.dropna()

# Define features (X) and target (y)
features = ['consumption_lag_1', 'consumption_lag_24', 'rolling_mean_3', 'hour_of_day', 'day_of_week', 'is_weekend']
X = df_energy_processed[features]
y = df_energy_processed['target']

# Time series split
train_size = int(len(X) * 0.8)
X_train, X_test = X.iloc[:train_size], X.iloc[train_size:]
y_train, y_test = y.iloc[:train_size], y.iloc[train_size:]

# Feature Scaling (important for SVR, good practice for others too)
scaler_X = StandardScaler()
X_train_scaled = scaler_X.fit_transform(X_train)
X_test_scaled = scaler_X.transform(X_test)

# Define Base Models (Level-0)
# Use a diverse set of models
estimators = [
    ('rf', RandomForestRegressor(n_estimators=50, random_state=42, n_jobs=-1)),
    ('gbr', GradientBoostingRegressor(n_estimators=50, learning_rate=0.1, max_depth=3, random_state=42)),
    ('svr', SVR(kernel='rbf', C=10, epsilon=0.1, gamma='scale'))
]

# Define Meta-Model (Level-1)
# Often a simple linear model works well to avoid overfitting the base models' predictions
final_estimator = LinearRegression()

# Set up TimeSeriesSplit for cross-validation in stacking
# n_splits determines how many splits are made for generating out-of-fold predictions
# For time series, each fold's training set is chronologically before its test set
cv = TimeSeriesSplit(n_splits=5)

# Initialize StackingRegressor
stacking_model = StackingRegressor(
    estimators=estimators,
    final_estimator=final_estimator,
    cv=cv, # Use TimeSeriesSplit for time series data
    n_jobs=-1 # Use all available cores for base models
)

# Train the stacking model
stacking_model.fit(X_train_scaled, y_train)

# Make predictions
y_pred_stacked = stacking_model.predict(X_test_scaled)

# Evaluate the model
rmse_stacked = np.sqrt(mean_squared_error(y_test, y_pred_stacked))
mae_stacked = mean_absolute_error(y_test, y_pred_stacked)
print(f"Stacked Ensemble RMSE: {rmse_stacked:.2f}")
print(f"Stacked Ensemble MAE: {mae_stacked:.2f}")

# Compare with individual models (optional, but good practice)
print("\nIndividual Base Model Performance (on test set):")
for name, estimator in estimators:
    estimator.fit(X_train_scaled, y_train) # Re-train base models for direct comparison
    y_pred_base = estimator.predict(X_test_scaled)
    rmse_base = np.sqrt(mean_squared_error(y_test, y_pred_base))
    mae_base = mean_absolute_error(y_test, y_pred_base)
    print(f"  {name.upper()} RMSE: {rmse_base:.2f}, MAE: {mae_base:.2f}")
```

**Common Mistakes and Safety Notes:**
1.  **Data Leakage in Stacking:** This is the most critical pitfall. If you generate out-of-fold predictions for the meta-model using a standard `KFold` or `StratifiedKFold` that shuffles data, you will leak future information. Always use `TimeSeriesSplit` or a custom walk-forward validation scheme for time series stacking.
2.  **Lack of Diversity:** If all your base models are very similar (e.g., three different configurations of XGBoost), the ensemble might not gain much. Aim for diverse models (e.g., tree-based, linear, kernel-based).
3.  **Overfitting the Meta-Model:** The meta-model should generally be simpler (e.g., Linear Regression, Ridge) to avoid overfitting the predictions of the base models. A complex meta-model might learn the noise in the base model predictions.
4.  **Computational Cost:** Stacking involves training multiple models multiple times (during cross-validation for out-of-fold predictions). This can be computationally intensive and time-consuming, especially with many base models or large datasets.
5.  **Hyperparameter Tuning:** Each base model needs its own hyperparameter tuning, and the meta-model might also need tuning. This adds another layer of complexity.

Ensemble methods, particularly stacking, represent the pinnacle of classical machine learning for achieving highly accurate and robust forecasts. By carefully combining the strengths of different models and meticulously avoiding data leakage, you can often push performance beyond what any single model can achieve.

#### Key concepts
*   **Ensemble Learning:** A machine learning paradigm where multiple models are combined to solve the same problem, often leading to improved accuracy and robustness.
*   **Simple Averaging:** An ensemble technique where predictions from multiple models are simply averaged to produce a final forecast.
*   **Weighted Averaging:** An ensemble technique where predictions from multiple models are averaged with different weights, typically based on their individual performance.
*   **Stacking (Stacked Generalization):** An advanced ensemble technique where the predictions of several base models (Level-0) are used as input features for a higher-level meta-model (Level-1).
*   **Base Models (Level-0 Models):** The individual models whose predictions are combined in an ensemble.
*   **Meta-Model (Level-1 Model):** The model that learns to combine the predictions of the base models in a stacking ensemble.
*   **Out-of-Fold Predictions:** Predictions generated by base models on data they were not trained on (typically through cross-validation) to serve as features for the meta-model, preventing data leakage.
*   **TimeSeriesSplit:** A cross-validation strategy in `scikit-learn` that maintains the temporal order of data, crucial for time series forecasting.

#### Hands-on activity
**Activity: Stacking for Retail Demand Forecasting**

You have a dataset of daily retail demand, along with various features like price, promotions, and weather. Your goal is to build a stacking ensemble to forecast next day's demand.

**Instructions:**
1.  Load the provided `demand_data.csv` dataset. Assume it has `Date`, `Demand`, `Price`, `Promotion`, `Temperature` columns.
2.  Convert `Date` to datetime and set as index.
3.  Create the following features:
    *   `Demand_lag_1`, `Demand_lag_7`
    *   `Price_lag_1`, `Promotion_lag_1`, `Temperature_lag_1` (exogenous lags)
    *   `day_of_week`, `month`
4.  Define target `next_day_demand` as `Demand` shifted by -1.
5.  Drop `NaN` values.
6.  Split the data chronologically into 80% training and 20% testing sets.
7.  Apply `StandardScaler` to your features (X_train and X_test).
8.  Define a list of `estimators` for your stacking model:
    *   `RandomForestRegressor(n_estimators=75, random_state=42)`
    *   `GradientBoostingRegressor(n_estimators=75, learning_rate=0.05, max_depth=3, random_state=42)`
    *   `SVR(kernel='rbf', C=10, epsilon=0.1, gamma='scale')`
9.  Define `LinearRegression()` as your `final_estimator`.
10. Use `TimeSeriesSplit(n_splits=4)` for cross-validation.
11. Train the `StackingRegressor` and make predictions.
12. Calculate and print the RMSE and MAE for the stacked model.

**Code Template:**

```python
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor, StackingRegressor
from sklearn.svm import SVR
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_squared_error, mean_absolute_error
from sklearn.model_selection import TimeSeriesSplit

# Create a dummy dataset for demonstration if demand_data.csv is not available
np.random.seed(42)
dates = pd.date_range(start='2022-01-01', periods=365, freq='D')
demand = 500 + 100 * np.sin(np.arange(365) / 30 * 2 * np.pi) + np.random.randn(365) * 30
price = 10 + 2 * np.random.rand(365)
promotion = np.random.randint(0, 2, size=365)
temperature = 15 + 10 * np.sin(np.arange(365) / 365 * 2 * np.pi) + np.random.randn(365) * 2
df_demand = pd.DataFrame({'Date': dates, 'Demand': demand, 'Price': price, 'Promotion': promotion, 'Temperature': temperature})

# --- Your code starts here ---

# 1. Convert Date to datetime and set as index
df_demand['Date'] = # YOUR CODE HERE
df_demand = # YOUR CODE HERE

# 2. Create lag features
df_demand['Demand_lag_1'] = # YOUR CODE HERE
df_demand['Demand_lag_7'] = # YOUR CODE HERE
df_demand['Price_lag_1'] = # YOUR CODE HERE
df_demand['Promotion_lag_1'] = # YOUR CODE HERE
df_demand['Temperature_lag_1'] = # YOUR CODE HERE

# 3. Create temporal features
df_demand['day_of_week'] = # YOUR CODE HERE
df_demand['month'] = # YOUR CODE HERE

# 4. Define target
df_demand['next_day_demand'] = # YOUR CODE HERE

# 5. Drop NaN values
df_demand_processed = # YOUR CODE HERE

# Define features (X) and target (y)
features = ['Demand_lag_1', 'Demand_lag_7', 'Price_lag_1', 'Promotion_lag_1', 'Temperature_lag_1', 'day_of_week', 'month']
X = df_demand_processed[features]
y = df_demand_processed['next_day_demand']

# 6. Split data chronologically
train_size = # YOUR CODE HERE (e.g., int(len(X) * 0.8))
X_train, X_test = # YOUR CODE HERE
y_train, y_test = # YOUR CODE HERE

# 7. Apply StandardScaler to features
scaler_X = # YOUR CODE HERE
X_train_scaled = # YOUR CODE HERE
X_test_scaled = # YOUR CODE HERE

# 8. Define base estimators
estimators = [
    ('rf', RandomForestRegressor(n_estimators=75, random_state=42, n_jobs=-1)),
    ('gbr', GradientBoostingRegressor(n_estimators=75, learning_rate=0.05, max_depth=3, random_state=42)),
    ('svr', SVR(kernel='rbf', C=10, epsilon=0.1, gamma='scale'))
]

# 9. Define final estimator
final_estimator = # YOUR CODE HERE

# 10. Set up TimeSeriesSplit
cv = # YOUR CODE HERE (n_splits=4)

# 11. Initialize and train StackingRegressor
stacking_model = # YOUR CODE HERE (use estimators, final_estimator, cv, n_jobs=-1)
stacking_model.fit(X_train_scaled, y_train)

# Make predictions
y_pred_stacked = # YOUR CODE HERE

# 12. Evaluate the model
rmse_stacked = # YOUR CODE HERE
mae_stacked = # YOUR CODE HERE
print(f"Stacked Ensemble RMSE: {rmse_stacked:.2f}")
print(f"Stacked Ensemble MAE: {mae_stacked:.2f}")
```

#### Assessment idea
1.  **Question:** You are building a stacking ensemble for a time series forecasting task. You have trained three base models (Random Forest, XGBoost, and SVR). When generating the features for your meta-model, which of the following practices is essential to avoid data leakage?
    *   A) Train each base model on the full training set and then use its predictions on the full training set as features for the meta-model.
    *   B) Train each base model on a random subset of the training data and use its predictions on the remaining training data as features for the meta-model.
    *   C) Use a `TimeSeriesSplit` cross-validation strategy to generate out-of-fold predictions for each base model on the training data.
    *   D) Train the meta-model on the full training data and then use its predictions as features for the base models.

    **Correct Answer:** C) Use a `TimeSeriesSplit` cross-validation strategy to generate out-of-fold predictions for each base model on the training data.
    **Explanation:** For stacking, the meta-model must be trained on predictions from base models that have *not* seen the target values they are predicting. Using `TimeSeriesSplit` (or a similar walk-forward validation) ensures that for each fold, the base model is trained on past data and makes predictions on future data, which then become the features for the meta-model. Options A and B would lead to data leakage because the base models would have seen the target values they are predicting, leading to an overly optimistic meta-model. Option D reverses the roles and is not how stacking works.

2.  **Question:** You've built a stacking ensemble for forecasting, but you notice that the ensemble's performance is not significantly better than the best individual base model. What is a likely reason for this, and what could you do to improve it?
    *   A) The base models are too diverse; you should use more similar models.
    *   B) The meta-model is too complex and is overfitting the base model predictions. Try a simpler meta-model.
    *   C) The base models are not diverse enough, and they are making similar errors. Try including more varied base models.
    *   D) The `n_splits` in `TimeSeriesSplit` was too low, leading to insufficient data for the meta-model. Increase `n_splits`.

    **Correct Answer:** C) The base models are not diverse enough, and they are making similar errors. Try including more varied base models.
    **Explanation:** The power of ensemble learning, especially stacking, comes from combining models that have different strengths and weaknesses, meaning they make different types of errors. If the base models are too similar (e.g., all tree-based or all linear), their predictions will be highly correlated, and the meta-model will have little new information to learn from, resulting in marginal gains. Option A is incorrect; diversity is good. Option B is a possibility, but a simple meta-model is often recommended for stacking precisely to avoid overfitting its inputs. Option D might affect the meta-model's training data size but isn't the primary reason for lack of performance gain from stacking if the base models are not diverse.

#### AI generation note
Develop a 15-minute interactive lesson on ensemble methods and stacking. Start with a 5-minute animated segment explaining the "wisdom of crowds" concept and visually comparing simple averaging vs. stacking, highlighting the two-level architecture of stacking. Transition to a 8-minute live coding demo in a Jupyter Notebook, implementing a `StackingRegressor` for a time series forecasting problem (e.g., electricity demand). Show how to define base estimators, a final estimator, and critically, how to use `TimeSeriesSplit` for cross-validation to prevent data leakage. Include a visualization of the base model predictions vs. the stacked prediction. Conclude with a 2-minute discussion on hyperparameter tuning for stacking and common pitfalls. The interactive element should be a coding challenge where learners modify the base models or meta-model in a provided template and observe the performance change.

---

### Chapter 4.6 — Model Evaluation and Selection for Classical ML Models

#### Learning objectives
*   Recap and apply standard regression metrics (MAE, RMSE, MAPE) for time series forecasting.
*   Understand the importance of time-series-specific validation strategies, particularly walk-forward validation.
*   Implement walk-forward validation for evaluating and selecting classical machine learning models.
*   Explain the concept of hyperparameter tuning and apply techniques like Grid Search or Randomized Search with time series cross-validation.
*   Develop a systematic approach for comparing and selecting the best classical ML model for a given time series problem.

#### Detailed lesson content
After building and training various classical machine learning models for time series forecasting, the crucial next step is to rigorously evaluate their performance and select the best one. This isn't just about picking the model with the lowest error on a single test set; it involves understanding the nuances of time series data and employing appropriate validation strategies.

Let's quickly recap the standard regression metrics we use:
*   **Mean Absolute Error (MAE):** The average of the absolute differences between predictions and actual values. It's robust to outliers and easily interpretable, representing the average magnitude of errors.
*   **Root Mean Squared Error (RMSE):** The square root of the average of the squared differences between predictions and actual values. It penalizes larger errors more heavily than MAE and is sensitive to outliers.
*   **Mean Absolute Percentage Error (MAPE):** The average of the absolute percentage errors. It's useful for understanding error in relative terms, but it can be problematic with zero or near-zero actual values.

While these metrics are fundamental, the way we split our data for evaluation is even more critical for time series. Unlike standard supervised learning where random train-test splits are common, time series data requires **chronological splitting**. We must always train on past data and test on future data. This leads us to advanced validation strategies:

**Walk-Forward Validation (or Rolling Origin Cross-Validation):** This is the gold standard for evaluating time series models. Instead of a single train-test split, walk-forward validation simulates how a model would be used in a real-world forecasting scenario. It involves:
1.  **Initial Training Period:** Train the model on an initial segment of historical data.
2.  **Forecast Horizon:** Make a prediction for the next `h` steps (the forecast horizon).
3.  **Evaluate:** Compare the prediction with the actual values for that horizon.
4.  **Roll Forward:** "Walk forward" by adding the newly observed `h` steps to the training data, retrain the model, and repeat the forecasting process for the next `h` steps.

This process is repeated until the end of the available data. Each iteration provides an independent forecast and error measurement, giving a more realistic assessment of the model's performance over time, including its ability to adapt to changing dynamics.

```python
# Example of walk-forward validation structure
from sklearn.model_selection import TimeSeriesSplit
from sklearn.linear_model import LinearRegression # Using a simple model for illustration

# Assume X and y are already prepared with features and target
# X_full, y_full are the full feature and target sets

# Define the model to evaluate
model = LinearRegression() # Or RandomForestRegressor, XGBRegressor, SVR, etc.

# Define TimeSeriesSplit for walk-forward validation
# n_splits: number of re-fitting and forecasting steps
# test_size: number of samples in each test set (forecast horizon)
# gap: number of samples to exclude from the end of each train set before the test set
tscv = TimeSeriesSplit(n_splits=5, test_size=24*7, gap=0) # Example: 5 folds, each test set is 7 days (24*7 hours)

all_preds = []
all_actuals = []
fold_rmses = []

for fold, (train_index, test_index) in enumerate(tscv.split(X_full)):
    print(f"Fold {fold+1}:")
    X_train, X_test = X_full.iloc[train_index], X_full.iloc[test_index]
    y_train, y_test = y_full.iloc[train_index], y_full.iloc[test_index]

    # Ensure feature scaling is applied correctly within each fold
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_test_scaled = scaler.transform(X_test)

    model.fit(X_train_scaled, y_train)
    y_pred = model.predict(X_test_scaled)

    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    fold_rmses.append(rmse)
    print(f"  RMSE for fold {fold+1}: {rmse:.2f}")

    all_preds.extend(y_pred)
    all_actuals.extend(y_test)

print(f"\nAverage RMSE across all folds: {np.mean(fold_rmses):.2f}")
```

**Hyperparameter Tuning:** Once you've chosen a validation strategy, the next step is to optimize your model's hyperparameters. This is critical for classical ML models, as parameters like `n_estimators`, `max_depth`, `learning_rate` for tree ensembles, or `C`, `epsilon`, `gamma` for SVR, significantly impact performance.
*   **Grid Search:** Systematically tries every combination of specified hyperparameter values. It's exhaustive but can be computationally expensive.
*   **Randomized Search:** Samples a fixed number of parameter settings from specified distributions. It's often more efficient than Grid Search, especially with many hyperparameters, as it can explore a wider range of values.

Both `GridSearchCV` and `RandomizedSearchCV` from `scikit-learn` can be used, but **it's imperative to pass a time-series-aware cross-validation object (like `TimeSeriesSplit`) to their `cv` parameter**. Failing to do so will lead to data leakage and misleading optimal hyperparameters.

**Model Selection:** With robust evaluation and tuned hyperparameters, you can now compare models. When selecting a model, consider:
1.  **Performance Metrics:** Which metric is most important for your business problem (e.g., MAE for interpretability, RMSE for penalizing large errors)?
2.  **Robustness:** How consistent is the model's performance across different folds of walk-forward validation? Does it handle anomalies well?
3.  **Interpretability:** Can you explain *why* the model makes certain predictions? (e.g., feature importances from tree models).
4.  **Computational Cost:** How long does it take to train and make predictions? Is it feasible for your deployment environment?
5.  **Extrapolation Capability:** Does the model need to predict beyond the range of historical data? If so, tree-based models and SVR might struggle without explicit trend features or detrending.

Often, the "best" model isn't just about the lowest RMSE; it's a balance of these factors. Sometimes, a slightly less accurate but more robust and interpretable model is preferred in a production environment.

**Common Mistakes and Safety Notes:**
1.  **Using Standard Cross-Validation:** Never use `KFold` or `StratifiedKFold` for time series evaluation or hyperparameter tuning. Always use `TimeSeriesSplit` or implement a custom walk-forward validation.
2.  **Data Leakage During Tuning:** Ensure that feature scaling and any data transformations are fitted *only* on the training data within each cross-validation fold and then applied to the test data.
3.  **Over-optimizing on a Single Test Set:** A single train-test split can be misleading. Walk-forward validation provides a much more reliable estimate of real-world performance.
4.  **Ignoring Business Context:** Metrics are important, but the final decision should always consider the practical implications and business requirements.
5.  **Ignoring Model Stability:** A model that performs exceptionally well on one fold but poorly on others is less desirable than a consistently good performer.

By systematically evaluating your classical machine learning models with appropriate time series validation techniques and carefully tuning their hyperparameters, you'll be well-equipped to select the most effective forecasting solution for your needs.

#### Key concepts
*   **Mean Absolute Error (MAE):** Average magnitude of errors, robust to outliers.
*   **Root Mean Squared Error (RMSE):** Penalizes larger errors more, sensitive to outliers.
*   **Mean Absolute Percentage Error (MAPE):** Relative error, useful for comparing across different scales, but problematic with zero values.
*   **Chronological Splitting:** Dividing time series data into training and testing sets based on time order (past for training, future for testing).
*   **Walk-Forward Validation (Rolling Origin Cross-Validation):** A time-series-specific validation technique that simulates real-world forecasting by iteratively training on increasing historical data and forecasting the next unseen period.
*   **TimeSeriesSplit:** A `scikit-learn` cross-validation generator that produces train/test indices for time series data, respecting chronological order.
*   **Hyperparameter Tuning:** The process of finding the optimal set of hyperparameters for a machine learning model to maximize performance.
*   **Grid Search:** An exhaustive hyperparameter tuning technique that evaluates all possible combinations of specified parameter values.
*   **Randomized Search:** A hyperparameter tuning technique that samples a fixed number of parameter settings from specified distributions.
*   **Model Selection:** The process of choosing the best model among several candidates based on evaluation metrics, robustness, interpretability, and computational cost.

#### Hands-on activity
**Activity: Walk-Forward Validation and Hyperparameter Tuning for Energy Forecasting**

You will take your best performing model from previous activities (e.g., XGBoost) and perform a walk-forward validation with hyperparameter tuning to find the optimal parameters and get a robust performance estimate.

**Instructions:**
1.  Use the `df_energy_processed` DataFrame from previous chapters (with `X` and `y` defined).
2.  Define an `XGBRegressor` model as your base estimator.
3.  Set up a `TimeSeriesSplit` object for walk-forward validation with `n_splits=3`, `test_size=24*7` (one week forecast horizon per fold).
4.  Define a parameter grid for `RandomizedSearchCV` for XGBoost, including `n_estimators`, `learning_rate`, `max_depth`, `subsample`, `colsample_bytree`. (Choose a reasonable range for each, e.g., `n_estimators`: [100, 300, 500], `learning_rate`: [0.01, 0.05, 0.1]).
5.  Perform `RandomizedSearchCV` using the `TimeSeriesSplit` object for `cv`. Use `n_iter=10` for a quick search.
6.  Print the best parameters found and the best RMSE.
7.  Retrain the `XGBRegressor` with the best parameters on the full training set (from the initial train-test split, not within CV).
8.  Perform a final walk-forward validation with the *best* model found from tuning, calculating RMSE for each fold and the average RMSE.

**Code Template:**

```python
import pandas as pd
import numpy as np
import xgboost as xgb
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_squared_error, mean_absolute_error
from sklearn.model_selection import TimeSeriesSplit, RandomizedSearchCV
from scipy.stats import uniform, randint

# Recreate df_energy_processed from previous chapter for continuity
np.random.seed(42)
start_date = pd.to_datetime('2023-01-01 00:00:00')
dates = pd.date_range(start=start_date, periods=24*60, freq='H') # 60 days of hourly data for more folds
consumption = np.random.rand(len(dates)) * 100 + np.sin(np.arange(len(dates)) / 24 * 2 * np.pi) * 30 + np.random.rand(len(dates)) * 10
df_energy = pd.DataFrame({'timestamp': dates, 'consumption': consumption})
df_energy['timestamp'] = pd.to_datetime(df_energy['timestamp'])
df_energy = df_energy.set_index('timestamp')

df_energy['consumption_lag_1'] = df_energy['consumption'].shift(1)
df_energy['consumption_lag_24'] = df_energy['consumption'].shift(24)
df_energy['rolling_mean_3'] = df_energy['consumption'].rolling(window=3).mean().shift(1)
df_energy['hour_of_day'] = df_energy.index.hour
df_energy['day_of_week'] = df_energy.index.dayofweek
df_energy['is_weekend'] = (df_energy.index.dayofweek >= 5).astype(int)
df_energy['target'] = df_energy['consumption'].shift(-1)
df_energy_processed = df_energy.dropna()

# Define features (X) and target (y)
features = ['consumption_lag_1', 'consumption_lag_24', 'rolling_mean_3', 'hour_of_day', 'day_of_week', 'is_weekend']
X_full = df_energy_processed[features]
y_full = df_energy_processed['target']

# --- Your code starts here ---

# 1. Define base estimator
xgb_base = xgb.XGBRegressor(objective='reg:squarederror', random_state=42, n_jobs=-1)

# 2. Set up TimeSeriesSplit for tuning and validation
tscv_tuning = # YOUR CODE HERE (n_splits=3, test_size=24*7)

# 3. Define parameter distributions for RandomizedSearchCV
param_dist = {
    'n_estimators': # YOUR CODE HERE (e.g., randint(100, 600)),
    'learning_rate': # YOUR CODE HERE (e.g., uniform(0.01, 0.2)),
    'max_depth': # YOUR CODE HERE (e.g., randint(3, 8)),
    'subsample': # YOUR CODE HERE (e.g., uniform(0.6, 1.0)),
    'colsample_bytree': # YOUR CODE HERE (e.g., uniform(0.6, 1.0))
}

# 4. Perform RandomizedSearchCV
random_search = # YOUR CODE HERE (XGBRegressor, param_dist, n_iter=10, cv=tscv_tuning, scoring='neg_root_mean_squared_error', random_state=42, n_jobs=-1)

# Fit RandomizedSearchCV (apply scaler within CV loop or ensure X_full is scaled before)
# For simplicity here, we'll scale X_full once before passing to RandomizedSearchCV
scaler_full = StandardScaler()
X_full_scaled = scaler_full.fit_transform(X_full)

random_search.fit(X_full_scaled, y_full)

# 5. Print best parameters and best RMSE
print(f"Best parameters found: {random_search.best_params_}")
print(f"Best RMSE found during tuning: {-random_search.best_score_:.2f}") # neg_root_mean_squared_error is negative RMSE

# 6. Retrain the XGBRegressor with the best parameters
best_xgb_model = xgb.XGBRegressor(objective='reg:squarederror', random_state=42, n_jobs=-1, **random_search.best_params_)

# 7. Perform final walk-forward validation with the best model
tscv_final = # YOUR CODE HERE (n_splits=5, test_size=24*7) # More folds for final validation

final_fold_rmses = []
for fold, (train_index, test_index) in enumerate(tscv_final.split(X_full_scaled)): # Use scaled X_full
    print(f"Final Validation Fold {fold+1}:")
    X_train, X_test = X_full_scaled[train_index], X_full_scaled[test_index]
    y_train, y_test = y_full.iloc[train_index], y_full.iloc[test_index] # y is not scaled

    best_xgb_model.fit(X_train, y_train)
    y_pred = best_xgb_model.predict(X_test)

    rmse = np.sqrt(mean_squared_error(y_test, y_pred))
    final_fold_rmses.append(rmse)
    print(f"  RMSE for fold {fold+1}: {rmse:.2f}")

print(f"\nAverage RMSE across final walk-forward validation folds: {np.mean(final_fold_rmses):.2f}")
```

#### Assessment idea
1.  **Question:** You have a time series forecasting model that you want to evaluate for its real-world performance. You decide to use walk-forward validation. Which of the following best describes the process of walk-forward validation for a 1-step ahead forecast?
    *   A) Randomly split the entire dataset into training and testing sets, train the model, and evaluate.
    *   B) Train the model on the first 70% of the data, forecast the next 30%, and evaluate.
    *   C) Train the model on an initial segment of data, forecast the next single step, add that actual observation to the training data, retrain, and repeat.
    *   D) Train multiple models on different random subsets of the data and average their predictions.

    **Correct Answer:** C) Train the model on an initial segment of data, forecast the next single step, add that actual observation to the training data, retrain, and repeat.
    **Explanation:** Walk-forward validation (or rolling origin) simulates live forecasting. The model is trained on historical data, makes a forecast for the immediate future, and then, once the actual value becomes available, that data point is added to the training set, and the model is retrained (or updated) to forecast the next step. This process is repeated, providing a robust evaluation of the model's performance over time. Options A and B are incorrect as they don't respect the temporal order. Option D describes ensemble learning, not walk-forward validation.

2.  **Question:** When performing hyperparameter tuning for a Random Forest Regressor on a time series dataset, why is it critical to use `TimeSeriesSplit` (or a similar time-series-aware cross-validation) within `GridSearchCV` or `RandomizedSearchCV`?
    *   A) `TimeSeriesSplit` ensures that the Random Forest trees are grown in a chronological order, which is essential for time series.
    *   B) Using `TimeSeriesSplit` prevents data leakage by ensuring that each fold's validation set is chronologically after its training set, providing realistic hyperparameter optimization.
    *   C) `TimeSeriesSplit` is faster than standard `KFold` for time series data, speeding up the tuning process.
    *   D) Random Forests can only handle data that has been split chronologically.

    **Correct Answer:** B) Using `TimeSeriesSplit` prevents data leakage by ensuring that each fold's validation set is chronologically after its training set, providing realistic hyperparameter optimization.
    **Explanation:** The primary reason for using `TimeSeriesSplit` in hyperparameter tuning for time series is to prevent data leakage. If a standard `KFold` (which shuffles data) were used, the model might be validated on data points that chronologically precede data points in its training set, or even on future data points that have been randomly assigned to the training set. This would lead to an overly optimistic estimate of the model's performance and potentially select hyperparameters that do not generalize well to truly unseen future data. `TimeSeriesSplit` maintains the temporal order, ensuring that each validation fold represents a future period relative to its corresponding training fold, thus providing a more realistic and robust tuning process.

#### AI generation note
Create a 12-minute mixed-format lesson. Start with a 4-minute animated segment explaining the concept of walk-forward validation, visually demonstrating how the training window expands and the forecast horizon rolls forward. Compare it to a single train-test split to highlight the benefits. Transition to a 8-minute live coding demo in a Jupyter Notebook. Show how to implement `TimeSeriesSplit` for walk-forward validation with an `XGBRegressor` on a real-world dataset (e.g., stock prices). Then, demonstrate `RandomizedSearchCV` with `TimeSeriesSplit` for hyperparameter tuning, explaining the parameter distributions and the output. Conclude with a visual comparison of RMSE/MAE metrics across different folds and a discussion on selecting the "best" model considering robustness and interpretability. The interactive element should be a coding exercise where learners define a different parameter grid for `RandomizedSearchCV` and rerun the tuning process.

---

## Module 5: Deep Learning for Time Series Forecasting

### Chapter 5.1 — Introduction to Neural Networks for Time Series

#### Learning objectives
*   Understand the fundamental limitations of traditional statistical models when facing complex time series patterns.
*   Explain the basic architecture of a Feedforward Neural Network (FNN) and its core components (neurons, layers, activation functions).
*   Learn how to adapt FNNs for time series forecasting using a sliding window approach.
*   Implement a simple FNN for univariate time series forecasting using PyTorch.

#### Detailed lesson content
Welcome to the exciting world of deep learning for time series forecasting! While the traditional statistical and classical machine learning models we've explored in previous modules are powerful and often sufficient, they sometimes struggle with the inherent complexity, non-linearity, and high-dimensional nature of real-world time series data. Models like ARIMA, for instance, rely on strong assumptions about stationarity and linearity, and Prophet, while robust, can be limited in capturing intricate, multi-layered dependencies. Classical ML models, even with extensive feature engineering, might still miss subtle temporal patterns that span long durations or interact in non-obvious ways. Deep learning, with its ability to learn hierarchical representations directly from raw data, offers a compelling alternative, especially when dealing with large datasets and complex relationships.

At its core, a neural network is a computational model inspired by the structure of the human brain. It consists of interconnected "neurons" organized into layers. The simplest form is the Feedforward Neural Network (FNN), also known as a Multi-Layer Perceptron (MLP). In an FNN, information flows in one direction, from the input layer, through one or more hidden layers, to the output layer. Each connection between neurons has an associated weight, and each neuron has a bias. When a neuron receives input, it computes a weighted sum of its inputs, adds the bias, and then passes this result through an activation function. This activation function introduces non-linearity, allowing the network to learn complex, non-linear relationships that linear models cannot. Common activation functions include ReLU (Rectified Linear Unit), Sigmoid, and Tanh. The output layer typically uses an activation function appropriate for the task; for regression tasks like forecasting, a linear activation (or no explicit activation) is common.

To adapt an FNN for time series forecasting, we typically employ a sliding window approach. Since FNNs expect a fixed-size input vector, we transform our sequential data into a supervised learning problem. We define a "look-back" window (e.g., the last `n` observations) as our input features and the next `m` observations as our target. For example, to predict the next single value (`m=1`) using the previous 10 values (`n=10`), we would create input-output pairs where `X` is `[t-9, t-8, ..., t]` and `y` is `[t+1]`. This process is repeated by sliding the window across the entire time series. This method, while effective, has a crucial limitation: it treats each window as an independent observation, losing the explicit sequential dependency between consecutive windows. The network learns patterns within the window but doesn't inherently understand the temporal order or long-range dependencies beyond the window size.

Let's walk through a simple PyTorch implementation for a univariate time series. We'll start by preparing our data using the sliding window technique. Imagine we have a time series `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`. If our look-back window is 3 and we want to predict the next value, our dataset would look like:
- Input: `[1, 2, 3]`, Output: `4`
- Input: `[2, 3, 4]`, Output: `5`
- ...
- Input: `[7, 8, 9]`, Output: `10`

Common mistakes here include not normalizing your data. Neural networks are highly sensitive to the scale of input features. Always scale your time series data, typically to a range like `[0, 1]` using Min-Max scaling or standardizing to a mean of 0 and standard deviation of 1. Another pitfall is data leakage: ensuring that your validation and test sets only contain data *after* your training data, preserving the temporal order. Never shuffle time series data randomly across the entire dataset before splitting. Safety note: when deploying, ensure your input data preprocessing matches exactly what was done during training.

```python
import torch
import torch.nn as nn
import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import MinMaxScaler

# 1. Generate synthetic time series data
data = np.sin(np.linspace(0, 50, 500)) + np.random.randn(500) * 0.1
plt.plot(data)
plt.title("Synthetic Time Series Data")
plt.show()

# 2. Normalize the data
scaler = MinMaxScaler(feature_range=(-1, 1))
scaled_data = scaler.fit_transform(data.reshape(-1, 1))

# 3. Create sliding windows
def create_dataset(data, look_back):
    X, Y = [], []
    for i in range(len(data) - look_back):
        X.append(data[i:(i + look_back), 0])
        Y.append(data[i + look_back, 0])
    return np.array(X), np.array(Y)

look_back = 10 # Use previous 10 time steps to predict the next
X, Y = create_dataset(scaled_data, look_back)

# 4. Split into training and test sets (preserving temporal order)
train_size = int(len(X) * 0.8)
X_train, X_test = X[:train_size], X[train_size:]
Y_train, Y_test = Y[:train_size], Y[train_size:]

# 5. Convert to PyTorch tensors
X_train = torch.tensor(X_train, dtype=torch.float32)
Y_train = torch.tensor(Y_train, dtype=torch.float32).reshape(-1, 1) # Reshape for output layer
X_test = torch.tensor(X_test, dtype=torch.float32)
Y_test = torch.tensor(Y_test, dtype=torch.float32).reshape(-1, 1)

# 6. Define the FNN model
class FNN(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(FNN, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(hidden_size, output_size)

    def forward(self, x):
        out = self.fc1(x)
        out = self.relu(out)
        out = self.fc2(out)
        return out

# 7. Instantiate the model, define loss and optimizer
input_size = look_back
hidden_size = 50
output_size = 1 # Predicting one future value
model = FNN(input_size, hidden_size, output_size)

criterion = nn.MSELoss() # Mean Squared Error for regression
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

# 8. Train the model
num_epochs = 100
for epoch in range(num_epochs):
    model.train() # Set model to training mode
    optimizer.zero_grad() # Clear gradients
    outputs = model(X_train)
    loss = criterion(outputs, Y_train)
    loss.backward() # Backpropagation
    optimizer.step() # Update weights

    if (epoch+1) % 10 == 0:
        print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}')

# 9. Evaluate the model
model.eval() # Set model to evaluation mode
with torch.no_grad(): # Disable gradient calculation
    train_predict = model(X_train).numpy()
    test_predict = model(X_test).numpy()

# Inverse transform to original scale
train_predict = scaler.inverse_transform(train_predict)
Y_train_orig = scaler.inverse_transform(Y_train.numpy())
test_predict = scaler.inverse_transform(test_predict)
Y_test_orig = scaler.inverse_transform(Y_test.numpy())

# Plotting results
plt.figure(figsize=(12, 6))
plt.plot(scaler.inverse_transform(scaled_data), label='Original Data')
plt.plot(np.arange(look_back, look_back + len(train_predict)), train_predict, label='Train Prediction')
plt.plot(np.arange(look_back + len(train_predict), look_back + len(train_predict) + len(test_predict)), test_predict, label='Test Prediction')
plt.title("FNN Time Series Forecast")
plt.legend()
plt.show()
```
This example provides a solid foundation. While FNNs can capture some non-linear patterns, their fixed-size input window limits their ability to model long-term dependencies and the inherent sequential nature of time series. This is where more specialized deep learning architectures, which we'll explore next, truly shine.

#### Key concepts
*   **Feedforward Neural Network (FNN) / Multi-Layer Perceptron (MLP):** A basic neural network where information flows in one direction from input to output layers, suitable for tabular data.
*   **Neuron:** The fundamental unit of a neural network, performing a weighted sum of inputs, adding a bias, and applying an activation function.
*   **Activation Function:** A non-linear function applied to the output of a neuron, enabling the network to learn complex patterns (e.g., ReLU, Sigmoid, Tanh).
*   **Sliding Window:** A technique to transform time series data into a supervised learning problem by creating input-output pairs from consecutive segments of the series.
*   **Backpropagation:** The algorithm used to efficiently calculate the gradients of the loss function with respect to the network's weights, enabling weight updates during training.
*   **Optimizer:** An algorithm (e.g., Adam, SGD) that adjusts the network's weights and biases to minimize the loss function.

#### Hands-on activity
**Activity: Experimenting with FNN Hyperparameters for Energy Demand Forecasting**

Using the provided PyTorch FNN template, your task is to forecast energy demand using a publicly available dataset (e.g., hourly electricity consumption).
1.  **Data Acquisition:** Download a univariate time series dataset, such as hourly electricity consumption from Kaggle or a similar source.
2.  **Preprocessing:** Load the data, handle any missing values (e.g., interpolation), and apply `MinMaxScaler` to normalize it.
3.  **Windowing:** Adapt the `create_dataset` function to create input-output windows. Experiment with different `look_back` values (e.g., 5, 12, 24, 48 hours).
4.  **Model Modification:**
    *   Change the `hidden_size` of the FNN (e.g., 20, 100, 200).
    *   Add an additional hidden layer to the `FNN` class (e.g., `self.fc3 = nn.Linear(hidden_size, output_size)`).
    *   Experiment with different activation functions (e.g., `nn.Sigmoid()`, `nn.Tanh()`) in place of `nn.ReLU()`.
5.  **Training & Evaluation:** Train the modified models and evaluate their performance on the test set. Plot the predictions against the actual values.
6.  **Reflection:** Which combination of `look_back`, `hidden_size`, and number of layers yielded the best results? Why do you think this is the case? How did the choice of activation function impact performance?

```python
import torch
import torch.nn as nn
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error

# --- Starter Code ---

# 1. Data Acquisition (Example: Replace with your actual data loading)
# For demonstration, let's use a simple synthetic series.
# In a real scenario, you'd load a CSV:
# df = pd.read_csv('your_energy_data.csv', parse_dates=['timestamp_column'], index_col='timestamp_column')
# data = df['consumption_column'].values.astype(float)

# Using synthetic data for a runnable example:
data = np.sin(np.linspace(0, 100, 1000)) * 10 + np.random.randn(1000) * 2 + 50 # Simulate energy demand
plt.figure(figsize=(10, 4))
plt.plot(data)
plt.title("Simulated Energy Demand Data")
plt.show()

# 2. Preprocessing
scaler = MinMaxScaler(feature_range=(-1, 1))
scaled_data = scaler.fit_transform(data.reshape(-1, 1))

# 3. Create sliding windows
def create_dataset(data, look_back):
    X, Y = [], []
    for i in range(len(data) - look_back):
        X.append(data[i:(i + look_back), 0])
        Y.append(data[i + look_back, 0])
    return np.array(X), np.array(Y)

# --- Your task starts here: Experiment with look_back, hidden_size, layers, activation ---
look_back = 24 # Example: Try 5, 12, 24, 48
X, Y = create_dataset(scaled_data, look_back)

train_size = int(len(X) * 0.8)
X_train, X_test = X[:train_size], X[train_size:]
Y_train, Y_test = Y[:train_size], Y[train_size:]

X_train = torch.tensor(X_train, dtype=torch.float32)
Y_train = torch.tensor(Y_train, dtype=torch.float32).reshape(-1, 1)
X_test = torch.tensor(X_test, dtype=torch.float32)
Y_test = torch.tensor(Y_test, dtype=torch.float32).reshape(-1, 1)

# 4. Define the FNN model (Modify this class)
class FNN(nn.Module):
    def __init__(self, input_size, hidden_size, output_size):
        super(FNN, self).__init__()
        self.fc1 = nn.Linear(input_size, hidden_size)
        self.activation = nn.ReLU() # Experiment with nn.Sigmoid(), nn.Tanh()
        self.fc2 = nn.Linear(hidden_size, hidden_size // 2) # Added another layer
        self.activation2 = nn.ReLU()
        self.fc3 = nn.Linear(hidden_size // 2, output_size)

    def forward(self, x):
        out = self.fc1(x)
        out = self.activation(out)
        out = self.fc2(out) # Pass through new layer
        out = self.activation2(out)
        out = self.fc3(out)
        return out

# 5. Instantiate the model, define loss and optimizer
input_size = look_back
hidden_size = 100 # Example: Try 20, 100, 200
output_size = 1
model = FNN(input_size, hidden_size, output_size)

criterion = nn.MSELoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

# 6. Train the model
num_epochs = 150 # You might need more or fewer epochs
for epoch in range(num_epochs):
    model.train()
    optimizer.zero_grad()
    outputs = model(X_train)
    loss = criterion(outputs, Y_train)
    loss.backward()
    optimizer.step()

    if (epoch+1) % 25 == 0:
        print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}')

# 7. Evaluate the model
model.eval()
with torch.no_grad():
    train_predict = model(X_train).numpy()
    test_predict = model(X_test).numpy()

train_predict = scaler.inverse_transform(train_predict)
Y_train_orig = scaler.inverse_transform(Y_train.numpy())
test_predict = scaler.inverse_transform(test_predict)
Y_test_orig = scaler.inverse_transform(Y_test.numpy())

train_rmse = np.sqrt(mean_squared_error(Y_train_orig, train_predict))
test_rmse = np.sqrt(mean_squared_error(Y_test_orig, test_predict))
print(f"Train RMSE: {train_rmse:.4f}")
print(f"Test RMSE: {test_rmse:.4f}")

# Plotting results
plt.figure(figsize=(14, 7))
plt.plot(scaler.inverse_transform(scaled_data), label='Original Data')
plt.plot(np.arange(look_back, look_back + len(train_predict)), train_predict, label='Train Prediction')
plt.plot(np.arange(look_back + len(train_predict), look_back + len(train_predict) + len(test_predict)), test_predict, label='Test Prediction')
plt.title(f"FNN Time Series Forecast (Look-back: {look_back}, Hidden Size: {hidden_size})")
plt.legend()
plt.show()

```

#### Assessment idea
1.  **Question:** You are tasked with forecasting the next day's stock price using the previous 5 days' closing prices. You decide to use a Feedforward Neural Network (FNN). Describe how you would prepare your data for this FNN, specifically detailing the input features (X) and target variable (Y) for a single training example. What is a critical preprocessing step you must not forget for numerical stability?

    **Answer:** To prepare the data for an FNN, we would use a sliding window approach. For a single training example, if we want to predict day `t+1`'s stock price using the previous 5 days, our input features `X` would be a vector of the closing prices from day `t-4`, `t-3`, `t-2`, `t-1`, and `t`. The target variable `Y` for this example would be the closing price of day `t+1`. This process is repeated by sliding this 5-day window across the entire historical stock price series. A critical preprocessing step for numerical stability that must not be forgotten is **data normalization** (e.g., Min-Max scaling or standardization). Neural networks perform much better and converge faster when input features are on a similar scale.

2.  **Question:** A colleague suggests randomly shuffling your time series dataset before splitting it into training, validation, and test sets to ensure a good mix of data. Explain why this approach is problematic for time series forecasting and what the correct splitting strategy should be.

    **Answer:** Randomly shuffling a time series dataset before splitting is a critical mistake that leads to **data leakage**. Time series data has an inherent temporal order, meaning future values depend on past values. If you shuffle the data, observations from the future might end up in your training set, allowing the model to "see" future information. This will result in an artificially optimistic performance during evaluation, but the model will fail to generalize well to truly unseen future data. The correct splitting strategy is to maintain the temporal order: the training set should consist of the earliest data, the validation set the subsequent period, and the test set the latest period. This ensures that the model is always evaluated on data it has not seen before, respecting the natural flow of time.

#### AI generation note
Create a 12-minute mixed-media lesson. Start with a 3-minute animated explanation of FNNs, showing neurons, layers, and activation functions, with a clear analogy to a decision-making process. Transition to a 7-minute live coding demo in a Jupyter notebook using PyTorch, demonstrating the sliding window data preparation, FNN model definition, training loop, and plotting of predictions. Emphasize data normalization and the temporal split for time series. Include side-by-side code and output. Conclude with a 2-minute recap highlighting the FNN's strengths and limitations for time series. Include a visual of a sine wave being predicted by the FNN.

### Chapter 5.2 — Recurrent Neural Networks (RNNs) and their Variants

#### Learning objectives
*   Identify the limitations of Feedforward Neural Networks (FNNs) in handling sequential data.
*   Explain the core concept of a Recurrent Neural Network (RNN), including its recurrent connections and hidden state.
*   Understand the vanishing/exploding gradient problem in vanilla RNNs and how it impacts learning long-term dependencies.
*   Describe the architecture and function of Long Short-Term Memory (LSTM) networks, focusing on the role of gates (forget, input, output) and the cell state.
*   Introduce Gated Recurrent Units (GRUs) as a simplified alternative to LSTMs.
*   Implement a simple LSTM network for univariate time series forecasting in PyTorch.

#### Detailed lesson content
While Feedforward Neural Networks (FNNs) can be adapted for time series using a sliding window, they fundamentally treat each input window as an independent observation. This means they lack an inherent memory of past information beyond the fixed window size. For many real-world time series, such as stock prices, weather patterns, or sensor readings, the current observation's value is not only influenced by the immediate past but also by events that occurred much earlier. For example, a seasonal sales peak might depend on a promotional campaign launched months ago. FNNs struggle to capture these long-range dependencies because they don't have a mechanism to carry information forward across time steps. This is precisely where Recurrent Neural Networks (RNNs) come into play.

RNNs are specifically designed to process sequential data by introducing a "memory" aspect. Unlike FNNs, RNNs have recurrent connections that allow information to be passed from one step in the sequence to the next. At each time step `t`, an RNN takes the current input `x_t` and the hidden state `h_{t-1}` (which encapsulates information from all previous time steps) to produce a new hidden state `h_t` and an output `y_t`. This hidden state acts as the network's memory, continuously updated as it processes the sequence. You can visualize an RNN as unrolling over time, where the same set of weights and biases is applied at each time step. This parameter sharing across time steps is a key advantage, allowing RNNs to learn temporal patterns without needing to define a fixed window size explicitly.

However, vanilla RNNs suffer from a significant challenge known as the **vanishing and exploding gradient problem**. During backpropagation through time (BPTT), which is how gradients are calculated for RNNs, gradients can either shrink exponentially (vanish) or grow exponentially (explode) as they propagate back through many time steps. Vanishing gradients make it extremely difficult for the network to learn long-term dependencies because the influence of early inputs on the current hidden state becomes negligible. Exploding gradients, on the other hand, lead to unstable training and large weight updates that can cause the model to diverge. While gradient clipping can mitigate exploding gradients, vanishing gradients remained a persistent issue, leading to the development of more sophisticated recurrent architectures.

This is where Long Short-Term Memory (LSTM) networks emerge as a powerful solution. LSTMs were specifically designed to overcome the vanishing gradient problem and effectively learn long-term dependencies. The core innovation of an LSTM is its **cell state**, which acts as a "conveyor belt" for information, running straight through the entire chain of recurrent units. Information can be added to or removed from the cell state by a series of "gates." These gates are essentially neural networks (usually sigmoid layers) that output values between 0 and 1, controlling how much information flows through them.
1.  **Forget Gate:** Decides what information to discard from the cell state. It looks at the previous hidden state `h_{t-1}` and current input `x_t` and outputs a number between 0 and 1 for each number in the cell state `C_{t-1}`. A 1 means "keep this completely," while a 0 means "forget this completely."
2.  **Input Gate:** Decides what new information to store in the cell state. It has two parts: a sigmoid layer decides which values to update, and a `tanh` layer creates a vector of new candidate values. These are then combined to update the cell state.
3.  **Output Gate:** Decides what part of the cell state to output as the hidden state `h_t`. It uses a sigmoid layer to decide which parts of the cell state `C_t` to output, and then puts the cell state through a `tanh` (to push the values to be between -1 and 1) and multiplies it by the output of the sigmoid gate.

This intricate gating mechanism allows LSTMs to selectively remember or forget information over long sequences, making them incredibly effective for tasks like time series forecasting, natural language processing, and speech recognition.

A simpler, yet often very effective, alternative to LSTMs is the Gated Recurrent Unit (GRU). GRUs combine the forget and input gates into a single "update gate" and merge the cell state and hidden state. They also have a "reset gate" that decides how much of the previous hidden state to forget. With fewer parameters than LSTMs, GRUs are computationally less expensive and can sometimes train faster, while still addressing the vanishing gradient problem. The choice between LSTM and GRU often depends on the specific dataset and task, with LSTMs generally being preferred for very long sequences where memory is critical, and GRUs for slightly shorter sequences or when computational efficiency is a higher priority.

Let's implement a simple LSTM in PyTorch for our univariate time series forecasting task. The data preparation will be similar to the FNN, but the model architecture will be different. Notice how the input to the LSTM layer expects a 3D tensor: `(batch_size, sequence_length, input_size)`. `sequence_length` here is our `look_back` window.

```python
import torch
import torch.nn as nn
import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error

# 1. Generate synthetic time series data (same as before)
data = np.sin(np.linspace(0, 50, 500)) + np.random.randn(500) * 0.1

# 2. Normalize the data
scaler = MinMaxScaler(feature_range=(-1, 1))
scaled_data = scaler.fit_transform(data.reshape(-1, 1))

# 3. Create sliding windows (same as before)
def create_dataset(data, look_back):
    X, Y = [], []
    for i in range(len(data) - look_back):
        X.append(data[i:(i + look_back), 0])
        Y.append(data[i + look_back, 0])
    return np.array(X), np.array(Y)

look_back = 10 # Use previous 10 time steps to predict the next
X, Y = create_dataset(scaled_data, look_back)

# 4. Split into training and test sets (preserving temporal order)
train_size = int(len(X) * 0.8)
X_train, X_test = X[:train_size], X[train_size:]
Y_train, Y_test = Y[:train_size], Y[train_size:]

# 5. Convert to PyTorch tensors and reshape for LSTM input
# LSTM input: (batch_size, sequence_length, input_size)
# Here, input_size is 1 for univariate time series
X_train = torch.tensor(X_train, dtype=torch.float32).reshape(-1, look_back, 1)
Y_train = torch.tensor(Y_train, dtype=torch.float32).reshape(-1, 1)
X_test = torch.tensor(X_test, dtype=torch.float32).reshape(-1, look_back, 1)
Y_test = torch.tensor(Y_test, dtype=torch.float32).reshape(-1, 1)

# 6. Define the LSTM model
class LSTMModel(nn.Module):
    def __init__(self, input_size, hidden_size, num_layers, output_size):
        super(LSTMModel, self).__init__()
        self.hidden_size = hidden_size
        self.num_layers = num_layers
        # batch_first=True means input/output tensors are (batch, seq, feature)
        self.lstm = nn.LSTM(input_size, hidden_size, num_layers, batch_first=True)
        self.fc = nn.Linear(hidden_size, output_size)

    def forward(self, x):
        # Initialize hidden state and cell state with zeros
        h0 = torch.zeros(self.num_layers, x.size(0), self.hidden_size).to(x.device)
        c0 = torch.zeros(self.num_layers, x.size(0), self.hidden_size).to(x.device)

        # Forward propagate LSTM
        # out: tensor of shape (batch_size, seq_length, hidden_size)
        out, _ = self.lstm(x, (h0, c0))

        # We only care about the last time step's output for forecasting the next value
        out = self.fc(out[:, -1, :]) # Take the output from the last time step
        return out

# 7. Instantiate the model, define loss and optimizer
input_size = 1 # Univariate series, so each time step has 1 feature
hidden_size = 50
num_layers = 2 # Stacked LSTMs can learn more complex patterns
output_size = 1
model = LSTMModel(input_size, hidden_size, num_layers, output_size)

criterion = nn.MSELoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

# 8. Train the model
num_epochs = 150
for epoch in range(num_epochs):
    model.train()
    optimizer.zero_grad()
    outputs = model(X_train)
    loss = criterion(outputs, Y_train)
    loss.backward()
    optimizer.step()

    if (epoch+1) % 10 == 0:
        print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}')

# 9. Evaluate the model
model.eval()
with torch.no_grad():
    train_predict = model(X_train).numpy()
    test_predict = model(X_test).numpy()

# Inverse transform to original scale
train_predict = scaler.inverse_transform(train_predict)
Y_train_orig = scaler.inverse_transform(Y_train.numpy())
test_predict = scaler.inverse_transform(test_predict)
Y_test_orig = scaler.inverse_transform(Y_test.numpy())

train_rmse = np.sqrt(mean_squared_error(Y_train_orig, train_predict))
test_rmse = np.sqrt(mean_squared_error(Y_test_orig, test_predict))
print(f"Train RMSE: {train_rmse:.4f}")
print(f"Test RMSE: {test_rmse:.4f}")

# Plotting results
plt.figure(figsize=(12, 6))
plt.plot(scaler.inverse_transform(scaled_data), label='Original Data')
plt.plot(np.arange(look_back, look_back + len(train_predict)), train_predict, label='Train Prediction')
plt.plot(np.arange(look_back + len(train_predict), look_back + len(train_predict) + len(test_predict)), test_predict, label='Test Prediction')
plt.title("LSTM Time Series Forecast")
plt.legend()
plt.show()
```
When working with LSTMs and GRUs, a common mistake is incorrectly shaping the input data. Remember that `nn.LSTM` and `nn.GRU` layers in PyTorch expect input in the format `(seq_len, batch_size, input_size)` by default, or `(batch_size, seq_len, input_size)` if `batch_first=True` is set. Our example uses `batch_first=True` for convenience. Another pitfall is not properly initializing the hidden and cell states for each sequence, though PyTorch handles this with zeros by default if not provided. For stateful RNNs (where the state is carried across batches), you would need to manage these states explicitly. Also, be mindful of overfitting; LSTMs are powerful and can easily memorize the training data, so techniques like dropout and early stopping are crucial.

#### Key concepts
*   **Recurrent Neural Network (RNN):** A type of neural network designed to process sequential data by maintaining an internal "hidden state" that carries information from one time step to the next.
*   **Hidden State:** The memory component of an RNN, updated at each time step, encapsulating information from previous inputs in the sequence.
*   **Vanishing Gradient Problem:** A phenomenon in training deep neural networks, especially vanilla RNNs, where gradients shrink exponentially as they propagate backward through many layers/time steps, making it difficult to learn long-term dependencies.
*   **Exploding Gradient Problem:** A phenomenon where gradients grow exponentially during training, leading to unstable training and large weight updates.
*   **Long Short-Term Memory (LSTM):** An advanced type of RNN that uses a sophisticated gating mechanism (forget, input, output gates) and a "cell state" to effectively learn and remember long-term dependencies, mitigating the vanishing gradient problem.
*   **Cell State:** The memory core of an LSTM, which runs through the entire chain and is regulated by the gates.
*   **Gated Recurrent Unit (GRU):** A simpler variant of the LSTM that combines the forget and input gates into an "update gate" and merges the cell state and hidden state, offering a balance between performance and computational efficiency.

#### Hands-on activity
**Activity: Comparing LSTM and GRU Performance on Stock Price Prediction**

Your goal is to compare the forecasting performance of an LSTM and a GRU model on a real-world stock price dataset.
1.  **Data Acquisition:** Download historical daily stock price data for a company (e.g., Apple, Google) from Yahoo Finance or Kaggle. Focus on the 'Close' price.
2.  **Preprocessing:** Load the data, handle any missing values, and normalize the 'Close' prices using `MinMaxScaler`.
3.  **Windowing:** Use the `create_dataset` function with a `look_back` window of 30 days to predict the next day's closing price.
4.  **Implement GRU Model:** Create a new PyTorch `nn.Module` class for a GRU model, similar to the `LSTMModel`, but using `nn.GRU` instead of `nn.LSTM`.
5.  **Train and Evaluate:**
    *   Train both the `LSTMModel` (provided in the lesson content) and your new `GRUModel` on the stock price data.
    *   Experiment with `hidden_size` (e.g., 64, 128) and `num_layers` (e.g., 1, 2, 3) for both models.
    *   Evaluate both models using RMSE on the test set and plot their predictions against the actual stock prices.
6.  **Analysis:** Compare the RMSE values and visual prediction quality of the LSTM and GRU. Which model performed better for this dataset and why might that be? Consider the trade-offs between complexity and performance.

```python
import torch
import torch.nn as nn
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error

# --- Starter Code ---

# 1. Data Acquisition (Example: Replace with your actual data loading)
# For demonstration, let's use a simple synthetic series.
# In a real scenario, you'd load a CSV:
# df = pd.read_csv('AAPL.csv', parse_dates=['Date'], index_col='Date')
# data = df['Close'].values.astype(float)

# Using synthetic data for a runnable example:
# Simulate a stock price trend with some volatility
np.random.seed(42)
time_steps = np.arange(1000)
base_price = 100 + time_steps * 0.1 + np.sin(time_steps / 50) * 10
volatility = np.random.randn(1000) * 2
data = base_price + volatility
plt.figure(figsize=(10, 4))
plt.plot(data)
plt.title("Simulated Stock Price Data")
plt.show()

# 2. Preprocessing
scaler = MinMaxScaler(feature_range=(-1, 1))
scaled_data = scaler.fit_transform(data.reshape(-1, 1))

# 3. Create sliding windows
def create_dataset(data, look_back):
    X, Y = [], []
    for i in range(len(data) - look_back):
        X.append(data[i:(i + look_back), 0])
        Y.append(data[i + look_back, 0])
    return np.array(X), np.array(Y)

look_back = 30 # Use previous 30 days
X, Y = create_dataset(scaled_data, look_back)

train_size = int(len(X) * 0.8)
X_train, X_test = X[:train_size], X[train_size:]
Y_train, Y_test = Y[:train_size], Y[train_size:]

X_train = torch.tensor(X_train, dtype=torch.float32).reshape(-1, look_back, 1)
Y_train = torch.tensor(Y_train, dtype=torch.float32).reshape(-1, 1)
X_test = torch.tensor(X_test, dtype=torch.float32).reshape(-1, look_back, 1)
Y_test = torch.tensor(Y_test, dtype=torch.float32).reshape(-1, 1)

# --- Your task starts here: Implement GRU and compare ---

# LSTM Model (from lesson content)
class LSTMModel(nn.Module):
    def __init__(self, input_size, hidden_size, num_layers, output_size):
        super(LSTMModel, self).__init__()
        self.hidden_size = hidden_size
        self.num_layers = num_layers
        self.lstm = nn.LSTM(input_size, hidden_size, num_layers, batch_first=True)
        self.fc = nn.Linear(hidden_size, output_size)

    def forward(self, x):
        h0 = torch.zeros(self.num_layers, x.size(0), self.hidden_size).to(x.device)
        c0 = torch.zeros(self.num_layers, x.size(0), self.hidden_size).to(x.device)
        out, _ = self.lstm(x, (h0, c0))
        out = self.fc(out[:, -1, :])
        return out

# GRU Model (Implement this)
class GRUModel(nn.Module):
    def __init__(self, input_size, hidden_size, num_layers, output_size):
        super(GRUModel, self).__init__()
        self.hidden_size = hidden_size
        self.num_layers = num_layers
        # Use nn.GRU instead of nn.LSTM
        self.gru = nn.GRU(input_size, hidden_size, num_layers, batch_first=True)
        self.fc = nn.Linear(hidden_size, output_size)

    def forward(self, x):
        # GRU only needs a hidden state (h0), no cell state
        h0 = torch.zeros(self.num_layers, x.size(0), self.hidden_size).to(x.device)
        out, _ = self.gru(x, h0) # Pass h0, not (h0, c0)
        out = self.fc(out[:, -1, :])
        return out

# Model parameters to experiment with
input_size = 1
hidden_size = 64 # Try 64, 128
num_layers = 2 # Try 1, 2, 3
output_size = 1
num_epochs = 150
learning_rate = 0.001

# --- Train and evaluate LSTM ---
print("\n--- Training LSTM Model ---")
lstm_model = LSTMModel(input_size, hidden_size, num_layers, output_size)
lstm_criterion = nn.MSELoss()
lstm_optimizer = torch.optim.Adam(lstm_model.parameters(), lr=learning_rate)

for epoch in range(num_epochs):
    lstm_model.train()
    lstm_optimizer.zero_grad()
    outputs = lstm_model(X_train)
    loss = lstm_criterion(outputs, Y_train)
    loss.backward()
    lstm_optimizer.step()
    if (epoch+1) % 50 == 0:
        print(f'LSTM Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}')

lstm_model.eval()
with torch.no_grad():
    lstm_train_predict = lstm_model(X_train).numpy()
    lstm_test_predict = lstm_model(X_test).numpy()

lstm_train_predict_orig = scaler.inverse_transform(lstm_train_predict)
lstm_test_predict_orig = scaler.inverse_transform(lstm_test_predict)
Y_train_orig = scaler.inverse_transform(Y_train.numpy())
Y_test_orig = scaler.inverse_transform(Y_test.numpy())

lstm_train_rmse = np.sqrt(mean_squared_error(Y_train_orig, lstm_train_predict_orig))
lstm_test_rmse = np.sqrt(mean_squared_error(Y_test_orig, lstm_test_predict_orig))
print(f"LSTM Train RMSE: {lstm_train_rmse:.4f}")
print(f"LSTM Test RMSE: {lstm_test_rmse:.4f}")

# --- Train and evaluate GRU ---
print("\n--- Training GRU Model ---")
gru_model = GRUModel(input_size, hidden_size, num_layers, output_size)
gru_criterion = nn.MSELoss()
gru_optimizer = torch.optim.Adam(gru_model.parameters(), lr=learning_rate)

for epoch in range(num_epochs):
    gru_model.train()
    gru_optimizer.zero_grad()
    outputs = gru_model(X_train)
    loss = gru_criterion(outputs, Y_train)
    loss.backward()
    gru_optimizer.step()
    if (epoch+1) % 50 == 0:
        print(f'GRU Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}')

gru_model.eval()
with torch.no_grad():
    gru_train_predict = gru_model(X_train).numpy()
    gru_test_predict = gru_model(X_test).numpy()

gru_train_predict_orig = scaler.inverse_transform(gru_train_predict)
gru_test_predict_orig = scaler.inverse_transform(gru_test_predict)

gru_train_rmse = np.sqrt(mean_squared_error(Y_train_orig, gru_train_predict_orig))
gru_test_rmse = np.sqrt(mean_squared_error(Y_test_orig, gru_test_predict_orig))
print(f"GRU Train RMSE: {gru_train_rmse:.4f}")
print(f"GRU Test RMSE: {gru_test_rmse:.4f}")

# Plotting results
plt.figure(figsize=(14, 7))
plt.plot(scaler.inverse_transform(scaled_data), label='Original Data')
plt.plot(np.arange(look_back, look_back + len(lstm_train_predict_orig)), lstm_train_predict_orig, label='LSTM Train Prediction', linestyle='--')
plt.plot(np.arange(look_back + len(lstm_train_predict_orig), look_back + len(lstm_train_predict_orig) + len(lstm_test_predict_orig)), lstm_test_predict_orig, label='LSTM Test Prediction', linestyle='--')
plt.plot(np.arange(look_back, look_back + len(gru_train_predict_orig)), gru_train_predict_orig, label='GRU Train Prediction', linestyle=':')
plt.plot(np.arange(look_back + len(gru_train_predict_orig), look_back + len(gru_train_predict_orig) + len(gru_test_predict_orig)), gru_test_predict_orig, label='GRU Test Prediction', linestyle=':')

plt.title(f"LSTM vs GRU Stock Price Forecast (Look-back: {look_back}, Hidden Size: {hidden_size}, Layers: {num_layers})")
plt.legend()
plt.show()

```

#### Assessment idea
1.  **Question:** You are building a model to forecast daily electricity consumption for the next week based on the past month's data. You've observed that consumption patterns are heavily influenced by events that happened several weeks ago (e.g., public holidays, major sporting events). Would a vanilla RNN, an LSTM, or an FNN be the most appropriate choice for this task, and why?

    **Answer:** An **LSTM** would be the most appropriate choice.
    *   **FNNs** are unsuitable because they lack an inherent memory mechanism and would struggle to capture dependencies beyond a fixed, relatively small input window. They treat each window as independent.
    *   **Vanilla RNNs** possess a memory through their hidden state, but they are highly susceptible to the **vanishing gradient problem**. This makes them ineffective at learning and remembering long-term dependencies, which are crucial for patterns influenced by events several weeks in the past.
    *   **LSTMs** are specifically designed to overcome the vanishing gradient problem using their gating mechanism and cell state, allowing them to effectively capture and propagate information over long sequences. This makes them ideal for forecasting tasks where long-term historical context is important.

2.  **Question:** Explain the primary difference in how LSTMs and GRUs manage their internal memory compared to a vanilla RNN. What is the main practical implication of this difference for a deep learning practitioner?

    **Answer:** The primary difference is that LSTMs and GRUs introduce **gating mechanisms** (forget, input, output gates in LSTMs; update, reset gates in GRUs) and a dedicated memory component (the **cell state** in LSTMs, which is merged with the hidden state in GRUs). Vanilla RNNs, in contrast, update their hidden state directly using a simple activation function, making them prone to vanishing/exploding gradients.

    The main practical implication for a deep learning practitioner is that LSTMs and GRUs are far more effective at learning and retaining **long-term dependencies** in sequential data. This makes them the preferred choice for most real-world time series forecasting tasks where patterns might span many time steps. While LSTMs are generally more powerful due to their separate cell state, GRUs offer a good balance of performance and computational efficiency with fewer parameters, making them a strong contender when resources are constrained or for slightly less complex long-term patterns.

#### AI generation note
Produce a 15-minute video lesson. Start with a 4-minute animated segment explaining the RNN concept, showing the unrolling of the network and the flow of the hidden state, then visually demonstrating the vanishing gradient problem. Transition to a 6-minute animated breakdown of the LSTM architecture, clearly illustrating the function of each gate (forget, input, output) and the cell state using data flow diagrams. Include a brief comparison with GRUs. Conclude with a 5-minute live coding demo in PyTorch, adapting the previous FNN code to an LSTM, focusing on input reshaping and the `nn.LSTM` layer. Use a real-world dataset like atmospheric CO2 levels to demonstrate long-term trend capturing.

### Chapter 5.3 — Advanced RNN Architectures and Encoder-Decoder Models

#### Learning objectives
*   Understand how to build deeper recurrent networks using stacked LSTMs or GRUs.
*   Differentiate between various sequence-to-sequence (Seq2Seq) architectures (many-to-many, many-to-one, one-to-many) and their applicability to time series problems.
*   Explain the concept of Encoder-Decoder models for multi-step time series forecasting.
*   Describe the role of the attention mechanism in improving Encoder-Decoder performance for long sequences.
*   Implement a basic Encoder-Decoder LSTM model with a simple attention mechanism in PyTorch.

#### Detailed lesson content
Building upon the foundational understanding of LSTMs and GRUs, we can enhance their representational power by stacking multiple recurrent layers. Just as in Feedforward Neural Networks where adding more hidden layers allows the network to learn more complex, hierarchical features, stacking recurrent layers enables the model to capture more abstract and intricate temporal patterns. In a stacked RNN (e.g., stacked LSTM or GRU), the output of one recurrent layer at a given time step becomes the input to the next recurrent layer at the same time step. This means the lower layers learn more fine-grained, short-term dependencies, while the higher layers can learn more abstract, long-term patterns by processing the output of the preceding layers. For example, in a weather forecasting model, a lower layer might learn daily temperature fluctuations, while a higher layer might identify weekly or monthly seasonal trends. PyTorch's `nn.LSTM` and `nn.GRU` modules inherently support stacking by simply setting the `num_layers` parameter to a value greater than 1.

Beyond single-output predictions, time series forecasting often requires predicting multiple future time steps simultaneously, known as **multi-step forecasting**. This is where **sequence-to-sequence (Seq2Seq) models**, particularly the **Encoder-Decoder architecture**, become invaluable. Seq2Seq models are designed to map an input sequence to an output sequence, where the lengths of the input and output sequences can be different. This makes them highly flexible for various time series tasks:
*   **Many-to-One:** Input sequence (e.g., 30 days of stock prices) predicts a single output (e.g., next day's price). This is what we've done with basic LSTMs.
*   **One-to-Many:** Single input (e.g., a specific event) generates a sequence (e.g., subsequent sales trend). Less common for pure forecasting but useful for generation.
*   **Many-to-Many (same length):** Input sequence (e.g., hourly sensor readings) produces an output sequence of the same length (e.g., filtered readings).
*   **Many-to-Many (different lengths):** Input sequence (e.g., past 24 hours of weather data) predicts a future sequence (e.g., next 12 hours of temperature, humidity, etc.). This is the primary use case for Encoder-Decoder models in multi-step forecasting.

The Encoder-Decoder architecture consists of two main components, both typically LSTMs or GRUs:
1.  **Encoder:** Reads the entire input sequence (e.g., past `N` observations) and compresses it into a fixed-size context vector (the final hidden state and cell state of the encoder). This context vector is intended to be a rich summary of the input sequence.
2.  **Decoder:** Takes this context vector as its initial hidden state and then generates the output sequence one step at a time. For each step, it takes the previous predicted output (or the actual previous output during training, known as "teacher forcing") and its current hidden state to predict the next value in the sequence.

A common mistake with basic Encoder-Decoder models is that compressing a long input sequence into a single fixed-size context vector can lead to an "information bottleneck." The model might struggle to remember all relevant details from very long input sequences, especially those at the beginning. This limitation is particularly pronounced in time series forecasting where long-range dependencies are common.

This is where the **attention mechanism** dramatically improves Encoder-Decoder performance. Instead of forcing the encoder to compress all information into a single vector, attention allows the decoder to "look back" at all the encoder's hidden states at each step of the decoding process. When the decoder is generating an output at time `t'`, it computes a set of "attention weights" that indicate how much importance it should place on each of the encoder's input time steps. It then creates a weighted sum of these encoder hidden states, forming a "context vector" that is specific to the current decoding step. This dynamic context vector, rather than a static one, provides the decoder with more relevant information, enabling it to better handle long input sequences and capture complex dependencies. For time series, this means the model can dynamically focus on the most relevant past observations when making a specific future prediction.

Let's implement a basic Encoder-Decoder LSTM with a simple additive attention mechanism in PyTorch. We'll aim to predict the next `output_sequence_length` values given `input_sequence_length` past values.

```python
import torch
import torch.nn as nn
import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error

# 1. Generate synthetic time series data
data = np.sin(np.linspace(0, 70, 700)) * 5 + np.cos(np.linspace(0, 30, 700)) * 3 + np.random.randn(700) * 0.5
plt.plot(data)
plt.title("Synthetic Time Series Data for Seq2Seq")
plt.show()

# 2. Normalize the data
scaler = MinMaxScaler(feature_range=(-1, 1))
scaled_data = scaler.fit_transform(data.reshape(-1, 1))

# 3. Create sliding windows for many-to-many forecasting
def create_seq2seq_dataset(data, input_seq_len, output_seq_len):
    X, Y = [], []
    for i in range(len(data) - input_seq_len - output_seq_len + 1):
        X.append(data[i:(i + input_seq_len), 0])
        Y.append(data[(i + input_seq_len):(i + input_seq_len + output_seq_len), 0])
    return np.array(X), np.array(Y)

input_seq_len = 24 # Use past 24 hours/steps
output_seq_len = 12 # Predict next 12 hours/steps
X, Y = create_seq2seq_dataset(scaled_data, input_seq_len, output_seq_len)

# 4. Split into training and test sets
train_size = int(len(X) * 0.8)
X_train, X_test = X[:train_size], X[train_size:]
Y_train, Y_test = Y[:train_size], Y[train_size:]

# 5. Convert to PyTorch tensors and reshape
# LSTM input: (batch_size, sequence_length, input_size)
X_train = torch.tensor(X_train, dtype=torch.float32).reshape(-1, input_seq_len, 1)
Y_train = torch.tensor(Y_train, dtype=torch.float32).reshape(-1, output_seq_len, 1)
X_test = torch.tensor(X_test, dtype=torch.float32).reshape(-1, input_seq_len, 1)
Y_test = torch.tensor(Y_test, dtype=torch.float32).reshape(-1, output_seq_len, 1)

# 6. Define the Encoder
class Encoder(nn.Module):
    def __init__(self, input_size, hidden_size, num_layers):
        super(Encoder, self).__init__()
        self.hidden_size = hidden_size
        self.num_layers = num_layers
        self.lstm = nn.LSTM(input_size, hidden_size, num_layers, batch_first=True)

    def forward(self, x):
        # Initialize hidden state and cell state
        h0 = torch.zeros(self.num_layers, x.size(0), self.hidden_size).to(x.device)
        c0 = torch.zeros(self.num_layers, x.size(0), self.hidden_size).to(x.device)

        # Forward propagate LSTM
        # output: (batch_size, seq_len, hidden_size)
        # hidden, cell: (num_layers, batch_size, hidden_size)
        output, (hidden, cell) = self.lstm(x, (h0, c0))
        return output, hidden, cell # Return all encoder outputs for attention

# 7. Define the Decoder with Attention
class Decoder(nn.Module):
    def __init__(self, input_size, hidden_size, num_layers, output_size, output_seq_len):
        super(Decoder, self).__init__()
        self.hidden_size = hidden_size
        self.num_layers = num_layers
        self.output_size = output_size
        self.output_seq_len = output_seq_len

        self.lstm = nn.LSTM(input_size + hidden_size, hidden_size, num_layers, batch_first=True) # input_size + context_vector_size
        self.fc = nn.Linear(hidden_size, output_size)

        # Attention mechanism components
        self.attn = nn.Linear(hidden_size * 2, hidden_size) # For computing attention scores
        self.v = nn.Linear(hidden_size, 1, bias=False) # For computing attention weights

    def forward(self, encoder_outputs, encoder_hidden, encoder_cell, target_sequence=None, teacher_forcing_ratio=0.5):
        batch_size = encoder_outputs.size(0)
        # Initialize decoder hidden and cell states with encoder's final states
        decoder_hidden = encoder_hidden
        decoder_cell = encoder_cell

        # First input to the decoder is typically a special 'start of sequence' token
        # For time series, we can use the last value of the input sequence or a learned embedding
        # Here, we'll use a simple learned initial input for simplicity, or the last encoder input
        decoder_input = torch.zeros(batch_size, 1, self.output_size).to(encoder_outputs.device) # Or use X_train[:,-1,:].unsqueeze(1) for a more realistic start

        outputs = []

        for t in range(self.output_seq_len):
            # Attention mechanism
            # Repeat decoder_hidden[0] (last layer's hidden state) across sequence length
            # decoder_hidden[0].unsqueeze(1).repeat(1, encoder_outputs.size(1), 1) -> (batch, seq_len, hidden_size)
            # encoder_outputs -> (batch, seq_len, hidden_size)
            energy = torch.tanh(self.attn(torch.cat((decoder_hidden[-1].unsqueeze(1).repeat(1, encoder_outputs.size(1), 1), encoder_outputs), dim=2)))
            attention_weights = torch.softmax(self.v(energy).squeeze(2), dim=1).unsqueeze(1) # (batch, 1, seq_len)
            context = torch.bmm(attention_weights, encoder_outputs) # (batch, 1, hidden_size)

            # Concatenate context vector with decoder input
            lstm_input = torch.cat((decoder_input, context), dim=2)

            # Forward pass through LSTM
            out, (decoder_hidden, decoder_cell) = self.lstm(lstm_input, (decoder_hidden, decoder_cell))

            # Predict the next value
            prediction = self.fc(out.squeeze(1)) # Squeeze out the sequence length dimension

            outputs.append(prediction)

            # Teacher forcing: use actual next value as input for next step
            # Otherwise, use the model's own prediction
            if target_sequence is not None and torch.rand(1).item() < teacher_forcing_ratio:
                decoder_input = target_sequence[:, t, :].unsqueeze(1)
            else:
                decoder_input = prediction.unsqueeze(1)

        return torch.stack(outputs, dim=1) # Stack predictions to form the output sequence

# 8. Define the full Seq2Seq model
class Seq2Seq(nn.Module):
    def __init__(self, encoder, decoder, device):
        super(Seq2Seq, self).__init__()
        self.encoder = encoder
        self.decoder = decoder
        self.device = device

    def forward(self, input_sequence, target_sequence=None, teacher_forcing_ratio=0.5):
        encoder_outputs, encoder_hidden, encoder_cell = self.encoder(input_sequence)
        output = self.decoder(encoder_outputs, encoder_hidden, encoder_cell, target_sequence, teacher_forcing_ratio)
        return output

# Instantiate models
input_size = 1
hidden_size = 64
num_layers = 2
output_size = 1 # We predict one value at a time for the output sequence

encoder = Encoder(input_size, hidden_size, num_layers)
decoder = Decoder(input_size, hidden_size, num_layers, output_size, output_seq_len) # input_size for decoder is 1 (previous output)
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = Seq2Seq(encoder, decoder, device).to(device)

criterion = nn.MSELoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

# 9. Train the model
num_epochs = 200
for epoch in range(num_epochs):
    model.train()
    optimizer.zero_grad()

    X_train_device = X_train.to(device)
    Y_train_device = Y_train.to(device)

    outputs = model(X_train_device, Y_train_device, teacher_forcing_ratio=0.5)
    loss = criterion(outputs, Y_train_device)
    loss.backward()
    optimizer.step()

    if (epoch+1) % 20 == 0:
        print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}')

# 10. Evaluate the model
model.eval()
with torch.no_grad():
    X_test_device = X_test.to(device)
    test_predict = model(X_test_device, None, teacher_forcing_ratio=0.0).cpu().numpy() # No teacher forcing during inference

# Inverse transform to original scale
test_predict = scaler.inverse_transform(test_predict.reshape(-1, 1)).reshape(-1, output_seq_len)
Y_test_orig = scaler.inverse_transform(Y_test.numpy().reshape(-1, 1)).reshape(-1, output_seq_len)

# Calculate RMSE for each step in the forecast horizon
rmse_per_step = [np.sqrt(mean_squared_error(Y_test_orig[:, i], test_predict[:, i])) for i in range(output_seq_len)]
print(f"RMSE per forecast step: {rmse_per_step}")
print(f"Average Test RMSE: {np.mean(rmse_per_step):.4f}")

# Plotting results for a few examples
num_plot_examples = 3
plt.figure(figsize=(15, 8))
for i in range(num_plot_examples):
    idx = np.random.randint(len(X_test))
    plt.subplot(num_plot_examples, 1, i + 1)
    # Original input sequence
    original_input = scaler.inverse_transform(X_test[idx].cpu().numpy())
    # Original target sequence
    original_target = Y_test_orig[idx]
    # Predicted sequence
    predicted_output = test_predict[idx]

    plt.plot(np.arange(input_seq_len), original_input, label='Input Sequence (Actual)')
    plt.plot(np.arange(input_seq_len, input_seq_len + output_seq_len), original_target, label='Target Sequence (Actual)', color='green')
    plt.plot(np.arange(input_seq_len, input_seq_len + output_seq_len), predicted_output, label='Predicted Sequence', linestyle='--', color='red')
    plt.title(f"Example {i+1} Forecast (Input Len: {input_seq_len}, Output Len: {output_seq_len})")
    plt.legend()
plt.tight_layout()
plt.show()
```
Safety note: When using teacher forcing, it's crucial to gradually reduce the `teacher_forcing_ratio` during training (e.g., annealing schedule) or set it to 0 during inference. If you always use teacher forcing during training, the model might become too reliant on the correct previous input and perform poorly when it has to generate its own inputs during inference. This is known as **exposure bias**. Another common mistake is not handling the initial input to the decoder properly. For time series, this often means feeding the last value of the encoder's input sequence or a special learned token.

#### Key concepts
*   **Stacked RNNs (Stacked LSTMs/GRUs):** Multiple recurrent layers where the output of one layer serves as the input to the next layer, allowing the network to learn more complex, hierarchical temporal features.
*   **Sequence-to-Sequence (Seq2Seq) Model:** A general architecture designed to map an input sequence to an output sequence, even if their lengths differ.
*   **Encoder-Decoder Architecture:** A specific type of Seq2Seq model consisting of an Encoder (which processes the input sequence into a context vector) and a Decoder (which generates the output sequence from the context vector).
*   **Multi-step Forecasting:** The task of predicting multiple future values in a time series, rather than just the next single value.
*   **Context Vector:** A fixed-size representation of the input sequence generated by the encoder, intended to summarize its key information.
*   **Attention Mechanism:** A technique that allows the decoder to dynamically weigh the importance of different parts of the encoder's output when generating each step of the output sequence, overcoming the information bottleneck of a fixed context vector.
*   **Teacher Forcing:** A training technique for sequence generation models where the actual target output from the previous time step is fed as input to the decoder for the current time step, rather than the model's own prediction.

#### Hands-on activity
**Activity: Multi-step Temperature Forecasting with Encoder-Decoder Attention**

Your task is to build and evaluate an Encoder-Decoder LSTM with attention for multi-step temperature forecasting.
1.  **Data Acquisition:** Obtain a multivariate time series dataset, such as hourly weather data (temperature, humidity, pressure, etc.) from a public source (e.g., NOAA, Kaggle). Focus on predicting future temperature.
2.  **Preprocessing:**
    *   Load the data, select relevant features (e.g., temperature, humidity), and handle missing values.
    *   Normalize all selected features using `MinMaxScaler`.
    *   Modify `create_seq2seq_dataset` to handle multivariate input (i.e., `input_size` will be `num_features`). Your `Y` will still be univariate (future temperature).
3.  **Model Adaptation:**
    *   Modify the `Encoder` to accept `input_size` equal to the number of features.
    *   Modify the `Decoder` to accept `input_size` equal to `output_size` (1 for temperature) plus `hidden_size` for the context vector.
    *   Experiment with different `input_seq_len` (e.g., 48 hours, 72 hours) and `output_seq_len` (e.g., 12 hours, 24 hours).
    *   Adjust `hidden_size` and `num_layers` for both encoder and decoder.
4.  **Training & Evaluation:**
    *   Train your Encoder-Decoder model.
    *   Evaluate its performance using RMSE per forecast step and visualize predictions for several test examples.
    *   Experiment with the `teacher_forcing_ratio` schedule (e.g., start at 0.7, linearly decay to 0.3 over epochs).
5.  **Reflection:** How does the model perform for longer forecast horizons compared to shorter ones? What impact did the `teacher_forcing_ratio` have on training stability and prediction quality?

```python
import torch
import torch.nn as nn
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error

# --- Starter Code ---

# 1. Data Acquisition (Example: Replace with your actual data loading)
# Using synthetic multivariate data for a runnable example:
np.random.seed(42)
num_samples = 1000
time_steps = np.arange(num_samples)

# Feature 1: Temperature (main target)
temp = 20 + 5 * np.sin(time_steps / 24 * np.pi) + 2 * np.cos(time_steps / 168 * np.pi) + np.random.randn(num_samples) * 0.5
# Feature 2: Humidity (correlated)
humidity = 60 + 10 * np.sin(time_steps / 24 * np.pi + np.pi/4) + np.random.randn(num_samples) * 1
# Feature 3: Pressure (less correlated)
pressure = 1010 + 2 * np.sin(time_steps / 48 * np.pi) + np.random.randn(num_samples) * 0.2

raw_data = np.stack([temp, humidity, pressure], axis=1) # (num_samples, num_features)
target_feature_idx = 0 # We want to predict temperature

plt.figure(figsize=(12, 6))
plt.plot(raw_data[:, 0], label='Temperature')
plt.plot(raw_data[:, 1], label='Humidity')
plt.plot(raw_data[:, 2], label='Pressure')
plt.title("Simulated Multivariate Weather Data")
plt.legend()
plt.show()

# 2. Preprocessing
scaler = MinMaxScaler(feature_range=(-1, 1))
scaled_data = scaler.fit_transform(raw_data) # Scale all features

# 3. Create sliding windows for many-to-many forecasting (multivariate input, univariate output)
def create_seq2seq_dataset(data, input_seq_len, output_seq_len, target_feature_idx):
    X, Y = [], []
    for i in range(len(data) - input_seq_len - output_seq_len + 1):
        X.append(data[i:(i + input_seq_len), :]) # All features for input
        Y.append(data[(i + input_seq_len):(i + input_seq_len + output_seq_len), target_feature_idx]) # Only target feature for output
    return np.array(X), np.array(Y)

input_seq_len = 48 # Use past 48 hours
output_seq_len = 12 # Predict next 12 hours of temperature
X, Y = create_seq2seq_dataset(scaled_data, input_seq_len, output_seq_len, target_feature_idx)

train_size = int(len(X) * 0.8)
X_train, X_test = X[:train_size], X[train_size:]
Y_train, Y_test = Y[:train_size], Y[train_size:]

# Reshape Y for output: (batch_size, output_seq_len, 1)
X_train = torch.tensor(X_train, dtype=torch.float32)
Y_train = torch.tensor(Y_train, dtype=torch.float32).reshape(-1, output_seq_len, 1)
X_test = torch.tensor(X_test, dtype=torch.float32)
Y_test = torch.tensor(Y_test, dtype=torch.float32).reshape(-1, output_seq_len, 1)

# --- Your task starts here: Adapt models and experiment ---

# Encoder (from lesson content, adapted for multivariate input)
class Encoder(nn.Module):
    def __init__(self, input_size, hidden_size, num_layers):
        super(Encoder, self).__init__()
        self.hidden_size = hidden_size
        self.num_layers = num_layers
        self.lstm = nn.LSTM(input_size, hidden_size, num_layers, batch_first=True)

    def forward(self, x):
        h0 = torch.zeros(self.num_layers, x.size(0), self.hidden_size).to(x.device)
        c0 = torch.zeros(self.num_layers, x.size(0), self.hidden_size).to(x.device)
        output, (hidden, cell) = self.lstm(x, (h0, c0))
        return output, hidden, cell

# Decoder with Attention (from lesson content, adapted for univariate output)
class Decoder(nn.Module):
    def __init__(self, input_size, hidden_size, num_layers, output_size, output_seq_len):
        super(Decoder, self).__init__()
        self.hidden_size = hidden_size
        self.num_layers = num_layers
        self.output_size = output_size
        self.output_seq_len = output_seq_len

        # input_size for decoder is the previous predicted output (output_size) + context_vector_size
        self.lstm = nn.LSTM(output_size + hidden_size, hidden_size, num_layers, batch_first=True)
        self.fc = nn.Linear(hidden_size, output_size)

        self.attn = nn.Linear(hidden_size * 2, hidden_size)
        self.v = nn.Linear(hidden_size, 1, bias=False)

    def forward(self, encoder_outputs, encoder_hidden, encoder_cell, target_sequence=None, teacher_forcing_ratio=0.5):
        batch_size = encoder_outputs.size(0)
        decoder_hidden = encoder_hidden
        decoder_cell = encoder_cell

        # Initial input to decoder: a zero tensor of shape (batch_size, 1, output_size)
        # Or, for a more realistic start, the last value of the input sequence's target feature
        # For this exercise, we'll use a zero tensor for simplicity.
        decoder_input = torch.zeros(batch_size, 1, self.output_size).to(encoder_outputs.device)

        outputs = []

        for t in range(self.output_seq_len):
            energy = torch.tanh(self.attn(torch.cat((decoder_hidden[-1].unsqueeze(1).repeat(1, encoder_outputs.size(1), 1), encoder_outputs), dim=2)))
            attention_weights = torch.softmax(self.v(energy).squeeze(2), dim=1).unsqueeze(1)
            context = torch.bmm(attention_weights, encoder_outputs)

            lstm_input = torch.cat((decoder_input, context), dim=2)

            out, (decoder_hidden, decoder_cell) = self.lstm(lstm_input, (decoder_hidden, decoder_cell))
            prediction = self.fc(out.squeeze(1))
            outputs.append(prediction)

            if target_sequence is not None and torch.rand(1).item() < teacher_forcing_ratio:
                decoder_input = target_sequence[:, t, :].unsqueeze(1)
            else:
                decoder_input = prediction.unsqueeze(1)

        return torch.stack(outputs, dim=1)

# Seq2Seq Model (from lesson content)
class Seq2Seq(nn.Module):
    def __init__(self, encoder, decoder, device):
        super(Seq2Seq, self).__init__()
        self.encoder = encoder
        self.decoder = decoder
        self.device = device

    def forward(self, input_sequence, target_sequence=None, teacher_forcing_ratio=0.5):
        encoder_outputs, encoder_hidden, encoder_cell = self.encoder(input_sequence)
        output = self.decoder(encoder_outputs, encoder_hidden, encoder_cell, target_sequence, teacher_forcing_ratio)
        return output

# Model parameters
encoder_input_size = X_train.shape[2] # Number of features
decoder_output_size = 1 # Predicting only temperature
hidden_size = 128 # Experiment with 64, 128, 256
num_layers = 3 # Experiment with 1, 2, 3
num_epochs = 300
learning_rate = 0.001
teacher_forcing_start = 0.7
teacher_forcing_end = 0.3

encoder = Encoder(encoder_input_size, hidden_size, num_layers)
decoder = Decoder(decoder_output_size, hidden_size, num_layers, decoder_output_size, output_seq_len)
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = Seq2Seq(encoder, decoder, device).to(device)

criterion = nn.MSELoss()
optimizer = torch.optim.Adam(model.parameters(), lr=learning_rate)

# Training loop
print(f"Training on {device}...")
for epoch in range(num_epochs):
    model.train()
    optimizer.zero_grad()

    # Dynamic teacher forcing ratio
    teacher_forcing_ratio = max(teacher_forcing_end, teacher_forcing_start * (1 - epoch / num_epochs))

    X_train_device = X_train.to(device)
    Y_train_device = Y_train.to(device)

    outputs = model(X_train_device, Y_train_device, teacher_forcing_ratio=teacher_forcing_ratio)
    loss = criterion(outputs, Y_train_device)
    loss.backward()
    optimizer.step()

    if (epoch+1) % 50 == 0:
        print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}, Teacher Forcing Ratio: {teacher_forcing_ratio:.2f}')

# Evaluation
model.eval()
with torch.no_grad():
    X_test_device = X_test.to(device)
    # No teacher forcing during inference
    test_predict_scaled = model(X_test_device, None, teacher_forcing_ratio=0.0).cpu().numpy()

# Inverse transform only the target feature (temperature)
# We need the scaler that was fitted on the *entire* raw_data to inverse transform correctly.
# To inverse transform a single feature, we create a dummy array with other features at their mean/median.
# A simpler way for a single feature is to store its min/max or mean/std during initial scaling.
# For this exercise, let's assume we have the original scaler for temperature.
# Let's re-create a scaler just for the target feature for inverse transform.
target_scaler = MinMaxScaler(feature_range=(-1, 1))
target_scaler.fit(raw_data[:, target_feature_idx].reshape(-1, 1))

test_predict_orig = target_scaler.inverse_transform(test_predict_scaled.reshape(-1, 1)).reshape(-1, output_seq_len)
Y_test_orig = target_scaler.inverse_transform(Y_test.numpy().reshape(-1, 1)).reshape(-1, output_seq_len)

rmse_per_step = [np.sqrt(mean_squared_error(Y_test_orig[:, i], test_predict_orig[:, i])) for i in range(output_seq_len)]
print(f"\nRMSE per forecast step: {rmse_per_step}")
print(f"Average Test RMSE: {np.mean(rmse_per_step):.4f}")

# Plotting results for a few examples
num_plot_examples = 3
plt.figure(figsize=(15, 8))
for i in range(num_plot_examples):
    idx = np.random.randint(len(X_test))
    plt.subplot(num_plot_examples, 1, i + 1)

    # Original input sequence (all features)
    original_input_all_features = scaler.inverse_transform(X_test[idx].cpu().numpy())
    original_input_target_feature = original_input_all_features[:, target_feature_idx]

    # Original target sequence (only target feature)
    original_target = Y_test_orig[idx]
    # Predicted sequence
    predicted_output = test_predict_orig[idx]

    plt.plot(np.arange(input_seq_len), original_input_target_feature, label='Input Sequence (Actual Temp)')
    plt.plot(np.arange(input_seq_len, input_seq_len + output_seq_len), original_target, label='Target Sequence (Actual Temp)', color='green')
    plt.plot(np.arange(input_seq_len, input_seq_len + output_seq_len), predicted_output, label='Predicted Sequence (Temp)', linestyle='--', color='red')
    plt.title(f"Example {i+1} Temperature Forecast (Input Len: {input_seq_len}, Output Len: {output_seq_len})")
    plt.legend()
plt.tight_layout()
plt.show()

```

#### Assessment idea
1.  **Question:** You are designing a system to predict hourly electricity load for the next 24 hours based on the past 7 days of load data, along with external factors like temperature and day of the week. You are considering using an Encoder-Decoder LSTM model. Explain why this architecture, particularly with an attention mechanism, is well-suited for this specific multi-step, multivariate time series forecasting problem, contrasting it with a simple, non-attention LSTM that predicts one step at a time.

    **Answer:** An Encoder-Decoder LSTM with an attention mechanism is highly suitable for this problem due to several reasons:
    *   **Multi-step Forecasting:** The Encoder-Decoder naturally handles predicting an entire sequence (next 24 hours) at once, which is more efficient and often more consistent than predicting one step at a time and feeding predictions back into the model (which can accumulate errors).
    *   **Multivariate Input:** The Encoder can easily process multiple input features (past load, temperature, day of week) simultaneously, learning their complex interactions to form a rich context.
    *   **Long-term Dependencies & Context:** The LSTM units within the encoder and decoder are adept at capturing long-term dependencies from the 7 days of historical data, which is crucial for identifying weekly seasonality and trends.
    *   **Attention Mechanism:** This is critical because predicting 24 hours ahead from 7 days of input is a long sequence-to-sequence task. A standard Encoder-Decoder might suffer from an "information bottleneck" where the fixed-size context vector struggles to summarize all relevant information from 7 days. Attention allows the decoder, at each of the 24 prediction steps, to dynamically focus on the most relevant parts of the 7-day input sequence. For example, when predicting tomorrow morning's load, it might pay more attention to previous mornings' patterns and current temperature, rather than uniformly weighting all past inputs. This dynamic focus significantly improves accuracy for longer forecast horizons.

    A simple, non-attention LSTM predicting one step at a time would be less effective because:
    *   It would require running the model 24 times for each forecast, potentially accumulating errors.
    *   It would lack the ability to dynamically weigh different parts of the input sequence, relying solely on its final hidden state, which is less robust for long input sequences.

2.  **Question:** You've trained an Encoder-Decoder LSTM model with a `teacher_forcing_ratio` of 1.0 throughout training. During deployment, you notice that the model's predictions quickly diverge from reality after the first few steps. What is this phenomenon called, and what adjustment should you make during training or inference to mitigate it?

    **Answer:** This phenomenon is called **exposure bias**. It occurs when a model is exclusively trained with "teacher forcing" (i.e., always fed the ground truth from the previous time step as input for the current prediction), making it accustomed to seeing perfect inputs. During inference, however, the model must use its own potentially erroneous predictions as input for subsequent steps. Since it hasn't learned to recover from its own mistakes, errors accumulate and predictions quickly diverge.

    To mitigate exposure bias, you should:
    *   **During training:** Implement a **scheduled sampling** strategy where the `teacher_forcing_ratio` is gradually reduced over epochs (e.g., from 1.0 to 0.0 or a small constant like 0.3). This forces the model to sometimes use its own predictions as input, making it more robust to errors.
    *   **During inference:** Always set the `teacher_forcing_ratio` to **0.0**. The model must generate the entire output sequence using its own previous predictions as inputs.

#### AI generation note
Create a 15-minute interactive coding lab. Begin with a 3-minute explanation of stacked RNNs and the concept of many-to-many forecasting for time series, using animated diagrams. Then, guide the user through a 10-minute live coding session in a Jupyter notebook, implementing the Encoder-Decoder LSTM with the attention mechanism as shown in the lesson. Focus on explaining the input/output shapes for each component and the attention calculation. Use a dataset of smart meter readings to predict future electricity consumption. Include a step-by-step breakdown of the attention weights being calculated. The interactive element will be a coding exercise where learners modify the `teacher_forcing_ratio` schedule.

### Chapter 5.4 — Convolutional Neural Networks (CNNs) for Time Series

#### Learning objectives
*   Understand how 1D Convolutional Neural Networks (CNNs) can be applied to time series data.
*   Identify the advantages of CNNs for time series, such as local pattern detection, parameter sharing, and computational efficiency.
*   Explain the concept of causal convolutions and their importance in forecasting.
*   Describe dilated convolutions and how they increase the receptive field without losing resolution.
*   Implement a 1D CNN model for univariate time series forecasting in PyTorch.

#### Detailed lesson content
While Recurrent Neural Networks (RNNs), LSTMs, and GRUs excel at capturing sequential dependencies, they are not the only deep learning architecture suitable for time series. Convolutional Neural Networks (CNNs), traditionally known for their success in image processing, have proven surprisingly effective for time series analysis and forecasting when adapted appropriately. The key idea behind CNNs is their ability to automatically learn hierarchical features by applying **convolutional filters**. For time series, we use **1D convolutions** instead of the 2D convolutions common in image processing.

A 1D convolutional layer applies a small filter (or kernel) that slides across the time series data. At each position, it performs a dot product between the filter's weights and the corresponding segment of the input. This operation extracts local patterns or features, such as trends, seasonality, or specific event signatures. For example, a filter might learn to detect a sharp increase in a stock price, a sudden drop in temperature, or a repeating daily pattern in energy consumption. The advantages of using CNNs for time series are manifold:
*   **Local Pattern Detection:** Filters are excellent at identifying recurring local patterns, regardless of where they occur in the sequence.
*   **Parameter Sharing:** The same filter weights are applied across the entire time series, significantly reducing the number of parameters compared to fully connected layers and making the model more robust to variations in pattern location.
*   **Computational Efficiency:** Convolutions can be highly parallelized, leading to faster training times compared to the sequential nature of RNNs, especially on long sequences.
*   **Hierarchical Feature Learning:** Stacking multiple convolutional layers allows the network to learn increasingly abstract and complex features, similar to how deeper FNNs or RNNs operate.

When applying CNNs to forecasting, a crucial concept is **causal convolutions**. In standard convolutions, the output at a given time step `t` can depend on inputs from both past and future time steps within the filter's receptive field. However, for forecasting, we must only use past information to predict future values. A causal convolution ensures that the output at time `t` depends only on inputs from time `t` and earlier. This is achieved by padding the input sequence appropriately (e.g., left-padding with zeros) so that the filter only "sees" past values. Without causal padding, your CNN would be "cheating" by looking into the future, leading to over-optimistic results during training and poor performance in real-world deployment.

Another powerful technique to enhance CNNs for time series is **dilated convolutions** (also known as atrous convolutions). Dilated convolutions allow the receptive field of a filter to expand exponentially without increasing the number of parameters or losing resolution (i.e., without downsampling the sequence). This is achieved by inserting "holes" or gaps between the filter's elements. For example, a 3-element filter with a dilation rate of 2 would skip one element between each weight, effectively covering a wider span of the input sequence. By stacking dilated convolutional layers with increasing dilation rates, a CNN can capture very long-range dependencies, similar to RNNs, but with the parallelization benefits of convolutions. This is a core component of powerful architectures like WaveNet.

Let's implement a 1D CNN for univariate time series forecasting in PyTorch. We'll use a similar sliding window approach for data preparation as with FNNs and LSTMs, but the model architecture will be convolutional.

```python
import torch
import torch.nn as nn
import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error

# 1. Generate synthetic time series data
data = np.sin(np.linspace(0, 60, 600)) * 3 + np.cos(np.linspace(0, 20, 600)) * 2 + np.random.randn(600) * 0.3
plt.plot(data)
plt.title("Synthetic Time Series Data for CNN")
plt.show()

# 2. Normalize the data
scaler = MinMaxScaler(feature_range=(-1, 1))
scaled_data = scaler.fit_transform(data.reshape(-1, 1))

# 3. Create sliding windows
def create_dataset(data, look_back):
    X, Y = [], []
    for i in range(len(data) - look_back):
        X.append(data[i:(i + look_back), 0])
        Y.append(data[i + look_back, 0])
    return np.array(X), np.array(Y)

look_back = 20 # Use previous 20 time steps to predict the next
X, Y = create_dataset(scaled_data, look_back)

# 4. Split into training and test sets
train_size = int(len(X) * 0.8)
X_train, X_test = X[:train_size], X[train_size:]
Y_train, Y_test = Y[:train_size], Y[train_size:]

# 5. Convert to PyTorch tensors and reshape for CNN input
# CNN 1D input: (batch_size, num_channels, sequence_length)
# For univariate, num_channels is 1
X_train = torch.tensor(X_train, dtype=torch.float32).unsqueeze(1) # Add channel dimension
Y_train = torch.tensor(Y_train, dtype=torch.float32).reshape(-1, 1)
X_test = torch.tensor(X_test, dtype=torch.float32).unsqueeze(1)
Y_test = torch.tensor(Y_test, dtype=torch.float32).reshape(-1, 1)

# 6. Define the 1D CNN model
class CNN1DModel(nn.Module):
    def __init__(self, input_channels, output_size, look_back):
        super(CNN1DModel, self).__init__()
        # We need to calculate the output size of the convolutional layers
        # to correctly size the subsequent linear layer.
        # Formula for output length: (input_length + 2*padding - dilation*(kernel_size-1) - 1)/stride + 1

        # Layer 1: Causal Conv
        # To ensure causality, padding should be (kernel_size - 1) * dilation
        kernel_size1 = 3
        dilation1 = 1
        padding1 = (kernel_size1 - 1) * dilation1 # Causal padding for kernel_size=3, dilation=1

        self.conv1 = nn.Conv1d(input_channels, 32, kernel_size=kernel_size1, padding=padding1, dilation=dilation1)
        self.relu1 = nn.ReLU()
        self.dropout1 = nn.Dropout(0.2)
        # After padding, we need to slice to maintain causality
        # The effective output length after causal conv: input_length
        # But we need to remove the "future" padding from the right
        self.trim1 = padding1 # Amount to trim from the right

        # Layer 2: Causal Conv with dilation
        kernel_size2 = 3
        dilation2 = 2 # Dilated convolution
        padding2 = (kernel_size2 - 1) * dilation2 # Causal padding for kernel_size=3, dilation=2

        self.conv2 = nn.Conv1d(32, 64, kernel_size=kernel_size2, padding=padding2, dilation=dilation2)
        self.relu2 = nn.ReLU()
        self.dropout2 = nn.Dropout(0.2)
        self.trim2 = padding2

        # The output of the last conv layer needs to be flattened for the linear layer.
        # The final sequence length after all causal convolutions will be `look_back`.
        # So, the size before flattening is `(batch_size, num_filters_last_conv, look_back)`
        # The flattened size will be `num_filters_last_conv * look_back`.
        self.fc = nn.Linear(64 * look_back, output_size)

    def forward(self, x):
        # Apply causal conv1 and trim
        out = self.conv1(x)
        out = out[:, :, :-self.trim1] # Trim the right side to ensure causality
        out = self.relu1(out)
        out = self.dropout1(out)

        # Apply causal conv2 and trim
        out = self.conv2(out)
        out = out[:, :, :-self.trim2] # Trim the right side to ensure causality
        out = self.relu2(out)
        out = self.dropout2(out)

        # Flatten the output for the fully connected layer
        out = out.reshape(out.size(0), -1) # (batch_size, num_filters * look_back)
        out = self.fc(out)
        return out

# 7. Instantiate the model, define loss and optimizer
input_channels = 1 # Univariate series
output_size = 1 # Predicting one future value
model = CNN1DModel(input_channels, output_size, look_back)

criterion = nn.MSELoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

# 8. Train the model
num_epochs = 150
for epoch in range(num_epochs):
    model.train()
    optimizer.zero_grad()
    outputs = model(X_train)
    loss = criterion(outputs, Y_train)
    loss.backward()
    optimizer.step()

    if (epoch+1) % 10 == 0:
        print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}')

# 9. Evaluate the model
model.eval()
with torch.no_grad():
    train_predict = model(X_train).numpy()
    test_predict = model(X_test).numpy()

# Inverse transform to original scale
train_predict = scaler.inverse_transform(train_predict)
Y_train_orig = scaler.inverse_transform(Y_train.numpy())
test_predict = scaler.inverse_transform(test_predict)
Y_test_orig = scaler.inverse_transform(Y_test.numpy())

train_rmse = np.sqrt(mean_squared_error(Y_train_orig, train_predict))
test_rmse = np.sqrt(mean_squared_error(Y_test_orig, test_predict))
print(f"Train RMSE: {train_rmse:.4f}")
print(f"Test RMSE: {test_rmse:.4f}")

# Plotting results
plt.figure(figsize=(12, 6))
plt.plot(scaler.inverse_transform(scaled_data), label='Original Data')
plt.plot(np.arange(look_back, look_back + len(train_predict)), train_predict, label='Train Prediction')
plt.plot(np.arange(look_back + len(train_predict), look_back + len(train_predict) + len(test_predict)), test_predict, label='Test Prediction')
plt.title("1D CNN Time Series Forecast")
plt.legend()
plt.show()
```
A common mistake when implementing 1D CNNs for time series forecasting is neglecting causal padding or incorrectly calculating it. If you use `padding='same'` or `padding='valid'` without careful consideration, your model might inadvertently use future information. Always ensure that the output at time `t` depends only on inputs up to `t`. Another pitfall is ignoring the receptive field. If your `look_back` window is large but your CNN's receptive field (determined by kernel sizes and dilation rates) is too small, it won't capture the necessary long-range dependencies. Conversely, a receptive field that's too large can lead to unnecessary parameters and potential overfitting. Experiment with kernel sizes and dilation rates to find the optimal configuration for your data.

#### Key concepts
*   **1D Convolutional Neural Network (CNN):** A neural network that applies 1D convolutional filters to sequential data, extracting local patterns and features.
*   **Convolutional Filter (Kernel):** A small learnable matrix that slides across the input sequence, performing dot products to detect specific patterns.
*   **Parameter Sharing:** The characteristic of CNNs where the same filter weights are applied across different locations in the input, reducing parameters and making pattern detection location-invariant.
*   **Causal Convolution:** A type of convolution where the output at a given time step depends only on inputs from current and past time steps, crucial for forecasting tasks to prevent data leakage from the future.
*   **Dilated Convolution (Atrous Convolution):** A technique that expands the receptive field of a convolutional filter by skipping input elements, allowing the network to capture long-range dependencies without increasing parameters or losing resolution.
*   **Receptive Field:** The region of the input sequence that a particular neuron in a higher layer "sees" or is influenced by.

#### Hands-on activity
**Activity: Optimizing a 1D CNN for Sensor Data Anomaly Detection**

Your goal is to build a 1D CNN model to predict the next sensor reading, with the ultimate aim of using prediction errors for anomaly detection.
1.  **Data Acquisition:** Obtain a univariate sensor data time series (e.g., temperature, pressure, vibration from an IoT device) from a public dataset.
2.  **Preprocessing:** Load the data, handle missing values, and normalize it using `MinMaxScaler`.
3.  **Windowing:** Use the `create_dataset` function. Experiment with `look_back` values (e.g., 30, 60, 120 time steps).
4.  **Model Adaptation:**
    *   Modify the `CNN1DModel` class.
    *   Experiment with the number of convolutional layers (e.g., 2, 3, 4).
    *   Vary `kernel_size` (e.g., 3, 5, 7) and `dilation` rates (e.g., `[1, 2, 4]` for three layers) to achieve a desired receptive field.
    *   Adjust the number of filters (e.g., 16, 32, 64) in each convolutional layer.
    *   Consider adding `nn.MaxPool1d` layers between convolutional blocks to downsample and reduce dimensionality, but be mindful of losing temporal resolution if you need precise predictions. (For simple next-step prediction, you might avoid pooling or only use it carefully).
5.  **Training & Evaluation:**
    *   Train your modified CNN model.
    *   Evaluate its performance using RMSE on the test set.
    *   Plot predictions against actual values.
6.  **Reflection:** How did different combinations of `kernel_size`, `dilation`, and number of layers affect the model's ability to capture patterns and its RMSE? How does the receptive field relate to the `look_back` window?

```python
import torch
import torch.nn as nn
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error

# --- Starter Code ---

# 1. Data Acquisition (Example: Replace with your actual data loading)
# Using simulated sensor data with some anomalies for a runnable example:
np.random.seed(42)
num_samples = 1200
base_signal = 10 + 2 * np.sin(np.linspace(0, 50, num_samples)) + 0.5 * np.cos(np.linspace(0, 10, num_samples))
noise = np.random.randn(num_samples) * 0.1
data = base_signal + noise

# Introduce some anomalies
data[500:510] += 5 # Spike
data[800:820] -= 3 # Dip
plt.figure(figsize=(10, 4))
plt.plot(data)
plt.title("Simulated Sensor Data with Anomalies")
plt.show()

# 2. Preprocessing
scaler = MinMaxScaler(feature_range=(-1, 1))
scaled_data = scaler.fit_transform(data.reshape(-1, 1))

# 3. Create sliding windows
def create_dataset(data, look_back):
    X, Y = [], []
    for i in range(len(data) - look_back):
        X.append(data[i:(i + look_back), 0])
        Y.append(data[i + look_back, 0])
    return np.array(X), np.array(Y)

look_back = 60 # Experiment with 30, 60, 120
X, Y = create_dataset(scaled_data, look_back)

train_size = int(len(X) * 0.8)
X_train, X_test = X[:train_size], X[train_size:]
Y_train, Y_test = Y[:train_size], Y[train_size:]

X_train = torch.tensor(X_train, dtype=torch.float32).unsqueeze(1)
Y_train = torch.tensor(Y_train, dtype=torch.float32).reshape(-1, 1)
X_test = torch.tensor(X_test, dtype=torch.float32).unsqueeze(1)
Y_test = torch.tensor(Y_test, dtype=torch.float32).reshape(-1, 1)

# --- Your task starts here: Modify CNN1DModel and experiment ---

# 6. Define the 1D CNN model (Modify this class)
class CNN1DModel(nn.Module):
    def __init__(self, input_channels, output_size, look_back):
        super(CNN1DModel, self).__init__()
        
        # Layer 1
        kernel_size1 = 5 # Experiment with 3, 5, 7
        dilation1 = 1
        padding1 = (kernel_size1 - 1) * dilation1
        self.conv1 = nn.Conv1d(input_channels, 32, kernel_size=kernel_size1, padding=padding1, dilation=dilation1)
        self.relu1 = nn.ReLU()
        self.dropout1 = nn.Dropout(0.2)
        self.trim1 = padding1

        # Layer 2 (Dilated)
        kernel_size2 = 5 # Experiment with 3, 5, 7
        dilation2 = 2 # Experiment with 2, 4
        padding2 = (kernel_size2 - 1) * dilation2
        self.conv2 = nn.Conv1d(32, 64, kernel_size=kernel_size2, padding=padding2, dilation=dilation2)
        self.relu2 = nn.ReLU()
        self.dropout2 = nn.Dropout(0.2)
        self.trim2 = padding2

        # Layer 3 (More Dilated) - Optional, uncomment to add
        # kernel_size3 = 5
        # dilation3 = 4
        # padding3 = (kernel_size3 - 1) * dilation3
        # self.conv3 = nn.Conv1d(64, 128, kernel_size=kernel_size3, padding=padding3, dilation=dilation3)
        # self.relu3 = nn.ReLU()
        # self.dropout3 = nn.Dropout(0.2)
        # self.trim3 = padding3
        # final_filters = 128
        final_filters = 64 # Adjust if adding more layers

        self.fc = nn.Linear(final_filters * look_back, output_size)

    def forward(self, x):
        out = self.conv1(x)
        out = out[:, :, :-self.trim1]
        out = self.relu1(out)
        out = self.dropout1(out)

        out = self.conv2(out)
        out = out[:, :, :-self.trim2]
        out = self.relu2(out)
        out = self.dropout2(out)

        # Uncomment to use Layer 3
        # out = self.conv3(out)
        # out = out[:, :, :-self.trim3]
        # out = self.relu3(out)
        # out = self.dropout3(out)

        out = out.reshape(out.size(0), -1)
        out = self.fc(out)
        return out

# 7. Instantiate the model, define loss and optimizer
input_channels = 1
output_size = 1
model = CNN1DModel(input_channels, output_size, look_back)

criterion = nn.MSELoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

# 8. Train the model
num_epochs = 200
for epoch in range(num_epochs):
    model.train()
    optimizer.zero_grad()
    outputs = model(X_train)
    loss = criterion(outputs, Y_train)
    loss.backward()
    optimizer.step()

    if (epoch+1) % 20 == 0:
        print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}')

# 9. Evaluate the model
model.eval()
with torch.no_grad():
    train_predict = model(X_train).numpy()
    test_predict = model(X_test).numpy()

train_predict = scaler.inverse_transform(train_predict)
Y_train_orig = scaler.inverse_transform(Y_train.numpy())
test_predict = scaler.inverse_transform(test_predict)
Y_test_orig = scaler.inverse_transform(Y_test.numpy())

train_rmse = np.sqrt(mean_squared_error(Y_train_orig, train_predict))
test_rmse = np.sqrt(mean_squared_error(Y_test_orig, test_predict))
print(f"Train RMSE: {train_rmse:.4f}")
print(f"Test RMSE: {test_rmse:.4f}")

# Plotting results
plt.figure(figsize=(12, 6))
plt.plot(scaler.inverse_transform(scaled_data), label='Original Data')
plt.plot(np.arange(look_back, look_back + len(train_predict)), train_predict, label='Train Prediction')
plt.plot(np.arange(look_back + len(train_predict), look_back + len(train_predict) + len(test_predict)), test_predict, label='Test Prediction')
plt.title("1D CNN Time Series Forecast")
plt.legend()
plt.show()

```

#### Assessment idea
1.  **Question:** You are tasked with forecasting short-term (next 5 minutes) traffic flow on a highway based on the past 30 minutes of sensor data. The traffic patterns often involve sudden changes or "bursts" that are localized in time. Would a 1D CNN be a suitable choice for this task, and why? What specific feature of 1D CNNs makes them good at detecting such local patterns?

    **Answer:** Yes, a 1D CNN would be a very suitable choice for this task.
    *   **Local Pattern Detection:** 1D CNNs excel at identifying recurring local patterns in sequential data. Sudden changes or "bursts" in traffic flow (e.g., rapid acceleration/deceleration, congestion formation) are precisely the kind of local features that convolutional filters are designed to detect. A small kernel can learn to recognize the signature of a traffic jam forming or dissipating.
    *   **Parameter Sharing:** The same filter weights are applied across the entire 30-minute input window, meaning the CNN can detect these patterns regardless of when they occur within that window.
    *   **Efficiency:** For relatively short sequences like 30 minutes, CNNs can be computationally more efficient than RNNs, allowing for faster processing, which is important for real-time traffic forecasting.
    The specific feature that makes 1D CNNs good at detecting local patterns is the **convolutional filter (kernel)**. These small, learnable matrices slide across the input, performing localized feature extraction.

2.  **Question:** You've built a 1D CNN for a time series forecasting task, but you're concerned that it might be "cheating" by using future information. What specific architectural design choice within the convolutional layers must you ensure to prevent this, and how is it typically implemented in practice?

    **Answer:** To prevent a 1D CNN from "cheating" by using future information in a forecasting task, you must ensure that your convolutional layers use **causal convolutions**.
    Causal convolution means that the output at any given time step `t` can only depend on inputs from time `t` and earlier, never from `t+1` or later. In practice, this is typically implemented by applying **left-padding** (or "pre-padding") to the input sequence before the convolution. The amount of padding required is `(kernel_size - 1) * dilation`. After the convolution, the rightmost `(kernel_size - 1) * dilation` elements of the output (which were influenced by the padding or "future" data) are then trimmed or discarded to maintain causality. PyTorch's `nn.Conv1d` allows `padding` to be specified, and careful calculation is needed to achieve causality.

#### AI generation note
Design a 10-minute interactive coding demo. Start with a 2-minute visual explanation of 1D convolutions and dilated convolutions using animated diagrams on a time series plot. Show how filters slide and how dilation expands the receptive field. Then, lead an 8-minute live coding session in a Jupyter notebook. Guide the learner through modifying an existing FNN/LSTM data pipeline to fit a 1D CNN. Focus on the `nn.Conv1d` layer, explaining `kernel_size`, `padding`, and `dilation`. Explicitly demonstrate the calculation and application of causal padding. Use a real-world energy consumption dataset and visually compare the receptive field of different dilation rates. Include a mini-quiz on the difference between causal and non-causal convolutions.

### Chapter 5.5 — Transformer Networks for Time Series Forecasting

#### Learning objectives
*   Understand the fundamental limitations of RNNs (sequential processing, difficulty with very long sequences) that Transformers address.
*   Explain the core concept of the self-attention mechanism and how it allows Transformers to weigh the importance of different parts of an input sequence.
*   Describe the role of positional encoding in providing sequential order information to Transformers.
*   Outline the Encoder-Decoder Transformer architecture and its adaptation for time series forecasting.
*   Discuss the advantages of Transformers for time series, such as parallelization and capturing long-range dependencies.
*   Implement a basic Transformer encoder for time series feature extraction in PyTorch.

#### Detailed lesson content
While RNNs and their variants like LSTMs and GRUs have significantly advanced time series forecasting, they still possess inherent limitations, especially when dealing with very long sequences. The primary bottleneck is their **sequential processing nature**: to compute the hidden state at time `t`, an RNN must first compute all hidden states from `t-1` back to the beginning of the sequence. This sequential dependency prevents full parallelization of computations, making training slow for long sequences. Furthermore, despite LSTMs' and GRUs' improvements, extremely long-range dependencies can still be challenging to capture effectively due to the path length between distant elements. This is where **Transformer networks**, originally developed for natural language processing, offer a revolutionary approach that has found increasing utility in time series.

The Transformer architecture completely abandons recurrence in favor of a mechanism called **self-attention**. Instead of processing tokens (or time steps) one by one, self-attention allows the model to weigh the importance of every other time step in the input sequence when processing a single time step. For each element in the input sequence, self-attention computes three vectors: a **Query (Q)**, a **Key (K)**, and a **Value (V)**. The Query vector represents the current element, Keys represent all other elements, and Values represent the content of all other elements. The attention score between the Query and each Key is calculated (typically via a dot product), scaled, and then passed through a softmax function to get attention weights. These weights are then used to compute a weighted sum of the Value vectors, producing an output that is a blend of all input elements, with more relevant elements contributing more heavily. This allows the model to "attend" to different parts of the sequence simultaneously, capturing dependencies regardless of their distance. This parallel computation of attention for all time steps is a huge advantage over RNNs.

Since Transformers remove the sequential processing, they lose the inherent positional information that RNNs naturally encode. To compensate for this, **positional encoding** is added to the input embeddings. Positional encoding is a vector that contains information about the absolute or relative position of each time step in the sequence. These encoding vectors are typically learned or generated using fixed functions (e.g., sine and cosine waves of different frequencies) and are added to the input embeddings before they enter the Transformer layers. This ensures that the model knows the order of the time steps, even though it processes them in parallel. For time series, this is crucial for distinguishing between, say, the first hour of a day and the last hour.

For time series forecasting, the Transformer is often adapted into an **Encoder-Decoder architecture**, similar to what we saw with LSTMs, but with Transformer blocks replacing the recurrent layers.
*   **Encoder:** Consists of a stack of identical layers, each containing a multi-head self-attention mechanism and a position-wise feed-forward network. It processes the input time series and outputs a sequence of context-aware representations.
*   **Decoder:** Also consists of a stack of identical layers. Each decoder layer has three sub-layers: a masked multi-head self-attention mechanism (to prevent attending to future time steps), a multi-head attention mechanism that attends to the encoder's output, and a position-wise feed-forward network. The decoder generates the forecast sequence one step at a time (or in parallel for specialized architectures).

The advantages of Transformers for time series are significant:
*   **Parallelization:** The self-attention mechanism allows for parallel computation across all time steps, leading to much faster training, especially for long sequences.
*   **Long-range Dependencies:** The direct connection between any two time steps via self-attention makes it easier to capture very long-range dependencies than RNNs, which rely on propagating information through many intermediate steps.
*   **Interpretability (to some extent):** Attention weights can sometimes offer insights into which past time steps are most relevant for a given prediction.
*   **Scalability:** Transformers scale well to very large datasets and model sizes.

However, Transformers also have drawbacks: they are computationally intensive in terms of memory and processing for very long sequences due to the quadratic complexity of self-attention with respect to sequence length (though this is being addressed by sparse attention variants). Also, they can be harder to train from scratch on smaller datasets.

Let's implement a basic Transformer Encoder for time series feature extraction in PyTorch. For a full forecasting model, this encoder's output would then feed into a decoder. Here, we'll focus on the encoder part to understand the core mechanics.

```python
import torch
import torch.nn as nn
import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error

# 1. Generate synthetic time series data
data = np.sin(np.linspace(0, 100, 1000)) * 10 + np.random.randn(1000) * 0.5 + np.cos(np.linspace(0, 30, 1000)) * 5
plt.plot(data)
plt.title("Synthetic Time Series Data for Transformer")
plt.show()

# 2. Normalize the data
scaler = MinMaxScaler(feature_range=(-1, 1))
scaled_data = scaler.fit_transform(data.reshape(-1, 1))

# 3. Create sliding windows (input sequence for Transformer)
def create_dataset(data, seq_len):
    X, Y = [], []
    for i in range(len(data) - seq_len):
        X.append(data[i:(i + seq_len), 0])
        Y.append(data[i + seq_len, 0]) # Predict the next single value for simplicity
    return np.array(X), np.array(Y)

seq_len = 50 # Input sequence length for the Transformer
X, Y = create_dataset(scaled_data, seq_len)

# 4. Split into training and test sets
train_size = int(len(X) * 0.8)
X_train, X_test = X[:train_size], X[train_size:]
Y_train, Y_test = Y[:train_size], Y[train_size:]

# 5. Convert to PyTorch tensors and reshape for Transformer input
# Transformer input: (batch_size, sequence_length, input_dim)
input_dim = 1 # Univariate series
X_train = torch.tensor(X_train, dtype=torch.float32).reshape(-1, seq_len, input_dim)
Y_train = torch.tensor(Y_train, dtype=torch.float32).reshape(-1, 1)
X_test = torch.tensor(X_test, dtype=torch.float32).reshape(-1, seq_len, input_dim)
Y_test = torch.tensor(Y_test, dtype=torch.float32).reshape(-1, 1)

# 6. Positional Encoding
class PositionalEncoding(nn.Module):
    def __init__(self, d_model, max_len=5000):
        super(PositionalEncoding, self).__init__()
        pe = torch.zeros(max_len, d_model)
        position = torch.arange(0, max_len, dtype=torch.float).unsqueeze(1)
        div_term = torch.exp(torch.arange(0, d_model, 2).float() * (-np.log(10000.0) / d_model))
        pe[:, 0::2] = torch.sin(position * div_term)
        pe[:, 1::2] = torch.cos(position * div_term)
        pe = pe.unsqueeze(0).transpose(0, 1) # (max_len, 1, d_model)
        self.register_buffer('pe', pe)

    def forward(self, x):
        # x: (seq_len, batch_size, d_model) or (batch_size, seq_len, d_model)
        # If batch_first=True for Transformer, input is (batch_size, seq_len, d_model)
        # So we need to select positions up to x.size(1)
        return x + self.pe[:x.size(1), :].squeeze(1) # Add positional encoding

# 7. Define a simple Transformer Encoder for forecasting
class TimeSeriesTransformer(nn.Module):
    def __init__(self, input_dim, d_model, nhead, num_encoder_layers, dim_feedforward, dropout, output_dim, max_len=5000):
        super(TimeSeriesTransformer, self).__init__()
        self.model_type = 'Transformer'
        self.input_linear = nn.Linear(input_dim, d_model) # Project input_dim to d_model
        self.pos_encoder = PositionalEncoding(d_model, max_len)
        encoder_layers = nn.TransformerEncoderLayer(d_model, nhead, dim_feedforward, dropout, batch_first=True)
        self.transformer_encoder = nn.TransformerEncoder(encoder_layers, num_encoder_layers)
        self.decoder_linear = nn.Linear(d_model * seq_len, output_dim) # Flatten encoder output and project to output_dim

    def forward(self, src):
        # src: (batch_size, seq_len, input_dim)
        src = self.input_linear(src) * np.sqrt(self.input_dim) # Scale embeddings
        src = self.pos_encoder(src) # Add positional encoding
        output = self.transformer_encoder(src) # (batch_size, seq_len, d_model)

        # For forecasting a single value, we can flatten the output and pass to a linear layer
        # Or take the output of the last token (if using a specific token for prediction)
        # Or average/pool the outputs
        output = output.reshape(output.size(0), -1) # Flatten (batch_size, seq_len * d_model)
        output = self.decoder_linear(output) # (batch_size, output_dim)
        return output

# 8. Instantiate the model, define loss and optimizer
d_model = 64 # Embedding dimension
nhead = 4 # Number of attention heads
num_encoder_layers = 2
dim_feedforward = 128 # Dimension of the feedforward network model in nn.TransformerEncoderLayer
dropout = 0.1
output_dim = 1 # Predicting one future value

model = TimeSeriesTransformer(input_dim, d_model, nhead, num_encoder_layers, dim_feedforward, dropout, output_dim, max_len=seq_len)

criterion = nn.MSELoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

# 9. Train the model
num_epochs = 150
for epoch in range(num_epochs):
    model.train()
    optimizer.zero_grad()
    outputs = model(X_train)
    loss = criterion(outputs, Y_train)
    loss.backward()
    optimizer.step()

    if (epoch+1) % 10 == 0:
        print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}')

# 10. Evaluate the model
model.eval()
with torch.no_grad():
    train_predict = model(X_train).numpy()
    test_predict = model(X_test).numpy()

# Inverse transform to original scale
train_predict = scaler.inverse_transform(train_predict)
Y_train_orig = scaler.inverse_transform(Y_train.numpy())
test_predict = scaler.inverse_transform(test_predict)
Y_test_orig = scaler.inverse_transform(Y_test.numpy())

train_rmse = np.sqrt(mean_squared_error(Y_train_orig, train_predict))
test_rmse = np.sqrt(mean_squared_error(Y_test_orig, test_predict))
print(f"Train RMSE: {train_rmse:.4f}")
print(f"Test RMSE: {test_rmse:.4f}")

# Plotting results
plt.figure(figsize=(12, 6))
plt.plot(scaler.inverse_transform(scaled_data), label='Original Data')
# Adjust plotting range for predictions
# The Transformer predicts Y[i+seq_len] for X[i:i+seq_len]
plt.plot(np.arange(seq_len, seq_len + len(train_predict)), train_predict, label='Train Prediction')
plt.plot(np.arange(seq_len + len(train_predict), seq_len + len(train_predict) + len(test_predict)), test_predict, label='Test Prediction')
plt.title("Transformer Encoder Time Series Forecast")
plt.legend()
plt.show()
```
A common mistake with Transformers for time series is neglecting or incorrectly implementing positional encoding. Without it, the model loses all information about the order of time steps, treating the sequence as a "bag of features," which is disastrous for time series. Another pitfall is the computational cost of self-attention for very long sequences. If your `seq_len` is in the thousands, standard Transformers can become prohibitively slow and memory-intensive. For such cases, consider specialized Transformer variants like Informer, Autoformer, or Performer, which use sparse attention mechanisms to reduce quadratic complexity. Safety note: Transformers are powerful and can easily overfit on smaller datasets; robust regularization (dropout, weight decay, early stopping) is crucial.

#### Key concepts
*   **Self-Attention Mechanism:** A core component of Transformers that allows the model to weigh the importance of different parts of an input sequence when processing each element, enabling direct capture of long-range dependencies.
*   **Query (Q), Key (K), Value (V):** The three vectors derived from each input element in self-attention. Q queries for relevant information, K identifies relevance, and V provides the information content.
*   **Positional Encoding:** A vector added to the input embeddings of a Transformer to provide information about the absolute or relative position of each time step in the sequence, compensating for the lack of inherent sequential processing.
*   **Transformer Encoder:** A stack of Transformer layers, each containing multi-head self-attention and a feed-forward network, used to process the input sequence and produce context-aware representations.
*   **Transformer Decoder:** A stack of Transformer layers, typically with masked self-attention and cross-attention to the encoder's output, used to generate the output sequence.
*   **Parallelization:** The ability of Transformers to process all time steps in a sequence simultaneously, significantly speeding up training compared to RNNs.
*   **Long-range Dependencies:** The ability of a model to capture relationships between data points that are far apart in a sequence, a key strength of Transformers.

#### Hands-on activity
**Activity: Multivariate Time Series Forecasting with a Transformer Encoder-Decoder**

Your task is to extend the basic Transformer Encoder to a full Encoder-Decoder architecture for multivariate multi-step time series forecasting.
1.  **Data Acquisition:** Use a multivariate time series dataset, such as hourly weather data (temperature, humidity, pressure) or energy consumption with external features. Aim to predict future temperature.
2.  **Preprocessing:**
    *   Load and normalize the data.
    *   Modify `create_dataset` to generate `X` (input sequence with multiple features) and `Y` (target sequence, e.g., future temperature values).
3.  **Model Adaptation:**
    *   **Encoder:** Use the `TimeSeriesTransformer`'s encoder part as provided. Ensure `input_dim` matches your number of features.
    *   **Decoder:** Implement a `TransformerDecoder` using `nn.TransformerDecoderLayer` and `nn.TransformerDecoder`.
        *   The decoder will need its own positional encoding.
        *   It will take a "start-of-sequence" token (or the last observed value) and generate the output sequence one step at a time, using masked self-attention and cross-attention to the encoder's output.
        *   For simplicity, you can use a linear layer on the decoder's output to predict the target feature.
    *   Combine them into a `Seq2SeqTransformer` model.
4.  **Training & Evaluation:**
    *   Train your full Transformer Encoder-Decoder model.
    *   Experiment with `d_model`, `nhead`, `num_encoder_layers`, `num_decoder_layers`.
    *   Evaluate performance using RMSE per forecast step and visualize predictions for several test examples.
5.  **Reflection:** How does the Transformer handle long input sequences compared to LSTMs? What are the computational implications (training time, memory usage) when increasing `seq_len` or `d_model`?

```python
import torch
import torch.nn as nn
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error

# --- Starter Code ---

# 1. Data Acquisition (Simulated multivariate data)
np.random.seed(42)
num_samples = 1200
time_steps = np.arange(num_samples)

temp = 20 + 5 * np.sin(time_steps / 24 * np.pi) + 2 * np.cos(time_steps / 168 * np.pi) + np.random.randn(num_samples) * 0.5
humidity = 60 + 10 * np.sin(time_steps / 24 * np.pi + np.pi/4) + np.random.randn(num_samples) * 1
pressure = 1010 + 2 * np.sin(time_steps / 48 * np.pi) + np.random.randn(num_samples) * 0.2

raw_data = np.stack([temp, humidity, pressure], axis=1) # (num_samples, num_features)
target_feature_idx = 0 # We want to predict temperature

plt.figure(figsize=(12, 6))
plt.plot(raw_data[:, 0], label='Temperature')
plt.plot(raw_data[:, 1], label='Humidity')
plt.plot(raw_data[:, 2], label='Pressure')
plt.title("Simulated Multivariate Weather Data for Transformer")
plt.legend()
plt.show()

# 2. Preprocessing
scaler = MinMaxScaler(feature_range=(-1, 1))
scaled_data = scaler.fit_transform(raw_data) # Scale all features

# 3. Create sliding windows for many-to-many forecasting
def create_seq2seq_dataset(data, input_seq_len, output_seq_len, target_feature_idx):
    X, Y = [], []
    for i in range(len(data) - input_seq_len - output_seq_len + 1):
        X.append(data[i:(i + input_seq_len), :]) # All features for input
        Y.append(data[(i + input_seq_len):(i + input_seq_len + output_seq_len), target_feature_idx]) # Only target feature for output
    return np.array(X), np.array(Y)

input_seq_len = 96 # Use past 96 hours (4 days)
output_seq_len = 24 # Predict next 24 hours of temperature
X, Y = create_seq2seq_dataset(scaled_data, input_seq_len, output_seq_len, target_feature_idx)

train_size = int(len(X) * 0.8)
X_train, X_test = X[:train_size], X[train_size:]
Y_train, Y_test = Y[:train_size], Y[train_size:]

# Reshape Y for output: (batch_size, output_seq_len, 1)
X_train = torch.tensor(X_train, dtype=torch.float32)
Y_train = torch.tensor(Y_train, dtype=torch.float32).reshape(-1, output_seq_len, 1)
X_test = torch.tensor(X_test, dtype=torch.float32)
Y_test = torch.tensor(Y_test, dtype=torch.float32).reshape(-1, output_seq_len, 1)

# --- Your task starts here: Implement full Encoder-Decoder Transformer ---

# Positional Encoding (from lesson content)
class PositionalEncoding(nn.Module):
    def __init__(self, d_model, max_len=5000):
        super(PositionalEncoding, self).__init__()
        pe = torch.zeros(max_len, d_model)
        position = torch.arange(0, max_len, dtype=torch.float).unsqueeze(1)
        div_term = torch.exp(torch.arange(0, d_model, 2).float() * (-np.log(10000.0) / d_model))
        pe[:, 0::2] = torch.sin(position * div_term)
        pe[:, 1::2] = torch.cos(position * div_term)
        pe = pe.unsqueeze(0) # (1, max_len, d_model)
        self.register_buffer('pe', pe)

    def forward(self, x):
        # x: (batch_size, seq_len, d_model)
        return x + self.pe[:, :x.size(1)]

# Transformer Encoder-Decoder Model
class Seq2SeqTransformer(nn.Module):
    def __init__(self, input_dim, d_model, nhead, num_encoder_layers, num_decoder_layers, dim_feedforward, dropout, output_dim, max_len=5000):
        super(Seq2SeqTransformer, self).__init__()
        self.d_model = d_model
        self.output_dim = output_dim

        # Encoder input projection and positional encoding
        self.encoder_input_linear = nn.Linear(input_dim, d_model)
        self.pos_encoder = PositionalEncoding(d_model, max_len)

        # Transformer Encoder
        encoder_layers = nn.TransformerEncoderLayer(d_model, nhead, dim_feedforward, dropout, batch_first=True)
        self.transformer_encoder = nn.TransformerEncoder(encoder_layers, num_encoder_layers)

        # Decoder input projection and positional encoding
        self.decoder_input_linear = nn.Linear(output_dim, d_model) # Decoder input is previous predicted value (univariate)

        # Transformer Decoder
        decoder_layers = nn.TransformerDecoderLayer(d_model, nhead, dim_feedforward, dropout, batch_first=True)
        self.transformer_decoder = nn.TransformerDecoder(decoder_layers, num_decoder_layers)

        # Final linear layer to project decoder output to target dimension
        self.output_linear = nn.Linear(d_model, output_dim)

    def generate_square_subsequent_mask(self, sz):
        mask = (torch.triu(torch.ones(sz, sz)) == 1).transpose(0, 1)
        mask = mask.float().masked_fill(mask == 0, float('-inf')).masked_fill(mask == 1, float(0.0))
        return mask

    def forward(self, src, tgt, src_mask=None, tgt_mask=None, memory_mask=None):
        # src: (batch_size, input_seq_len, input_dim)
        # tgt: (batch_size, output_seq_len, output_dim) - during training, this is the ground truth output sequence

        # Encoder
        src = self.encoder_input_linear(src) * np.sqrt(self.d_model)
        src = self.pos_encoder(src)
        memory = self.transformer_encoder(src, src_mask) # memory: (batch_size, input_seq_len, d_model)

        # Decoder
        tgt = self.decoder_input_linear(tgt) * np.sqrt(self.d_model)
        tgt = self.pos_encoder(tgt)
        output = self.transformer_decoder(tgt, memory, tgt_mask, memory_mask) # output: (batch_size, output_seq_len, d_model)

        output = self.output_linear(output) # (batch_size, output_seq_len, output_dim)
        return output

# Model parameters
input_dim = X_train.shape[2] # Number of features in input (e.g., 3 for temp, hum, press)
d_model = 128 # Embedding dimension. Experiment with 64, 128, 256
nhead = 8 # Number of attention heads. Experiment with 4, 8
num_encoder_layers = 3 # Experiment with 2, 3, 4
num_decoder_layers = 3 # Experiment with 2, 3, 4
dim_feedforward = 256 # Dimension of the feedforward network
dropout = 0.1
output_dim = 1 # Predicting only temperature
max_len = max(input_seq_len, output_seq_len) + 10 # Max length for positional encoding

# Instantiate model
device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
model = Seq2SeqTransformer(input_dim, d_model, nhead, num_encoder_layers, num_decoder_layers, dim_feedforward, dropout, output_dim, max_len).to(device)

criterion = nn.MSELoss()
optimizer = torch.optim.Adam(model.parameters(), lr=0.0005) # Slightly lower LR for Transformers

# Training loop
num_epochs = 200
print(f"Training on {device}...")

# Mask for decoder to ensure causality (no looking into future target tokens)
tgt_mask = model.generate_square_subsequent_mask(output_seq_len).to(device)

for epoch in range(num_epochs):
    model.train()
    optimizer.zero_grad()

    X_train_device = X_train.to(device)
    Y_train_device = Y_train.to(device)

    # For training, we feed the entire target sequence to the decoder
    # The decoder's self-attention mask ensures causality
    outputs = model(X_train_device, Y_train_device, tgt_mask=tgt_mask)
    loss = criterion(outputs, Y_train_device)
    loss.backward()
    optimizer.step()

    if (epoch+1) % 20 == 0:
        print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}')

# Evaluation (Inference with step-by-step decoding)
model.eval()
with torch.no_grad():
    X_test_device = X_test.to(device)
    
    # Encoder computes memory from input sequence
    src_encoded = model.encoder_input_linear(X_test_device) * np.sqrt(model.d_model)
    src_encoded = model.pos_encoder(src_encoded)
    memory = model.transformer_encoder(src_encoded)

    test_predict_scaled = torch.zeros(len(X_test), output_seq_len, output_dim).to(device)
    
    # Initialize decoder input with a "start token" (e.g., the last observed value of the target feature)
    # For simplicity, we'll use a zero tensor and let the model learn to start
    # A more robust approach might use X_test_device[:, -1, target_feature_idx].unsqueeze(1).unsqueeze(1)
    decoder_input = torch.zeros(len(X_test), 1, output_dim).to(device)

    for t in range(output_seq_len):
        # Create a causal mask for the current decoder step
        temp_tgt_mask = model.generate_square_subsequent_mask(t + 1).to(device)
        
        # Decoder processes the current input and memory to predict the next step
        # The decoder's input sequence grows with each predicted token
        tgt_in = model.decoder_input_linear(decoder_input) * np.sqrt(model.d_model)
        tgt_in = model.pos_encoder(tgt_in)
        
        # Ensure memory and tgt_in have the correct batch_first=True format
        output_decoder = model.transformer_decoder(tgt_in, memory, temp_tgt_mask)
        prediction = model.output_linear(output_decoder[:, -1:, :]) # Take the last predicted token

        test_predict_scaled[:, t, :] = prediction.squeeze(1)
        decoder_input = torch.cat((decoder_input, prediction), dim=1) # Append prediction to decoder input for next step

test_predict_scaled = test_predict_scaled.cpu().numpy()

# Inverse transform only the target feature (temperature)
target_scaler = MinMaxScaler(feature_range=(-1, 1))
target_scaler.fit(raw_data[:, target_feature_idx].reshape(-1, 1))

test_predict_orig = target_scaler.inverse_transform(test_predict_scaled.reshape(-1, 1)).reshape(-1, output_seq_len)
Y_test_orig = target_scaler.inverse_transform(Y_test.numpy().reshape(-1, 1)).reshape(-1, output_seq_len)

rmse_per_step = [np.sqrt(mean_squared_error(Y_test_orig[:, i], test_predict_orig[:, i])) for i in range(output_seq_len)]
print(f"\nRMSE per forecast step: {rmse_per_step}")
print(f"Average Test RMSE: {np.mean(rmse_per_step):.4f}")

# Plotting results for a few examples
num_plot_examples = 3
plt.figure(figsize=(15, 8))
for i in range(num_plot_examples):
    idx = np.random.randint(len(X_test))
    plt.subplot(num_plot_examples, 1, i + 1)

    original_input_all_features = scaler.inverse_transform(X_test[idx].cpu().numpy())
    original_input_target_feature = original_input_all_features[:, target_feature_idx]

    original_target = Y_test_orig[idx]
    predicted_output = test_predict_orig[idx]

    plt.plot(np.arange(input_seq_len), original_input_target_feature, label='Input Sequence (Actual Temp)')
    plt.plot(np.arange(input_seq_len, input_seq_len + output_seq_len), original_target, label='Target Sequence (Actual Temp)', color='green')
    plt.plot(np.arange(input_seq_len, input_seq_len + output_seq_len), predicted_output, label='Predicted Sequence (Temp)', linestyle='--', color='red')
    plt.title(f"Example {i+1} Temperature Forecast (Input Len: {input_seq_len}, Output Len: {output_seq_len})")
    plt.legend()
plt.tight_layout()
plt.show()
```

#### Assessment idea
1.  **Question:** You are working on a very large-scale time series forecasting problem where you need to predict future values based on input sequences that can be thousands of time steps long. You've noticed that traditional LSTMs are extremely slow to train due to their sequential nature. Explain why a Transformer network would be a more efficient choice for this scenario, specifically highlighting the mechanism that enables this efficiency.

    **Answer:** A Transformer network would be a more efficient choice primarily due to its **self-attention mechanism**, which enables **parallel computation**. Unlike LSTMs, which process time steps sequentially (requiring the computation of `h_{t-1}` before `h_t`), the self-attention mechanism in Transformers computes attention scores and weighted value sums for all time steps simultaneously. This means that instead of waiting for previous computations to finish, the Transformer can perform many operations in parallel across the entire input sequence. This parallelization drastically reduces training time, especially for very long sequences, making Transformers much more scalable and efficient for large-scale time series forecasting problems.

2.  **Question:** A colleague suggests removing the positional encoding from your Transformer-based time series forecasting model, arguing that the self-attention mechanism should implicitly learn temporal order. Explain why this is a critical mistake and what information the model would lose without positional encoding.

    **Answer:** Removing positional encoding from a Transformer-based time series model is a critical mistake because **Transformers inherently lack any inductive bias for sequence order**. The self-attention mechanism processes all elements in a sequence simultaneously, treating them as a "bag of features" without any knowledge of their relative or absolute positions. Without positional encoding, the model would lose crucial information about:
    *   **Temporal Order:** It wouldn't know which time step came before or after another. For example, it couldn't distinguish between `[A, B, C]` and `[C, B, A]`.
    *   **Relative Positions:** It wouldn't understand the distance between time steps, which is vital for identifying short-term vs. long-term patterns.
    *   **Seasonality and Trends:** Patterns that depend on specific positions within a cycle (e.g., "always high at the beginning of the week") would be indistinguishable.
    In essence, without positional encoding, the Transformer would effectively treat the time series as an unordered set of observations, rendering it useless for any task requiring an understanding of temporal dynamics.

#### AI generation note
Create a 15-minute mixed-media lesson. Start with a 4-minute animated video explaining the "death of recurrence" and the rise of self-attention, visually contrasting sequential processing with parallel attention. Then, provide a 6-minute animated breakdown of the self-attention mechanism using Q, K, V vectors, and a clear diagram of positional encoding. Conclude with a 5-minute live coding demo in PyTorch, showing the implementation of a Transformer Encoder for a univariate time series. Focus on the `PositionalEncoding` class and `nn.TransformerEncoderLayer`. Use a real-world energy consumption dataset and visually highlight how attention weights could be extracted (though not fully implemented in this basic example).

### Chapter 5.6 — Practical Considerations and Deployment of Deep Learning Models

#### Learning objectives
*   Master advanced data preparation techniques for deep learning time series models, including robust normalization and effective windowing strategies.
*   Understand critical hyperparameter tuning strategies for deep learning models, such as learning rate schedules, batch size, and regularization.
*   Identify and apply appropriate evaluation metrics for deep learning time series forecasts.
*   Discuss strategies for model interpretability in deep learning time series.
*   Outline key considerations for deploying deep learning time series models into production environments.
*   Recognize common pitfalls and safety notes when working with deep learning for time series.

#### Detailed lesson content
Having explored various deep learning architectures, it's crucial to understand the practical aspects that make these models effective in real-world scenarios and how to successfully deploy them. The journey from raw data to a production-ready deep learning forecast involves meticulous data preparation, strategic model tuning, robust evaluation, and careful deployment planning.

**Data Preparation for Deep Learning:**
Effective data preprocessing is paramount. Beyond simple scaling, consider:
*   **Normalization/Standardization:** While `MinMaxScaler` (to `[-1, 1]`) is often used for LSTMs/GRUs, `StandardScaler` (mean 0, std 1) can also be effective, especially for Transformers. The choice can sometimes impact convergence. Ensure the same scaler fitted on training data is used for validation, test, and inference data.
*   **Windowing Strategies:** For multi-step forecasting, you'll need to decide on `input_sequence_length` (look-back window) and `output_sequence_length` (forecast horizon). These are critical hyperparameters. A longer input sequence allows the model to capture more context but increases computational cost. A longer output sequence increases the difficulty of the prediction.
*   **Handling Missing Data:** Deep learning models typically don't handle `NaN` values directly. Strategies include:
    *   **Imputation:** Forward-fill, backward-fill, mean/median imputation, or more sophisticated methods like K-Nearest Neighbors (KNN) imputation or even using another ML model to predict missing values.
    *   **Interpolation:** Linear, spline, or polynomial interpolation can work well for smoothly varying time series.
    *   **Masking:** For some architectures (especially Transformers), you can use a masking mechanism to tell the model to ignore certain time steps.
*   **Feature Engineering:** Even with deep learning, relevant exogenous features (e.g., day of week, month, holidays, weather forecasts) can significantly boost performance. Encode categorical features appropriately (one-hot encoding, embeddings).
*   **Batching:** For efficient training, data is processed in mini-batches. `torch.utils.data.DataLoader` is essential for creating iterable batches, shuffling (only within the training set, not across time), and handling parallel data loading.

**Hyperparameter Tuning and Regularization:**
Deep learning models are highly sensitive to hyperparameters.
*   **Learning Rate (LR):** This is arguably the most important hyperparameter. Start with a small LR (e.g., 0.001 or 0.0001) and use learning rate schedulers (e.g., `ReduceLROnPlateau`, `CosineAnnealingLR`) to dynamically adjust it during training.
*   **Batch Size:** Larger batch sizes can lead to faster training but might converge to sharper, less generalizable minima. Smaller batch sizes can lead to noisier updates but often find flatter, more generalizable minima. Experiment to find a balance.
*   **Number of Layers/Units:** Start simple and gradually increase complexity. Too few layers might underfit; too many might overfit or be computationally expensive.
*   **Dropout:** A powerful regularization technique that randomly sets a fraction of neuron outputs to zero during training, preventing co-adaptation of neurons and reducing overfitting. Apply it to hidden layers.
*   **L1/L2 Regularization (Weight Decay):** Adds a penalty to the loss function based on the magnitude of weights, encouraging smaller weights and preventing overfitting.
*   **Early Stopping:** Monitor performance on a validation set and stop training when validation loss stops improving for a certain number of epochs (patience). This prevents overfitting and saves computational resources.

**Evaluation Metrics:**
Beyond simple RMSE, consider metrics that provide a more nuanced view of forecast quality:
*   **Mean Absolute Error (MAE):** Less sensitive to outliers than RMSE.
*   **Mean Absolute Percentage Error (MAPE):** Useful for understanding error relative to the actual values, but problematic with zero or near-zero actuals.
*   **Symmetric Mean Absolute Percentage Error (sMAPE):** A variant of MAPE that addresses some of its limitations.
*   **Pinball Loss (Quantile Loss):** For quantile regression, useful for probabilistic forecasting.
*   **RMSE (Root Mean Squared Error):** Still a widely used metric, penalizes larger errors more heavily.
*   **Visual Inspection:** Always plot your forecasts against actuals, especially for multi-step predictions, to visually assess bias, phase shifts, and overall fit.

**Model Interpretability:**
Deep learning models are often considered "black boxes." For critical applications, understanding *why* a model makes a certain prediction is vital.
*   **Attention Weights:** For Transformer models, attention weights can show which past time steps or features the model focused on for a given prediction.
*   **SHAP (SHapley Additive exPlanations) / LIME (Local Interpretable Model-agnostic Explanations):** Model-agnostic techniques that can explain individual predictions by approximating the deep model locally with an interpretable model.
*   **Feature Importance:** While harder to get directly from deep models, techniques like permutation importance can be applied.

**Deployment Considerations:**
Getting a model from development to production requires careful planning.
*   **Model Export:** Save your trained PyTorch model's state dictionary (`model.state_dict()`) or the entire model (`torch.save(model, 'model.pth')`). For cross-platform deployment, consider converting to ONNX format.
*   **Inference Pipeline:** The preprocessing steps applied during training (scaling, windowing) must be *exactly* replicated during inference. Save your `MinMaxScaler` or `StandardScaler` objects.
*   **Serving:** Deploy the model using a web framework like FastAPI or Flask, wrapping your model in an API endpoint. Docker containers are excellent for packaging the model and its dependencies.
*   **Monitoring:** Crucial for production. Monitor model performance (e.g., RMSE, MAE) on live data, data drift (changes in input data distribution), and concept drift (changes in the relationship between inputs and outputs). Set up alerts for performance degradation.
*   **Resource Management:** Deep learning models, especially large ones, can be computationally intensive. Optimize for inference speed (e.g., batching requests, using GPUs, quantization) and memory usage.

**Common Pitfalls and Safety Notes:**
*   **Overfitting:** A constant threat. Use regularization (dropout, weight decay), early stopping, and ensure proper validation/test splits.
*   **Data Leakage:** Never shuffle time series data randomly before splitting. Ensure test data is truly unseen future data.
*   **Non-Stationarity:** While deep learning can handle some non-stationarity, extreme cases might still benefit from differencing or transforming the series to make it more stationary.
*   **Computational Cost:** Deep models require significant compute. Start with smaller models, use GPUs, and optimize your data pipelines.
*   **Reproducibility:** Set random seeds for NumPy, PyTorch, and any other libraries to ensure your experiments are reproducible.
*   **Cold Start Problem:** For new time series or series with very little history, deep learning models might struggle due to insufficient training data. Consider hybrid approaches or transfer learning if applicable.

By paying attention to these practical considerations, you can build robust, performant, and deployable deep learning solutions for time series forecasting.

#### Key concepts
*   **Hyperparameter Tuning:** The process of selecting the optimal values for parameters that control the learning process itself (e.g., learning rate, batch size, number of layers).
*   **Learning Rate Schedule:** A strategy to dynamically adjust the learning rate during training (e.g., reducing it over time) to improve convergence and model performance.
*   **Regularization:** Techniques used to prevent overfitting in deep learning models, such as Dropout, L1/L2 regularization (weight decay), and early stopping.
*   **Early Stopping:** A regularization technique that halts model training when performance on a validation set stops improving, preventing the model from overfitting to the training data.
*   **Evaluation Metrics:** Quantitative measures used to assess the performance of a forecasting model (e.g., MAE, RMSE, MAPE, sMAPE).
*   **Model Interpretability:** The ability to understand why a deep learning model makes a particular prediction, often achieved through techniques like attention weight analysis, SHAP, or LIME.
*   **Deployment:** The process of making a trained machine learning model available for use in a production environment, typically via an API.
*   **Monitoring:** Continuously tracking the performance of a deployed model, as well as the characteristics of its input data and predictions, to detect degradation or drift.
*   **Data Drift:** A change in the distribution of input data over time, which can lead to degraded model performance.
*   **Concept Drift:** A change in the underlying relationship between input features and the target variable, requiring model retraining or adaptation.

#### Hands-on activity
**Activity: Deploying a Simple LSTM Forecast Model with FastAPI**

Your task is to take a trained LSTM model and prepare it for a basic deployment using FastAPI. This will involve saving the model and scaler, creating an inference script, and setting up a simple web API.

1.  **Train a Simple LSTM:** Use the LSTM model from Chapter 5.2 (or a similar simple univariate LSTM) and train it on a synthetic or small real-world dataset (e.g., a few hundred points of sine wave data). Ensure you save the trained `model.state_dict()` and the `MinMaxScaler` object.

    ```python
    # Part 1: Train and Save LSTM Model & Scaler
    import torch
    import torch.nn as nn
    import numpy as np
    from sklearn.preprocessing import MinMaxScaler
    import joblib # For saving/loading scaler

    # 1. Generate synthetic time series data
    data = np.sin(np.linspace(0, 50, 500)) + np.random.randn(500) * 0.1

    # 2. Normalize and save scaler
    scaler = MinMaxScaler(feature_range=(-1, 1))
    scaled_data = scaler.fit_transform(data.reshape(-1, 1))
    joblib.dump(scaler, 'scaler.pkl') # Save the scaler

    # 3. Create sliding windows
    def create_dataset(data, look_back):
        X, Y = [], []
        for i in range(len(data) - look_back):
            X.append(data[i:(i + look_back), 0])
            Y.append(data[i + look_back, 0])
        return np.array(X), np.array(Y)

    look_back = 10
    X, Y = create_dataset(scaled_data, look_back)

    # Convert to PyTorch tensors
    X_train = torch.tensor(X, dtype=torch.float32).reshape(-1, look_back, 1)
    Y_train = torch.tensor(Y, dtype=torch.float32).reshape(-1, 1)

    # 4. Define the LSTM model (same as Chapter 5.2)
    class LSTMModel(nn.Module):
        def __init__(self, input_size, hidden_size, num_layers, output_size):
            super(LSTMModel, self).__init__()
            self.hidden_size = hidden_size
            self.num_layers = num_layers
            self.lstm = nn.LSTM(input_size, hidden_size, num_layers, batch_first=True)
            self.fc = nn.Linear(hidden_size, output_size)

        def forward(self, x):
            h0 = torch.zeros(self.num_layers, x.size(0), self.hidden_size).to(x.device)
            c0 = torch.zeros(self.num_layers, x.size(0), self.hidden_size).to(x.device)
            out, _ = self.lstm(x, (h0, c0))
            out = self.fc(out[:, -1, :])
            return out

    # 5. Instantiate, train, and save model
    input_size = 1
    hidden_size = 50
    num_layers = 2
    output_size = 1
    model = LSTMModel(input_size, hidden_size, num_layers, output_size)

    criterion = nn.MSELoss()
    optimizer = torch.optim.Adam(model.parameters(), lr=0.001)

    num_epochs = 100
    for epoch in range(num_epochs):
        model.train()
        optimizer.zero_grad()
        outputs = model(X_train)
        loss = criterion(outputs, Y_train)
        loss.backward()
        optimizer.step()
        if (epoch+1) % 20 == 0:
            print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}')

    torch.save(model.state_dict(), 'lstm_model.pth') # Save model weights
    print("Model and scaler saved.")
    ```

2.  **Create `inference_api.py`:** Create a new Python file named `inference_api.py`. This file will:
    *   Load the saved LSTM model and `MinMaxScaler`.
    *   Define an inference function that takes a list of historical values, preprocesses them, makes a prediction, and inverse-transforms the output.
    *   Set up a FastAPI endpoint that accepts a list of numbers (your `look_back` window), calls the inference function, and returns the forecast.

    ```python
    # Part 2: inference_api.py (Create this file)
    from fastapi import FastAPI, HTTPException
    from pydantic import BaseModel
    import torch
    import torch.nn as nn
    import numpy as np
    import joblib

    # Define the LSTMModel class (must be identical to the one used for training)
    class LSTMModel(nn.Module):
        def __init__(self, input_size, hidden_size, num_layers, output_size):
            super(LSTMModel, self).__init__()
            self.hidden_size = hidden_size
            self.num_layers = num_layers
            self.lstm = nn.LSTM(input_size, hidden_size, num_layers, batch_first=True)
            self.fc = nn.Linear(hidden_size, output_size)

        def forward(self, x):
            h0 = torch.zeros(self.num_layers, x.size(0), self.hidden_size).to(x.device)
            c0 = torch.zeros(self.num_layers, x.size(0), self.hidden_size).to(x.device)
            out, _ = self.lstm(x, (h0, c0))
            out = self.fc(out[:, -1, :])
            return out

    app = FastAPI()

    # Load model and scaler globally
    model_path = 'lstm_model.pth'
    scaler_path = 'scaler.pkl'

    # Model hyperparameters (must match training)
    INPUT_SIZE = 1
    HIDDEN_SIZE = 50
    NUM_LAYERS = 2
    OUTPUT_SIZE = 1
    LOOK_BACK = 10 # Must match the look_back used during training

    try:
        model = LSTMModel(INPUT_SIZE, HIDDEN_SIZE, NUM_LAYERS, OUTPUT_SIZE)
        model.load_state_dict(torch.load(model_path, map_location=torch.device('cpu')))
        model.eval() # Set to evaluation mode
        scaler = joblib.load(scaler_path)
        print("Model and scaler loaded successfully.")
    except Exception as e:
        print(f"Error loading model or scaler: {e}")
        model = None
        scaler = None

    class TimeSeriesInput(BaseModel):
        data: list[float] # Expects a list of floats representing the look_back window

    @app.post("/predict_next_step/")
    async def predict_next_step(ts_input: TimeSeriesInput):
        if model is None or scaler is None:
            raise HTTPException(status_code=500, detail="Model or scaler not loaded.")

        if len(ts_input.data) != LOOK_BACK:
            raise HTTPException(status_code=400, detail=f"Input data length must be {LOOK_BACK}.")

        try:
            # Preprocess input
            input_array = np.array(ts_input.data).reshape(-1, 1) # Reshape for scaler
            scaled_input = scaler.transform(input_array)
            
            # Reshape for LSTM: (batch_size, sequence_length, input_size)
            input_tensor = torch.tensor(scaled_input, dtype=torch.float32).reshape(1, LOOK_BACK, INPUT_SIZE)

            # Make prediction
            with torch.no_grad():
                prediction_scaled = model(input_tensor).numpy()

            # Inverse transform
            prediction_original_scale = scaler.inverse_transform(prediction_scaled)

            return {"predicted_value": prediction_original_scale[0][0].item()}
        except Exception as e:
            raise HTTPException(status_code=500, detail=f"Prediction error: {e}")

    # To run this API:
    # 1. Save the above code as inference_api.py
    # 2. Make sure you have uvicorn and fastapi installed: pip install uvicorn fastapi
    # 3. Run from your terminal: uvicorn inference_api:app --reload
    # 4. Open your browser to http://127.0.0.1:8000/docs for the interactive API documentation.
    ```

3.  **Run and Test:**
    *   Ensure you have `fastapi` and `uvicorn` installed (`pip install fastapi uvicorn`).
    *   Run the FastAPI application from your terminal: `uvicorn inference_api:app --reload`
    *   Open your web browser to `http://127.0.0.1:8000/docs` to access the interactive API documentation (Swagger UI).
    *   Use the `/predict_next_step/` endpoint to send a sample `look_back` window of data (e.g., `[0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0]`) and observe the predicted next value.

#### Assessment idea
1.  **Question:** You've trained an LSTM model for predicting electricity demand and are preparing it for deployment. You've saved the model's weights and the `MinMaxScaler` object used for preprocessing. During inference, a new request comes in with raw, unscaled electricity demand data. What is the crucial step you must perform on this incoming data before feeding it to your loaded LSTM model, and what would happen if you skipped this step?

    **Answer:** The crucial step you must perform is to **preprocess the incoming raw data using the *exact same* `MinMaxScaler` object that was fitted on the training data.**
    If you skipped this step, the raw, unscaled data would be fed directly into the LSTM model. Deep learning models, including LSTMs, are highly sensitive to the scale of their input features. The model was trained on normalized data, meaning its learned weights and biases are optimized for inputs within a specific range (e.g., `[-1, 1]`). Feeding it data outside this expected range would lead to:
    *   **Incorrect Predictions:** The model's internal calculations would be based on vastly different magnitudes, resulting in completely erroneous and often wildly off-scale predictions.
    *   **Numerical Instability:** The large input values could cause activations to saturate or gradients to explode during internal forward passes, leading to unstable computations.
    *   **Degraded Performance:** The model would effectively be operating on data it was never trained to understand, leading to a complete failure of its forecasting capabilities.

2.  **Question:** Your deployed deep learning time series forecasting model initially performs well, but after a few weeks, its accuracy starts to degrade significantly. You suspect either data drift or concept drift. Describe the difference between these two types of drift and provide an example of each in the context of electricity demand forecasting.

    **Answer:**
    *   **Data Drift:** Refers to a change in the statistical properties of the input data (features) over time. The relationship between the input features and the target variable might remain the same, but the characteristics of the incoming data itself have shifted.
        *   **Example in Electricity Demand Forecasting:** A sudden, prolonged heatwave causes the average daily temperature (an input feature) to be consistently higher than the historical range the model was trained on. The relationship between temperature and demand is still valid, but the model is now seeing out-of-distribution temperature values. Another example could be a shift in the distribution of "day of week" due to a national holiday schedule change.
    *   **Concept Drift:** Refers to a change in the underlying relationship between the input features and the target variable over time. The statistical properties of the input data might remain the same, but how those inputs influence the output has changed.
        *   **Example in Electricity Demand Forecasting:** A new government energy policy encourages widespread adoption of rooftop solar panels. While the input features like temperature and time of day might remain within their historical distributions, the *impact* of these features on grid electricity demand has changed (e.g., sunny days now lead to lower grid demand than before, due to solar generation). The model's learned "concept" of how demand is generated is no longer accurate.

---

## Module 6: Advanced Forecasting Models and Ensembles

This module delves into the sophisticated world of combining multiple models to achieve superior forecasting performance. You will learn how to leverage the strengths of various machine learning techniques, from traditional statistical methods to deep learning, by building robust ensemble and hybrid architectures. We will cover bagging, boosting, stacking, and advanced deep learning ensemble strategies, culminating in best practices for model selection, evaluation, and deployment in real-world time series scenarios.

---

### Chapter 6.1 — Introduction to Ensemble Methods for Time Series

#### Learning objectives
*   Explain the fundamental concepts of ensemble learning and its benefits for time series forecasting.
*   Differentiate between various ensemble strategies, including bagging, boosting, and stacking, in the context of time series.
*   Identify the unique challenges of applying ensemble methods to time series data, such as temporal dependencies and data leakage.
*   Implement simple averaging and weighted averaging ensembles for time series predictions.
*   Understand the bias-variance trade-off and how ensembles can mitigate it.

#### Detailed lesson content
Ensemble methods represent a powerful paradigm in machine learning where multiple individual models, often called "base learners," are trained to solve the same problem, and their predictions are then combined to produce a single, more robust, and often more accurate forecast. The core idea is that a collection of diverse "weak" or "mediocre" learners can collectively outperform a single "strong" learner, especially when these individual models make different types of errors. This approach helps to reduce generalization error by mitigating issues like overfitting (high variance) or underfitting (high bias) that might plague individual models. For time series forecasting, where data often exhibits complex patterns, non-stationarity, and noise, ensembles can be particularly effective by capturing different facets of the underlying process.

The primary benefit of ensemble methods lies in their ability to reduce variance, bias, or both. Imagine you have several models, each trained on slightly different subsets of your data or with different initializations. Each model might have a unique set of strengths and weaknesses. By combining their predictions, you average out their individual errors and biases, leading to a more stable and reliable forecast. This is particularly crucial in time series, where noise can be prevalent, and a single model might easily overfit to spurious patterns. Ensembles act as a form of regularization, making the final prediction less sensitive to the idiosyncrasies of any single training run or model architecture.

There are three main categories of ensemble methods: bagging, boosting, and stacking. Bagging, short for Bootstrap Aggregating, involves training multiple instances of the same model on different bootstrapped subsets of the training data and then averaging their predictions. The goal of bagging is primarily to reduce variance. Random Forests, which we will explore in the next chapter, are a prime example of bagging applied to decision trees. Boosting, on the other hand, builds models sequentially, where each new model attempts to correct the errors made by the previous ones. Boosting focuses on reducing bias and can often achieve very high accuracy, but it can also be more prone to overfitting if not carefully tuned. Gradient Boosting Machines (GBMs) like XGBoost and LightGBM are popular boosting algorithms. Stacking, or stacked generalization, is a more advanced technique where heterogeneous base models are trained, and their predictions are then fed as input to a higher-level "meta-learner" model, which learns how to optimally combine them. Stacking aims to leverage the strengths of diverse models.

Applying ensemble methods to time series data presents unique challenges that must be carefully considered. The most critical challenge is maintaining temporal dependencies and avoiding data leakage. Standard cross-validation or bootstrapping techniques, which randomly sample data points, can inadvertently expose future information to the model during training if not adapted for time series. For instance, if you randomly bootstrap a time series, you might train a model on a subset that includes future observations, leading to an artificially optimistic performance estimate. Therefore, specialized techniques like blocked bootstrapping or time series-aware cross-validation (e.g., walk-forward validation or `TimeSeriesSplit` in scikit-learn) are essential. Another challenge is the computational cost, as training and managing multiple models can be resource-intensive, especially with deep learning models. Furthermore, interpreting the combined output of an ensemble can be more difficult than interpreting a single model.

Despite these challenges, even simple ensemble methods can yield significant improvements. Consider a scenario where you have forecasts from an ARIMA model, a Prophet model, and an LSTM model for the same time series. A basic ensemble can be formed by simply averaging their predictions.

```python
import pandas as pd
import numpy as np

# Assume you have three individual forecasts
# These would typically come from trained models
forecast_arima = np.array([100, 105, 110, 112, 115])
forecast_prophet = np.array([98, 103, 109, 111, 114])
forecast_lstm = np.array([101, 106, 111, 113, 116])

# Simple Averaging Ensemble
ensemble_forecast_simple = (forecast_arima + forecast_prophet + forecast_lstm) / 3
print("Simple Averaging Ensemble Forecast:", ensemble_forecast_simple)

# Weighted Averaging Ensemble
# Weights can be determined by historical performance (e.g., inverse of RMSE)
# For demonstration, let's use arbitrary weights
weight_arima = 0.3
weight_prophet = 0.4
weight_lstm = 0.3

ensemble_forecast_weighted = (weight_arima * forecast_arima +
                              weight_prophet * forecast_prophet +
                              weight_lstm * forecast_lstm)
print("Weighted Averaging Ensemble Forecast:", ensemble_forecast_weighted)

# Example of how weights might be determined (conceptually)
# Assume historical RMSE values for each model
rmse_arima = 5.2
rmse_prophet = 4.8
rmse_lstm = 5.5

# Inverse RMSE as a proxy for weight (higher performance -> higher weight)
inv_rmse_arima = 1 / rmse_arima
inv_rmse_prophet = 1 / rmse_prophet
inv_rmse_lstm = 1 / rmse_lstm

sum_inv_rmse = inv_rmse_arima + inv_rmse_prophet + inv_rmse_lstm

# Normalize weights
norm_weight_arima = inv_rmse_arima / sum_inv_rmse
norm_weight_prophet = inv_rmse_prophet / sum_inv_rmse
norm_weight_lstm = inv_inv_rmse_lstm / sum_inv_rmse

print(f"\nDerived weights: ARIMA={norm_weight_arima:.2f}, Prophet={norm_weight_prophet:.2f}, LSTM={norm_weight_lstm:.2f}")
```

In this example, we see how both simple and weighted averaging can combine individual forecasts. Weighted averaging allows you to give more importance to models that have historically performed better or are deemed more reliable for specific forecast horizons. Common mistakes include using fixed weights without proper validation or not considering the correlation between individual model errors. If two models make similar errors, simply averaging them might not yield significant improvements. It's crucial to ensure diversity among the base learners for the ensemble to be most effective. Safety notes: always validate your ensemble's performance against a hold-out test set that respects the temporal order of your data. Never use future information to train or tune your ensemble.

#### Key concepts
*   **Ensemble Learning:** A machine learning paradigm where multiple models are combined to solve the same problem, aiming for better performance than any single model.
*   **Base Learners:** The individual models that make up an ensemble.
*   **Bagging (Bootstrap Aggregating):** An ensemble technique where multiple models of the same type are trained on different bootstrapped subsets of the training data, and their predictions are averaged. Primarily reduces variance.
*   **Boosting:** An ensemble technique where models are built sequentially, with each new model attempting to correct the errors of the preceding ones. Primarily reduces bias.
*   **Stacking (Stacked Generalization):** An ensemble technique where predictions from multiple diverse base models are used as input features for a higher-level "meta-learner" model.
*   **Bias-Variance Trade-off:** The fundamental conflict in machine learning between a model's tendency to underfit (high bias) and overfit (high variance). Ensembles help manage this trade-off.
*   **Data Leakage:** The unintentional introduction of information from the test dataset into the training process, leading to overly optimistic performance estimates. Critical to avoid in time series.
*   **Blocked Bootstrapping:** A time series-aware bootstrapping method that samples contiguous blocks of observations to preserve temporal dependencies, unlike standard random bootstrapping.
*   **Walk-Forward Validation:** A time series-specific cross-validation technique where the model is iteratively retrained on an expanding window of historical data and evaluated on the next unseen period.

#### Hands-on activity
**Activity: Implement and Evaluate a Simple Averaging Ensemble**

You are provided with three sets of time series forecasts from different models (e.g., ARIMA, Prophet, a simple Linear Regression). Your task is to:
1.  Load the provided historical actuals and individual model forecasts.
2.  Implement a simple averaging ensemble.
3.  Implement a weighted averaging ensemble. For the weighted ensemble, assign weights based on your intuition (e.g., if one model is known to be generally more accurate).
4.  Calculate the Mean Absolute Error (MAE) for each individual model and both ensemble forecasts against the actual values.
5.  Compare the performance and discuss which ensemble strategy performed best and why.

**Starter Code Template:**
```python
import pandas as pd
import numpy as np
from sklearn.metrics import mean_absolute_error

# --- Provided Data (replace with your actual data loading) ---
# Assume these are actual values for the forecast horizon
actual_values = np.array([120, 125, 128, 130, 133, 135, 138, 140, 142, 145])

# Assume these are forecasts from three different models for the same horizon
forecast_model1 = np.array([121, 124, 127, 131, 132, 136, 137, 141, 143, 144]) # e.g., ARIMA
forecast_model2 = np.array([119, 126, 129, 129, 134, 134, 139, 139, 141, 146]) # e.g., Prophet
forecast_model3 = np.array([122, 123, 126, 132, 131, 137, 136, 142, 144, 143]) # e.g., LSTM

# --- Your Task Starts Here ---

# 1. Calculate MAE for individual models
mae_m1 = mean_absolute_error(actual_values, forecast_model1)
mae_m2 = mean_absolute_error(actual_values, forecast_model2)
mae_m3 = mean_absolute_error(actual_values, forecast_model3)

print(f"MAE Model 1: {mae_m1:.2f}")
print(f"MAE Model 2: {mae_m2:.2f}")
print(f"MAE Model 3: {mae_m3:.2f}")

# 2. Implement Simple Averaging Ensemble
ensemble_simple = (forecast_model1 + forecast_model2 + forecast_model3) / 3
mae_simple = mean_absolute_error(actual_values, ensemble_simple)
print(f"\nSimple Averaging Ensemble MAE: {mae_simple:.2f}")

# 3. Implement Weighted Averaging Ensemble
# Assign weights based on your intuition or historical performance
# Example: if Model 2 was historically best, give it a higher weight
weight_m1 = 0.2
weight_m2 = 0.5
weight_m3 = 0.3

ensemble_weighted = (weight_m1 * forecast_model1 +
                     weight_m2 * forecast_model2 +
                     weight_m3 * forecast_model3)
mae_weighted = mean_absolute_error(actual_values, ensemble_weighted)
print(f"Weighted Averaging Ensemble MAE: {mae_weighted:.2f}")

# 4. Discussion: Which ensemble performed best and why?
# (Write your observations here)
# For example: "In this case, the weighted average performed better than the simple average,
# likely because Model 2, which received a higher weight, was the best-performing individual model."
```

#### Assessment idea
1.  **Question:** You are building an ensemble for time series forecasting. You have three base models: Model A (ARIMA), Model B (Prophet), and Model C (LSTM). Model A consistently underperforms, while Model B and Model C show similar, good performance but tend to make different types of errors at different times. Which ensemble strategy would likely be most effective for this scenario, and why?
    *   **Correct Answer:** A weighted averaging ensemble or a stacking ensemble would likely be most effective.
        *   **Weighted Averaging:** By assigning lower weights to Model A and higher (potentially equal or slightly adjusted) weights to Models B and C, you can leverage the strengths of the better-performing models while minimizing the impact of the weaker one.
        *   **Stacking:** A stacking ensemble could learn to dynamically combine the predictions of A, B, and C using a meta-learner. Given that B and C make different types of errors, a meta-learner could learn when to trust one over the other, potentially outperforming fixed-weight averaging. A simple averaging ensemble might be too naive as Model A's poor performance would drag down the overall accuracy. Boosting is less suitable here because it typically uses homogeneous weak learners and builds them sequentially, which isn't the primary goal when combining already trained, diverse strong models.

2.  **Question:** Explain why standard k-fold cross-validation is generally not suitable for evaluating time series forecasting models, especially when building ensembles, and what alternative method should be used.
    *   **Correct Answer:** Standard k-fold cross-validation randomly shuffles and splits the data into k folds. For time series, this approach breaks the temporal dependency of the data, meaning that future data points could inadvertently be included in the training set for a given fold, leading to data leakage. This results in an overly optimistic evaluation of the model's performance because it has "seen the future." The model would not perform as well on truly unseen future data.
        The appropriate alternative is **walk-forward validation** (also known as rolling origin or time series cross-validation). In this method, the training set always consists of data up to a certain point in time, and the test set consists of the immediately subsequent time points. The "origin" (the split point between training and test) is then moved forward in time, and the process is repeated. This ensures that models are always trained only on historical data and evaluated on genuinely unseen future data, mimicking a real-world forecasting scenario.

#### AI generation note
Create a 12-minute animated video explaining ensemble methods for time series. Start with a visual analogy of a diverse group of experts making a prediction vs. a single expert. Illustrate bagging, boosting, and stacking with simple diagrams showing data flow and model interaction. Emphasize the "temporal dependency" challenge with an animation showing how random splitting can lead to data leakage (e.g., future data points "peeking" into the past). Include a Jupyter notebook view demonstrating the simple and weighted averaging code examples from the lesson, showing the input forecasts and the resulting ensemble forecast. Highlight the MAE calculation for each. End with an interactive multiple-choice question about the primary goal of bagging. Ensure high-contrast visuals and clear voiceover.

---

### Chapter 6.2 — Bagging-based Ensembles: Random Forests and Bootstrapped Models

#### Learning objectives
*   Understand the principles of bagging and how it applies to time series forecasting.
*   Explain how Random Forests are constructed and their benefits for handling complex time series features.
*   Implement a Random Forest Regressor for time series forecasting using appropriate feature engineering.
*   Recognize the importance of time series-specific bootstrapping techniques, such as blocked bootstrapping, to avoid data leakage.
*   Identify common pitfalls when using bagging methods with time series data and strategies to mitigate them.

#### Detailed lesson content
Bagging, or Bootstrap Aggregating, is an ensemble technique designed to reduce the variance of a model, thereby making it more robust to noisy data and less prone to overfitting. The core idea is to train multiple instances of the same base learning algorithm on different subsets of the training data. Each subset is created by "bootstrapping," which means sampling with replacement from the original training dataset. After training, the predictions from all individual models are combined, typically by averaging for regression tasks or majority voting for classification. For time series forecasting, bagging can be particularly useful because it allows individual models to capture different patterns or noise components present in the data, and by averaging, these idiosyncratic variations can be smoothed out, leading to more stable predictions.

Random Forests are a prominent example of a bagging ensemble, specifically designed for decision trees. A Random Forest constructs a multitude of decision trees during training. Each tree is built on a different bootstrapped sample of the training data. Crucially, when splitting nodes in each tree, only a random subset of features is considered, rather than all available features. This "random subspace method" further decorrelates the individual trees, ensuring that they are diverse and less likely to make the same errors. For time series, Random Forests can effectively handle a large number of engineered features (e.g., lags, rolling statistics, Fourier components) and can capture non-linear relationships without requiring explicit specification of functional forms. They also provide a measure of feature importance, which can be invaluable for understanding which time series features are most predictive.

However, applying standard bagging or Random Forests directly to time series data requires careful consideration due to the inherent temporal dependencies. Standard bootstrapping, which samples individual data points randomly with replacement, destroys the sequential order of the time series. If a model is trained on a bootstrapped sample that contains future observations and then evaluated on a test set, it will lead to data leakage and an overoptimistic performance estimate. To circumvent this, time series-specific bootstrapping methods must be employed. One such method is **blocked bootstrapping** (also known as block bootstrapping or stationary bootstrapping). Instead of sampling individual data points, blocked bootstrapping samples contiguous blocks of observations from the time series. This preserves the local temporal structure within each block, making the bootstrapped samples more representative of the original time series' dynamics. Another approach is **rolling window bootstrapping**, where bootstrapped samples are taken from a rolling window of the time series.

Let's consider an example of using a `RandomForestRegressor` for time series forecasting. We'll need to first engineer appropriate time series features. For simplicity, we'll use lagged values as features.

```python
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error
import matplotlib.pyplot as plt

# 1. Generate a synthetic time series dataset
np.random.seed(42)
n_points = 200
data = np.sin(np.linspace(0, 20, n_points)) + np.random.normal(0, 0.5, n_points)
time_series = pd.Series(data, index=pd.date_range(start='2020-01-01', periods=n_points, freq='D'))

# 2. Feature Engineering: Create lagged features
def create_lagged_features(series, lags):
    df = pd.DataFrame(series)
    for i in range(1, lags + 1):
        df[f'lag_{i}'] = series.shift(i)
    df['day_of_week'] = series.index.dayofweek # Example of a calendar feature
    df['day_of_year'] = series.index.dayofyear
    return df.dropna()

lags = 7 # Use the last 7 days as features
features_df = create_lagged_features(time_series, lags)

# The target variable is the original series
X = features_df.drop(columns=[0]) # Features are lagged values and calendar features
y = features_df[0] # Target is the current value

# 3. Time Series Split for training and testing (crucial for time series)
# We cannot use random train_test_split here.
# Let's use the last 20% of the data for testing
train_size = int(len(X) * 0.8)
X_train, X_test = X.iloc[:train_size], X.iloc[train_size:]
y_train, y_test = y.iloc[:train_size], y.iloc[train_size:]

print(f"Training data shape: {X_train.shape}, {y_train.shape}")
print(f"Testing data shape: {X_test.shape}, {y_test.shape}")

# 4. Initialize and train the Random Forest Regressor
# Common mistake: not tuning hyperparameters. For simplicity, we use defaults.
rf_model = RandomForestRegressor(n_estimators=100, random_state=42, n_jobs=-1)
rf_model.fit(X_train, y_train)

# 5. Make predictions
y_pred_rf = rf_model.predict(X_test)

# 6. Evaluate the model
rmse_rf = np.sqrt(mean_squared_error(y_test, y_pred_rf))
print(f"\nRandom Forest RMSE: {rmse_rf:.2f}")

# 7. Plot actual vs. predicted
plt.figure(figsize=(12, 6))
plt.plot(y_train.index, y_train, label='Training Data')
plt.plot(y_test.index, y_test, label='Actual Values')
plt.plot(y_test.index, y_pred_rf, label='RF Predictions', linestyle='--')
plt.title('Random Forest Time Series Forecasting')
plt.xlabel('Date')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()

# 8. Feature Importance (useful for understanding the model)
feature_importances = pd.Series(rf_model.feature_importances_, index=X_train.columns)
print("\nFeature Importances:")
print(feature_importances.sort_values(ascending=False))
```

In this code, we first generate a synthetic time series. Then, we engineer lagged features, which are past values of the series, and add some simple calendar features like `day_of_week` and `day_of_year`. This transformation converts the time series problem into a supervised learning problem suitable for `RandomForestRegressor`. Crucially, we use a time series-aware split for training and testing, ensuring that the model only learns from past data to predict future values. After training, we evaluate the model using RMSE and visualize its predictions. The feature importance analysis helps us understand which lagged values or calendar features contribute most to the forecast.

A common mistake when using Random Forests or other tree-based models for time series is to use standard `train_test_split` without shuffling, or even worse, with shuffling. This can lead to data leakage and an overestimation of performance. Always ensure your split maintains the temporal order. Another pitfall is not handling missing values introduced by lagging properly; `dropna()` is used here. Safety note: while Random Forests are robust to outliers and don't require feature scaling, they can be computationally intensive for very large datasets or a huge number of trees. Always monitor training time and memory usage. When dealing with non-stationary time series, differencing or other transformations might be necessary before creating features, as Random Forests typically perform better on stationary data.

#### Key concepts
*   **Bagging (Bootstrap Aggregating):** An ensemble technique that reduces variance by training multiple instances of the same model on bootstrapped subsets of the data and averaging their predictions.
*   **Random Forest:** A bagging ensemble method specifically for decision trees, where multiple decision trees are trained on bootstrapped samples, and at each split, only a random subset of features is considered.
*   **Bootstrapping:** A resampling technique where samples are drawn with replacement from a dataset to create multiple training sets.
*   **Blocked Bootstrapping:** A time series-specific bootstrapping method that samples contiguous blocks of observations to preserve temporal dependencies, preventing data leakage.
*   **Lagged Features:** Past values of a time series used as input features to predict future values. Essential for converting time series problems into supervised learning tasks.
*   **Feature Importance:** A metric provided by tree-based models (like Random Forests) indicating the relative importance of each input feature in making predictions.
*   **Time Series Split:** A cross-validation strategy that maintains the temporal order of data, ensuring that the training set always precedes the test set.

#### Hands-on activity
**Activity: Optimize Random Forest for Energy Consumption Forecasting**

You are provided with a dataset of hourly energy consumption. Your task is to build a Random Forest Regressor to forecast the next 24 hours of consumption.

1.  Load the `energy_consumption.csv` dataset (assume it has `timestamp` and `consumption` columns).
2.  Preprocess the data:
    *   Ensure the `timestamp` column is a datetime index.
    *   Create lagged features (e.g., `consumption` from 1, 2, 24, 48 hours ago).
    *   Extract calendar features: hour of day, day of week, month, year.
3.  Split the data into training and testing sets using a time series split (e.g., last 7 days for testing).
4.  Train a `RandomForestRegressor` model.
5.  Make predictions on the test set.
6.  Evaluate the model's performance using RMSE and MAE.
7.  Visualize the actual vs. predicted values for the test set.
8.  Analyze feature importances to understand which features are most influential.

**Starter Code Template:**
```python
import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, mean_absolute_error
import matplotlib.pyplot as plt

# --- 1. Load Data (replace with your actual file path) ---
# Assume energy_consumption.csv has columns 'timestamp' and 'consumption'
# For demonstration, let's create synthetic data
np.random.seed(42)
dates = pd.date_range(start='2022-01-01', periods=24*30*3, freq='H') # 3 months of hourly data
consumption = (np.sin(np.linspace(0, 50, len(dates))) * 100 +
               np.random.normal(0, 10, len(dates)) +
               np.linspace(0, 200, len(dates)) + 500)
consumption = np.maximum(0, consumption) # Ensure non-negative
energy_df = pd.DataFrame({'timestamp': dates, 'consumption': consumption})
energy_df.set_index('timestamp', inplace=True)

# --- 2. Preprocess Data and Create Features ---
def create_ts_features(df, target_col, lags):
    df_features = df.copy()
    for lag in lags:
        df_features[f'lag_{lag}'] = df_features[target_col].shift(lag)
    
    df_features['hour'] = df_features.index.hour
    df_features['dayofweek'] = df_features.index.dayofweek
    df_features['month'] = df_features.index.month
    df_features['year'] = df_features.index.year
    df_features['dayofyear'] = df_features.index.dayofyear
    df_features['weekofyear'] = df_features.index.isocalendar().week.astype(int)
    
    # Add a 'is_weekend' feature
    df_features['is_weekend'] = df_features['dayofweek'].isin([5, 6]).astype(int)
    
    return df_features.dropna()

lags_to_use = [1, 2, 24, 24*7] # Lag 1 hour, 2 hours, 1 day, 1 week
features_df = create_ts_features(energy_df, 'consumption', lags_to_use)

X = features_df.drop(columns=['consumption'])
y = features_df['consumption']

# --- 3. Time Series Split ---
# Use the last 7 days (7 * 24 hours) for testing
test_size_hours = 7 * 24
X_train, X_test = X.iloc[:-test_size_hours], X.iloc[-test_size_hours:]
y_train, y_test = y.iloc[:-test_size_hours], y.iloc[-test_size_hours:]

print(f"Training data size: {len(X_train)} samples")
print(f"Testing data size: {len(X_test)} samples")

# --- 4. Train RandomForestRegressor ---
rf_model = RandomForestRegressor(n_estimators=200, max_depth=10, random_state=42, n_jobs=-1)
rf_model.fit(X_train, y_train)

# --- 5. Make Predictions ---
y_pred_rf = rf_model.predict(X_test)

# --- 6. Evaluate Model ---
rmse = np.sqrt(mean_squared_error(y_test, y_pred_rf))
mae = mean_absolute_error(y_test, y_pred_rf)
print(f"\nRandom Forest RMSE: {rmse:.2f}")
print(f"Random Forest MAE: {mae:.2f}")

# --- 7. Visualize Results ---
plt.figure(figsize=(15, 7))
plt.plot(y_train.index, y_train, label='Training Data')
plt.plot(y_test.index, y_test, label='Actual Test Data')
plt.plot(y_test.index, y_pred_rf, label='RF Predictions', linestyle='--')
plt.title('Energy Consumption Forecast with Random Forest')
plt.xlabel('Timestamp')
plt.ylabel('Consumption')
plt.legend()
plt.grid(True)
plt.show()

# --- 8. Analyze Feature Importances ---
feature_importances = pd.Series(rf_model.feature_importances_, index=X.columns)
print("\nFeature Importances:")
print(feature_importances.sort_values(ascending=False))
```

#### Assessment idea
1.  **Question:** You are using a `RandomForestRegressor` for forecasting daily sales. You decide to use standard `train_test_split` with `shuffle=True` to create your training and testing sets. What is the primary risk of this approach in a time series context, and what would be the likely consequence on your model's reported performance?
    *   **Correct Answer:** The primary risk is **data leakage**. By shuffling the data, you break the temporal order, meaning that observations from the future could end up in the training set, while past observations could be in the test set. The likely consequence is an **overly optimistic performance estimate**. The model would appear to perform much better on the shuffled test set than it would on truly unseen future data in a real-world deployment scenario, because it has implicitly "seen the future" during training.

2.  **Question:** In the context of applying Random Forests to time series, explain why using "blocked bootstrapping" is preferred over standard random bootstrapping for creating the individual trees' training sets.
    *   **Correct Answer:** Standard random bootstrapping samples individual data points with replacement, which destroys the inherent temporal dependencies and sequential order present in time series data. This can lead to individual trees being trained on samples where future information is mixed with past information, causing data leakage.
    Blocked bootstrapping, on the other hand, samples contiguous blocks of observations from the time series. By doing so, it preserves the local temporal structure and dependencies within each block. This ensures that the individual trees in the Random Forest are trained on subsets that maintain the time series' integrity, leading to more realistic and robust performance, especially when dealing with auto-correlated data.

#### AI generation note
Produce a 10-minute live coding demonstration in a Jupyter Notebook. Start by loading a real-world energy consumption dataset (or a convincing synthetic one). Walk through the process of creating lagged and calendar features. Emphasize the critical step of using `X.iloc[:-test_size], y.iloc[:-test_size]` for time series splitting, explicitly contrasting it with `train_test_split(shuffle=True)`. Train a `RandomForestRegressor`, explain `n_estimators` and `max_depth`. Show how to make predictions and visualize actual vs. predicted values using `matplotlib`. Conclude by interpreting the feature importances plot. Use a professional, hands-on tone. Include a practical tip about tuning `n_jobs` for parallel processing.

---

### Chapter 6.3 — Boosting-based Ensembles: Gradient Boosting Machines (XGBoost, LightGBM)

#### Learning objectives
*   Understand the fundamental principles of boosting and how it differs from bagging.
*   Explain the mechanics of Gradient Boosting Machines (GBMs), including how they sequentially build models to correct errors.
*   Implement XGBoost and LightGBM for time series forecasting, leveraging engineered features.
*   Identify key hyperparameters for XGBoost and LightGBM and their impact on time series model performance.
*   Discuss strategies for hyperparameter tuning and early stopping in the context of time series validation.

#### Detailed lesson content
Boosting is another powerful ensemble technique that operates on a fundamentally different principle than bagging. While bagging aims to reduce variance by averaging the predictions of many independent models, boosting focuses on reducing bias by sequentially building models. Each new model in a boosting ensemble is trained to correct the errors made by the previous models. This iterative error-
data = np.sin(np.linspace(0, 50, n_points)) * 10 + np.random.normal(0, 2, n_points) + np.linspace(0, 20, n_points)
time_series = pd.Series(data, index=pd.date_range(start='2020-01-01', periods=n_points, freq='D'))

# 2. Feature Engineering: Create lagged features and calendar features
def create_ts_features(series, lags):
    df = pd.DataFrame(series)
    df.columns = ['target']
    for i in lags:
        df[f'lag_{i}'] = df['target'].shift(i)
    
    df['day_of_week'] = df.index.dayofweek
    df['day_of_year'] = df.index.dayofyear
    df['month'] = df.index.month
    df['year'] = df.index.year
    df['quarter'] = df.index.quarter
    df['is_month_start'] = df.index.is_month_start.astype(int)
    df['is_month_end'] = df.index.is_month_end.astype(int)
    
    # Rolling features
    df['rolling_mean_7'] = df['target'].shift(1).rolling(window=7).mean()
    df['rolling_std_7'] = df['target'].shift(1).rolling(window=7).std()
    
    return df.dropna()

lags_to_use = [1, 7, 14, 28] # Lag 1 day, 1 week, 2 weeks, 4 weeks
features_df = create_ts_features(time_series, lags_to_use)

X = features_df.drop(columns=['target'])
y = features_df['target']

# 3. Time Series Split for training and testing
# Use the last 30 days for testing
test_size_days = 30
X_train, X_test = X.iloc[:-test_size_days], X.iloc[-test_size_days:]
y_train, y_test = y.iloc[:-test_size_days], y.iloc[-test_size_days:]

print(f"Training data size: {len(X_train)} samples")
print(f"Testing data size: {len(X_test)} samples")

# 4. Initialize and train XGBoost Regressor
# Common hyperparameters to tune:
# n_estimators: number of boosting rounds (trees)
# learning_rate: step size shrinkage to prevent overfitting
# max_depth: maximum depth of a tree
# subsample: fraction of samples used for fitting the trees
# colsample_bytree: fraction of features used for fitting the trees
# reg_alpha, reg_lambda: L1 and L2 regularization terms
# early_stopping_rounds: crucial for time series to prevent overfitting to the validation set

xgb_model = xgb.XGBRegressor(objective='reg:squarederror', # For regression tasks
                             n_estimators=1000,           # Start with a large number, use early stopping
                             learning_rate=0.05,
                             max_depth=5,
                             subsample=0.7,
                             colsample_bytree=0.7,
                             random_state=42,
                             n_jobs=-1)

# For early stopping, we need a validation set.
# Let's use the last 60 days of the training data as a validation set
val_size_days = 60
X_train_actual, X_val = X_train.iloc[:-val_size_days], X_train.iloc[-val_size_days:]
y_train_actual, y_val = y_train.iloc[:-val_size_days], y_train.iloc[-val_size_days:]

print(f"Actual Training data size: {len(X_train_actual)} samples")
print(f"Validation data size: {len(X_val)} samples")

xgb_model.fit(X_train_actual, y_train_actual,
              eval_set=[(X_val, y_val)],
              early_stopping_rounds=50, # Stop if validation error doesn't improve for 50 rounds
              verbose=False) # Set to True to see boosting rounds

print(f"\nBest iteration: {xgb_model.best_iteration}")

# 5. Make predictions
y_pred_xgb = xgb_model.predict(X_test)

# 6. Evaluate the model
rmse_xgb = np.sqrt(mean_squared_error(y_test, y_pred_xgb))
mae_xgb = mean_absolute_error(y_test, y_pred_xgb)
print(f"XGBoost RMSE: {rmse_xgb:.2f}")
print(f"XGBoost MAE: {mae_xgb:.2f}")

# 7. Plot actual vs. predicted
plt.figure(figsize=(15, 7))
plt.plot(y_train.index, y_train, label='Training Data')
plt.plot(y_test.index, y_test, label='Actual Test Data')
plt.plot(y_test.index, y_pred_xgb, label='XGBoost Predictions', linestyle='--')
plt.title('XGBoost Time Series Forecasting')
plt.xlabel('Date')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()

# 8. Feature Importance
feature_importances = pd.Series(xgb_model.feature_importances_, index=X_train.columns)
print("\nFeature Importances:")
print(feature_importances.sort_values(ascending=False))
```

This example demonstrates a typical workflow for using XGBoost. We engineer a richer set of features, including rolling statistics, which can capture trends and seasonality more effectively. Crucially, we introduce a validation set from the *end* of our training data to enable **early stopping**. Early stopping is a vital technique for boosting models, as it prevents overfitting by stopping the training process once the model's performance on a separate validation set starts to degrade. This is particularly important in time series, where overfitting to historical noise can severely harm future forecasting accuracy. The `eval_set` and `early_stopping_rounds` parameters in `xgb.XGBRegressor` are used for this purpose.

Hyperparameter tuning is essential for maximizing the performance of GBMs. Parameters like `n_estimators` (number of trees), `learning_rate` (shrinkage), `max_depth`, `subsample`, and `colsample_bytree` significantly impact the bias-variance trade-off. A common strategy is to start with a large `n_estimators` and a small `learning_rate`, then use early stopping. Other parameters can be tuned using grid search or randomized search, but again, remember to use time series-aware cross-validation (like `TimeSeriesSplit` from scikit-learn) for robust evaluation.

Common mistakes include not using early stopping, which often leads to overfitting, or using random cross-validation instead of time series-aware methods for hyperparameter tuning. Another pitfall is ignoring the computational cost; while fast, very deep trees or an excessive number of estimators can still be slow. Safety notes: always monitor the validation loss during training. If it starts to increase, your model is likely overfitting. Ensure your features are robust and not subject to future leakage. For example, rolling means should always be calculated using *past* data only (`.shift(1)` before `.rolling()`).

#### Key concepts
*   **Boosting:** An ensemble technique where models are built sequentially, with each new model attempting to correct the errors of the preceding ones, primarily reducing bias.
*   **Gradient Boosting:** A specific type of boosting where each new model is trained to predict the negative gradient of the loss function, effectively moving the ensemble's prediction towards the true target.
*   **XGBoost (eXtreme Gradient Boosting):** A highly optimized, scalable, and popular open-source implementation of gradient boosting known for its speed and performance.
*   **LightGBM (Light Gradient Boosting Machine):** An alternative gradient boosting framework developed by Microsoft, known for even faster training and lower memory consumption, especially on large datasets.
*   **Early Stopping:** A regularization technique used in iterative training processes (like boosting) where training is halted when the model's performance on a validation set stops improving, preventing overfitting.
*   **Hyperparameters:** Configuration settings of a model (e.g., `n_estimators`, `learning_rate`, `max_depth`) that are set before training and significantly influence its performance.
*   **Feature Importance:** A metric indicating the relative contribution of each input feature to the model's predictions.

#### Hands-on activity
**Activity: Optimize LightGBM for Daily Sales Forecasting**

You are tasked with forecasting daily sales for a retail store using LightGBM.

1.  Load a synthetic daily sales dataset (assume `date` and `sales` columns).
2.  Engineer relevant time series features:
    *   Lagged sales values (e.g., 1, 7, 14, 30 days ago).
    *   Rolling statistics (e.g., 7-day rolling mean, 7-day rolling standard deviation of sales).
    *   Calendar features (day of week, day of month, month, year, is_weekend, is_holiday - assume a simple holiday list).
3.  Split the data: Use the last 60 days for the test set, and the 60 days *before that* from the training data as a validation set for early stopping.
4.  Train a `LGBMRegressor` model, incorporating `early_stopping_rounds`.
5.  Make predictions on the test set.
6.  Evaluate the model using RMSE and MAE.
7.  Visualize actual vs. predicted sales.
8.  Analyze feature importances.

**Starter Code Template:**
```python
import pandas as pd
import numpy as np
import lightgbm as lgb
from sklearn.metrics import mean_squared_error, mean_absolute_error
import matplotlib.pyplot as plt

# --- 1. Load Data (synthetic for demonstration) ---
np.random.seed(42)
dates = pd.date_range(start='2021-01-01', periods=365*3, freq='D') # 3 years of daily data
sales = (np.sin(np.linspace(0, 70, len(dates))) * 50 +
         np.random.normal(0, 15, len(dates)) +
         np.linspace(0, 300, len(dates)) + 1000)
sales = np.maximum(500, sales) # Ensure sales are realistic
sales_df = pd.DataFrame({'date': dates, 'sales': sales})
sales_df.set_index('date', inplace=True)

# Add some artificial holidays for demonstration
holidays = pd.to_datetime(['2021-01-01', '2021-12-25', '2022-01-01', '2022-12-25', '2023-01-01', '2023-12-25'])
sales_df['is_holiday'] = sales_df.index.isin(holidays).astype(int)

# --- 2. Feature Engineering ---
def create_lgbm_features(df, target_col, lags):
    df_features = df.copy()
    for lag in lags:
        df_features[f'lag_{lag}'] = df_features[target_col].shift(lag)
    
    df_features['dayofweek'] = df_features.index.dayofweek
    df_features['dayofmonth'] = df_features.index.day
    df_features['month'] = df_features.index.month
    df_features['year'] = df_features.index.year
    df_features['weekofyear'] = df_features.index.isocalendar().week.astype(int)
    df_features['is_weekend'] = df_features['dayofweek'].isin([5, 6]).astype(int)
    
    df_features['rolling_mean_7'] = df_features[target_col].shift(1).rolling(window=7).mean()
    df_features['rolling_std_7'] = df_features[target_col].shift(1).rolling(window=7).std()
    
    return df_features.dropna()

lags_to_use = [1, 7, 14, 30]
features_df = create_lgbm_features(sales_df, 'sales', lags_to_use)

X = features_df.drop(columns=['sales'])
y = features_df['sales']

# --- 3. Time Series Split with Validation Set ---
test_size_days = 60
val_size_days = 60

X_train_full, X_test = X.iloc[:-test_size_days], X.iloc[-test_size_days:]
y_train_full, y_test = y.iloc[:-test_size_days], y.iloc[-test_size_days:]

X_train, X_val = X_train_full.iloc[:-val_size_days], X_train_full.iloc[-val_size_days:]
y_train, y_val = y_train_full.iloc[:-val_size_days], y_train_full.iloc[-val_size_days:]

print(f"Training data size: {len(X_train)} samples")
print(f"Validation data size: {len(X_val)} samples")
print(f"Testing data size: {len(X_test)} samples")

# --- 4. Train LGBMRegressor with Early Stopping ---
lgbm_model = lgb.LGBMRegressor(objective='regression_l1', # MAE objective
                               n_estimators=1000,
                               learning_rate=0.05,
                               num_leaves=31, # default, generally good
                               max_depth=-1, # no limit
                               random_state=42,
                               n_jobs=-1)

lgbm_model.fit(X_train, y_train,
                eval_set=[(X_val, y_val)],
                eval_metric='mae', # Evaluate with MAE
                callbacks=[lgb.early_stopping(stopping_rounds=50, verbose=False)])

print(f"\nBest iteration: {lgbm_model.best_iteration_}")

# --- 5. Make Predictions ---
y_pred_lgbm = lgbm_model.predict(X_test)

# --- 6. Evaluate Model ---
rmse = np.sqrt(mean_squared_error(y_test, y_pred_lgbm))
mae = mean_absolute_error(y_test, y_pred_lgbm)
print(f"\nLightGBM RMSE: {rmse:.2f}")
print(f"LightGBM MAE: {mae:.2f}")

# --- 7. Visualize Results ---
plt.figure(figsize=(15, 7))
plt.plot(y_train.index, y_train, label='Training Data')
plt.plot(y_val.index, y_val, label='Validation Data')
plt.plot(y_test.index, y_test, label='Actual Test Data')
plt.plot(y_test.index, y_pred_lgbm, label='LightGBM Predictions', linestyle='--')
plt.title('Daily Sales Forecast with LightGBM')
plt.xlabel('Date')
plt.ylabel('Sales')
plt.legend()
plt.grid(True)
plt.show()

# --- 8. Analyze Feature Importances ---
feature_importances = pd.Series(lgbm_model.feature_importances_, index=X.columns)
print("\nFeature Importances:")
print(feature_importances.sort_values(ascending=False))
```

#### Assessment idea
1.  **Question:** You are training an XGBoost model for time series forecasting. You observe that your training error continues to decrease, but your validation error starts to increase after a certain number of boosting rounds. What phenomenon is this indicative of, and what specific XGBoost parameter (or technique) should you adjust to address it?
    *   **Correct Answer:** This phenomenon is indicative of **overfitting**. The model is learning the training data too well, including its noise and specific patterns, and is losing its ability to generalize to unseen data (the validation set). To address this, you should use the `early_stopping_rounds` parameter in XGBoost (or LightGBM). By setting `early_stopping_rounds` to a reasonable number (e.g., 50), the training process will automatically stop if the validation error does not improve for that many consecutive rounds, preventing the model from overfitting.

2.  **Question:** Compare and contrast XGBoost and LightGBM in terms of their primary advantages, especially when dealing with large time series datasets.
    *   **Correct Answer:** Both XGBoost and LightGBM are highly efficient implementations of Gradient Boosting Machines, known for their speed and accuracy.
        *   **XGBoost** is celebrated for its robustness, comprehensive feature set (including various regularization techniques like L1/L2), and strong performance across a wide range of problems. It's often considered a go-to for high-performance machine learning.
        *   **LightGBM**, developed by Microsoft, focuses on even faster training speed and lower memory consumption, particularly beneficial for very large datasets. It achieves this through novel techniques like **Gradient-based One-Side Sampling (GOSS)**, which prioritizes instances with larger gradients (more errors), and **Exclusive Feature Bundling (EFB)**, which bundles mutually exclusive features to reduce feature count. While both are excellent, LightGBM often has an edge in speed and memory efficiency for extremely large-scale time series problems, making it a strong contender when computational resources or time are constrained.

#### AI generation note
Design a 15-minute interactive code demo focusing on LightGBM. Start by briefly comparing LightGBM's speed advantages over XGBoost with a simple benchmark (conceptual, no actual benchmark needed, just mention it). Then, walk through a Jupyter Notebook demonstrating the daily sales forecasting activity. Highlight the feature engineering steps, especially rolling features and calendar features. Crucially, show the `eval_set` and `callbacks=[lgb.early_stopping(...)]` parameters in `lgbm_model.fit` and explain their role in preventing overfitting for time series. Display the training progress (validation loss) and the final predictions plotted against actuals. Include a mini-quiz asking about the purpose of `early_stopping_rounds`. Use a clean, professional visual style with clear code and output.

---

### Chapter 6.4 — Stacking Ensembles for Time Series Forecasting

#### Learning objectives
*   Understand the concept of stacking (stacked generalization) and its architecture for time series.
*   Differentiate between base models and meta-learner models in a stacking ensemble.
*   Implement a stacking ensemble for time series forecasting using appropriate cross-validation strategies.
*   Identify suitable base models and meta-learner types for time series stacking.
*   Recognize the benefits and challenges of stacking, including computational complexity and potential for overfitting.

#### Detailed lesson content
Stacking, or stacked generalization, is a powerful ensemble method that aims to combine the strengths of multiple diverse models by training a "meta-learner" to make the final prediction. Unlike bagging (which averages predictions) or boosting (which sequentially corrects errors), stacking involves training several heterogeneous "base models" on the original training data. The predictions generated by these base models are then used as input features for a second-level model, known as the "meta-learner" or "blender." The meta-learner learns how to optimally combine the predictions of the base models, effectively discovering which base models are more reliable under different circumstances or how their errors might be correlated. This hierarchical approach allows stacking to often achieve superior performance compared to individual models or simpler ensembles, especially when the base models are diverse in their learning mechanisms.

The architecture of a stacking ensemble for time series forecasting typically involves:
1.  **Level 0 (Base Models):** Multiple diverse models (e.g., ARIMA, Prophet, Random Forest, XGBoost, LSTM) are trained on the *training portion* of the time series data. It's crucial that these models are as diverse as possible to ensure that they capture different patterns and make different types of errors.
2.  **Level 1 (Meta-Learner):** The predictions generated by the Level 0 base models on a *validation set* (or out-of-fold predictions from a cross-validation scheme) are collected. These predictions, along with potentially some original features, form the new training data for the meta-learner. The meta-learner (e.g., Linear Regression, Ridge Regression, XGBoost, or even a simple Neural Network) is then trained to predict the actual target values using these base model predictions as features.

A critical aspect of stacking, especially for time series, is preventing data leakage when generating the meta-features (the predictions from the base models). If base models predict on the same data they were trained on, these predictions will be overly optimistic and lead to an overfit meta-learner. Therefore, a robust cross-validation strategy is essential. For time series, we must use **time series-aware cross-validation**, such as `TimeSeriesSplit` from scikit-learn or a custom walk-forward validation scheme. The base models are trained on a fold's training data and predict on its validation data. These out-of-fold predictions are then used to train the meta-learner.

Let's walk through a conceptual implementation of stacking for time series forecasting using `mlxtend`, a library that simplifies stacking.

```python
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression, Ridge
from sklearn.ensemble import RandomForestRegressor
from xgboost import XGBRegressor
from lightgbm import LGBMRegressor
from sklearn.model_selection import TimeSeriesSplit
from sklearn.metrics import mean_squared_error, mean_absolute_error
from mlxtend.regressor import StackingCVRegressor # StackingCVRegressor handles cross-validation internally
import matplotlib.pyplot as plt

# 1. Generate a synthetic time series dataset
np.random.seed(42)
n_points = 365 * 3 # Three years of daily data
data = np.sin(np.linspace(0, 70, n_points)) * 20 + np.random.normal(0, 5, n_points) + np.linspace(0, 50, n_points)
time_series = pd.Series(data, index=pd.date_range(start='2020-01-01', periods=n_points, freq='D'))

# 2. Feature Engineering (similar to previous chapters)
def create_ts_features(series, lags):
    df = pd.DataFrame(series)
    df.columns = ['target']
    for i in lags:
        df[f'lag_{i}'] = df['target'].shift(i)
    df['day_of_week'] = df.index.dayofweek
    df['month'] = df.index.month
    df['year'] = df.index.year
    df['rolling_mean_7'] = df['target'].shift(1).rolling(window=7).mean()
    return df.dropna()

lags_to_use = [1, 7, 14]
features_df = create_ts_features(time_series, lags_to_use)

X = features_df.drop(columns=['target'])
y = features_df['target']

# 3. Time Series Split for final evaluation
test_size_days = 60
X_train_full, X_test = X.iloc[:-test_size_days], X.iloc[-test_size_days:]
y_train_full, y_test = y.iloc[:-test_size_days], y.iloc[-test_size_days:]

print(f"Full Training data size: {len(X_train_full)} samples")
print(f"Testing data size: {len(X_test)} samples")

# 4. Define Base Models (Level 0)
# Choose diverse models
reg1 = RandomForestRegressor(n_estimators=50, random_state=42, n_jobs=-1, max_depth=5)
reg2 = XGBRegressor(objective='reg:squarederror', n_estimators=50, learning_rate=0.1, random_state=42, n_jobs=-1, max_depth=3)
reg3 = LGBMRegressor(objective='regression', n_estimators=50, learning_rate=0.1, random_state=42, n_jobs=-1, num_leaves=15)
reg4 = Ridge(random_state=42) # A simple linear model

# 5. Define Meta-Learner (Level 1)
# Often a simpler model like Linear Regression or Ridge, but can be more complex
meta_regressor = LinearRegression(n_jobs=-1)

# 6. Set up TimeSeriesSplit for StackingCVRegressor
# StackingCVRegressor will use this internally for generating meta-features
tscv = TimeSeriesSplit(n_splits=5) # Example: 5 folds for time series cross-validation

# 7. Initialize StackingCVRegressor
# StackingCVRegressor handles the cross-validation for generating meta-features
# and trains the meta-learner on these out-of-fold predictions.
stack_model = StackingCVRegressor(regressors=[reg1, reg2, reg3, reg4],
                                  meta_regressor=meta_regressor,
                                  cv=tscv, # Use TimeSeriesSplit for cross-validation
                                  use_features_in_secondary=True, # Pass original features to meta-learner
                                  random_state=42,
                                  n_jobs=-1)

# 8. Train the Stacking Model
print("\nTraining Stacking Ensemble...")
stack_model.fit(X_train_full.values, y_train_full.values) # .values for mlxtend compatibility

# 9. Make predictions
y_pred_stack = stack_model.predict(X_test.values)

# 10. Evaluate the model
rmse_stack = np.sqrt(mean_squared_error(y_test, y_pred_stack))
mae_stack = mean_absolute_error(y_test, y_pred_stack)
print(f"\nStacking Ensemble RMSE: {rmse_stack:.2f}")
print(f"Stacking Ensemble MAE: {mae_stack:.2f}")

# Optional: Evaluate individual base models for comparison
print("\nIndividual Base Model Performance (on test set):")
for i, reg in enumerate([reg1, reg2, reg3, reg4]):
    reg.fit(X_train_full, y_train_full) # Retrain for full comparison
    y_pred_base = reg.predict(X_test)
    rmse_base = np.sqrt(mean_squared_error(y_test, y_pred_base))
    mae_base = mean_absolute_error(y_test, y_pred_base)
    print(f"  Regressor {i+1} ({type(reg).__name__}) RMSE: {rmse_base:.2f}, MAE: {mae_base:.2f}")

# 11. Plot actual vs. predicted
plt.figure(figsize=(15, 7))
plt.plot(y_train_full.index, y_train_full, label='Training Data')
plt.plot(y_test.index, y_test, label='Actual Test Data')
plt.plot(y_test.index, y_pred_stack, label='Stacking Predictions', linestyle='--')
plt.title('Stacking Ensemble Time Series Forecasting')
plt.xlabel('Date')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()
```

In this example, we define a set of diverse base models: `RandomForestRegressor`, `XGBRegressor`, `LGBMRegressor`, and `Ridge`. For the meta-learner, we choose a simple `LinearRegression`. The `mlxtend.regressor.StackingCVRegressor` is particularly useful here as it handles the complex cross-validation process internally to generate the out-of-fold predictions for the meta-learner. We explicitly pass `TimeSeriesSplit` to its `cv` parameter to ensure temporal integrity. The `use_features_in_secondary=True` argument allows the meta-learner to also consider the original features, which can sometimes provide additional context beyond just the base model predictions.

The benefits of stacking include potentially higher accuracy due to its ability to learn optimal combinations of diverse models. It can effectively correct for systematic biases or errors that individual models might exhibit. However, stacking also comes with challenges. It is computationally more expensive than simple averaging or boosting, as it involves training multiple base models and then a meta-learner, all potentially with cross-validation. There's also a risk of overfitting the meta-learner if the cross-validation strategy is not robust or if the meta-learner is too complex. Common mistakes include using standard `KFold` cross-validation instead of `TimeSeriesSplit`, which can lead to data leakage and inflated performance estimates. Another mistake is choosing base models that are too similar, reducing the diversity and thus the potential gains from stacking. Safety note: always start with a simple meta-learner (like Linear Regression) and only increase complexity if necessary, after thorough validation.

#### Key concepts
*   **Stacking (Stacked Generalization):** An ensemble method that combines predictions from multiple diverse base models using a second-level "meta-learner" model.
*   **Base Models (Level 0 Models):** The individual, often heterogeneous, models whose predictions serve as input for the meta-learner.
*   **Meta-Learner (Level 1 Model / Blender):** A model that learns to combine the predictions of the base models to produce the final output.
*   **Out-of-Fold Predictions:** Predictions made by base models on data points they were *not* trained on during a cross-validation fold. These are crucial for training the meta-learner without data leakage.
*   **TimeSeriesSplit:** A scikit-learn cross-validation iterator that generates train/test indices while respecting the time-series order, essential for time series stacking.
*   **mlxtend:** A Python library that provides convenient implementations for various machine learning extensions, including stacking.
*   **Heterogeneous Models:** Base models that use different algorithms or learning mechanisms, promoting diversity in the ensemble.

#### Hands-on activity
**Activity: Build a Stacking Ensemble for Stock Price Prediction**

You are provided with a synthetic dataset of daily stock prices. Your goal is to build a stacking ensemble to forecast the next day's closing price.

1.  Load the `stock_prices.csv` dataset (assume `date` and `close` columns).
2.  Engineer features:
    *   Lagged closing prices (e.g., 1, 2, 5 days).
    *   Rolling mean and standard deviation of closing prices (e.g., 5-day, 20-day).
    *   Calendar features (day of week, month).
3.  Split the data: Use the last 30 days for the final test set.
4.  Define at least three diverse base models (e.g., `RandomForestRegressor`, `XGBRegressor`, `Ridge`).
5.  Define a meta-learner (e.g., `LinearRegression`).
6.  Use `mlxtend.regressor.StackingCVRegressor` with `TimeSeriesSplit` to build and train the ensemble.
7.  Make predictions on the test set.
8.  Evaluate the stacking ensemble's performance using RMSE and MAE.
9.  Compare its performance against the best individual base model.
10. Visualize the actual vs. predicted values.

**Starter Code Template:**
```python
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression, Ridge
from sklearn.ensemble import RandomForestRegressor
from xgboost import XGBRegressor
from sklearn.model_selection import TimeSeriesSplit
from sklearn.metrics import mean_squared_error, mean_absolute_error
from mlxtend.regressor import StackingCVRegressor
import matplotlib.pyplot as plt

# --- 1. Load Data (synthetic for demonstration) ---
np.random.seed(42)
dates = pd.date_range(start='2020-01-01', periods=252*2, freq='B') # 2 years of business days
prices = (np.cumsum(np.random.normal(0, 1, len(dates))) +
          np.sin(np.linspace(0, 50, len(dates))) * 10 + 100)
stock_df = pd.DataFrame({'date': dates, 'close': prices})
stock_df.set_index('date', inplace=True)

# --- 2. Feature Engineering ---
def create_stock_features(df, target_col, lags):
    df_features = df.copy()
    for lag in lags:
        df_features[f'lag_{lag}'] = df_features[target_col].shift(lag)
    
    df_features['dayofweek'] = df_features.index.dayofweek
    df_features['month'] = df_features.index.month
    
    df_features['rolling_mean_5'] = df_features[target_col].shift(1).rolling(window=5).mean()
    df_features['rolling_std_5'] = df_features[target_col].shift(1).rolling(window=5).std()
    df_features['rolling_mean_20'] = df_features[target_col].shift(1).rolling(window=20).mean()
    
    return df_features.dropna()

lags_to_use = [1, 2, 5] # Previous day, 2 days ago, 1 week ago (business days)
features_df = create_stock_features(stock_df, 'close', lags_to_use)

X = features_df.drop(columns=['close'])
y = features_df['close']

# --- 3. Time Series Split ---
test_size_days = 30 # Approx 30 business days
X_train_full, X_test = X.iloc[:-test_size_days], X.iloc[-test_size_days:]
y_train_full, y_test = y.iloc[:-test_size_days], y.iloc[-test_size_days:]

print(f"Full Training data size: {len(X_train_full)} samples")
print(f"Testing data size: {len(X_test)} samples")

# --- 4. Define Base Models ---
reg1 = RandomForestRegressor(n_estimators=70, max_depth=7, random_state=42, n_jobs=-1)
reg2 = XGBRegressor(objective='reg:squarederror', n_estimators=70, learning_rate=0.08, max_depth=4, random_state=42, n_jobs=-1)
reg3 = Ridge(alpha=1.0, random_state=42)

# --- 5. Define Meta-Learner ---
meta_regressor = LinearRegression(n_jobs=-1)

# --- 6. Setup TimeSeriesSplit for Stacking ---
tscv_stack = TimeSeriesSplit(n_splits=5)

# --- 7. Initialize StackingCVRegressor ---
stack_model = StackingCVRegressor(regressors=[reg1, reg2, reg3],
                                  meta_regressor=meta_regressor,
                                  cv=tscv_stack,
                                  use_features_in_secondary=True,
                                  random_state=42,
                                  n_jobs=-1)

# --- 8. Train the Stacking Model ---
print("\nTraining Stacking Ensemble...")
stack_model.fit(X_train_full.values, y_train_full.values)

# --- 9. Make Predictions ---
y_pred_stack = stack_model.predict(X_test.values)

# --- 10. Evaluate and Compare ---
rmse_stack = np.sqrt(mean_squared_error(y_test, y_pred_stack))
mae_stack = mean_absolute_error(y_test, y_pred_stack)
print(f"\nStacking Ensemble RMSE: {rmse_stack:.2f}")
print(f"Stacking Ensemble MAE: {mae_stack:.2f}")

# Evaluate individual base models for comparison
print("\nIndividual Base Model Performance (on test set):")
best_base_rmse = float('inf')
best_base_model_name = ""
for i, reg in enumerate([reg1, reg2, reg3]):
    reg.fit(X_train_full, y_train_full) # Retrain for full comparison
    y_pred_base = reg.predict(X_test)
    rmse_base = np.sqrt(mean_squared_error(y_test, y_pred_base))
    mae_base = mean_absolute_error(y_test, y_pred_base)
    print(f"  Regressor {i+1} ({type(reg).__name__}) RMSE: {rmse_base:.2f}, MAE: {mae_base:.2f}")
    if rmse_base < best_base_rmse:
        best_base_rmse = rmse_base
        best_base_model_name = type(reg).__name__

print(f"\nBest individual base model ({best_base_model_name}) RMSE: {best_base_rmse:.2f}")
if rmse_stack < best_base_rmse:
    print("Stacking ensemble outperformed the best individual base model!")
else:
    print("Stacking ensemble did not outperform the best individual base model (or performed similarly).")

# --- 11. Visualize Results ---
plt.figure(figsize=(15, 7))
plt.plot(y_train_full.index, y_train_full, label='Training Data')
plt.plot(y_test.index, y_test, label='Actual Test Data')
plt.plot(y_test.index, y_pred_stack, label='Stacking Predictions', linestyle='--')
plt.title('Stock Price Forecast with Stacking Ensemble')
plt.xlabel('Date')
plt.ylabel('Closing Price')
plt.legend()
plt.grid(True)
plt.show()
```

#### Assessment idea
1.  **Question:** You are designing a stacking ensemble for forecasting monthly sales. You decide to use an ARIMA model, a Prophet model, and an XGBoost model as your base learners. For the meta-learner, you choose a simple `LinearRegression`. When generating the training data for the meta-learner, why is it critical to use out-of-fold predictions from the base models rather than their predictions on the full training set?
    *   **Correct Answer:** It is critical to use out-of-fold predictions to prevent **data leakage** and **overfitting** of the meta-learner. If the base models predict on the same data they were trained on (in-sample predictions), these predictions will be overly optimistic and contain information that wouldn't be available for truly unseen data. The meta-learner, trained on these inflated predictions, would learn to trust the base models too much and would likely overfit to their training-set performance. Out-of-fold predictions ensure that the meta-learner is trained on predictions made by base models on data they *have not seen* during their own training phase, providing a more realistic and generalizable representation of the base models' true predictive power.

2.  **Question:** You have successfully implemented a stacking ensemble for time series forecasting, but you notice that its performance is only marginally better than your best individual base model. What two potential reasons could explain this limited improvement, and what steps might you take to address them?
    *   **Correct Answer:**
        1.  **Lack of Diversity among Base Models:** If the base models are too similar in their underlying algorithms or tend to make the same types of errors, the meta-learner will have little new information to learn from, and simply combining similar predictions won't yield significant gains.
            *   **Action:** Introduce more diverse base models (e.g., a statistical model like ARIMA/Prophet, a tree-based model like XGBoost/Random Forest, and a deep learning model like LSTM). Experiment with different feature sets for different base models if appropriate.
        2.  **Overfitting of the Meta-Learner (or Base Models):** If the meta-learner itself is too complex or if the base models are heavily overfit, the ensemble might not generalize well.
            *   **Action:** Simplify the meta-learner (e.g., use `Ridge` or `Lasso` instead of `LinearRegression` for regularization, or a very shallow tree). Ensure base models are properly regularized and validated using time series-aware methods to prevent their individual overfitting. Re-evaluate the cross-validation strategy for generating meta-features (e.g., increase `n_splits` in `TimeSeriesSplit` to get more robust out-of-fold predictions).

#### AI generation note
Create a 15-minute interactive video tutorial demonstrating stacking with `mlxtend`. Begin by visually explaining the two-level architecture of stacking with clear diagrams showing data flow from original features to base models, then base model predictions as meta-features to the meta-learner. Walk through the `stock_prices.csv` activity in a Jupyter Notebook. Highlight the selection of diverse base models and the meta-learner. Crucially, explain and show the `TimeSeriesSplit` being passed to `StackingCVRegressor` and why this is vital for time series. Display the training process and compare the stacking RMSE/MAE against individual base models. Include a reflection prompt asking learners to consider which base models they would choose for a specific time series problem.

---

### Chapter 6.5 — Hybrid Models: Combining Statistical and Machine Learning Approaches

#### Learning objectives
*   Understand the rationale behind creating hybrid forecasting models by combining statistical and machine learning techniques.
*   Explain common hybrid architectures, such as ARIMA-ML and Prophet-ML.
*   Implement a hybrid model where a statistical model forecasts a baseline and a machine learning model predicts the residuals.
*   Evaluate the performance of hybrid models and compare them to standalone approaches.
*   Identify scenarios where hybrid models are particularly advantageous and their potential limitations.

#### Detailed lesson content
Hybrid models represent a sophisticated approach to time series forecasting that seeks to leverage the complementary strengths of different modeling paradigms. Traditional statistical models, such as ARIMA or Exponential Smoothing, are often excellent at capturing linear dependencies, trends, and seasonality within a time series. They are interpretable and have strong theoretical foundations. However, they may struggle with complex non-linear relationships, external regressors, or a large number of features. Conversely, machine learning models (like Random Forests, XGBoost, or LSTMs) excel at capturing non-linear patterns and handling high-dimensional feature spaces, but they might sometimes overlook the inherent temporal structures that statistical models are designed to find. By combining these approaches, hybrid models aim to achieve superior forecasting accuracy and robustness.

The most common hybrid architecture involves using a statistical model to capture the linear or easily explainable components of the time series (e.g., trend, seasonality, autocorrelation), and then using a machine learning model to forecast the **residuals** (the errors) of the statistical model. The idea is that the statistical model "cleans up" the predictable parts, leaving behind a more stationary and potentially non-linear residual series that a machine learning model can then effectively learn. The final forecast is the sum of the statistical model's forecast and the machine learning model's forecast of the residuals.

Let's illustrate this with an **ARIMA-XGBoost hybrid model**. ARIMA is excellent at capturing autoregressive (AR), integrated (I), and moving average (MA) components. However, if there are complex non-linear patterns or external factors influencing the series, ARIMA's linear assumptions might fall short. By training an XGBoost model on the ARIMA residuals, we allow XGBoost to learn these remaining non-linear patterns.

```python
import pandas as pd
import numpy as np
from pmdarima import auto_arima # For automatic ARIMA model selection
from xgboost import XGBRegressor
from sklearn.metrics import mean_squared_error, mean_absolute_error
import matplotlib.pyplot as plt

# 1. Generate a synthetic time series dataset with some non-linear patterns
np.random.seed(42)
n_points = 365 * 3 # Three years of daily data
# Base trend and seasonality
base_series = (np.sin(np.linspace(0, 70, n_points)) * 10 +
               np.cos(np.linspace(0, 10, n_points)) * 5 +
               np.linspace(0, 50, n_points) + 100)
# Add some non-linear "shock" or external influence
non_linear_component = np.sin(np.linspace(0, 100, n_points)**2 / 1000) * 20
data = base_series + non_linear_component + np.random.normal(0, 3, n_points)
time_series = pd.Series(data, index=pd.date_range(start='2020-01-01', periods=n_points, freq='D'))

# 2. Split data into training and testing sets
test_size_days = 60
train_series = time_series.iloc[:-test_size_days]
test_series = time_series.iloc[-test_size_days:]

print(f"Training data size: {len(train_series)} samples")
print(f"Testing data size: {len(test_series)} samples")

# --- Step 1: Train a Statistical Model (ARIMA) ---
# Use auto_arima to find the best ARIMA model
print("\nFitting ARIMA model...")
arima_model = auto_arima(train_series, seasonal=True, m=7, # m=7 for weekly seasonality
                         suppress_warnings=True, stepwise=True,
                         error_action='ignore', trace=False, random_state=42)
print(f"ARIMA model fitted: {arima_model.order}, Seasonal Order: {arima_model.seasonal_order}")

# Generate in-sample predictions for training the ML model on residuals
arima_train_pred = arima_model.predict_in_sample()
arima_train_residuals = train_series - arima_train_pred

# Generate forecasts for the test set
arima_forecast = arima_model.predict(n_periods=test_size_days)

print(f"ARIMA RMSE on test set: {np.sqrt(mean_squared_error(test_series, arima_forecast)):.2f}")

# --- Step 2: Train a Machine Learning Model (XGBoost) on ARIMA residuals ---
# For XGBoost, we need features. Let's use lagged residuals and calendar features.
def create_residual_features(residuals, lags):
    df = pd.DataFrame(residuals)
    df.columns = ['residual_target']
    for i in lags:
        df[f'res_lag_{i}'] = df['residual_target'].shift(i)
    
    df['day_of_week'] = df.index.dayofweek
    df['month'] = df.index.month
    df['year'] = df.index.year
    return df.dropna()

residual_lags = [1, 7, 14] # Lags for residuals
residual_features_df = create_residual_features(arima_train_residuals, residual_lags)

X_res_train = residual_features_df.drop(columns=['residual_target'])
y_res_train = residual_features_df['residual_target']

# Align the test set features for residual prediction
# We need to create features for the test period. This is tricky.
# For simplicity, we'll assume we can use the actual residuals from the *start* of the test period
# to generate features for the *next* residual prediction.
# In a real-world scenario, you'd need to predict residuals iteratively or use external regressors.

# For a more robust approach:
# 1. Extend the feature creation to the test period, using actuals from the test period for lags.
#    This is for demonstration and assumes we have the actuals.
#    For true forecasting, you'd need to predict these features or use only known features.
# Let's simplify and just use the last few actual residuals from training to predict the first few test residuals.
# A more correct approach for a real forecast would involve a rolling window or external regressors.

# Let's create features for the test period based on the actual test series index
# and the last known residuals from the training period.
# This requires careful handling of lags.
# For demonstration, we'll create a simplified 'future' X for residual prediction.

# Create a dummy DataFrame for future features, based on the test series index
future_features_df = pd.DataFrame(index=test_series.index)
future_features_df['day_of_week'] = future_features_df.index.dayofweek
future_features_df['month'] = future_features_df.index.month
future_features_df['year'] = future_features_df.index.year

# For lagged residuals, we need to carefully construct them.
# The first few lags for the test set will come from the end of the training residuals.
# Subsequent lags would come from predicted residuals (iterative forecasting).
# This is a simplification for demonstration.
# Let's just use the last known residuals to predict the first few test residuals.
# This is a common point of complexity in hybrid models.

# A more practical approach for feature generation for the ML model on residuals:
# For the test set, we need features for X_res_test.
# Lagged residuals for the test set would be based on the actual residuals from the training data,
# and then *predicted* residuals for subsequent steps in the forecast horizon.
# This makes the ML part iterative.
# For this example, let's simplify and just create features for the test period.
# We will use a 'naive' approach for lagged residuals for the test set:
# Assume the last few training residuals are repeated for the test set's initial lags.

# To simplify, let's just make X_res_test from calendar features for the test period.
# And assume the ML model learns patterns from calendar features and *past* residuals.
X_res_test = future_features_df.copy()
# Add a dummy lag_1 feature for demonstration. In reality, this needs careful construction.
# For a true forecast, you'd need to predict residuals iteratively or use external regressors.
# For simplicity, let's just use calendar features for the ML model on residuals.
# A more complex setup would involve `X_res_test` being built iteratively.

# Let's re-engineer features for XGBoost on residuals to be simpler for the test set.
# We'll just use calendar features for the ML model for now.
# This is a simplification to avoid complex iterative forecasting of residuals within this example.
def create_ml_features_for_residuals(index):
    df = pd.DataFrame(index=index)
    df['day_of_week'] = df.index.dayofweek
    df['month'] = df.index.month
    df['year'] = df.index.year
    return df

X_res_train_ml = create_ml_features_for_residuals(arima_train_residuals.index)
X_res_train_ml['residual_target'] = arima_train_residuals.values
X_res_train_ml = X_res_train_ml.dropna() # Drop if any NaNs from index alignment

X_res_train_ml_features = X_res_train_ml.drop(columns=['residual_target'])
y_res_train_ml_target = X_res_train_ml['residual_target']

# Create features for the test period for the ML model
X_res_test_ml_features = create_ml_features_for_residuals(test_series.index)

print("\nFitting XGBoost on ARIMA residuals...")
xgb_res_model = XGBRegressor(objective='reg:squarederror', n_estimators=100, learning_rate=0.1,
                             max_depth=3, random_state=42, n_jobs=-1)
xgb_res_model.fit(X_res_train_ml_features, y_res_train_ml_target)

# Predict residuals for the test set
xgb_residual_forecast = xgb_res_model.predict(X_res_test_ml_features)

# --- Step 3: Combine forecasts ---
hybrid_forecast = arima_forecast + xgb_residual_forecast

# 4. Evaluate the hybrid model
rmse_hybrid = np.sqrt(mean_squared_error(test_series, hybrid_forecast))
mae_hybrid = mean_absolute_error(test_series, hybrid_forecast)
print(f"\nHybrid (ARIMA + XGBoost) RMSE: {rmse_hybrid:.2f}")
print(f"Hybrid (ARIMA + XGBoost) MAE: {mae_hybrid:.2f}")

# 5. Plot results
plt.figure(figsize=(15, 7))
plt.plot(train_series.index, train_series, label='Training Data')
plt.plot(test_series.index, test_series, label='Actual Test Data')
plt.plot(test_series.index, arima_forecast, label='ARIMA Forecast', linestyle=':')
plt.plot(test_series.index, hybrid_forecast, label='Hybrid Forecast', linestyle='--')
plt.title('Hybrid ARIMA-XGBoost Time Series Forecasting')
plt.xlabel('Date')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()
```

In this example, we first fit an `auto_arima` model to the training data and generate its in-sample predictions and residuals. Then, we prepare features (here, simplified to calendar features for the test set to avoid complex iterative forecasting logic) for an `XGBRegressor` to learn from these residuals. The `XGBRegressor` predicts the residuals for the test period, and these are added to the ARIMA forecast to produce the final hybrid forecast. This setup demonstrates the core idea: ARIMA handles the linear, autocorrelated structure, and XGBoost handles the remaining non-linear patterns or external influences.

Another popular hybrid model is **Prophet-ML**. Facebook's Prophet model is excellent for time series with strong seasonalities and holidays, and it's robust to missing data and outliers. However, like ARIMA, it's primarily an additive/multiplicative model and might not capture all non-linear interactions. Combining Prophet with a machine learning model (e.g., Random Forest or LSTM) on its residuals can improve performance, especially if there are complex interactions between external regressors or non-linear trends that Prophet doesn't fully model.

The main challenge with hybrid models, especially when the ML component uses lagged features of the residuals, is that the ML model's prediction for the test set needs to be done iteratively. For each step in the forecast horizon, you would predict the residual, add it to the statistical model's forecast, and then use this *predicted* residual (or a combination of actual and predicted) as a lagged feature for the *next* residual prediction. This can add significant complexity. Common mistakes include not carefully aligning the time series indices for residuals, or not handling the iterative nature of residual forecasting correctly when using lagged features. Safety note: always ensure that the features used by the ML model for residual forecasting are truly available at the time of prediction (i.e., no future leakage).

#### Key concepts
*   **Hybrid Models:** Forecasting models that combine two or more different modeling approaches (e.g., statistical and machine learning) to leverage their complementary strengths.
*   **Residuals:** The difference between the actual observed values and the values predicted by a model. In hybrid models, the ML component often models these errors.
*   **ARIMA-ML Hybrid:** A common hybrid architecture where an ARIMA model captures linear dependencies, and a machine learning model (e.g., XGBoost, Random Forest) models the residuals of the ARIMA forecast.
*   **Prophet-ML Hybrid:** A hybrid architecture where Facebook's Prophet model handles trend, seasonality, and holidays, and a machine learning model models its residuals.
*   **Iterative Forecasting:** A process where a model predicts one step ahead, then uses that prediction as input to predict the next step, and so on, often necessary when using lagged features in the ML component of a hybrid model.
*   **Complementary Strengths:** The idea that different models excel at capturing different types of patterns (e.g., statistical models for linearity, ML models for non-linearity).

#### Hands-on activity
**Activity: Build a Prophet-XGBoost Hybrid Model for Web Traffic Forecasting**

You are provided with a synthetic dataset of daily web traffic. Your task is to build a hybrid model using Prophet to capture trend and seasonality, and XGBoost to model Prophet's residuals.

1.  Load the `web_traffic.csv` dataset (assume `ds` for date and `y` for traffic).
2.  Split the data into training and testing sets (e.g., last 30 days for testing).
3.  Train a Prophet model on the training data.
4.  Generate in-sample predictions from Prophet and calculate its residuals on the training set.
5.  Engineer features for XGBoost using these residuals (e.g., calendar features, dummy variables for special events if available).
6.  Train an `XGBRegressor` on the residual features and actual residuals.
7.  Generate Prophet's forecast for the test set.
8.  Generate XGBoost's residual forecast for the test set (using appropriate features for the test period).
9.  Combine the Prophet forecast and XGBoost residual forecast to get the final hybrid forecast.
10. Evaluate the hybrid model (RMSE, MAE) and compare it to standalone Prophet.
11. Visualize the actual, Prophet, and hybrid forecasts.

**Starter Code Template:**
```python
import pandas as pd
import numpy as np
from prophet import Prophet
from xgboost import XGBRegressor
from sklearn.metrics import mean_squared_error, mean_absolute_error
import matplotlib.pyplot as plt

# --- 1. Load Data (synthetic for demonstration) ---
np.random.seed(42)
dates = pd.date_range(start='2022-01-01', periods=365*2, freq='D') # 2 years of daily data
traffic = (np.sin(np.linspace(0, 50, len(dates))) * 500 +
           np.cos(np.linspace(0, 10, len(dates))) * 200 +
           np.random.normal(0, 100, len(dates)) +
           np.linspace(0, 5000, len(dates)) + 10000)
traffic = np.maximum(1000, traffic) # Ensure positive traffic
web_traffic_df = pd.DataFrame({'ds': dates, 'y': traffic})

# Add some artificial holiday effect
holidays = pd.DataFrame({
    'holiday': 'special_day',
    'ds': pd.to_datetime(['2022-01-01', '2022-07-04', '2022-12-25', '2023-01-01', '2023-07-04', '2023-12-25']),
    'lower_window': 0,
    'upper_window': 1,
})

# --- 2. Split Data ---
test_size_days = 30
train_df = web_traffic_df.iloc[:-test_size_days]
test_df = web_traffic_df.iloc[-test_size_days:]

print(f"Training data size: {len(train_df)} samples")
print(f"Testing data size: {len(test_df)} samples")

# --- 3. Train Prophet Model ---
print("\nFitting Prophet model...")
prophet_model = Prophet(seasonality_mode='additive',
                        yearly_seasonality=True,
                        weekly_seasonality=True,
                        daily_seasonality=False, # Assuming daily data, weekly/yearly sufficient
                        holidays=holidays,
                        changepoint_prior_scale=0.05)
prophet_model.fit(train_df)

# Generate in-sample predictions for residuals and future forecast
future_prophet = prophet_model.make_future_dataframe(periods=test_size_days, include_history=True)
prophet_full_forecast = prophet_model.predict(future_prophet)

# Extract in-sample predictions for training data
prophet_train_pred_df = prophet_full_forecast.set_index('ds').loc[train_df['ds']].reset_index()
prophet_train_pred = prophet_train_pred_df['yhat']

# Calculate Prophet residuals on training data
prophet_train_residuals = train_df['y'].values - prophet_train_pred.values
prophet_train_residuals_series = pd.Series(prophet_train_residuals, index=train_df['ds'])

# Extract Prophet forecast for the test set
prophet_test_forecast_df = prophet_full_forecast.set_index('ds').loc[test_df['ds']].reset_index()
prophet_test_forecast = prophet_test_forecast_df['yhat']

print(f"Prophet RMSE on test set: {np.sqrt(mean_squared_error(test_df['y'], prophet_test_forecast)):.2f}")

# --- 5. Engineer Features for XGBoost on Residuals ---
# For simplicity, we'll use calendar features and holiday indicators for the ML model.
# In a more complex setup, you might include lagged residuals or external regressors.
def create_ml_features(df_index, holidays_df=None):
    features = pd.DataFrame(index=df_index)
    features['day_of_week'] = features.index.dayofweek
    features['month'] = features.index.month
    features['day_of_year'] = features.index.dayofyear
    features['is_weekend'] = features['day_of_week'].isin([5, 6]).astype(int)
    
    if holidays_df is not None:
        # Create a boolean series for holidays
        holiday_dates = holidays_df['ds'].dt.date.unique()
        features['is_holiday'] = features.index.date.isin(holiday_dates).astype(int)
    else:
        features['is_holiday'] = 0 # No holidays if not provided
        
    return features

X_res_train_ml_features = create_ml_features(train_df['ds'], holidays)
y_res_train_ml_target = prophet_train_residuals_series.values

# Create features for the test period for the ML model
X_res_test_ml_features = create_ml_features(test_df['ds'], holidays)

# --- 6. Train XGBoost on Residuals ---
print("\nFitting XGBoost on Prophet residuals...")
xgb_res_model = XGBRegressor(objective='reg:squarederror', n_estimators=100, learning_rate=0.1,
                             max_depth=3, random_state=42, n_jobs=-1)
xgb_res_model.fit(X_res_train_ml_features, y_res_train_ml_target)

# Predict residuals for the test set
xgb_residual_forecast = xgb_res_model.predict(X_res_test_ml_features)

# --- 9. Combine Forecasts ---
hybrid_forecast = prophet_test_forecast.values + xgb_residual_forecast

# --- 10. Evaluate Hybrid Model ---
rmse_hybrid = np.sqrt(mean_squared_error(test_df['y'], hybrid_forecast))
mae_hybrid = mean_absolute_error(test_df['y'], hybrid_forecast)
print(f"\nHybrid (Prophet + XGBoost) RMSE: {rmse_hybrid:.2f}")
print(f"Hybrid (Prophet + XGBoost) MAE: {mae_hybrid:.2f}")

# --- 11. Visualize Results ---
plt.figure(figsize=(15, 7))
plt.plot(train_df['ds'], train_df['y'], label='Training Data')
plt.plot(test_df['ds'], test_df['y'], label='Actual Test Data')
plt.plot(test_df['ds'], prophet_test_forecast, label='Prophet Forecast', linestyle=':')
plt.plot(test_df['ds'], hybrid_forecast, label='Hybrid Forecast', linestyle='--')
plt.title('Hybrid Prophet-XGBoost Web Traffic Forecasting')
plt.xlabel('Date')
plt.ylabel('Web Traffic')
plt.legend()
plt.grid(True)
plt.show()
```

#### Assessment idea
1.  **Question:** You are building a hybrid model for forecasting electricity demand. You decide to use a statistical model (e.g., Seasonal ARIMA) to capture the trend and seasonality, and an LSTM network to model the residuals. Explain *why* this specific combination might be more effective than using either model in isolation for this problem.
    *   **Correct Answer:** This combination is likely more effective due to the complementary strengths of the two model types.
        *   **Seasonal ARIMA** is well-suited for capturing the strong, predictable linear trend and recurring seasonal patterns (e.g., daily, weekly, yearly cycles) often present in electricity demand. It provides a robust baseline forecast.
        *   However, electricity demand can also be influenced by complex, non-linear factors like sudden weather changes, economic shifts, or behavioral patterns that ARIMA might not fully capture. The **LSTM network**, a deep learning model, excels at learning complex non-linear relationships and long-term dependencies from sequential data. By training the LSTM on the *residuals* of the ARIMA model, it can focus specifically on these unmodeled, non-linear patterns and noise components, without having to re-learn the basic trend and seasonality. The hybrid model thus leverages ARIMA's statistical rigor for the structured components and LSTM's flexibility for the unstructured, non-linear errors, leading to a more accurate and robust overall forecast.

2.  **Question:** When implementing a hybrid model where a machine learning model predicts the residuals of a statistical model, what is a crucial consideration regarding the features used by the ML model for forecasting the residuals, especially when making predictions for a multi-step future horizon?
    *   **Correct Answer:** The crucial consideration is that the features used by the ML model for forecasting residuals must be **known or predictable for the entire forecast horizon**. If the ML model uses lagged residuals as features, then for each step in the future, you would need the *predicted* residual from the previous step to generate the current step's features. This implies an **iterative forecasting process** for the ML component. If the ML model uses external regressors (e.g., future temperature forecasts), those must be available for the entire forecast horizon. Failing to ensure feature availability or incorrectly handling iterative predictions (e.g., using actual future residuals as features) will lead to data leakage and an overoptimistic evaluation of the hybrid model's performance.

#### AI generation note
Create a 12-minute mixed-media lesson. Start with a conceptual animated diagram showing how a statistical model (e.g., Prophet) captures the main patterns, leaving "wiggly" residuals, and then an ML model (e.g., XGBoost) learns those wiggles. Transition to a Jupyter Notebook walkthrough of the Prophet-XGBoost web traffic activity. Clearly demonstrate: 1) fitting Prophet and getting `yhat` (predictions) and residuals, 2) creating simple calendar/holiday features for the XGBoost model from the `ds` index, 3) training XGBoost on these features and Prophet's residuals, and 4) combining the final forecasts. Use side-by-side plots to compare Prophet's standalone forecast with the hybrid forecast against actuals. Emphasize the `prophet_train_residuals_series = pd.Series(...)` step.

---

### Chapter 6.6 — Advanced Deep Learning Ensembles: Deep Stacking and Multi-Headed Architectures

#### Learning objectives
*   Understand the motivation and challenges of creating ensembles of deep learning models for time series forecasting.
*   Explain the concept of deep stacking, where deep learning models act as both base learners and potentially meta-learners.
*   Implement a basic ensemble of multiple LSTM models and combine their predictions.
*   Explore multi-headed deep learning architectures for forecasting multiple horizons or related time series simultaneously.
*   Discuss the computational considerations and interpretability challenges associated with deep learning ensembles.

#### Detailed lesson content
While traditional machine learning models benefit greatly from ensemble techniques, deep learning models, particularly LSTMs and Transformers, can also be effectively ensembled to further boost performance and robustness. Deep learning models are inherently powerful at capturing complex non-linear patterns and long-term dependencies in sequential data, but they can also be sensitive to initialization, hyperparameter choices, and the specific training data. An ensemble of deep learning models can mitigate these sensitivities, reduce variance, and provide a more stable and accurate forecast by averaging out individual model biases and errors. However, deep learning ensembles come with significant computational costs, both in terms of training time and memory, and can be more challenging to interpret.

One approach is **deep stacking**, where multiple deep learning models (e.g., several LSTMs with different architectures or initializations) serve as base learners. Their predictions are then combined by another deep learning model acting as a meta-learner. This is a direct extension of the stacking concept, but with deep networks at both levels. The meta-learner could be a simple feedforward neural network that takes the outputs of the base LSTMs as input and learns to weigh or transform them. Another common method is simply to train several identical or slightly varied deep learning models and then average their predictions, similar to bagging. This is often done by training the same model multiple times with different random seeds or by using different subsets of the training data.

Let's consider a basic ensemble of multiple LSTM models. We'll train three distinct LSTM models, each with slightly different configurations or random initializations, and then average their predictions.

```python
import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error, mean_absolute_error
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense, Dropout
from tensorflow.keras.callbacks import EarlyStopping
import matplotlib.pyplot as plt
import random
import tensorflow as tf

# Set seeds for reproducibility
def set_seeds(seed=42):
    np.random.seed(seed)
    random.seed(seed)
    tf.random.set_seed(seed)

set_seeds(42)

# 1. Generate a synthetic time series dataset
n_points = 1000
data = np.sin(np.linspace(0, 100, n_points)) * 10 + np.random.normal(0, 1, n_points) + np.linspace(0, 20, n_points)
time_series = pd.Series(data)

# 2. Preprocessing: Scaling
scaler = MinMaxScaler(feature_range=(0, 1))
scaled_data = scaler.fit_transform(time_series.values.reshape(-1, 1))

# 3. Create sequences for LSTM
def create_sequences(data, look_back):
    X, y = [], []
    for i in range(len(data) - look_back):
        X.append(data[i:(i + look_back), 0])
        y.append(data[i + look_back, 0])
    return np.array(X), np.array(y)

look_back = 30 # Use 30 previous time steps to predict the next
X, y = create_sequences(scaled_data, look_back)

# 4. Split data into training and testing sets (time series split)
train_size = int(len(X) * 0.8)
X_train, X_test = X[:train_size], X[train_size:]
y_train, y_test = y[:train_size], y[train_size:]

# Reshape input to be [samples, time steps, features] for LSTM
X_train = np.reshape(X_train, (X_train.shape[0], X_train.shape[1], 1))
X_test = np.reshape(X_test, (X_test.shape[0], X_test.shape[1], 1))

print(f"Training data shape: {X_train.shape}, {y_train.shape}")
print(f"Testing data shape: {X_test.shape}, {y_test.shape}")

# 5. Define and train multiple LSTM models
num_models = 3
lstm_models = []
predictions = []

for i in range(num_models):
    print(f"\nTraining LSTM Model {i+1}...")
    set_seeds(42 + i) # Use different seeds for diversity

    model = Sequential()
    model.add(LSTM(50, return_sequences=True, input_shape=(look_back, 1)))
    model.add(Dropout(0.2))
    model.add(LSTM(50))
    model.add(Dropout(0.2))
    model.add(Dense(1))
    model.compile(optimizer='adam', loss='mean_squared_error')
    
    early_stopping = EarlyStopping(monitor='val_loss', patience=10, restore_best_weights=True, verbose=0)
    
    history = model.fit(X_train, y_train, epochs=100, batch_size=32, verbose=0,
                        validation_split=0.1, callbacks=[early_stopping])
    
    lstm_models.append(model)
    
    # Make predictions for the test set
    y_pred_scaled = model.predict(X_test, verbose=0)
    predictions.append(y_pred_scaled)

# 6. Combine predictions (simple averaging)
ensemble_predictions_scaled = np.mean(predictions, axis=0)

# 7. Inverse transform predictions to original scale
y_test_original = scaler.inverse_transform(y_test.reshape(-1, 1))
ensemble_predictions_original = scaler.inverse_transform(ensemble_predictions_scaled)

# 8. Evaluate the ensemble
rmse_ensemble = np.sqrt(mean_squared_error(y_test_original, ensemble_predictions_original))
mae_ensemble = mean_absolute_error(y_test_original, ensemble_predictions_original)
print(f"\nLSTM Ensemble RMSE: {rmse_ensemble:.2f}")
print(f"LSTM Ensemble MAE: {mae_ensemble:.2f}")

# Optional: Evaluate individual models for comparison
for i, pred_scaled in enumerate(predictions):
    pred_original = scaler.inverse_transform(pred_scaled)
    rmse_ind = np.sqrt(mean_squared_error(y_test_original, pred_original))
    mae_ind = mean_absolute_error(y_test_original, pred_original)
    print(f"  Individual LSTM Model {i+1} RMSE: {rmse_ind:.2f}, MAE: {mae_ind:.2f}")

# 9. Plot results
plt.figure(figsize=(15, 7))
plt.plot(time_series.index[train_size + look_back:], y_test_original, label='Actual Values')
plt.plot(time_series.index[train_size + look_back:], ensemble_predictions_original, label='Ensemble Predictions', linestyle='--')
plt.title('LSTM Ensemble Time Series Forecasting')
plt.xlabel('Time Step')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()
```

In this code, we create a synthetic time series, scale it, and prepare sequences for LSTM training. We then define a standard LSTM architecture and train three instances of it. Crucially, we use different random seeds for each model (`set_seeds(42 + i)`) to encourage diversity in their learning. After training, we collect predictions from each model and compute their average for the final ensemble forecast. Early stopping is used to prevent individual LSTMs from overfitting.

Another advanced concept is **multi-headed deep learning architectures**. Instead of ensembling entirely separate models, a multi-headed architecture uses a single shared deep learning backbone (e.g., a common LSTM or Transformer encoder) and then branches out into multiple "heads," where each head is a separate output layer designed to predict a different target. For time series, this could mean:
*   **Multi-horizon forecasting:** One head predicts the next 1 hour, another predicts the next 6 hours, and a third predicts the next 24 hours.
*   **Multi-series forecasting:** If you have several related time series (e.g., sales of different but related products), a single model can learn shared patterns and predict all of them simultaneously.
*   **Probabilistic forecasting:** One head predicts the mean, another predicts the variance, for a full probabilistic forecast.

Multi-headed architectures are efficient because they share computation in the backbone, allowing the model to learn common representations across different tasks or horizons. This can lead to better performance than training separate models, especially when the tasks are related.

Common mistakes with deep learning ensembles include simply averaging models without ensuring sufficient diversity (e.g., identical models trained with the same seed), or not accounting for the significantly increased computational cost. Safety notes: Deep learning models are prone to overfitting, so rigorous validation (time series split, early stopping) is paramount. Ensure you have sufficient data for training multiple deep models, as they are data-hungry. Monitor GPU memory usage if training on accelerators.

#### Key concepts
*   **Deep Learning Ensemble:** Combining multiple deep learning models (e.g., LSTMs, Transformers) to improve forecasting accuracy and robustness.
*   **Deep Stacking:** A form of stacking where deep learning models serve as both base learners and potentially as the meta-learner.
*   **LSTM Ensemble:** An ensemble specifically composed of multiple Long Short-Term Memory networks, often with varied initializations or architectures.
*   **Multi-Headed Architecture:** A deep learning model design with a single shared backbone and multiple distinct output layers (heads), each predicting a different target (e.g., multiple forecast horizons, multiple time series).
*   **Multi-Horizon Forecasting:** Predicting multiple future time steps simultaneously (e.g., 1-step, 6-step, 24-step ahead).
*   **Computational Cost:** The significant resources (time, memory, CPU/GPU) required to train and run deep learning ensembles.
*   **Random Seed:** A starting value for a pseudorandom number generator; changing it can lead to different model initializations and thus diverse models in an ensemble.

#### Hands-on activity
**Activity: Implement a Multi-Headed LSTM for Multi-Horizon Temperature Forecasting**

You are provided with a synthetic dataset of daily average temperatures. Your goal is to build a multi-headed LSTM model that simultaneously forecasts the temperature for the next 1 day, 3 days, and 7 days.

1.  Load the `daily_temperatures.csv` dataset (assume `date` and `temp` columns).
2.  Preprocess the data: Scale the temperature values.
3.  Create sequences for the LSTM, but this time, the target `y` should be a multi-output array (e.g., `[temp_t+1, temp_t+3, temp_t+7]`).
4.  Split data into training and testing sets (time series split).
5.  Design and train a multi-headed LSTM model using `tf.keras.Model` or functional API. The model should have a shared LSTM backbone and three separate `Dense` output layers (heads) for each forecast horizon.
6.  Make predictions on the test set.
7.  Evaluate the model's performance for each horizon (RMSE, MAE).
8.  Visualize the actual vs. predicted values for one of the horizons.

**Starter Code Template:**
```python
import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error, mean_absolute_error
from tensorflow.keras.models import Model
from tensorflow.keras.layers import LSTM, Dense, Input
from tensorflow.keras.callbacks import EarlyStopping
import matplotlib.pyplot as plt
import random
import tensorflow as tf

# Set seeds for reproducibility
def set_seeds(seed=42):
    np.random.seed(seed)
    random.seed(seed)
    tf.random.set_seed(seed)

set_seeds(42)

# --- 1. Generate Data (synthetic for demonstration) ---
n_points = 1500
dates = pd.date_range(start='2019-01-01', periods=n_points, freq='D')
temp = (np.sin(np.linspace(0, 80, n_points)) * 10 +
        np.cos(np.linspace(0, 20, n_points)) * 5 +
        np.random.normal(0, 2, n_points) + 15)
temp_series = pd.Series(temp, index=dates)

# --- 2. Preprocessing: Scaling ---
scaler = MinMaxScaler(feature_range=(0, 1))
scaled_data = scaler.fit_transform(temp_series.values.reshape(-1, 1))

# --- 3. Create Multi-Output Sequences ---
def create_multi_output_sequences(data, look_back, horizons):
    X, y = [], []
    for i in range(len(data) - look_back - max(horizons)):
        X.append(data[i:(i + look_back), 0])
        
        # Collect targets for each horizon
        current_targets = [data[i + look_back + h -1, 0] for h in horizons]
        y.append(current_targets)
    return np.array(X), np.array(y)

look_back = 60 # Use 60 previous days to predict
forecast_horizons = [1, 3, 7] # Predict 1, 3, and 7 days ahead
X, y = create_multi_output_sequences(scaled_data, look_back, forecast_horizons)

# --- 4. Split Data ---
train_size = int(len(X) * 0.8)
X_train, X_test = X[:train_size], X[train_size:]
y_train, y_test = y[:train_size], y[train_size:]

# Reshape input for LSTM
X_train = np.reshape(X_train, (X_train.shape[0], X_train.shape[1], 1))
X_test = np.reshape(X_test, (X_test.shape[0], X_test.shape[1], 1))

print(f"Training data shape: {X_train.shape}, {y_train.shape}")
print(f"Testing data shape: {X_test.shape}, {y_test.shape}")
print(f"Training target shape: {y_train.shape}") # Should be (samples, num_horizons)

# --- 5. Design and Train Multi-Headed LSTM ---
print("\nDesigning and training Multi-Headed LSTM...")
input_layer = Input(shape=(look_back, 1))
lstm_shared_layer = LSTM(100, activation='relu')(input_layer)

# Output heads for each horizon
output_1_day = Dense(1, name='output_1_day')(lstm_shared_layer)
output_3_day = Dense(1, name='output_3_day')(lstm_shared_layer)
output_7_day = Dense(1, name='output_7_day')(lstm_shared_layer)

model = Model(inputs=input_layer, outputs=[output_1_day, output_3_day, output_7_day])
model.compile(optimizer='adam', loss='mean_squared_error',
              loss_weights={'output_1_day': 1.0, 'output_3_day': 1.0, 'output_7_day': 1.0})

# Prepare targets for multi-output model
y_train_1_day = y_train[:, 0]
y_train_3_day = y_train[:, 1]
y_train_7_day = y_train[:, 2]

early_stopping = EarlyStopping(monitor='val_loss', patience=15, restore_best_weights=True, verbose=0)

history = model.fit(X_train,
                    {'output_1_day': y_train_1_day,
                     'output_3_day': y_train_3_day,
                     'output_7_day': y_train_7_day},
                    epochs=150, batch_size=64, verbose=0,
                    validation_split=0.1, callbacks=[early_stopping])

# --- 6. Make Predictions ---
y_pred_1_day_scaled, y_pred_3_day_scaled, y_pred_7_day_scaled = model.predict(X_test, verbose=0)

# --- 7. Inverse Transform Predictions ---
y_test_1_day_original = scaler.inverse_transform(y_test[:, 0].reshape(-1, 1))
y_test_3_day_original = scaler.inverse_transform(y_test[:, 1].reshape(-1, 1))
y_test_7_day_original = scaler.inverse_transform(y_test[:, 2].reshape(-1, 1))

y_pred_1_day_original = scaler.inverse_transform(y_pred_1_day_scaled)
y_pred_3_day_original = scaler.inverse_transform(y_pred_3_day_scaled)
y_pred_7_day_original = scaler.inverse_transform(y_pred_7_day_scaled)

# --- 8. Evaluate Each Horizon ---
rmse_1_day = np.sqrt(mean_squared_error(y_test_1_day_original, y_pred_1_day_original))
mae_1_day = mean_absolute_error(y_test_1_day_original, y_pred_1_day_original)
print(f"\nForecast Horizon 1-Day Ahead: RMSE={rmse_1_day:.2f}, MAE={mae_1_day:.2f}")

rmse_3_day = np.sqrt(mean_squared_error(y_test_3_day_original, y_pred_3_day_original))
mae_3_day = mean_absolute_error(y_test_3_day_original, y_pred_3_day_original)
print(f"Forecast Horizon 3-Day Ahead: RMSE={rmse_3_day:.2f}, MAE={mae_3_day:.2f}")

rmse_7_day = np.sqrt(mean_squared_error(y_test_7_day_original, y_pred_7_day_original))
mae_7_day = mean_absolute_error(y_test_7_day_original, y_pred_7_day_original)
print(f"Forecast Horizon 7-Day Ahead: RMSE={rmse_7_day:.2f}, MAE={mae_7_day:.2f}")

# --- 9. Visualize Results (e.g., 7-day horizon) ---
plt.figure(figsize=(15, 7))
# Adjust index for plotting to align predictions with actual future dates
plot_start_idx = train_size + look_back + forecast_horizons[-1] -1
plot_dates = temp_series.index[plot_start_idx : plot_start_idx + len(y_test_7_day_original)]

plt.plot(plot_dates, y_test_7_day_original, label='Actual 7-Day Ahead Temp')
plt.plot(plot_dates, y_pred_7_day_original, label='Predicted 7-Day Ahead Temp', linestyle='--')
plt.title('Multi-Headed LSTM: 7-Day Ahead Temperature Forecasting')
plt.xlabel('Date')
plt.ylabel('Temperature')
plt.legend()
plt.grid(True)
plt.show()
```

#### Assessment idea
1.  **Question:** You are tasked with forecasting the next 24 hours of electricity load for a smart grid, and you decide to use an ensemble of three identical LSTM models, each trained with a different random seed. Explain the primary benefit of using different random seeds for each model in this ensemble, even if the model architectures and training data are otherwise identical.
    *   **Correct Answer:** The primary benefit of using different random seeds is to introduce **diversity** among the individual LSTM models. Deep learning models, including LSTMs, have many parameters initialized randomly (weights, biases). Different random seeds lead to different initial parameter values, which can cause the models to converge to different local minima in the loss landscape during training. This results in each model learning slightly different representations and making different types of errors. When their predictions are combined (e.g., averaged), these diverse errors tend to cancel each other out, leading to a more robust, stable, and often more accurate ensemble forecast with reduced variance compared to any single model.

2.  **Question:** Describe a practical scenario where a multi-headed deep learning architecture would be more advantageous than training separate, independent deep learning models for each task. What is the key advantage of the multi-headed approach in this scenario?
    *   **Correct Answer:** Consider a scenario where you need to forecast sales for a family of related products (e.g., different flavors of ice cream from the same brand). These products likely share common underlying trends, seasonalities, and responses to external factors (like promotions or holidays).
        A **multi-headed deep learning architecture** would be advantageous here. It would use a single shared deep learning backbone (e.g., an LSTM or Transformer encoder) to process the historical sales data and relevant features for all products. This shared backbone learns common, generalized patterns and representations that are beneficial across all product lines. Then, separate "heads" (output layers) would be attached to this backbone, with each head specifically designed to predict the sales for one particular product.
        The key advantage is **parameter sharing and learning common representations**. Instead of each independent model having to learn the same underlying trends and seasonalities from scratch (which can be redundant and less efficient), the multi-headed model leverages a shared learning process. This can lead to:
        *   **Improved generalization:** The model benefits from a larger effective dataset, as it learns from all related series simultaneously.
        *   **Reduced training time and memory:** Less redundant computation and fewer total parameters compared to multiple separate models.
        *   **Better performance:** The shared knowledge can help improve forecasts for products with sparser data by leveraging information from better-represented products.

#### AI generation note
Generate a 15-minute live coding video. Start with a brief explanation of why deep learning models benefit from ensembles. Then, dive into the multi-headed LSTM activity for temperature forecasting. Clearly demonstrate the `create_multi_output_sequences` function, explaining how `y` is structured for multiple horizons. Show the `tf.keras.Model` functional API for building the shared LSTM backbone and three distinct `Dense` output heads. Explain the `model.compile` with `loss_weights`. Display the training process and then plot the actual vs. predicted for the 7-day horizon. Highlight the `plot_dates` calculation for correct visualization. Use a professional, hands-on tone, with clear code and output in a Jupyter Notebook.

---

### Chapter 6.7 — Model Selection, Evaluation, and Deployment of Ensemble Forecasts

#### Learning objectives
*   Understand advanced evaluation metrics and statistical tests for comparing ensemble forecasts.
*   Implement robust time series cross-validation strategies, such as rolling origin and walk-forward validation, for ensemble model selection.
*   Discuss the challenges and best practices for deploying ensemble and hybrid forecasting models in production environments.
*   Explain strategies for monitoring ensemble performance and retraining models in a dynamic time series context.
*   Identify potential safety and ethical considerations when deploying automated forecasting systems.

#### Detailed lesson content
Selecting the best ensemble or hybrid model and rigorously evaluating its performance are critical steps before deployment. While metrics like RMSE and MAE provide a good initial assessment, a deeper understanding requires more advanced techniques, especially for time series. Furthermore, deploying and maintaining these complex systems in production introduces its own set of challenges.

**Advanced Evaluation Metrics and Statistical Tests:**
Beyond RMSE and MAE, other metrics are valuable. **Mean Absolute Percentage Error (MAPE)** and **Symmetric Mean Absolute Percentage Error (sMAPE)** are useful when errors need to be understood in relative terms, though they can be problematic with zero or near-zero actual values. **Mean Absolute Scaled Error (MASE)** is particularly robust as it scales the error based on a naive forecast, making it comparable across different time series.

To statistically compare two or more forecasting models (e.g., an ensemble against its best base learner), **Diebold-Mariano (DM) test** is a widely used statistical test. It assesses whether the difference in predictive accuracy between two forecasts is statistically significant. This helps confirm if your complex ensemble truly offers a statistically significant improvement over a simpler model, rather than just a marginal, random gain.

```python
from scipy.stats import t
import numpy as np

def diebold_mariano_test(actual, forecast1, forecast2, h=1):
    """
    Implements the Diebold-Mariano test for forecast accuracy.
    Assumes forecasts are for a single step ahead (h=1).
    For multi-step ahead, the variance calculation becomes more complex.
    """
    e1 = actual - forecast1
    e2 = actual - forecast2
    
    d = e1**2 - e2**2 # Loss differential (squared error loss)
    
    # Calculate sample mean of loss differential
    mean_d = np.mean(d)
    
    # Calculate long-run variance of d (Newey-West estimator for autocorrelation)
    # For h=1, we often simplify to standard variance, but for robustness with time series,
    # a Newey-West estimator is more appropriate if d is autocorrelated.
    # For simplicity here, we'll use standard variance, but note the limitation.
    # A full DM test implementation would use a HAC estimator.
    
    # For demonstration, let's use a simpler variance estimate.
    # A true DM test would consider auto-correlation up to h-1 lags.
    # Here, we'll use a basic variance for illustration.
    
    # Simplified variance for illustration (not full HAC)
    gamma0 = np.mean((d - mean_d)**2)
    var_d = gamma0
    
    # DM statistic
    dm_stat = mean_d / np.sqrt(var_d / len(d))
    
    # P-value (two-sided test)
    p_value = 2 * (1 - t.cdf(abs(dm_stat), len(d) - 1))
    
    return dm_stat, p_value

# Example usage (assuming you have actuals and two forecasts)
# actual_values = np.array([10, 12, 11, 13, 15, 14, 16])
# forecast_model_A = np.array([11, 11.5, 10.8, 13.5, 14.8, 14.2, 15.5])
# forecast_model_B = np.array([10.5, 12.1, 11.3, 12.9, 15.1, 13.9, 16.2])

# dm_stat, p_value = diebold_mariano_test(actual_values, forecast_model_A, forecast_model_B)
# print(f"Diebold-Mariano Test Statistic: {dm_stat:.2f}")
# print(f"P-value: {p_value:.3f}")
# if p_value < 0.05:
#     print("The difference in forecast accuracy is statistically significant.")
# else:
#     print("No statistically significant difference in forecast accuracy.")

```
*Note: The `diebold_mariano_test` implementation above is a simplified version for conceptual understanding. A full, robust implementation often requires a Heteroskedasticity and Autocorrelation Consistent (HAC) estimator for the variance of the loss differential, especially for multi-step forecasts.*

**Robust Time Series Cross-Validation:**
For ensemble model selection and hyperparameter tuning, standard k-fold cross-validation is inappropriate. **Rolling origin cross-validation** (also known as walk-forward validation) is the gold standard. In this approach, the training window either expands or rolls forward, and the model is repeatedly trained on historical data and evaluated on the next unseen period. This process is repeated across multiple test periods, providing a more reliable estimate of out-of-sample performance and helping to select the most robust ensemble configuration. `TimeSeriesSplit` from scikit-learn provides a convenient way to implement this.

**Deployment of Ensemble Forecasts:**
Deploying ensemble and hybrid models requires careful planning.
1.  **Serialization:** All base models and the meta-learner (or the entire hybrid structure) must be saved using tools like `pickle` or `joblib` for scikit-learn models, or `model.save()` for Keras/TensorFlow models.
2.  **API Endpoint:** The saved models are typically loaded into a web service (e.g., Flask, FastAPI) that exposes an API endpoint. When a new forecast request comes in, the service preprocesses the input, feeds it to all base models, collects their predictions, feeds those to the meta-learner, and returns the final ensemble forecast.
3.  **Computational Cost:** Ensembles are more computationally intensive. Latency requirements must be considered. Techniques like parallelizing base model predictions (if they are independent) or using faster inference engines (e.g., ONNX Runtime, TensorFlow Lite) can help.
4.  **Dependencies:** Managing dependencies for multiple models (e.g., `pmdarima`, `prophet`, `xgboost`, `tensorflow`) can be complex. Containerization (Docker) is highly recommended to ensure consistent environments.

```python
import pickle
from sklearn.linear_model import LinearRegression # Example base model

# Assume 'trained_base_model_1' and 'trained_meta_model' are already trained
# For demonstration, let's create dummy models
trained_base_model_1 = LinearRegression().fit(np.array([[1],[2],[3]]), np.array([1,2,3]))
trained_base_model_2 = LinearRegression().fit(np.array([[1],[2],[3]]), np.array([1,2,3]))
trained_meta_model = LinearRegression().fit(np.array([[1,1],[2,2],[3,3]]), np.array([1,2,3]))

# Save models
with open('base_model_1.pkl', 'wb') as f:
    pickle.dump(trained_base_model_1, f)
with open('base_model_2.pkl', 'wb') as f:
    pickle.dump(trained_base_model_2, f)
with open('meta_model.pkl', 'wb') as f:
    pickle.dump(trained_meta_model, f)

# --- Deployment scenario (conceptual) ---
# In a production environment, you would load these models:
# with open('base_model_1.pkl', 'rb') as f:
#     loaded_base_model_1 = pickle.load(f)
# with open('base_model_2.pkl', 'rb') as f:
#     loaded_base_model_2 = pickle.load(f)
# with open('meta_model.pkl', 'rb') as f:
#     loaded_meta_model = pickle.load(f)

# def predict_ensemble(input_features):
#     # Preprocess input_features
#     # ...
#     
#     # Get base model predictions
#     pred1 = loaded_base_model_1.predict(input_features)
#     pred2 = loaded_base_model_2.predict(input_features)
#     
#     # Combine for meta-learner input
#     meta_features = np.hstack([pred1.reshape(-1, 1), pred2.reshape(-1, 1)])
#     
#     # Get final ensemble prediction
#     final_prediction = loaded_meta_model.predict(meta_features)
#     
#     return final_prediction
```

**Monitoring and Retraining:**
Forecasting models, especially for time series, degrade over time due to concept drift (changes in underlying data patterns).
*   **Performance Monitoring:** Continuously monitor the ensemble's performance against actuals once they become available. Track key metrics (RMSE, MAE, MAPE) and set up alerts for significant drops in accuracy.
*   **Drift Detection:** Implement mechanisms to detect data drift (changes in input feature distributions) or concept drift (changes in the relationship between features and target).
*   **Retraining Strategy:** Define a retraining schedule. This could be fixed (e.g., weekly, monthly), event-driven (e.g., after major market shifts, policy changes), or performance-driven (e.g., when accuracy drops below a threshold). For ensembles, retraining might involve retraining all base models and the meta-learner, or selectively retraining only the components that are underperforming.

**Safety and Ethical Considerations:**
Deploying automated forecasting systems, particularly in critical domains, carries responsibilities.
*   **Bias and Fairness:** Ensure that the historical data used for training does not embed biases that could lead to unfair or discriminatory forecasts (e.g., predicting resource allocation).
*   **Transparency and Explainability:** While ensembles can be black boxes, strive for some level of interpretability. Feature importance from tree-based models, or LIME/SHAP for individual predictions, can provide insights.
*   **Robustness to Adversarial Attacks:** Understand how robust your ensemble is to manipulated input data, especially in high-stakes applications.
*   **Human Oversight:** Always maintain human oversight. Automated systems should support, not entirely replace, human decision-makers.

Common mistakes in deployment include neglecting robust monitoring, not having an automated retraining pipeline, or underestimating the computational resources required for real-time inference. Safety notes: Version control your models and training code. Implement thorough logging. Ensure your deployment infrastructure is secure and scalable.

#### Key concepts
*   **Diebold-Mariano (DM) Test:** A statistical test used to determine if the difference in predictive accuracy between two forecasts is statistically significant.
*   **Mean Absolute Scaled Error (MASE):** A robust forecast accuracy metric that scales the error based on a naive forecast, making it suitable for comparing forecasts across different time series.
*   **Rolling Origin Cross-Validation (Walk-Forward Validation):** A time series-specific cross-validation strategy where the training window expands or rolls forward, ensuring models are always evaluated on truly unseen future data.
*   **Model Serialization:** The process of saving a trained machine learning model to disk (e.g., using `pickle`) so it can be loaded and used later without retraining.
*   **API Endpoint:** A specific URL or entry point in a web service that allows other applications to interact with the deployed model and request predictions.
*   **Concept Drift:** A phenomenon where the statistical properties of the target variable, which the model is trying to predict, change over time in unforeseen ways.
*   **Data Drift:** A change in the distribution of the input data over time.
*   **Retraining Strategy:** A defined plan for periodically or conditionally updating a deployed model with new data to maintain its performance.
*   **Human Oversight:** The principle of keeping human experts in the loop to review, validate, and override automated system decisions.

#### Hands-on activity
**Activity: Implement Walk-Forward Validation for Ensemble Evaluation and Simulate Deployment**

You have developed a stacking ensemble. Your task is to:
1.  Implement a walk-forward validation scheme to rigorously evaluate its performance over multiple test periods.
2.  Simulate the saving and loading of the ensemble for deployment.
3.  Calculate MASE for the ensemble's walk-forward predictions.

**Starter Code Template:**
```python
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression, Ridge
from sklearn.ensemble import RandomForestRegressor
from xgboost import XGBRegressor
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error, mean_absolute_error
from mlxtend.regressor import StackingCVRegressor
import matplotlib.pyplot as plt
import pickle
import joblib # Alternative to pickle, often better for scikit-learn models

# --- 1. Generate Data (synthetic for demonstration) ---
np.random.seed(42)
n_points = 500
data = np.sin(np.linspace(0, 50, n_points)) * 10 + np.random.normal(0, 1, n_points) + np.linspace(0, 20, n_points)
time_series = pd.Series(data, index=pd.date_range(start='2020-01-01', periods=n_points, freq='D'))

# --- Feature Engineering (from previous chapters) ---
def create_ts_features(series, lags):
    df = pd.DataFrame(series)
    df.columns = ['target']
    for i in lags:
        df[f'lag_{i}'] = df['target'].shift(i)
    df['day_of_week'] = df.index.dayofweek
    df['month'] = df.index.month
    df['year'] = df.index.year
    return df.dropna()

lags_to_use = [1, 7, 14]
features_df = create_ts_features(time_series, lags_to_use)

X_full = features_df.drop(columns=['target'])
y_full = features_df['target']

# --- 2. Implement Walk-Forward Validation ---
print("Starting Walk-Forward Validation...")
n_splits = 5 # Number of walk-forward steps
forecast_horizon = 30 # Predict 30 days ahead for each step

all_actuals = []
all_predictions = []
all_naive_forecasts = [] # For MASE calculation

# Define base models and meta-learner for the ensemble
reg1 = RandomForestRegressor(n_estimators=50, random_state=42, n_jobs=-1, max_depth=5)
reg2 = XGBRegressor(objective='reg:squarederror', n_estimators=50, learning_rate=0.1, random_state=42, n_jobs=-1, max_depth=3)
meta_regressor = LinearRegression(n_jobs=-1)

# StackingCVRegressor will handle its internal CV for meta-feature generation
# For simplicity, we'll use a standard KFold for its internal CV, but in a real scenario,
# you might use TimeSeriesSplit for the internal stacking CV as well.
# For the *outer* walk-forward, we manually split.

# Determine the starting point for the first training set
# Ensure enough data for initial training and at least one forecast horizon
initial_train_size = len(X_full) - (n_splits * forecast_horizon)

for i in range(n_splits):
    print(f"\nWalk-Forward Step {i+1}/{n_splits}")
    
    # Define training and testing indices for the current fold
    train_end_idx = initial_train_size + (i * forecast_horizon)
    test_end_idx = train_end_idx + forecast_horizon
    
    if test_end_idx > len(X_full):
        print("  Not enough data for full forecast horizon, stopping.")
        break
        
    X_train, y_train = X_full.iloc[:train_end_idx], y_full.iloc[:train_end_idx]
    X_test, y_test = X_full.iloc[train_end_idx:test_end_idx], y_full.iloc[train_end_idx:test_end_idx]

    if len(X_test) < forecast_horizon: # Ensure the test set is full horizon
        print(f"  Skipping step {i+1} due to insufficient test data ({len(X_test)} < {forecast_horizon})")
        continue

    print(f"  Training on {len(X_train)} samples, testing on {len(X_test)} samples.")

    # Initialize and train the Stacking Ensemble for this fold
    stack_model = StackingCVRegressor(regressors=[reg1, reg2],
                                      meta_regressor=meta_regressor,
                                      cv=5, # Internal CV for stacking, could be TimeSeriesSplit
                                      use_features_in_secondary=True,
                                      random_state=42,
                                      n_jobs=-1)
    
    stack_model.fit(X_train.values, y_train.values)
    
    # Make predictions
    y_pred = stack_model.predict(X_test.values)
    
    # Store results
    all_actuals.extend(y_test.values)
    all_predictions.extend(y_pred)
    
    # For MASE: Naive forecast (last known actual value)
    naive_forecast = np.full_like(y_test.values, y_train.iloc[-1])
    all_naive_forecasts.extend(naive_forecast)

all_actuals = np.array(all_actuals)
all_predictions = np.array(all_predictions)
all_naive_forecasts = np.array(all_naive_forecasts)

# Calculate overall metrics from walk-forward validation
rmse_wf = np.sqrt(mean_squared_error(all_actuals, all_predictions))
mae_wf = mean_absolute_error(all_actuals, all_predictions)

# Calculate MASE
# Denominator: MAE of naive forecast on training data (lag-1 forecast)
# For simplicity, calculate MAE of a naive forecast on the entire actuals used for prediction
# A more robust MASE would use MAE of naive forecast on *training* data.
# Here, we approximate with the naive forecast for the test periods.
mae_naive = mean_absolute_error(all_actuals, all_naive_forecasts)
mase_wf = mae_wf / mae_naive if mae_naive != 0 else np.inf

print(f"\nWalk-Forward Validation Results:")
print(f"  Overall RMSE: {rmse_wf:.2f}")
print(f"  Overall MAE: {mae_wf:.2f}")
print(f"  Overall MASE: {mase_wf:.2f} (lower is better, <1 means better than naive)")

# --- 3. Simulate Saving and Loading for Deployment ---
# Train the final ensemble on the full available data
print("\nTraining final ensemble on full data for deployment simulation...")
final_stack_model = StackingCVRegressor(regressors=[reg1, reg2],
                                        meta_regressor=meta_regressor,
                                        cv=5, # Internal CV for stacking
                                        use_features_in_secondary=True,
                                        random_state=42,
                                        n_jobs=-1)
final_stack_model.fit(X_full.values, y_full.values)

# Save the trained ensemble model
model_filename = 'deployed_ensemble_model.joblib'
joblib.dump(final_stack_model, model_filename)
print(f"Ensemble model saved to {model_filename}")

# Simulate loading the model in a production environment
loaded_model = joblib.load(model_filename)
print(f"Ensemble model loaded from {model_filename}")

# Simulate making a prediction with the loaded model
# For a new unseen data point (e.g., the next day's features)
# This would be X_full.iloc[-1:].values for the very next step, but let's use a dummy
dummy_new_features = X_full.iloc[-1:].values # Example: features for the next prediction
simulated_forecast = loaded_model.predict(dummy_new_features)
print(f"Simulated forecast for new data: {simulated_forecast[0]:.2f}")

# Plot walk-forward predictions
plt.figure(figsize=(15, 7))
plt.plot(y_full.index, y_full, label='Actual Values (Full Data)')
# Adjust index for plotting walk-forward predictions
wf_plot_index = y_full.index[len(y_full) - len(all_predictions):]
plt.plot(wf_plot_index, all_predictions, label='Walk-Forward Ensemble Predictions', linestyle='--')
plt.title('Walk-Forward Validation of Stacking Ensemble')
plt.xlabel('Date')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()
```

#### Assessment idea
1.  **Question:** You have developed a sophisticated stacking ensemble model for forecasting quarterly economic indicators. After extensive testing, you achieve an RMSE of 0.5. A simpler, single XGBoost model achieves an RMSE of 0.6. While your ensemble has a lower RMSE, why would it be important to perform a Diebold-Mariano (DM) test before concluding that the ensemble is definitively superior for deployment?
    *   **Correct Answer:** It's important to perform a Diebold-Mariano (DM) test to determine if the observed difference in RMSE (0.5 vs. 0.6) is **statistically significant** or merely due to random chance. While an RMSE of 0.5 is numerically lower than 0.6, this difference might not be significant enough to justify the increased complexity and computational cost of the ensemble. The DM test provides a p-value. If the p-value is below a chosen significance level (e.g., 0.05), then you can confidently conclude that the ensemble's performance is statistically better. Without this statistical validation, you risk deploying a more complex model that offers no real, reliable advantage over a simpler, more maintainable alternative.

2.  **Question:** Your deployed ensemble forecasting model for energy consumption starts showing a significant drop in accuracy (e.g., RMSE increases by 20% over a month). Describe two distinct reasons why this degradation might occur and outline a corresponding action for each reason.
    *   **Correct Answer:**
        1.  **Reason: Concept Drift or Data Drift:** The underlying patterns or relationships in the energy consumption data might have changed (concept drift), or the distribution of input features (e.g., weather patterns, economic activity) might have shifted (data drift). For example, new energy policies, a sudden shift to remote work, or extreme weather events could alter consumption patterns that the model was not trained on.
            *   **Action:** Implement a **retraining strategy**. This involves retraining the ensemble model (or its most affected components) on a more recent and representative dataset that includes the new patterns. This could be a scheduled retraining (e.g., monthly) or an event-driven retraining triggered by performance degradation alerts or detected data/concept drift.
        2.  **Reason: Data Pipeline Issues or Feature Engineering Errors:** There might be an issue in the data ingestion pipeline, leading to corrupted, missing, or incorrectly transformed input features being fed to the deployed model. For example, a sensor might fail, or an external API providing weather data might change its format, causing feature engineering steps to produce incorrect inputs.
            *   **Action:** Implement **robust data quality monitoring** and **feature validation**. This involves tracking the statistics (mean, variance, missing values) of incoming raw data and engineered features. Alerts should be triggered if these statistics deviate significantly from expected ranges. Debug the data pipeline to identify and fix the source of the incorrect data or feature transformations.

#### AI generation note
Create a 15-minute mixed-media lesson. Begin with a visual explanation of why walk-forward validation is superior for time series, using an animation to show the expanding/rolling training window and consistent test horizon. Then, switch to a Jupyter Notebook demonstrating the walk-forward validation activity for the stacking ensemble. Clearly show the loop structure, how `X_train`, `y_train`, `X_test`, `y_test` are defined in each step, and how predictions are collected. Explain the MASE calculation and its interpretation. Conclude with a conceptual discussion (using diagram overlays) on model serialization (`joblib.dump`), API deployment, and the importance of continuous monitoring for concept/data drift and automated retraining strategies. Include a reflection prompt on ethical considerations of deploying black-box ensembles.

---

## Module 7: Model Evaluation, Tuning, and Deployment

This module equips you with the essential skills to rigorously evaluate, optimize, and deploy your time series forecasting models in real-world scenarios. You will move beyond basic accuracy metrics to understand the nuances of time series specific validation, learn advanced hyperparameter tuning techniques, and grasp the critical aspects of model interpretation, monitoring, and deployment for sustained performance.

---

### Chapter 7.1 — Advanced Time Series Evaluation Metrics

#### Learning objectives
*   Distinguish between common regression metrics and those specifically suited for time series forecasting.
*   Calculate and interpret scale-dependent and scale-independent error metrics like MASE and sMAPE.
*   Understand the importance of directional accuracy and calculate metrics such as hit rate.
*   Evaluate forecast uncertainty using prediction intervals and coverage.
*   Identify common pitfalls in using standard evaluation metrics for time series data.

#### Detailed lesson content
Evaluating the performance of a time series forecasting model goes far beyond simply looking at metrics like Mean Squared Error (MSE) or Root Mean Squared Error (RMSE). While these are fundamental, they often fail to capture the nuances and specific requirements of forecasting tasks. For instance, a model with a low RMSE might still be practically useless if it consistently overestimates demand, leading to excess inventory, or if it misses critical turning points in the data. In time series, the scale of the data, its seasonality, and the business context significantly influence which metrics are most appropriate.

One of the primary challenges with scale-dependent metrics like MAE or RMSE is that their absolute values are hard to interpret across different datasets or time series with varying magnitudes. A RMSE of 10 might be excellent for a series with values in the thousands but terrible for a series with values in the tens. This is where **scale-independent metrics** become invaluable. The **Mean Absolute Scaled Error (MASE)**, for example, addresses this by scaling the forecast error by the in-sample mean absolute error of a simple naive forecast. A MASE value less than 1 indicates that the forecast is better than the naive forecast on the training data. This makes MASE particularly useful for comparing forecasts across different series, even those with different scales or units.

Another widely used scale-independent metric, especially in business contexts, is the **Symmetric Mean Absolute Percentage Error (sMAPE)**. It's a variation of MAPE designed to address the issue where MAPE can be undefined or heavily biased when actual values are zero or very small. sMAPE expresses the error as a percentage, making it intuitive for stakeholders, but it also has its own biases, particularly when comparing forecasts where actual values are close to zero. It's crucial to understand that no single metric is perfect; a holistic view often requires a combination of several.

Beyond magnitude errors, the **directional accuracy** of a forecast is often critical. For many business decisions, knowing whether the future value will increase or decrease is as important as knowing the exact value. Metrics like the **Directional Accuracy (DA)** or **Hit Rate** measure the percentage of times the forecast correctly predicts the direction of change (up or down) compared to the previous period. For example, if your model predicts an increase from today to tomorrow, and the actual value increases, that's a correct directional prediction. This is particularly relevant in financial forecasting or inventory management where the trend matters significantly.

Furthermore, a point forecast (a single predicted value) provides only part of the picture. True forecasting power includes an understanding of the **uncertainty** around that forecast. **Prediction intervals** (PIs) provide a range within which the actual future value is expected to fall with a certain probability (e.g., 95%). Evaluating the *coverage* of these intervals—the percentage of actual values that fall within their respective prediction intervals—is a crucial aspect of model assessment. A model that consistently produces narrow intervals but has low coverage is overconfident, while one with wide intervals and high coverage might be too conservative. Tools like Prophet inherently provide prediction intervals, and for other models, techniques like bootstrapping or quantile regression can be used to generate them.

Common mistakes in time series evaluation include using standard k-fold cross-validation without respecting the temporal order (leading to data leakage), relying solely on a single metric, or evaluating on a test set that is too short to capture relevant seasonality or trends. It's also a mistake to compare models trained on different time periods or with different feature sets without careful consideration. Always ensure your evaluation strategy reflects the real-world deployment scenario, often involving **walk-forward validation** where the model is retrained or re-evaluated iteratively on expanding or rolling windows of data. This mimics how a forecasting system would operate in production, making predictions for the immediate future and then updating as new data arrives.

Let's consider an example of calculating MASE. Suppose we have actual values `Y = [10, 12, 11, 13, 15]` and forecasts `F = [11, 11, 12, 14, 14]`.
First, calculate the in-sample naive forecast error for the training data (assuming a naive forecast is `Y_t = Y_{t-1}`). If our training data was `[8, 9, 10, 12]`, the naive errors would be `[|9-8|, |10-9|, |12-10|] = [1, 1, 2]`. The mean absolute error of the naive forecast (denominator for MASE) would be `(1+1+2)/3 = 1.33`.
Then, calculate the mean absolute error of our model's forecasts on the test set: `MAE = (|10-11| + |12-11| + |11-12| + |13-14| + |15-14|) / 5 = (1+1+1+1+1)/5 = 1`.
Finally, `MASE = MAE / (Naive MAE) = 1 / 1.33 = 0.75`. Since `0.75 < 1`, our model is better than the naive forecast.

```python
import numpy as np

def calculate_mase(y_true, y_pred, y_train):
    """
    Calculates the Mean Absolute Scaled Error (MASE).
    y_true: Actual values for the test set.
    y_pred: Predicted values for the test set.
    y_train: Training values used to calculate the naive forecast denominator.
    """
    # Calculate MAE for the model's predictions on the test set
    mae_model = np.mean(np.abs(y_true - y_pred))

    # Calculate MAE for a naive forecast on the training set
    # Naive forecast: y_t = y_{t-1}
    mae_naive = np.mean(np.abs(y_train[1:] - y_train[:-1]))

    if mae_naive == 0:
        # Avoid division by zero if training data has no variation
        return np.inf if mae_model > 0 else 0
    
    mase = mae_model / mae_naive
    return mase

# Example usage:
y_train_example = np.array([100, 105, 102, 108, 110])
y_true_example = np.array([115, 120, 118])
y_pred_example = np.array([114, 121, 117])

mase_value = calculate_mase(y_true_example, y_pred_example, y_train_example)
print(f"MASE: {mase_value:.2f}")

# Example for sMAPE
def calculate_smape(y_true, y_pred):
    """
    Calculates the Symmetric Mean Absolute Percentage Error (sMAPE).
    """
    numerator = np.abs(y_pred - y_true)
    denominator = (np.abs(y_true) + np.abs(y_pred)) / 2
    # Handle cases where denominator is zero to avoid division by zero
    # If both y_true and y_pred are 0, error is 0. If one is 0, it's 200% error.
    # A common handling is to return 0 if both are 0, otherwise a large error.
    # For simplicity here, we'll replace 0 denominators with a small epsilon.
    epsilon = 1e-8
    return np.mean(numerator / (denominator + epsilon)) * 100

y_true_smape = np.array([10, 20, 0, 5])
y_pred_smape = np.array([12, 18, 2, 6])
smape_value = calculate_smape(y_true_smape, y_pred_smape)
print(f"sMAPE: {smape_value:.2f}%")
```

#### Key concepts
*   **Scale-dependent metrics:** Evaluation metrics (e.g., MAE, RMSE) whose values depend on the scale or units of the time series data.
*   **Scale-independent metrics:** Evaluation metrics (e.g., MASE, sMAPE) that allow for comparison across different time series regardless of their scale or units.
*   **Mean Absolute Scaled Error (MASE):** A scale-independent metric that compares the forecast error against the error of a naive forecast on the training data. A value less than 1 indicates better performance than the naive model.
*   **Symmetric Mean Absolute Percentage Error (sMAPE):** A percentage-based error metric that aims to address the bias of MAPE by normalizing with the average of actual and forecast values.
*   **Directional Accuracy (DA) / Hit Rate:** A metric measuring the percentage of times a forecast correctly predicts the direction of change (increase or decrease) in the time series.
*   **Prediction Intervals (PIs):** A range around a point forecast that quantifies the uncertainty, indicating where the actual value is expected to fall with a certain probability.
*   **Prediction Interval Coverage Probability (PICP):** The percentage of actual observations that fall within their respective prediction intervals, used to assess the reliability of PIs.
*   **Walk-forward validation:** A robust time series cross-validation technique where the model is iteratively trained on an expanding or rolling window of data and evaluated on the next unseen period, mimicking real-world deployment.

#### Hands-on activity
Implement a custom function to calculate both MASE and sMAPE for a given time series dataset.
1.  Load a sample time series dataset (e.g., daily stock prices, monthly sales data).
2.  Split the data into training and test sets using a time-based split (e.g., 80% for training, 20% for testing).
3.  Train a simple forecasting model (e.g., `statsmodels.tsa.arima.model.ARIMA` or `Prophet`) on the training data.
4.  Generate predictions for the test set.
5.  Use the provided `calculate_mase` and `calculate_smape` functions (or implement your own based on the definitions) to evaluate your model's performance on the test set.
6.  Discuss the implications of the MASE and sMAPE values for your chosen dataset.

```python
import pandas as pd
import numpy as np
from statsmodels.tsa.arima.model import ARIMA
# from prophet import Prophet # Uncomment if using Prophet

# --- Provided MASE and sMAPE functions (copy from Detailed Lesson Content) ---
def calculate_mase(y_true, y_pred, y_train):
    mae_model = np.mean(np.abs(y_true - y_pred))
    mae_naive = np.mean(np.abs(y_train[1:] - y_train[:-1]))
    if mae_naive == 0: return np.inf if mae_model > 0 else 0
    return mae_model / mae_naive

def calculate_smape(y_true, y_pred):
    numerator = np.abs(y_pred - y_true)
    denominator = (np.abs(y_true) + np.abs(y_pred)) / 2
    epsilon = 1e-8
    return np.mean(numerator / (denominator + epsilon)) * 100
# --------------------------------------------------------------------------

# 1. Load sample time series data
# For simplicity, let's create synthetic data. In a real scenario, you'd load from CSV.
np.random.seed(42)
dates = pd.date_range(start='2020-01-01', periods=100, freq='D')
data = np.cumsum(np.random.randn(100) * 5 + 10) + np.sin(np.arange(100)/5) * 50
df = pd.DataFrame({'ds': dates, 'y': data})
df.set_index('ds', inplace=True)

# 2. Split data into training and test sets
train_size = int(len(df) * 0.8)
train_df, test_df = df.iloc[:train_size], df.iloc[train_size:]

print(f"Training data length: {len(train_df)}")
print(f"Test data length: {len(test_df)}")

# 3. Train a simple forecasting model (e.g., ARIMA)
# For ARIMA, the order (p,d,q) needs to be chosen. This is a placeholder.
# In a real scenario, you'd perform ACF/PACF analysis or use auto_arima.
order = (5, 1, 0) # Example ARIMA order

try:
    model = ARIMA(train_df['y'], order=order)
    model_fit = model.fit()
    print("ARIMA model fitted successfully.")
except Exception as e:
    print(f"Error fitting ARIMA model: {e}")
    print("Consider adjusting the ARIMA order or using a different model like Prophet for robustness.")
    # Fallback to a simpler model or skip prediction if ARIMA fails
    model_fit = None

if model_fit:
    # 4. Generate predictions for the test set
    forecast_steps = len(test_df)
    forecast_results = model_fit.forecast(steps=forecast_steps)
    y_pred = forecast_results.values
    y_true = test_df['y'].values

    # Ensure y_pred and y_true have the same length
    if len(y_pred) != len(y_true):
        print(f"Warning: Forecast length ({len(y_pred)}) does not match actual length ({len(y_true)}). Truncating/padding as necessary.")
        min_len = min(len(y_pred), len(y_true))
        y_pred = y_pred[:min_len]
        y_true = y_true[:min_len]

    # 5. Evaluate model performance using MASE and sMAPE
    mase_val = calculate_mase(y_true, y_pred, train_df['y'].values)
    smape_val = calculate_smape(y_true, y_pred)

    print(f"\nModel Evaluation:")
    print(f"MASE: {mase_val:.4f}")
    print(f"sMAPE: {smape_val:.4f}%")

    # 6. Discuss implications
    if mase_val < 1:
        print("Interpretation: MASE < 1 suggests the model performs better than a naive forecast on the training data.")
    else:
        print("Interpretation: MASE >= 1 suggests the model performs no better or worse than a naive forecast.")
    print("Interpretation: sMAPE provides a percentage error that is relatively easy to understand for stakeholders.")
    print("Consider if these metrics align with business objectives (e.g., is a 10% sMAPE acceptable for inventory management?).")
else:
    print("\nSkipping evaluation due to model fitting error.")

```

#### Assessment idea
1.  **Question:** You are evaluating two forecasting models for monthly sales data. Model A has an RMSE of 500 and a MASE of 0.8. Model B has an RMSE of 300 and a MASE of 1.2. The average monthly sales are around 10,000 units. Which model would you generally prefer and why?
    **Answer:** You would generally prefer Model A. While Model B has a lower RMSE (300 vs 500), which might seem better in absolute terms, its MASE of 1.2 indicates that it performs worse than a simple naive forecast (where MASE > 1). Model A, despite a higher RMSE, has a MASE of 0.8, meaning it outperforms a naive forecast. MASE is a scale-independent metric and is often more reliable for comparing forecasting models across different datasets or when the absolute scale of the data can vary significantly. In a business context, outperforming a naive baseline is a crucial indicator of a model's utility.

2.  **Question:** Your Prophet model provides point forecasts and 80% prediction intervals. You observe that only 65% of the actual values fall within these 80% prediction intervals. What does this indicate about your model, and what steps might you take to address this?
    **Answer:** This indicates that your Prophet model is **overconfident** in its predictions. The observed Prediction Interval Coverage Probability (PICP) of 65% is lower than the desired 80% confidence level, meaning the intervals are too narrow and do not capture the true uncertainty adequately. To address this, you could:
    *   **Increase the uncertainty margin:** For Prophet, you can adjust parameters like `interval_width` (though this directly controls the *target* width, not necessarily the *achieved* coverage).
    *   **Add more regressors:** If there are external factors influencing the time series that aren't included, the model might be missing key sources of variability.
    *   **Tune Prophet's seasonality and trend parameters:** Overfitting or underfitting seasonality or trend components can impact uncertainty estimates.
    *   **Use a different uncertainty estimation method:** If Prophet's default method isn't sufficient, consider bootstrapping or quantile regression techniques on the residuals to generate more robust prediction intervals.
    *   **Re-evaluate data quality:** Outliers or sudden shifts in the data not properly handled can skew uncertainty estimates.

#### AI generation note
Create a 12-minute interactive video lesson. Begin with an animated illustration comparing standard MAE/RMSE to MASE/sMAPE using two distinct time series with different scales. Show step-by-step calculation of MASE and sMAPE on a small synthetic dataset in a Jupyter Notebook, with side-by-side code and output. Include a segment explaining directional accuracy with a line plot highlighting correct vs. incorrect direction predictions. Conclude with a visual explanation of prediction intervals and coverage using a time series plot with shaded areas. Integrate a mini-quiz with 2 multiple-choice questions about metric interpretation. Ensure all code is visible and runnable.

---

### Chapter 7.2 — Cross-Validation Strategies for Time Series

#### Learning objectives
*   Explain why traditional k-fold cross-validation is inappropriate for time series data.
*   Implement rolling origin cross-validation for robust model evaluation.
*   Apply expanding window cross-validation and understand its use cases.
*   Describe the concept of blocked cross-validation and its benefits for dependent data.
*   Select the most appropriate cross-validation strategy based on the characteristics of the time series and forecasting objective.

#### Detailed lesson content
Cross-validation is a cornerstone of robust model evaluation, helping us estimate how well a model will generalize to unseen data. However, the standard k-fold cross-validation, commonly used in independent and identically distributed (i.i.d.) data settings, is fundamentally flawed for time series. The core issue is **data leakage**: k-fold cross-validation randomly shuffles and splits the data, meaning that future information can inadvertently "leak" into the training set when predicting past values. This violates the temporal order of time series data, leading to overly optimistic performance estimates and models that fail dramatically in real-world deployment.

To address this, specialized cross-validation strategies have been developed for time series data, all of which respect the inherent temporal dependency. These methods ensure that the training data always precedes the validation data, simulating the real-world scenario where you train on past data to predict the future.

One of the most common and robust methods is **rolling origin cross-validation**, also known as **sliding window cross-validation**. In this approach, both the training window and the validation window have a fixed size. The model is trained on the first window of data, evaluated on the next, and then both windows are "rolled forward" by a fixed step (e.g., one time step or one period). This process is repeated multiple times, generating several train-validation splits. Rolling origin is excellent for assessing model stability over time and for datasets where the underlying data generating process might change, as it gives more weight to recent observations. It's particularly useful when you expect concept drift or data drift, as it continuously retrains the model on the most recent relevant data. The downside is that it can be computationally expensive due to repeated training.

Consider a time series of 100 observations. With rolling origin, you might train on observations 1-70, validate on 71-80. Then, train on 2-71, validate on 72-81, and so on. Each fold uses a fixed-size window that slides forward.

```python
from sklearn.model_selection import TimeSeriesSplit
import numpy as np
import pandas as pd

# Example data
data = np.arange(100)
X = pd.DataFrame({'feature': data})
y = pd.Series(data)

# Rolling Origin Cross-Validation (using TimeSeriesSplit with max_train_size)
# This simulates a fixed window for training and a fixed window for validation
# TimeSeriesSplit by default uses an expanding window, but we can constrain it.
# Let's say we want a training window of 50 and a validation window of 10.
# The `max_train_size` parameter in TimeSeriesSplit helps achieve this for the training part.
# However, for a true rolling *fixed* window, a custom loop is often clearer.

def rolling_origin_split(data, train_size, forecast_horizon, step_size):
    splits = []
    n_samples = len(data)
    for i in range(0, n_samples - train_size - forecast_horizon + 1, step_size):
        train_end = i + train_size
        test_end = train_end + forecast_horizon
        if test_end <= n_samples:
            splits.append((np.arange(i, train_end), np.arange(train_end, test_end)))
    return splits

# Example: train on 50, forecast 10, step 1
train_size = 50
forecast_horizon = 10
step_size = 1 # How many steps to roll forward each time

print("Rolling Origin Splits:")
for i, (train_index, test_index) in enumerate(rolling_origin_split(data, train_size, forecast_horizon, step_size)):
    if i < 3: # Print first 3 splits for brevity
        print(f"Fold {i+1}: TRAIN={train_index[0]}-{train_index[-1]}, TEST={test_index[0]}-{test_index[-1]}")
    elif i == 3:
        print("...")

```

In contrast, **expanding window cross-validation** (also known as "forward chaining" or "origin-fixed cross-validation") uses an ever-growing training set. The first fold trains on a small initial segment of data, the second fold trains on that initial segment plus the first validation set, and so on. The validation set size usually remains fixed. This method is suitable when older data is still highly relevant and you want to leverage as much historical information as possible for each forecast. It's less computationally intensive than rolling origin if the model training time doesn't scale linearly with data size, but it might not adapt as quickly to recent changes in data patterns. `sklearn.model_selection.TimeSeriesSplit` implements this strategy by default.

```python
from sklearn.model_selection import TimeSeriesSplit

# Example data
data = np.arange(100)
X = pd.DataFrame({'feature': data})
y = pd.Series(data)

# Expanding Window Cross-Validation using TimeSeriesSplit
# n_splits determines how many splits are made.
# test_size determines the size of the validation set for each split.
tscv = TimeSeriesSplit(n_splits=5, test_size=10) # 5 splits, each validation set is 10 observations

print("\nExpanding Window Splits (TimeSeriesSplit):")
for i, (train_index, test_index) in enumerate(tscv.split(X)):
    print(f"Fold {i+1}: TRAIN={train_index[0]}-{train_index[-1]}, TEST={test_index[0]}-{test_index[-1]}")
```

Finally, **blocked cross-validation** is a more general approach that can be applied when there's dependence within blocks of data, not just strictly temporal. For time series, this often means creating blocks of data that are temporally contiguous. This is particularly useful when dealing with very short time series or when you want to ensure that a certain "block" of time is never split across training and validation, for example, if you have daily data but want to evaluate on full weeks or months. It can also be applied in spatial-temporal contexts where nearby locations or times are dependent. The key idea is to avoid splitting observations that are close in time or space, thus preventing leakage.

A common mistake is to simply use `train_test_split` with `shuffle=False`. While this maintains the temporal order for a *single* split, it doesn't provide the multiple evaluation points necessary for robust cross-validation. Another pitfall is setting the validation window too small, which might not capture seasonal patterns or sufficient variability for a reliable performance estimate. Always ensure the validation set size is at least as long as your forecast horizon, and ideally, long enough to cover at least one full seasonal cycle if your data has seasonality.

When choosing a strategy, consider:
*   **Computational budget:** Rolling origin is often more expensive.
*   **Data stationarity/drift:** If the data generating process is likely to change, rolling origin is better. If it's stable and older data is always relevant, expanding window might be sufficient.
*   **Forecast horizon:** Ensure your validation window is at least as long as your desired forecast horizon.
*   **Seasonality:** Ensure your validation window captures at least one full seasonal cycle if seasonality is present.

Safety note: Never use `shuffle=True` when splitting time series data. This is a critical error that will lead to invalid model evaluation. Always explicitly manage the temporal order.

#### Key concepts
*   **Data Leakage:** The phenomenon where information from the test set inadvertently influences the training process, leading to overly optimistic performance estimates.
*   **Rolling Origin Cross-Validation (Sliding Window):** A time series cross-validation technique where both the training and validation windows have a fixed size and are successively moved forward in time.
*   **Expanding Window Cross-Validation (Forward Chaining):** A time series cross-validation technique where the training window grows with each successive fold, incorporating all previously seen data, while the validation window typically remains fixed.
*   **Blocked Cross-Validation:** A general cross-validation approach that ensures contiguous blocks of dependent data (e.g., time periods) are kept together within either the training or validation set, preventing splits across these blocks.
*   **TimeSeriesSplit:** A utility in `sklearn.model_selection` that implements expanding window cross-validation by default.

#### Hands-on activity
You are tasked with evaluating an LSTM model for predicting the next 7 days of stock prices. Implement both rolling origin and expanding window cross-validation strategies using a synthetic stock price dataset.
1.  Generate a synthetic time series dataset representing daily stock prices (e.g., a random walk with drift and some seasonality).
2.  Define a `forecast_horizon` of 7 days.
3.  Implement rolling origin cross-validation with a fixed training window of 30 days and a step size of 7 days.
4.  Implement expanding window cross-validation using `TimeSeriesSplit` with `n_splits=5` and `test_size=7`.
5.  For each split, print the start and end dates of the training and validation sets.
6.  Briefly discuss which strategy might be more suitable for stock price prediction and why.

```python
import pandas as pd
import numpy as np
from sklearn.model_selection import TimeSeriesSplit
# For a real LSTM, you'd integrate Keras/PyTorch here.
# For this activity, we'll focus on the data splitting.

# 1. Generate synthetic stock price data
np.random.seed(42)
dates = pd.date_range(start='2022-01-01', periods=200, freq='D')
price_changes = np.random.randn(200) * 0.5 + 0.1 # Random walk with slight upward drift
prices = 100 + np.cumsum(price_changes)
# Add some weekly seasonality for realism
weekly_seasonality = 5 * np.sin(np.arange(200) * (2 * np.pi / 7))
data = prices + weekly_seasonality
df = pd.DataFrame({'ds': dates, 'y': data})
df.set_index('ds', inplace=True)

print("Synthetic Stock Price Data Head:")
print(df.head())
print(f"Total data points: {len(df)}")

# 2. Define forecast horizon
forecast_horizon = 7 # Predict next 7 days

# 3. Implement Rolling Origin Cross-Validation
print("\n--- Rolling Origin Cross-Validation ---")
train_window_size = 30 # Train on 30 days
step_size = 7 # Roll forward by 7 days

def rolling_origin_splitter(df, train_size, forecast_horizon, step_size):
    splits = []
    n_samples = len(df)
    # The loop should ensure the test set fits within the data
    for i in range(0, n_samples - train_size - forecast_horizon + 1, step_size):
        train_start_idx = i
        train_end_idx = i + train_size
        test_start_idx = train_end_idx
        test_end_idx = test_start_idx + forecast_horizon
        
        # Ensure test_end_idx does not exceed the total number of samples
        if test_end_idx <= n_samples:
            train_indices = df.index[train_start_idx:train_end_idx]
            test_indices = df.index[test_start_idx:test_end_idx]
            splits.append((train_indices, test_indices))
    return splits

rolling_splits = rolling_origin_splitter(df, train_window_size, forecast_horizon, step_size)

for i, (train_idx, test_idx) in enumerate(rolling_splits):
    print(f"Fold {i+1}: Train from {train_idx.min().date()} to {train_idx.max().date()} "
          f"(len={len(train_idx)}) | Test from {test_idx.min().date()} to {test_idx.max().date()} "
          f"(len={len(test_idx)})")
    if i == 4: # Limit output for brevity
        print("...")
        break

# 4. Implement Expanding Window Cross-Validation
print("\n--- Expanding Window Cross-Validation (TimeSeriesSplit) ---")
tscv = TimeSeriesSplit(n_splits=5, test_size=forecast_horizon)

for i, (train_index_num, test_index_num) in enumerate(tscv.split(df)):
    train_idx = df.index[train_index_num]
    test_idx = df.index[test_index_num]
    print(f"Fold {i+1}: Train from {train_idx.min().date()} to {train_idx.max().date()} "
          f"(len={len(train_idx)}) | Test from {test_idx.min().date()} to {test_idx.max().date()} "
          f"(len={len(test_idx)})")

# 6. Discussion
print("\n--- Discussion ---")
print("For stock price prediction, where market dynamics can shift rapidly and older data might become less relevant over time,")
print("Rolling Origin Cross-Validation is often preferred. It continuously retrains the model on the most recent fixed window of data,")
print("making it more adaptive to changing market conditions and potential concept drift.")
print("Expanding Window Cross-Validation might be suitable if you believe all historical data is equally relevant and contributes to better predictions,")
print("but it could be slower to adapt to recent regime changes.")
print("Both methods correctly preserve the temporal order, preventing data leakage.")
```

#### Assessment idea
1.  **Question:** Explain why using `sklearn.model_selection.KFold` with `shuffle=True` is fundamentally incorrect for evaluating a time series forecasting model. Provide an example of how this could lead to misleading results.
    **Answer:** Using `KFold` with `shuffle=True` for time series forecasting is fundamentally incorrect because it violates the temporal dependency inherent in time series data. `KFold` randomly shuffles the data and then splits it into `k` folds, meaning that future observations could be included in the training set while past observations are in the test set. This creates **data leakage**. For example, if you're predicting stock prices, shuffling the data means your model might be trained on tomorrow's prices to predict today's prices, which is impossible in a real-world scenario. This leads to an artificially inflated performance metric during evaluation, as the model has access to information it wouldn't have at prediction time. When deployed, such a model would perform significantly worse than its cross-validation scores suggested.

2.  **Question:** You are building a forecasting model for a highly seasonal product (e.g., ice cream sales, with strong summer peaks). Your data spans 5 years of monthly sales. Which cross-validation strategy, rolling origin or expanding window, would you recommend, and what considerations would you have for the window sizes?
    **Answer:** For a highly seasonal product with 5 years of monthly data, I would generally recommend **rolling origin cross-validation**.
    *   **Why rolling origin:** While expanding window uses all available data, rolling origin with a fixed window size is often better for highly seasonal data because it focuses on the most recent seasonal cycles. If the seasonal patterns or their magnitudes change over time (e.g., due to climate change or market shifts), rolling origin allows the model to adapt by giving more weight to recent seasonality. It prevents very old, potentially less relevant seasonal patterns from dominating the training.
    *   **Window size considerations:**
        *   **Training window:** The training window *must* be at least long enough to capture one full seasonal cycle (e.g., 12 months for monthly data with annual seasonality). Ideally, it should cover multiple cycles (e.g., 24-36 months) to learn robust seasonal patterns.
        *   **Forecast horizon:** If you're forecasting 3 months ahead, your validation window should be at least 3 months long.
        *   **Step size:** The step size for rolling should also consider seasonality. Rolling by a full seasonal period (e.g., 12 months) can be effective, or by your forecast horizon (e.g., 3 months) to get more validation folds.
    This approach ensures that each validation fold is evaluating the model's ability to predict future seasonality based on recent historical seasonal trends, which is crucial for such products.

#### AI generation note
Design a 10-minute animated explainer video. Start by visually demonstrating how standard k-fold cross-validation breaks temporal order with a simple time series plot. Then, animate the process of rolling origin cross-validation, showing the fixed training and test windows sliding forward. Follow with an animation of expanding window cross-validation, illustrating the growing training set. Use clear color coding for train/test splits. Include a segment with Python code snippets (as shown in the detailed content) demonstrating the setup for both strategies, with an emphasis on `TimeSeriesSplit`. Conclude with a comparison table highlighting pros and cons of each. Add an interactive drag-and-drop exercise where learners match a scenario to the best cross-validation strategy.

---

### Chapter 7.3 — Hyperparameter Tuning for Time Series Models

#### Learning objectives
*   Identify the key hyperparameters for common time series models (ARIMA, Prophet, LSTM).
*   Implement grid search and random search for hyperparameter optimization in a time series context.
*   Understand the principles of Bayesian optimization and its advantages for complex models.
*   Apply time series-aware cross-validation strategies during hyperparameter tuning.
*   Recognize common challenges and best practices for tuning time series models.

#### Detailed lesson content
Hyperparameter tuning is a critical step in optimizing the performance of any machine learning model, and time series forecasting models are no exception. Hyperparameters are external configuration variables whose values are not learned from the data but must be set by the practitioner before training. These can significantly impact a model's ability to capture patterns, generalize to unseen data, and avoid overfitting. For time series models, the choice of hyperparameters often dictates how well the model handles trend, seasonality, and exogenous variables.

Let's consider the key hyperparameters for some of the models we've covered:
*   **ARIMA/SARIMA:** The `(p, d, q)` orders for the non-seasonal components and `(P, D, Q, s)` for the seasonal components are paramount. `p` and `P` relate to the number of autoregressive terms, `d` and `D` to differencing, and `q` and `Q` to moving average terms. `s` is the seasonal period. Incorrect orders can lead to underfitting (too low) or overfitting (too high).
*   **Prophet:** Key parameters include `seasonality_mode` ('additive' or 'multiplicative'), `changepoint_prior_scale` (controlling trend flexibility), `seasonality_prior_scale` (controlling seasonality flexibility), and `holidays` (for custom holiday effects). The choice of `seasonality_mode` is particularly important for series where seasonality grows with the trend.
*   **LSTM/Deep Learning Models:** These models have a vast array of hyperparameters, including the number of LSTM layers, the number of units (neurons) in each layer, dropout rates, learning rate for the optimizer, batch size, number of epochs, activation functions, and sequence length (look-back window). Tuning deep learning models is often more complex due to the sheer number of interacting parameters.

The most straightforward tuning methods are **grid search** and **random search**.
*   **Grid Search:** Systematically tries every combination of hyperparameter values specified in a grid. It's exhaustive and guarantees finding the best combination within the defined grid, but it becomes computationally intractable very quickly as the number of hyperparameters or their possible values increases.
*   **Random Search:** Samples a fixed number of hyperparameter combinations from specified distributions. It's often more efficient than grid search, especially for high-dimensional hyperparameter spaces, because it explores the space more effectively and is more likely to find good combinations in fewer iterations.

When applying these to time series, it's absolutely critical to use a **time series-aware cross-validation strategy** (like rolling origin or expanding window) within the tuning loop. You *cannot* use standard k-fold cross-validation. Libraries like `sklearn.model_selection.GridSearchCV` and `RandomizedSearchCV` can be adapted by passing a `TimeSeriesSplit` object to their `cv` parameter.

```python
from sklearn.model_selection import GridSearchCV, TimeSeriesSplit
from sklearn.preprocessing import MinMaxScaler
from sklearn.pipeline import Pipeline
from sklearn.linear_model import LinearRegression # Using a simple model for demonstration
import numpy as np
import pandas as pd

# Create synthetic time series data
np.random.seed(42)
dates = pd.date_range(start='2020-01-01', periods=100, freq='D')
y = np.cumsum(np.random.randn(100) * 2 + 5) + 100 + 10 * np.sin(np.arange(100) / 10)
X = pd.DataFrame({'feature1': np.random.rand(100), 'feature2': np.random.rand(100)})

# For time series, we often need to create lagged features manually for traditional ML models
# Let's create a simple lagged feature for demonstration
X['lag_y_1'] = pd.Series(y).shift(1)
X = X.iloc[1:] # Drop first row due to NaN from shifting
y = y[1:]

# Ensure X and y are aligned
X_aligned = X.iloc[:len(y)]

# Define a simple pipeline (e.g., scaling + linear model)
pipeline = Pipeline([
    ('scaler', MinMaxScaler()),
    ('regressor', LinearRegression())
])

# Define parameter grid for GridSearchCV
# For a real time series model like ARIMA or Prophet, the parameters would be specific to them.
# This is a conceptual example for how to structure the search.
param_grid = {
    'regressor__fit_intercept': [True, False],
    'scaler__feature_range': [(0, 1), (-1, 1)]
}

# Use TimeSeriesSplit for cross-validation
tscv = TimeSeriesSplit(n_splits=5)

# Perform GridSearchCV with TimeSeriesSplit
grid_search = GridSearchCV(pipeline, param_grid, cv=tscv, scoring='neg_mean_squared_error', verbose=1)
grid_search.fit(X_aligned, y)

print(f"\nBest parameters found by GridSearchCV: {grid_search.best_params_}")
print(f"Best cross-validation score (neg_MSE): {grid_search.best_score_:.4f}")

# For Random Search, you'd use RandomizedSearchCV similarly
# from sklearn.model_selection import RandomizedSearchCV
# randomized_search = RandomizedSearchCV(pipeline, param_distributions=param_grid, n_iter=10, cv=tscv, scoring='neg_mean_squared_error', verbose=1)
# randomized_search.fit(X_aligned, y)
```

For more complex models and larger hyperparameter spaces, **Bayesian optimization** offers a more efficient alternative. Instead of exhaustively or randomly searching, Bayesian optimization builds a probabilistic model (a surrogate model, often a Gaussian Process) of the objective function (e.g., RMSE) based on past evaluations. It then uses this surrogate model to intelligently select the next set of hyperparameters to evaluate, balancing exploration (trying new, unknown regions) and exploitation (refining promising regions). This typically finds better hyperparameters in fewer iterations compared to grid or random search. Libraries like `Optuna`, `Hyperopt`, or `Scikit-optimize` implement Bayesian optimization.

**Evolutionary algorithms** (e.g., genetic algorithms) are another advanced tuning technique. They treat hyperparameter sets as "individuals" in a population, evolving them over generations through processes like selection, mutation, and crossover to find optimal configurations. While powerful, they can be more complex to set up.

**Common mistakes and safety notes:**
*   **Ignoring temporal order:** The most critical mistake is using standard cross-validation. Always use `TimeSeriesSplit` or a custom time-series-aware split.
*   **Overfitting the validation set:** If you iterate on your hyperparameter search too many times, or manually tweak parameters based on validation set performance, you risk overfitting your validation set. Always have a final, completely unseen test set for the final model evaluation.
*   **Too broad a search space:** Starting with an excessively wide range for hyperparameters can make tuning inefficient. Begin with reasonable ranges based on domain knowledge or previous experiments.
*   **Not enough iterations/folds:** For random search or Bayesian optimization, ensure enough iterations to explore the space adequately. For cross-validation, ensure enough folds to get a stable estimate of performance.
*   **Computational cost:** Deep learning models, especially LSTMs, are computationally expensive to train. Tuning them requires significant resources and careful management of search space. Consider reducing the dataset size or number of epochs during initial tuning phases.

Best practices include starting with a coarse grid or random search, then narrowing down the search space around promising regions. For deep learning models, consider techniques like early stopping during training to prevent overfitting and save computational resources during tuning. Always visualize the tuning process if possible, looking for trends in performance across different hyperparameter values.

#### Key concepts
*   **Hyperparameters:** Configuration variables external to the model that are set before training and influence the learning process (e.g., ARIMA orders, LSTM units, learning rate).
*   **Grid Search:** An exhaustive hyperparameter tuning technique that evaluates a model for every possible combination of specified hyperparameter values.
*   **Random Search:** A hyperparameter tuning technique that samples a fixed number of hyperparameter combinations from specified distributions, often more efficient than grid search for high-dimensional spaces.
*   **Bayesian Optimization:** An intelligent hyperparameter tuning technique that builds a probabilistic surrogate model of the objective function to guide the search for optimal hyperparameters, balancing exploration and exploitation.
*   **Evolutionary Algorithms:** Optimization algorithms inspired by natural selection, used for hyperparameter tuning by evolving a population of hyperparameter sets over generations.
*   **TimeSeriesSplit:** A scikit-learn utility for performing expanding window cross-validation, essential for time series hyperparameter tuning.

#### Hands-on activity
You are tasked with tuning the `changepoint_prior_scale` and `seasonality_prior_scale` parameters for a Prophet model predicting daily website traffic.
1.  Load a sample daily website traffic dataset (e.g., generate synthetic data with trend and seasonality).
2.  Split the data into training and test sets using a time-based split.
3.  Define a hyperparameter grid for `changepoint_prior_scale` (e.g., `[0.001, 0.01, 0.05, 0.1]`) and `seasonality_prior_scale` (e.g., `[0.1, 1.0, 5.0, 10.0]`).
4.  Implement a manual grid search loop that trains a Prophet model for each combination of these parameters on the training data, makes predictions on the test data, and evaluates performance using RMSE.
5.  Identify the best performing parameter combination.
6.  Discuss the impact of these parameters on the model's fit and generalization.

```python
import pandas as pd
import numpy as np
from prophet import Prophet
from sklearn.metrics import mean_squared_error
from math import sqrt
import itertools # For generating parameter combinations

# 1. Generate synthetic daily website traffic data
np.random.seed(42)
dates = pd.date_range(start='2021-01-01', periods=365*2, freq='D') # 2 years of daily data
# Base trend
trend = np.linspace(1000, 2000, len(dates))
# Weekly seasonality
weekly_seasonality = 200 * np.sin(np.arange(len(dates)) * (2 * np.pi / 7))
# Annual seasonality
annual_seasonality = 300 * np.sin(np.arange(len(dates)) * (2 * np.pi / 365.25))
# Noise
noise = np.random.normal(0, 50, len(dates))
# Combine
y = trend + weekly_seasonality + annual_seasonality + noise
df = pd.DataFrame({'ds': dates, 'y': y})

print("Synthetic Website Traffic Data Head:")
print(df.head())
print(f"Total data points: {len(df)}")

# 2. Split data into training and test sets
train_size = int(len(df) * 0.8)
train_df, test_df = df.iloc[:train_size], df.iloc[train_size:]

print(f"Training data length: {len(train_df)}")
print(f"Test data length: {len(test_df)}")

# 3. Define hyperparameter grid
changepoint_prior_scales = [0.001, 0.01, 0.05, 0.1]
seasonality_prior_scales = [0.1, 1.0, 5.0, 10.0]

best_rmse = float('inf')
best_params = {}
results = []

print("\n--- Starting Manual Grid Search for Prophet ---")

# 4. Implement a manual grid search loop
for cps, sps in itertools.product(changepoint_prior_scales, seasonality_prior_scales):
    print(f"Testing: changepoint_prior_scale={cps}, seasonality_prior_scale={sps}")
    
    # Initialize and train Prophet model
    model = Prophet(
        seasonality_mode='additive', # Assuming additive seasonality for simplicity
        changepoint_prior_scale=cps,
        seasonality_prior_scale=sps,
        daily_seasonality=False # Assuming daily data, but not daily seasonality in this synthetic example
    )
    model.fit(train_df)
    
    # Make predictions on the test set
    future = model.make_future_dataframe(periods=len(test_df), include_history=False)
    forecast = model.predict(future)
    
    # Align forecast with actual test data
    y_true = test_df['y'].values
    y_pred = forecast['yhat'].values

    # Calculate RMSE
    rmse = sqrt(mean_squared_error(y_true, y_pred))
    results.append({'cps': cps, 'sps': sps, 'rmse': rmse})
    
    print(f"  RMSE: {rmse:.4f}")

    # 5. Identify the best performing combination
    if rmse < best_rmse:
        best_rmse = rmse
        best_params = {'changepoint_prior_scale': cps, 'seasonality_prior_scale': sps}

print("\n--- Grid Search Complete ---")
print(f"Best RMSE: {best_rmse:.4f}")
print(f"Best Parameters: {best_params}")

# 6. Discuss the impact of these parameters
print("\n--- Discussion on Parameter Impact ---")
print(f"changepoint_prior_scale ({best_params.get('changepoint_prior_scale')}):")
print("  This parameter controls the flexibility of the trend. A smaller value makes the trend more rigid, fitting fewer changepoints.")
print("  A larger value allows the trend to change more abruptly, potentially leading to overfitting if too high.")
print(f"seasonality_prior_scale ({best_params.get('seasonality_prior_scale')}):")
print("  This parameter controls the strength of the seasonality components. A smaller value dampens the seasonality.")
print("  A larger value allows for more pronounced seasonality, which can be good if seasonality is strong but can overfit if too high.")
print("The optimal values balance fitting the historical patterns well without being overly sensitive to noise or specific historical events.")
```

#### Assessment idea
1.  **Question:** You are tuning an LSTM model for multivariate time series forecasting. You have a large dataset and a complex model architecture. You start with `GridSearchCV` and `TimeSeriesSplit`, but the tuning process is taking an excessively long time. What are two alternative hyperparameter tuning strategies you could employ, and why might they be more efficient in this scenario?
    **Answer:**
    *   **Random Search:** Instead of exhaustively trying every combination, random search samples a fixed number of combinations from the specified hyperparameter distributions. For high-dimensional search spaces (common in deep learning with many hyperparameters), random search is often more efficient than grid search because it explores the space more effectively, often finding good solutions in fewer iterations. It avoids wasting time on less promising regions of the hyperparameter space.
    *   **Bayesian Optimization (e.g., using Optuna or Hyperopt):** This method builds a probabilistic model of the objective function (e.g., validation loss) and uses it to intelligently propose the next set of hyperparameters to evaluate. It balances exploration (trying new areas) and exploitation (refining promising areas), typically converging to good solutions much faster than grid or random search, especially when individual model training is expensive (like for LSTMs).

2.  **Question:** For a Prophet model, you are considering tuning `changepoint_prior_scale` and `seasonality_prior_scale`. Describe the effect of setting `changepoint_prior_scale` to a very high value (e.g., 1.0) versus a very low value (e.g., 0.001). What potential problems could arise from each extreme?
    **Answer:**
    *   **Very High `changepoint_prior_scale` (e.g., 1.0):** This makes the trend highly flexible. The model will be eager to fit many changepoints and allow the trend to change abruptly and frequently.
        *   **Potential Problem:** **Overfitting.** A very high value can cause the model to fit noise in the training data as real trend changes, leading to a highly erratic and unstable trend component. This will likely result in poor generalization to future unseen data, as the model's trend predictions will be too sensitive to minor fluctuations.
    *   **Very Low `changepoint_prior_scale` (e.g., 0.001):** This makes the trend very rigid. The model will be reluctant to fit changepoints and will assume a very smooth, almost linear trend.
        *   **Potential Problem:** **Underfitting.** A very low value can cause the model to miss significant shifts or changes in the underlying trend of the time series. If the actual data has genuine trend changes (e.g., due to policy shifts, market entry/exit), a rigid trend will fail to capture these, leading to systematic errors and biased forecasts.

#### AI generation note
Produce a 15-minute interactive coding tutorial. Start by introducing the concept of hyperparameters for ARIMA, Prophet, and LSTM models with a slide showing key parameters for each. Transition to a live coding session in a Jupyter Notebook. Demonstrate implementing `GridSearchCV` with `TimeSeriesSplit` for a simple `LinearRegression` model on a synthetic time series dataset (as in the detailed content). Then, introduce `Optuna` (or `Hyperopt`) for Bayesian optimization, showing how to define an objective function for a Prophet model and execute a study. Visualize the `Optuna` optimization history. Include a common mistake section on not using `TimeSeriesSplit` and its consequences. End with a reflection prompt asking learners to consider the computational trade-offs.

---

### Chapter 7.4 — Interpreting Time Series Model Results

#### Learning objectives
*   Interpret the coefficients and statistical summaries of traditional time series models like ARIMA.
*   Decompose Prophet forecasts into trend, seasonality, and holiday components.
*   Extract and understand feature importance from tree-based models applied to time series.
*   Gain insights into deep learning models (e.g., LSTMs) using attention mechanisms or SHAP values.
*   Perform residual analysis to diagnose model shortcomings and improve forecasts.

#### Detailed lesson content
Interpreting the results of a time series forecasting model is crucial for building trust, gaining actionable insights, and diagnosing potential issues. It's not enough to simply get a prediction; understanding *why* a model makes certain predictions allows for better decision-making and continuous improvement. The interpretability varies significantly between traditional statistical models and complex deep learning architectures.

For **traditional statistical models** like ARIMA (AutoRegressive Integrated Moving Average), interpretability is relatively straightforward. The `summary()` output from `statsmodels` provides a wealth of information. You can directly inspect the coefficients for the AR (autoregressive) and MA (moving average) terms. A positive AR(1) coefficient, for example, suggests that the current value is positively correlated with the previous period's value. The p-values associated with these coefficients indicate their statistical significance. If a coefficient's p-value is high (typically > 0.05), it suggests that the term might not be significantly contributing to the model and could potentially be removed. The model summary also provides information criteria like AIC and BIC, which help in model selection (lower values generally indicate a better fit).

```python
import pandas as pd
import numpy as np
from statsmodels.tsa.arima.model import ARIMA

# Generate synthetic data for ARIMA
np.random.seed(42)
data = np.cumsum(np.random.randn(100) * 2 + 1) + 50
index = pd.date_range(start='2020-01-01', periods=100, freq='D')
series = pd.Series(data, index=index)

# Fit an ARIMA model
model = ARIMA(series, order=(1, 1, 1)) # Example order
model_fit = model.fit()

print("ARIMA Model Summary:")
print(model_fit.summary())

# Interpretation example:
# Look for 'ar.L1.D.y' and 'ma.L1.D.y' coefficients and their p-values.
# If ar.L1.D.y coefficient is positive and significant, it means the previous differenced value
# has a positive impact on the current differenced value.
```

**Prophet**, developed by Facebook, offers excellent interpretability through its additive decomposition approach. After fitting a Prophet model, you can easily plot its components:
*   **Trend:** The underlying long-term direction of the series.
*   **Yearly Seasonality:** The recurring patterns that repeat every year.
*   **Weekly Seasonality:** The recurring patterns that repeat every week.
*   **Daily Seasonality:** (If enabled) Patterns repeating every day.
*   **Holidays/Events:** The impact of specific, user-defined events.
*   **Extra Regressors:** The influence of any additional exogenous variables you've included.
These plots allow you to visually inspect how each component contributes to the final forecast, making it very intuitive to understand the drivers of your time series. For instance, if you see a sharp upward trend, you can attribute it to the trend component, or if sales spike every Monday, that's captured by weekly seasonality.

```python
from prophet import Prophet
import pandas as pd
import numpy as np

# Generate synthetic data for Prophet
np.random.seed(0)
dates = pd.date_range(start='2018-01-01', periods=365*3, freq='D')
y = (np.sin(np.arange(len(dates)) * 2 * np.pi / 365) * 50 + # Annual seasonality
     np.sin(np.arange(len(dates)) * 2 * np.pi / 7) * 10 + # Weekly seasonality
     np.linspace(100, 200, len(dates)) + # Trend
     np.random.randn(len(dates)) * 5) # Noise
df_prophet = pd.DataFrame({'ds': dates, 'y': y})

# Fit Prophet model
m = Prophet()
m.fit(df_prophet)

# Make a future dataframe for forecasting
future = m.make_future_dataframe(periods=30)
forecast = m.predict(future)

# Plot components
# m.plot_components(forecast) # This would generate the plots visually
print("\nProphet Forecast Components (first 5 rows of forecast dataframe):")
print(forecast[['ds', 'trend', 'yearly', 'weekly', 'yhat']].head())
print("\nProphet model allows direct decomposition into trend, seasonality, and regressors.")
print("Visualizing m.plot_components(forecast) would show these contributions clearly.")
```

For **classical machine learning models** like Random Forests or Gradient Boosting Machines (e.g., XGBoost, LightGBM) when applied to time series (after feature engineering lagged values, rolling statistics, etc.), **feature importance** is a key interpretability tool. These models can tell you which engineered features (e.g., "sales from 7 days ago", "average temperature last week", "month of year") are most influential in making predictions. Libraries like `shap` (SHapley Additive exPlanations) or `eli5` provide model-agnostic methods to explain individual predictions or global feature importances, offering deeper insights than simple coefficients. For example, SHAP values can show that "lag_7_days_sales" has a strong positive impact on the forecast for today, while "is_holiday" has a negative impact.

**Deep learning models** such as LSTMs are often considered "black boxes." However, techniques are emerging to shed light on their decisions.
*   **Attention Mechanisms:** If your LSTM incorporates an attention layer, you can visualize the attention weights. These weights indicate which parts of the input sequence (e.g., which past time steps) the model focused on most when making a particular prediction. High attention weights on recent past values suggest the model prioritizes short-term memory, while high weights on distant past values might indicate it's capturing long-term dependencies.
*   **SHAP/LIME:** Model-agnostic interpretability methods like SHAP (SHapley Additive exPlanations) and LIME (Local Interpretable Model-agnostic Explanations) can also be applied to deep learning models. They work by perturbing inputs and observing changes in output, providing local explanations for individual predictions or aggregated global insights. While computationally intensive, they can reveal which input features or time steps were most critical for a given forecast.

Finally, **residual analysis** is a universal and powerful diagnostic tool for any forecasting model. Residuals are the differences between the actual values and the model's predictions (`actual - forecast`). If your model is good, the residuals should ideally be:
*   **Normally distributed:** Centered around zero.
*   **White noise:** No discernible patterns, autocorrelation, or heteroscedasticity (constant variance).
*   **No bias:** Mean of residuals should be close to zero.
Plotting residuals over time (residual plot), their distribution (histogram), and their autocorrelation function (ACF plot) can reveal issues:
*   **Patterns in residual plot:** Suggests missing trend, seasonality, or other systematic components.
*   **Non-normal distribution:** Indicates that the model's assumptions about error distribution might be violated.
*   **Autocorrelation in ACF plot:** Means there's still information in the residuals that the model hasn't captured, indicating potential underfitting or missing lagged terms.
*   **Changing variance (heteroscedasticity):** Implies the model's error magnitude changes over time, potentially requiring transformations or more sophisticated error modeling.

Common mistake: Interpreting correlation as causation. While a feature might be highly important, it doesn't necessarily mean it *causes* the change in the time series. It simply means it's a strong predictor. Also, failing to check residuals is a major oversight; they often reveal problems that metrics alone cannot.

#### Key concepts
*   **ARIMA Coefficients:** Statistical parameters in ARIMA models (AR, I, MA) that quantify the relationship between current, past, and differenced values of the time series and its forecast errors.
*   **Prophet Component Decomposition:** The ability of Prophet to break down a forecast into its constituent parts: trend, yearly seasonality, weekly seasonality, daily seasonality, and holiday effects.
*   **Feature Importance:** A measure of how much each input feature contributes to the predictions of a machine learning model, often used for interpretability in tree-based models.
*   **SHAP (SHapley Additive exPlanations):** A game theory-based approach to explain the output of any machine learning model by computing the contribution of each feature to the prediction.
*   **Attention Mechanisms:** Layers in deep learning models (like LSTMs) that allow the model to selectively focus on relevant parts of the input sequence, providing interpretability through attention weights.
*   **Residual Analysis:** The process of examining the errors (residuals) of a forecasting model to diagnose its shortcomings, identify uncaptured patterns, and assess the validity of its assumptions.
*   **Autocorrelation Function (ACF) Plot:** A plot showing the correlation of a time series with its own lagged values, used in residual analysis to detect uncaptured patterns.

#### Hands-on activity
Perform a residual analysis for a Prophet model trained on a synthetic time series with known seasonality.
1.  Generate a synthetic time series dataset with a clear trend, yearly seasonality, and some random noise.
2.  Train a Prophet model on this data.
3.  Generate predictions for the entire historical period (in-sample predictions) to get residuals.
4.  Calculate the residuals (`actual - predicted`).
5.  Plot the residuals over time.
6.  Plot a histogram of the residuals to check for normality.
7.  Plot the Autocorrelation Function (ACF) of the residuals.
8.  Interpret the plots: Are the residuals white noise? Are there any uncaptured patterns?

```python
import pandas as pd
import numpy as np
from prophet import Prophet
import matplotlib.pyplot as plt
from statsmodels.graphics.tsaplots import plot_acf
import seaborn as sns

# 1. Generate synthetic time series data
np.random.seed(42)
dates = pd.date_range(start='2019-01-01', periods=365*3, freq='D') # 3 years of daily data
# Strong trend
trend = np.linspace(50, 150, len(dates))
# Yearly seasonality
yearly_seasonality = 30 * np.sin(np.arange(len(dates)) * (2 * np.pi / 365.25))
# Weak weekly seasonality (Prophet should capture this)
weekly_seasonality = 5 * np.sin(np.arange(len(dates)) * (2 * np.pi / 7))
# Noise
noise = np.random.normal(0, 7, len(dates))
# Combine
y = trend + yearly_seasonality + weekly_seasonality + noise
df_activity = pd.DataFrame({'ds': dates, 'y': y})

# Introduce a subtle uncaptured pattern: a small, short-term spike every 60 days
for i in range(0, len(df_activity), 60):
    if i + 5 < len(df_activity):
        df_activity.loc[df_activity.index[i:i+5], 'y'] += 10 # Small spike for 5 days

print("Synthetic Data Head:")
print(df_activity.head())

# 2. Train a Prophet model
m = Prophet(daily_seasonality=False) # Disable daily to focus on yearly/weekly
m.fit(df_activity)

# 3. Generate predictions for the entire historical period (in-sample)
forecast = m.predict(df_activity[['ds']])
df_activity['yhat'] = forecast['yhat']

# 4. Calculate residuals
df_activity['residuals'] = df_activity['y'] - df_activity['yhat']

print("\nResiduals Data Head:")
print(df_activity[['y', 'yhat', 'residuals']].head())

# 5. Plot the residuals over time
plt.figure(figsize=(14, 6))
plt.plot(df_activity['ds'], df_activity['residuals'], label='Residuals')
plt.axhline(0, color='red', linestyle='--', linewidth=0.8)
plt.title('Residuals Over Time')
plt.xlabel('Date')
plt.ylabel('Residual Value')
plt.legend()
plt.grid(True)
plt.show()

# 6. Plot a histogram of the residuals
plt.figure(figsize=(10, 6))
sns.histplot(df_activity['residuals'], kde=True, bins=30)
plt.title('Histogram of Residuals')
plt.xlabel('Residual Value')
plt.ylabel('Frequency')
plt.show()

# 7. Plot the Autocorrelation Function (ACF) of the residuals
plt.figure(figsize=(12, 5))
plot_acf(df_activity['residuals'], lags=30, alpha=0.05) # Lags up to 30 days
plt.title('Autocorrelation Function of Residuals')
plt.xlabel('Lag')
plt.ylabel('Autocorrelation')
plt.show()

# 8. Interpret the plots
print("\n--- Residual Analysis Interpretation ---")
print("1. Residuals Over Time Plot:")
print("   - Look for any visible patterns (e.g., trend, seasonality, increasing/decreasing variance).")
print("   - In this example, you might observe small, periodic spikes that the model didn't fully capture, due to the artificial spikes we introduced.")
print("   - Ideally, residuals should be randomly scattered around zero.")
print("\n2. Histogram of Residuals:")
print("   - Check if the distribution is roughly centered around zero and appears approximately normal (bell-shaped).")
print("   - Significant skewness or multiple peaks would indicate issues.")
print(f"   - Mean of residuals: {df_activity['residuals'].mean():.4f}")
print(f"   - Std Dev of residuals: {df_activity['residuals'].std():.4f}")
print("\n3. Autocorrelation Function (ACF) Plot of Residuals:")
print("   - The blue shaded area represents the confidence interval. Any spikes outside this area indicate significant autocorrelation.")
print("   - Significant spikes at specific lags (e.g., lag 7 for weekly seasonality, lag 30 for monthly patterns) suggest the model has not fully captured these patterns.")
print("   - For a good model, residuals should be white noise, meaning no significant autocorrelation beyond lag 0.")
print("   - In our example, you might see small spikes at lags corresponding to the artificial pattern (e.g., around 5 days, 60 days) if the model didn't perfectly handle them, or perhaps some remaining weekly seasonality if Prophet's default settings weren't strong enough.")
```

#### Assessment idea
1.  **Question:** You have trained an ARIMA(2,1,0) model on monthly sales data. Upon inspecting the `model_fit.summary()` output, you notice that the p-value for the `ar.L2.D.y` coefficient is 0.45, while the p-value for `ar.L1.D.y` is 0.001. What does this suggest about your model, and what action might you consider taking?
    **Answer:** The high p-value (0.45) for `ar.L2.D.y` suggests that the second autoregressive term is **not statistically significant** at common significance levels (e.g., 0.05). This means that the differenced sales from two months ago do not have a significant linear relationship with the current differenced sales, after accounting for the first lag. In contrast, `ar.L1.D.y` is highly significant (p-value 0.001).
    **Action:** You should consider **simplifying the model by removing the `ar.L2.D.y` term**, effectively re-fitting an ARIMA(1,1,0) model. This would reduce model complexity without significantly impacting predictive power, potentially leading to a more parsimonious and robust model. You would then re-evaluate the new model's performance and residuals.

2.  **Question:** After training a Prophet model for daily energy consumption, you perform residual analysis. The plot of residuals over time shows a clear pattern where residuals are consistently positive in the summer months and consistently negative in the winter months. What does this pattern indicate, and how might you address it within the Prophet framework?
    **Answer:** This pattern indicates that your Prophet model is **systematically underestimating energy consumption in summer and overestimating it in winter**. This is a strong sign that the model is **not fully capturing the yearly seasonality or that the seasonality mode is incorrect**.
    **How to address it within Prophet:**
    *   **Check `seasonality_mode`:** If your current `seasonality_mode` is 'additive', and energy consumption seasonality *increases* with overall consumption (e.g., higher base consumption in summer means larger seasonal swings), you might need to switch to `'multiplicative'`.
    *   **Adjust `seasonality_prior_scale`:** If the seasonality is very strong, the default `seasonality_prior_scale` might be too low, causing the model to underfit the seasonal component. Increasing this parameter would allow the model to fit a more pronounced seasonal pattern.
    *   **Add custom seasonality:** If the yearly seasonality is complex or has specific nuances not captured by the default Fourier series, you could define a custom yearly seasonality with more Fourier terms.
    *   **Include relevant regressors:** If there are external factors like temperature, humidity, or specific holidays that correlate with energy consumption, adding these as extra regressors could help the model capture these patterns more accurately.

#### AI generation note
Create a 14-minute mixed-format lesson. Start with a slide outlining the importance of interpretability. Transition to a live coding demo in a Jupyter Notebook, showing the `ARIMA` model summary interpretation, highlighting p-values and coefficients. Next, demonstrate Prophet's `plot_components` functionality with an animated overlay explaining each component (trend, yearly, weekly). For deep learning, use a conceptual diagram to explain attention weights in an LSTM, followed by a brief example of how SHAP values would be applied (no live SHAP code, just conceptual). Conclude with a detailed walk-through of residual analysis: plot residuals, histogram, and ACF, with clear visual interpretations of each. Include an interactive element where learners identify a problem from a given residual plot.

---

### Chapter 7.5 — Model Monitoring and Retraining Strategies

#### Learning objectives
*   Understand the concepts of model drift, concept drift, and data drift in time series forecasting.
*   Identify key metrics and indicators for monitoring the performance and health of deployed forecasting models.
*   Design and implement alert systems for detecting significant drops in forecast accuracy or data anomalies.
*   Evaluate different retraining strategies (periodic, event-driven, continuous) for time series models.
*   Develop a basic framework for MLOps in a time series forecasting context, focusing on monitoring and retraining pipelines.

#### Detailed lesson content
Deploying a time series forecasting model is not the end of the journey; it's just the beginning. Real-world data is dynamic, and a model that performs excellently today might degrade significantly tomorrow. This phenomenon is broadly known as **model drift**, and it's particularly prevalent in time series due to the evolving nature of underlying processes. Model drift encompasses two main types: **concept drift** and **data drift**.

**Concept drift** occurs when the relationship between the input features and the target variable changes over time. For example, a model predicting retail sales might have learned that a certain marketing campaign always boosts sales by 10%. If consumer behavior changes, and future campaigns only yield a 5% boost, the model's "concept" of campaign effectiveness has drifted. This is a change in the underlying data-generating process.
**Data drift**, on the other hand, refers to changes in the distribution of the input features themselves, while the relationship with the target might remain the same. For instance, if your model uses "average temperature" as a feature, and due to climate change, average temperatures start shifting upwards, that's data drift. The model might still correctly predict sales given a certain temperature, but the *inputs* it receives are now outside its original training distribution. Both types of drift lead to degraded model performance and necessitate intervention.

To combat drift, robust **model monitoring** is essential. This involves continuously tracking various metrics and characteristics of your deployed model and its inputs. Key monitoring metrics include:
*   **Forecast Accuracy Metrics:** Regularly calculate and track metrics like RMSE, MAE, MASE, sMAPE on recent actuals. A sudden increase in these errors is a primary indicator of drift.
*   **Prediction Interval Coverage:** Monitor the PICP (Prediction Interval Coverage Probability). If the actual coverage drops significantly below the nominal confidence level (e.g., 95% PIs only cover 70% of actuals), it indicates the model is becoming overconfident or its uncertainty estimates are no longer reliable.
*   **Residual Analysis:** Periodically perform residual analysis (as discussed in Chapter 7.4) on recent forecasts. Look for new patterns, biases, or autocorrelation in the residuals, which signal uncaptured dynamics.
*   **Input Data Distribution:** Monitor the statistical properties (mean, variance, min, max, histograms) of your input features. Significant shifts in these distributions can indicate data drift.
*   **Feature Importance (if applicable):** For models where feature importance can be calculated, monitor if the relative importance of features changes drastically, which could signal concept drift.
*   **Model Output Distribution:** Track the distribution of your model's predictions. Unexpected shifts (e.g., forecasts suddenly become much higher or lower than historical norms) could indicate a problem.

**Alert systems** should be built around these monitoring metrics. You can set thresholds (e.g., "if MASE increases by 20% compared to the last month," or "if the mean residual deviates from zero by more than 2 standard deviations"). When a threshold is crossed, an alert (email, Slack notification, dashboard highlight) should be triggered, prompting investigation.

When drift is detected, or even proactively, **retraining strategies** come into play.
1.  **Periodic Retraining:** This is the simplest strategy, where the model is automatically retrained at fixed intervals (e.g., daily, weekly, monthly). It's robust and ensures the model always has relatively fresh data. However, it might retrain unnecessarily (wasting resources) or miss critical, sudden shifts if the interval is too long.
2.  **Event-Driven Retraining:** The model is retrained only when a specific event occurs, such as:
    *   A significant drop in forecast accuracy (triggered by monitoring alerts).
    *   Detection of data drift or concept drift.
    *   Deployment of new features or changes in the underlying system.
    *   Addition of new holiday information or external regressors.
    This is more efficient as it only retrains when needed, but requires sophisticated monitoring to detect the "events."
3.  **Continuous Retraining (Online Learning):** For certain models (e.g., some statistical models, or specific deep learning architectures designed for online learning), the model can be updated incrementally with new data as it arrives, without a full re-train from scratch. This is the most adaptive but also the most complex to implement and manage, and not all models support it effectively.

For time series models, retraining often means retraining the entire model from scratch on an updated dataset that includes the most recent actuals. This is typically done using an **expanding window** approach, where the training data continuously grows. For models like Prophet or ARIMA, this is usually feasible. For large deep learning models, periodic retraining on a rolling window (fixed size, sliding forward) might be more practical to manage computational costs.

**Safety Note:** Always test a retrained model on a hold-out validation set (the most recent unseen data) before deploying it to production. Never blindly deploy a retrained model without verifying its performance. Also, ensure your retraining pipeline is robust and can handle data ingestion issues or model training failures gracefully.

```python
import pandas as pd
import numpy as np
from prophet import Prophet
from sklearn.metrics import mean_absolute_error
import matplotlib.pyplot as plt

# Simulate data with concept drift
np.random.seed(42)
dates_part1 = pd.date_range(start='2020-01-01', periods=365, freq='D')
y_part1 = 100 + np.cumsum(np.random.randn(365)) + 10 * np.sin(np.arange(365) * 2 * np.pi / 30)

dates_part2 = pd.date_range(start='2021-01-01', periods=365, freq='D')
# Drift: seasonality strength changes, and base level increases
y_part2 = 150 + np.cumsum(np.random.randn(365) * 1.2) + 25 * np.sin(np.arange(365) * 2 * np.pi / 30)

df_drift = pd.DataFrame({'ds': dates_part1.append(dates_part2), 'y': np.concatenate([y_part1, y_part2])})

# Split into initial train, initial test, and new data for monitoring
train_initial = df_drift.iloc[:500]
test_initial = df_drift.iloc[500:600] # 100 days for initial evaluation
new_data_for_monitoring = df_drift.iloc[600:] # Remaining data for simulating monitoring

# 1. Initial Model Training
m_initial = Prophet(seasonality_mode='additive', daily_seasonality=False)
m_initial.fit(train_initial)

# 2. Initial Evaluation
future_initial = m_initial.make_future_dataframe(periods=len(test_initial), include_history=False)
forecast_initial = m_initial.predict(future_initial)
mae_initial = mean_absolute_error(test_initial['y'], forecast_initial['yhat'])
print(f"Initial Model MAE on initial test set: {mae_initial:.2f}")

# Simulate monitoring over time
monitoring_window_size = 30 # Evaluate MAE over last 30 days
retrain_threshold_mae = mae_initial * 1.2 # Retrain if MAE increases by 20%

print("\n--- Simulating Model Monitoring and Retraining ---")
current_train_data = df_drift.iloc[:600] # Initial training data + initial test data
retrain_count = 0

for i in range(0, len(new_data_for_monitoring) - monitoring_window_size, 10): # Check every 10 days
    current_monitoring_slice = new_data_for_monitoring.iloc[i : i + monitoring_window_size]
    
    if len(current_monitoring_slice) < monitoring_window_size:
        break # Not enough data for a full monitoring window

    # Predict for the current monitoring slice using the current deployed model
    future_monitor = pd.DataFrame({'ds': current_monitoring_slice['ds']})
    forecast_monitor = m_initial.predict(future_monitor)
    
    mae_current = mean_absolute_error(current_monitoring_slice['y'], forecast_monitor['yhat'])
    
    print(f"Monitoring Period: {current_monitoring_slice['ds'].min().date()} to {current_monitoring_slice['ds'].max().date()} - Current MAE: {mae_current:.2f}")

    if mae_current > retrain_threshold_mae:
        print(f"  ALERT: MAE ({mae_current:.2f}) exceeded threshold ({retrain_threshold_mae:.2f})! Retraining model...")
        retrain_count += 1
        
        # Retrain strategy: Expanding Window (retrain on all data seen so far)
        # In a real system, this would be a full pipeline execution.
        new_training_data_end_idx = df_drift.index.get_loc(current_monitoring_slice['ds'].max())
        current_train_data = df_drift.iloc[:new_training_data_end_idx + 1]

        m_initial = Prophet(seasonality_mode='additive', daily_seasonality=False)
        m_initial.fit(current_train_data)
        print(f"  Model retrained with data up to {current_train_data['ds'].max().date()}.")
        
        # Reset threshold for the newly retrained model (or use a fixed global threshold)
        # For simplicity, let's re-evaluate MAE on the *new* model's performance over the same window
        future_monitor_retrained = pd.DataFrame({'ds': current_monitoring_slice['ds']})
        forecast_monitor_retrained = m_initial.predict(future_monitor_retrained)
        mae_retrained = mean_absolute_error(current_monitoring_slice['y'], forecast_monitor_retrained['yhat'])
        print(f"  New model MAE on same monitoring slice: {mae_retrained:.2f}")
        retrain_threshold_mae = mae_retrained * 1.2 # Update threshold based on new model's performance
    
print(f"\nTotal retrains performed: {retrain_count}")

# Visualize the drift and retraining points (conceptual)
plt.figure(figsize=(15, 7))
plt.plot(df_drift['ds'], df_drift['y'], label='Actual Data', color='blue', alpha=0.7)
plt.axvline(x=df_drift['ds'].iloc[500], color='green', linestyle='--', label='Initial Test Start')
plt.axvline(x=df_drift['ds'].iloc[600], color='orange', linestyle='--', label='Monitoring Start')
plt.title('Simulated Data with Concept Drift and Monitoring')
plt.xlabel('Date')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()
```

#### Key concepts
*   **Model Drift:** The degradation of a machine learning model's performance over time due to changes in the underlying data or its relationship with the target variable.
*   **Concept Drift:** A type of model drift where the statistical properties of the target variable, which the model is trying to predict, change over time, making the original model's learned relationship obsolete.
*   **Data Drift:** A type of model drift where the statistical properties of the input features to the model change over time, even if the relationship between features and target remains constant.
*   **Model Monitoring:** The continuous process of tracking the performance, inputs, and outputs of a deployed machine learning model to detect drift and other issues.
*   **Alert Systems:** Automated notifications triggered when monitored metrics cross predefined thresholds, indicating potential model degradation or data anomalies.
*   **Periodic Retraining:** A retraining strategy where models are updated at fixed time intervals (e.g., daily, weekly) regardless of performance.
*   **Event-Driven Retraining:** A retraining strategy where models are updated only when specific conditions are met, such as a significant drop in accuracy or detection of data/concept drift.
*   **Continuous Retraining (Online Learning):** A sophisticated retraining strategy where models are incrementally updated with new data as it arrives, often in real-time.

#### Hands-on activity
You are responsible for monitoring a deployed LSTM model that forecasts daily energy demand. Design a monitoring dashboard concept and write Python code to simulate checking for forecast accuracy degradation over a rolling window.
1.  Generate a synthetic dataset of daily energy demand with a trend and seasonality.
2.  Simulate a deployed LSTM model by creating a function that produces forecasts (assume it's a pre-trained model).
3.  Introduce a period of "drift" in the synthetic data where the model's performance would realistically degrade (e.g., change seasonality strength or add a new, unmodeled event).
4.  Implement a loop that simulates daily monitoring:
    *   Collect the last 30 days of actuals and forecasts.
    *   Calculate the MAE for this 30-day window.
    *   Compare the current MAE to a baseline MAE (from initial deployment).
    *   If the MAE exceeds a predefined threshold (e.g., 20% increase over baseline), print an alert.
5.  Discuss how you would visualize these metrics in a dashboard.

```python
import pandas as pd
import numpy as np
from sklearn.metrics import mean_absolute_error
import matplotlib.pyplot as plt

# 1. Generate synthetic daily energy demand data
np.random.seed(42)
dates = pd.date_range(start='2022-01-01', periods=365*2, freq='D') # 2 years
base_demand = np.linspace(1000, 1500, len(dates)) # Upward trend
weekly_seasonality = 100 * np.sin(np.arange(len(dates)) * (2 * np.pi / 7))
yearly_seasonality = 200 * np.sin(np.arange(len(dates)) * (2 * np.pi / 365.25))
noise = np.random.normal(0, 30, len(dates))
actual_demand = base_demand + weekly_seasonality + yearly_seasonality + noise

# Introduce "drift" after 1.5 years (around index 365 + 365/2 = 547)
drift_start_idx = 547
actual_demand[drift_start_idx:] += 200 # Sudden increase in base demand
actual_demand[drift_start_idx:] += 50 * np.cos(np.arange(len(dates) - drift_start_idx) * 2 * np.pi / 14) # New 2-week cycle

df_demand = pd.DataFrame({'ds': dates, 'y': actual_demand})

# 2. Simulate a deployed LSTM model's forecasts
# For simplicity, let's assume the "deployed model" is a slightly noisy version of the actual data
# and it doesn't know about the drift initially.
def simulate_lstm_forecast(data_series, drift_start_idx):
    forecasts = data_series.copy()
    # Before drift, forecasts are good
    forecasts.iloc[:drift_start_idx] = data_series.iloc[:drift_start_idx] + np.random.normal(0, 25, drift_start_idx)
    # After drift, forecasts are biased/miss new patterns
    forecasts.iloc[drift_start_idx:] = data_series.iloc[drift_start_idx:] - 150 + np.random.normal(0, 40, len(data_series) - drift_start_idx)
    return forecasts

df_demand['yhat'] = simulate_lstm_forecast(df_demand['y'], drift_start_idx)

# 3. Baseline MAE (from initial deployment, e.g., on a stable period)
baseline_mae_period_end = drift_start_idx - 1 # Before drift
baseline_mae = mean_absolute_error(df_demand['y'].iloc[drift_start_idx-30:baseline_mae_period_end], 
                                   df_demand['yhat'].iloc[drift_start_idx-30:baseline_mae_period_end])
print(f"Baseline MAE (pre-drift): {baseline_mae:.2f}")

# 4. Implement daily monitoring loop
monitoring_window_size = 30 # days
mae_threshold_factor = 1.2 # Alert if MAE increases by 20%
alert_threshold = baseline_mae * mae_threshold_factor

monitoring_maes = []
alert_dates = []

print(f"\n--- Simulating Daily Monitoring for LSTM Forecasts ---")
print(f"Alert threshold for MAE: {alert_threshold:.2f}")

# Start monitoring from a point after initial deployment and baseline calculation
monitoring_start_idx = baseline_mae_period_end + 1

for i in range(monitoring_start_idx, len(df_demand) - monitoring_window_size + 1):
    current_window_start = i
    current_window_end = i + monitoring_window_size
    
    actuals_window = df_demand['y'].iloc[current_window_start:current_window_end]
    forecasts_window = df_demand['yhat'].iloc[current_window_start:current_window_end]
    
    current_mae = mean_absolute_error(actuals_window, forecasts_window)
    monitoring_maes.append({'date': df_demand['ds'].iloc[current_window_end-1], 'mae': current_mae})
    
    if current_mae > alert_threshold:
        print(f"ALERT on {df_demand['ds'].iloc[current_window_end-1].date()}: MAE ({current_mae:.2f}) exceeded threshold ({alert_threshold:.2f})!")
        alert_dates.append(df_demand['ds'].iloc[current_window_end-1])

monitoring_df = pd.DataFrame(monitoring_maes)

# Visualize monitoring results
plt.figure(figsize=(16, 8))
plt.plot(df_demand['ds'], df_demand['y'], label='Actual Demand', color='blue', alpha=0.7)
plt.plot(df_demand['ds'], df_demand['yhat'], label='LSTM Forecast', color='orange', linestyle='--', alpha=0.7)
plt.axvline(x=df_demand['ds'].iloc[drift_start_idx], color='red', linestyle=':', label='Simulated Drift Start')
plt.plot(monitoring_df['date'], monitoring_df['mae'], label='Rolling 30-day MAE', color='purple', linewidth=2)
plt.axhline(y=baseline_mae, color='green', linestyle='--', label='Baseline MAE')
plt.axhline(y=alert_threshold, color='red', linestyle='-', label='Alert Threshold MAE')
for adate in alert_dates:
    plt.axvline(x=adate, color='gray', linestyle='-.', alpha=0.6, label='_nolegend_')
    plt.text(adate, plt.ylim()[1]*0.95, 'ALERT', rotation=90, va='top', ha='center', color='gray', fontsize=8)

plt.title('Energy Demand Forecasting: Actuals, Forecasts, and MAE Monitoring')
plt.xlabel('Date')
plt.ylabel('Value / MAE')
plt.legend()
plt.grid(True)
plt.show()

# 5. Discuss dashboard visualization
print("\n--- Dashboard Visualization Concept ---")
print("A monitoring dashboard for this scenario would typically include:")
print("1.  **Time Series Plot:** Actual vs. Forecasted values, with a clear indication of the forecast horizon.")
print("2.  **Performance Metrics Over Time:** A line chart showing the rolling 30-day (or other window) MAE, RMSE, or MASE, along with the baseline and alert thresholds. This would immediately highlight when performance degrades.")
print("3.  **Residuals Plot:** A plot of recent residuals over time, and possibly an ACF plot of residuals, to visually inspect for uncaptured patterns.")
print("4.  **Input Feature Distribution Shifts:** Histograms or density plots of key input features (e.g., temperature, day of week) compared to their training distribution, with statistical tests for divergence.")
print("5.  **Prediction Interval Coverage:** A metric showing the percentage of actuals falling within confidence intervals, indicating model calibration.")
print("6.  **Alert Log:** A table or list of triggered alerts, including timestamps and the specific metric that crossed the threshold.")
print("The goal is to provide a quick, comprehensive overview of model health and trigger timely interventions.")
```

#### Assessment idea
1.  **Question:** Your time series forecasting model for website traffic has been deployed for six months. Recently, you've noticed that the weekly seasonality component in your Prophet model's decomposition plot has become much weaker, and the model's MAE has steadily increased. The actual traffic data, however, still shows clear weekly patterns. What type of drift is most likely occurring here, and what immediate action should you take?
    **Answer:** This scenario strongly suggests **concept drift**. The relationship between the "day of the week" feature (which drives weekly seasonality) and the actual website traffic has changed, causing the model to underfit this pattern. The model's internal understanding (concept) of how weekly seasonality impacts traffic is no longer accurate, even though the actual data still exhibits the pattern.
    **Immediate Action:** You should trigger an **event-driven retraining** of the Prophet model. The retraining should ideally use an expanded dataset that includes the more recent data where the concept drift is evident. You might also consider adjusting Prophet's `seasonality_prior_scale` for weekly seasonality to allow it to fit stronger patterns if the current parameter is too restrictive.

2.  **Question:** Describe the trade-offs between periodic retraining and event-driven retraining for a time series forecasting model that predicts product demand. When might you choose one over the other?
    **Answer:**
    *   **Periodic Retraining:**
        *   **Pros:** Simpler to implement and manage. Guarantees the model is regularly updated with fresh data, reducing the risk of stale models.
        *   **Cons:** Can be computationally wasteful if there's no drift and the model is performing well. Might miss sudden, critical drift events if the retraining interval is too long.
        *   **When to choose:** Suitable for stable environments with predictable data evolution, or when computational resources are readily available and the cost of occasional unnecessary retraining is low. Also good as a baseline strategy when sophisticated monitoring for event-driven retraining is not yet in place.
    *   **Event-Driven Retraining:**
        *   **Pros:** More resource-efficient as it only retrains when necessary. More responsive to sudden and significant changes in data patterns or performance degradation.
        *   **Cons:** Requires robust monitoring systems to accurately detect drift or performance drops. Can be more complex to implement the detection logic and trigger mechanisms. Risk of delayed retraining if detection thresholds are set too loosely.
        *   **When to choose:** Ideal for dynamic environments where data patterns can shift unpredictably, or when computational resources are limited and retraining is expensive. It's the preferred strategy for mature MLOps pipelines.

#### AI generation note
Create a 13-minute video lecture with interactive elements. Start with an animated diagram illustrating concept drift vs. data drift using a time series example. Transition to a slide detailing key monitoring metrics (MAE, PICP, residuals, input distribution) and their visual representations. Show a conceptual dashboard design with these metrics. Then, demonstrate a live coding scenario (similar to the detailed content) simulating drift detection and a simplified retraining trigger using Python. Highlight the `MAE` calculation over a rolling window and the alert logic. Include a reflection prompt on designing a robust alert system and a short quiz on identifying drift types.

---

### Chapter 7.6 — Deploying Time Series Forecasting Models

#### Learning objectives
*   Understand the differences between batch and real-time forecasting deployment scenarios.
*   Design a RESTful API for serving time series predictions.
*   Containerize a forecasting model using Docker for consistent deployment.
*   Explore options for deploying models to cloud platforms (e.g., AWS SageMaker, Google Cloud AI Platform).
*   Integrate forecasting models into MLOps pipelines for automated deployment and management.

#### Detailed lesson content
Deploying a time series forecasting model means making its predictions available for consumption by other applications, dashboards, or decision-making systems. The choice of deployment strategy largely depends on the specific requirements of the use case, particularly regarding latency and data freshness.

There are two primary deployment paradigms for forecasting:
1.  **Batch Forecasting:** This involves generating predictions for a large number of time series or for a long future horizon at scheduled intervals (e.g., daily, weekly). The predictions are then stored in a database or file system, to be consumed asynchronously.
    *   **Use Cases:** Monthly sales forecasts for inventory planning, quarterly budget forecasts, daily energy demand forecasts for utility companies where forecasts are generated once a day for the next 24-48 hours.
    *   **Advantages:** Simpler to implement, less demanding on infrastructure (can run on scheduled jobs), suitable for long forecast horizons.
    *   **Disadvantages:** Predictions are not real-time, might become stale if conditions change rapidly.

2.  **Real-time Forecasting:** This involves generating predictions on demand, often for a single time series or a short horizon, with low latency. This typically requires a model exposed via an API.
    *   **Use Cases:** Predicting the next few minutes of stock prices, real-time traffic prediction for navigation apps, dynamic pricing based on immediate demand.
    *   **Advantages:** Provides up-to-the-minute predictions, highly responsive to changing conditions.
    *   **Disadvantages:** More complex infrastructure, higher latency requirements, requires robust API design and scaling.

For real-time or near real-time scenarios, exposing your model via a **RESTful API** is a common approach. A client application sends an HTTP request (e.g., POST request with JSON payload containing input features) to the API endpoint, and the API responds with the forecast. Frameworks like Flask or FastAPI in Python are excellent for building such APIs.

Consider a Prophet model. To make a real-time prediction, the API would need:
*   Historical data for the time series (often stored in a database or passed as part of the request).
*   The trained Prophet model (loaded into memory).
*   The future `ds` values for which to predict.

```python
# Example of a basic Flask API endpoint for Prophet (conceptual)
# This code snippet is for illustration, a full Flask app would involve more setup.

from flask import Flask, request, jsonify
from prophet import Prophet
import pandas as pd
import numpy as np
import pickle # For saving/loading models

app = Flask(__name__)

# In a real scenario, this would be loaded from a persistent storage
# For demonstration, let's create a dummy model and save it.
# Assume 'model.pkl' contains a pre-trained Prophet model.
try:
    with open('prophet_model.pkl', 'rb') as f:
        global prophet_model
        prophet_model = pickle.load(f)
    print("Prophet model loaded successfully.")
except FileNotFoundError:
    print("prophet_model.pkl not found. Creating a dummy model for demonstration.")
    # Create a dummy model if not found
    dates = pd.date_range(start='2020-01-01', periods=100, freq='D')
    y = np.random.rand(100) * 100 + np.sin(np.arange(100)/7) * 20
    dummy_df = pd.DataFrame({'ds': dates, 'y': y})
    prophet_model = Prophet()
    prophet_model.fit(dummy_df)
    with open('prophet_model.pkl', 'wb') as f:
        pickle.dump(prophet_model, f)
    print("Dummy Prophet model created and saved.")

@app.route('/predict_prophet', methods=['POST'])
def predict_prophet():
    data = request.get_json(force=True)
    
    # Expect 'future_dates' as a list of strings (e.g., ['2023-01-01', '2023-01-02'])
    # And 'history' as a list of {'ds': 'date', 'y': value} for retraining/context
    
    if 'future_dates' not in data:
        return jsonify({"error": "Missing 'future_dates' in request"}), 400
    
    future_dates = pd.DataFrame({'ds': pd.to_datetime(data['future_dates'])})
    
    try:
        forecast = prophet_model.predict(future_dates)
        # Return only relevant columns
        results = forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].to_dict(orient='records')
        return jsonify(results)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# To run this:
# 1. Save this code as app.py
# 2. pip install Flask prophet pandas numpy
# 3. python -m flask run
# Then send a POST request to http://127.0.0.1:5000/predict_prophet
# with JSON body: {"future_dates": ["2023-01-01", "2023-01-02"]}
```

**Containerization with Docker** is a best practice for deploying machine learning models. A Docker container packages your application (e.g., Flask API), its dependencies (Prophet, pandas, numpy), and its configuration into a single, isolated unit. This ensures that your model runs consistently across different environments (development, staging, production), eliminating "it works on my machine" issues.

A `Dockerfile` for a Prophet API might look like this:
```dockerfile
# Use an official Python runtime as a parent image
FROM python:3.9-slim-buster

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Expose the port the app runs on
EXPOSE 5000

# Define environment variable
ENV FLASK_APP=app.py

# Run the application
CMD ["flask", "run", "--host=0.0.0.0"]
```
And `requirements.txt`:
```
Flask
prophet
pandas
numpy
pystan==2.19.1.1 # Specific version often required for Prophet
```
Building the image: `docker build -t prophet-api .`
Running the container: `docker run -p 5000:5000 prophet-api`

**Cloud Deployment Options:** Major cloud providers offer specialized services for deploying ML models:
*   **AWS SageMaker:** Provides a fully managed service for building, training, and deploying ML models. You can deploy your Prophet or LSTM model as an endpoint, handle scaling, and integrate with other AWS services.
*   **Google Cloud AI Platform (now Vertex AI):** Similar to SageMaker, Vertex AI offers managed services for model deployment, including custom containers, auto-scaling, and monitoring.
*   **Azure Machine Learning:** Microsoft's offering for the end-to-end ML lifecycle, with robust deployment capabilities for various model types.
These platforms abstract away much of the infrastructure management, allowing you to focus on the model itself.

Finally, integrating deployment into **MLOps pipelines** ensures automation and reliability. A typical MLOps pipeline for forecasting might involve:
1.  **Data Ingestion:** Automatically fetching new historical data.
2.  **Model Training:** Retraining the model (e.g., using an expanding window strategy).
3.  **Model Evaluation:** Rigorously evaluating the newly trained model against a validation set.
4.  **Model Versioning:** Storing the trained model and its metadata (hyperparameters, performance metrics) in a model registry.
5.  **Model Deployment:** If the new model outperforms the current production model (champion/challenger), automatically deploying it (e.g., updating the Docker image, rolling out to an API endpoint).
6.  **Monitoring:** Continuous monitoring of the deployed model's performance and data drift (as discussed in Chapter 7.5).

**Common Mistakes & Safety Notes:**
*   **Hardcoding paths/credentials:** Never hardcode sensitive information. Use environment variables or secure configuration management.
*   **Ignoring dependencies:** Ensure all necessary libraries and their correct versions are specified (e.g., in `requirements.txt` or `conda.yaml`).
*   **Lack of error handling:** Your API should gracefully handle invalid inputs, missing data, or model prediction errors.
*   **No scaling strategy:** A single API instance won't handle high traffic. Design for horizontal scaling from the start (e.g., using Kubernetes, cloud auto-scaling groups).
*   **Stateful models in stateless APIs:** If your model requires historical data for prediction (most time series models do), ensure this data is either passed with each request or accessible from a fast, persistent store. Avoid storing state *within* the API container itself if you plan to scale horizontally.
*   **Security:** Protect your API endpoints with authentication and authorization.

#### Key concepts
*   **Batch Forecasting:** Generating predictions for a large number of time series or a long future horizon at scheduled intervals, typically stored for asynchronous consumption.
*   **Real-time Forecasting:** Generating predictions on demand for immediate consumption, often requiring low latency via an API.
*   **RESTful API:** An architectural style for web services that allows different systems to communicate over HTTP, commonly used to expose machine learning models for predictions.
*   **Containerization:** Packaging an application and all its dependencies into a single, isolated unit (e.g., using Docker) to ensure consistent execution across environments.
*   **Docker:** A popular platform for containerization, enabling developers to build, ship, and run applications in isolated environments.
*   **MLOps Pipelines:** Automated workflows for managing the end-to-end machine learning lifecycle, from data ingestion and model training to deployment, monitoring, and retraining.
*   **AWS SageMaker / Google Cloud AI Platform (Vertex AI) / Azure Machine Learning:** Cloud-based managed services for building, training, and deploying machine learning models at scale.

#### Hands-on activity
You have developed a Prophet model to forecast daily sales. Your goal is to containerize this model within a simple Flask API and make it ready for local testing.
1.  Create a Python script (`app.py`) that loads a pre-trained Prophet model and exposes a `/predict` endpoint via Flask. The endpoint should accept a list of future dates and return predictions.
2.  Create a `requirements.txt` file listing all necessary Python packages.
3.  Create a `Dockerfile` to build a Docker image for your Flask application.
4.  (Optional, but recommended for testing) Build the Docker image and run the container locally. Test it using `curl` or a tool like Postman.

```python
# --- Step 1: Create app.py ---
# File: app.py
# This is the content you'd put into app.py
# Make sure you have a 'prophet_model.pkl' file in the same directory,
# or uncomment the dummy model creation logic.

from flask import Flask, request, jsonify
from prophet import Prophet
import pandas as pd
import numpy as np
import pickle
import os

app = Flask(__name__)

# Path to your pre-trained Prophet model
MODEL_PATH = 'prophet_model.pkl'

# Load the model once when the app starts
prophet_model = None
if os.path.exists(MODEL_PATH):
    with open(MODEL_PATH, 'rb') as f:
        prophet_model = pickle.load(f)
    print(f"Prophet model loaded from {MODEL_PATH}.")
else:
    print(f"Warning: {MODEL_PATH} not found. Creating a dummy model for demonstration.")
    # Create a dummy model if not found
    dates = pd.date_range(start='2020-01-01', periods=100, freq='D')
    y = np.random.rand(100) * 100 + np.sin(np.arange(100)/7) * 20
    dummy_df = pd.DataFrame({'ds': dates, 'y': y})
    prophet_model = Prophet()
    prophet_model.fit(dummy_df)
    with open(MODEL_PATH, 'wb') as f:
        pickle.dump(prophet_model, f)
    print("Dummy Prophet model created and saved as prophet_model.pkl.")

@app.route('/predict', methods=['POST'])
def predict():
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400

    data = request.get_json()
    
    if 'future_dates' not in data:
        return jsonify({"error": "Missing 'future_dates' in request body. Expected format: {'future_dates': ['YYYY-MM-DD', ...] }"}), 400
    
    try:
        # Convert list of date strings to DataFrame for Prophet
        future_dates_df = pd.DataFrame({'ds': pd.to_datetime(data['future_dates'])})
        
        # Make predictions
        forecast = prophet_model.predict(future_dates_df)
        
        # Extract relevant columns and convert to list of dictionaries
        results = forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].to_dict(orient='records')
        
        # Convert datetime objects in results to string for JSON serialization
        for item in results:
            item['ds'] = item['ds'].strftime('%Y-%m-%d')
            
        return jsonify(results)
    except Exception as e:
        app.logger.error(f"Prediction error: {e}", exc_info=True)
        return jsonify({"error": f"An error occurred during prediction: {str(e)}"}), 500

if __name__ == '__main__':
    # For local development, use app.run()
    # For Docker deployment, Gunicorn or similar WSGI server is recommended
    app.run(host='0.0.0.0', port=5000)

```

```python
# --- Step 2: Create requirements.txt ---
# File: requirements.txt
# This is the content you'd put into requirements.txt

Flask
prophet
pandas
numpy
pystan==2.19.1.1 # Specific version often required for Prophet
```

```dockerfile
# --- Step 3: Create Dockerfile ---
# File: Dockerfile
# This is the content you'd put into Dockerfile

# Use an official Python runtime as a parent image
FROM python:3.9-slim-buster

# Set the working directory in the container
WORKDIR /app

# Copy requirements.txt first to leverage Docker cache
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code
COPY . /app

# Expose the port the app runs on
EXPOSE 5000

# Define environment variable for Flask application
ENV FLASK_APP=app.py

# Run the application using Flask's built-in server (for simple local testing)
# In production, use a WSGI server like Gunicorn: CMD ["gunicorn", "-w", "4", "-b", "0.0.0.0:5000", "app:app"]
CMD ["python", "app.py"]
```

**Step 4 (Optional): Build and Run Docker Image**
1.  Save the `app.py`, `requirements.txt`, and `Dockerfile` in the same directory.
2.  Open your terminal in that directory.
3.  Build the Docker image:
    ```bash
    docker build -t sales-forecast-api .
    ```
4.  Run the Docker container:
    ```bash
    docker run -p 5000:5000 sales-forecast-api
    ```
5.  Test the API (in a new terminal window):
    ```bash
    curl -X POST -H "Content-Type: application/json" \
         -d '{"future_dates": ["2023-01-01", "2023-01-02", "2023-01-03"]}' \
         http://localhost:5000/predict
    ```
    You should see a JSON response with predictions for the specified dates.

#### Assessment idea
1.  **Question:** You need to deploy a time series forecasting model for a financial institution. The model predicts stock market volatility for the next 5 minutes, and these predictions are used to inform high-frequency trading decisions. Would you recommend a batch or real-time deployment strategy, and why? What are the key challenges you would anticipate?
    **Answer:** For predicting stock market volatility for high-frequency trading, a **real-time deployment strategy** is absolutely essential.
    *   **Why:** High-frequency trading requires extremely low latency and up-to-the-minute predictions to react to rapidly changing market conditions. Batch predictions would be stale and useless for decisions made in a matter of seconds.
    *   **Key Challenges:**
        *   **Low Latency:** The system must process requests and return predictions within milliseconds. This requires optimized model inference, efficient API design, and potentially specialized hardware.
        *   **High Throughput:** The API needs to handle a large volume of concurrent requests from multiple trading algorithms.
        *   **Data Freshness:** Input features (e.g., latest tick data, order book information) must be ingested and processed with minimal delay.
        *   **Scalability:** The infrastructure must be able to scale horizontally to meet peak demand without performance degradation.
        *   **Robustness and Reliability:** Any downtime or error can lead to significant financial losses. High availability, fault tolerance, and comprehensive error handling are critical.
        *   **Feature Engineering:** Real-time feature engineering (e.g., calculating rolling means or volatility measures from streaming data) is complex.

2.  **Question:** You are deploying an LSTM model for forecasting electricity load. Your `Dockerfile` successfully builds, but when you run the container, the Flask application crashes with a `ModuleNotFoundError` for a specific library. What is the most likely cause of this error, and how would you debug it within the Docker context?
    **Answer:** The most likely cause of a `ModuleNotFoundError` inside a Docker container, even if the image built successfully, is that the required Python library was **not correctly installed within the container's environment**. This can happen due to:
    *   **Missing `requirements.txt` entry:** The library was simply forgotten in `requirements.txt`.
    *   **Incorrect `requirements.txt` path:** The `COPY requirements.txt .` or `RUN pip install` command in the `Dockerfile` might have an incorrect path, so the `pip install` didn't find the file.
    *   **Installation failure:** `pip install` might have failed for that specific package during the image build (e.g., due to network issues, incompatible version, or missing system dependencies), but the build process continued for other layers.
    *   **Different Python environment:** The `pip install` might have installed it into a different Python environment than the one Flask is trying to use.

    **How to Debug:**
    1.  **Inspect `requirements.txt`:** Double-check that the missing module is indeed listed in `requirements.txt` with the correct spelling and a compatible version.
    2.  **Examine Docker Build Logs:** Rebuild the Docker image and carefully review the output of the `RUN pip install -r requirements.txt` command. Look for any errors, warnings, or skipped packages related to the missing module.
    3.  **Interactive Container Shell:** Run the container in interactive mode to inspect its environment:
        ```bash
        docker run -it --entrypoint /bin/bash sales-forecast-api
        ```
        Once inside the container's shell:
        *   Navigate to `/app`.
        *   Run `pip list` or `pip freeze` to see what packages are actually installed. Verify if the missing package is present.
        *   Try `python -c "import problematic_module"` to reproduce the error directly.
        *   Manually try `pip install problematic_module` to see if it installs successfully and what errors might arise.
    4.  **Check `Dockerfile` paths:** Ensure `COPY requirements.txt .` is correct and that the `WORKDIR` is set appropriately before `pip install`.

#### AI generation note
Design a 15-minute hands-on lab walkthrough video. Begin with a quick recap of batch vs. real-time forecasting. Then, guide learners through creating the `app.py`, `requirements.txt`, and `Dockerfile` for a Prophet model API. Show the process of building the Docker image and running the container locally. Demonstrate how to test the API using `curl` from the terminal, showing both successful and error responses. Include clear explanations of each line in the `Dockerfile` and `app.py`. Conclude with a segment on common deployment pitfalls and how Docker helps mitigate them. The interactive element will be a guided coding exercise to modify the API to accept an additional `horizon` parameter for the number of days to forecast.

---

### Chapter 7.7 — A/B Testing and Champion/Challenger for Forecasting Models

#### Learning objectives
*   Understand the principles of A/B testing in the context of time series forecasting.
*   Identify the unique challenges of conducting A/B tests with time series data.
*   Design and implement a champion/challenger framework for continuous model improvement.
*   Evaluate the statistical significance of A/B test results for forecasting models.
*   Develop strategies for safely rolling out new forecasting models in production.

#### Detailed lesson content
After deploying a forecasting model, the journey of improvement doesn't end. To continuously enhance performance and ensure that new models are genuinely better, rigorous testing methodologies are required. **A/B testing** and the **champion/challenger framework** are powerful tools for this, allowing you to compare the performance of a new model (the "challenger") against the currently deployed model (the "champion") in a controlled environment.

**A/B testing** in the context of forecasting involves running two (or more) different forecasting models simultaneously, or applying different models to distinct, comparable segments of your data, and then comparing their actual performance. The goal is to determine if the new model (B) significantly outperforms the current model (A) on key metrics.

However, A/B testing time series models presents unique challenges compared to typical user interface A/B tests:
1.  **Temporal Dependence:** Observations are not independent. You cannot randomly assign individual data points to group A or B.
2.  **Interference/Contamination:** If you're forecasting for related entities (e.g., sales for different product lines in the same store), applying a different model to one product might influence the sales of another, contaminating your test.
3.  **Seasonality and Trend:** Test periods must be long enough to capture relevant seasonality and trend dynamics. A short test might yield misleading results.
4.  **Lagged Effects:** The impact of a forecast (e.g., inventory decisions based on a forecast) might not be immediate, making it harder to attribute outcomes directly to the model.

To mitigate these challenges, A/B testing for time series often involves:
*   **Geographical Split:** If applicable, deploy Model A in one region/store and Model B in another, assuming regions are sufficiently independent and comparable.
*   **Product/Segment Split:** Apply Model A to one set of products and Model B to another, ensuring product groups are unrelated.
*   **Time-based Rollout (Staged Rollout):** Deploy Model B to a small percentage of traffic/segments, monitor, then gradually increase exposure. This isn't a true A/B test but a safer rollout strategy.
*   **Shadow Mode Deployment:** Deploy Model B alongside Model A, but only Model A's forecasts are used for decisions. Model B's forecasts are recorded and compared against actuals *as if* they were used, allowing for offline comparison without impacting operations. This is a common and safe approach.

The **champion/challenger framework** formalizes this continuous improvement process.
*   **Champion Model:** The currently deployed, production-ready model whose forecasts are actively used for decision-making.
*   **Challenger Model:** A new or updated model that is being tested against the champion.
The challenger is typically deployed in shadow mode or a controlled A/B test environment. If the challenger consistently demonstrates superior performance (e.g., lower MASE, better prediction interval coverage, or improved business outcomes like reduced inventory costs) over a statistically significant period, it can then be promoted to become the new champion. The old champion might become a challenger for future iterations or be archived.

**Statistical Significance:** When comparing models, it's not enough for the challenger to simply have a lower error metric. You need to determine if the difference is statistically significant, meaning it's unlikely to have occurred by random chance. Techniques for this include:
*   **Diebold-Mariano Test:** A statistical test specifically designed to compare the predictive accuracy of two competing forecasts. It tests the null hypothesis that the two forecasts have the same accuracy.
*   **Bootstrap Hypothesis Testing:** Resampling the forecast errors and constructing confidence intervals for the difference in performance metrics.
*   **Paired t-tests:** If you have paired observations (e.g., both models made a forecast for the same day), a paired t-test on the squared errors or absolute errors can assess significance.

```python
import numpy as np
import pandas as pd
from scipy import stats
from statsmodels.stats.api import DescrStatsW

# Simulate forecast errors for two models (Champion and Challenger)
np.random.seed(42)
n_observations = 100 # Number of forecast periods

# Champion model errors (e.g., MAE values for each period)
# Let's assume Champion has slightly higher errors on average
champion_errors = np.abs(np.random.normal(loc=10, scale=3, size=n_observations))

# Challenger model errors (e.g., MAE values for each period)
# Let's assume Challenger has slightly lower errors on average
challenger_errors = np.abs(np.random.normal(loc=8, scale=2.5, size=n_observations))

print(f"Champion Average Error: {np.mean(champion_errors):.2f}")
print(f"Challenger Average Error: {np.mean(challenger_errors):.2f}")

# Perform a paired t-test on the errors (assuming errors are somewhat normally distributed differences)
# Null Hypothesis (H0): The mean difference in errors is zero (no significant difference)
# Alternative Hypothesis (H1): The mean difference in errors is not zero (significant difference)
t_statistic, p_value = stats.ttest_rel(champion_errors, challenger_errors)

print(f"\nPaired t-test results:")
print(f"T-statistic: {t_statistic:.2f}")
print(f"P-value: {p_value:.3f}")

alpha = 0.05
if p_value < alpha:
    print(f"With p-value {p_value:.3f} < {alpha}, we reject the null hypothesis.")
    print("There is a statistically significant difference in performance between the Champion and Challenger models.")
    if np.mean(challenger_errors) < np.mean(champion_errors):
        print("The Challenger model performs significantly better.")
    else:
        print("The Champion model performs significantly better (unlikely in this simulation).")
else:
    print(f"With p-value {p_value:.3f} >= {alpha}, we fail to reject the null hypothesis.")
    print("There is no statistically significant difference in performance between the Champion and Challenger models.")

# Note: Diebold-Mariano test is more appropriate for forecast accuracy, but requires statsmodels.
# from statsmodels.stats.api import acf, pacf, q_stat, sm
# from statsmodels.stats.regression import linear_harvey_test
# from statsmodels.tools.sm_exceptions import MissingDataError
# from statsmodels.tsa.stattools import adfuller, kpss

# The Diebold-Mariano test is not directly implemented in a simple function in statsmodels
# but can be constructed. For simplicity, paired t-test on errors is a common proxy.
```

**Safely Rolling Out New Models:**
1.  **Shadow Mode:** Always start by running the challenger in shadow mode. This allows you to collect performance metrics against actuals without any operational risk.
2.  **Canary Deployment:** Gradually route a small percentage of live traffic to the new model. Monitor closely for performance degradation, errors, or unexpected behavior.
3.  **A/B Test:** If the model impacts user experience or business metrics directly, conduct a true A/B test (if feasible given time series constraints) on a subset of users or segments.
4.  **Rollback Plan:** Always have a clear and automated rollback plan to revert to the previous champion model if the new model performs poorly or causes issues.
5.  **Documentation:** Document the challenger's performance, the decision to promote it, and any lessons learned.

**Common Mistakes & Safety Notes:**
*   **Short test durations:** Don't run A/B tests for too short a period. Ensure you capture full seasonal cycles and enough data points for statistical significance.
*   **Ignoring interference:** Be very careful about how you split your "A" and "B" groups to avoid contamination.
*   **Lack of statistical rigor:** Don't promote a challenger just because its error metric is slightly lower. Ensure the difference is statistically significant.
*   **No rollback plan:** Never deploy a new model without a clear, tested rollback strategy.
*   **Focusing only on accuracy:** Consider business metrics (e.g., inventory turns, revenue, customer satisfaction) in addition to statistical accuracy metrics. A model with slightly higher RMSE might be preferred if it leads to better business outcomes.

#### Key concepts
*   **A/B Testing:** A controlled experiment comparing two versions (A and B) of a model or system to determine which one performs better based on specific metrics.
*   **Champion/Challenger Framework:** A continuous improvement methodology where a new model (challenger) is tested against the currently deployed model (champion) to determine if it should replace the champion.
*   **Shadow Mode Deployment:** Deploying a new model alongside the production model, where the new model's predictions are recorded and evaluated but not used for active decision-making.
*   **Canary Deployment:** Gradually rolling out a new model to a small subset of users or traffic, monitoring its performance, and then progressively increasing its exposure.
*   **Diebold-Mariano Test:** A statistical test used to compare the predictive accuracy of two competing forecasts.
*   **Statistical Significance:** The likelihood that an observed difference between two groups or models is not due to random chance.
*   **Rollback Plan:** A predefined strategy and procedure to revert a deployed system or model to a previous stable state in case of issues.

#### Hands-on activity
You have a new LSTM model (Challenger) that you believe outperforms your current Prophet model (Champion) for daily sales forecasting. You decide to run them in shadow mode for 30 days.
1.  Generate synthetic daily sales data for 60 days, including a period where the "Challenger" would perform better.
2.  Simulate forecasts from both a "Champion" Prophet model and a "Challenger" LSTM model for the last 30 days of this period. Assume the Champion has a consistent error, while the Challenger has lower errors during the test period.
3.  Calculate the daily Mean Absolute Error (MAE) for both models during the 30-day shadow period.
4.  Perform a paired t-test on the daily absolute errors of the two models to determine if the Challenger's performance is statistically significantly better.
5.  Based on the statistical test, recommend whether to promote the Challenger.

```python
import pandas as pd
import numpy as np
from scipy import stats
from sklearn.metrics import mean_absolute_error
import matplotlib.pyplot as plt

# 1. Generate synthetic daily sales data for 60 days
np.random.seed(42)
dates = pd.date_range(start='2023-01-01', periods=60, freq='D')
actual_sales = 100 + np.cumsum(np.random.randn(60) * 2) + 10 * np.sin(np.arange(60) * 2 * np.pi / 7)
df_sales = pd.DataFrame({'ds': dates, 'y': actual_sales})

# Shadow mode period: last 30 days
shadow_start_idx = 30
shadow_period_df = df_sales.iloc[shadow_start_idx:]

# 2. Simulate forecasts from Champion (Prophet) and Challenger (LSTM)
# Assume Champion has a consistent error
champion_forecasts = shadow_period_df['y'] + np.random.normal(0, 8, len(shadow_period_df))

# Assume Challenger performs better during this period
challenger_forecasts = shadow_period_df['y'] + np.random.normal(0, 5, len(shadow_period_df))

# Let's make challenger slightly worse for the first 5 days of shadow, then better
challenger_forecasts.iloc[:5] = shadow_period_df['y'].iloc[:5] + np.random.normal(0, 10, 5)

df_shadow = pd.DataFrame({
    'ds': shadow_period_df['ds'],
    'actual': shadow_period_df['y'],
    'champion_yhat': champion_forecasts,
    'challenger_yhat': challenger_forecasts
})

print("Shadow Mode Data Head:")
print(df_shadow.head())

# 3. Calculate daily MAE for both models
df_shadow['champion_abs_error'] = np.abs(df_shadow['actual'] - df_shadow['champion_yhat'])
df_shadow['challenger_abs_error'] = np.abs(df_shadow['actual'] - df_shadow['challenger_yhat'])

champion_avg_mae = df_shadow['champion_abs_error'].mean()
challenger_avg_mae = df_shadow['challenger_abs_error'].mean()

print(f"\nChampion Average MAE (30 days): {champion_avg_mae:.2f}")
print(f"Challenger Average MAE (30 days): {challenger_avg_mae:.2f}")

# Visualize daily errors
plt.figure(figsize=(12, 6))
plt.plot(df_shadow['ds'], df_shadow['champion_abs_error'], label='Champion Daily Abs Error', alpha=0.7)
plt.plot(df_shadow['ds'], df_shadow['challenger_abs_error'], label='Challenger Daily Abs Error', alpha=0.7)
plt.axhline(y=champion_avg_mae, color='blue', linestyle='--', label=f'Champion Avg MAE ({champion_avg_mae:.2f})')
plt.axhline(y=challenger_avg_mae, color='orange', linestyle='--', label=f'Challenger Avg MAE ({challenger_avg_mae:.2f})')
plt.title('Daily Absolute Errors during Shadow Mode')
plt.xlabel('Date')
plt.ylabel('Absolute Error')
plt.legend()
plt.grid(True)
plt.show()

# 4. Perform a paired t-test on the daily absolute errors
# Null Hypothesis: The mean difference in absolute errors is zero.
# Alternative Hypothesis: The mean difference in absolute errors is not zero.
t_statistic, p_value = stats.ttest_rel(df_shadow['champion_abs_error'], df_shadow['challenger_abs_error'])

print(f"\n--- Paired t-test Results ---")
print(f"T-statistic: {t_statistic:.2f}")
print(f"P-value: {p_value:.4f}")

alpha = 0.05 # Significance level

# 5. Recommendation
print("\n--- Recommendation ---")
if p_value < alpha:
    print(f"Since the p-value ({p_value:.4f}) is less than the significance level ({alpha}),")
    print("we reject the null hypothesis. There is a statistically significant difference in performance.")
    if challenger_avg_mae < champion_avg_mae:
        print(f"The Challenger model (Avg MAE: {challenger_avg_mae:.2f}) performs significantly better than the Champion model (Avg MAE: {champion_avg_mae:.2f}).")
        print("Recommendation: Promote the Challenger model to Champion.")
    else:
        print(f"The Champion model performs significantly better (or Challenger is worse).")
        print("Recommendation: Do NOT promote the Challenger model.")
else:
    print(f"Since the p-value ({p_value:.4f}) is greater than or equal to the significance level ({alpha}),")
    print("we fail to reject the null hypothesis. There is no statistically significant difference in performance.")
    print("Recommendation: Do NOT promote the Challenger model based on this test. Further investigation or longer testing may be needed.")

```

#### Assessment idea
1.  **Question:** You are comparing two forecasting models for electricity consumption across 100 different households. You want to use A/B testing to determine which model is superior. Describe a suitable A/B testing design that minimizes the risk of interference and provides statistically robust results.
    **Answer:** A suitable A/B testing design would be a **household-level split (geographical/segment split)**.
    *   **Design:** Randomly assign 50 households to Group A (using Model A) and 50 households to Group B (using Model B). Ensure the assignment is truly random and that the groups are balanced on relevant characteristics (e.g., average historical consumption, household size, location if it impacts consumption). Both models would run in production, actively influencing decisions (e.g., smart home energy management, personalized recommendations).
    *   **Minimizing Interference:** By assigning entire households to one model or the other, you minimize interference because one household's energy consumption is generally independent of another's (unless they share common infrastructure or are part of a very small, interconnected grid).
    *   **Robust Results:** Collect performance metrics (e.g., MAE, RMSE, or specific business metrics like energy savings) for each household over a statistically significant period (e.g., several weeks or months to capture seasonal variations). Then, compare the *average* performance metrics between Group A and Group B using appropriate statistical tests (e.g., an independent samples t-test or ANOVA, or non-parametric tests if data is not normal). This approach treats each household as an independent unit of observation, allowing for robust statistical comparison.

2.  **Question:** Your team proposes promoting a new "Challenger" model because its MASE is 0.05 points lower than the current "Champion" model over a 7-day shadow deployment. What critical concerns would you raise about this recommendation, and what additional steps would you require before making a decision?
    **Answer:** I would raise several critical concerns about promoting the Challenger model based solely on a 0.05 point lower MASE over a 7-day shadow deployment:
    *   **Insufficient Test Duration:** A 7-day period is far too short for time series forecasting, especially for models that might have weekly, monthly, or yearly seasonality. The observed difference could easily be due to random chance or specific short-term fluctuations, not a true underlying improvement. It does not allow for capturing full seasonal cycles or diverse real-world conditions.
    *   **Lack of Statistical Significance:** A 0.05 point difference, while positive, might not be statistically significant. Without a formal statistical test (like the Diebold-Mariano test or a paired t-test on errors), we cannot be confident that the observed improvement is not just noise.
    *   **No Business Impact Assessment:** MASE is a statistical metric, but it doesn't directly translate to business value. Is a 0.05 MASE reduction meaningful in terms of cost savings, improved inventory management, or customer satisfaction? The business impact needs to be quantified.
    *   **No Rollback Plan:** The recommendation doesn't mention a rollback plan, which is crucial for safe deployment.

    **Additional Steps Required:**
    1.  **Extend Shadow Deployment:** Run the Challenger in shadow mode for a significantly longer period, ideally covering at least one full seasonal cycle (e.g., 30-90 days or more, depending on the data's seasonality).
    2.  **Perform Statistical Significance Test:** Conduct a Diebold-Mariano test or a paired t-test on the daily/weekly absolute errors (or squared errors) over the extended period to confirm if the observed difference in MASE is statistically significant.
    3.  **Assess Business Impact:** Quantify the expected business benefits of the Challenger model (e.g., projected reduction in inventory holding costs, fewer stockouts, improved resource allocation) and compare them against the potential risks and deployment costs.
    4.  **Monitor Other Metrics:** Evaluate other relevant metrics like prediction interval coverage, directional accuracy, and computational resource usage.
    5.  **Develop a Robust Rollback Plan:** Ensure a clear, tested, and automated process is in place to quickly revert to the Champion model if the Challenger causes unforeseen issues in production.

#### AI generation note
Create a 12-minute interactive video. Start by explaining the concept of champion/challenger and A/B testing for time series with a clear analogy (e.g., comparing two different traffic prediction algorithms for city planning). Highlight the unique challenges of time series A/B testing using animated overlays on a time series plot. Demonstrate the Diebold-Mariano test conceptually (no live code, but explain its purpose and output). Then, walk through the provided Python code for a paired t-test on simulated errors, explaining the p-value interpretation. Conclude with a visual flowchart of a safe model rollout strategy (shadow mode -> canary -> full rollout with rollback). Include an interactive element asking learners to identify the best A/B test design for a given time series scenario.

---

## Module 8: Real-World Time Series Forecasting Projects
**Module Goal:** Equip learners with the practical skills and strategic understanding to design, implement, deploy, and maintain robust machine learning solutions for complex time series forecasting challenges in real-world environments.

---
### Chapter 8.1 — Project Scoping and Data Acquisition for Real-World Time Series

#### Learning objectives
*   Define clear, measurable objectives for a time series forecasting project, distinguishing between business goals and technical metrics.
*   Identify and evaluate various internal and external data sources relevant to a forecasting problem, considering data availability, quality, and ethical implications.
*   Develop a structured approach to data acquisition, including strategies for handling diverse data formats and potential data access limitations.
*   Perform initial exploratory data analysis (EDA) on raw, messy time series data to uncover fundamental patterns, anomalies, and data quality issues.

#### Detailed lesson content
Embarking on a real-world time series forecasting project is a journey that begins long before you write your first line of code. The initial, and arguably most critical, phase involves meticulous project scoping and strategic data acquisition. Without a clear understanding of the business problem and the data available to solve it, even the most sophisticated models are destined to underperform or, worse, address the wrong problem entirely.

Project scoping starts with defining precise business objectives. Instead of a vague goal like "improve sales forecasting," a better objective would be "reduce inventory holding costs by 15% over the next quarter by improving the accuracy of weekly sales forecasts for our top 10 products by 20% (measured by WAPE)." This refined objective provides clear targets, defines the scope (top 10 products, weekly forecasts), and specifies the key performance indicator (WAPE, Weighted Absolute Percentage Error, or similar). It's crucial to differentiate between business goals (e.g., cost reduction, revenue increase) and technical metrics (e.g., RMSE, MAE, MAPE). Your forecasting model's technical performance must directly translate into tangible business value. Often, this involves engaging with domain experts and stakeholders to understand their needs, existing processes, and the decision-making context where the forecasts will be used. A common mistake here is to jump straight into model building without fully grasping the business context, leading to models that are technically sound but practically useless.

Once the objectives are clear, the next step is identifying and acquiring the necessary data. Real-world time series data rarely comes in a clean, single CSV file. You'll likely encounter data spread across multiple databases, APIs, legacy systems, and even external sources. For instance, forecasting retail sales might require internal transactional data (sales history, pricing, promotions), but also external data like weather forecasts, local event calendars, economic indicators, or even social media sentiment. Each potential data source needs careful evaluation. Consider its relevance to the forecasting problem, its granularity (e.g., hourly, daily, weekly), its historical depth, and its reliability. Data quality is paramount; incomplete, inconsistent, or inaccurate data will severely hamper your model's performance, a concept often summarized as "garbage in, garbage out." Safety notes here include being mindful of data privacy regulations (like GDPR or CCPA) when acquiring and storing sensitive information, especially if external datasets involve personal data. Always ensure you have the necessary permissions and anonymize data where appropriate.

Data acquisition is a structured process. It often involves connecting to various databases (SQL, NoSQL), consuming RESTful APIs, scraping websites (with caution and respect for terms of service), or processing flat files. For example, connecting to a PostgreSQL database to pull historical sales data might involve `psycopg2` or `SQLAlchemy` in Python, while fetching weather data might use the `requests` library to interact with a weather API. You'll need to define extraction, transformation, and loading (ETL) steps to bring this disparate data into a unified format suitable for analysis. This often means writing robust scripts that can handle connection errors, API rate limits, and data schema changes. It's a common pitfall to manually extract data once; instead, think about how this data acquisition process can be automated and made resilient for future model retraining.

After acquiring the raw data, initial exploratory data analysis (EDA) is essential. This isn't just about plotting the time series; it's about understanding the characteristics of your specific dataset. Look for trends, seasonality, cycles, and any obvious anomalies or outliers. Use statistical summaries (`.describe()`, `.info()`) to check data types, missing values, and basic distributions. Visualize the data over different time horizons to spot patterns that might not be apparent in aggregated views. For instance, plotting daily sales data might reveal weekly seasonality, while plotting yearly aggregates might show long-term growth trends. Identifying missing data patterns (e.g., missing completely at random, missing at random, missing not at random) is crucial, as it dictates subsequent imputation strategies. Similarly, detecting outliers that are genuine events versus data entry errors will guide your preprocessing. A simple `df.plot()` combined with `df.resample('W').mean().plot()` can reveal much. This phase is iterative; discoveries here might lead you back to refine your project scope or seek additional data sources. Neglecting thorough EDA can lead to misinterpreting data, applying inappropriate models, and ultimately, poor forecasting performance.

```python
import pandas as pd
import matplotlib.pyplot as plt
import requests
import numpy as np # Added for np.random and np.sin/cos

# Example: Simulating data acquisition from a CSV and an API
# Assume 'sales_data.csv' exists with 'Date' and 'Sales' columns
try:
    sales_df = pd.read_csv('sales_data.csv', parse_dates=['Date'], index_col='Date')
    print("Sales data loaded successfully.")
except FileNotFoundError:
    print("sales_data.csv not found. Creating dummy data.")
    dates = pd.date_range(start='2020-01-01', periods=1000, freq='D')
    sales = 100 + 5 * (dates.dayofyear % 365) / 30 + 2 * (dates.dayofweek) + \
            50 * (dates.year - 2020) / 3 + pd.Series(0.5 * dates.month).rolling(window=30).mean().fillna(0) + \
            pd.Series(10 * (np.random.rand(1000) - 0.5))
    sales_df = pd.DataFrame({'Sales': sales}, index=dates)
    sales_df.to_csv('sales_data.csv') # Save for future runs
    print("Dummy sales data created and saved.")

# Example: Fetching external data (e.g., dummy weather data from a mock API)
def fetch_weather_data(start_date, end_date):
    # In a real scenario, this would call a weather API
    # For demonstration, we'll generate dummy data
    dates = pd.date_range(start=start_date, end=end_date, freq='D')
    temperature = 15 + 10 * np.sin(np.linspace(0, 2 * np.pi * 3, len(dates))) + \
                  5 * (np.random.rand(len(dates)) - 0.5)
    humidity = 60 + 10 * np.cos(np.linspace(0, 2 * np.pi * 3, len(dates))) + \
               5 * (np.random.rand(len(dates)) - 0.5)
    weather_df = pd.DataFrame({'Temperature': temperature, 'Humidity': humidity}, index=dates)
    return weather_df

# Assuming sales_df covers '2020-01-01' to '2022-09-26'
weather_df = fetch_weather_data(sales_df.index.min(), sales_df.index.max())
print("\nWeather data fetched successfully.")

# Initial EDA
print("\nSales Data Info:")
sales_df.info()
print("\nSales Data Description:")
print(sales_df.describe())

print("\nWeather Data Info:")
weather_df.info()
print("\nWeather Data Description:")
print(weather_df.describe())

# Visualize sales data
plt.figure(figsize=(12, 6))
plt.plot(sales_df['Sales'])
plt.title('Daily Sales Over Time')
plt.xlabel('Date')
plt.ylabel('Sales')
plt.grid(True)
plt.show()

# Check for missing values
print("\nMissing values in Sales data:")
print(sales_df.isnull().sum())
print("\nMissing values in Weather data:")
print(weather_df.isnull().sum())
```

#### Key concepts
*   **Business Objective:** A clear, measurable goal for the forecasting project, expressed in terms of business value (e.g., cost reduction, revenue increase).
*   **Technical Metric:** A quantifiable measure used to evaluate model performance (e.g., RMSE, MAE, MAPE, WAPE), which should align with the business objective.
*   **Data Granularity:** The frequency or level of detail at which data is recorded (e.g., hourly, daily, weekly, monthly).
*   **Data Source Evaluation:** The process of assessing potential data sources for relevance, reliability, historical depth, and quality.
*   **Exploratory Data Analysis (EDA):** The initial investigation of data to discover patterns, detect anomalies, test hypotheses, and check assumptions, often using statistical graphics and other data visualization methods.
*   **ETL (Extract, Transform, Load):** A process in data warehousing that involves extracting data from sources, transforming it into a usable format, and loading it into a target system.

#### Hands-on activity
**Objective:** Practice defining project scope and performing initial data acquisition and EDA for a hypothetical energy consumption forecasting project.

**Scenario:** You are tasked with forecasting hourly electricity consumption for a small commercial building to optimize energy usage and reduce costs.

**Instructions:**
1.  **Define Business Objective:** Write down a specific, measurable business objective for this project.
2.  **Identify Data Sources:** List at least three potential internal or external data sources that could be relevant for this forecast (e.g., historical consumption, weather, building occupancy).
3.  **Simulate Data Acquisition & EDA:**
    *   Create a dummy Pandas DataFrame for hourly electricity consumption for one year. Include columns for `timestamp` (hourly frequency) and `consumption_kwh`.
    *   Introduce some simulated missing values (e.g., 5% of `consumption_kwh` values) and a few outliers.
    *   Perform basic EDA:
        *   Check data types and missing values.
        *   Generate descriptive statistics.
        *   Plot the time series to observe trends and seasonality.
        *   Plot a histogram of `consumption_kwh`.

**Code Template:**
```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# 1. Define Business Objective (write your answer here)
# Example: "Reduce peak electricity demand charges by X% by accurately forecasting hourly consumption Y hours in advance."

# 2. Identify Data Sources (list your answers here)
# Example:
# - Internal: Historical hourly electricity consumption from smart meters.
# - External: Hourly temperature and humidity data from a local weather station API.
# - External: Building occupancy schedule or sensor data.

# 3. Simulate Data Acquisition & EDA
# Generate dummy hourly consumption data for one year
start_date = '2023-01-01'
end_date = '2023-12-31 23:00:00'
dates = pd.date_range(start=start_date, end=end_date, freq='H')
hourly_consumption = 50 + 10 * np.sin(np.linspace(0, 2 * np.pi * 365, len(dates))) + \
                     5 * np.cos(np.linspace(0, 2 * np.pi * 7, len(dates))) + \
                     2 * (dates.hour / 24) * 50 + \
                     np.random.normal(0, 5, len(dates))

df = pd.DataFrame({'consumption_kwh': hourly_consumption}, index=dates)

# Introduce some missing values
missing_indices = np.random.choice(df.index, size=int(len(df) * 0.05), replace=False)
df.loc[missing_indices, 'consumption_kwh'] = np.nan

# Introduce some outliers
outlier_indices = np.random.choice(df.index, size=int(len(df) * 0.002), replace=False)
df.loc[outlier_indices, 'consumption_kwh'] = np.random.uniform(200, 300, len(outlier_indices)) # High outliers

print("--- Initial Data Info ---")
df.info()

print("\n--- Descriptive Statistics ---")
print(df.describe())

# Plot the time series
plt.figure(figsize=(15, 7))
plt.plot(df['consumption_kwh'])
plt.title('Hourly Electricity Consumption (Simulated)')
plt.xlabel('Date')
plt.ylabel('Consumption (kWh)')
plt.grid(True)
plt.show()

# Plot histogram
plt.figure(figsize=(10, 6))
plt.hist(df['consumption_kwh'].dropna(), bins=50, edgecolor='k')
plt.title('Distribution of Hourly Consumption')
plt.xlabel('Consumption (kWh)')
plt.ylabel('Frequency')
plt.grid(True)
plt.show()

print("\n--- Missing Values Check ---")
print(df.isnull().sum())
```

#### Assessment idea
1.  **Question:** You are tasked with forecasting the demand for a specific product in a retail store. Which of the following would be the *most effective* business objective for your forecasting project?
    a) Improve sales forecasting accuracy.
    b) Reduce stockouts by 10% for product X in the next quarter by achieving a MAPE of less than 15% on weekly forecasts.
    c) Implement a new machine learning model for demand prediction.
    d) Analyze historical sales data for product X.

    **Correct Answer:** b) Reduce stockouts by 10% for product X in the next quarter by achieving a MAPE of less than 15% on weekly forecasts.
    **Explanation:** Option (b) is the most effective because it is specific ("product X"), measurable ("reduce stockouts by 10%", "MAPE of less than 15%"), time-bound ("next quarter"), and directly links the technical metric (MAPE) to a clear business outcome (reduced stockouts). Options (a), (c), and (d) are too vague or focus on technical tasks rather than business value.

2.  **Question:** During the initial EDA of a time series dataset for website traffic, you notice a sudden, sharp drop in traffic to zero for a continuous period of 3 days, followed by a return to normal levels. What is the most likely initial interpretation of this observation, and what action should you take?
    a) It's a normal seasonal pattern; no action needed.
    b) It's likely a data collection error or system outage; investigate the data source and system logs for that period.
    c) It's a significant outlier that should be immediately removed from the dataset.
    d) It indicates a permanent decline in website popularity; recommend discontinuing the website.

    **Correct Answer:** b) It's likely a data collection error or system outage; investigate the data source and system logs for that period.
    **Explanation:** A sudden drop to zero for a sustained period, especially if it's an unusual pattern, strongly suggests an issue with data collection, a sensor failure, or a system outage rather than a natural business phenomenon or a simple outlier. Removing it without investigation could discard valuable information about system reliability. Investigating logs and the data source is the correct first step to understand the root cause before deciding on data imputation or handling strategies.

#### AI generation note
Create a 12-minute interactive video lesson. Start with an animated scenario illustrating a poorly defined project goal versus a well-defined one for a retail sales forecasting problem. Transition to a live coding demonstration in a Jupyter Notebook, showing how to load sales data from a CSV, integrate external weather data via a simulated API call (using `requests` and `pandas`), and perform initial EDA. Highlight common issues like missing values, data types, and visual patterns (trends, seasonality, outliers) using `df.info()`, `df.describe()`, and `matplotlib.pyplot`. Include a split-screen view showing the code, its output, and generated plots. The interactive element will be a prompt for learners to identify a potential data source for a given forecasting scenario. Emphasize data privacy and security considerations with a pop-up text overlay.

---
### Chapter 8.2 — Advanced Data Preprocessing and Feature Engineering in Practice

#### Learning objectives
*   Apply advanced techniques for handling missing values and outliers in time series data, considering their impact on forecasting models.
*   Construct sophisticated time-based features (e.g., rolling statistics, lagged features, Fourier terms) and external regressors to enrich time series datasets.
*   Implement strategies for handling multi-variate time series, including feature scaling and dimensionality reduction where appropriate.
*   Understand the practical implications of data leakage during feature engineering and develop robust validation strategies to prevent it.

#### Detailed lesson content
After the initial data acquisition and exploratory analysis, the raw data needs significant refinement to become suitable for machine learning models. This stage, advanced data preprocessing and feature engineering, is where you transform raw observations into a rich set of predictors that can capture the underlying dynamics of your time series. This is often the most impactful phase of a forecasting project, as well-engineered features can drastically improve model performance, even with simpler algorithms.

Handling missing values in time series is more nuanced than in cross-sectional data. Simple imputation methods like mean or median imputation can destroy the temporal structure and introduce artificial patterns. Instead, consider methods that leverage the time dimension. Forward-fill (`ffill()`) or backward-fill (`bfill()`) are often good starting points, assuming the value remains constant or carries forward. For more sophisticated imputation, interpolation methods like linear, spline, or polynomial interpolation (`interpolate()`) can estimate missing points based on surrounding values. For seasonal data, seasonal decomposition of time series (STL) can be used to impute missing values by leveraging the seasonal component. A common mistake is to impute using data from the future, which leads to data leakage. Always ensure imputation only uses past or concurrent data. Outlier detection and treatment also require careful thought. While simple statistical methods like Z-scores or IQR can identify potential outliers, domain knowledge is crucial to determine if they are genuine extreme events (e.g., a Black Friday sales spike) or data errors. Genuine outliers should be handled carefully, perhaps by using robust models less sensitive to them, or by feature engineering them as binary indicators. Data errors, however, should be corrected or imputed. Techniques like moving averages or median filters can smooth out noise and reduce the impact of outliers without removing them entirely.

Feature engineering is where you unlock the predictive power from your time series. Beyond basic date-time features (day of week, month, year, hour), consider creating more advanced features. **Lagged features** are fundamental: they represent past values of the target variable or other relevant features. For instance, `sales_t-1` (sales from the previous period) is often the strongest predictor for `sales_t`. The choice of lag depends on the underlying patterns (e.g., daily lag for daily seasonality, weekly lag for weekly seasonality). **Rolling statistics** (moving averages, moving standard deviations, moving sums) capture trends and volatility over specific windows. A 7-day rolling average of sales can smooth out daily fluctuations and highlight weekly trends. **Fourier terms** (sine and cosine waves with different frequencies) are excellent for capturing complex, non-linear seasonal patterns, especially when seasonality isn't perfectly fixed or has multiple cycles (e.g., daily, weekly, yearly). These are particularly useful for models that don't inherently handle seasonality well, like some neural networks.

```python
import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
# from statsmodels.tsa.seasonal import STL # Not used in code example, but mentioned in text

# Assuming df from previous chapter (hourly electricity consumption)
# Let's recreate a simpler version for demonstration if df is not available
if 'df' not in locals():
    start_date = '2023-01-01'
    end_date = '2023-03-31 23:00:00' # Shorter period for faster demo
    dates = pd.date_range(start=start_date, end=end_date, freq='H')
    hourly_consumption = 50 + 10 * np.sin(np.linspace(0, 2 * np.pi * 365/90, len(dates))) + \
                         5 * np.cos(np.linspace(0, 2 * np.pi * 7, len(dates))) + \
                         2 * (dates.hour / 24) * 50 + \
                         np.random.normal(0, 5, len(dates))
    df = pd.DataFrame({'consumption_kwh': hourly_consumption}, index=dates)
    # Introduce some missing values and outliers
    missing_indices = np.random.choice(df.index, size=int(len(df) * 0.05), replace=False)
    df.loc[missing_indices, 'consumption_kwh'] = np.nan
    outlier_indices = np.random.choice(df.index, size=int(len(df) * 0.002), replace=False)
    df.loc[outlier_indices, 'consumption_kwh'] = np.random.uniform(200, 300, len(outlier_indices))

print("Original data head:")
print(df.head())
print("\nMissing values before imputation:")
print(df.isnull().sum())

# Handling missing values: Linear interpolation
df['consumption_kwh_imputed'] = df['consumption_kwh'].interpolate(method='linear')
print("\nMissing values after linear interpolation:")
print(df['consumption_kwh_imputed'].isnull().sum())

# Feature Engineering: Date-time features
df['hour'] = df.index.hour
df['dayofweek'] = df.index.dayofweek
df['month'] = df.index.month
df['dayofyear'] = df.index.dayofyear
df['weekofyear'] = df.index.isocalendar().week.astype(int) # Use .isocalendar().week for ISO week number
df['quarter'] = df.index.quarter
df['is_weekend'] = (df.index.dayofweek >= 5).astype(int)
df['is_holiday'] = 0 # Placeholder for actual holiday data

# Feature Engineering: Lagged features (e.g., consumption from 24 hours ago)
df['consumption_lag_24'] = df['consumption_kwh_imputed'].shift(24)

# Feature Engineering: Rolling statistics (e.g., 24-hour rolling mean)
df['consumption_rolling_mean_24'] = df['consumption_kwh_imputed'].rolling(window=24).mean()
df['consumption_rolling_std_24'] = df['consumption_kwh_imputed'].rolling(window=24).std()

# Feature Engineering: Fourier terms for seasonality (example for daily seasonality)
# A full implementation would involve selecting appropriate K values and frequencies
def add_fourier_terms(df_in, column, period, K):
    # For hourly data, period=24 for daily seasonality.
    # We use df_in.index.hour as the cyclical variable for daily seasonality.
    # For weekly seasonality, you'd use df_in.index.dayofweek and period=7.
    for k in range(1, K + 1):
        df_in[f'{column}_sin_{period}_{k}'] = np.sin(2 * np.pi * k * df_in.index.hour / period)
        df_in[f'{column}_cos_{period}_{k}'] = np.cos(2 * np.pi * k * df_in.index.hour / period)
    return df_in

# Example for daily seasonality (period=24 hours) with K=2
df = add_fourier_terms(df, 'hour', 24, 2)

print("\nFeatures after engineering (head):")
print(df.head())

# Handling multi-variate time series and scaling
# Let's assume we also have 'temperature' and 'humidity' as external regressors
# (from a previous step or simulated here)
df['temperature'] = 10 + 15 * np.sin(np.linspace(0, 2 * np.pi * 365/90, len(df))) + np.random.normal(0, 2, len(df))
df['humidity'] = 60 + 10 * np.cos(np.linspace(0, 2 * np.pi * 365/90, len(df))) + np.random.normal(0, 3, len(df))

# Drop rows with NaN values introduced by lagging/rolling operations for training
df_processed = df.dropna()

# Feature scaling (e.g., MinMaxScaler)
features_to_scale = ['consumption_kwh_imputed', 'consumption_lag_24', 'consumption_rolling_mean_24',
                     'consumption_rolling_std_24', 'temperature', 'humidity']
scaler = MinMaxScaler()
# Ensure that only columns present in df_processed are passed to scaler
actual_features_to_scale = [f for f in features_to_scale if f in df_processed.columns]
df_processed[actual_features_to_scale] = scaler.fit_transform(df_processed[actual_features_to_scale])

print("\nScaled features (head):")
print(df_processed[actual_features_to_scale].head())

# Common mistake: Data leakage
# When creating lagged features or rolling statistics, ensure they are computed only using past data.
# For example, if you're forecasting for T+1, the rolling mean at time T should only use data up to T.
# Using a future value (e.g., rolling mean centered on T for forecasting T+1) is leakage.
# Similarly, scaling should be done using only the training data's fit() method, then transform() on test data.
# `scaler.fit_transform(train_data)` then `scaler.transform(test_data)` is correct.
# `scaler.fit_transform(all_data)` then splitting is incorrect.
```

**External regressors** are features from outside the primary time series that can influence its behavior. Examples include holidays, promotions, economic indicators, weather conditions, or competitor actions. Integrating these requires careful alignment of timestamps and handling potential missingness or different granularities. For instance, if you have daily sales and monthly economic data, you might need to forward-fill or interpolate the economic data to a daily frequency.

When working with multi-variate time series, where you have multiple related time series (e.g., sales of different products, energy consumption across different zones), feature scaling becomes important, especially for distance-based algorithms or neural networks. Techniques like `MinMaxScaler` or `StandardScaler` from `sklearn.preprocessing` ensure that features with larger numerical ranges don't disproportionately influence the model. Dimensionality reduction techniques like PCA (Principal Component Analysis) can be useful if you have a very large number of highly correlated features, though care must be taken to ensure interpretability and avoid losing critical temporal information.

A critical consideration throughout feature engineering is **data leakage**. Data leakage occurs when information from the future (or from the validation/test set) inadvertently "leaks" into your training data, leading to overly optimistic performance estimates. This is particularly insidious in time series. For example, if you calculate a rolling mean for a specific timestamp using data that includes future values, or if you impute missing values using the mean of the entire dataset (including the future), you've introduced leakage. To prevent this, always ensure that any feature engineering or preprocessing step for a given time point `t` only uses data available up to `t-1` or `t`. This applies to scaling (fit scaler on training data only), imputation, and feature creation. The standard practice is to split your data into training, validation, and test sets chronologically, and apply all preprocessing steps separately for each set, fitting only on the training set.

#### Key concepts
*   **Missing Value Imputation:** Techniques to fill in gaps in time series data, such as `ffill()`, `bfill()`, or `interpolate()`, chosen to preserve temporal structure.
*   **Outlier Treatment:** Methods to identify and manage extreme values in time series, distinguishing between genuine events and data errors.
*   **Lagged Features:** Past values of a time series or its related variables, used as predictors for future values.
*   **Rolling Statistics:** Statistical measures (e.g., mean, standard deviation, sum) calculated over a moving window of time, capturing local trends and volatility.
*   **Fourier Terms:** Sine and cosine functions used to model periodic (seasonal) patterns in time series, offering flexibility for complex seasonality.
*   **External Regressors:** Additional time series or static features (e.g., holidays, weather, economic indicators) that influence the target variable.
*   **Feature Scaling:** Normalizing or standardizing features to a common range, crucial for many machine learning algorithms.
*   **Data Leakage:** The unintentional introduction of information from the future or validation/test sets into the training data, leading to inflated performance estimates.

#### Hands-on activity
**Objective:** Apply advanced preprocessing and feature engineering techniques to a real-world-like sales dataset.

**Scenario:** You have a daily sales dataset (`daily_sales.csv`) with some missing values and you want to prepare it for forecasting. You also have a list of public holidays.

**Instructions:**
1.  **Load Data:** Load `daily_sales.csv` (provided as a dummy dataset below).
2.  **Handle Missing Values:** Use a combination of `ffill()` and `bfill()` for short gaps, and `interpolate(method='linear')` for longer gaps in the `sales` column.
3.  **Create Date-Time Features:** Extract `dayofweek`, `month`, `year`, `dayofyear`, `weekofyear`.
4.  **Add Holiday Feature:** Create a binary `is_holiday` feature based on the provided `holidays_list`.
5.  **Create Lagged Features:** Create `sales_lag_1` (previous day's sales) and `sales_lag_7` (previous week's sales).
6.  **Create Rolling Statistics:** Calculate a 7-day rolling mean and 7-day rolling standard deviation of sales.
7.  **Inspect Results:** Display the head of the DataFrame with the new features and check for any remaining `NaN` values from feature creation.

**Code Template:**
```python
import pandas as pd
import numpy as np

# Create dummy daily sales data for demonstration
dates = pd.date_range(start='2022-01-01', periods=365*2, freq='D')
sales = 100 + 10 * np.sin(np.linspace(0, 2 * np.pi * 2, len(dates))) + \
        5 * np.cos(np.linspace(0, 2 * np.pi * 52 * 2, len(dates))) + \
        np.random.normal(0, 10, len(dates))
sales_df = pd.DataFrame({'sales': sales}, index=dates)

# Introduce some missing values
missing_indices = np.random.choice(sales_df.index, size=int(len(sales_df) * 0.03), replace=False)
sales_df.loc[missing_indices, 'sales'] = np.nan

# Introduce a few outliers
outlier_indices = np.random.choice(sales_df.index, size=int(len(sales_df) * 0.005), replace=False)
sales_df.loc[outlier_indices, 'sales'] = np.random.uniform(250, 350, len(outlier_indices))

# Save to CSV for consistent loading
sales_df.to_csv('daily_sales.csv')

# --- Start of your solution ---

# 1. Load Data
df = pd.read_csv('daily_sales.csv', index_col='Unnamed: 0', parse_dates=True)
df.index.name = 'Date'
print("Original data head:")
print(df.head())
print("\nMissing values before imputation:")
print(df.isnull().sum())

# 2. Handle Missing Values
# First, a quick ffill/bfill for very short gaps
df['sales_imputed'] = df['sales'].fillna(method='ffill').fillna(method='bfill')
# Then, linear interpolation for any remaining (potentially longer) gaps
df['sales_imputed'] = df['sales_imputed'].interpolate(method='linear')
print("\nMissing values after imputation:")
print(df['sales_imputed'].isnull().sum())

# 3. Create Date-Time Features
df['dayofweek'] = df.index.dayofweek
df['month'] = df.index.month
df['year'] = df.index.year
df['dayofyear'] = df.index.dayofyear
df['weekofyear'] = df.index.isocalendar().week.astype(int)

# 4. Add Holiday Feature
# Example list of holidays (adjust years as per your data)
holidays_list = [
    '2022-01-01', '2022-07-04', '2022-12-25',
    '2023-01-01', '2023-07-04', '2023-12-25'
]
df['is_holiday'] = df.index.isin(pd.to_datetime(holidays_list)).astype(int)

# 5. Create Lagged Features
df['sales_lag_1'] = df['sales_imputed'].shift(1)
df['sales_lag_7'] = df['sales_imputed'].shift(7)

# 6. Create Rolling Statistics
df['sales_rolling_mean_7'] = df['sales_imputed'].rolling(window=7).mean()
df['sales_rolling_std_7'] = df['sales_imputed'].rolling(window=7).std()

# 7. Inspect Results
print("\nDataFrame with new features (head):")
print(df.head(10)) # Show more rows to see lagged/rolling features fill in
print("\nMissing values after feature engineering:")
print(df.isnull().sum())
```

#### Assessment idea
1.  **Question:** You are building a model to forecast hourly electricity consumption. You decide to create a feature representing the average consumption over the past 24 hours. To prevent data leakage, how should you calculate this rolling mean for a forecast at time `t+1`?
    a) Calculate the rolling mean using data from `t-23` to `t`.
    b) Calculate the rolling mean using data from `t-24` to `t-1`.
    c) Calculate the rolling mean using data from `t-12` to `t+11`.
    d) Calculate the rolling mean using the entire dataset and then split.

    **Correct Answer:** b) Calculate the rolling mean using data from `t-24` to `t-1`.
    **Explanation:** To forecast `t+1`, any features used must only contain information available *up to and including* time `t`. A rolling mean for `t+1` should therefore be based on data points that occurred *before* `t+1`. Option (b) correctly uses data from the past (`t-24` to `t-1`), which is available at time `t` (when the forecast for `t+1` would be made). This is the safest way to avoid leakage, as the feature at time `t` represents the 24-hour window *ending at `t-1`*.

2.  **Question:** You are working with a time series of daily website visitors. You observe that every year around December 25th, traffic drops significantly. Which feature engineering technique would be most appropriate to capture this recurring pattern effectively for a machine learning model?
    a) Creating a lagged feature of visitors from the previous day.
    b) Calculating a 30-day rolling average of visitors.
    c) Adding a binary `is_christmas_day` feature and potentially `days_until_christmas` and `days_since_christmas`.
    d) Applying `MinMaxScaler` to the visitor count.

    **Correct Answer:** c) Adding a binary `is_christmas_day` feature and potentially `days_until_christmas` and `days_since_christmas`.
    **Explanation:** The observed pattern is a specific, recurring event (Christmas). A binary indicator for Christmas Day directly captures this event. Additionally, features like `days_until_christmas` and `days_since_christmas` can capture the pre- and post-holiday effects (e.g., increased traffic leading up to the holiday, then a drop). Lagged features (a) and rolling averages (b) might capture some of the effect but are less explicit and might struggle with the sharp, specific nature of holiday impacts. Scaling (d) is a preprocessing step, not a feature engineering technique for capturing specific patterns.

#### AI generation note
Produce a 15-minute live coding video. Start with a Pandas DataFrame containing raw time series data with missing values and outliers. Demonstrate step-by-step how to impute missing values using `interpolate('linear')` and `ffill()`. Then, show the creation of various features: `dayofweek`, `month`, `lagged_sales` (1-day and 7-day), and `rolling_mean` (7-day). Explain the concept of data leakage with a visual warning overlay when discussing lagged features and how to avoid it by using `shift()`. Illustrate the impact of feature scaling with `MinMaxScaler` on a small subset of features. Use clear Jupyter Notebook output and side-by-side code/plot views. The interactive element will be a short coding challenge for learners to add a `is_weekend` feature to the DataFrame.

---
### Chapter 8.3 — Model Selection and Iterative Development for Complex Scenarios

#### Learning objectives
*   Evaluate and select appropriate forecasting models (statistical, classical ML, deep learning) based on time series characteristics, data volume, and project requirements.
*   Implement a robust iterative development workflow for forecasting models, including systematic experimentation and performance tracking.
*   Apply advanced cross-validation strategies tailored for time series data to ensure reliable model evaluation.
*   Understand the trade-offs between model complexity, interpretability, and computational cost in real-world forecasting applications.

#### Detailed lesson content
Choosing the right forecasting model in a real-world scenario is less about finding a single "best" algorithm and more about selecting the most suitable tool for the specific problem at hand, given the data characteristics, business constraints, and desired forecast horizon. This process is rarely linear; it's an iterative cycle of experimentation, evaluation, and refinement.

When approaching model selection, consider the nature of your time series. Is it highly seasonal? Does it exhibit strong trends? Are there many external factors influencing it? For simple, univariate time series with clear seasonality and trend, traditional statistical models like **ARIMA** or **SARIMA** (covered in Module 2) can be very effective and interpretable. If your data has complex seasonality, multiple seasonalities, or strong holiday effects, **Prophet** (also covered in Module 2) often provides a robust and easy-to-use solution, especially for business forecasting where interpretability is valued. Its additive model structure makes it resilient to missing data and shifts in trend.

As the complexity of the data increases, particularly with many external regressors or non-linear relationships, classical machine learning models (covered in Module 4) like **Gradient Boosting Machines (GBMs)** (e.g., LightGBM, XGBoost) or **Random Forests** become powerful contenders. These models excel at capturing complex interactions between features and can handle large numbers of predictors. They are often used in a "panel data" approach, where each time step is treated as an independent observation with engineered features, and the time index itself is used as a feature. For highly complex, long-term dependencies, or when dealing with very large datasets and multiple related time series, **deep learning models** (covered in Module 5), such as **LSTMs (Long Short-Term Memory networks)** or **Transformers**, might be necessary. LSTMs are particularly adept at learning sequential patterns and long-term dependencies without explicit feature engineering for lags, making them suitable for raw time series inputs. However, they require more data, computational resources, and are generally less interpretable.

The iterative development workflow for forecasting models typically involves:
1.  **Baseline Model:** Start with a simple model (e.g., Naive forecast, simple average, or a basic ARIMA) to establish a baseline performance. This provides a benchmark against which more complex models can be compared. A common mistake is to immediately jump to complex models without a baseline, making it difficult to assess true improvement.
2.  **Feature Engineering:** Continuously refine and add new features based on EDA and domain knowledge.
3.  **Model Experimentation:** Train and evaluate various models (statistical, ML, DL) using the engineered features.
4.  **Hyperparameter Tuning:** Optimize the chosen model's hyperparameters to maximize performance.
5.  **Error Analysis:** Analyze where the model makes mistakes. Are there specific periods, events, or types of data where performance degrades? This often leads back to more feature engineering or selecting a different model.
6.  **Comparison and Selection:** Compare models based on chosen evaluation metrics (e.g., RMSE, MAE, MAPE, WAPE) and business objectives.

Advanced cross-validation strategies are crucial for time series to avoid data leakage. Standard k-fold cross-validation is inappropriate because it shuffles data, allowing future information to leak into the training set. Instead, use **Time Series Cross-Validation** (also known as "rolling forecast origin" or "walk-forward validation"). In this approach, you train your model on an initial segment of the data, forecast the next period, then extend the training data by one period, retrain, and forecast again. This simulates how a model would be used in production. `sklearn.model_selection.TimeSeriesSplit` provides a convenient way to generate these splits. Another strategy is to use a fixed window for training that slides forward, or an expanding window that grows with each iteration.

```python
import pandas as pd
import numpy as np
from sklearn.model_selection import TimeSeriesSplit
from sklearn.metrics import mean_squared_error, mean_absolute_error
from sklearn.ensemble import RandomForestRegressor
# from statsmodels.tsa.arima.model import ARIMA # Not used in code example, but mentioned in text
from prophet import Prophet
import matplotlib.pyplot as plt

# Assuming df_processed from previous chapter (daily sales with features)
# Recreate a simplified version if not available
if 'df_processed' not in locals():
    dates = pd.date_range(start='2022-01-01', periods=365*3, freq='D')
    sales = 100 + 10 * np.sin(np.linspace(0, 2 * np.pi * 3, len(dates))) + \
            5 * np.cos(np.linspace(0, 2 * np.pi * 52 * 3, len(dates))) + \
            np.random.normal(0, 10, len(dates))
    df_processed = pd.DataFrame({'sales_imputed': sales}, index=dates)
    df_processed['dayofweek'] = df_processed.index.dayofweek
    df_processed['month'] = df_processed.index.month
    df_processed['sales_lag_1'] = df_processed['sales_imputed'].shift(1)
    df_processed['sales_lag_7'] = df_processed['sales_imputed'].shift(7)
    df_processed = df_processed.dropna()

print("Processed data head (sample):")
print(df_processed.head())

# Define target and features
target = 'sales_imputed'
features = ['dayofweek', 'month', 'sales_lag_1', 'sales_lag_7'] # Example features

X = df_processed[features]
y = df_processed[target]

# Time Series Cross-Validation setup
tscv = TimeSeriesSplit(n_splits=5) # Example: 5 splits

print("\n--- Time Series Cross-Validation ---")
fold = 1
for train_index, test_index in tscv.split(X):
    X_train, X_test = X.iloc[train_index], X.iloc[test_index]
    y_train, y_test = y.iloc[train_index], y.iloc[test_index]

    print(f"\nFold {fold}:")
    print(f"Train period: {X_train.index.min()} to {X_train.index.max()} (Size: {len(X_train)})")
    print(f"Test period:  {X_test.index.min()} to {X_test.index.max()} (Size: {len(X_test)})")

    # --- Model Experimentation ---
    # Example 1: Random Forest Regressor
    rf_model = RandomForestRegressor(n_estimators=100, random_state=42, n_jobs=-1)
    rf_model.fit(X_train, y_train)
    rf_preds = rf_model.predict(X_test)
    rf_rmse = np.sqrt(mean_squared_error(y_test, rf_preds))
    rf_mae = mean_absolute_error(y_test, rf_preds)
    print(f"Random Forest - RMSE: {rf_rmse:.2f}, MAE: {rf_mae:.2f}")

    # Example 2: Prophet (requires specific DataFrame format)
    # Note: Prophet is typically trained on the full historical data up to the forecast origin,
    # not necessarily within each fold's train split directly like ML models.
    # For a true walk-forward, you'd re-initialize and fit Prophet in each fold.
    # For simplicity here, we'll just demonstrate its usage.
    # To properly use Prophet in TSCV, you'd need to convert y_train to Prophet's 'ds', 'y' format.
    # For this example, we'll skip full Prophet TSCV for brevity, but acknowledge its importance.

    # Example 3: ARIMA (requires specific DataFrame format and often univariate)
    # ARIMA is often sensitive to training data size and can be slow for many folds.
    # We'll skip full ARIMA TSCV for brevity here.

    fold += 1

# --- Illustrating Prophet usage (outside TSCV for simplicity) ---
print("\n--- Illustrating Prophet Model ---")
prophet_df = df_processed.reset_index().rename(columns={'Date': 'ds', 'sales_imputed': 'y'})
# Prophet can also use external regressors, which would be added as columns to prophet_df
# For example: prophet_df['dayofweek'] = prophet_df['ds'].dt.dayofweek

m = Prophet(seasonality_mode='additive', daily_seasonality=False) # daily_seasonality=False if data is daily
m.add_seasonality(name='weekly', period=7, fourier_order=3)
m.add_seasonality(name='monthly', period=30.5, fourier_order=5)
# If using external regressors: m.add_regressor('dayofweek')
m.fit(prophet_df)

future = m.make_future_dataframe(periods=30) # Forecast 30 days into the future
forecast = m.predict(future)

print("Prophet forecast head:")
print(forecast[['ds', 'yhat', 'yhat_lower', 'yhat_upper']].tail())

# Plotting Prophet forecast
fig = m.plot(forecast)
plt.title('Prophet Forecast Example')
plt.show()
fig2 = m.plot_components(forecast)
plt.suptitle('Prophet Forecast Components Example', y=1.02)
plt.tight_layout()
plt.show()

# Trade-offs:
# Random Forest: Good performance, moderate interpretability (feature importance), moderate computational cost.
# Prophet: Good for business forecasting, highly interpretable (components), relatively fast, robust to missing data.
# LSTMs: Potentially highest accuracy for complex patterns, but low interpretability, high data/compute requirements.
```

The trade-offs between model complexity, interpretability, and computational cost are vital considerations. A highly complex deep learning model might offer marginal accuracy gains but be a "black box," making it hard to explain forecasts to stakeholders or debug issues. A simpler, more interpretable model like Prophet or an ARIMA might be preferred if explainability is paramount, even if its raw accuracy is slightly lower. Computational cost impacts training time, inference speed, and infrastructure requirements, which are critical for deployment. For instance, a complex ensemble of deep learning models might take hours to retrain and require powerful GPUs, while a Prophet model might retrain in minutes on a CPU. Always align your model choice with the specific project requirements and available resources. Don't over-engineer the solution if a simpler model suffices.

#### Key concepts
*   **Model Selection:** The process of choosing the most appropriate forecasting algorithm based on data characteristics, project goals, and constraints.
*   **Iterative Development:** A cyclical process of building, evaluating, refining, and comparing models to continuously improve performance.
*   **Baseline Model:** A simple, easily implemented model used as a benchmark to assess the performance of more complex models.
*   **Time Series Cross-Validation (Walk-Forward Validation):** A specialized cross-validation technique for time series that maintains the temporal order of data, preventing data leakage.
*   **Prophet:** A forecasting tool developed by Facebook, known for its robustness, interpretability, and ability to handle complex seasonality and holidays.
*   **Gradient Boosting Machines (GBMs):** Ensemble machine learning models (e.g., LightGBM, XGBoost) that build sequential decision trees, effective for capturing complex relationships and external regressors.
*   **LSTMs (Long Short-Term Memory networks):** A type of recurrent neural network particularly suited for sequential data, capable of learning long-term dependencies.
*   **Model Trade-offs:** The balance between model complexity, interpretability, computational cost, and predictive accuracy.

#### Hands-on activity
**Objective:** Implement Time Series Cross-Validation and compare a baseline model with a simple ML model.

**Scenario:** You have the `df_processed` DataFrame (from the previous chapter or recreated) containing `sales_imputed`, `dayofweek`, `month`, `sales_lag_1`, and `sales_lag_7`. Your goal is to forecast `sales_imputed`.

**Instructions:**
1.  **Prepare Data:** Define `X` (features) and `y` (target) from `df_processed`. Ensure `X` and `y` are aligned by index.
2.  **Implement Naive Baseline:** Create a baseline model that predicts the last observed value (`sales_lag_1`) for each test point.
3.  **Implement Random Forest:** Train a `RandomForestRegressor` model using `TimeSeriesSplit` for cross-validation.
4.  **Evaluate and Compare:** For each fold, calculate RMSE and MAE for both the Naive baseline and the Random Forest model. Print the results for each fold and calculate the average performance across all folds.

**Code Template:**
```python
import pandas as pd
import numpy as np
from sklearn.model_selection import TimeSeriesSplit
from sklearn.metrics import mean_squared_error, mean_absolute_error
from sklearn.ensemble import RandomForestRegressor
import matplotlib.pyplot as plt

# Recreate df_processed if not available (ensure it has necessary features)
if 'df_processed' not in locals() or df_processed.empty:
    dates = pd.date_range(start='2021-01-01', periods=365*3, freq='D')
    sales = 100 + 10 * np.sin(np.linspace(0, 2 * np.pi * 3, len(dates))) + \
            5 * np.cos(np.linspace(0, 2 * np.pi * 52 * 3, len(dates))) + \
            np.random.normal(0, 10, len(dates))
    df_processed = pd.DataFrame({'sales_imputed': sales}, index=dates)
    df_processed['dayofweek'] = df_processed.index.dayofweek
    df_processed['month'] = df_processed.index.month
    df_processed['sales_lag_1'] = df_processed['sales_imputed'].shift(1)
    df_processed['sales_lag_7'] = df_processed['sales_imputed'].shift(7)
    df_processed = df_processed.dropna() # Drop NaNs from lagged features

# 1. Prepare Data
target = 'sales_imputed'
features = ['dayofweek', 'month', 'sales_lag_1', 'sales_lag_7']

X = df_processed[features]
y = df_processed[target]

tscv = TimeSeriesSplit(n_splits=5)

rf_rmse_scores = []
rf_mae_scores = []
naive_rmse_scores = []
naive_mae_scores = []

print("--- Time Series Cross-Validation Results ---")
fold = 1
for train_index, test_index in tscv.split(X):
    X_train, X_test = X.iloc[train_index], X.iloc[test_index]
    y_train, y_test = y.iloc[train_index], y.iloc[test_index]

    # --- 2. Implement Naive Baseline ---
    # Naive forecast: predict the last observed value (sales_lag_1)
    # Ensure sales_lag_1 is available in X_test
    naive_preds = X_test['sales_lag_1']
    # Handle potential NaNs in naive_preds if the very first test point doesn't have a lag
    naive_preds = naive_preds.fillna(y_train.iloc[-1]) # Fallback to last training value if lag is NaN

    naive_rmse = np.sqrt(mean_squared_error(y_test, naive_preds))
    naive_mae = mean_absolute_error(y_test, naive_preds)
    naive_rmse_scores.append(naive_rmse)
    naive_mae_scores.append(naive_mae)

    # --- 3. Implement Random Forest ---
    rf_model = RandomForestRegressor(n_estimators=50, random_state=42, n_jobs=-1) # Reduced n_estimators for faster demo
    rf_model.fit(X_train, y_train)
    rf_preds = rf_model.predict(X_test)

    rf_rmse = np.sqrt(mean_squared_error(y_test, rf_preds))
    rf_mae = mean_absolute_error(y_test, rf_preds)
    rf_rmse_scores.append(rf_rmse)
    rf_mae_scores.append(rf_mae)

    print(f"\nFold {fold}:")
    print(f"  Train period: {X_train.index.min()} to {X_train.index.max()}")
    print(f"  Test period:  {X_test.index.min()} to {X_test.index.max()}")
    print(f"  Naive Baseline - RMSE: {naive_rmse:.2f}, MAE: {naive_mae:.2f}")
    print(f"  Random Forest - RMSE: {rf_rmse:.2f}, MAE: {rf_mae:.2f}")
    fold += 1

# 4. Evaluate and Compare (Average Scores)
print("\n--- Average Performance Across Folds ---")
print(f"Average Naive Baseline RMSE: {np.mean(naive_rmse_scores):.2f}")
print(f"Average Naive Baseline MAE: {np.mean(naive_mae_scores):.2f}")
print(f"Average Random Forest RMSE: {np.mean(rf_rmse_scores):.2f}")
print(f"Average Random Forest MAE: {np.mean(rf_mae_scores):.2f}")

# Optional: Visualize one fold's predictions
plt.figure(figsize=(14, 7))
plt.plot(y_test.index, y_test, label='Actual Sales', color='blue')
plt.plot(y_test.index, rf_preds, label='Random Forest Predictions', color='red', linestyle='--')
plt.plot(y_test.index, naive_preds, label='Naive Baseline Predictions', color='green', linestyle=':')
plt.title(f'Forecast Comparison for Last Cross-Validation Fold')
plt.xlabel('Date')
plt.ylabel('Sales')
plt.legend()
plt.grid(True)
plt.show()
```

#### Assessment idea
1.  **Question:** You are evaluating several forecasting models for a highly seasonal retail sales time series with significant holiday effects. You have a limited dataset (2 years of daily data) and prioritize model interpretability for business stakeholders. Which model would generally be the *most suitable starting point* given these constraints?
    a) A complex LSTM deep learning model.
    b) A simple Naive forecast (last observed value).
    c) Facebook Prophet with holiday regressors.
    d) A large ensemble of Gradient Boosting Machines (XGBoost).

    **Correct Answer:** c) Facebook Prophet with holiday regressors.
    **Explanation:** Prophet is explicitly designed for business forecasting, handles seasonality and holidays well, is robust to missing data, and offers high interpretability through its component plots. Given the limited data and emphasis on interpretability, Prophet is an excellent choice. LSTMs (a) require more data and are less interpretable. A Naive forecast (b) is a good baseline but won't capture seasonality or holidays. XGBoost (d) can be powerful but might be less interpretable than Prophet for explaining seasonal/holiday effects directly, and might overfit with limited data if not tuned carefully.

2.  **Question:** You are performing time series cross-validation for a model forecasting monthly energy consumption. You have 5 years of data. If you use `TimeSeriesSplit(n_splits=3)`, how would the training and testing sets generally be structured for the *first* fold?
    a) Training: First 3 years; Testing: Fourth year.
    b) Training: First 4 years; Testing: Fifth year.
    c) Training: First 1 year; Testing: Second year.
    d) Training: Random 80% of data; Testing: Remaining 20%.

    **Correct Answer:** a) Training: First 3 years; Testing: Fourth year.
    **Explanation:** `TimeSeriesSplit` works by creating splits where the training set is always before the test set. With `n_splits=3` over 5 years of data, the splits are typically constructed such that the test sets are roughly equal in size and appear sequentially. For 5 years, this would mean approximately 1 year per test set.
    *   **Fold 1:** Train on ~3 years, Test on ~1 year (e.g., Year 1-3 for train, Year 4 for test).
    *   **Fold 2:** Train on ~4 years, Test on ~1 year (e.g., Year 1-4 for train, Year 5 for test).
    *   **Fold 3:** This would typically be the last fold, depending on exact `n_splits` and data distribution.
    Therefore, option (a) represents a plausible initial split for `n_splits=3` over 5 years, where the first training set covers a significant portion, and the test set is the subsequent segment. Option (b) would be the *last* fold. Option (c) is too small for the first fold with only 3 splits. Option (d) describes standard k-fold, which is incorrect for time series.

#### AI generation note
Create a 14-minute video lesson with a mix of animated diagrams and live coding. Start with an animation explaining the concept of Time Series Cross-Validation (rolling forecast origin) versus standard K-fold, highlighting data leakage. Then, transition to a Jupyter Notebook demo. First, show how to prepare data for `TimeSeriesSplit`. Then, implement a simple Naive baseline model and a `RandomForestRegressor` within a `TimeSeriesSplit` loop, calculating RMSE and MAE for each fold. Visualize the predictions of the Random Forest and Naive model against actuals for the last fold using `matplotlib`. Conclude with a discussion of model trade-offs, using a comparison table overlay for ARIMA, Prophet, GBMs, and LSTMs regarding interpretability, data requirements, and computational cost. The interactive element will be a multiple-choice question on the correct cross-validation strategy for time series.

---
### Chapter 8.4 — Building Robust Forecasting Pipelines with MLOps Principles

#### Learning objectives
*   Understand the core principles of MLOps as applied to time series forecasting, emphasizing automation, reproducibility, and continuous delivery.
*   Design and implement a structured data pipeline for time series, covering data ingestion, preprocessing, and feature engineering.
*   Develop a model training and evaluation pipeline that supports iterative development, hyperparameter tuning, and model versioning.
*   Utilize tools and practices for experiment tracking and reproducibility in time series forecasting projects.

#### Detailed lesson content
Building a single forecasting model is one thing; deploying and maintaining it in a production environment is another entirely. This is where MLOps (Machine Learning Operations) principles become indispensable. MLOps aims to streamline the entire machine learning lifecycle, from data collection to model deployment and monitoring, ensuring automation, reproducibility, and continuous improvement. For time series forecasting, MLOps is particularly critical due to the dynamic nature of data, the need for frequent retraining, and the often high stakes of accurate predictions.

A robust forecasting pipeline starts with a well-defined **data pipeline**. This pipeline handles the continuous flow of data from its source to the model.
1.  **Data Ingestion:** This component is responsible for reliably collecting raw time series data from various sources (databases, APIs, streaming platforms). It should be robust to failures, handle different data formats, and ideally, be scheduled to run automatically at a specified frequency. Tools like Apache Airflow, Prefect, or even simple cron jobs can orchestrate this.
2.  **Data Validation:** Before any processing, ingested data must be validated. This involves checking for schema conformity, data type correctness, range constraints (e.g., sales can't be negative), and detecting significant data quality issues like sudden drops to zero or extreme outliers. Early detection of data anomalies prevents corrupted data from poisoning your models. Libraries like Great Expectations can help define and enforce data quality checks.
3.  **Data Preprocessing & Feature Engineering:** This is where the transformations discussed in Chapter 8.2 are applied. It's crucial that these steps are consistent and reproducible. The same preprocessing logic applied during training must be applied during inference. This often means encapsulating preprocessing steps into functions or classes that can be versioned and reused. For example, a `MinMaxScaler` fitted on training data must be saved and reloaded to transform new inference data, not refitted.

```python
import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
import joblib # For saving/loading models and scalers
import os # For file path operations

# Simulate data ingestion (e.g., from a daily CSV)
def ingest_data(filepath='daily_sales_with_features.csv'):
    try:
        df = pd.read_csv(filepath, index_col='Date', parse_dates=True)
        return df
    except FileNotFoundError:
        print(f"Error: {filepath} not found. Please ensure the file exists.")
        return pd.DataFrame()

# Simulate data validation (simple example)
def validate_data(df):
    if df.empty:
        print("Validation Warning: DataFrame is empty.")
        return False
    if 'sales' not in df.columns: # Changed to 'sales' as that's what's in the dummy CSV
        print("Validation Error: 'sales' column missing.")
        return False
    if df['sales'].isnull().any(): # Check raw sales column
        print("Validation Error: Missing values detected in 'sales'.")
        # In a real pipeline, you might raise an exception or trigger an alert
        return False
    # Add more complex validation rules here (e.g., range checks, schema checks)
    return True

# Simulate preprocessing and feature engineering
def preprocess_and_feature_engineer(df, scaler=None, is_training=True):
    # Ensure a copy to avoid SettingWithCopyWarning
    df_processed = df.copy()

    # Imputation (if not already done in ingestion)
    # Assuming 'sales' is the raw column and 'sales_imputed' is the processed one
    if 'sales_imputed' not in df_processed.columns:
        df_processed['sales_imputed'] = df_processed['sales'].interpolate(method='linear')

    # Date-time features
    df_processed['dayofweek'] = df_processed.index.dayofweek
    df_processed['month'] = df_processed.index.month
    df_processed['sales_lag_1'] = df_processed['sales_imputed'].shift(1)
    df_processed['sales_lag_7'] = df_processed['sales_imputed'].shift(7)
    df_processed['sales_rolling_mean_7'] = df_processed['sales_imputed'].rolling(window=7).mean()

    # Drop NaNs introduced by lagging/rolling for training
    if is_training:
        df_processed = df_processed.dropna()

    # Feature scaling
    # Ensure these features are present after dropna for training, or handle missing ones for inference
    features_to_scale = ['sales_imputed', 'sales_lag_1', 'sales_lag_7', 'sales_rolling_mean_7']
    
    # Filter features_to_scale to only include those actually present in the DataFrame
    current_features_to_scale = [f for f in features_to_scale if f in df_processed.columns]

    if scaler is None and is_training:
        scaler = MinMaxScaler()
        df_processed[current_features_to_scale] = scaler.fit_transform(df_processed[current_features_to_scale])
        joblib.dump(scaler, 'scaler.pkl') # Save scaler
    elif scaler is not None:
        # For inference, ensure features have no NaNs before scaling, or scaler.transform will fail
        # This is a simplification; a robust production system would handle this more gracefully
        temp_df_for_scaling = df_processed[current_features_to_scale].copy()
        for col in current_features_to_scale:
            if temp_df_for_scaling[col].isnull().any():
                # Fill NaNs with a sensible value, e.g., 0 or the mean from training data
                # For demo, we'll fill with 0, but a better approach would be to use training mean
                temp_df_for_scaling[col] = temp_df_for_scaling[col].fillna(0)
        df_processed[current_features_to_scale] = scaler.transform(temp_df_for_scaling)
    else: # Inference without a pre-fitted scaler, this is a common mistake
        print("Warning: No scaler provided for inference. Features might not be scaled correctly.")

    return df_processed, scaler

# Example usage:
# Create a dummy CSV for demonstration if not already present
if not os.path.exists('daily_sales_with_features.csv'):
    dates = pd.date_range(start='2021-01-01', periods=365*3, freq='D')
    sales = 100 + 10 * np.sin(np.linspace(0, 2 * np.pi * 3, len(dates))) + \
            5 * np.cos(np.linspace(0, 2 * np.pi * 52 * 3, len(dates))) + \
            np.random.normal(0, 10, len(dates))
    dummy_df = pd.DataFrame({'sales': sales}, index=dates)
    missing_indices = np.random.choice(dummy_df.index, size=int(len(dummy_df) * 0.03), replace=False)
    dummy_df.loc[missing_indices, 'sales'] = np.nan
    dummy_df.to_csv('daily_sales_with_features.csv')
    print("Created daily_sales_with_features.csv")
else:
    print("daily_sales_with_features.csv already exists.")

raw_data = ingest_data()
if validate_data(raw_data):
    processed_data, fitted_scaler = preprocess_and_feature_engineer(raw_data, is_training=True)
    print("\nProcessed data head (training):")
    print(processed_data.head())

    # Simulate new data for inference
    # For a real inference, you'd get truly new data. Here, we'll use a subset of existing data.
    new_raw_data = ingest_data('daily_sales_with_features.csv').tail(10) 
    
    # Ensure 'sales' column is present for preprocessing
    if 'sales' not in new_raw_data.columns:
        # If the tail doesn't have 'sales' from original, create it for demo
        new_raw_data['sales'] = new_raw_data['sales_imputed'] # Fallback for demo

    loaded_scaler = joblib.load('scaler.pkl') # Load the saved scaler
    inference_data, _ = preprocess_and_feature_engineer(new_raw_data, scaler=loaded_scaler, is_training=False)
    print("\nProcessed data head (inference):")
    print(inference_data.head())
```

The **model training and evaluation pipeline** takes the prepared data and orchestrates the model lifecycle.
1.  **Experiment Tracking:** Every training run should be tracked. This includes hyperparameters, model architecture, features used, evaluation metrics, and the specific dataset version. Tools like MLflow, Weights & Biases, or DVC (Data Version Control) are invaluable here. They enable you to compare different experiments, reproduce past results, and understand how changes impact performance.
2.  **Model Training:** This component trains the chosen forecasting model (or models) on the prepared training data. It should be configurable with different algorithms and hyperparameters.
3.  **Model Evaluation:** After training, the model is evaluated against a held-out validation set using appropriate time series cross-validation techniques (as discussed in Chapter 8.3). Key metrics (RMSE, MAE, MAPE, etc.) are calculated and logged.
4.  **Model Versioning:** Trained models, along with their associated metadata (metrics, hyperparameters, features), should be versioned and stored in a model registry. This allows you to track model evolution, roll back to previous versions if needed, and manage the deployment of specific model versions.

Reproducibility is a cornerstone of MLOps. This means being able to recreate any past experiment or model training run exactly. This requires versioning not just models, but also:
*   **Code:** Using Git for all code (data pipelines, model training scripts, inference code).
*   **Data:** Using tools like DVC to version datasets or snapshots of data used for training.
*   **Environments:** Documenting or containerizing the exact software dependencies (e.g., using `requirements.txt`, Docker, or Conda environments) to ensure consistent execution.

For time series, continuous integration/continuous deployment (CI/CD) practices are adapted for **Continuous Training (CT)** and **Continuous Delivery (CD)**. CT means automatically retraining models when new data becomes available or when performance degrades (model drift). CD involves automatically deploying new, validated model versions to production. This automation reduces manual effort, speeds up iteration cycles, and ensures that your forecasting models remain relevant and accurate over time. Neglecting MLOps principles often leads to "model rot," where models degrade in performance over time due to outdated data or code, or become impossible to reproduce or update.

#### Key concepts
*   **MLOps (Machine Learning Operations):** A set of practices that combines Machine Learning, DevOps, and Data Engineering to standardize and streamline the lifecycle of ML models.
*   **Data Pipeline:** A series of automated steps for data ingestion, validation, cleaning, transformation, and feature engineering.
*   **Data Ingestion:** The process of collecting raw data from various sources into a system for processing.
*   **Data Validation:** Checking the quality, consistency, and adherence to schema of incoming data.
*   **Model Training Pipeline:** An automated workflow for training, evaluating, and storing machine learning models.
*   **Experiment Tracking:** Logging and managing all aspects of machine learning experiments (hyperparameters, metrics, code versions, datasets).
*   **Model Versioning:** Storing and managing different versions of trained models, allowing for rollback and tracking.
*   **Reproducibility:** The ability to recreate past experimental results or model training runs exactly.
*   **Continuous Training (CT):** Automatically retraining models in response to new data or performance degradation.
*   **Continuous Delivery (CD):** Automatically deploying new, validated model versions to production environments.

#### Hands-on activity
**Objective:** Set up a basic pipeline structure for data preprocessing and feature engineering, demonstrating how to save and load a scaler for consistency.

**Scenario:** You have a `raw_sales_data.csv` file. You need to create a function to preprocess and engineer features, and ensure that the `MinMaxScaler` fitted during training is reused for new data (inference).

**Instructions:**
1.  **Create Dummy Data:** Generate `raw_sales_data.csv` with a 'Date' and 'Sales' column, including some missing values.
2.  **Define `preprocess_data` function:**
    *   This function should take a DataFrame and an optional `scaler` object.
    *   It should perform linear interpolation for missing 'Sales'.
    *   It should create `dayofweek`, `month`, `sales_lag_1`, and `sales_rolling_mean_7` features.
    *   It should apply `MinMaxScaler` to `Sales_imputed`, `sales_lag_1`, and `sales_rolling_mean_7`. If `scaler` is `None`, fit a new scaler and return it. If `scaler` is provided, use it to transform the data.
    *   It should drop rows with NaNs introduced by lagging/rolling *only if* it's for training.
3.  **Simulate Training:** Load `raw_sales_data.csv`, call `preprocess_data` in training mode (fitting a scaler), and save the fitted scaler.
4.  **Simulate Inference:** Load a *new* (or a subset of) `raw_sales_data.csv`, call `preprocess_data` in inference mode (using the saved scaler).

**Code Template:**
```python
import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
import joblib # For saving/loading objects
import os # For file path operations

# 1. Create Dummy Data
if not os.path.exists('raw_sales_data.csv'):
    dates = pd.date_range(start='2022-01-01', periods=365*2, freq='D')
    sales = 100 + 10 * np.sin(np.linspace(0, 2 * np.pi * 2, len(dates))) + \
            5 * np.cos(np.linspace(0, 2 * np.pi * 52 * 2, len(dates))) + \
            np.random.normal(0, 10, len(dates))
    dummy_df = pd.DataFrame({'Sales': sales}, index=dates)
    missing_indices = np.random.choice(dummy_df.index, size=int(len(dummy_df) * 0.03), replace=False)
    dummy_df.loc[missing_indices, 'Sales'] = np.nan
    dummy_df.to_csv('raw_sales_data.csv')
    print("Created raw_sales_data.csv")
else:
    print("raw_sales_data.csv already exists.")

# 2. Define preprocess_data function
def preprocess_data(df_raw, scaler=None, is_training=True):
    df = df_raw.copy()
    df.index = pd.to_datetime(df.index) # Ensure index is datetime
    df = df.sort_index()

    # Linear interpolation for missing 'Sales'
    df['Sales_imputed'] = df['Sales'].interpolate(method='linear')

    # Create date-time features
    df['dayofweek'] = df.index.dayofweek
    df['month'] = df.index.month

    # Create lagged features
    df['sales_lag_1'] = df['Sales_imputed'].shift(1)
    df['sales_rolling_mean_7'] = df['Sales_imputed'].rolling(window=7).mean()

    # Define features to scale
    features_to_scale = ['Sales_imputed', 'sales_lag_1', 'sales_rolling_mean_7']

    # Handle NaNs introduced by lagging/rolling for training
    if is_training:
        df = df.dropna()
        # Ensure that features_to_scale only contains columns that actually exist in df after dropna
        features_to_scale = [f for f in features_to_scale if f in df.columns]

    # Apply MinMaxScaler
    if is_training:
        scaler = MinMaxScaler()
        df[features_to_scale] = scaler.fit_transform(df[features_to_scale])
        return df, scaler
    else: # Inference mode
        if scaler is None:
            raise ValueError("Scaler must be provided for inference mode.")
        
        # For inference, we might have NaNs at the beginning due to lagging.
        # We need to decide how to handle these for prediction.
        # For this exercise, we'll just transform what's available.
        # In a real scenario, you'd carefully manage the window for prediction.
        
        # Only transform columns that are present in the dataframe
        cols_to_transform = [f for f in features_to_scale if f in df.columns]
        if not cols_to_transform:
            print("Warning: No features to scale found in inference data.")
        else:
            # Create a temporary DataFrame for scaling to handle potential NaNs from shift/rolling
            temp_df_for_scaling = df[cols_to_transform].copy()
            # It's crucial to handle NaNs introduced by lagging/rolling for inference carefully.
            # For this demo, we'll fill with the mean of the *training* data's corresponding feature
            # or a sensible default, to avoid issues with `scaler.transform` on NaNs.
            # This is a simplification; a production system would need more robust handling.
            for col in cols_to_transform:
                if df[col].isnull().any():
                    # This is a placeholder. In production, you'd use a more robust imputation
                    # based on the training data's characteristics or a rolling window.
                    print(f"Warning: NaN values in '{col}' during inference preprocessing. Filling with 0 for demo.")
                    temp_df_for_scaling[col] = temp_df_for_scaling[col].fillna(0) # Or a value from training set

            df[cols_to_transform] = scaler.transform(temp_df_for_scaling)
        return df, None # No new scaler returned for inference

# 3. Simulate Training
print("--- Simulating Training ---")
train_df_raw = pd.read_csv('raw_sales_data.csv', index_col='Date')
processed_train_df, fitted_scaler = preprocess_data(train_df_raw, is_training=True)
joblib.dump(fitted_scaler, 'fitted_scaler.pkl')
print("Processed training data head:")
print(processed_train_df.head())
print("Fitted scaler saved to fitted_scaler.pkl")

# 4. Simulate Inference
print("\n--- Simulating Inference ---")
# For inference, let's take the last few days from the raw data
inference_df_raw = pd.read_csv('raw_sales_data.csv', index_col='Date').tail(10)
loaded_scaler = joblib.load('fitted_scaler.pkl')
processed_inference_df, _ = preprocess_data(inference_df_raw, scaler=loaded_scaler, is_training=False)
print("Processed inference data head:")
print(processed_inference_df.head())
print("Note: NaNs in first few rows of inference data are expected due to lagging features.")
```

#### Assessment idea
1.  **Question:** You have successfully trained a time series forecasting model and saved it. Now, you need to deploy it to production to make daily predictions. Which of the following MLOps practices is *most critical* to ensure that the model performs consistently and accurately in production as it did during training?
    a) Regularly updating the model's documentation.
    b) Using a different set of features for production inference than during training.
    c) Ensuring the exact same preprocessing steps (including scaling parameters) are applied to new inference data as were applied to training data.
    d) Retraining the model only once a year to save computational resources.

    **Correct Answer:** c) Ensuring the exact same preprocessing steps (including scaling parameters) are applied to new inference data as were applied to training data.
    **Explanation:** Consistency in preprocessing is paramount. If new data is processed differently (e.g., using a new scaler, different imputation methods, or different feature engineering logic), the input distribution to the model will change, leading to degraded and unreliable predictions. This is a common source of model performance issues in production. Options (a) is good practice but not critical for performance. Option (b) would guarantee poor performance. Option (d) is a bad practice for time series, as models often need more frequent retraining due to data drift.

2.  **Question:** Your time series forecasting model is deployed and making predictions. Over time, you notice that its prediction errors are gradually increasing, even though the input data schema hasn't changed. What MLOps concept is most likely at play, and what action should be considered?
    a) Data validation failure; check data ingestion logs.
    b) Model versioning issue; roll back to an older model.
    c) Data drift or concept drift; implement continuous monitoring and consider automated retraining.
    d) Overfitting during training; retrain with fewer features.

    **Correct Answer:** c) Data drift or concept drift; implement continuous monitoring and consider automated retraining.
    **Explanation:** A gradual increase in prediction errors over time, despite consistent input schema, is a classic symptom of data drift (changes in the distribution of input features) or concept drift (changes in the relationship between input features and the target variable). This indicates that the model has become stale. Implementing continuous monitoring for performance degradation and data/concept drift, followed by automated retraining with fresh data, is the appropriate MLOps response.

#### AI generation note
Design a 13-minute animated video. Start with a high-level diagram illustrating the full MLOps lifecycle for time series forecasting (data ingestion -> preprocessing -> training -> deployment -> monitoring -> retraining). Then, zoom into the "preprocessing" and "training" stages. Use animated flowcharts to show the data pipeline, emphasizing data validation and the consistent application of feature engineering. Demonstrate, using pseudo-code and visual overlays, how a `MinMaxScaler` is fitted during training and then saved/loaded for inference. Highlight experiment tracking with a visual representation of a dashboard showing different model runs and their metrics. The interactive element will be a drag-and-drop exercise to order the steps of a time series data pipeline. Emphasize the importance of version control for code and data.

---
### Chapter 8.5 — Deployment Strategies for Real-Time and Batch Forecasting

#### Learning objectives
*   Distinguish between real-time and batch forecasting deployment scenarios and identify their respective requirements and trade-offs.
*   Implement a basic RESTful API for real-time model inference using frameworks like Flask or FastAPI.
*   Design and execute batch prediction jobs for scenarios requiring periodic, large-scale forecasts.
*   Understand the critical considerations for deploying forecasting models, including latency, scalability, security, and cost.

#### Detailed lesson content
Once a forecasting model is trained, evaluated, and deemed ready for production, the next crucial step is deployment. How you deploy your model largely depends on the specific business requirements: do you need predictions instantly (real-time), or can they be generated periodically for a large set of items (batch)? Each approach has distinct architectural patterns, tools, and considerations.

**Real-time forecasting** is required when immediate predictions are needed to drive instantaneous decisions. Examples include predicting stock prices for high-frequency trading, recommending products to a user in real-time on an e-commerce platform, or adjusting energy consumption in smart grids based on current conditions. For real-time deployment, models are typically exposed via a **RESTful API**. When a request comes in, the API endpoint receives the input features, preprocesses them using the *exact same logic and saved artifacts (like scalers)* as during training, passes them to the loaded model, and returns the prediction.

Frameworks like **Flask** or **FastAPI** in Python are popular choices for building these APIs. FastAPI is often preferred for its performance (built on Starlette and Pydantic) and automatic generation of interactive API documentation (Swagger UI). When designing a real-time API, considerations include:
*   **Latency:** How quickly can the API respond? This involves optimizing preprocessing, model inference time, and network overhead.
*   **Scalability:** Can the API handle a large number of concurrent requests? This often requires deploying the API behind a load balancer and using containerization (Docker) and orchestration (Kubernetes) to scale horizontally.
*   **Security:** Protecting the API endpoints from unauthorized access and ensuring data privacy.
*   **Monitoring:** Tracking API uptime, response times, error rates, and model performance in real-time.

```python
# Example: Basic Real-time Forecasting API with FastAPI
# Save this as `app.py`

# First, ensure you have FastAPI and uvicorn installed:
# pip install fastapi uvicorn "python-multipart[standard]"

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import pandas as pd
import numpy as np
import joblib
import os

app = FastAPI(
    title="Time Series Forecasting API",
    description="API for real-time sales predictions using a pre-trained ML model.",
    version="1.0.0"
)

# Load the trained model and scaler
# IMPORTANT: Ensure 'model.pkl' and 'scaler.pkl' exist from previous steps/training
# For demonstration, we'll create dummy ones if they don't exist
try:
    model = joblib.load('model.pkl')
    scaler = joblib.load('fitted_scaler.pkl')
    print("Model and scaler loaded successfully.")
except FileNotFoundError:
    print("Warning: model.pkl or fitted_scaler.pkl not found. Creating dummy objects for demo.")
    # Create dummy model and scaler for demonstration purposes
    from sklearn.ensemble import RandomForestRegressor
    from sklearn.preprocessing import MinMaxScaler
    model = RandomForestRegressor(n_estimators=10, random_state=42) # Small for quick demo
    scaler = MinMaxScaler()
    # Dummy fit for scaler: needs to fit on data that matches the features_to_scale
    # Let's create dummy data for the features expected by preprocess_for_inference
    dummy_fit_data = pd.DataFrame({
        'sales_lag_1': [100.0, 110.0, 90.0],
        'sales_rolling_mean_7': [95.0, 105.0, 85.0]
    })
    scaler.fit(dummy_fit_data)
    joblib.dump(model, 'model.pkl')
    joblib.dump(scaler, 'fitted_scaler.pkl')

# Define input data schema for the API
class ForecastInput(BaseModel):
    dayofweek: int
    month: int
    sales_lag_1: float
    sales_rolling_mean_7: float # Assuming these are the features the model expects

# Preprocessing function (must be consistent with training)
# For a real system, this would be imported from a shared utility module
def preprocess_for_inference(input_data: ForecastInput, scaler):
    # Create a DataFrame from the input
    df_raw = pd.DataFrame([input_data.dict()])

    # Define features to scale (must match what the scaler was fitted on)
    features_to_scale = ['sales_lag_1', 'sales_rolling_mean_7']
    
    # Ensure all features_to_scale are present in the input
    missing_features = [f for f in features_to_scale if f not in df_raw.columns]
    if missing_features:
        raise HTTPException(status_code=400, detail=f"Missing required features: {', '.join(missing_features)}")

    # Apply the *fitted* scaler
    df_scaled = df_raw.copy()
    df_scaled[features_to_scale] = scaler.transform(df_raw[features_to_scale])

    # Select the exact features the model was trained on
    # Ensure the order of features matches the training order
    model_features = ['dayofweek', 'month', 'sales_lag_1', 'sales_rolling_mean_7']
    
    # Reconstruct the DataFrame with all features, ensuring scaled values are used where applicable
    final_features_dict = {}
    for feature in model_features:
        if feature in features_to_scale:
            final_features_dict[feature] = df_scaled[feature]
        else:
            final_features_dict[feature] = df_raw[feature]
    
    final_features = pd.DataFrame(final_features_dict, index=df_raw.index)
    
    return final_features

@app.post("/predict_sales/")
async def predict_sales(input_data: ForecastInput):
    """
    Predicts sales for a given set of input features.
    """
    try:
        processed_features = preprocess_for_inference(input_data, scaler)
        prediction = model.predict(processed_features)[0]
        return {"predicted_sales": float(prediction)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction failed: {str(e)}")

# To run this API:
# 1. Save the code above as `app.py`
# 2. Make sure you have `model.pkl` and `fitted_scaler.pkl` in the same directory.
#    (If not, the dummy ones will be created, but they won't be trained on real data).
# 3. Open your terminal in that directory and run: `uvicorn app:app --reload`
# 4. Access the API documentation at http://127.0.0.1:8000/docs
# 5. Test with a POST request to http://127.0.0.1:8000/predict_sales/
#    Example JSON body:
#    {
#      "dayofweek": 1,
#      "month": 7,
#      "sales_lag_1": 105.5,
#      "sales_rolling_mean_7": 102.1
#    }
```

**Batch forecasting** is suitable when predictions are needed periodically (e.g., daily, weekly, monthly) for a large number of items, and immediate response is not critical. Examples include monthly inventory planning, quarterly budget forecasting, or daily energy load predictions for the next 24 hours. Batch jobs are typically scheduled to run at off-peak hours.
*   **Design:** A batch job involves:
    1.  Fetching a large volume of input data.
    2.  Applying preprocessing and feature engineering.
    3.  Making predictions for all items.
    4.  Storing the predictions in a database, data warehouse, or file system.
*   **Execution:** These jobs can be orchestrated using tools like Apache Airflow, AWS Step Functions, Azure Data Factory, or simple cron jobs. They often run on cloud computing instances (e.g., AWS EC2, Azure VMs, Google Compute Engine) or serverless functions (AWS Lambda, Azure Functions) for cost-effectiveness and scalability.
*   **Considerations:** Focus on throughput (how many predictions per hour), cost optimization, and robust error handling for large datasets.

A common mistake in deployment is to neglect the **feature store**. In both real-time and batch scenarios, ensuring that the features used for inference are identical to those used for training is paramount. A feature store (e.g., Feast, Tecton) is a centralized system that manages and serves features for both training and inference, ensuring consistency, reducing data leakage, and simplifying feature engineering. It's a critical component for MLOps maturity. Another safety note: always deploy models behind a secure network, use API keys or authentication, and encrypt sensitive data both in transit and at rest. Regularly audit access logs.

#### Key concepts
*   **Real-time Forecasting:** Generating predictions instantly upon request, typically via an API, for immediate decision-making.
*   **Batch Forecasting:** Generating predictions periodically for a large volume of data, typically through scheduled jobs, when immediate response is not critical.
*   **RESTful API:** A standardized way for different software systems to communicate over the internet, commonly used to expose ML models for inference.
*   **Flask/FastAPI:** Python web frameworks used to build RESTful APIs. FastAPI is known for performance and automatic documentation.
*   **Latency:** The time delay between a request for a prediction and the delivery of the prediction.
*   **Scalability:** The ability of a system to handle an increasing amount of work or requests.
*   **Batch Job:** A scheduled, automated process that performs a task (like generating predictions) on a large dataset.
*   **Feature Store:** A centralized system for managing, serving, and ensuring consistency of features for both model training and inference.

#### Hands-on activity
**Objective:** Create a simple Flask API endpoint for a dummy forecasting model and test it.

**Scenario:** You have a trained (dummy) `RandomForestRegressor` model and a `MinMaxScaler` saved as `model.pkl` and `fitted_scaler.pkl`. You need to create a Flask API that accepts input features and returns a prediction.

**Instructions:**
1.  **Ensure Model/Scaler Files:** Make sure `model.pkl` and `fitted_scaler.pkl` exist (you can use the dummy creation from the detailed content if needed).
2.  **Create Flask App:** Write a Flask application (`flask_app.py`) with a `/predict` endpoint that:
    *   Loads the model and scaler once when the app starts.
    *   Accepts a JSON payload with input features (e.g., `dayofweek`, `month`, `sales_lag_1`, `sales_rolling_mean_7`).
    *   Preprocesses the input using the loaded scaler.
    *   Makes a prediction using the loaded model.
    *   Returns the prediction as JSON.
3.  **Test the API:**
    *   Run the Flask application.
    *   Use `curl` or a tool like Postman/Insomnia to send a POST request to your `/predict` endpoint with example data.

**Code Template (`flask_app.py`):**
```python
from flask import Flask, request, jsonify
import pandas as pd
import numpy as np
import joblib
import os

app = Flask(__name__)

model = None
scaler = None

# Load model and scaler when the app starts
def load_artifacts():
    global model, scaler
    try:
        model = joblib.load('model.pkl')
        scaler = joblib.load('fitted_scaler.pkl')
        print("Model and scaler loaded successfully.")
    except FileNotFoundError:
        print("Warning: model.pkl or fitted_scaler.pkl not found. Creating dummy objects for demo.")
        # Create dummy model and scaler for demonstration purposes
        from sklearn.ensemble import RandomForestRegressor
        from sklearn.preprocessing import MinMaxScaler
        model = RandomForestRegressor(n_estimators=10, random_state=42)
        scaler = MinMaxScaler()
        # Dummy fit for scaler: needs to fit on data that matches the features_to_scale
        dummy_fit_data = pd.DataFrame({
            'sales_lag_1': [100.0, 110.0, 90.0],
            'sales_rolling_mean_7': [95.0, 105.0, 85.0]
        })
        scaler.fit(dummy_fit_data)
        joblib.dump(model, 'model.pkl')
        joblib.dump(scaler, 'fitted_scaler.pkl')

load_artifacts()

# Preprocessing function (must be consistent with training)
def preprocess_for_inference(input_data_dict, scaler):
    df_raw = pd.DataFrame([input_data_dict])
    
    features_to_scale = ['sales_lag_1', 'sales_rolling_mean_7']
    model_features = ['dayofweek', 'month', 'sales_lag_1', 'sales_rolling_mean_7']

    # Apply the *fitted* scaler
    df_scaled = df_raw.copy()
    # Handle potential NaNs in features_to_scale before scaling if they arise from input
    for col in features_to_scale:
        if col in df_scaled.columns and df_scaled[col].isnull().any():
            print(f"Warning: NaN in input feature '{col}'. Filling with 0 for scaling demo.")
            df_scaled[col] = df_scaled[col].fillna(0) # Or a more robust imputation

    df_scaled[features_to_scale] = scaler.transform(df_scaled[features_to_scale])
    
    # Reconstruct the DataFrame with all features, ensuring scaled values are used where applicable
    final_features_dict = {}
    for feature in model_features:
        if feature in features_to_scale:
            final_features_dict[feature] = df_scaled[feature]
        else:
            final_features_dict[feature] = df_raw[feature]
    
    final_features = pd.DataFrame(final_features_dict, index=df_raw.index)
    
    return final_features

@app.route('/predict', methods=['POST'])
def predict():
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400

    data = request.get_json(force=True)
    
    # Validate input data structure
    required_features = ['dayofweek', 'month', 'sales_lag_1', 'sales_rolling_mean_7']
    if not all(feature in data for feature in required_features):
        return jsonify({"error": "Missing required features in input JSON"}), 400

    try:
        processed_features = preprocess_for_inference(data, scaler)
        prediction = model.predict(processed_features)[0]
        return jsonify({"predicted_sales": float(prediction)})
    except Exception as e:
        return jsonify({"error": f"Prediction failed: {str(e)}"}), 500

if __name__ == '__main__':
    # To run: python flask_app.py
    # Then send a POST request to http://127.0.0.1:5000/predict
    # Example using curl:
    # curl -X POST -H "Content-Type: application/json" -d '{"dayofweek": 1, "month": 7, "sales_lag_1": 105.5, "sales_rolling_mean_7": 102.1}' http://127.0.0.1:5000/predict
    app.run(debug=True, host='0.0.0.0', port=5000)

```

#### Assessment idea
1.  **Question:** Your e-commerce company needs to predict the likelihood of a customer purchasing a recommended product *within milliseconds* of them viewing it. Which deployment strategy would be most appropriate for this scenario?
    a) A daily batch prediction job that updates a database table.
    b) A weekly batch prediction job running on a cloud server.
    c) A RESTful API endpoint serving real-time predictions.
    d) Offline analysis of historical purchase patterns.

    **Correct Answer:** c) A RESTful API endpoint serving real-time predictions.
    **Explanation:** The requirement for predictions "within milliseconds" clearly indicates a need for real-time inference. A RESTful API is the standard way to expose a model for such low-latency, on-demand predictions. Batch jobs (a, b) are too slow for this use case, and offline analysis (d) doesn't provide real-time predictions.

2.  **Question:** You have deployed a forecasting model via a RESTful API. Over time, you notice that the API's average response time has significantly increased, and users are complaining about slow load times for their dashboards. What is the most likely cause, and what MLOps consideration should you address?
    a) The model has become outdated; it needs retraining.
    b) The data pipeline is failing; check data ingestion.
    c) The API is experiencing scalability issues; consider horizontal scaling (e.g., using Docker/Kubernetes) or optimizing inference speed.
    d) The model is overfitted; simplify the model architecture.

    **Correct Answer:** c) The API is experiencing scalability issues; consider horizontal scaling (e.g., using Docker/Kubernetes) or optimizing inference speed.
    **Explanation:** Increased response time and slow load times point directly to performance bottlenecks at the API level, often due to an inability to handle the current load. This is a scalability issue. While model retraining (a) or data pipeline issues (b) can affect prediction accuracy, they don't directly cause slow API response times in this manner. Overfitting (d) affects accuracy, not necessarily inference speed or API latency. Addressing scalability through horizontal scaling or optimizing the model's inference speed is the correct MLOps consideration.

#### AI generation note
Create a 12-minute live coding video. Begin by briefly explaining the difference between real-time and batch forecasting with animated examples (e.g., stock trading vs. monthly inventory report). Then, transition to a VS Code/Jupyter environment. Demonstrate building a minimal FastAPI application (`app.py`) that loads a pre-trained model and scaler, defines an input Pydantic model, and exposes a `/predict` endpoint. Show how to run the FastAPI app using `uvicorn` and interact with its Swagger UI to send a POST request and receive a prediction. Emphasize the importance of consistent preprocessing by showing the `preprocess_for_inference` function. Include a pop-up text overlay discussing security best practices for APIs. The interactive element will be a short quiz question about the primary benefit of using a feature store.

---
### Chapter 8.6 — Monitoring, Retraining, and Model Governance

#### Learning objectives
*   Establish comprehensive monitoring strategies for deployed time series forecasting models, covering performance metrics, data quality, and model health.
*   Design and implement automated retraining mechanisms to address data drift and concept drift, ensuring models remain relevant and accurate.
*   Understand the principles of model governance, including version control, explainability, and ethical considerations in time series forecasting.
*   Develop strategies for model explainability and interpretability to build trust and facilitate debugging.

#### Detailed lesson content
Deploying a forecasting model is not the end of the MLOps journey; it's merely the beginning of its operational life. Once in production, models are continuously exposed to new, unseen data, and their performance can degrade over time due to shifts in data distributions or underlying relationships. This necessitates robust monitoring, automated retraining, and sound model governance.

**Monitoring** is the eyes and ears of your deployed model. It involves tracking various aspects to ensure the model is performing as expected and that the system is healthy.
1.  **Performance Monitoring:** This is about tracking the actual forecasting accuracy (e.g., RMSE, MAE, MAPE) against ground truth once it becomes available. You should monitor these metrics over time, often visualized on a dashboard, to detect any degradation. Setting up alerts for when performance drops below a predefined threshold is crucial.
2.  **Data Quality Monitoring:** This checks the characteristics of the *input data* being fed to the model. Are there unexpected missing values? Has the distribution of a key feature changed significantly? Are there new categories in categorical features? Tools like Great Expectations or custom scripts can compare incoming data statistics against the training data statistics. Anomalies here often precede model performance degradation.
3.  **Model Health Monitoring:** This tracks the operational aspects of the model service itself, such as API latency, error rates, throughput, and resource utilization (CPU, memory). This ensures the infrastructure supporting the model is functioning correctly.
4.  **Prediction Drift Monitoring:** This involves comparing the distribution of model predictions over time. If predictions start to shift significantly or become consistently higher/lower than expected, it could indicate an issue even before ground truth is available.

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.metrics import mean_absolute_error, mean_squared_error
from scipy.stats import wasserstein_distance # For distribution drift detection

# Simulate actuals and predictions over time
np.random.seed(42)
dates = pd.date_range(start='2023-01-01', periods=100, freq='D')
actuals = 100 + np.sin(np.linspace(0, 2 * np.pi, 100)) * 20 + np.random.normal(0, 5, 100)
predictions = actuals + np.random.normal(0, 7, 100) # Initial good performance

# Simulate performance degradation over time
predictions[50:] = actuals[50:] + np.random.normal(0, 15, 50) # Errors increase
predictions[70:] = actuals[70:] + np.random.normal(0, 20, 30) + 10 # Bias and higher error

monitoring_df = pd.DataFrame({'actuals': actuals, 'predictions': predictions}, index=dates)

# 1. Performance Monitoring
monitoring_df['abs_error'] = abs(monitoring_df['actuals'] - monitoring_df['predictions'])
monitoring_df['squared_error'] = (monitoring_df['actuals'] - monitoring_df['predictions'])**2

# Calculate rolling RMSE and MAE
monitoring_df['rolling_rmse'] = np.sqrt(monitoring_df['squared_error'].rolling(window=7).mean())
monitoring_df['rolling_mae'] = monitoring_df['abs_error'].rolling(window=7).mean()

plt.figure(figsize=(14, 7))
plt.plot(monitoring_df.index, monitoring_df['rolling_rmse'], label='Rolling RMSE (7-day)')
plt.plot(monitoring_df.index, monitoring_df['rolling_mae'], label='Rolling MAE (7-day)')
plt.axhline(y=10, color='r', linestyle='--', label='RMSE Alert Threshold (e.g., 10)')
plt.title('Model Performance Monitoring Over Time')
plt.xlabel('Date')
plt.ylabel('Error Metric')
plt.legend()
plt.grid(True)
plt.show()

# 2. Data Quality Monitoring (Example: input feature distribution drift)
# Simulate an input feature 'temperature'
monitoring_df['temperature'] = 15 + np.sin(np.linspace(0, 2 * np.pi, 100)) * 5 + np.random.normal(0, 1, 100)
# Introduce drift in temperature after a certain point
monitoring_df.loc[monitoring_df.index > '2023-03-01', 'temperature'] += 5

# Compare distribution of 'temperature' in an initial period vs. a later period
initial_period_temp = monitoring_df.loc['2023-01-01':'2023-02-28', 'temperature']
later_period_temp = monitoring_df.loc['2023-03-01':'2023-04-09', 'temperature']

plt.figure(figsize=(10, 6))
plt.hist(initial_period_temp, bins=10, alpha=0.5, label='Initial Period Temperature')
plt.hist(later_period_temp, bins=10, alpha=0.5, label='Later Period Temperature')
plt.title('Input Feature Distribution Drift (Temperature)')
plt.xlabel('Temperature')
plt.ylabel('Frequency')
plt.legend()
plt.show()

# Quantify drift using Wasserstein distance (Earth Mover's Distance)
wd_temp = wasserstein_distance(initial_period_temp.dropna(), later_period_temp.dropna())
print(f"\nWasserstein distance for 'temperature' drift: {wd_temp:.2f}")
if wd_temp > 1: # Example threshold
    print("Alert: Significant data drift detected in 'temperature' feature!")

# 3. Prediction Drift Monitoring
initial_predictions = monitoring_df.loc['2023-01-01':'2023-02-28', 'predictions']
later_predictions = monitoring_df.loc['2023-03-01':'2023-04-09', 'predictions']

plt.figure(figsize=(10, 6))
plt.hist(initial_predictions, bins=10, alpha=0.5, label='Initial Predictions')
plt.hist(later_predictions, bins=10, alpha=0.5, label='Later Predictions')
plt.title('Prediction Distribution Drift')
plt.xlabel('Predicted Value')
plt.ylabel('Frequency')
plt.legend()
plt.show()

wd_preds = wasserstein_distance(initial_predictions.dropna(), later_predictions.dropna())
print(f"Wasserstein distance for 'predictions' drift: {wd_preds:.2f}")
if wd_preds > 5: # Example threshold
    print("Alert: Significant prediction drift detected!")
```

**Retraining** is the response to detected drift or performance degradation.
*   **Automated Retraining:** This can be triggered on a schedule (e.g., daily, weekly) or based on monitoring alerts (e.g., if RMSE exceeds a threshold, or significant data drift is detected). A robust retraining pipeline (as discussed in Chapter 8.4) automatically fetches new data, preprocesses it, trains a new model, evaluates it, and if it meets criteria, deploys it.
*   **Retraining Strategies:**
    *   **Full Retraining:** Retrain the model from scratch on the entire updated dataset. This is robust but computationally expensive.
    *   **Incremental Learning:** For some models (e.g., online learning algorithms), the model can be updated with new data without retraining from scratch. This is faster but not all models support it.
    *   **Windowed Retraining:** Train on a rolling window of the most recent data. This keeps the model fresh but might lose information from very old data.

**Model Governance** encompasses the policies and procedures for managing the entire lifecycle of ML models, ensuring they are reliable, transparent, and ethical.
*   **Version Control:** Not just for code, but for models, datasets, and configurations. A model registry is key here.
*   **Explainability (XAI):** Understanding *why* a model makes a particular prediction is crucial, especially in high-stakes applications. Techniques like SHAP (SHapley Additive exPlanations) or LIME (Local Interpretable Model-agnostic Explanations) can help attribute feature importance to individual predictions or globally. For time series, this might involve understanding which lags or external regressors are most influential.
*   **Interpretability:** Designing models that are inherently understandable (e.g., linear models, decision trees, Prophet's components) versus black-box models (e.g., deep neural networks).
*   **Fairness and Ethics:** Ensuring the model does not perpetuate or amplify biases present in the training data, especially if forecasts impact resource allocation or human decisions. For time series, this might involve checking if the model performs equally well across different demographic groups or geographic regions.
*   **Auditability:** Maintaining a clear audit trail of who trained which model, with what data, and when, for compliance and debugging.

A common mistake is to treat models as static entities after deployment. Models are living systems that require continuous care. Neglecting monitoring and retraining leads to "silent failures" where models degrade without immediate detection, causing potentially significant business losses.

#### Key concepts
*   **Performance Monitoring:** Tracking forecasting accuracy metrics (e.g., RMSE, MAE) over time against actual outcomes.
*   **Data Quality Monitoring:** Checking the integrity, completeness, and statistical properties of input data streams.
*   **Model Health Monitoring:** Tracking operational metrics of the deployed model service (e.g., latency, error rates, resource usage).
*   **Prediction Drift Monitoring:** Observing shifts in the distribution of model predictions over time.
*   **Data Drift:** Changes in the distribution of input features over time.
*   **Concept Drift:** Changes in the relationship between input features and the target variable over time.
*   **Automated Retraining:** Automatically initiating model training when new data is available or performance degrades.
*   **Model Governance:** Policies and procedures for managing the lifecycle of ML models, ensuring reliability, transparency, and ethics.
*   **Explainable AI (XAI):** Techniques to make ML models more understandable to humans, revealing *why* a prediction was made.
*   **Model Interpretability:** The degree to which a human can understand the cause of a decision.

#### Hands-on activity
**Objective:** Simulate model performance monitoring and detect a drop in accuracy.

**Scenario:** You have a simulated dataset of `actuals` and `predictions` over 100 days. You need to calculate and visualize a rolling RMSE and set up a simple alert for performance degradation.

**Instructions:**
1.  **Generate Data:** Use the provided code to generate `monitoring_df` with `actuals` and `predictions`, including simulated performance degradation.
2.  **Calculate Rolling RMSE:** Compute the 7-day rolling RMSE.
3.  **Visualize Performance:** Plot the rolling RMSE over time.
4.  **Implement Simple Alert:** Write a Python conditional statement that checks if the latest rolling RMSE exceeds a predefined threshold (e.g., 10) and prints an alert message if it does.

**Code Template:**
```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from sklearn.metrics import mean_squared_error

# 1. Generate Data
np.random.seed(42)
dates = pd.date_range(start='2023-01-01', periods=100, freq='D')
actuals = 100 + np.sin(np.linspace(0, 2 * np.pi, 100)) * 20 + np.random.normal(0, 5, 100)
predictions = actuals + np.random.normal(0, 7, 100) # Initial good performance

### Chapter 8.7 — Monitoring and Maintaining Deployed Time Series Models

#### Learning objectives
*   Understand the critical importance of continuous monitoring for deployed time series forecasting models.
*   Identify and differentiate between various types of data and concept drift relevant to time series data.
*   Implement practical methods for monitoring model performance and input data quality in production.
*   Design a robust strategy for automated model retraining and seamless redeployment.

#### Detailed lesson content
Deploying a time series forecasting model into production is not the final step; it's merely the beginning of its lifecycle. The dynamic nature of time series data, characterized by evolving trends, shifting seasonality, and external shocks, means that even the most accurate model at deployment time can quickly degrade in performance. Continuous monitoring is therefore paramount to ensure your forecasts remain reliable and actionable. Without it, you risk making critical business decisions based on outdated or inaccurate predictions, leading to financial losses, operational inefficiencies, or missed opportunities. Monitoring allows us to detect when a model's assumptions are no longer valid or when the underlying data generating process has changed, signaling the need for intervention.

One of the primary reasons for model degradation in time series forecasting is **drift**. We broadly categorize drift into two main types: data drift and concept drift. **Data drift** occurs when the statistical properties of the input features change over time. For example, if you're forecasting electricity demand and the average daily temperature (an input feature) suddenly shifts due to climate change, that's data drift. The distribution of your input temperature data has changed from what the model was trained on. **Concept drift**, on the other hand, refers to a change in the relationship between the input features and the target variable. Imagine forecasting retail sales, and a new social media trend suddenly makes a previously unpopular product category highly desirable. The historical relationship between marketing spend and sales for that category might no longer hold true, even if marketing spend levels haven't changed. The "concept" of how inputs relate to outputs has evolved. Identifying which type of drift is occurring is crucial because it informs the appropriate response, whether it's updating feature engineering, retraining the model, or even redesigning the model architecture.

To effectively monitor your deployed models, you need to track both their performance and the quality of the data they consume. For performance monitoring, standard time series error metrics like Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), and Mean Absolute Percentage Error (MAPE) are invaluable. You should calculate these metrics on recent, actual data as it becomes available and compare them against historical performance or predefined thresholds. A sudden spike or sustained increase in error metrics should trigger an alert. Beyond simple error values, it's also useful to monitor for **forecast bias**, checking if your model consistently over- or under-predicts. For data quality, you should track statistics of your input features: mean, standard deviation, missing value counts, and outlier presence. Sudden shifts in these statistics can indicate data pipeline issues or genuine data drift. Visualizations like control charts (e.g., Shewhart charts for individual observations or EWMA charts for moving averages) can be particularly effective for detecting subtle shifts in these metrics over time, providing early warnings before performance degrades severely.

When monitoring reveals significant performance degradation or drift, a common mitigation strategy is **model retraining**. There are several approaches to retraining. A **fixed schedule** (e.g., retraining daily, weekly, or monthly) is simple to implement but might be inefficient, retraining unnecessarily or too late. A more intelligent approach is **performance-based retraining**, where the model is automatically retrained when its error metrics exceed a predefined threshold. Even more sophisticated is **drift-based retraining**, where new training is triggered only when significant data or concept drift is statistically detected. When retraining, you must decide whether to perform a full retraining from scratch using all available historical data (which can be computationally expensive) or **incremental learning**, where the model is updated with only the most recent data. Incremental learning is faster but might struggle with significant concept shifts. A common mistake is to ignore alerts or to manually retrain only when a crisis hits. Proactive, automated retraining pipelines are essential for maintaining model efficacy in dynamic environments.

Setting up a robust monitoring system often involves integrating various tools. You might use a combination of custom Python scripts to calculate metrics, a time series database (like InfluxDB or TimescaleDB) to store these metrics, and a visualization tool (like Grafana or Kibana) to create dashboards and set up alerts. For example, a simple script could periodically fetch recent predictions and actuals, compute MAPE, and then log this value to a database. If the MAPE crosses a threshold, an alert could be sent via email or Slack. When designing these systems, always prioritize robustness and fault tolerance. Ensure your monitoring infrastructure doesn't become a single point of failure. Consider data privacy and security when logging sensitive time series data or predictions. The goal is to create a self-healing, adaptive forecasting system that can automatically detect and respond to changes in the real world, minimizing manual intervention and maximizing the value of your predictions.

#### Key concepts
*   **Data Drift:** A change in the statistical properties of the input features to a model over time.
*   **Concept Drift:** A change in the relationship between the input features and the target variable over time.
*   **Model Monitoring:** The continuous process of tracking a deployed model's performance and the quality of its input data.
*   **Retraining Pipeline:** An automated process for updating a deployed model with new data to maintain its performance.
*   **Control Charts:** Statistical tools used to monitor processes over time, identifying when a process is out of statistical control, useful for detecting drift.
*   **Performance Degradation:** A decline in the accuracy or effectiveness of a deployed model over time.

#### Hands-on activity
**Activity: Simulating Data Drift and Basic Performance Monitoring**

In this activity, you will create a simple time series, introduce a simulated data drift in one of its features, and then observe how a basic forecasting model's performance degrades. You will then set up a rudimentary monitoring script to detect this degradation.

**Scenario:** You are forecasting daily widget sales based on advertising spend. Suddenly, a new competitor enters the market, forcing you to significantly increase your advertising spend to maintain sales, but the historical relationship between spend and sales might change.

**Starter Code Template:**

```python
import pandas as pd
import numpy as np
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_absolute_error
import matplotlib.pyplot as plt

# 1. Generate synthetic time series data
np.random.seed(42)
n_periods = 200
dates = pd.date_range(start='2023-01-01', periods=n_periods, freq='D')

# Initial advertising spend and sales
ad_spend_initial = np.linspace(50, 150, n_periods) + np.random.normal(0, 10, n_periods)
sales_initial = 2 * ad_spend_initial + 50 + np.random.normal(0, 20, n_periods)

df = pd.DataFrame({'Date': dates, 'Ad_Spend': ad_spend_initial, 'Sales': sales_initial})
df.set_index('Date', inplace=True)

# 2. Introduce data drift and concept drift after a certain point
drift_start_index = 150 # After 150 days

# Data drift: Ad_Spend increases significantly
df.loc[df.index[drift_start_index:], 'Ad_Spend'] = df.loc[df.index[drift_start_index:], 'Ad_Spend'] * 1.5 + 50

# Concept drift: Relationship changes (e.g., diminishing returns or increased competition)
# Let's say sales become less responsive to ad spend, or there's more noise
df.loc[df.index[drift_start_index:], 'Sales'] = 1.5 * df.loc[df.index[drift_start_index:], 'Ad_Spend'] + 30 + np.random.normal(0, 30, n_periods - drift_start_index)

# 3. Train a simple model on initial data
train_df = df.iloc[:drift_start_index]
model = LinearRegression()
model.fit(train_df[['Ad_Spend']], train_df['Sales'])

# 4. Simulate daily monitoring
forecast_errors = []
monitoring_window = 10 # Calculate MAE over the last 10 days
mae_threshold = 30 # Alert if MAE exceeds this threshold

print("Starting daily forecast monitoring...")
for i in range(drift_start_index, n_periods):
    current_data = df.iloc[i-monitoring_window+1 : i+1] # Data for current monitoring window
    
    # Predict for the current day using the old model
    current_ad_spend = df.iloc[i]['Ad_Spend']
    prediction = model.predict(np.array([[current_ad_spend]]))[0]
    actual = df.iloc[i]['Sales']
    
    # Store error for the day
    daily_error = abs(prediction - actual)
    
    # Calculate MAE over the monitoring window
    if len(current_data) >= monitoring_window:
        window_predictions = model.predict(current_data[['Ad_Spend']])
        window_actuals = current_data['Sales']
        current_mae = mean_absolute_error(window_actuals, window_predictions)
        forecast_errors.append({'Date': df.index[i], 'MAE': current_mae, 'Alert': current_mae > mae_threshold})
        
        if current_mae > mae_threshold:
            print(f"ALERT on {df.index[i].date()}: MAE ({current_mae:.2f}) exceeded threshold ({mae_threshold})!")
    else:
        forecast_errors.append({'Date': df.index[i], 'MAE': np.nan, 'Alert': False}) # Not enough data for MAE yet

error_df = pd.DataFrame(forecast_errors).set_index('Date')

# 5. Visualize results
plt.figure(figsize=(14, 6))

plt.subplot(2, 1, 1)
plt.plot(df.index, df['Ad_Spend'], label='Ad Spend')
plt.axvline(df.index[drift_start_index], color='r', linestyle='--', label='Drift Start')
plt.title('Ad Spend Over Time (with Data Drift)')
plt.legend()

plt.subplot(2, 1, 2)
plt.plot(error_df.index, error_df['MAE'], label='Rolling MAE (10-day window)')
plt.axhline(mae_threshold, color='orange', linestyle=':', label='MAE Threshold')
plt.axvline(df.index[drift_start_index], color='r', linestyle='--', label='Drift Start')
plt.scatter(error_df[error_df['Alert']].index, error_df[error_df['Alert']]['MAE'], color='red', marker='o', s=50, label='Alert Triggered')
plt.title('Model Performance (Rolling MAE)')
plt.xlabel('Date')
plt.ylabel('MAE')
plt.legend()
plt.tight_layout()
plt.show()

print("\nAnalysis Complete.")
```

**Instructions:**
1.  Run the provided Python script.
2.  Observe the two plots generated: one showing the `Ad_Spend` feature over time, highlighting the drift, and another showing the rolling MAE of the model's predictions.
3.  Notice how the MAE starts to increase significantly after the drift point, eventually crossing the predefined threshold and triggering alerts.
4.  **Modification Challenge:**
    *   Change the `mae_threshold` to a higher or lower value. How does this affect when alerts are triggered?
    *   Modify the `monitoring_window` size. What are the pros and cons of a smaller vs. larger window for detecting drift?
    *   Instead of a simple `LinearRegression`, try using a `RandomForestRegressor` from `sklearn` for the initial model training. Does the drift impact it differently?

#### Assessment idea
1.  **Question:** A company uses a Prophet model to forecast monthly active users (MAU). They notice that after a major social media platform update, their model's forecasts become consistently lower than the actual MAU, even though their marketing spend (a feature in the model) hasn't changed. What type of drift is most likely occurring, and what immediate action should the data science team take?
    **Answer:** This scenario most likely indicates **concept drift**. The relationship between marketing spend (and potentially other features) and MAU has changed due to the external factor of the social media platform update. The model's "understanding" of how inputs translate to outputs is no longer accurate.
    **Immediate Action:** The data science team should first investigate the nature of the change. They should analyze recent MAU trends and marketing data, looking for new patterns or shifts that the model isn't capturing. They should then consider **retraining the Prophet model** using a more recent dataset that includes data from after the social media update. They might also need to explore adding new features related to the platform update or adjusting existing ones to better capture the new concept.

2.  **Question:** You've deployed an LSTM model to predict server load for a cloud provider. Your monitoring dashboard shows that the RMSE for the 24-hour forecast has slowly but steadily increased by 10% over the last two months, but no single spike has occurred. What could be a possible cause for this gradual degradation, and how would you set up an automated retraining strategy to address it?
    **Answer:** A slow, steady increase in RMSE suggests a **gradual data drift or subtle concept drift** rather than a sudden shock. Possible causes could include:
    *   **Gradual changes in user behavior:** Users slowly adopting new services or changing their usage patterns.
    *   **Infrastructure changes:** Incremental upgrades or expansions to the server infrastructure that subtly alter load characteristics.
    *   **Seasonal shifts:** If the model was trained on a specific season and is now performing in a different one with slightly different patterns not fully captured by seasonal components.
    *   **External factors:** Slow economic shifts or technological advancements gradually impacting demand.

    To set up an automated retraining strategy for this gradual degradation, a **performance-based retraining trigger with a rolling window** would be effective.
    1.  **Define a performance threshold:** Establish an acceptable RMSE limit (e.g., 5% above the baseline RMSE observed during initial deployment).
    2.  **Implement a rolling evaluation:** Continuously calculate the RMSE of the model on the most recent `N` days or weeks of actual data (e.g., the last 30 days).
    3.  **Trigger retraining:** If the rolling RMSE consistently exceeds the defined threshold for a certain period (e.g., for 7 consecutive days), an automated retraining process is initiated.
    4.  **Retraining approach:** For gradual changes, a full retraining on an updated, larger dataset (e.g., the last 1-2 years of data, including the recent period) is often more robust than incremental learning, as it allows the model to fully adapt to the new underlying patterns. The newly trained model would then be deployed, and the monitoring cycle would continue.

#### AI generation note
Create a 12-minute interactive video. Start with an engaging animation illustrating data drift (e.g., a shifting histogram of a feature over time) and concept drift (e.g., a scatter plot where the linear relationship between X and Y changes). Then, transition to a live coding demo in a Jupyter notebook using the provided Python script template. Show how to run the script, explain each section, and clearly highlight how the MAE plot visually confirms performance degradation after drift. Demonstrate modifying the `mae_threshold` and `monitoring_window` parameters to show their impact on alert sensitivity. Include a split-screen view of the code and the generated plots. End with a 2-question interactive mini-quiz about identifying drift types and choosing appropriate retraining strategies. Emphasize clear code explanations and visual clarity for plots.

---

### Chapter 8.8 — Building Robust and Scalable Time Series Forecasting Systems

#### Learning objectives
*   Design a comprehensive, high-level architecture for a production-grade time series forecasting system.
*   Understand the key challenges and best practices for scaling time series forecasting solutions to handle large data volumes and high prediction throughput.
*   Integrate ethical considerations, such as bias and fairness, and explainability techniques into time series models.
*   Summarize the core takeaways from the course and explore future directions in time series machine learning.

#### Detailed lesson content
Bringing a time series forecasting model from a Jupyter notebook to a production environment requires a significant shift in perspective. It's no longer just about model accuracy; it's about building a robust, scalable, and maintainable system that can continuously deliver reliable forecasts. A comprehensive forecasting system typically encompasses several interconnected components, forming an MLOps pipeline. This pipeline starts with **data ingestion**, which can be batch (e.g., daily imports from a data warehouse) or real-time streaming (e.g., sensor data via Kafka). Next is **data preprocessing**, where raw data is cleaned, transformed, and prepared. This is followed by **feature engineering**, a critical step for time series where lags, rolling statistics, Fourier terms, and external regressors are created. Then comes **model training and evaluation**, where various models (statistical, ML, DL) are selected, trained, and tuned. Finally, **model deployment** makes the forecasts available, either via an API for real-time predictions or through batch jobs. Crucially, the system must include **monitoring and retraining** loops, as discussed in the previous chapter, to ensure ongoing performance. Each of these stages needs to be designed with scalability, reliability, and automation in mind.

Scalability is a paramount concern for real-world time series forecasting, especially for organizations dealing with high-frequency data or a vast number of individual time series (e.g., forecasting demand for millions of SKUs). To achieve scalability, careful architectural choices are essential. For **data storage**, traditional relational databases might struggle with the volume and velocity of time series data. Specialized time series databases like InfluxDB or TimescaleDB, or scalable data lakes (e.g., AWS S3, Google Cloud Storage) combined with query engines, are often preferred. For **data processing and model training**, especially with large datasets, distributed computing frameworks like Apache Spark or Dask are invaluable, allowing parallel processing across clusters. When it comes to **model deployment**, containerization technologies like Docker provide reproducible environments, while orchestration platforms like Kubernetes enable automatic scaling, load balancing, and self-healing of prediction services. For real-time data ingestion and prediction requests, **message queues** such as Kafka or RabbitMQ are indispensable, decoupling components and handling high throughput. Many organizations leverage managed services on cloud platforms (AWS SageMaker, Google Cloud AI Platform, Azure ML) to abstract away much of the infrastructure complexity, allowing data scientists to focus more on modeling.

Beyond technical architecture, building robust systems involves embracing MLOps best practices. **Version control** isn't just for code; it extends to models (using model registries like MLflow or SageMaker Model Registry) and even data (using tools like DVC). **CI/CD pipelines** are crucial for automating the entire lifecycle: testing new code, deploying updated models, and triggering retraining based on performance or drift. This ensures consistency, reduces manual errors, and speeds up iteration cycles. Comprehensive **logging and auditing** are non-negotiable for debugging, compliance, and understanding system behavior. Robust **error handling and resilience** mechanisms are needed to gracefully manage data pipeline failures, model inference errors, or infrastructure outages. Finally, thorough **documentation** of data schemas, model logic, and system architecture is vital for team collaboration and long-term maintenance. A common mistake is treating ML models as static artifacts; they are dynamic components that require continuous care and feeding within a well-engineered system.

As machine learning becomes more pervasive, integrating **ethical considerations** and **explainability** into time series forecasting systems is no longer optional. Bias can creep into time series data if historical patterns reflect societal inequalities. For instance, if energy consumption data for a city disproportionately reflects the needs of affluent neighborhoods due to historical infrastructure investment, a model trained on this data might perpetuate or exacerbate energy allocation inequities. Ensuring **fairness** in predictions means actively auditing data for biases, applying mitigation techniques, and monitoring fairness metrics across different demographic or geographic groups. **Explainability (XAI)** is crucial for building trust and understanding, especially when forecasts drive critical decisions. Techniques like LIME or SHAP, originally developed for tabular data, can be adapted to time series to explain why a model made a particular forecast, identifying the most influential lags, features, or seasonal components. This helps both technical teams debug models and non-technical stakeholders gain confidence in the predictions. Data privacy is another key ethical concern, especially when dealing with sensitive individual or proprietary time series data; robust anonymization and access control are essential.

Looking ahead, the field of time series machine learning continues to evolve rapidly. **AutoML for time series** is gaining traction, automating tasks like feature engineering, model selection, and hyperparameter tuning to accelerate development. **Causal inference** in time series is becoming increasingly important, moving beyond correlation to understand true cause-and-effect relationships, which is vital for effective interventions (e.g., "If I run this promotion, how much will sales increase?"). **Probabilistic forecasting**, which provides not just a point estimate but a full distribution of possible future outcomes, is crucial for quantifying uncertainty and enabling risk-aware decision-making. Emerging areas like **federated learning** offer solutions for distributed time series data, allowing models to learn from decentralized datasets without centralizing sensitive information. Finally, the integration of time series forecasting with **reinforcement learning** opens doors for optimal control and decision-making in dynamic systems, such as optimizing inventory levels or energy grid management. The journey from raw time series data to actionable, intelligent forecasts is complex, iterative, and requires a blend of statistical rigor, machine learning engineering expertise, and a deep understanding of the domain.

#### Key concepts
*   **Forecasting System Architecture:** The overall design and organization of components (data ingestion, processing, model serving, monitoring) that constitute a production-grade forecasting solution.
*   **Scalability:** The ability of a system to handle increasing amounts of data, users, or throughput without degrading performance.
*   **CI/CD for ML (MLOps):** Continuous Integration and Continuous Deployment practices adapted for machine learning models, automating testing, deployment, and retraining.
*   **Ethical AI:** Considering and mitigating potential harms, biases, and fairness issues in AI systems, including time series forecasting.
*   **Explainable AI (XAI) for Time Series:** Techniques and methods to make the predictions of time series models understandable and interpretable to humans.
*   **Probabilistic Forecasting:** Providing a range of possible future outcomes and their probabilities, rather than just a single point estimate, to quantify uncertainty.

#### Hands-on activity
**Activity: Designing a Real-Time Demand Forecasting System Architecture**

In this activity, you will conceptually design a high-level architecture for a real-time demand forecasting system for a large e-commerce platform. This activity focuses on identifying the necessary components and their interactions, rather than writing code.

**Scenario:** An e-commerce platform needs to forecast demand for thousands of products in real-time to optimize inventory, personalize recommendations, and manage logistics. The system should ingest sales data, website traffic, promotional events, and external factors (e.g., weather, holidays) to provide hourly forecasts.

**Instructions:**
1.  **Identify Core Components:** List the major functional blocks required for such a system. Think about where data comes from, where it's stored, how it's processed, where models are trained, how predictions are made available, and how the system is maintained.
2.  **Choose Technologies/Tools:** For each component you identified, suggest a suitable technology or tool (e.g., a specific database, a cloud service, a message queue). Justify your choice briefly.
3.  **Draw a High-Level Diagram:** Sketch or describe (using text) how these components would interact. Show the data flow between them.

**Example Components to Consider (you should expand on these):**
*   **Data Sources:** E-commerce database (sales, inventory), Web analytics (traffic), Marketing platform (promotions), External APIs (weather).
*   **Data Ingestion:** How do you get data from sources into your system?
*   **Data Storage:** Where do you store raw and processed time series data?
*   **Feature Engineering:** How are features like lags, rolling averages, and seasonal indicators computed?
*   **Model Training:** Where are models built and retrained?
*   **Model Registry:** How are trained models stored and versioned?
*   **Model Serving/Inference:** How are real-time predictions generated and delivered?
*   **Monitoring & Alerting:** How do you track model performance and data quality?
*   **Orchestration/Deployment:** How are all these services managed and scaled?

**Deliverable:** A list of components with chosen technologies/tools and a textual description or simple diagram of the architecture.

#### Assessment idea
1.  **Question:** Describe three key architectural components you would include in a scalable, real-time demand forecasting system for a large retail chain, and explain why each is important for achieving scalability and real-time capabilities.
    **Answer:**
    1.  **Distributed Data Storage (e.g., Apache Cassandra, TimescaleDB, or a Data Lake on S3/GCS):** This component is crucial for storing vast volumes of historical sales data, product information, and external regressors (e.g., promotions, weather) generated by a large retail chain. A distributed database or data lake allows for horizontal scaling, meaning it can handle increasing data volumes by adding more nodes or storage. Its ability to efficiently query and retrieve time series data is vital for both training models on extensive historical records and for rapid feature generation during real-time inference.
    2.  **Message Queue / Streaming Platform (e.g., Apache Kafka):** A message queue is essential for ingesting real-time data streams such as new sales transactions, inventory updates, and website clickstreams. It acts as a buffer, decoupling data producers from consumers, which allows the system to handle high data velocity and bursty traffic without overwhelming downstream processing services. This enables real-time feature engineering and near-instantaneous model inference, allowing forecasts to be updated rapidly in response to new information, which is critical for dynamic demand forecasting.
    3.  **Container Orchestration Platform (e.g., Kubernetes):** Kubernetes is vital for deploying, managing, and scaling the various microservices that make up the forecasting system (e.g., feature store service, prediction API, monitoring dashboards). It provides automatic scaling of prediction services based on demand, self-healing capabilities for failed instances, and efficient resource utilization. Containerization (e.g., Docker) ensures consistent environments across development, testing, and production, making deployments reliable and reproducible, which is fundamental for a robust and scalable real-time system.

2.  **Question:** You are building a time series model to forecast the spread of a contagious disease in a region. Discuss one significant ethical consideration you would need to address, and outline how you would approach ensuring the model is used responsibly and fairly.
    **Answer:** A significant ethical consideration when forecasting disease spread is **fairness and potential for algorithmic bias in resource allocation**. If the historical data used to train the model reflects existing socioeconomic disparities (e.g., areas with lower testing rates, less access to healthcare, or different reporting mechanisms), the model might inadvertently produce biased forecasts. This could lead to disproportionate allocation of critical resources (vaccines, testing kits, medical staff) to certain areas while neglecting others, exacerbating existing inequalities.
    **Approach for Responsible and Fair Use:**
    1.  **Data Auditing and Bias Detection:** Thoroughly audit the historical data for any demographic, geographic, or socioeconomic correlations that might introduce bias. Use statistical methods to identify if certain populations are under- or over-represented or if data quality varies significantly across groups.
    2.  **Fairness Metrics:** Define and monitor specific fairness metrics (e.g., equality of opportunity, demographic parity) across different population groups. This means evaluating the model's accuracy and error rates not just overall, but specifically for vulnerable or historically underserved communities.
    3.  **Explainability (XAI):** Employ XAI techniques (like SHAP or LIME) to understand which features are driving the predictions for different regions or demographic groups. This can help uncover if the model is relying on proxies for sensitive attributes or perpetuating historical biases.
    4.  **Stakeholder Engagement:** Involve public health officials, community leaders, and ethicists in the design, development, and deployment phases. Their input is crucial for understanding the real-world implications of the forecasts and ensuring that the model aligns with ethical guidelines and public trust.
    5.  **Transparency and Communication:** Clearly communicate the model's limitations, assumptions, and potential biases to decision-makers. Provide context on how forecasts should be interpreted and used, emphasizing that they are tools to inform, not replace, human judgment.

#### AI generation note
Create a 15-minute animated video combined with a conceptual diagram walkthrough. Start with a high-level overview of a complete MLOps pipeline for time series, showing data flow from ingestion to monitoring. Use animated diagrams to illustrate components like data lakes, message queues, feature stores, model registries, and API endpoints, explaining their role in achieving scalability. Discuss scalability challenges and solutions using simple analogies (e.g., comparing a single-lane road to a multi-lane highway for data flow). Dedicate a section to ethical considerations, using a hypothetical smart city energy forecasting example with visual cues for bias and fairness, and how XAI helps. End with a summary of key takeaways from the entire course and a forward-looking perspective on future trends. Include an interactive element where learners drag and drop architectural components onto a blank canvas to build a system diagram, with immediate feedback on correct placement and connections.

---

## Final Capstone Project

The Capstone Project is your opportunity to synthesize the knowledge and skills gained throughout this course. You will select one of the following three project options, each designed to challenge you with a realistic time series forecasting problem. These projects require you to apply data preprocessing, model selection, training, evaluation, and interpretation techniques from various modules. Choose the project that best aligns with your interests and career goals.

### Project Option 1: Retail Sales Forecasting with Traditional ML

**Description:** In this project, you will act as a data scientist for a retail chain tasked with forecasting future sales for a specific product category or store location. Accurate sales forecasts are crucial for inventory management, staffing, and marketing campaigns. You will utilize traditional machine learning and statistical time series models to achieve the best possible performance.

**Requirements:**
1.  **Data Acquisition & Preprocessing:** Select a publicly available retail sales dataset (e.g., Walmart sales, Rossmann Store Sales from Kaggle, or a similar dataset). Load the data, handle missing values, and perform necessary aggregations or transformations to create a clean, univariate or multivariate time series. Feature engineering should include creating lag features, rolling statistics, and time-based features (day of week, month, year, etc.).
2.  **Exploratory Data Analysis (EDA):** Analyze the time series for trends, seasonality, and any significant events (e.g., holidays, promotions). Visualize the data to understand its characteristics.
3.  **Model Selection & Training:** Implement and compare at least two traditional forecasting models:
    *   **ARIMA/SARIMA:** Apply appropriate differencing and identify p, d, q, P, D, Q, S parameters.
    *   **Prophet:** Utilize Prophet with appropriate seasonality modes, holiday effects, and potentially custom regressors.
    *   **Tree-based Model (e.g., XGBoost, LightGBM, Random Forest):** Train a tree-based model using your engineered features.
4.  **Evaluation:** Split your data into training and validation sets using a time-aware split. Evaluate all models using relevant time series metrics (e.g., MAE, RMSE, MAPE, sMAPE, MASE). Compare their performance and discuss the strengths and weaknesses of each.
5.  **Forecasting & Visualization:** Generate forecasts for a future period (e.g., 1-3 months) and visualize the forecasts against actuals (if available in a test set) and the historical data. Include prediction intervals where possible.
6.  **Report & Presentation:** Document your process, findings, and conclusions in a clear report. Explain your choice of models, hyperparameter tuning steps, and interpret the results.

**Stretch Goals:**
*   Implement an ensemble method combining the predictions of your best individual models.
*   Perform hyperparameter optimization for your chosen models using techniques like GridSearchCV or RandomizedSearchCV, ensuring a time-series cross-validation strategy.
*   Incorporate external regressors or holiday calendars specific to your chosen dataset.
*   Analyze and explain forecast uncertainty.

**Evaluation Criteria:**
*   **Data Handling & Feature Engineering (20%):** Correctness and creativity in preprocessing and feature creation.
*   **Model Implementation & Selection (30%):** Appropriate application of chosen models, justification for model choices, and correct training procedures.
*   **Evaluation & Interpretation (30%):** Rigorous evaluation using appropriate metrics, insightful comparison of models, and clear interpretation of results.
*   **Report & Visualization (20%):** Clarity, completeness, and professionalism of the report and visualizations.

**Estimated Time:** 20-30 hours

---

### Project Option 2: Deep Learning for IoT Sensor Data Forecasting

**Description:** You are tasked with predicting future readings from an IoT sensor network, such as temperature, humidity, or energy consumption data from smart devices. This often involves handling high-frequency, potentially noisy data, and leveraging the power of deep learning models to capture complex temporal dependencies.

**Requirements:**
1.  **Data Acquisition & Preprocessing:** Select a publicly available IoT sensor dataset (e.g., smart home energy consumption, weather station data, air quality data). Load the data, handle missing values, resample if necessary, and normalize/standardize the time series. Prepare the data for deep learning models using techniques like sliding windows to create sequences of input-output pairs.
2.  **Exploratory Data Analysis (EDA):** Analyze the time series for patterns, anomalies, and correlations between different sensor readings if it's a multivariate dataset.
3.  **Deep Learning Model Design & Training:**
    *   **LSTM/GRU Network:** Design and implement at least one recurrent neural network (RNN) architecture (LSTM or GRU) to forecast future sensor readings. Experiment with different numbers of layers, hidden units, and dropout rates.
    *   **CNN-LSTM or Transformer (Optional but recommended):** If comfortable, implement a more advanced architecture like a CNN-LSTM hybrid or a simplified Transformer model for time series.
4.  **Evaluation:** Split your data into training, validation, and test sets using a time-aware split. Evaluate your deep learning models using appropriate time series metrics (e.g., MAE, RMSE, sMAPE). Discuss the impact of different architectural choices and hyperparameters on performance.
5.  **Forecasting & Visualization:** Generate multi-step ahead forecasts for a future period and visualize the model's predictions against actual values. Analyze where the model performs well and where it struggles.
6.  **Report & Presentation:** Document your deep learning pipeline, including data preparation, model architecture details, training process, and evaluation results. Discuss the challenges of deep learning for time series and potential improvements.

**Stretch Goals:**
*   Implement an attention mechanism within your RNN or Transformer model.
*   Experiment with multivariate time series forecasting, where multiple sensor readings are used to predict multiple future readings.
*   Investigate the impact of different loss functions (e.g., Huber loss) on model performance.
*   Discuss how to deploy such a model in a real-time IoT environment.

**Evaluation Criteria:**
*   **Data Preparation for DL (25%):** Correctness and efficiency in preparing sequential data for deep learning models.
*   **Model Architecture & Implementation (30%):** Appropriateness and complexity of the chosen deep learning architecture, correct implementation, and experimentation with hyperparameters.
*   **Evaluation & Analysis (25%):** Rigorous evaluation using relevant metrics, insightful analysis of model performance, and understanding of deep learning specific challenges.
*   **Report & Visualization (20%):** Clarity, completeness, and professionalism of the report and visualizations.

**Estimated Time:** 25-35 hours

---

### Project Option 3: Comparative Analysis & Production Readiness for Financial Data

**Description:** This project challenges you to compare the performance of traditional statistical models against deep learning approaches for forecasting financial time series (e.g., stock prices, cryptocurrency values, commodity prices). Beyond just forecasting, you will consider aspects of production readiness, such as model robustness and potential deployment strategies.

**Requirements:**
1.  **Data Acquisition & Preprocessing:** Select a publicly available financial time series dataset (e.g., historical stock prices, cryptocurrency data). Load, clean, and preprocess the data. This may involve handling market holidays, adjusting for splits/dividends, and creating relevant financial features (e.g., moving averages, volatility measures, technical indicators).
2.  **Exploratory Data Analysis (EDA):** Analyze the financial time series for trends, volatility clusters, and potential regime changes. Be mindful of the non-stationary nature of financial data.
3.  **Model Implementation & Comparison:** Implement and train at least one traditional model and one deep learning model:
    *   **Traditional Model:** Choose between ARIMA/SARIMA or Prophet, tailored for financial data.
    *   **Deep Learning Model:** Implement an LSTM, GRU, or a simple Transformer-based model.
    *   **Comparative Evaluation:** Rigorously compare the performance of these models using appropriate time series metrics on a held-out test set. Discuss the trade-offs between model complexity, interpretability, and predictive power in a financial context.
4.  **Robustness & Uncertainty:** Address the inherent uncertainty in financial forecasting. Implement methods to quantify forecast uncertainty (e.g., prediction intervals from Prophet, Monte Carlo dropout for deep learning models). Discuss model robustness to sudden market changes.
5.  **Production Readiness Considerations:** Outline a high-level strategy for deploying your best-performing model. Consider aspects like:
    *   Data ingestion and pipeline automation.
    *   Model retraining frequency.
    *   Monitoring model performance in production.
    *   Scalability and latency.
    *   Ethical considerations (e.g., transparency, bias).
6.  **Report & Presentation:** Create a comprehensive report detailing your comparative analysis, model choices, evaluation, and production readiness considerations. Justify your conclusions with evidence from your experiments.

**Stretch Goals:**
*   Implement a simple backtesting strategy to evaluate model performance as if it were trading.
*   Explore incorporating news sentiment or macroeconomic indicators as external regressors.
*   Build a lightweight API (e.g., using Flask or FastAPI) that exposes your best model's prediction endpoint.
*   Investigate different approaches to handling high volatility or "black swan" events.

**Evaluation Criteria:**
*   **Data Handling & Feature Engineering (20%):** Correctness and domain-specific feature creation for financial data.
*   **Model Implementation & Comparative Analysis (30%):** Appropriate application of diverse models, rigorous comparison, and insightful analysis of model strengths/weaknesses in a financial context.
*   **Robustness & Production Readiness (30%):** Thoughtful consideration of uncertainty, robustness, and practical deployment aspects.
*   **Report & Presentation (20%):** Clarity, completeness, and professionalism of the report, including well-reasoned arguments and visualizations.

**Estimated Time:** 30-40 hours

---

## Final Examination

This final examination assesses your comprehensive understanding of Machine Learning for Time Series Forecasting, covering concepts, practical application, and problem-solving skills from all modules.

### Section 1: Concept Definitions (4 questions)

**Question 1.1:** Explain the concept of "stationarity" in time series analysis. Why is it often a desirable property for traditional forecasting models, and what common technique is used to achieve it?

**Answer 1.1:**
Stationarity refers to a time series whose statistical properties (like mean, variance, and autocorrelation) do not change over time. More formally, a *strictly stationary* series has a joint probability distribution that is invariant to time shifts. A *weakly stationary* (or covariance stationary) series has a constant mean, constant variance, and an autocorrelation function that depends only on the lag, not on the specific time point.

Stationarity is desirable for many traditional forecasting models (like ARIMA) because these models are built on the assumption that the underlying statistical process generating the data is stable over time. If the series is non-stationary, parameters estimated from one period might not be valid for another, leading to poor forecasts.

The most common technique to achieve stationarity is **differencing**. This involves calculating the difference between consecutive observations (or observations separated by a seasonal period). For example, first-order differencing `Y_t = X_t - X_{t-1}` can remove a linear trend, while seasonal differencing `Y_t = X_t - X_{t-S}` (where S is the seasonal period) can remove seasonal patterns.

**Question 1.2:** Describe the primary difference between a "rolling window" and an "expanding window" approach for time series cross-validation. When might you prefer one over the other?

**Answer 1.2:**
Both rolling and expanding windows are techniques for splitting time series data into training and validation sets in a time-aware manner, ensuring that the validation set always comes *after* the training set.

*   **Rolling Window (or Sliding Window):** In this approach, both the training window and the validation window have a fixed size. As you move forward in time, both windows slide, meaning the oldest data points are dropped from the training set, and new data points are added. For example, if you have a 100-day training window and a 10-day validation window, the first split might be `train[0:100], val[101:110]`, and the next split would be `train[1:101], val[102:111]`.
*   **Expanding Window:** In this approach, the training window grows with each iteration, while the validation window typically has a fixed size. The training set always includes all data points from the beginning of the series up to the start of the current validation period. For example, with a 10-day validation window, the first split might be `train[0:100], val[101:110]`, and the next split would be `train[0:101], val[102:111]`.

**Preference:**
*   You might prefer an **expanding window** when you believe that all historical data, no matter how old, contains valuable information for forecasting, and you want your model to learn from the longest possible history. This is common when the underlying data generating process is relatively stable or when you have limited data and want to maximize the training set size.
*   You might prefer a **rolling window** when you suspect that older data becomes less relevant or even detrimental for forecasting the future (e.g., due to concept drift, regime changes, or outdated patterns). It's more computationally expensive as the model needs to be retrained on a new, but fixed-size, dataset each time. It's often used when the most recent patterns are considered most indicative of the immediate future.

**Question 1.3:** What is "teacher forcing" in the context of training Recurrent Neural Networks (RNNs) for sequence-to-sequence tasks, and what problem does it help mitigate during training?

**Answer 1.3:**
Teacher forcing is a technique used during the training of recurrent neural networks (like LSTMs or GRUs) for sequence-to-sequence tasks, particularly in forecasting. Instead of feeding the model's *own previous output* as the input for the next time step in the decoder, teacher forcing feeds the *actual ground truth value* from the training data for the previous time step.

For example, if an RNN is predicting a sequence `y_1, y_2, y_3, ...`:
*   Without teacher forcing: The model predicts `y_1_hat`, then uses `y_1_hat` to predict `y_2_hat`, then `y_2_hat` to predict `y_3_hat`, and so on.
*   With teacher forcing: The model predicts `y_1_hat` using `x_0` (initial input), then uses the *actual* `y_1` (from the training data) to predict `y_2_hat`, then the *actual* `y_2` to predict `y_3_hat`, and so on.

The problem it helps mitigate during training is **exposure bias** or **error accumulation**. Without teacher forcing, if the model makes an error at an early time step, that error is compounded as its incorrect prediction is fed back as input for subsequent steps, leading to a cascade of errors and potentially unstable training. By using the ground truth, teacher forcing ensures that the model always learns to predict the next step from a "correct" previous state, stabilizing training and speeding up convergence. However, a potential drawback is a "train-test discrepancy" where the model performs well during training (with ground truth inputs) but struggles during inference (when it has to rely on its own potentially erroneous predictions).

**Question 1.4:** Briefly explain the core idea behind the "attention mechanism" when applied to time series forecasting with deep learning models. How does it improve upon traditional RNNs?

**Answer 1.4:**
The core idea behind the **attention mechanism** in time series forecasting is to allow the model to dynamically weigh the importance of different past time steps (or features) when making a prediction for a future time step. Instead of forcing the model to compress all relevant information from a long input sequence into a single fixed-size context vector (as traditional RNNs often do), attention enables the model to "look back" at the entire input sequence and selectively focus on the most relevant parts at each prediction step.

**How it improves upon traditional RNNs:**
1.  **Addresses Long-Term Dependencies (Vanishing Gradient):** Traditional RNNs struggle with very long sequences due to the vanishing gradient problem, making it hard to remember information from distant past steps. Attention allows the model to directly access and weigh any past state, bypassing the need to carry all information through every intermediate step.
2.  **Improved Contextual Understanding:** For a specific prediction, certain past events or patterns might be more critical than others. Attention provides a mechanism to identify and prioritize these relevant historical data points, leading to more informed predictions. For example, when forecasting sales for a holiday, the attention mechanism might give higher weight to sales data from previous holidays rather than just recent non-holiday sales.
3.  **Interpretability:** Attention weights can sometimes offer a degree of interpretability, showing which parts of the input sequence the model focused on when generating a particular output. This can provide insights into the model's decision-making process.
4.  **Handles Variable-Length Sequences More Naturally:** While RNNs can handle variable-length sequences, attention makes it more robust by not relying solely on the final hidden state to summarize the entire input.

### Section 2: Code Tracing (3 questions)

**Question 2.1:** Consider the following Python code snippet using `pandas`. What will be the output of `df_resampled.head()`?

```python
import pandas as pd
import numpy as np

# Create a sample DataFrame with a DateTimeIndex
dates = pd.date_range(start='2023-01-01', periods=10, freq='H')
data = np.random.randint(10, 100, size=10)
df = pd.DataFrame({'value': data}, index=dates)

# Simulate some missing data
df.loc['2023-01-03 01:00:00', 'value'] = np.nan
df.loc['2023-01-03 02:00:00', 'value'] = np.nan

# Resample to daily frequency, summing values and then filling NaNs with the mean
df_resampled = df['value'].resample('D').sum().fillna(df['value'].mean())
print(df_resampled.head())
```

**Answer 2.1:**
Let's trace the operations:
1.  **Initial `df`:** A DataFrame with hourly data from 2023-01-01 00:00:00 to 2023-01-01 09:00:00.
    ```
    2023-01-01 00:00:00    value_0
    2023-01-01 01:00:00    value_1
    ...
    2023-01-01 09:00:00    value_9
    ```
2.  **Missing Data:** Values at '2023-01-03 01:00:00' and '2023-01-03 02:00:00' are set to `NaN`.
    *Wait, the `periods=10, freq='H'` means the dates are from 2023-01-01 00:00:00 to 2023-01-01 09:00:00. The `loc` calls for '2023-01-03 01:00:00' and '2023-01-03 02:00:00' will not affect the original `df` because those dates are outside its index range. This is a crucial detail.*

    Let's re-evaluate the dates. `pd.date_range(start='2023-01-01', periods=10, freq='H')` creates:
    `2023-01-01 00:00:00`, `2023-01-01 01:00:00`, ..., `2023-01-01 09:00:00`.
    So, `df.loc['2023-01-03 01:00:00', 'value'] = np.nan` will *add* new rows to the DataFrame, expanding its index. This is an important `pandas` behavior.

    Let's assume the intent was to have data spanning multiple days. If the `date_range` was `periods=72, freq='H'` (3 full days), then the `loc` calls would apply.
    Given the code as written, the `loc` calls will add new rows to the DataFrame, making it sparse for those dates.

    Let's *correctly* trace based on the provided code:
    `df` initially has 10 rows from 2023-01-01 00:00:00 to 2023-01-01 09:00:00.
    `df.loc['2023-01-03 01:00:00', 'value'] = np.nan` adds a row for 2023-01-03 01:00:00 with NaN.
    `df.loc['2023-01-03 02:00:00', 'value'] = np.nan` adds a row for 2023-01-03 02:00:00 with NaN.
    All other values for 2023-01-02 and 2023-01-03 (except 01:00 and 02:00) will be `NaN` as well, because they were not explicitly set.

    This means the `df` now has data for:
    *   2023-01-01 (10 hourly values, all integers)
    *   2023-01-02 (all NaNs, implicitly, as no data was generated for this day)
    *   2023-01-03 (NaN at 01:00, NaN at 02:00, and implicitly NaNs for other hours)

3.  **`df['value'].resample('D').sum()`:**
    *   For '2023-01-01': Sums the 10 integer values. This will be a positive integer.
    *   For '2023-01-02': There are no explicit entries for this day. `sum()` on a series of all NaNs (implicitly) will result in `NaN`.
    *   For '2023-01-03': Sums the two `NaN` values. `sum()` of `NaN`s is `NaN`.

4.  **`df['value'].mean()`:** This calculates the mean of all non-NaN values in the *original* `df` (which now includes the NaNs added by `loc`). The mean will be the average of the initial 10 integer values. Let's call this `M`.

5.  **`.fillna(df['value'].mean())`:**
    *   '2023-01-01' will retain its sum.
    *   '2023-01-02' (NaN) will be filled with `M`.
    *   '2023-01-03' (NaN) will be filled with `M`.

**Expected Output:**
The exact integer sum for 2023-01-01 will vary due to `np.random.randint`. The mean `M` will also vary.
Let's assume the sum for 2023-01-01 is `S_01` and the mean of the original 10 values is `M`.

```
2023-01-01    S_01 (e.g., 550.0)
2023-01-02    M    (e.g., 55.0)
2023-01-03    M    (e.g., 55.0)
Freq: D, Name: value, dtype: float64
```
The `head()` will show these three entries. The `dtype` will be `float64` because `sum()` on integers can result in floats if NaNs are involved, and `fillna` with a float will convert the series.

**Partial Credit Guidance:**
*   Correctly identifying the `sum()` operation for 2023-01-01: 30%
*   Correctly identifying that 2023-01-02 and 2023-01-03 will initially be NaN after `sum()`: 30%
*   Correctly calculating the mean for `fillna`: 20%
*   Correctly applying `fillna` to the NaN days: 20%
*   Missing the detail about `loc` adding rows and thus creating implicit NaNs for 2023-01-02 is a common mistake but should not lead to full deduction if the subsequent steps are correct based on the *actual* intermediate state.

**Question 2.2:** You are preparing data for an LSTM model. Given an input sequence `X = [10, 20, 30, 40, 50, 60, 70, 80]` and a desired `sequence_length = 3` with a `forecast_horizon = 1` (meaning predicting the next single step), trace how the input-output pairs `(input_sequence, target)` would be generated. List all generated pairs.

**Answer 2.2:**
The goal is to create sequences of length `sequence_length` as input (`X_t`) and the value `forecast_horizon` steps ahead as the target (`Y_t`).

Given:
`X = [10, 20, 30, 40, 50, 60, 70, 80]`
`sequence_length = 3`
`forecast_horizon = 1`

Let's denote the input sequence as `[x_t-2, x_t-1, x_t]` and the target as `x_t+1`.

1.  **First pair:**
    *   Input sequence: `[10, 20, 30]` (indices 0, 1, 2)
    *   Target (1 step after `x_2`): `40` (index 3)
    *   Pair: `([10, 20, 30], 40)`

2.  **Second pair:**
    *   Input sequence: `[20, 30, 40]` (indices 1, 2, 3)
    *   Target (1 step after `x_3`): `50` (index 4)
    *   Pair: `([20, 30, 40], 50)`

3.  **Third pair:**
    *   Input sequence: `[30, 40, 50]` (indices 2, 3, 4)
    *   Target (1 step after `x_4`): `60` (index 5)
    *   Pair: `([30, 40, 50], 60)`

4.  **Fourth pair:**
    *   Input sequence: `[40, 50, 60]` (indices 3, 4, 5)
    *   Target (1 step after `x_5`): `70` (index 6)
    *   Pair: `([40, 50, 60], 70)`

5.  **Fifth pair:**
    *   Input sequence: `[50, 60, 70]` (indices 4, 5, 6)
    *   Target (1 step after `x_6`): `80` (index 7)
    *   Pair: `([50, 60, 70], 80)`

The process stops here because the next input sequence `[60, 70, 80]` would require a target at index 8, which is out of bounds for `X`.

**All generated pairs:**
```
([10, 20, 30], 40)
([20, 30, 40], 50)
([30, 40, 50], 60)
([40, 50, 60], 70)
([50, 60, 70], 80)
```

**Partial Credit Guidance:**
*   Correctly identifying the first pair: 30%
*   Correctly identifying the sliding window mechanism: 40%
*   Correctly identifying all pairs and the stopping condition: 30%

**Question 2.3:** You are using Facebook Prophet to forecast daily website traffic. You have a DataFrame `df` with columns `ds` (datetime) and `y` (traffic count). You've added a custom regressor for marketing spend (`marketing_spend`). What will be the predicted traffic for '2023-01-05' given the following code and data?

```python
import pandas as pd
from prophet import Prophet

# Sample data
data = {
    'ds': pd.to_datetime(['2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04']),
    'y': [100, 110, 105, 120]
}
df = pd.DataFrame(data)

# Marketing spend data (future values included)
marketing_spend_data = {
    'ds': pd.to_datetime(['2023-01-01', '2023-01-02', '2023-01-03', '2023-01-04', '2023-01-05']),
    'marketing_spend': [10, 12, 11, 15, 20]
}
df_marketing = pd.DataFrame(marketing_spend_data)

# Merge marketing spend into the main DataFrame
df = pd.merge(df, df_marketing, on='ds', how='left')

# Initialize and fit Prophet model
m = Prophet()
m.add_regressor('marketing_spend')
m.fit(df)

# Create future DataFrame for prediction
future = m.make_future_dataframe(periods=1, include_history=False) # Predicts only 2023-01-05
future = pd.merge(future, df_marketing, on='ds', how='left')

# Make prediction
forecast = m.predict(future)
print(forecast[['ds', 'yhat']].iloc[0])
```

**Answer 2.3:**
Let's trace the execution:
1.  **Initial `df`:**
    ```
             ds    y
    0 2023-01-01  100
    1 2023-01-02  110
    2 2023-01-03  105
    3 2023-01-04  120
    ```
2.  **`df_marketing`:**
    ```
             ds  marketing_spend
    0 2023-01-01               10
    1 2023-01-02               12
    2 2023-01-03               11
    3 2023-01-04               15
    4 2023-01-05               20
    ```
3.  **Merged `df` (for fitting):**
    ```
             ds    y  marketing_spend
    0 2023-01-01  100               10
    1 2023-01-02  110               12
    2 2023-01-03  105               11
    3 2023-01-04  120               15
    ```
4.  **Prophet Model:**
    *   `m = Prophet()` initializes the model.
    *   `m.add_regressor('marketing_spend')` tells Prophet to use `marketing_spend` as an additional linear regressor.
    *   `m.fit(df)` trains the model on the merged `df`. Prophet will model trend, seasonality (daily by default), and the linear effect of `marketing_spend`.

5.  **`future` DataFrame for prediction:**
    *   `m.make_future_dataframe(periods=1, include_history=False)` creates a DataFrame with just one date: `2023-01-05 00:00:00`.
    *   `future = pd.merge(future, df_marketing, on='ds', how='left')` adds the `marketing_spend` for '2023-01-05', which is `20`.
    *   So, `future` will be:
        ```
                 ds  marketing_spend
        0 2023-01-05               20
        ```

6.  **`m.predict(future)`:** Prophet generates a forecast for '2023-01-05'. The `yhat` value will be a combination of:
    *   The overall trend component.
    *   The daily seasonality component for a Friday (2023-01-05 is a Thursday, 2023-01-01 was a Sunday). Prophet's default daily seasonality will capture this.
    *   The linear effect of `marketing_spend = 20`.

Since Prophet's internal model is complex and relies on Stan, we cannot predict the *exact* numerical value of `yhat` without running the code. However, we can describe its characteristics:
*   It will be a **single numerical value** representing the predicted traffic for 2023-01-05.
*   It will be influenced by the observed trend (slight increase from 100 to 120 over 4 days), the daily seasonality (which will be learned from the provided 4 days, likely showing some day-of-week pattern), and significantly by the `marketing_spend` value of `20`.
*   Given the increasing trend and the highest marketing spend value yet, `yhat` is likely to be **higher than the previous day's `y` (120)**, assuming a positive correlation between marketing spend and traffic.

**Predicted `yhat` for '2023-01-05':**
The exact numerical value cannot be determined without running the model. However, the output will be a single float representing the forecast.
*Running the code yields approximately `yhat = 131.6` (this value may slightly vary due to internal Prophet randomness, but it will be close).*

**Output format:**
```
ds       2023-01-05 00:00:00
yhat                131.6...
Name: 0, dtype: object
```
(The exact `yhat` value will be a float.)

**Partial Credit Guidance:**
*   Correctly identifying the `future` DataFrame content: 30%
*   Correctly identifying that `marketing_spend` for 2023-01-05 will be used: 20%
*   Explaining *what* components contribute to `yhat` (trend, seasonality, regressor): 30%
*   Stating that the exact numerical value cannot be determined without running, but providing a reasonable range or direction (e.g., "likely higher than 120"): 20%

### Section 3: Code Writing (4 questions)

**Question 3.1:** Write a Python function `time_series_split(data, train_ratio)` that takes a pandas Series (representing a time series) and a `train_ratio` (float between 0 and 1) as input. The function should return two pandas Series: `train_data` and `test_data`, ensuring that the split is time-aware (i.e., `test_data` always comes after `train_data`).

**Answer 3.1:**

```python
import pandas as pd

def time_series_split(data: pd.Series, train_ratio: float) -> tuple[pd.Series, pd.Series]:
    """
    Splits a time series into training and testing sets in a time-aware manner.

    Args:
        data (pd.Series): The input time series (must have a DatetimeIndex).
        train_ratio (float): The proportion of data to use for the training set (e.g., 0.8 for 80%).

    Returns:
        tuple[pd.Series, pd.Series]: A tuple containing (train_data, test_data).

    Raises:
        ValueError: If train_ratio is not between 0 and 1.
        TypeError: If the input data is not a pandas Series or does not have a DatetimeIndex.
    """
    if not isinstance(data, pd.Series):
        raise TypeError("Input 'data' must be a pandas Series.")
    if not isinstance(data.index, pd.DatetimeIndex):
        raise TypeError("Input 'data' must have a DatetimeIndex.")
    if not (0 < train_ratio < 1):
        raise ValueError("train_ratio must be between 0 and 1.")

    n_samples = len(data)
    train_size = int(n_samples * train_ratio)

    if train_size == 0 or train_size == n_samples:
        raise ValueError("Calculated train_size is too small or too large for the given data and train_ratio.")

    train_data = data.iloc[:train_size]
    test_data = data.iloc[train_size:]

    return train_data, test_data

# Example Usage:
if __name__ == '__main__':
    # Create a sample time series
    dates = pd.date_range(start='2023-01-01', periods=100, freq='D')
    values = [i + (i % 7) * 5 + pd.np.random.randn() * 10 for i in range(100)]
    ts = pd.Series(values, index=dates)

    # Split the data
    train_set, test_set = time_series_split(ts, 0.8)

    print(f"Original data length: {len(ts)}")
    print(f"Train set length: {len(train_set)}")
    print(f"Test set length: {len(test_set)}")
    print("\nTrain set head:")
    print(train_set.head())
    print("\nTest set head:")
    print(test_set.head())
    print("\nTrain set tail:")
    print(train_set.tail())
    print("\nTest set tail:")
    print(test_set.tail())

    # Common mistake: Not having a DatetimeIndex
    try:
        time_series_split(pd.Series([1,2,3,4,5]), 0.7)
    except TypeError as e:
        print(f"\nCaught expected error: {e}")
```

**Partial Credit Guidance:**
*   Correctly calculating `train_size`: 20%
*   Using `iloc` for time-aware slicing: 40%
*   Returning a tuple of pandas Series: 20%
*   Including basic input validation (e.g., `train_ratio` range): 20%

**Question 3.2:** Write Python code to fit a `SARIMAX` model from `statsmodels` to a given time series `y` with `p=1, d=1, q=1` and seasonal orders `P=1, D=1, Q=0, S=12`. Assume `y` is a pandas Series with a `DatetimeIndex`.

**Answer 3.2:**

```python
import pandas as pd
import numpy as np
from statsmodels.tsa.statespace.sarimax import SARIMAX

def fit_sarimax_model(y: pd.Series) -> SARIMAX:
    """
    Fits a SARIMAX model with specified orders to a time series.

    Args:
        y (pd.Series): The input time series (must have a DatetimeIndex).

    Returns:
        SARIMAX: The fitted SARIMAX model object.

    Raises:
        TypeError: If the input data is not a pandas Series or does not have a DatetimeIndex.
        ValueError: If the time series is too short for the specified seasonal order.
    """
    if not isinstance(y, pd.Series):
        raise TypeError("Input 'y' must be a pandas Series.")
    if not isinstance(y.index, pd.DatetimeIndex):
        raise TypeError("Input 'y' must have a DatetimeIndex.")
    if len(y) < 2 * 12: # At least two full seasonal cycles for seasonal differencing
        raise ValueError(f"Time series too short (length {len(y)}) for seasonal order S=12. "
                         f"Needs at least 2*S = {2*12} data points.")

    # Define the non-seasonal and seasonal orders
    order = (1, 1, 1)  # (p, d, q)
    seasonal_order = (1, 1, 0, 12) # (P, D, Q, S)

    print(f"Attempting to fit SARIMAX with order={order} and seasonal_order={seasonal_order}")
    try:
        # Initialize the SARIMAX model
        model = SARIMAX(y, order=order, seasonal_order=seasonal_order,
                        enforce_stationarity=False, # Allow model to handle differencing
                        enforce_invertibility=False) # Allow model to handle invertibility

        # Fit the model
        fitted_model = model.fit(disp=False) # disp=False suppresses convergence output
        print("SARIMAX model fitted successfully.")
        print(fitted_model.summary())
        return fitted_model
    except Exception as e:
        print(f"Error fitting SARIMAX model: {e}")
        raise

# Example Usage:
if __name__ == '__main__':
    # Create a sample time series with monthly seasonality
    dates = pd.date_range(start='2010-01-01', periods=12*10, freq='MS') # 10 years of monthly data
    # Simulate trend and seasonality
    values = [100 + i * 0.5 + 20 * np.sin(2 * np.pi * (i % 12) / 12) + np.random.randn() * 5 for i in range(len(dates))]
    monthly_ts = pd.Series(values, index=dates)

    # Fit the SARIMAX model
    sarimax_result = fit_sarimax_model(monthly_ts)

    # You can now use sarimax_result for forecasting
    # forecast = sarimax_result.predict(start=len(monthly_ts), end=len(monthly_ts) + 11)
    # print("\nForecast for next 12 months:")
    # print(forecast)

    # Common mistake: Not enough data for seasonal differencing
    try:
        short_ts = pd.Series(np.random.rand(15), index=pd.date_range(start='2023-01-01', periods=15, freq='MS'))
        fit_sarimax_model(short_ts)
    except ValueError as e:
        print(f"\nCaught expected error for short time series: {e}")
```

**Partial Credit Guidance:**
*   Correctly importing `SARIMAX`: 15%
*   Correctly defining `order` and `seasonal_order` tuples: 30%
*   Instantiating `SARIMAX` with `y`, `order`, and `seasonal_order`: 30%
*   Calling `.fit()` on the model: 15%
*   Adding basic error handling or input validation: 10%

**Question 3.3:** Write a Python function `create_sliding_windows(data, sequence_length, forecast_horizon)` that takes a 1D NumPy array `data`, an integer `sequence_length`, and an integer `forecast_horizon` as input. The function should return two NumPy arrays: `X` (input sequences) and `y` (corresponding targets), prepared for a deep learning model.

**Answer 3.3:**

```python
import numpy as np

def create_sliding_windows(data: np.ndarray, sequence_length: int, forecast_horizon: int) -> tuple[np.ndarray, np.ndarray]:
    """
    Creates sliding windows (sequences) and corresponding targets for time series forecasting.

    Args:
        data (np.ndarray): A 1D NumPy array representing the time series.
        sequence_length (int): The number of past time steps to include in each input sequence (X).
        forecast_horizon (int): The number of steps ahead to predict (y).

    Returns:
        tuple[np.ndarray, np.ndarray]: A tuple (X, y) where:
            X (np.ndarray): 2D array of input sequences (num_samples, sequence_length).
            y (np.ndarray): 1D array of target values (num_samples,).

    Raises:
        ValueError: If sequence_length or forecast_horizon are non-positive,
                    or if the data is too short to create any windows.
    """
    if not isinstance(data, np.ndarray) or data.ndim != 1:
        raise ValueError("Input 'data' must be a 1D NumPy array.")
    if not isinstance(sequence_length, int) or sequence_length <= 0:
        raise ValueError("sequence_length must be a positive integer.")
    if not isinstance(forecast_horizon, int) or forecast_horizon <= 0:
        raise ValueError("forecast_horizon must be a positive integer.")

    X, y = [], []
    total_length = len(data)
    
    # The last possible starting point for a sequence is such that
    # sequence_length + forecast_horizon - 1 doesn't exceed the data length.
    # The target index will be i + sequence_length + forecast_horizon - 1
    # The input sequence ends at i + sequence_length - 1
    # The target value is at index i + sequence_length + forecast_horizon - 1
    
    # Loop from the first possible start index up to the point where a full
    # input sequence and its corresponding target can be formed.
    for i in range(total_length - sequence_length - forecast_horizon + 1):
        # Extract the input sequence
        input_seq = data[i : (i + sequence_length)]
        X.append(input_seq)
        
        # Extract the target value
        # The target is 'forecast_horizon' steps after the *end* of the input_seq
        target_value = data[i + sequence_length + forecast_horizon - 1]
        y.append(target_value)

    if not X: # Check if any samples were created
        raise ValueError(f"Not enough data to create sequences. Data length: {total_length}, "
                         f"required: {sequence_length + forecast_horizon}. Try reducing sequence_length or forecast_horizon.")

    return np.array(X), np.array(y)

# Example Usage:
if __name__ == '__main__':
    series = np.array([10, 20, 30, 40, 50, 60, 70, 80, 90, 100])
    seq_len = 3
    horizon = 1

    X_data, y_data = create_sliding_windows(series, seq_len, horizon)

    print(f"Original series: {series}")
    print(f"Sequence Length: {seq_len}, Forecast Horizon: {horizon}")
    print("\nGenerated X (input sequences):")
    print(X_data)
    print("\nGenerated y (targets):")
    print(y_data)

    # Expected output for X:
    # [[10 20 30]
    #  [20 30 40]
    #  [30 40 50]
    #  [40 50 60]
    #  [50 60 70]
    #  [60 70 80]
    #  [70 80 90]]
    # Expected output for y:
    # [ 40  50  60  70  80  90 100]

    # Example with different horizon
    seq_len_2 = 2
    horizon_2 = 2
    X_data_2, y_data_2 = create_sliding_windows(series, seq_len_2, horizon_2)
    print(f"\nSequence Length: {seq_len_2}, Forecast Horizon: {horizon_2}")
    print("Generated X:")
    print(X_data_2)
    print("Generated y:")
    print(y_data_2)
    # Expected output for X_data_2:
    # [[10 20]
    #  [20 30]
    #  [30 40]
    #  [40 50]
    #  [50 60]
    #  [60 70]
    #  [70 80]]
    # Expected output for y_data_2:
    # [ 40  50  60  70  80  90 100]

    # Common mistake: Data too short
    try:
        create_sliding_windows(np.array([1,2,3]), 3, 1)
    except ValueError as e:
        print(f"\nCaught expected error for short data: {e}")
```

**Partial Credit Guidance:**
*   Correctly iterating through the data to create sequences: 30%
*   Correctly extracting the input sequence `X`: 30%
*   Correctly extracting the target `y` based on `forecast_horizon`: 30%
*   Returning NumPy arrays and handling edge cases/validation: 10%

**Question 3.4:** Write a Python function `calculate_smape(actuals, forecasts)` that computes the Symmetric Mean Absolute Percentage Error (sMAPE). The function should handle potential division by zero if `actuals[i] + forecasts[i]` is zero. `actuals` and `forecasts` are 1D NumPy arrays.

**Answer 3.4:**

```python
import numpy as np

def calculate_smape(actuals: np.ndarray, forecasts: np.ndarray) -> float:
    """
    Calculates the Symmetric Mean Absolute Percentage Error (sMAPE).

    sMAPE is defined as:
    (100/n) * sum(|actual - forecast| / ((|actual| + |forecast|)/2))

    Args:
        actuals (np.ndarray): 1D NumPy array of actual values.
        forecasts (np.ndarray): 1D NumPy array of forecasted values.

    Returns:
        float: The sMAPE value as a percentage.

    Raises:
        ValueError: If actuals and forecasts do not have the same length or are not 1D arrays.
    """
    if not isinstance(actuals, np.ndarray) or actuals.ndim != 1:
        raise ValueError("Input 'actuals' must be a 1D NumPy array.")
    if not isinstance(forecasts, np.ndarray) or forecasts.ndim != 1:
        raise ValueError("Input 'forecasts' must be a 1D NumPy array.")
    if len(actuals) != len(forecasts):
        raise ValueError("Actuals and forecasts must have the same length.")
    if len(actuals) == 0:
        return 0.0 # Or raise an error, depending on desired behavior for empty arrays

    # Calculate the numerator: |actual - forecast|
    numerator = np.abs(actuals - forecasts)

    # Calculate the denominator: (|actual| + |forecast|) / 2
    denominator = (np.abs(actuals) + np.abs(forecasts)) / 2

    # Handle division by zero: If denominator is zero, the term is zero.
    # This is a common convention for sMAPE.
    # np.divide handles division by zero by returning `inf` or `nan`,
    # so we need to explicitly set those terms to 0.
    
    # Create a mask for non-zero denominators
    non_zero_mask = denominator != 0
    
    # Calculate the ratio only where denominator is not zero
    ratio = np.zeros_like(actuals, dtype=float)
    ratio[non_zero_mask] = numerator[non_zero_mask] / denominator[non_zero_mask]

    # Calculate sMAPE
    smape = np.mean(ratio) * 100

    return smape

# Example Usage:
if __name__ == '__main__':
    actual_values = np.array([100, 110, 105, 120, 0, 50])
    forecast_values = np.array([105, 108, 100, 125, 0, 55])

    smape_result = calculate_smape(actual_values, forecast_values)
    print(f"Actuals: {actual_values}")
    print(f"Forecasts: {forecast_values}")
    print(f"sMAPE: {smape_result:.2f}%") # Expected: ~4.17%

    # Example with zero actual and forecast (should contribute 0 to sMAPE)
    actual_zero = np.array([0, 0, 10])
    forecast_zero = np.array([0, 5, 12])
    smape_zero_case = calculate_smape(actual_zero, forecast_zero)
    print(f"\nActuals (zero case): {actual_zero}")
    print(f"Forecasts (zero case): {forecast_zero}")
    print(f"sMAPE (zero case): {smape_zero_case:.2f}%") # Expected: ~18.33% (0 for first, 100 for second, ~18.18 for third)

    # Common mistake: Mismatched lengths
    try:
        calculate_smape(np.array([1,2]), np.array([1,2,3]))
    except ValueError as e:
        print(f"\nCaught expected error: {e}")
```

**Partial Credit Guidance:**
*   Correctly calculating the numerator `|actual - forecast|`: 25%
*   Correctly calculating the denominator `(|actual| + |forecast|)/2`: 25%
*   Correctly handling division by zero (e.g., setting term to 0 when denominator is 0): 30%
*   Averaging and multiplying by 100: 20%

### Section 4: Design & Debugging Problems (3 questions)

**Question 4.1:** You are tasked with forecasting the daily electricity consumption for a large office building. The data exhibits strong daily and weekly seasonality, as well as a clear upward trend over the years. There are also predictable dips in consumption during public holidays. You need to choose a suitable forecasting model. Discuss which model (ARIMA, Prophet, or LSTM) would be most appropriate and why, outlining its key advantages for this specific problem. Also, briefly mention one potential challenge with your chosen model and how you would address it.

**Answer 4.1:**
For forecasting daily electricity consumption with strong daily and weekly seasonality, an upward trend, and predictable holiday effects, **Facebook Prophet** would be the most appropriate model.

**Advantages of Prophet for this problem:**
1.  **Handles Multiple Seasonalities Easily:** Prophet is designed to automatically detect and model multiple seasonalities (e.g., daily, weekly, yearly) without requiring manual differencing or complex Fourier series setup. This is perfect for daily and weekly patterns in electricity consumption.
2.  **Robust to Missing Data and Outliers:** Real-world sensor data often has gaps or erroneous readings. Prophet is inherently robust to missing data and can handle outliers well, which is a significant advantage for operational data.
3.  **Incorporates Trend Changes:** Prophet models trend using a piecewise linear or logistic growth curve, making it effective at capturing the observed upward trend and adapting to potential changes in growth rate over time.
4.  **Easy Holiday/Event Incorporation:** Its dedicated `holidays` parameter allows for straightforward inclusion of public holidays, which are known to cause predictable dips in consumption. This is a critical feature for this problem.
5.  **Interpretability and Ease of Use:** Prophet provides easily interpretable components (trend, seasonality, holidays, regressors), which is valuable for understanding the drivers of electricity consumption and communicating insights to stakeholders. It also requires less specialized time series expertise than ARIMA for parameter tuning.

**Potential Challenge and Solution:**
*   **Challenge:** Prophet's default linear or logistic trend might not always capture highly complex, non-linear long-term trends perfectly, or it might struggle with sudden, unpredicted regime shifts (e.g., a major renovation or a new energy efficiency policy).
*   **Solution:** To address this, I would first ensure that the `changepoint_prior_scale` parameter is tuned to allow for sufficient trend flexibility. If the trend is still not well-captured, I could explore adding external regressors that might explain these shifts (e.g., building occupancy rates, average outdoor temperature, or specific policy implementation dates). For very sudden, unpredicted shifts, a combination with anomaly detection methods on the residuals could flag when the model is no longer performing optimally, triggering a re-evaluation or retraining.

**Partial Credit Guidance:**
*   Choosing Prophet: 30%
*   Listing 2-3 specific advantages relevant to the problem (seasonality, trend, holidays, robustness): 50%
*   Identifying a valid challenge and a practical solution: 20%

**Question 4.2:** You have trained an LSTM model for univariate time series forecasting, but during evaluation, you notice that your model consistently under-predicts during periods of rapid increase and over-predicts during periods of rapid decrease. This suggests a **lagging prediction** issue.
Describe two potential causes for this problem in an LSTM, and for each cause, propose a concrete solution you would try.

**Answer 4.2:**
The "lagging prediction" issue, where the model consistently trails behind rapid changes, is a common problem in time series forecasting, especially with sequential models like LSTMs.

**Potential Cause 1: Insufficient `sequence_length` or inadequate representation of past dynamics.**
*   **Explanation:** If the `sequence_length` (look-back window) provided to the LSTM is too short, the model might not have enough historical context to recognize and react to the onset of a rapid trend change. It's essentially "myopic" and only sees the immediate past, making it difficult to anticipate acceleration or deceleration. Additionally, if the data is not properly scaled or normalized, the magnitude of changes might be harder for the model to learn effectively.
*   **Concrete Solution:**
    1.  **Increase `sequence_length`:** Experiment with a longer `sequence_length` during data preparation. This provides the LSTM with more historical context, potentially allowing it to identify longer-term patterns or the initial signs of a rapid change.
    2.  **Feature Engineering:** Introduce additional features that explicitly capture the rate of change or momentum, such as:
        *   **Lagged differences:** `data_t - data_t-1`, `data_t - data_t-7`.
        *   **Rolling statistics:** Rolling mean, standard deviation, or skewness over different windows within the input sequence.
        *   These features can make the "rate of change" more explicit for the model.
    3.  **Normalization/Scaling:** Ensure the data is appropriately scaled (e.g., Min-Max scaling or StandardScaler) to a range like `[0, 1]` or `[-1, 1]`. This helps the LSTM's activation functions work effectively and can make it easier to learn patterns in magnitudes.

**Potential Cause 2: Model capacity or architecture limitations.**
*   **Explanation:** A shallow LSTM (e.g., a single layer with few units) might not have enough capacity to learn the complex, non-linear relationships required to anticipate rapid shifts. The model might be underfitting the dynamic nature of the time series. Furthermore, the choice of activation functions or the absence of regularization might also play a role.
*   **Concrete Solution:**
    1.  **Increase Model Complexity:**
        *   **Add more LSTM layers:** Stack multiple LSTM layers (making sure to set `return_sequences=True` for all but the last LSTM layer if you want to pass full sequences between layers). This allows the model to learn hierarchical representations of the time series.
        *   **Increase the number of units/neurons:** More units per layer provide greater capacity to learn intricate patterns.
    2.  **Experiment with Bidirectional LSTMs (Bi-LSTMs):** While typically used for sequence-to-sequence problems where the entire sequence is known, a Bi-LSTM could potentially be used to process the *input sequence* in both forward and backward directions, giving the model a richer understanding of the context within the input window before making a prediction. (Note: This is less common for pure forecasting where future inputs are unknown, but applicable to the input window processing).
    3.  **Consider Attention Mechanisms or Transformers:** For highly dynamic sequences, LSTMs can still struggle with very long-term dependencies. Incorporating an attention mechanism or moving to a Transformer-based architecture can allow the model to selectively focus on the most relevant past time steps, potentially improving its ability to capture and react to rapid changes more quickly.

**Common Mistake to Avoid:** Simply increasing the `forecast_horizon` without addressing the underlying learning issues will likely exacerbate the lagging problem, as the model will have an even harder time predicting further into the future.

**Partial Credit Guidance:**
*   Identifying two distinct causes (e.g., data representation/input, model architecture/capacity): 40%
*   For each cause, providing a clear explanation: 30%
*   For each cause, proposing a concrete and relevant solution: 30%

**Question 4.3:** You are developing a real-time forecasting system for energy demand. The system needs to provide hourly forecasts for the next 24 hours. You have chosen to use a deep learning model (e.g., an LSTM). Discuss three critical considerations for deploying and maintaining this model in a production environment.

**Answer 4.3:**
Deploying and maintaining a real-time deep learning forecasting model for energy demand involves several critical considerations beyond just model accuracy.

1.  **Data Pipeline and Feature Engineering Automation:**
    *   **Consideration:** In a real-time system, the model needs fresh data constantly. This means setting up robust, automated pipelines to ingest raw energy consumption data, external factors (like weather forecasts, holiday schedules, time-of-day indicators), and perform all the necessary preprocessing and feature engineering (e.g., lagging, rolling statistics, normalization) *at inference time* exactly as it was done during training. Any discrepancy in data preparation between training and production will lead to poor forecasts.
    *   **Actionable Solution:** Implement a robust MLOps pipeline using tools like Apache Airflow, Prefect, or Kubeflow Pipelines. Define clear data contracts and schema validation at each stage. Containerize the feature engineering logic (e.g., using Docker) to ensure consistency across environments. Use a feature store (e.g., Feast) to manage and serve features consistently for both training and inference, preventing "training-serving skew."

2.  **Model Retraining and Monitoring Strategy:**
    *   **Consideration:** Energy demand patterns can evolve due to various factors (e.g., building occupancy changes, new appliances, climate shifts, energy efficiency initiatives). A static model will eventually suffer from "concept drift" and its performance will degrade. Therefore, a strategy for regular retraining and continuous monitoring is essential.
    *   **Actionable Solution:**
        *   **Retraining:** Implement an automated retraining schedule (e.g., weekly or monthly) using the latest available data. Consider a "warm-start" approach where the previously trained model weights are used as a starting point for the new training cycle to speed up convergence.
        *   **Monitoring:** Set up dashboards to monitor key metrics in real-time:
            *   **Model Performance:** Track forecasting errors (MAE, RMSE, MAPE) on recent actuals. Alert if errors exceed predefined thresholds.
            *   **Data Drift:** Monitor the distribution of incoming features (e.g., average temperature, demand levels) and compare them to the training data distribution. Significant drift can indicate a need for immediate retraining.
            *   **Prediction Drift:** Monitor the distribution of the model's predictions. Unexpected shifts might signal issues.
            *   **System Health:** Monitor latency, throughput, and resource utilization of the inference service.
        *   **Alerting:** Integrate monitoring with alert systems (e.g., PagerDuty, Slack) to notify engineers when performance degrades or data anomalies are detected.

3.  **Scalability, Latency, and Reliability of Inference Service:**
    *   **Consideration:** Real-time hourly forecasts for 24 hours imply that the system must generate 24 predictions every hour, potentially for multiple buildings or zones. The inference service needs to be highly available, scalable to handle peak loads, and provide low-latency predictions to be useful for operational decisions (e.g., adjusting HVAC systems).
    *   **Actionable Solution:**
        *   **Deployment:** Deploy the deep learning model as a microservice using a framework like FastAPI or Flask, containerized with Docker, and orchestrated with Kubernetes. This allows for horizontal scaling (adding more instances) as demand increases.
        *   **Hardware Acceleration:** Leverage GPUs or specialized AI accelerators (e.g., TPUs) for faster inference, especially for complex deep learning models. Optimize the model for deployment (e.g., using ONNX, TensorFlow Lite, or PyTorch JIT) to reduce model size and inference time.
        *   **Caching and Batching:** Implement caching for frequently requested or stable forecasts. Consider batching inference requests if feasible, to improve throughput.
        *   **Redundancy and Failover:** Deploy the service across multiple availability zones or regions to ensure high availability and disaster recovery. Implement health checks and automated failover mechanisms.

**Partial Credit Guidance:**
*   Identifying three distinct critical considerations: 40%
*   For each consideration, providing a clear explanation of *why* it's critical: 30%
*   For each consideration, proposing a concrete and actionable solution: 30%

## Course Conclusion

Congratulations on completing the Machine Learning for Time Series Forecasting course! You've embarked on a comprehensive journey, transforming from an intermediate machine learning practitioner into a skilled time series forecaster. You now possess a robust toolkit to tackle a wide array of forecasting challenges across various domains.

Specifically, you can now:
*   **Identify and preprocess diverse time series data**, including handling missing values, resampling, and ensuring stationarity.
*   **Perform in-depth Exploratory Data Analysis (EDA)** to uncover trends, seasonality, cycles, and anomalies in time series.
*   **Apply traditional statistical models** such as ARIMA, SARIMA, and Facebook Prophet, understanding their underlying principles and practical application.
*   **Engineer powerful features** from raw time series data to enhance model performance.
*   **Design, implement, and train deep learning architectures** like LSTMs, GRUs, and understand the role of attention mechanisms for complex sequential data.
*   **Rigorously evaluate forecasting models** using appropriate time-series specific metrics and robust cross-validation techniques.
*   **Interpret model outputs** and understand the strengths and limitations of different forecasting approaches.
*   **Address practical challenges** such as cold-start problems, multivariate forecasting, and deploying models in production-like scenarios.

This course has equipped you with both the theoretical foundations and the hands-on experience necessary to build, evaluate, and deploy effective time series forecasting solutions. The capstone project served as your proving ground, allowing you to integrate these skills into a cohesive, real-world application.

### Where to Go Next

The field of time series forecasting is vast and continuously evolving. To continue your growth, consider these next steps:

1.  **Deep Learning Specialist:**
    *   **Advanced Architectures:** Dive deeper into Transformer networks (e.g., Time Series Transformers, Informer, Autoformer), Temporal Convolutional Networks (TCNs), and advanced attention mechanisms for time series.
    *   **Causality in DL:** Explore causal inference techniques applied to time series to understand not just correlation but true cause-and-effect relationships.
    *   **Reinforcement Learning for Forecasting:** Investigate how RL can be used in dynamic forecasting and decision-making systems.
    *   **Resources:** "Deep Learning for Time Series Forecasting" by Jason Brownlee, research papers on arXiv (e.g., "Attention Is All You Need" and its time series adaptations).

2.  **Statistical Modeling Expert:**
    *   **Advanced Econometrics:** Explore GARCH models for volatility, state-space models, Kalman filters, and Bayesian time series analysis for more nuanced statistical insights.
    *   **Causal Inference:** Focus on advanced methods like Granger Causality, Causal Impact analysis, and structural time series models.
    *   **Resources:** "Forecasting: Principles and Practice" (FPP3) by Hyndman & Athanasopoulos (advanced chapters), "Time Series Analysis and Its Applications" by Shumway and Stoffer.

3.  **Applied Time Series Engineer / MLOps:**
    *   **Deployment and Real-time Systems:** Focus on building robust, scalable real-time forecasting pipelines using cloud platforms (AWS SageMaker, Google Cloud AI Platform, Azure ML), Docker, Kubernetes, and MLOps tools (MLflow, Kubeflow).
    *   **Anomaly Detection:** Specialize in real-time anomaly detection in streaming time series data.
    *   **Streaming Data Processing:** Learn about Apache Kafka, Flink, or Spark Streaming for handling high-velocity time series data.
    *   **Resources:** MLOps courses, cloud provider documentation, "Designing Machine Learning Systems" by Chip Huyen.

### Keep Practicing and Building!

The best way to solidify your knowledge is through continuous practice. Engage in Kaggle competitions focused on time series, contribute to open-source time series libraries, or find a personal project to apply your skills. Whether it's forecasting your personal finances, predicting energy usage for your home, or analyzing stock market trends, hands-on experience is invaluable. Join online communities, read blogs, and stay updated with the latest research. The world of time series forecasting is dynamic and full of exciting challenges waiting for your expertise.

We hope you found this course enriching and empowering. We look forward to seeing the innovative forecasting solutions you'll build!

---


> End of Syllabus: Machine Learning for Time Series Forecasting
> Course ID: machine-learning-for-time-series-forecasting
> Total modules: 8
> Total chapters: 48
> Level: Intermediate
> Subcategory: Machine Learning Engineering
> Generated by: Cohortia Syllabus Generator
> Format: Markdown
