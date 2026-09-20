---
course_title: Deep Learning for Time Series Forecasting
course_id: deep-learning-for-time-series-forecasting
provider: Cohortia
original_reference: Jason Brownlee / Machine Learning Mastery
platform: Cohortia
level: Intermediate
type: Course
duration: Self-paced
cost: Included with Cohortia
url: Cohortia course page (original reference: (URL not verified))
certification: Cohortia Certificate of Completion
category: Artificial Intelligence
subcategory: Deep Learning & Neural Networks
skills: MLPs, CNNs, LSTMs for time series, multivariate forecasting
source_catalog: docs/artificial-intelligence/catalog-courses-by-subcategory.json
ownership_note: Cohortia curates and rebuilds this content, providing a unique learning experience. We acknowledge the foundational work from various sources, including Machine Learning Mastery, and do not claim sole ownership of third-party source material.
---

## Course Overview

Welcome to "Deep Learning for Time Series Forecasting," a comprehensive Cohortia course designed to equip you with the advanced skills needed to tackle complex time series prediction problems using the power of deep neural networks. This course moves beyond traditional statistical methods, diving deep into how modern deep learning architectures can capture intricate patterns, trends, and seasonalities inherent in sequential data. We will explore a spectrum of models, from foundational Multilayer Perceptrons (MLPs) to sophisticated Recurrent Neural Networks (RNNs) like LSTMs and GRUs, and even delve into the application of Convolutional Neural Networks (CNNs) and advanced encoder-decoder architectures for time series tasks.

Throughout this learning journey, you will gain hands-on experience with practical data preparation techniques, understanding the unique challenges and transformations required for time series data before it can be fed into deep learning models. We will cover univariate forecasting, where a single variable is predicted, and progressively advance to multivariate forecasting, where multiple interacting time series are modeled simultaneously. The course emphasizes a practical, code-centric approach, utilizing popular deep learning frameworks to implement and evaluate various models. You'll learn to structure your time series problems, design appropriate network architectures, train models effectively, and rigorously assess their performance.

By the end of this course, you will not only understand the theoretical underpinnings of deep learning for time series but also possess the practical expertise to apply these techniques to real-world datasets. Whether you are forecasting stock prices, energy consumption, weather patterns, or sales figures, this course provides the tools and methodologies to build robust and accurate predictive models. Prepare to transform your approach to time series analysis and unlock new capabilities in data-driven prediction.

### Learning Outcomes

Upon successful completion of this course, you will be able to:

*   Formulate time series forecasting problems for deep learning, distinguishing between univariate and multivariate scenarios.
*   Implement various data preparation techniques specific to time series, including scaling, differencing, and sequence framing.
*   Design and train Multilayer Perceptron (MLP) models for basic time series forecasting tasks.
*   Apply Convolutional Neural Networks (CNNs) to extract features and forecast time series data effectively.
*   Construct and optimize Recurrent Neural Networks (RNNs), specifically LSTMs and GRUs, for sequential data modeling.
*   Utilize advanced deep learning architectures like Encoder-Decoder models with attention for complex time series dependencies.
*   Develop and evaluate deep learning models for multivariate time series forecasting, considering inter-series relationships.
*   Rigorously evaluate the performance of deep learning time series models using appropriate metrics and diagnostic plots.
*   Implement strategies for hyperparameter tuning and model selection to improve forecasting accuracy.
*   Understand common pitfalls and best practices in deploying deep learning time series models in production environments.

## Syllabus Structure

| Module # | Theme | Chapters |
|----------|-------|----------|
| 1 | Foundations of Time Series & Deep Learning | 4 |
| 2 | Preparing Time Series Data for Deep Learning | 5 |
| 3 | MLPs for Univariate Time Series Forecasting | 5 |
| 4 | CNNs for Univariate Time Series Forecasting | 6 |
| 5 | LSTMs and GRUs for Univariate Time Series | 6 |
| 6 | Encoder-Decoder & Attention Models for Time Series | 7 |
| 7 | Multivariate Time Series Forecasting with Deep Learning | 7 |
| 8 | Advanced Topics & Deployment Strategies | 8 |

Total chapters: 48
---

## Module 1: Foundations of Time Series & Deep Learning
**Goal:** Establish a strong understanding of time series data characteristics, traditional forecasting methods, and the fundamental concepts of deep learning relevant to sequential data.

## Chapter 1.1 — Introduction to Time Series Data

#### Learning objectives
*   Define time series data and identify its unique characteristics, such as temporal dependence, trend, and seasonality.
*   Differentiate between univariate and multivariate time series, providing real-world examples for each.
*   Understand common challenges in time series data collection and initial preparation, including missing values and irregular sampling.
*   Utilize Python libraries like Pandas and Matplotlib to load, inspect, and visualize time series datasets.

#### Detailed lesson content
Welcome to the fascinating world of time series forecasting! At its core, a time series is a sequence of data points indexed in time order. Unlike standard tabular data where observations are often assumed to be independent, time series data inherently possesses a temporal dependency. This means that past values directly influence future values, making the order of observations crucial. Imagine tracking daily stock prices, hourly temperature readings, or monthly sales figures – these are all classic examples of time series. The defining characteristic is this explicit time component, which dictates that observations are not independent and identically distributed (i.i.d.), a common assumption in many other machine learning tasks.

Understanding the inherent components of a time series is vital for effective analysis and forecasting. We typically decompose a time series into several key elements: a **trend**, which represents the long-term increase or decrease in the data; **seasonality**, which refers to predictable, repeating patterns or cycles within a fixed period (e.g., daily, weekly, monthly, yearly); and **residuals** (or noise), which are the irregular fluctuations left after accounting for trend and seasonality. For instance, retail sales often exhibit an upward trend over years, strong yearly seasonality around holidays, and perhaps weekly seasonality with higher sales on weekends. Recognizing these components helps us choose appropriate models and interpret their outputs. A common mistake beginners make is treating time series data like any other dataset, ignoring its temporal structure, which can lead to misleading models and poor forecasts. Always start by visualizing your data to identify these patterns.

Time series can be broadly categorized into **univariate** and **multivariate**. A univariate time series involves a single variable observed over time, such as the daily closing price of a single stock. In contrast, a multivariate time series involves multiple variables observed simultaneously over time. For example, tracking the daily closing prices of several different stocks, or monitoring various sensor readings (temperature, humidity, pressure) from a weather station over time, constitutes a multivariate time series. Deep learning models, particularly those designed for sequential data, excel at capturing complex relationships within multivariate time series, allowing us to leverage rich contextual information for more accurate predictions.

Working with real-world time series data often presents several practical challenges. One of the most common issues is **missing data**. Sensors might fail, data might be lost during transmission, or human error could lead to gaps in records. Deciding how to handle missing values – whether through imputation (e.g., forward-fill, backward-fill, interpolation, or more sophisticated methods like K-Nearest Neighbors imputation) or by simply dropping affected periods – is a critical preprocessing step. Another challenge is **irregular sampling**, where observations are not taken at fixed intervals. While some deep learning architectures can handle irregular sequences, it often simplifies modeling to resample the data to a regular frequency (e.g., converting irregularly sampled sensor data to hourly averages). Furthermore, ensuring data quality, handling outliers, and dealing with varying scales across different features in a multivariate series are crucial steps before feeding data into any deep learning model.

Let's illustrate with a simple Python example using Pandas and Matplotlib to load and visualize a univariate time series. We'll simulate some data to demonstrate trend and seasonality.

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Simulate a time series dataset
np.random.seed(42)
dates = pd.date_range(start='2020-01-01', periods=100, freq='D')
trend = np.linspace(0, 20, 100)
seasonality = 10 * np.sin(np.linspace(0, 3 * np.pi, 100))
noise = np.random.normal(0, 1.5, 100)
data = trend + seasonality + noise + 50

# Create a Pandas Series
time_series = pd.Series(data, index=dates)

# Display the first few entries
print("First 5 entries of the time series:")
print(time_series.head())

# Plot the time series
plt.figure(figsize=(12, 6))
plt.plot(time_series)
plt.title('Simulated Time Series Data with Trend and Seasonality')
plt.xlabel('Date')
plt.ylabel('Value')
plt.grid(True)
plt.show()

# Check for missing values
print("\nMissing values in the time series:")
print(time_series.isnull().sum())

# Simulate a missing value
time_series_with_missing = time_series.copy()
time_series_with_missing.iloc[50:55] = np.nan
print("\nMissing values after simulating gaps:")
print(time_series_with_missing.isnull().sum())

# Example of forward-fill imputation
time_series_imputed_ffill = time_series_with_missing.fillna(method='ffill')
print("\nMissing values after forward-fill imputation:")
print(time_series_imputed_ffill.isnull().sum())
```
This code snippet demonstrates how to create a `pd.Series` with a datetime index, which is the standard way to represent time series in Python. We then plot it to visually inspect its characteristics. The simulation includes a linear trend, a sinusoidal seasonality, and some random noise, mirroring real-world data patterns. We also show how to check for and handle missing values using a simple `fillna(method='ffill')` strategy. Always remember that the choice of imputation method can significantly impact your model's performance, so it's crucial to understand the implications of each approach. For instance, `ffill` assumes the last known value persists, which might not be suitable for highly volatile data.

#### Key concepts
*   **Time Series Data:** A sequence of data points indexed in time order, where the temporal order is significant.
*   **Temporal Dependence:** The characteristic of time series data where past observations influence future observations.
*   **Trend:** The long-term increase or decrease in the data over time.
*   **Seasonality:** Predictable, repeating patterns or cycles in the data that occur over a fixed period (e.g., daily, weekly, yearly).
*   **Residuals (Noise):** The irregular fluctuations in a time series after accounting for trend and seasonality.
*   **Univariate Time Series:** A time series consisting of observations of a single variable over time.
*   **Multivariate Time Series:** A time series consisting of observations of multiple variables simultaneously over time.
*   **Missing Data:** Gaps or absent values in a time series dataset, requiring imputation or handling strategies.
*   **Irregular Sampling:** Observations in a time series that are not collected at fixed, consistent time intervals.

#### Hands-on activity
**Activity: Analyze and Visualize a Real-World Time Series**

1.  **Dataset:** Download the "Daily Minimum Temperatures in Melbourne" dataset. You can find it easily by searching for "daily-minimum-temperatures-in-melbourne.csv".
2.  **Load Data:** Load the CSV file into a Pandas DataFrame. Ensure the 'Date' column is parsed as datetime objects and set as the index.
3.  **Inspect Data:**
    *   Print the first and last 5 rows.
    *   Check the data types of columns.
    *   Identify and count any missing values.
4.  **Visualize:**
    *   Plot the entire time series to observe overall trends and seasonality.
    *   Plot a specific year (e.g., 1985) to get a closer look at yearly seasonality.
    *   Discuss your observations regarding trend, seasonality, and any anomalies.

```python
import pandas as pd
import matplotlib.pyplot as plt

# 1. Download the dataset and place it in the same directory as your script
#    (e.g., daily-minimum-temperatures-in-melbourne.csv)

# 2. Load Data
try:
    df = pd.read_csv('daily-minimum-temperatures-in-melbourne.csv',
                     header=0, index_col=0, parse_dates=True, squeeze=True)
    # The dataset might load as a Series or DataFrame depending on pandas version and content.
    # Ensure it's a Series for simpler plotting if it's univariate.
    if isinstance(df, pd.DataFrame):
        df = df.iloc[:, 0] # Assuming the first column is the temperature
except FileNotFoundError:
    print("Error: 'daily-minimum-temperatures-in-melbourne.csv' not found.")
    print("Please download the dataset and place it in the correct directory.")
    exit()

# 3. Inspect Data
print("First 5 rows:\n", df.head())
print("\nLast 5 rows:\n", df.tail())
print("\nData type of the series:", df.dtype)
print("\nNumber of missing values:", df.isnull().sum())

# 4. Visualize
plt.figure(figsize=(14, 7))
plt.plot(df)
plt.title('Daily Minimum Temperatures in Melbourne (1981-1990)')
plt.xlabel('Date')
plt.ylabel('Temperature (°C)')
plt.grid(True)
plt.show()

# Plot a specific year (e.g., 1985)
plt.figure(figsize=(12, 6))
df['1985'].plot()
plt.title('Daily Minimum Temperatures in Melbourne - 1985')
plt.xlabel('Date')
plt.ylabel('Temperature (°C)')
plt.grid(True)
plt.show()

# Discussion points:
# What kind of trend do you observe over the entire period?
# Is there clear seasonality? If so, what is its period?
# Are there any obvious outliers or sudden shifts?
```

#### Assessment idea
1.  **Question:** You are given a dataset containing the hourly energy consumption of a building, along with the outdoor temperature, humidity, and occupancy levels, all recorded over several months. How would you classify this dataset in terms of time series type (univariate/multivariate) and what are at least two key characteristics you would expect to find in its energy consumption data?
    **Correct Answer:** This dataset represents a **multivariate time series** because it includes multiple variables (energy consumption, temperature, humidity, occupancy) observed over time. Two key characteristics expected in its energy consumption data are:
    *   **Seasonality:** Energy consumption often exhibits daily seasonality (e.g., higher during working hours, lower at night) and weekly seasonality (e.g., lower on weekends). It might also show yearly seasonality related to heating/cooling needs.
    *   **Trend:** Over several months or years, there might be a subtle upward or downward trend in energy consumption due to factors like building efficiency improvements, changes in usage patterns, or expansion.
    *   **Temporal Dependence:** The energy consumption at any given hour is highly dependent on the consumption in previous hours, as well as the current and recent environmental factors.

2.  **Question:** Consider a time series of weekly sales data for a retail store. If you notice a sudden, sharp dip in sales for a single week, followed by a quick recovery to previous levels, what is the most likely classification for this observation, and how might you handle it before training a deep learning model?
    **Correct Answer:** This observation is most likely an **outlier** or an **anomaly**. A sudden dip followed by a quick recovery suggests it's an unusual event that deviates significantly from the typical pattern, rather than a change in trend or seasonality. To handle this before training a deep learning model, several strategies could be employed:
    *   **Removal:** If the outlier is clearly an error and not representative, it could be removed (though this creates a missing value).
    *   **Imputation:** Replace the outlier with an imputed value, such as the median of surrounding weeks, the value from the same week in previous years, or a value predicted by a robust statistical model.
    *   **Transformation:** Apply a robust scaling method that is less sensitive to outliers (e.g., `RobustScaler` from scikit-learn) or a log transformation if the data is positively skewed.
    *   **Domain Knowledge:** Investigate the cause of the dip (e.g., store closure, data entry error, a major local event) to inform the best handling strategy. For deep learning, robust imputation is often preferred over removal to maintain sequence length.

#### AI generation note
Create a 12-minute interactive video lesson. Begin with an animated explanation of time series data characteristics (trend, seasonality, noise) using a dynamic line graph that highlights each component. Transition to a live coding demo in a Jupyter Notebook, showing how to load the simulated time series data using Pandas, check for missing values, and visualize it with Matplotlib. Include a split-screen view showing the code on the left and the generated plots on the right. Emphasize the `pd.to_datetime` and `set_index` functions. Conclude with a short interactive quiz asking learners to identify trend and seasonality from a new plot. Ensure captions and high-contrast visuals for accessibility.

---

## Chapter 1.2 — Traditional Time Series Forecasting Methods

#### Learning objectives
*   Explain the fundamental principles of naive forecasting, simple moving average (SMA), and exponential smoothing (ETS) methods.
*   Understand the core concepts of Autoregressive (AR), Moving Average (MA), and Integrated (I) components in ARIMA models.
*   Identify the strengths and limitations of traditional statistical methods when applied to complex, non-linear time series patterns.
*   Implement and evaluate a basic ARIMA model using Python's `statsmodels` library on a univariate time series.

#### Detailed lesson content
Before diving into the power of deep learning, it's crucial to understand the foundational traditional methods for time series forecasting. These methods, while simpler, provide a strong baseline and often offer valuable insights into the data's structure. We'll start with the most basic: **Naive Forecasting**. The simplest form of naive forecasting assumes that the next value will be the same as the last observed value. For seasonal data, a seasonal naive forecast predicts the next value to be the same as the value from the previous season (e.g., next Monday's sales will be the same as last Monday's sales). While seemingly simplistic, naive forecasts are surprisingly hard to beat for certain types of data and serve as an excellent benchmark. If a more complex model cannot outperform a naive forecast, it suggests the model isn't truly capturing underlying patterns.

Moving beyond naive approaches, the **Simple Moving Average (SMA)** forecast predicts the next value based on the average of a fixed number of preceding observations. For example, a 3-period SMA would average the last three data points. This method helps to smooth out short-term fluctuations and highlight longer-term trends. However, SMA has a significant drawback: it gives equal weight to all observations within its window and completely discards observations outside the window, making it slow to react to recent changes. A common mistake is to use SMA for data with strong trends, as it will always lag behind the actual values.

To address the limitations of SMA, **Exponential Smoothing (ETS)** methods were developed. These methods assign exponentially decreasing weights to older observations, meaning more recent data points have a greater impact on the forecast. The simplest form is Simple Exponential Smoothing (SES), suitable for data without a trend or seasonality. More advanced ETS models, like Holt's Linear Trend method, incorporate a trend component, and Holt-Winters' Seasonal method further adds a seasonal component. Holt-Winters is particularly powerful for data exhibiting both trend and seasonality, making it a robust traditional choice. The core idea is to continuously update estimates for level, trend, and seasonality based on new observations, giving more weight to recent data.

For more complex time series, especially those exhibiting autocorrelation (the correlation of a time series with a lagged version of itself), **ARIMA (Autoregressive Integrated Moving Average)** models are a cornerstone of traditional forecasting. ARIMA models are defined by three components:
*   **AR (Autoregressive) (p):** This component indicates that the current value depends linearly on its own previous values. It's like a linear regression where the target variable is a lagged version of itself.
*   **I (Integrated) (d):** This component involves differencing the raw observations to make the time series stationary (i.e., removing trend and seasonality). Differencing means subtracting the previous observation from the current one. The `d` parameter specifies the number of times differencing is applied.
*   **MA (Moving Average) (q):** This component indicates that the current value depends on the residual error terms from a moving average model applied to lagged observations. It captures the dependency between an observation and a residual error from a moving average model applied to lagged observations.

A seasonal variant, **SARIMA (Seasonal Autoregressive Integrated Moving Average)**, extends ARIMA to handle time series with seasonal components. It adds seasonal AR, I, and MA terms, along with a seasonal period parameter. While powerful, ARIMA/SARIMA models require the time series to be stationary (or made stationary through differencing), and selecting the appropriate `p`, `d`, and `q` parameters (and their seasonal counterparts) often involves a process of trial and error, using tools like autocorrelation function (ACF) and partial autocorrelation function (PACF) plots, or automated parameter selection algorithms (e.g., `auto_arima` from `pmdarima`).

Here's an example of implementing a simple ARIMA model using `statsmodels` in Python. We'll use the simulated data from the previous chapter.

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from statsmodels.tsa.arima.model import ARIMA
from sklearn.metrics import mean_squared_error
from math import sqrt
import warnings

warnings.filterwarnings("ignore") # Suppress warnings from statsmodels

# Re-simulate the time series data for consistency
np.random.seed(42)
dates = pd.date_range(start='2020-01-01', periods=100, freq='D')
trend = np.linspace(0, 20, 100)
seasonality = 10 * np.sin(np.linspace(0, 3 * np.pi, 100))
noise = np.random.normal(0, 1.5, 100)
data = trend + seasonality + noise + 50
time_series = pd.Series(data, index=dates)

# Split data into training and testing sets
train_size = int(len(time_series) * 0.8)
train, test = time_series[0:train_size], time_series[train_size:]

print(f"Training set size: {len(train)}")
print(f"Test set size: {len(test)}")

# Fit an ARIMA model
# For this simulated data, let's try a simple (5,1,0) ARIMA model.
# (5,1,0) means AR(5), differencing of order 1, MA(0)
# Choosing p, d, q is often iterative and based on ACF/PACF plots or auto_arima.
# For simplicity, we'll pick a common starting point.
try:
    model = ARIMA(train, order=(5,1,0)) # (p,d,q)
    model_fit = model.fit()
    print(model_fit.summary())

    # Make predictions
    start_index = len(train)
    end_index = len(time_series) - 1
    forecast = model_fit.predict(start=start_index, end=end_index, dynamic=False)

    # Align forecast index with test set index
    forecast.index = test.index

    # Evaluate the model
    rmse = sqrt(mean_squared_error(test, forecast))
    print(f"\nTest RMSE: {rmse:.3f}")

    # Plot results
    plt.figure(figsize=(14, 7))
    plt.plot(train.index, train, label='Training Data')
    plt.plot(test.index, test, label='Actual Test Data')
    plt.plot(forecast.index, forecast, color='red', label='ARIMA Forecast')
    plt.title('ARIMA Forecasting Results')
    plt.xlabel('Date')
    plt.ylabel('Value')
    plt.legend()
    plt.grid(True)
    plt.show()

except Exception as e:
    print(f"An error occurred during ARIMA model fitting or prediction: {e}")
    print("This might be due to non-stationary data or incorrect order parameters.")
    print("Consider using 'auto_arima' for automated parameter selection.")

```
The code demonstrates fitting an ARIMA model. A critical safety note here is that ARIMA models assume stationarity. If your data has a strong trend or seasonality, you might need to difference it (`d` parameter) or use a SARIMA model. The `order=(p,d,q)` tuple is crucial, and selecting optimal values often requires careful analysis of ACF and PACF plots, which show the correlation of the time series with its own lagged values. An incorrect `d` value can lead to non-stationary residuals or over-differencing, both of which degrade model performance. While traditional methods are powerful, they often struggle with highly non-linear relationships, multiple interacting features (in multivariate series), and very long sequences, which is where deep learning shines. They also typically require careful feature engineering and stationarity checks, steps that deep learning models can often automate.

#### Key concepts
*   **Naive Forecasting:** A simple forecasting method where the next value is predicted to be the same as the last observed value (or the value from the previous season).
*   **Simple Moving Average (SMA):** A forecasting method that predicts the next value as the average of a fixed number of preceding observations, smoothing out short-term fluctuations.
*   **Exponential Smoothing (ETS):** A family of forecasting methods that assign exponentially decreasing weights to older observations, giving more importance to recent data.
*   **ARIMA (Autoregressive Integrated Moving Average):** A statistical model for time series forecasting that combines autoregressive (AR), differencing (I), and moving average (MA) components.
*   **AR (Autoregressive) component (p):** Models the dependency between an observation and a number of lagged observations.
*   **I (Integrated) component (d):** Involves differencing observations to make the time series stationary, removing trends or seasonality.
*   **MA (Moving Average) component (q):** Models the dependency between an observation and a residual error from a moving average model applied to lagged observations.
*   **SARIMA (Seasonal Autoregressive Integrated Moving Average):** An extension of ARIMA that explicitly handles seasonal components in time series data.
*   **Stationarity:** A property of a time series where its statistical properties (mean, variance, autocorrelation) do not change over time.

#### Hands-on activity
**Activity: Implement and Evaluate Holt-Winters Exponential Smoothing**

1.  **Dataset:** Use the "Daily Minimum Temperatures in Melbourne" dataset from the previous activity.
2.  **Split Data:** Divide the dataset into training (first 80%) and testing (last 20%) sets.
3.  **Implement Holt-Winters:**
    *   Use `statsmodels.tsa.api.ExponentialSmoothing` to fit a Holt-Winters model.
    *   Experiment with different parameters for `seasonal` (e.g., 'add', 'mul') and `seasonal_periods` (e.g., 7 for weekly, 365 for yearly, though daily temp might be complex). Given daily data, a `seasonal_periods` of 7 (weekly cycle) is a good starting point.
    *   Consider `trend='add'` or `trend='mul'`.
4.  **Forecast:** Generate forecasts for the test set period.
5.  **Evaluate:** Calculate the Root Mean Squared Error (RMSE) between the forecasts and the actual test data.
6.  **Visualize:** Plot the training data, actual test data, and the Holt-Winters forecast on the same graph.

```python
import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.api import ExponentialSmoothing
from sklearn.metrics import mean_squared_error
from math import sqrt

# Load the dataset (ensure it's in the same directory)
try:
    df = pd.read_csv('daily-minimum-temperatures-in-melbourne.csv',
                     header=0, index_col=0, parse_dates=True, squeeze=True)
    if isinstance(df, pd.DataFrame):
        df = df.iloc[:, 0]
except FileNotFoundError:
    print("Error: 'daily-minimum-temperatures-in-melbourne.csv' not found.")
    exit()

# Split data
train_size = int(len(df) * 0.8)
train, test = df[0:train_size], df[train_size:]

print(f"Training set size: {len(train)}")
print(f"Test set size: {len(test)}")

# Implement Holt-Winters Exponential Smoothing
# We'll assume additive trend and additive seasonality for temperature data
# Seasonal period of 7 for weekly seasonality, as temperatures often have weekly patterns
try:
    # Fit the model
    # Use 'add' for both trend and seasonal components if the magnitude of
    # fluctuations doesn't change with the level of the series.
    # Use 'mul' if the magnitude of fluctuations increases with the level.
    # For temperature, 'add' is often a reasonable first choice.
    model = ExponentialSmoothing(train, trend='add', seasonal='add', seasonal_periods=7)
    model_fit = model.fit()

    # Make predictions
    forecast = model_fit.forecast(len(test))

    # Evaluate the model
    rmse = sqrt(mean_squared_error(test, forecast))
    print(f"\nHolt-Winters Test RMSE: {rmse:.3f}")

    # Plot results
    plt.figure(figsize=(14, 7))
    plt.plot(train.index, train, label='Training Data')
    plt.plot(test.index, test, label='Actual Test Data')
    plt.plot(forecast.index, forecast, color='red', label='Holt-Winters Forecast')
    plt.title('Holt-Winters Exponential Smoothing Forecasting Results')
    plt.xlabel('Date')
    plt.ylabel('Temperature (°C)')
    plt.legend()
    plt.grid(True)
    plt.show()

except Exception as e:
    print(f"An error occurred during Holt-Winters model fitting or prediction: {e}")
    print("Ensure your data is suitable for the chosen trend and seasonal components.")

```

#### Assessment idea
1.  **Question:** You are tasked with forecasting the number of daily visitors to a popular tourist attraction. The data shows a clear upward trend over the years and consistent spikes during weekends and public holidays. Which traditional forecasting method would be most suitable as a baseline, and why would Simple Moving Average (SMA) likely be a poor choice?
    **Correct Answer:** The **Holt-Winters Exponential Smoothing** method would be most suitable as a baseline. This is because Holt-Winters can explicitly model both a trend component (to capture the upward trend over years) and a seasonal component (to capture the consistent spikes during weekends/holidays). SMA would likely be a poor choice because:
    *   **Lagging Trend:** SMA always lags behind a strong trend, as it averages past values and doesn't explicitly account for the direction of change.
    *   **Ignoring Seasonality:** SMA does not inherently capture or model seasonal patterns. While you could use a seasonal moving average, it's less sophisticated than Holt-Winters for explicitly modeling and forecasting seasonality.

2.  **Question:** A financial analyst wants to forecast the daily volatility of a stock, which is known to be highly non-linear and influenced by numerous external factors. They suggest using an ARIMA model. What are two significant limitations of ARIMA that might make it less effective for this particular task compared to potentially more advanced methods?
    **Correct Answer:** Two significant limitations of ARIMA for forecasting highly non-linear stock volatility influenced by numerous external factors are:
    *   **Linearity Assumption:** ARIMA models are fundamentally linear models. They assume that the relationships between past values and future values are linear. Stock volatility, however, is often highly non-linear, exhibiting complex, chaotic dynamics that linear models struggle to capture.
    *   **Univariate Nature (primarily):** While extensions exist (like ARIMAX for exogenous variables), ARIMA is primarily a univariate model. It struggles to effectively incorporate and model the complex, interacting influences of "numerous external factors" (e.g., news sentiment, economic indicators, global events) in a sophisticated, non-linear way. Deep learning models, on the other hand, are designed to handle multiple input features and learn non-linear relationships automatically.

#### AI generation note
Produce a 15-minute mixed-media lesson. Start with an animated sequence explaining Naive, SMA, and ETS, using simple line graphs to illustrate how each method generates forecasts and their typical output. Transition to a live coding session in a Jupyter Notebook demonstrating the implementation of an ARIMA model using `statsmodels` on the simulated time series. Focus on the `ARIMA` class, the `fit()` method, and `predict()` for forecasting. Show the `model_fit.summary()` output and explain key statistics like p-values. Emphasize the importance of `order=(p,d,q)` and the visual interpretation of the forecast plot against actual data. Include a common mistake section on choosing `d` (differencing) and its impact on stationarity. End with a reflection prompt asking learners to consider when traditional methods might still be preferred over deep learning.

---

## Chapter 1.3 — Introduction to Deep Learning for Sequential Data

#### Learning objectives
*   Articulate the fundamental differences and advantages of deep learning over traditional methods for time series forecasting.
*   Review the basic building blocks of neural networks, including neurons, layers, activation functions, loss functions, and optimizers.
*   Understand how deep learning models can automatically learn complex features and non-linear relationships from sequential data.
*   Grasp the concept of sequence processing and the need for specialized architectures for time series data.

#### Detailed lesson content
Having explored traditional time series forecasting, we now pivot to the exciting realm of deep learning. Why do we need deep learning for time series? While classical methods like ARIMA and ETS have proven effective for certain types of data, they often struggle with the increasing complexity, volume, and non-linearity prevalent in modern datasets. Deep learning, a subset of machine learning inspired by the structure and function of the human brain, offers significant advantages. Firstly, deep learning models, particularly those with multiple layers, can automatically learn intricate features from raw data, eliminating the need for manual feature engineering that is often time-consuming and domain-specific in traditional methods. This automatic feature extraction is a game-changer for complex time series where hidden patterns might be difficult for humans to identify.

A core strength of deep learning is its ability to model highly **non-linear relationships**. Traditional models are often constrained by linear assumptions, which fall short when dealing with the chaotic and dynamic nature of many real-world time series, such as stock prices, weather patterns, or sensor data from complex systems. Deep neural networks, with their stacked layers and non-linear activation functions, can approximate virtually any complex function, making them incredibly powerful for capturing these intricate dependencies. Furthermore, deep learning models are generally more scalable to large datasets and can leverage powerful hardware like GPUs for accelerated training, which is crucial for big data time series applications.

Let's quickly review the fundamental building blocks of any neural network. At its heart is the **neuron** (or perceptron), a mathematical function that takes one or more inputs, applies a weight to each input, sums them up, adds a bias, and then passes the result through an **activation function**. Common activation functions include ReLU (Rectified Linear Unit), Sigmoid, and Tanh, each introducing non-linearity to the network, allowing it to learn complex mappings. These neurons are organized into **layers**: an input layer, one or more hidden layers, and an output layer. The "deep" in deep learning refers to the presence of multiple hidden layers, enabling the network to learn hierarchical representations of the data. For instance, in an image, early layers might detect edges, while later layers combine these to detect shapes and objects. In time series, early layers might detect short-term patterns, while deeper layers combine these into longer-term trends or seasonal components.

The learning process in a neural network involves two main components: a **loss function** and an **optimizer**. The loss function (e.g., Mean Squared Error for regression, Cross-Entropy for classification) quantifies the difference between the model's predictions and the actual target values. The optimizer (e.g., Stochastic Gradient Descent (SGD), Adam, RMSprop) then adjusts the network's weights and biases in a way that minimizes this loss function. This iterative process, known as **backpropagation**, is how the network learns from its errors.

For time series data, the concept of **sequence processing** is paramount. Standard feedforward neural networks (like Multi-Layer Perceptrons or MLPs) treat inputs as independent, which directly contradicts the temporal dependence inherent in time series. Therefore, specialized deep learning architectures are required to effectively process sequential data. These architectures, such as Recurrent Neural Networks (RNNs), Long Short-Term Memory (LSTMs), Gated Recurrent Units (GRUs), and Convolutional Neural Networks (CNNs) adapted for sequences, are designed to maintain and leverage the order of observations. They have mechanisms to "remember" past information and use it to inform future predictions, making them ideal for tasks like time series forecasting.

Let's illustrate with a very simple Multi-Layer Perceptron (MLP) in PyTorch. While MLPs aren't ideal for raw time series due to their lack of explicit sequence handling, understanding their basic structure is a prerequisite. We'll use a simple regression task to predict a value from a few input features, which can be thought of as a simplified step towards time series, where past values become input features.

```python
import torch
import torch.nn as nn
import torch.optim as optim
import numpy as np
import matplotlib.pyplot as plt

# 1. Simulate some simple data: y = 2x + 1 + noise
np.random.seed(0)
X_np = np.random.rand(100, 1) * 10 # 100 samples, 1 feature
y_np = 2 * X_np + 1 + np.random.randn(100, 1) * 2

# Convert to PyTorch tensors
X = torch.tensor(X_np, dtype=torch.float32)
y = torch.tensor(y_np, dtype=torch.float32)

# 2. Define a simple MLP model
class SimpleMLP(nn.Module):
    def __init__(self):
        super(SimpleMLP, self).__init__()
        self.layer1 = nn.Linear(1, 10) # Input feature (1) to hidden layer (10 neurons)
        self.relu = nn.ReLU()          # Activation function
        self.layer2 = nn.Linear(10, 1) # Hidden layer (10 neurons) to output (1 neuron)

    def forward(self, x):
        x = self.layer1(x)
        x = self.relu(x)
        x = self.layer2(x)
        return x

model = SimpleMLP()
print("Model Architecture:")
print(model)

# 3. Define Loss Function and Optimizer
criterion = nn.MSELoss() # Mean Squared Error for regression
optimizer = optim.Adam(model.parameters(), lr=0.01) # Adam optimizer

# 4. Train the model
num_epochs = 1000
for epoch in range(num_epochs):
    # Forward pass
    outputs = model(X)
    loss = criterion(outputs, y)

    # Backward and optimize
    optimizer.zero_grad() # Clear gradients
    loss.backward()       # Compute gradients
    optimizer.step()      # Update weights

    if (epoch+1) % 100 == 0:
        print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}')

# 5. Make predictions and visualize
model.eval() # Set model to evaluation mode
with torch.no_grad(): # Disable gradient calculation
    predicted = model(X).numpy()

plt.figure(figsize=(10, 6))
plt.scatter(X_np, y_np, label='Actual Data')
plt.plot(X_np, predicted, color='red', label='MLP Prediction')
plt.title('Simple MLP Regression')
plt.xlabel('X')
plt.ylabel('y')
plt.legend()
plt.grid(True)
plt.show()
```
This example shows a basic MLP in PyTorch for a simple regression task. Notice how we define the layers, activation functions, loss function, and optimizer. While `SimpleMLP` works for this independent data, it lacks the memory to handle sequences where the order of `X` values matters. This sets the stage for understanding why we need more specialized architectures like LSTMs or CNNs for time series, which we will explore in subsequent modules. A common mistake here is trying to feed raw, un-windowed time series data directly into an MLP, which will treat each time step as an independent feature, destroying the temporal context.

#### Key concepts
*   **Deep Learning:** A subset of machine learning that uses multi-layered neural networks to learn complex patterns from data.
*   **Non-linear Relationships:** Complex dependencies in data that cannot be accurately modeled by linear functions, which deep learning excels at capturing.
*   **Automatic Feature Extraction:** The ability of deep learning models to automatically discover and learn relevant features from raw input data, reducing the need for manual feature engineering.
*   **Neuron (Perceptron):** The fundamental unit of a neural network, which takes inputs, applies weights and a bias, and passes the result through an activation function.
*   **Activation Function:** A non-linear function applied to the output of a neuron, introducing non-linearity into the network (e.g., ReLU, Sigmoid, Tanh).
*   **Layers:** Organized collections of neurons in a neural network (input, hidden, output layers).
*   **Loss Function:** A mathematical function that quantifies the error between a model's predictions and the actual target values.
*   **Optimizer:** An algorithm (e.g., SGD, Adam) used to adjust the weights and biases of a neural network to minimize the loss function.
*   **Backpropagation:** The algorithm used to efficiently calculate the gradients of the loss function with respect to the network's weights, enabling weight updates during training.
*   **Sequence Processing:** The specific handling of data where the order of observations is crucial, requiring specialized deep learning architectures.

#### Hands-on activity
**Activity: Build and Train a Basic MLP for a Non-Sequential Regression Task**

1.  **Generate Data:** Create a dataset where `y` is a polynomial function of `x` (e.g., `y = x^2 + 5x + 3 + noise`). This introduces non-linearity that an MLP can learn.
    *   Generate 200 `x` values between -10 and 10.
    *   Calculate corresponding `y` values.
2.  **Define MLP:** Create a PyTorch `nn.Module` for an MLP with at least two hidden layers and ReLU activation functions.
    *   Input layer: 1 neuron (for `x`).
    *   Hidden layers: e.g., 2 hidden layers with 32 and 16 neurons respectively.
    *   Output layer: 1 neuron (for `y`).
3.  **Train Model:**
    *   Use `nn.MSELoss` as the loss function.
    *   Use `optim.Adam` as the optimizer.
    *   Train for 500-1000 epochs, printing the loss periodically.
4.  **Visualize Results:** Plot the original data points and the MLP's predictions on the same graph to see how well it learned the non-linear relationship.

```python
import torch
import torch.nn as nn
import torch.optim as optim
import numpy as np
import matplotlib.pyplot as plt

# 1. Generate Data: y = x^2 + 5x + 3 + noise
np.random.seed(42)
X_np = np.linspace(-10, 10, 200).reshape(-1, 1) # 200 samples, 1 feature
y_np = X_np**2 + 5 * X_np + 3 + np.random.randn(200, 1) * 5 # Add some noise

# Convert to PyTorch tensors
X = torch.tensor(X_np, dtype=torch.float32)
y = torch.tensor(y_np, dtype=torch.float32)

# 2. Define MLP with two hidden layers
class NonLinearMLP(nn.Module):
    def __init__(self):
        super(NonLinearMLP, self).__init__()
        self.hidden1 = nn.Linear(1, 32)  # Input (1) to first hidden layer (32)
        self.relu1 = nn.ReLU()
        self.hidden2 = nn.Linear(32, 16) # First hidden (32) to second hidden (16)
        self.relu2 = nn.ReLU()
        self.output = nn.Linear(16, 1)   # Second hidden (16) to output (1)

    def forward(self, x):
        x = self.relu1(self.hidden1(x))
        x = self.relu2(self.hidden2(x))
        x = self.output(x)
        return x

model = NonLinearMLP()
print("Model Architecture:")
print(model)

# 3. Define Loss Function and Optimizer
criterion = nn.MSELoss()
optimizer = optim.Adam(model.parameters(), lr=0.005) # Slightly smaller learning rate

# 4. Train the model
num_epochs = 1000
for epoch in range(num_epochs):
    outputs = model(X)
    loss = criterion(outputs, y)

    optimizer.zero_grad()
    loss.backward()
    optimizer.step()

    if (epoch+1) % 100 == 0:
        print(f'Epoch [{epoch+1}/{num_epochs}], Loss: {loss.item():.4f}')

# 5. Make predictions and visualize
model.eval()
with torch.no_grad():
    predicted = model(X).numpy()

plt.figure(figsize=(10, 6))
plt.scatter(X_np, y_np, label='Actual Data', alpha=0.6)
plt.plot(X_np, predicted, color='red', label='MLP Prediction', linewidth=2)
plt.title('MLP Learning a Non-linear Function')
plt.xlabel('X')
plt.ylabel('y')
plt.legend()
plt.grid(True)
plt.show()
```

#### Assessment idea
1.  **Question:** A data scientist is comparing a traditional ARIMA model with a deep learning MLP for forecasting monthly sales. The sales data exhibits a strong, non-linear growth pattern with complex interactions between various marketing campaigns and economic indicators. Which model is likely to perform better in capturing these complexities, and why?
    **Correct Answer:** The **deep learning MLP** is likely to perform better.
    *   **Reasoning:** ARIMA models are fundamentally linear and struggle with highly non-linear relationships and complex interactions between multiple exogenous variables. An MLP, with its multiple hidden layers and non-linear activation functions, is capable of learning and approximating arbitrary non-linear functions. This makes it far more adept at capturing the "strong, non-linear growth pattern" and the "complex interactions" between marketing campaigns and economic indicators that an ARIMA model would likely miss or oversimplify.

2.  **Question:** Explain why a standard Multi-Layer Perceptron (MLP) is generally not suitable for direct application to raw time series data without significant preprocessing, and what fundamental characteristic of time series data it fails to account for.
    **Correct Answer:** A standard Multi-Layer Perceptron (MLP) is generally not suitable for direct application to raw time series data because it fails to account for the fundamental characteristic of **temporal dependence** (or sequential order) in time series.
    *   **Explanation:** MLPs treat each input feature as independent. When applied to time series, if each time step is treated as a separate input, the MLP loses all information about the order and relationships between consecutive time steps. It cannot "remember" past observations or understand how the sequence of events influences the current or future state. This means it cannot capture trends, seasonality, or other temporal patterns that are crucial for time series forecasting. Specialized architectures like RNNs, LSTMs, or CNNs (with appropriate windowing) are designed to explicitly process sequential information and maintain this temporal context.

#### AI generation note
Design a 10-minute animated video explaining the transition from traditional to deep learning for time series. Start with a visual comparison of linear vs. non-linear patterns, showing how traditional models struggle. Then, use animated diagrams to illustrate a single neuron, then stacking neurons into an MLP, explaining weights, biases, and activation functions (ReLU). Briefly animate the concept of backpropagation. Conclude by highlighting the "memory" challenge for sequential data in MLPs, setting the stage for specialized architectures. Use clear, concise language and professional visuals. Include a pop-up quiz question about activation functions.

---

## Chapter 1.4 — Preparing Time Series Data for Deep Learning

#### Learning objectives
*   Master the technique of reshaping time series data into supervised learning formats using sliding windows for sequence-to-point and sequence-to-sequence tasks.
*   Implement various data scaling strategies (normalization, standardization) suitable for time series data.
*   Apply effective strategies for handling missing values and outliers in time series datasets.
*   Understand and implement appropriate train-validation-test splitting methodologies for time series data to avoid data leakage.
*   Perform basic feature engineering specific to time series, such as creating lag features and rolling statistics.

#### Detailed lesson content
Preparing time series data for deep learning models is a critical step that often determines the success of your forecasting efforts. Unlike traditional machine learning, where data is typically tabular and observations are assumed independent, time series data requires careful structuring to preserve its temporal dependencies. The most fundamental transformation is converting the time series into a **supervised learning format**. This usually involves creating input-output pairs, often using a **sliding window** approach. For a sequence-to-point prediction (e.g., predicting the next value), a window of `n` past observations becomes the input feature vector, and the `n+1`-th observation becomes the target. For sequence-to-sequence tasks (e.g., predicting the next `m` values), a window of `n` past observations maps to a window of `m` future observations.

Let's consider a time series `[t1, t2, t3, t4, t5, t6]`. If we want to predict `t_i` from `t_i-3, t_i-2, t_i-1` (input window size 3), our dataset would look like:
*   Input: `[t1, t2, t3]`, Output: `t4`
*   Input: `[t2, t3, t4]`, Output: `t5`
*   Input: `[t3, t4, t5]`, Output: `t6`
This reshaping is crucial because deep learning models expect fixed-size input tensors. A common mistake is to ignore this step and try to feed a raw 1D time series directly into a model, which will lead to errors or nonsensical results. The choice of window size (`n`) is a hyperparameter that often requires experimentation, as it dictates how much historical context the model receives.

Another indispensable preprocessing step is **data scaling**. Deep learning models, especially those using gradient-based optimizers, perform much better when input features are on a similar scale. This prevents features with larger numerical ranges from dominating the gradient updates. Two common methods are:
*   **Normalization (Min-Max Scaling):** Scales data to a fixed range, usually between 0 and 1. `X_scaled = (X - X_min) / (X_max - X_min)`. This is useful when you want to bound values to a specific range.
*   **Standardization (Z-score Normalization):** Scales data to have a mean of 0 and a standard deviation of 1. `X_scaled = (X - X_mean) / X_std`. This is generally preferred for deep learning as it handles outliers better than min-max scaling and is suitable when the data distribution is roughly Gaussian.
When scaling time series data, it's critical to fit the scaler *only on the training data* and then apply the *same fitted scaler* to the validation and test sets. Fitting the scaler on the entire dataset, including future information, would constitute **data leakage**, leading to overly optimistic performance estimates.

**Handling missing values** is another crucial aspect. Simple methods include `fillna(method='ffill')` (forward-fill) or `fillna(method='bfill')` (backward-fill). More sophisticated imputation techniques like linear interpolation (`interpolate()`), spline interpolation, or even using machine learning models to predict missing values can be employed. The choice depends on the nature of the data and the length of the missing periods. For **outliers**, robust scaling methods (`RobustScaler` from scikit-learn) or winsorization (capping extreme values) can be used. Sometimes, domain knowledge dictates that outliers are important events and should not be removed or smoothed.

**Feature engineering** for time series involves creating new features that can help the model capture patterns more effectively. Common techniques include:
*   **Lag features:** Past values of the time series itself (e.g., `t-1`, `t-7`). These are directly used in the sliding window approach.
*   **Rolling window statistics:** Moving averages, moving standard deviations, or other statistics calculated over a rolling window. These can capture trends and volatility.
*   **Date and time features:** Extracting components like year, month, day of week, hour of day, day of year, or even `is_weekend` flags. These can help capture seasonal patterns.
*   **Fourier terms:** For strong seasonality, sine and cosine transformations of time components can be powerful.

Finally, **train-validation-test splitting** for time series must respect the temporal order. You cannot randomly shuffle time series data. The training set should always precede the validation set, which in turn should precede the test set. This ensures that your model is always learning from past data to predict future data, mimicking a real-world forecasting scenario. A common split might be 70% for training, 15% for validation, and 15% for testing, always preserving chronological order.

Let's demonstrate some of these preprocessing steps in Python using our simulated data.

```python
import pandas as pd
import numpy as np
import torch
from sklearn.preprocessing import MinMaxScaler, StandardScaler
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt

# Re-simulate the time series data
np.random.seed(42)
dates = pd.date_range(start='2020-01-01', periods=100, freq='D')
trend = np.linspace(0, 20, 100)
seasonality = 10 * np.sin(np.linspace(0, 3 * np.pi, 100))
noise = np.random.normal(0, 1.5, 100)
data = trend + seasonality + noise + 50
time_series = pd.Series(data, index=dates)

# 1. Reshaping for Supervised Learning (Sliding Window)
def create_sequences(data, seq_length):
    xs, ys = [], []
    for i in range(len(data) - seq_length):
        x = data[i:(i + seq_length)]
        y = data[i + seq_length]
        xs.append(x)
        ys.append(y)
    return np.array(xs), np.array(ys)

SEQ_LENGTH = 5 # Use 5 past observations to predict the next one
X_seq, y_seq = create_sequences(time_series.values, SEQ_LENGTH)

print(f"Original time series length: {len(time_series)}")
print(f"Shape of X (sequences): {X_seq.shape}") # (num_samples, seq_length)
print(f"Shape of y (targets): {y_seq.shape}")   # (num_samples,)
print(f"Example X sequence: {X_seq[0]}")
print(f"Example y target: {y_seq[0]}")

# 2. Train-Validation-Test Split (Temporal Split)
# Important: Split AFTER creating sequences to avoid data leakage
train_size = int(len(X_seq) * 0.7)
val_size = int(len(X_seq) * 0.15)
test_size = len(X_seq) - train_size - val_size

X_train, y_train = X_seq[:train_size], y_seq[:train_size]
X_val, y_val = X_seq[train_size : train_size + val_size], y_seq[train_size : train_size + val_size]
X_test, y_test = X_seq[train_size + val_size :], y_seq[train_size + val_size :]

print(f"\nTrain sizes: X={X_train.shape}, y={y_train.shape}")
print(f"Validation sizes: X={X_val.shape}, y={y_val.shape}")
print(f"Test sizes: X={X_test.shape}, y={y_test.shape}")

# 3. Data Scaling (Standardization)
# Fit scaler ONLY on training data, then transform all sets
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_val_scaled = scaler.transform(X_val)
X_test_scaled = scaler.transform(X_test)

# Scale target variable as well if needed for model output
y_scaler = StandardScaler()
y_train_scaled = y_scaler.fit_transform(y_train.reshape(-1, 1))
y_val_scaled = y_scaler.transform(y_val.reshape(-1, 1))
y_test_scaled = y_scaler.transform(y_test.reshape(-1, 1))

print(f"\nExample of scaled X_train (first sequence): {X_train_scaled[0]}")
print(f"Example of scaled y_train (first target): {y_train_scaled[0]}")

# 4. Reshape for Deep Learning (e.g., LSTMs expect 3D input: samples, timesteps, features)
# Our current X_train_scaled is (samples, timesteps), need to add a feature dimension (1)
X_train_tensor = torch.tensor(X_train_scaled, dtype=torch.float32).unsqueeze(-1)
X_val_tensor = torch.tensor(X_val_scaled, dtype=torch.float32).unsqueeze(-1)
X_test_tensor = torch.tensor(X_test_scaled, dtype=torch.float32).unsqueeze(-1)

y_train_tensor = torch.tensor(y_train_scaled, dtype=torch.float32)
y_val_tensor = torch.tensor(y_val_scaled, dtype=torch.float32)
y_test_tensor = torch.tensor(y_test_scaled, dtype=torch.float32)

print(f"\nTensor shapes for deep learning models:")
print(f"X_train_tensor: {X_train_tensor.shape}") # (samples, seq_length, 1)
print(f"y_train_tensor: {y_train_tensor.shape}") # (samples, 1)

# 5. Feature Engineering (Example: Lag and Rolling Mean)
# Let's add a lag-1 feature and a 3-period rolling mean to the original series
df_feat = pd.DataFrame(time_series)
df_feat.columns = ['original_value']
df_feat['lag_1'] = df_feat['original_value'].shift(1)
df_feat['rolling_mean_3'] = df_feat['original_value'].rolling(window=3).mean()

print("\nDataFrame with engineered features (first 10 rows):")
print(df_feat.head(10))
```
This comprehensive code snippet demonstrates the crucial steps: creating sequences with a sliding window, performing a temporal train-validation-test split, applying standardization using `StandardScaler` (fitted only on training data), and reshaping tensors for deep learning models (e.g., adding a feature dimension for LSTMs). It also provides a brief example of feature engineering with lag and rolling mean features. Remember, the quality of your data preparation directly impacts your model's ability to learn and generalize. Neglecting any of these steps can lead to suboptimal performance, or worse, models that appear to perform well due to data leakage but fail miserably in real-world deployment.

#### Key concepts
*   **Supervised Learning Format:** Transforming raw time series into input-output pairs suitable for training machine learning models.
*   **Sliding Window:** A technique to create sequences from a time series by defining a fixed-size window that slides over the data, generating input-output pairs.
*   **Sequence-to-Point:** A forecasting task where a sequence of past observations is used to predict a single future observation.
*   **Sequence-to-Sequence:** A forecasting task where a sequence of past observations is used to predict a sequence of multiple future observations.
*   **Data Scaling:** Rescaling numerical features to a standard range or distribution to improve model training stability and performance.
*   **Normalization (Min-Max Scaling):** Scaling data to a specific range, typically [0, 1].
*   **Standardization (Z-score Normalization):** Scaling data to have a mean of 0 and a standard deviation of 1.
*   **Data Leakage:** Unintentionally including information from the validation or test sets into the training process, leading to an overestimation of model performance.
*   **Temporal Split:** Dividing time series data into training, validation, and test sets strictly based on chronological order to prevent data leakage.
*   **Lag Features:** Past values of a time series used as input features to predict future values.
*   **Rolling Window Statistics:** Statistical measures (e.g., mean, standard deviation) calculated over a moving window of observations, used as features.
*   **Date and Time Features:** Extracting components from datetime objects (e.g., day of week, month, hour) to capture cyclical patterns.

#### Hands-on activity
**Activity: Prepare a Multivariate Time Series Dataset for Deep Learning**

1.  **Dataset:** Use a simulated multivariate dataset. Create a Pandas DataFrame with three columns: `temperature`, `humidity`, and `pressure`, each with 100 daily observations exhibiting some trend and seasonality (similar to previous examples, but now with multiple interacting series).
2.  **Create Sequences (Multivariate):** Adapt the `create_sequences` function to handle multivariate input. Each `X` sequence should be `(seq_length, num_features)`, and `y` should be `(num_features)` for predicting the next values of all features, or `(1)` if only predicting one feature (e.g., temperature). For this activity, let's predict the next `temperature` value from the past `seq_length` of all three features.
3.  **Temporal Split:** Perform a 70/15/15 train/validation/test split, ensuring chronological order.
4.  **Standardize Data:**
    *   Fit a `StandardScaler` on the training input sequences (`X_train`).
    *   Transform `X_train`, `X_val`, and `X_test` using this fitted scaler.
    *   Fit a separate `StandardScaler` on the training target values (`y_train`) if you are scaling targets.
    *   Transform `y_train`, `y_val`, and `y_test`.
5.  **Reshape for PyTorch:** Convert the scaled NumPy arrays into PyTorch tensors and ensure they have the correct 3D shape `(samples, timesteps, features)` for `X` and `(samples, 1)` for `y` (assuming univariate target prediction).

```python
import pandas as pd
import numpy as np
import torch
from sklearn.preprocessing import StandardScaler
import matplotlib.pyplot as plt

# 1. Simulate a multivariate time series dataset
np.random.seed(42)
dates = pd.date_range(start='2020-01-01', periods=100, freq='D')

# Temperature: trend + seasonality + noise
temp_trend = np.linspace(0, 10, 100)
temp_seasonality = 5 * np.sin(np.linspace(0, 4 * np.pi, 100))
temperature = temp_trend + temp_seasonality + np.random.normal(0, 1, 100) + 20

# Humidity: inverse relationship with temp, some noise
humidity = 80 - temperature * 0.5 + np.random.normal(0, 2, 100)

# Pressure: slight trend, some noise
pressure = np.linspace(1000, 1020, 100) + np.random.normal(0, 3, 100)

df_multi = pd.DataFrame({
    'temperature': temperature,
    'humidity': humidity,
    'pressure': pressure
}, index=dates)

print("Multivariate DataFrame head:\n", df_multi.head())

# 2. Create Sequences (Multivariate Input, Univariate Target - e.g., predict next temperature)
def create_multivariate_sequences(data_df, seq_length, target_col='temperature'):
    xs, ys = [], []
    data_values = data_df.values # Convert DataFrame to NumPy array
    target_values = data_df[target_col].values # Target column values

    for i in range(len(data_values) - seq_length):
        x = data_values[i:(i + seq_length)] # Input sequence for all features
        y = target_values[i + seq_length]   # Target for the next step of 'target_col'
        xs.append(x)
        ys.append(y)
    return np.array(xs), np.array(ys)

SEQ_LENGTH = 10 # Use 10 past observations
X_multi, y_multi = create_multivariate_sequences(df_multi, SEQ_LENGTH, target_col='temperature')

print(f"\nShape of X (multivariate sequences): {X_multi.shape}") # (num_samples, seq_length, num_features)
print(f"Shape of y (univariate targets): {y_multi.shape}")       # (num_samples,)
print(f"Example X sequence (first 2 timesteps of first sequence):\n{X_multi[0, :2, :]}")
print(f"Example y target: {y_multi[0]}")

# 3. Temporal Split
train_size = int(len(X_multi) * 0.7)
val_size = int(len(X_multi) * 0.15)
test_size = len(X_multi) - train_size - val_size

X_train, y_train = X_multi[:train_size], y_multi[:train_size]
X_val, y_val = X_multi[train_size : train_size + val_size], y_multi[train_size : train_size + val_size]
X_test, y_test = X_multi[train_size + val_size :], y_multi[train_size + val_size :]

print(f"\nTrain sizes: X={X_train.shape}, y={y_train.shape}")
print(f"Validation sizes: X={X_val.shape}, y={y_val.shape}")
print(f"Test sizes: X={X_test.shape}, y={y_test.shape}")

# 4. Standardize Data
# X_train is 3D (samples, timesteps, features). Scaler expects 2D (samples, features).
# We need to reshape X_train for fitting the scaler, then reshape back.
# A common approach is to reshape to (samples * timesteps, features) for fitting.
num_features = X_train.shape[2]

scaler_X = StandardScaler()
X_train_reshaped = X_train.reshape(-1, num_features) # Flatten timesteps for scaling
scaler_X.fit(X_train_reshaped)

X_train_scaled = scaler_X.transform(X_train.reshape(-1, num_features)).reshape(X_train.shape)
X_val_scaled = scaler_X.transform(X_val.reshape(-1, num_features)).reshape(X_val.shape)
X_test_scaled = scaler_X.transform(X_test.reshape(-1, num_features)).reshape(X_test.shape)

# Scale target variable (y is 1D, so reshape to 2D for scaler)
scaler_y = StandardScaler()
y_train_scaled = scaler_y.fit_transform(y_train.reshape(-1, 1))
y_val_scaled = scaler_y.transform(y_val.reshape(-1, 1))
y_test_scaled = scaler_y.transform(y_test.reshape(-1, 1))

print(f"\nExample of scaled X_train (first sequence, first timestep):\n{X_train_scaled[0, 0, :]}")
print(f"Example of scaled y_train (first target): {y_train_scaled[0]}")

# 5. Reshape for PyTorch
X_train_tensor = torch.tensor(X_train_scaled, dtype=torch.float32)
X_val_tensor = torch.tensor(X_val_scaled, dtype=torch.float32)
X_test_tensor = torch.tensor(X_test_scaled, dtype=torch.float32)

y_train_tensor = torch.tensor(y_train_scaled, dtype=torch.float32)
y_val_tensor = torch.tensor(y_val_scaled, dtype=torch.float32)
y_test_tensor = torch.tensor(y_test_scaled, dtype=torch.float32)

print(f"\nTensor shapes for deep learning models:")
print(f"X_train_tensor: {X_train_tensor.shape}") # (samples, seq_length, num_features)
print(f"y_train_tensor: {y_train_tensor.shape}") # (samples, 1)
```

#### Assessment idea
1.  **Question:** You are preparing a time series dataset of hourly stock prices for a deep learning model. You decide to use a sliding window of 24 hours to predict the price 1 hour into the future. Describe the structure of a single input-output pair (`X`, `y`) that would be generated by this process. What is a critical mistake to avoid when splitting this data into training and test sets?
    **Correct Answer:**
    *   **Structure of (X, y) pair:** For a single input-output pair, `X` would be a sequence of 24 hourly stock prices (e.g., prices from hour 1 to hour 24). `y` would be the stock price at hour 25. If the stock price is multivariate (e.g., including volume, open, high, low), then `X` would be a 2D array of shape `(24, num_features)`, and `y` would be a single scalar (the next hour's closing price) or a vector if multiple features are predicted.
    *   **Critical Mistake:** The critical mistake to avoid is **randomly shuffling the data** before splitting into training and test sets. Time series data must be split chronologically. The training set should consist of earlier observations, and the test set should consist of later observations. Random shuffling would introduce future information into the training set (data leakage), leading to an artificially inflated performance during evaluation that would not generalize to real-world forecasting.

2.  **Question:** You have a multivariate time series of sensor readings (temperature, humidity, light) from a smart home. You notice that the temperature readings are consistently between 15-30°C, while light readings are between 0-1000 lux. You plan to use a deep learning model.
    a) Why is it important to scale these features?
    b) Which scaling method (Min-Max Normalization or Standardization) would generally be preferred for deep learning in this scenario, and why?
    **Correct Answer:**
    a) **Why scaling is important:** It is important to scale these features because deep learning models, particularly those that rely on gradient descent optimization, are sensitive to the scale of input features. If features have vastly different ranges (like 15-30 for temperature vs. 0-1000 for light), the feature with the larger range (light) will dominate the gradient calculations, causing the model to learn more slowly or prioritize optimizing for that feature, potentially leading to suboptimal performance and unstable training. Scaling ensures all features contribute proportionally to the loss function and gradient updates.
    b) **Preferred scaling method:** **Standardization (Z-score Normalization)** would generally be preferred.
    *   **Reasoning:** Standardization transforms data to have a mean of 0 and a standard deviation of 1. This method is often more robust to outliers than Min-Max Normalization, which can compress the majority of data into a very small range if extreme outliers are present. For deep learning, where data distributions might not be perfectly uniform or bounded, standardization tends to work well across a wider variety of datasets and helps the model converge more efficiently.

#### AI generation note
Create a 15-minute interactive lab walkthrough video. Begin by explaining the concept of sliding windows with an animated diagram showing how a window moves across a time series to create input-output pairs. Then, transition to a live coding session in a Jupyter Notebook. Demonstrate the `create_sequences` function for univariate data, showing the resulting `X` and `y` shapes. Next, show how to perform a temporal train-validation-test split. Crucially, demonstrate `StandardScaler` from `sklearn.preprocessing`, emphasizing fitting *only* on training data and transforming all sets. Conclude by showing how to reshape the NumPy arrays into PyTorch tensors with the correct 3D format `(samples, timesteps, features)`. Include a mini-quiz asking learners to identify data leakage scenarios.

---

### Chapter 1.1 — Understanding Time Series Data: Characteristics and Challenges

#### Learning objectives
*   Define time series data and differentiate it from other data types.
*   Identify and explain fundamental characteristics of time series, including trend, seasonality, and stationarity.
*   Recognize the unique challenges time series data presents for modeling and forecasting.
*   Explore common real-world examples of time series data across various domains.

#### Detailed lesson content
Welcome to the fascinating world of time series forecasting! Before we dive into the powerful deep learning techniques, it's crucial to establish a solid understanding of what time series data is and what makes it unique. At its core, time series data is a sequence of data points indexed in time order. Unlike cross-sectional data, where observations are independent, time series observations are inherently dependent on previous observations. This temporal dependency is the defining characteristic that shapes how we approach its analysis and prediction. Think about daily stock prices, hourly temperature readings, or monthly sales figures – each data point is not just a random value but part of a continuous process evolving over time.

One of the most important aspects of time series data is its inherent structure, often exhibiting patterns that can be decomposed into several components. The first is **trend**, which refers to a long-term increase or decrease in the data. A clear upward trend might be observed in a company's revenue over several years, while a downward trend could indicate declining product sales. Identifying and understanding the trend is vital because it often represents the underlying growth or decay of the system being observed. The second critical component is **seasonality**, which describes patterns that repeat over fixed periods, such as daily, weekly, monthly, or yearly cycles. Retail sales, for instance, often show strong seasonality with peaks during holiday seasons and troughs in off-peak months. Similarly, electricity consumption might peak during certain hours of the day or seasons of the year. Ignoring seasonality can lead to significantly inaccurate forecasts, as models might struggle to capture these predictable, recurring fluctuations.

Another fundamental concept is **cyclicality**, which refers to fluctuations that are not of a fixed period but occur over longer, irregular intervals, often associated with economic cycles or business cycles. While seasonality has a fixed, known period (e.g., 12 months for yearly seasonality), cycles are more amorphous and their duration can vary. Distinguishing between seasonality and cyclicality is important for proper model selection and interpretation. Finally, there's the **residual** or **noise** component, which represents the random, unpredictable variations in the data after accounting for trend, seasonality, and cycles. This irreducible randomness is what makes forecasting challenging, as it cannot be perfectly predicted.

The temporal dependency also introduces the concept of **autocorrelation**, which is the correlation of a time series with a lagged version of itself. In simpler terms, it measures how much a value at time `t` is related to a value at time `t-k`. High autocorrelation suggests that past values are strong predictors of future values, which is a cornerstone for any forecasting endeavor. For example, if today's temperature is strongly correlated with yesterday's temperature, then yesterday's temperature is a useful feature for predicting today's. A common mistake beginners make is treating time series data as independent observations, perhaps by shuffling the data before splitting into training and test sets. This completely destroys the temporal order and makes the resulting model useless for forecasting. Always maintain the temporal order when preparing time series data for modeling.

A key challenge in time series analysis is ensuring **stationarity**. A stationary time series is one whose statistical properties (like mean, variance, and autocorrelation) do not change over time. Most traditional time series models, such as ARIMA, assume stationarity. Non-stationary data, which often exhibits trends or seasonality, can lead to spurious correlations and unreliable models. Techniques like differencing (calculating the difference between consecutive observations) are often used to transform non-stationary data into stationary data. For example, if we have a series `Y_t`, its first difference is `Y_t - Y_{t-1}`. While deep learning models are generally more robust to non-stationarity than traditional methods due to their ability to learn complex patterns, understanding this concept is still vital for data preprocessing and interpreting model behavior.

Let's consider a practical example: predicting electricity demand. This time series would exhibit a strong daily seasonality (higher demand during working hours, lower at night), weekly seasonality (lower demand on weekends), and potentially yearly seasonality (higher in summer due to AC, higher in winter due to heating). It might also show an upward trend due to population growth or economic development. External factors like holidays or extreme weather events would contribute to the residual component. When preparing this data, we must ensure the time index is correctly parsed and ordered.

```python
import pandas as pd
import matplotlib.pyplot as plt

# Example: Generating synthetic time series data with trend and seasonality
# Let's simulate monthly sales data
dates = pd.date_range(start='2018-01-01', periods=60, freq='M')
# Base sales with an upward trend
base_sales = 100 + (dates.year - 2018) * 5 + (dates.month / 12) * 20
# Add seasonality (e.g., higher sales in Q4)
seasonality = 30 * (1 + (dates.month % 12 - 6).apply(lambda x: abs(x)/6))
# Add some random noise
noise = pd.Series(pd.np.random.normal(0, 10, len(dates)))

sales_data = base_sales + seasonality + noise
df = pd.DataFrame({'Date': dates, 'Sales': sales_data})
df.set_index('Date', inplace=True)

plt.figure(figsize=(12, 6))
plt.plot(df.index, df['Sales'])
plt.title('Synthetic Monthly Sales Data with Trend and Seasonality')
plt.xlabel('Date')
plt.ylabel('Sales')
plt.grid(True)
plt.show()

# Common mistake: Not sorting by time index
# If you load data and it's not sorted, always sort it!
# df_unsorted = df.sample(frac=1) # Example of unsorting
# df_sorted = df_unsorted.sort_index()
```
This code snippet demonstrates how to create and visualize a simple time series with trend and seasonality, highlighting the importance of a proper time index. Understanding these foundational concepts is not just theoretical; it directly impacts how we preprocess data, select models, and interpret results, especially when moving to more complex deep learning architectures.

#### Key concepts
*   **Time Series Data:** A sequence of data points indexed in time order, where observations are temporally dependent.
*   **Trend:** The long-term increase or decrease in the data over time.
*   **Seasonality:** Patterns that repeat over fixed, known periods (e.g., daily, weekly, yearly).
*   **Cyclicality:** Fluctuations that are not of a fixed period but occur over longer, irregular intervals.
*   **Residual/Noise:** The random, unpredictable variations in the data after accounting for trend, seasonality, and cycles.
*   **Autocorrelation:** The correlation of a time series with a lagged version of itself, indicating temporal dependency.
*   **Stationarity:** A property of a time series where its statistical properties (mean, variance, autocorrelation) do not change over time.

#### Hands-on activity
**Activity: Decomposing a Real-World Time Series**
Using a publicly available dataset (e.g., daily temperature, monthly airline passengers), load the data into a Pandas DataFrame, ensure the time index is correctly set, and then perform a basic visual decomposition to identify potential trend and seasonality.

```python
import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.seasonal import seasonal_decompose

# Starter code: Load a sample dataset (e.g., monthly airline passengers)
# You can download this from: https://raw.githubusercontent.com/plotly/datasets/master/airline-passengers.csv
# Or use another dataset of your choice.

# For this example, let's use a built-in dataset if available or simulate one
# If you have the CSV, replace this with:
# df = pd.read_csv('airline-passengers.csv', index_col='Month', parse_dates=True)
# df.index.freq = 'MS' # Set frequency to Month Start

# Simulating a similar dataset for demonstration if no CSV is readily available
data = {
    'Month': pd.to_datetime(pd.date_range(start='1949-01-01', periods=144, freq='MS')),
    'Passengers': [112, 118, 132, 129, 121, 135, 148, 148, 136, 119, 104, 118, 115, 126, 141, 135, 125, 149, 170, 170, 158, 133, 114, 140, 145, 150, 178, 163, 172, 178, 199, 199, 184, 162, 146, 166, 171, 180, 193, 181, 183, 218, 230, 242, 209, 191, 172, 194, 196, 196, 236, 235, 229, 243, 264, 272, 237, 211, 180, 201, 204, 188, 235, 227, 234, 264, 302, 293, 259, 229, 203, 229, 242, 233, 267, 269, 270, 315, 364, 347, 312, 274, 237, 278, 284, 277, 317, 313, 318, 374, 413, 405, 355, 306, 271, 306, 315, 301, 356, 348, 355, 422, 465, 467, 404, 347, 305, 336, 340, 318, 362, 348, 363, 435, 491, 505, 404, 359, 310, 337, 360, 342, 406, 391, 419, 461, 472, 535, 622, 606, 508, 461, 390, 432]
}
df = pd.DataFrame(data)
df.set_index('Month', inplace=True)
df.index.freq = 'MS' # Important for seasonal_decompose

# Perform seasonal decomposition (additive model is often a good starting point)
# For monthly data, period=12
decomposition = seasonal_decompose(df['Passengers'], model='additive', period=12)

# Plot the decomposed components
fig = decomposition.plot()
fig.set_size_inches(12, 8)
plt.tight_layout()
plt.show()

# Reflect: What do you observe about the trend, seasonality, and residuals?
# Is the data stationary? Why or why not?
```

#### Assessment idea
1.  **Question:** Which of the following best describes the concept of "stationarity" in a time series?
    a) The series exhibits a clear upward or downward trend over time.
    b) The statistical properties (mean, variance, autocorrelation) of the series remain constant over time.
    c) The series has repeating patterns at fixed intervals, such as daily or yearly.
    d) The series is perfectly predictable with no random fluctuations.

    **Correct Answer:** b) The statistical properties (mean, variance, autocorrelation) of the series remain constant over time.
    **Explanation:** Stationarity is a crucial assumption for many traditional time series models, implying that the underlying data generating process does not change. Options a) and c) describe trend and seasonality, which are characteristics of *non-stationary* data. Option d) is incorrect as all real-world time series have some level of unpredictability or noise.

2.  **Question:** You are analyzing a dataset of daily website traffic and observe a clear pattern where traffic consistently peaks on weekdays and drops significantly on weekends. What time series characteristic does this pattern represent, and why is it important for forecasting?

    **Correct Answer:** This pattern represents **seasonality**.
    **Explanation:** The consistent repetition of high traffic on weekdays and low traffic on weekends, occurring over a fixed period (weekly), is a classic example of seasonality. It is important for forecasting because it indicates a predictable, recurring component in the data. A forecasting model that accounts for this weekly seasonality will be able to capture these regular fluctuations, leading to more accurate predictions of future traffic. Ignoring it would result in a model that either over-predicts weekend traffic or under-predicts weekday traffic, failing to capture the inherent rhythm of the data.

#### AI generation note
Create a 12-minute animated video explaining time series characteristics. Start with an analogy of a river's flow (trend, ripples, seasonal floods). Visually decompose a synthetic time series (e.g., monthly retail sales) into trend, seasonality, and residual components using animated line graphs. Show how autocorrelation functions (ACF) visually represent temporal dependency. Include 2-3 interactive questions asking learners to identify characteristics from a given plot. Use clear, encouraging narration and highlight common pitfalls like ignoring temporal order. Ensure all visual elements have descriptive alt text.

---

### Chapter 1.2 — Traditional Time Series Forecasting Methods: Foundations and Limitations

#### Learning objectives
*   Understand the core principles behind classical time series forecasting methods like Exponential Smoothing (ETS) and ARIMA.
*   Identify the types of time series patterns best suited for traditional methods.
*   Discuss the limitations of traditional methods when faced with complex, non-linear, or high-dimensional time series data.
*   Introduce common evaluation metrics used to assess the performance of time series forecasts.

#### Detailed lesson content
Having established what time series data is, let's now explore the foundational forecasting techniques that have been used for decades. These traditional methods provide a crucial baseline and often perform remarkably well on simpler, well-behaved time series. Understanding their mechanics and assumptions is not just historical context; it helps us appreciate the advancements deep learning brings and informs our choice of methods for different problems.

One of the most widely used families of traditional methods is **Exponential Smoothing (ETS)**. The core idea behind exponential smoothing is to assign exponentially decreasing weights to past observations. More recent observations are given greater weight, while older observations contribute less to the forecast. This makes ETS methods particularly effective for data where the underlying process might be slowly changing. There are various flavors of exponential smoothing, each designed to handle different combinations of trend and seasonality. For instance, Simple Exponential Smoothing (SES) is suitable for data with no trend or seasonality. Holt's Linear Exponential Smoothing extends SES to handle data with a trend component. Holt-Winters' Exponential Smoothing, perhaps the most famous, further adds a seasonal component, making it highly effective for time series exhibiting both trend and seasonality, like our airline passenger example from the previous chapter. The beauty of Holt-Winters is its ability to adapt to changes in these components over time, making it quite robust for many real-world scenarios.

Another powerful and widely adopted traditional method is the **Autoregressive Integrated Moving Average (ARIMA)** model. ARIMA models are a generalization of ARMA models and are specifically designed for stationary time series. The "AR" (Autoregressive) part indicates that the current value of the series is linearly dependent on its own past values. The "MA" (Moving Average) part indicates that the current value is linearly dependent on past forecast errors. The "I" (Integrated) part refers to the use of differencing to make the series stationary. As we discussed, differencing involves subtracting the previous observation from the current observation to remove trends and seasonality. An ARIMA model is typically denoted as ARIMA(p, d, q), where 'p' is the order of the AR part, 'd' is the degree of differencing (number of times the raw observations are differenced), and 'q' is the order of the MA part. Building an ARIMA model often involves a systematic process of identifying 'p', 'd', and 'q' using tools like Autocorrelation Function (ACF) and Partial Autocorrelation Function (PACF) plots, which help in determining the appropriate lags.

Let's illustrate with a simple example using `pmdarima`, a popular library that simplifies ARIMA modeling by automating the parameter selection process.

```python
import pandas as pd
import matplotlib.pyplot as plt
from pmdarima import auto_arima
from sklearn.metrics import mean_squared_error, mean_absolute_error
import numpy as np

# Load a sample dataset (e.g., monthly airline passengers, same as previous chapter)
data = {
    'Month': pd.to_datetime(pd.date_range(start='1949-01-01', periods=144, freq='MS')),
    'Passengers': [112, 118, 132, 129, 121, 135, 148, 148, 136, 119, 104, 118, 115, 126, 141, 135, 125, 149, 170, 170, 158, 133, 114, 140, 145, 150, 178, 163, 172, 178, 199, 199, 184, 162, 146, 166, 171, 180, 193, 181, 183, 218, 230, 242, 209, 191, 172, 194, 196, 196, 236, 235, 229, 243, 264, 272, 237, 211, 180, 201, 204, 188, 235, 227, 234, 264, 302, 293, 259, 229, 203, 229, 242, 233, 267, 269, 270, 315, 364, 347, 312, 274, 237, 278, 284, 277, 317, 313, 318, 374, 413, 405, 355, 306, 271, 306, 315, 301, 356, 348, 355, 422, 465, 467, 404, 347, 305, 336, 340, 318, 362, 348, 363, 435, 491, 505, 404, 359, 310, 337, 360, 342, 406, 391, 419, 461, 472, 535, 622, 606, 508, 461, 390, 432]
}
df = pd.DataFrame(data)
df.set_index('Month', inplace=True)
df.index.freq = 'MS'

# Split data into training and testing sets
train_size = int(len(df) * 0.8)
train, test = df['Passengers'][0:train_size], df['Passengers'][train_size:]

# Fit an auto_arima model (SARIMA is often used for seasonal data)
# seasonal=True, m=12 for monthly seasonality
model = auto_arima(train, seasonal=True, m=12, suppress_warnings=True, stepwise=True, trace=False)
print(f"Best ARIMA model: {model.order}, Seasonal Order: {model.seasonal_order}")

# Make predictions
forecast_steps = len(test)
predictions = model.predict(n_periods=forecast_steps)

# Evaluate the model
rmse = np.sqrt(mean_squared_error(test, predictions))
mae = mean_absolute_error(test, predictions)
print(f'RMSE: {rmse:.2f}')
print(f'MAE: {mae:.2f}')

# Plot results
plt.figure(figsize=(12, 6))
plt.plot(train.index, train, label='Training Data')
plt.plot(test.index, test, label='Actual Test Data')
plt.plot(test.index, predictions, label='ARIMA Predictions', linestyle='--')
plt.title('ARIMA Forecast vs. Actuals')
plt.xlabel('Date')
plt.ylabel('Passengers')
plt.legend()
plt.grid(True)
plt.show()
```
This example shows how to fit a seasonal ARIMA (SARIMA) model and evaluate its performance. Notice the `m=12` parameter, which is crucial for handling monthly seasonality.

While powerful, traditional methods come with inherent limitations. Firstly, they are primarily designed for **univariate time series**, meaning they forecast a single variable. Extending them to multivariate scenarios (forecasting multiple interdependent variables simultaneously) can be complex and often involves building separate models or more intricate vector ARIMA (VARIMA) models, which quickly become computationally expensive and difficult to interpret. Secondly, traditional models struggle with **non-linear relationships**. ARIMA and ETS are fundamentally linear models. If the underlying process generating the time series has complex, non-linear interactions between past values or external factors, these models will fail to capture them effectively. For instance, the impact of a marketing campaign might not be a simple additive or multiplicative effect but a more nuanced, non-linear response.

A major limitation is their reliance on **manual feature engineering and model selection**. Identifying the correct 'p', 'd', 'q' parameters for ARIMA, or choosing the right ETS variant, often requires significant domain expertise, statistical analysis (like ACF/PACF plots), and iterative experimentation. This process can be time-consuming and subjective. Furthermore, traditional methods are less adept at handling **high-dimensional data** or incorporating a large number of **exogenous variables** (external factors like holidays, promotions, or weather that influence the time series). While some extensions exist, they are not as flexible or scalable as deep learning approaches. Finally, they often struggle with **long-term dependencies** and **missing data** without significant imputation preprocessing.

To assess the quality of our forecasts, we rely on **evaluation metrics**. Common metrics include:
*   **Mean Absolute Error (MAE):** The average of the absolute differences between predicted and actual values. It's easy to interpret and robust to outliers.
*   **Mean Squared Error (MSE):** The average of the squared differences. It penalizes larger errors more heavily.
*   **Root Mean Squared Error (RMSE):** The square root of MSE. It's in the same units as the original data, making it more interpretable than MSE.
*   **Mean Absolute Percentage Error (MAPE):** The average of the absolute percentage errors. Useful for understanding error relative to the actual value, but can be problematic with zero or near-zero actual values.

When evaluating models, it's a common mistake to use metrics on the training data. Always evaluate on a held-out test set that the model has not seen during training, ensuring the temporal order is preserved. Another pitfall is selecting a single metric without considering its implications. For example, RMSE is sensitive to large errors, which might be critical in some applications (e.g., financial forecasting), while MAE provides a more balanced view.

These traditional methods form the bedrock of time series analysis. They are interpretable, computationally efficient for many problems, and often a good starting point. However, their limitations, particularly in handling non-linearity, complex patterns, and high dimensionality, pave the way for more advanced techniques like deep learning, which we will explore next.

#### Key concepts
*   **Exponential Smoothing (ETS):** A family of forecasting methods that assign exponentially decreasing weights to past observations. Includes Simple, Holt's, and Holt-Winters' methods.
*   **ARIMA (Autoregressive Integrated Moving Average):** A statistical model that uses past values (AR), differencing (I), and past forecast errors (MA) to forecast future values. Denoted as ARIMA(p, d, q).
*   **SARIMA (Seasonal ARIMA):** An extension of ARIMA that explicitly handles seasonal components in time series data.
*   **Differencing:** A transformation applied to a time series to make it stationary by subtracting the previous observation from the current one.
*   **Univariate Time Series:** A time series consisting of observations on a single variable over time.
*   **Multivariate Time Series:** A time series consisting of observations on multiple interdependent variables over time.
*   **Exogenous Variables:** External factors or features that influence the time series but are not part of the series itself.
*   **Mean Absolute Error (MAE):** Average of the absolute differences between predictions and actual values.
*   **Root Mean Squared Error (RMSE):** Square root of the average of squared differences between predictions and actual values.

#### Hands-on activity
**Activity: Forecasting with Holt-Winters and Comparing Metrics**
Apply a Holt-Winters Exponential Smoothing model to a seasonal dataset (e.g., the airline passengers data) and compare its performance using MAE and RMSE against a simple baseline model (e.g., naive forecast or simple average).

```python
import pandas as pd
import matplotlib.pyplot as plt
from statsmodels.tsa.holtwinters import ExponentialSmoothing
from sklearn.metrics import mean_squared_error, mean_absolute_error
import numpy as np

# Load a sample dataset (airline passengers)
data = {
    'Month': pd.to_datetime(pd.date_range(start='1949-01-01', periods=144, freq='MS')),
    'Passengers': [112, 118, 132, 129, 121, 135, 148, 148, 136, 119, 104, 118, 115, 126, 141, 135, 125, 149, 170, 170, 158, 133, 114, 140, 145, 150, 178, 163, 172, 178, 199, 199, 184, 162, 146, 166, 171, 180, 193, 181, 183, 218, 230, 242, 209, 191, 172, 194, 196, 196, 236, 235, 229, 243, 264, 272, 237, 211, 180, 201, 204, 188, 235, 227, 234, 264, 302, 293, 259, 229, 203, 229, 242, 233, 267, 269, 270, 315, 364, 347, 312, 274, 237, 278, 284, 277, 317, 313, 318, 374, 413, 405, 355, 306, 271, 306, 315, 301, 356, 348, 355, 422, 465, 467, 404, 347, 305, 336, 340, 318, 362, 348, 363, 435, 491, 505, 404, 359, 310, 337, 360, 342, 406, 391, 419, 461, 472, 535, 622, 606, 508, 461, 390, 432]
}
df = pd.DataFrame(data)
df.set_index('Month', inplace=True)
df.index.freq = 'MS'

# Split data into training and testing sets
train_size = int(len(df) * 0.8)
train, test = df['Passengers'][0:train_size], df['Passengers'][train_size:]

# --- Holt-Winters Model ---
# Fit Holt-Winters model with additive trend and additive seasonality
# You can experiment with 'multiplicative' for trend and seasonality
hw_model = ExponentialSmoothing(train, trend='add', seasonal='add', seasonal_periods=12).fit()
hw_predictions = hw_model.forecast(len(test))

# --- Baseline Model (e.g., Naive Seasonal Forecast) ---
# Predict the next value as the value from the same season in the previous year
# This is a simple yet often effective baseline for seasonal data
naive_predictions = train.iloc[-12:].values # Last 12 values from training for seasonality
# Repeat the last 12 values as many times as needed for the test set length
naive_predictions = np.tile(naive_predictions, int(np.ceil(len(test) / 12)))[:len(test)]

# Evaluate Holt-Winters
hw_rmse = np.sqrt(mean_squared_error(test, hw_predictions))
hw_mae = mean_absolute_error(test, hw_predictions)
print(f'Holt-Winters RMSE: {hw_rmse:.2f}')
print(f'Holt-Winters MAE: {hw_mae:.2f}')

# Evaluate Naive Seasonal
naive_rmse = np.sqrt(mean_squared_error(test, naive_predictions))
naive_mae = mean_absolute_error(test, naive_predictions)
print(f'Naive Seasonal RMSE: {naive_rmse:.2f}')
print(f'Naive Seasonal MAE: {naive_mae:.2f}')

# Plot results
plt.figure(figsize=(14, 7))
plt.plot(train.index, train, label='Training Data')
plt.plot(test.index, test, label='Actual Test Data')
plt.plot(test.index, hw_predictions, label='Holt-Winters Predictions', linestyle='--')
plt.plot(test.index, naive_predictions, label='Naive Seasonal Predictions', linestyle=':', color='red')
plt.title('Holt-Winters vs. Naive Seasonal Forecast')
plt.xlabel('Date')
plt.ylabel('Passengers')
plt.legend()
plt.grid(True)
plt.show()

# Reflection: Which model performed better and why? What are the limitations of the naive model?
```

#### Assessment idea
1.  **Question:** An analyst is trying to forecast monthly sales data that shows both an increasing trend and strong yearly seasonality (peaks around holidays). Which traditional forecasting method would be most appropriate for this scenario, and why?
    a) Simple Exponential Smoothing (SES)
    b) ARIMA(0,1,0)
    c) Holt-Winters' Exponential Smoothing
    d) Autoregressive (AR) model

    **Correct Answer:** c) Holt-Winters' Exponential Smoothing
    **Explanation:** Holt-Winters' Exponential Smoothing is specifically designed to handle time series data with both trend and seasonality components. Simple Exponential Smoothing (a) only handles data without trend or seasonality. ARIMA(0,1,0) (b) is equivalent to a random walk with drift, primarily for trended non-seasonal data after differencing. An AR model (d) focuses on autoregressive components but typically doesn't explicitly model seasonality or complex trends as effectively as Holt-Winters for this specific pattern.

2.  **Question:** You have built an ARIMA model to forecast daily stock prices. After evaluating its performance, you notice that it consistently under-predicts prices during periods of rapid market growth and over-predicts during sudden market crashes. What is a likely limitation of the ARIMA model causing this behavior, and how might it be addressed by more advanced methods?

    **Correct Answer:** The likely limitation is the **linear nature of ARIMA models**.
    **Explanation:** ARIMA models are linear and struggle to capture complex, non-linear relationships or sudden shifts in patterns that characterize rapid market growth or crashes. Stock market dynamics are often highly non-linear, influenced by sentiment, news, and complex interactions that a linear model cannot fully represent. More advanced methods, particularly **deep learning models** (like Recurrent Neural Networks or Transformers), can address this by inherently learning and modeling non-linear relationships and complex dependencies within the data, making them more adaptable to volatile and rapidly changing time series.

#### AI generation note
Create a 10-minute slide deck with voiceover. Begin with a clear comparison table of ETS and ARIMA, highlighting their strengths and weaknesses. Use animated graphs to show how exponential smoothing weights past observations and how differencing transforms a non-stationary series. Include a step-by-step visual of an ACF/PACF plot interpretation for ARIMA parameter selection. Dedicate a section to common evaluation metrics (MAE, RMSE) with practical examples of their calculation. Conclude with a visual summary of traditional methods' limitations (non-linearity, high dimensionality) using a "brick wall" analogy.

---

### Chapter 1.3 — The Deep Learning Advantage: Why Neural Networks for Time Series?

#### Learning objectives
*   Explain the fundamental limitations of traditional time series methods that deep learning addresses.
*   Articulate the key advantages of deep learning architectures for time series forecasting, such as automatic feature extraction and handling non-linearity.
*   Briefly introduce common deep learning architectures (MLPs, CNNs, RNNs/LSTMs) and their conceptual relevance to time series.
*   Understand the scalability and flexibility benefits of deep learning for complex forecasting tasks.

#### Detailed lesson content
We've explored the foundations of time series data and the traditional methods used for forecasting. While classical techniques like ARIMA and Exponential Smoothing have served us well for decades, they often hit a wall when confronted with the complexity of modern time series problems. This is where deep learning steps in, offering a powerful paradigm shift. The primary limitations of traditional methods that deep learning aims to overcome include their struggle with **non-linearity**, their reliance on **manual feature engineering**, their difficulty with **multivariate and high-dimensional data**, and their limited capacity to capture **long-term dependencies**.

Deep learning models, particularly neural networks, are inherently capable of learning **complex, non-linear relationships** directly from the data. Unlike ARIMA's linear assumptions, a multi-layered perceptron (MLP) with activation functions or a recurrent neural network (RNN) can model intricate, non-additive interactions between past observations, exogenous variables, and the target variable. This is a game-changer for time series that exhibit highly irregular patterns, sudden shifts, or dependencies that aren't easily captured by simple linear equations. Think about predicting energy consumption, which might depend non-linearly on temperature, humidity, and time of day, with complex thresholds and interactions. Deep learning excels here because its layered structure allows it to build up hierarchical representations of these relationships.

Perhaps the most significant advantage of deep learning is its ability to perform **automatic feature extraction**. With traditional methods, you often spend considerable time crafting features: creating lag variables, rolling means, seasonal indicators, and holiday flags. Deep learning models, especially Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs), can automatically learn relevant features from the raw time series data. For instance, a CNN might learn to detect specific patterns or motifs (like sudden spikes or dips) in a sequence, while an RNN can learn to identify temporal dependencies across many time steps without explicit lag specification. This reduces the burden of manual feature engineering, allowing models to discover subtle patterns that might be overlooked by human experts.

Consider a multivariate time series forecasting problem, such as predicting sales for hundreds of different products simultaneously, where each product's sales might influence others, and all are affected by common macroeconomic factors. Traditional methods would require building and maintaining hundreds of individual models or a highly complex, computationally intensive VARIMA model. Deep learning, however, can handle **multivariate and high-dimensional data** much more gracefully. A single deep learning model can be designed to take multiple input series and exogenous variables, learning the complex interdependencies and outputting forecasts for multiple series simultaneously. This scalability makes deep learning ideal for large-scale forecasting systems in industries like retail, logistics, or finance.

Let's briefly touch upon some deep learning architectures relevant to time series, which we will explore in much greater depth in subsequent modules:
*   **Multi-Layered Perceptrons (MLPs):** While seemingly simple, MLPs can be powerful for time series if you explicitly feed them lagged values as features. They can learn non-linear mappings from these features to the future value. For example, predicting `Y_t` from `Y_{t-1}, Y_{t-2}, ..., Y_{t-k}`.
*   **Convolutional Neural Networks (CNNs):** Primarily known for image processing, CNNs are also effective for time series. Their convolutional filters can learn local patterns and features across different time windows, making them good at extracting features like trends, seasonality, or specific event signatures from sequences. They can process multiple input series efficiently.
*   **Recurrent Neural Networks (RNNs) and LSTMs/GRUs:** These are the workhorses of sequential data processing. RNNs are designed to process sequences by maintaining an internal "memory" that captures information from previous steps. Long Short-Term Memory (LSTM) networks and Gated Recurrent Units (GRUs) are advanced types of RNNs specifically engineered to overcome the vanishing gradient problem, allowing them to capture **long-term dependencies** in time series data. This is a critical advantage over traditional methods, which often struggle to remember information from very distant past observations.

The flexibility of deep learning architectures also allows for the seamless integration of **exogenous variables**. You can easily concatenate external features (e.g., weather forecasts, holiday indicators, marketing spend) with the time series data as inputs to your neural network, allowing the model to learn how these factors influence the target variable. This is often more straightforward and effective than trying to incorporate them into complex ARIMA-X or other traditional extensions.

Consider a scenario where you need to forecast demand for a new product. There's limited historical data, but you have rich data on similar products, marketing spend, and customer demographics. A deep learning model can leverage transfer learning or multi-task learning to learn from the rich auxiliary data, providing more robust forecasts than a traditional model that would struggle with data scarcity and feature integration.

```python
import torch
import torch.nn as nn
import numpy as np

# Example: Simple MLP for time series (conceptual, not a full training loop)
# Assume we have a sequence of 10 past values to predict the next value
input_sequence_length = 10
output_sequence_length = 1 # Predicting one step ahead

class SimpleMLP(nn.Module):
    def __init__(self, input_dim, hidden_dim, output_dim):
        super(SimpleMLP, self).__init__()
        self.fc1 = nn.Linear(input_dim, hidden_dim)
        self.relu = nn.ReLU()
        self.fc2 = nn.Linear(hidden_dim, output_dim)

    def forward(self, x):
        # x is expected to be a batch of sequences, e.g., (batch_size, input_sequence_length)
        x = self.fc1(x)
        x = self.relu(x)
        x = self.fc2(x)
        return x

# Instantiate the model
input_dim = input_sequence_length # Each input sample is a sequence of 10 lagged values
hidden_dim = 64
output_dim = output_sequence_length
mlp_model = SimpleMLP(input_dim, hidden_dim, output_dim)
print(mlp_model)

# Example input (a batch of 3 sequences, each 10 values long)
dummy_input = torch.randn(3, input_sequence_length)
output = mlp_model(dummy_input)
print(f"Example MLP output shape: {output.shape}") # Expected: (3, 1)

# Example: Conceptual LSTM for time series
class SimpleLSTM(nn.Module):
    def __init__(self, input_size, hidden_size, output_size, num_layers):
        super(SimpleLSTM, self).__init__()
        self.hidden_size = hidden_size
        self.num_layers = num_layers
        self.lstm = nn.LSTM(input_size, hidden_size, num_layers, batch_first=True)
        self.fc = nn.Linear(hidden_size, output_size)

    def forward(self, x):
        # x is expected to be (batch_size, sequence_length, input_size)
        h0 = torch.zeros(self.num_layers, x.size(0), self.hidden_size).to(x.device)
        c0 = torch.zeros(self.num_layers, x.size(0), self.hidden_size).to(x.device)
        
        # Forward propagate LSTM
        out, _ = self.lstm(x, (h0, c0)) # out: tensor of shape (batch_size, seq_length, hidden_size)
        
        # Decode the hidden state of the last time step
        out = self.fc(out[:, -1, :]) # Take the last hidden state
        return out

# Instantiate the model
input_size = 1 # Univariate time series
hidden_size = 50
output_size = 1
num_layers = 2
lstm_model = SimpleLSTM(input_size, hidden_size, output_size, num_layers)
print(lstm_model)

# Example input (a batch of 3 sequences, each 10 values long, 1 feature per value)
dummy_input_lstm = torch.randn(3, input_sequence_length, input_size)
output_lstm = lstm_model(dummy_input_lstm)
print(f"Example LSTM output shape: {output_lstm.shape}") # Expected: (3, 1)
```
This code provides a conceptual glimpse into how MLPs and LSTMs are structured for time series, demonstrating their ability to handle sequential inputs. The MLP takes a fixed-size window of past values, while the LSTM processes the sequence step-by-step, capturing dependencies.

In summary, deep learning offers unparalleled power and flexibility for time series forecasting. It moves beyond the linear assumptions and manual efforts of traditional methods, enabling us to tackle highly complex, non-linear, multivariate, and high-dimensional time series problems with greater accuracy and scalability. While they require more data and computational resources, the benefits often outweigh these costs for challenging real-world applications.

#### Key concepts
*   **Non-linearity:** The ability of deep learning models to capture complex, non-additive relationships in data, unlike linear traditional models.
*   **Automatic Feature Extraction:** The process by which deep learning models learn relevant features directly from raw data, reducing the need for manual engineering.
*   **Multivariate Time Series:** Time series involving multiple interdependent variables, which deep learning models can handle efficiently.
*   **High-Dimensional Data:** Datasets with a large number of features or input variables, effectively managed by deep learning.
*   **Multi-Layered Perceptron (MLP):** A basic feedforward neural network that can model non-linear relationships when fed lagged time series values.
*   **Convolutional Neural Network (CNN):** A neural network architecture that uses convolutional filters to learn local patterns and features in time series data.
*   **Recurrent Neural Network (RNN):** A type of neural network designed to process sequential data by maintaining an internal state or "memory."
*   **Long Short-Term Memory (LSTM):** An advanced type of RNN specifically designed to capture long-term dependencies in sequential data, mitigating the vanishing gradient problem.
*   **Exogenous Variables:** External factors influencing the time series, which can be easily integrated into deep learning models.

#### Hands-on activity
**Activity: Preparing Lagged Features for an MLP**
For a given univariate time series, create a dataset suitable for an MLP by generating lagged features (e.g., using the last `N` observations to predict the next one). This helps visualize how we "flatten" time series for non-sequential models.

```python
import pandas as pd
import numpy as np

# Sample univariate time series data
data = pd.Series(np.arange(1, 101), name='Value') # Values from 1 to 100
index = pd.date_range(start='2020-01-01', periods=100, freq='D')
ts = pd.Series(data.values, index=index)

print("Original Time Series Head:")
print(ts.head())

# Function to create lagged features
def create_lagged_features(series, n_lags, n_forecast_steps=1):
    df = pd.DataFrame(series)
    # Create lagged features
    for i in range(1, n_lags + 1):
        df[f'lag_{i}'] = series.shift(i)
    
    # Create target variable (future value)
    df['target'] = series.shift(-n_forecast_steps)
    
    # Drop rows with NaN values (due to shifting)
    df.dropna(inplace=True)
    
    # Separate features (X) and target (y)
    X = df.drop('target', axis=1)
    y = df['target']
    
    return X, y

# Parameters for lagging
n_lags = 5 # Use the last 5 observations as features
n_forecast_steps = 1 # Predict 1 step ahead

# Create lagged dataset
X, y = create_lagged_features(ts, n_lags, n_forecast_steps)

print("\nFeatures (X) for MLP - Head:")
print(X.head())

print("\nTarget (y) for MLP - Head:")
print(y.head())

print(f"\nShape of X: {X.shape}")
print(f"Shape of y: {y.shape}")

# Reflection: How does creating lagged features transform the time series problem for an MLP?
# What are the implications for handling long-term dependencies with this approach?
```

#### Assessment idea
1.  **Question:** Which of the following is a primary advantage of using deep learning models over traditional time series methods when dealing with highly non-linear patterns in data?
    a) Deep learning models are always faster to train than traditional models.
    b) Deep learning models require less data for accurate forecasting.
    c) Deep learning models can automatically learn complex, non-linear relationships without explicit feature engineering.
    d) Deep learning models are inherently more interpretable than traditional models.

    **Correct Answer:** c) Deep learning models can automatically learn complex, non-linear relationships without explicit feature engineering.
    **Explanation:** Deep learning's multi-layered structure and activation functions allow them to approximate highly non-linear functions, which traditional linear models often cannot. They also excel at automatic feature extraction. Options a) and b) are generally false; deep learning models often require more data and computational power. Option d) is also generally false; deep learning models are often considered "black boxes" compared to the interpretability of ARIMA parameters.

2.  **Question:** You are tasked with forecasting the daily electricity consumption for an entire city, which is influenced by temperature, day of the week, holidays, and economic activity. You also need to forecast consumption for different sectors (residential, commercial, industrial) simultaneously. Explain why a deep learning approach, specifically using an LSTM, might be more suitable than traditional ARIMA or Holt-Winters models for this complex task.

    **Correct Answer:** An LSTM-based deep learning approach is more suitable due to its ability to handle **non-linearity, multivariate inputs, long-term dependencies, and automatic feature learning**.
    **Explanation:**
    *   **Non-linearity:** Electricity consumption is highly non-linear (e.g., consumption spikes dramatically beyond certain temperature thresholds). LSTMs can inherently model these complex non-linear relationships, unlike linear ARIMA/Holt-Winters.
    *   **Multivariate Inputs:** The problem involves multiple influencing factors (temperature, day of week, holidays, economic activity) and multiple target series (different sectors). LSTMs can easily integrate these exogenous variables and forecast multiple series simultaneously within a single model, whereas traditional methods struggle with this complexity, often requiring separate models or complex multivariate extensions.
    *   **Long-Term Dependencies:** Electricity consumption can have long-term patterns (e.g., weekly, yearly cycles, or impact of long-term economic trends). LSTMs are specifically designed to capture these long-term dependencies, overcoming the limitations of traditional RNNs and the fixed-lag assumptions of ARIMA.
    *   **Automatic Feature Learning:** Instead of manually crafting features for holidays or economic activity, an LSTM can learn the most relevant representations and interactions directly from the raw input data, reducing manual effort and potentially discovering more effective features.

#### AI generation note
Create an 8-minute animated explainer video. Start with a visual metaphor comparing traditional linear models to fitting a straight line, and deep learning to fitting a flexible, complex curve. Use animated diagrams to show how an MLP processes lagged features, how CNN filters slide over time series to extract patterns, and how an LSTM's internal gates (input, forget, output) allow it to remember or forget information over long sequences. Include a split-screen showing a traditional model struggling with a non-linear spike versus a conceptual deep learning model adapting. Use encouraging and professional narration.

---

### Chapter 1.4 — Setting Up Your Deep Learning Environment for Time Series

#### Learning objectives
*   Set up a Python virtual environment for deep learning projects using `conda` or `venv`.
*   Install essential Python libraries for time series data manipulation, visualization, and deep learning (e.g., Pandas, NumPy, Matplotlib, scikit-learn, TensorFlow/PyTorch).
*   Understand the importance of GPU acceleration for deep learning and verify its availability.
*   Perform basic data loading, preprocessing, and visualization steps common in time series workflows.

#### Detailed lesson content
Before we can build and train our deep learning models for time series forecasting, we need a robust and well-configured development environment. This chapter will guide you through setting up your Python environment, installing the necessary libraries, and ensuring your system is ready for the computational demands of deep learning, especially concerning GPU acceleration. A properly set up environment prevents dependency conflicts and ensures reproducibility, which are critical in any data science project.

The first step is to create a **Python virtual environment**. This isolates your project's dependencies from other Python projects and your system's global Python installation. Two popular tools for this are `conda` (part of Anaconda/Miniconda) and `venv` (built into Python). For deep learning, `conda` is often preferred because it handles non-Python dependencies (like CUDA toolkits) more smoothly.

Let's walk through creating a `conda` environment:
```bash
# 1. Create a new conda environment named 'ts_dl_env' with Python 3.9
conda create -n ts_dl_env python=3.9

# 2. Activate the environment
conda activate ts_dl_env

# (Optional) If you prefer venv:
# python -m venv ts_dl_env
# source ts_dl_env/bin/activate # On Linux/macOS
# ts_dl_env\Scripts\activate # On Windows
```
Once activated, any packages you install will reside within this environment. This is a crucial safety step to avoid "dependency hell."

Next, we install the core libraries. These are the workhorses for data manipulation, numerical operations, plotting, and machine learning utilities:
*   **Pandas:** For efficient data manipulation, especially with DataFrames and time series indexing.
*   **NumPy:** The fundamental package for numerical computing in Python, essential for array operations.
*   **Matplotlib/Seaborn:** For creating static, interactive, and animated visualizations in Python. Crucial for plotting time series, model performance, etc.
*   **Scikit-learn:** While we're focusing on deep learning, scikit-learn provides many useful utilities for data preprocessing (scaling, splitting), evaluation metrics, and baseline models.
*   **TensorFlow/PyTorch:** The two dominant deep learning frameworks. For this course, we will primarily use **PyTorch** due to its Pythonic interface and flexibility, but understanding the ecosystem is valuable.

Here's how to install them within your activated `ts_dl_env`:
```bash
# Install core data science libraries
pip install pandas numpy matplotlib seaborn scikit-learn

# Install PyTorch (CRITICAL: Choose the correct command for your OS and CUDA version)
# Example for Linux/Windows with CUDA 11.8 (check PyTorch website for latest)
# IMPORTANT: Visit https://pytorch.org/get-started/locally/ and select your configuration!
# Example for CUDA 11.8:
pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118

# If you don't have a CUDA-enabled GPU or prefer CPU-only:
# pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu

# Install pmdarima for traditional ARIMA models (useful for baselines)
pip install pmdarima
```
A common mistake here is installing PyTorch without specifying the CUDA version, or installing the CPU-only version when a GPU is available. Always check the official PyTorch website for the exact installation command matching your operating system and CUDA toolkit version.

**GPU Acceleration:** Deep learning models, especially those with many layers and parameters, perform computations on large matrices. GPUs (Graphics Processing Units) are highly optimized for these parallel computations, offering orders of magnitude speedup compared to CPUs. For serious deep learning work, a CUDA-enabled NVIDIA GPU is almost a necessity.

To verify if PyTorch can detect your GPU:
```python
import torch

if torch.cuda.is_available():
    print(f"CUDA is available! Using GPU: {torch.cuda.get_device_name(0)}")
    device = torch.device("cuda")
else:
    print("CUDA is NOT available. Using CPU.")
    device = torch.device("cpu")

# You'll use 'device' when moving tensors to GPU:
# tensor = tensor.to(device)
# model = model.to(device)
```
If `torch.cuda.is_available()` returns `False` but you have an NVIDIA GPU, it usually means your CUDA toolkit, NVIDIA drivers, or PyTorch installation is misconfigured. Double-check the PyTorch installation command and your system's NVIDIA driver setup.

Once the environment is set up, the typical workflow involves **data loading, initial preprocessing, and visualization**.
```python
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Load example time series data (e.g., synthetic data from Chapter 1.1)
dates = pd.date_range(start='2018-01-01', periods=120, freq='D')
# Simulate a daily stock price with trend, seasonality, and noise
prices = 100 + np.cumsum(np.random.normal(0, 1, 120)) + \
         10 * np.sin(np.linspace(0, 3 * np.pi, 120)) + \
         np.random.normal(0, 2, 120)
df = pd.DataFrame({'Date': dates, 'Price': prices})
df.set_index('Date', inplace=True)

print("Raw Data Head:")
print(df.head())

# Basic Preprocessing: Ensure datetime index and correct frequency
# (Already done by pd.date_range, but good to check for real datasets)
df.index = pd.to_datetime(df.index)
df = df.asfreq('D') # Ensure daily frequency, fill missing with NaN if any

# Handle missing values (common in real-world data)
# For time series, common strategies include forward fill, backward fill, or interpolation
# df['Price'].fillna(method='ffill', inplace=True)
# df['Price'].interpolate(method='time', inplace=True)

# Visualize the raw time series
plt.figure(figsize=(12, 6))
plt.plot(df.index, df['Price'])
plt.title('Daily Stock Price Time Series')
plt.xlabel('Date')
plt.ylabel('Price')
plt.grid(True)
plt.show()

# Scaling (CRITICAL for deep learning)
# Neural networks perform better with normalized input data.
# We'll use scikit-learn's MinMaxScaler
from sklearn.preprocessing import MinMaxScaler

scaler = MinMaxScaler(feature_range=(0, 1))
df['Price_Scaled'] = scaler.fit_transform(df[['Price']])

plt.figure(figsize=(12, 6))
plt.plot(df.index, df['Price_Scaled'])
plt.title('Scaled Daily Stock Price Time Series')
plt.xlabel('Date')
plt.ylabel('Scaled Price')
plt.grid(True)
plt.show()

print("\nScaled Data Head:")
print(df.head())
```
This snippet demonstrates loading data, ensuring a proper time index, and a crucial preprocessing step: scaling. Scaling is vital because neural networks are sensitive to the magnitude of input features. Features with larger values can dominate the learning process, leading to unstable gradients and slower convergence. `MinMaxScaler` transforms data to a specific range (e.g., 0 to 1), while `StandardScaler` transforms it to have zero mean and unit variance. Always scale your numerical input features before feeding them into a deep learning model. Remember to apply the *same* scaler used on the training data to your validation and test data, and inverse transform predictions if you want them back in the original scale.

By following these steps, you'll have a robust environment ready to tackle the exciting challenges of deep learning for time series forecasting.

#### Key concepts
*   **Python Virtual Environment:** An isolated environment for Python projects to manage dependencies and avoid conflicts (e.g., `conda` or `venv`).
*   **Conda:** A package, dependency, and environment management system, particularly useful for data science and deep learning due to its handling of non-Python libraries.
*   **Pip:** The standard package installer for Python.
*   **Pandas:** A powerful library for data manipulation and analysis, especially with tabular and time series data.
*   **NumPy:** The fundamental package for numerical computation in Python, providing support for large, multi-dimensional arrays and matrices.
*   **Matplotlib/Seaborn:** Libraries for creating static, animated, and interactive visualizations in Python.
*   **Scikit-learn:** A machine learning library providing tools for data preprocessing, model selection, and evaluation.
*   **PyTorch:** An open-source deep learning framework known for its flexibility and Pythonic interface.
*   **GPU Acceleration:** Using Graphics Processing Units (GPUs) to speed up deep learning computations due to their parallel processing capabilities.
*   **CUDA:** NVIDIA's parallel computing platform and API that allows software to use NVIDIA GPUs for general purpose processing.
*   **Data Scaling/Normalization:** Transforming numerical features to a standard range (e.g., 0-1) or distribution (e.g., zero mean, unit variance) to improve neural network training.

#### Hands-on activity
**Activity: Setting up an Environment and Verifying GPU**
Create a new `conda` environment, install `pandas`, `matplotlib`, `scikit-learn`, and `pytorch` (with CUDA support if available). Then, write a small Python script to verify PyTorch's GPU detection and load a small CSV file, ensuring its index is a datetime object.

```bash
# Step 1: Create and activate a new conda environment
# If you haven't already, make sure you have Miniconda or Anaconda installed.
# Open your terminal or Anaconda Prompt and run:
# conda create -n ts_dl_setup python=3.9
# conda activate ts_dl_setup

# Step 2: Install required libraries
# IMPORTANT: For PyTorch, visit https://pytorch.org/get-started/locally/
# and select your OS, package manager (pip or conda), CUDA version.
# Example for Linux/Windows with pip and CUDA 11.8:
# pip install pandas matplotlib scikit-learn
# pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cu118
# If no GPU:
# pip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu

# Once installed, create a Python script (e.g., `env_check.py`) with the following content:
```

```python
# env_check.py
import torch
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import sys

print(f"Python version: {sys.version}")
print(f"Pandas version: {pd.__version__}")
print(f"Matplotlib version: {plt.matplotlib.__version__}")
print(f"PyTorch version: {torch.__version__}")

# Check for GPU availability
if torch.cuda.is_available():
    print(f"\nCUDA is available! Using GPU: {torch.cuda.get_device_name(0)}")
    print(f"Number of GPUs: {torch.cuda.device_count()}")
    print(f"Current GPU: {torch.cuda.current_device()}")
else:
    print("\nCUDA is NOT available. PyTorch will run on CPU.")

# --- Data Loading and Indexing Check ---
# Create a dummy CSV file for demonstration
dummy_data = {
    'Date': pd.date_range(start='2023-01-01', periods=30, freq='D'),
    'Value': np.random.rand(30) * 100
}
dummy_df = pd.DataFrame(dummy_data)
dummy_df.to_csv('dummy_time_series.csv', index=False)

print("\n--- Testing Data Loading and Datetime Indexing ---")
try:
    # Load the dummy CSV
    df = pd.read_csv('dummy_time_series.csv', index_col='Date', parse_dates=True)
    print("Successfully loaded CSV with Date as index.")
    print("DataFrame Head:")
    print(df.head())
    print("\nIndex type:", type(df.index))
    if isinstance(df.index, pd.DatetimeIndex):
        print("Index is a DatetimeIndex - Correct!")
    else:
        print("Warning: Index is not a DatetimeIndex. Check parse_dates=True and index_col.")

    # Simple plot to ensure matplotlib works
    plt.figure(figsize=(10, 5))
    plt.plot(df.index, df['Value'])
    plt.title("Dummy Time Series Plot")
    plt.xlabel("Date")
    plt.ylabel("Value")
    plt.grid(True)
    plt.show()

except Exception as e:
    print(f"Error during data loading or plotting: {e}")

print("\nEnvironment setup and check complete!")
```
Run this script from your activated `ts_dl_setup` environment: `python env_check.py`.
**Reflection:** What was the output for GPU availability? If it failed, what steps would you take to troubleshoot?

#### Assessment idea
1.  **Question:** You are setting up your environment for a deep learning project and want to use PyTorch with GPU acceleration. After installing PyTorch, you run `torch.cuda.is_available()` and it returns `False`, even though you have an NVIDIA GPU. Which of the following is the most likely reason for this issue?
    a) You forgot to install Pandas.
    b) Your NVIDIA GPU drivers are outdated or not correctly installed, or your CUDA Toolkit is incompatible/missing.
    c) You installed the CPU-only version of PyTorch.
    d) You are not using a virtual environment.

    **Correct Answer:** b) Your NVIDIA GPU drivers are outdated or not correctly installed, or your CUDA Toolkit is incompatible/missing, OR c) You installed the CPU-only version of PyTorch.
    **Explanation:** Both b) and c) are very common reasons. PyTorch needs compatible NVIDIA drivers and a CUDA Toolkit installed on your system to utilize the GPU. If these are not correctly set up, or if you accidentally installed the `cpu` version of PyTorch instead of the `cuXXX` version (e.g., `cu118`), `torch.cuda.is_available()` will return `False`. Pandas (a) is for data manipulation and not directly related to GPU detection. While virtual environments (d) are good practice, not using one wouldn't prevent GPU detection if PyTorch and CUDA are otherwise correctly configured.

2.  **Question:** Why is data scaling (e.g., using `MinMaxScaler` or `StandardScaler`) a critical preprocessing step for numerical input features when training deep learning models for time series forecasting? Provide an example of a common problem that can arise if data is not scaled.

    **Correct Answer:** Data scaling is critical because neural networks are sensitive to the **magnitude and range of input features**.
    **Explanation:**
    *   **Improved Convergence:** Neural networks, especially those using gradient-based optimization (like Stochastic Gradient Descent), learn more efficiently and converge faster when input features are on a similar scale. Large differences in feature magnitudes can lead to unstable gradients (exploding or vanishing gradients) and make the optimization process much slower or even prevent it from converging to an optimal solution.
    *   **Equal Contribution:** Scaling ensures that no single feature dominates the learning process simply because it has a larger numerical range. Each feature can contribute equally to the model's learning.

    **Common Problem Example:** Imagine forecasting stock prices using two features: the stock's `Price` (ranging from $10 to $1000) and `Volume` (ranging from 100 to 1,000,000 shares). Without scaling, the `Volume` feature, with its much larger numerical range, would have a disproportionately large impact on the initial weights and gradients during training. The model might primarily focus on `Volume` changes, neglecting the patterns in `Price`, even if `Price` is equally or more important for the forecast. This can lead to a sub-optimal model that performs poorly.

#### AI generation note
Create a 15-minute interactive lab walkthrough video. Start with a clean terminal, demonstrate `conda create` and `conda activate`. Show the exact `pip install` commands for core libraries and PyTorch (emphasizing CUDA version selection). Run the `torch.cuda.is_available()` check live. Then, switch to a Jupyter Notebook. Walk through loading a real-world time series CSV (e.g., daily temperature), parsing dates, and plotting the raw data. Demonstrate `MinMaxScaler` application and plot the scaled data side-by-side with the original. Include a small interactive coding exercise where learners modify the scaling range or try a different scaler. Emphasize safety notes about environment management and GPU setup.

---

## Module 2: Preparing Time Series Data for Deep Learning

**Module Goal:** Equip learners with the essential techniques to preprocess and transform raw time series data into a suitable format for deep learning models, addressing common challenges like stationarity, missing values, and feature engineering.

### Chapter 2.1 — Understanding Time Series Data Characteristics and Challenges

#### Learning objectives
*   Identify and differentiate between common components of time series data: trend, seasonality, and noise.
*   Explain the concept of stationarity and its importance for time series modeling, distinguishing between strict and weak stationarity.
*   Recognize and describe common challenges encountered in real-world time series datasets, such as missing values, outliers, and irregular sampling.
*   Utilize basic Python tools to load, inspect, and visualize time series data to understand its inherent characteristics.

#### Detailed lesson content
Time series data, by its very nature, is a sequence of data points indexed in time order. Unlike independent and identically distributed (i.i.d.) data, time series observations are inherently dependent on previous observations, making their analysis and forecasting a unique challenge. Before we can even consider applying powerful deep learning models, it's crucial to thoroughly understand the intrinsic characteristics of this data and the common pitfalls it presents. At its core, a time series can often be decomposed into several components: a **trend**, which represents the long-term increase or decrease in the data; **seasonality**, which refers to predictable, repeating patterns or cycles over a fixed period (e.g., daily, weekly, monthly, yearly); and **noise** (or residuals), which is the random, unpredictable variation in the data that remains after accounting for trend and seasonality. Understanding these components is the first step in preparing your data, as each requires different handling. For instance, a strong trend might need differencing, while seasonality might be captured through specific features or models.

A critical concept in time series analysis is **stationarity**. A stationary time series is one whose statistical properties, such as mean, variance, and autocorrelation, are constant over time. This means that the series does not exhibit a trend, and its seasonal patterns (if any) are also constant in amplitude. There are two main types of stationarity: **strict stationarity**, where the joint distribution of any set of observations remains the same regardless of when they are observed, and **weak-sense stationarity** (or covariance stationarity), which is a less restrictive condition requiring only that the mean, variance, and autocorrelation function are constant over time. While strict stationarity is an ideal rarely met in practice, weak-sense stationarity is often a desirable property for many classical time series models, as it simplifies the mathematical analysis and ensures that the model parameters learned from past data remain relevant for future predictions. For deep learning models, strict stationarity is not always a hard requirement due to their ability to learn complex non-linear relationships and internal representations of trends and seasonality. However, non-stationary data can still pose challenges, leading to unstable gradients, slower convergence, or difficulties in generalizing. Therefore, understanding and potentially transforming non-stationary series (e.g., through differencing) can significantly improve model performance and stability.

Real-world time series data is rarely pristine. We often encounter several challenges that must be addressed during preprocessing. **Missing values** are a pervasive problem, where data points are simply absent for certain timestamps. This can occur due to sensor failures, data collection errors, or network outages. Ignoring missing values can lead to biased models or errors in computation. Similarly, **outliers**—data points that significantly deviate from the majority of observations—can disproportionately influence model training, leading to skewed parameters and poor generalization. Outliers might be genuine extreme events or simply measurement errors, and distinguishing between them is crucial for appropriate handling. Another common challenge is **irregular sampling**, where data points are not collected at consistent intervals. While some deep learning architectures can inherently handle irregular sequences, many require regularly sampled data, necessitating interpolation or resampling techniques. Furthermore, **non-stationarity**, as discussed, is a fundamental challenge, as trends and seasonality can obscure underlying patterns and complicate modeling.

To begin inspecting time series data, Python's `pandas` library is indispensable. We can load data, typically from CSV files, and immediately visualize it to identify trends, seasonality, and potential anomalies. Consider a simple example of loading historical stock prices:

```python
import pandas as pd
import matplotlib.pyplot as plt

# Load a sample time series dataset (e.g., daily temperature)
# Let's assume 'daily_temp.csv' has columns 'Date' and 'Temperature'
try:
    df = pd.read_csv('daily_temp.csv', parse_dates=['Date'], index_col='Date')
except FileNotFoundError:
    # Create a dummy dataset if file not found for demonstration
    dates = pd.date_range(start='2020-01-01', periods=365, freq='D')
    temp = [20 + 5* (i%30)/30 + 10* (i%365)/365 + 2* ((-1)**i) + 2* (i/365)**2 for i in range(365)]
    df = pd.DataFrame({'Temperature': temp}, index=dates)
    df.index.name = 'Date'
    df.to_csv('daily_temp.csv') # Save for future runs

print("First 5 rows of the dataset:")
print(df.head())
print("\nDataset information:")
df.info()

# Plotting the time series to visually inspect characteristics
plt.figure(figsize=(12, 6))
plt.plot(df.index, df['Temperature'])
plt.title('Daily Temperature Over Time')
plt.xlabel('Date')
plt.ylabel('Temperature (°C)')
plt.grid(True)
plt.show()

# Basic descriptive statistics
print("\nDescriptive statistics:")
print(df.describe())

# Check for missing values
print("\nMissing values per column:")
print(df.isnull().sum())
```
By running this code, you can visually inspect the plot for trends (upward or downward slope), seasonality (repeating patterns), and any obvious outliers. The `df.info()` and `df.isnull().sum()` commands provide quick insights into data types and the presence of missing values, which are crucial first steps in any time series preprocessing pipeline. Understanding these fundamental characteristics and challenges is paramount before diving into more complex data transformations, as it informs the choice of preprocessing techniques and ultimately, the deep learning model architecture. Ignoring these initial steps can lead to models that perform poorly, are unstable, or fail to capture the true underlying dynamics of the time series.

#### Key concepts
*   **Time Series Data:** A sequence of data points indexed in time order, where observations are dependent on previous ones.
*   **Trend:** The long-term increase or decrease in the time series data over time.
*   **Seasonality:** Predictable, repeating patterns or cycles in the data over a fixed period (e.g., daily, weekly, yearly).
*   **Noise (Residuals):** The random, unpredictable fluctuations in the data after accounting for trend and seasonality.
*   **Stationarity:** A property of a time series where its statistical properties (mean, variance, autocorrelation) are constant over time.
*   **Weak-sense Stationarity:** A less strict form of stationarity where only the mean, variance, and autocorrelation function are constant over time.
*   **Missing Values:** Gaps or absent data points in a time series.
*   **Outliers:** Data points that significantly deviate from the majority of observations.
*   **Irregular Sampling:** Data points collected at inconsistent time intervals.

#### Hands-on activity
**Activity: Time Series Exploration and Visualization**

**Objective:** Load a new time series dataset, identify its components, and check for initial data quality issues.

**Instructions:**
1.  Download a publicly available time series dataset, such as the "Air Passengers" dataset (monthly totals of international airline passengers, 1949-1960) or any other suitable dataset (e.g., from Kaggle).
2.  Load the dataset into a pandas DataFrame, ensuring the date column is correctly parsed as datetime objects and set as the index.
3.  Plot the time series to visually identify trend, seasonality, and potential outliers.
4.  Calculate and print basic descriptive statistics (`.describe()`).
5.  Check for and report the number of missing values (`.isnull().sum()`).
6.  Discuss your observations about the dataset's characteristics and potential challenges.

**Code Template:**
```python
import pandas as pd
import matplotlib.pyplot as plt

# 1. Load your chosen dataset
# Example for Air Passengers:
# df = pd.read_csv('AirPassengers.csv', parse_dates=['Month'], index_col='Month')
# df.columns = ['Passengers'] # Rename column for clarity

# Replace with your dataset loading logic:
# For demonstration, let's use a similar synthetic dataset if 'AirPassengers.csv' is not present
try:
    df = pd.read_csv('AirPassengers.csv', parse_dates=['Month'], index_col='Month')
    df.columns = ['Passengers']
except FileNotFoundError:
    print("AirPassengers.csv not found. Generating synthetic data for demonstration.")
    dates = pd.date_range(start='1949-01-01', end='1960-12-01', freq='MS')
    passengers = [100 + 3*i + 20*abs((i%12)-6) + 5*i**0.5 + 50* (i/len(dates))**2 for i in range(len(dates))]
    df = pd.DataFrame({'Passengers': passengers}, index=dates)
    df.index.name = 'Month'
    df.to_csv('AirPassengers.csv')

print("First 5 rows:")
print(df.head())

# 3. Plot the time series
plt.figure(figsize=(14, 7))
plt.plot(df.index, df['Passengers'])
plt.title('Time Series Plot of Air Passengers')
plt.xlabel('Date')
plt.ylabel('Number of Passengers')
plt.grid(True)
plt.show()

# 4. Calculate and print descriptive statistics
print("\nDescriptive Statistics:")
print(df.describe())

# 5. Check for missing values
print("\nMissing Values:")
print(df.isnull().sum())

# 6. Discuss observations (add your own comments here)
print("\nObservations:")
print("The plot clearly shows an upward trend, indicating an increasing number of passengers over time.")
print("There's also a strong seasonal pattern, with peaks and troughs repeating annually.")
print("No missing values were detected in this dataset, which simplifies initial preprocessing.")
print("The standard deviation is relatively high, reflecting the significant trend and seasonal variations.")

```

#### Assessment idea
1.  **Question:** You observe a time series plot that consistently shows higher values during the summer months each year, and a general upward slope over the entire 10-year period. Which two primary characteristics are most evident in this time series?
    *   A) Noise and Irregular Sampling
    *   B) Trend and Seasonality
    *   C) Stationarity and Outliers
    *   D) Missing Values and Trend

    **Correct Answer:** B) Trend and Seasonality
    **Explanation:** The "general upward slope over the entire 10-year period" indicates a **trend**. The "consistently higher values during the summer months each year" indicates a **seasonal pattern** that repeats annually.

2.  **Question:** Why is stationarity often considered a desirable property for traditional time series models, even if deep learning models can sometimes handle non-stationary data?
    *   A) Stationary data always has fewer missing values, simplifying preprocessing.
    *   B) Stationary data ensures that statistical properties like mean, variance, and autocorrelation are constant over time, making it easier for models to learn stable relationships from past data that are applicable to future data.
    *   C) Non-stationary data is inherently impossible for any model to forecast accurately.
    *   D) Stationarity guarantees that there are no outliers in the dataset.

    **Correct Answer:** B) Stationary data ensures that statistical properties like mean, variance, and autocorrelation are constant over time, making it easier for models to learn stable relationships from past data that are applicable to future data.
    **Explanation:** Stationarity simplifies the mathematical assumptions for many traditional models, allowing them to rely on consistent statistical properties. While deep learning models are more robust, non-stationarity can still lead to challenges like unstable gradients and slower convergence, making preprocessing for stationarity a valuable step even for deep learning.

#### AI generation note
Create a 12-minute animated video explaining time series characteristics. Start with a clear visual decomposition of a time series into trend, seasonality, and noise using interactive sliders to adjust their contributions. Then, visually contrast stationary and non-stationary series with animated plots (e.g., a random walk vs. a series with a clear upward trend). Use overlay text to define strict vs. weak stationarity. Conclude with a segment showing common data challenges like missing points (blinking gaps) and outliers (sudden spikes) appearing on a time series plot. Include a split-screen demo of loading and plotting a sample time series in a Jupyter notebook using pandas and matplotlib. The tone should be encouraging and foundational. End with a reflection prompt: "Think about a time series you've encountered. What characteristics did it exhibit?"
---

### Chapter 2.2 — Handling Missing Values and Outliers in Time Series

#### Learning objectives
*   Evaluate different strategies for imputing missing values in time series data, considering their impact and applicability.
*   Implement various missing value imputation techniques using Python's pandas library.
*   Identify common methods for detecting outliers in time series and understand their underlying principles.
*   Apply techniques for handling outliers, such as clipping or transformation, and discuss their implications for model training.
*   Recognize the potential pitfalls and common mistakes when dealing with missing values and outliers in temporal data.

#### Detailed lesson content
Missing values are an inevitable reality in most real-world datasets, and time series are no exception. Sensor malfunctions, data transmission errors, or human data entry mistakes can all lead to gaps in your sequence. Ignoring these gaps is not an option, as most deep learning models expect complete input sequences. The strategy you choose for handling missing values can significantly impact your model's performance and the integrity of your forecasts. One of the simplest approaches is **forward fill (ffill)**, where the last known valid observation is carried forward to fill the missing values. Conversely, **backward fill (bfill)** carries the next valid observation backward. These methods are straightforward but can introduce bias if the missing period is long or if the data changes rapidly. A more sophisticated approach is **interpolation**, which estimates missing values based on surrounding known values. Pandas offers various interpolation methods, such as linear, polynomial, or spline interpolation, which can capture more nuanced patterns. For instance, linear interpolation assumes a constant rate of change between known points, while polynomial or spline methods can fit smoother curves.

Let's look at how to implement these in Python using pandas. Suppose we have a time series with some `NaN` values:

```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Create a sample time series with missing values
dates = pd.date_range(start='2023-01-01', periods=10, freq='D')
data = [10, 12, np.nan, 15, 17, np.nan, np.nan, 20, 22, 25]
ts = pd.Series(data, index=dates)

print("Original Series with Missing Values:")
print(ts)

# Plot original series
plt.figure(figsize=(10, 5))
plt.plot(ts.index, ts.values, 'o-', label='Original', color='blue')
plt.title('Original Time Series with Missing Values')
plt.xlabel('Date')
plt.ylabel('Value')
plt.grid(True)
plt.legend()
plt.show()

# Forward Fill
ts_ffill = ts.fillna(method='ffill')
print("\nSeries after Forward Fill:")
print(ts_ffill)

# Backward Fill
ts_bfill = ts.fillna(method='bfill')
print("\nSeries after Backward Fill:")
print(ts_bfill)

# Linear Interpolation
ts_linear_interp = ts.interpolate(method='linear')
print("\nSeries after Linear Interpolation:")
print(ts_linear_interp)

# Plotting the imputation results for comparison
plt.figure(figsize=(12, 6))
plt.plot(ts.index, ts.values, 'o', label='Original Data Points', color='red', markersize=8)
plt.plot(ts_ffill.index, ts_ffill.values, 'x--', label='Forward Fill', alpha=0.7)
plt.plot(ts_bfill.index, ts_bfill.values, '+--', label='Backward Fill', alpha=0.7)
plt.plot(ts_linear_interp.index, ts_linear_interp.values, 's-', label='Linear Interpolation', alpha=0.7)
plt.title('Comparison of Missing Value Imputation Methods')
plt.xlabel('Date')
plt.ylabel('Value')
plt.grid(True)
plt.legend()
plt.show()
```
When choosing an imputation method, consider the nature of your data. For highly seasonal data, seasonal interpolation might be more appropriate. For short gaps, linear interpolation often performs well. For longer gaps, or if the missingness is not random, more advanced techniques like K-Nearest Neighbors (KNN) imputation (where missing values are filled based on similar time points) or even using a specialized forecasting model to predict the missing values might be necessary. A common mistake is to impute without considering the time dependency, for example, using a global mean, which can destroy the temporal structure. Always visualize the imputed series to ensure the results are reasonable.

**Outliers**, on the other hand, are data points that significantly deviate from the expected range or pattern of the time series. They can be genuine extreme events (e.g., a sudden surge in sales during a promotional event) or measurement errors (e.g., a faulty sensor reading). It's crucial to distinguish between these, as genuine outliers might carry important information, while errors should be corrected or removed. Simple outlier detection methods include statistical approaches like the **Z-score** or **Interquartile Range (IQR)**. The Z-score measures how many standard deviations an observation is from the mean; values beyond a certain threshold (e.g., |Z| > 3) are considered outliers. The IQR method defines outliers as values falling below `Q1 - 1.5 * IQR` or above `Q3 + 1.5 * IQR`, where Q1 and Q3 are the first and third quartiles, and IQR is `Q3 - Q1`. For time series, it's often more effective to use rolling statistics (e.g., rolling mean and standard deviation) to detect outliers, as the "normal" range might change over time.

Once detected, outliers can be handled in several ways. One approach is **removal**, but this creates new missing values that then need imputation. Another common method is **clipping** (or winsorization), where outliers are capped at a certain maximum or minimum value. This preserves the data point but reduces its extreme impact. **Transformation** (e.g., logarithmic transformation) can also reduce the impact of extreme values by compressing the range of the data. The choice depends on the nature of the outlier and its potential impact on the model. For instance, if a sudden spike in energy consumption is due to a rare but important event, clipping might be better than removal, as the event's presence is still noted.

```python
from scipy.stats import zscore

# Let's add an outlier to our original series
ts_with_outlier = ts.copy()
ts_with_outlier.loc[pd.to_datetime('2023-01-04')] = 50 # Introduce an outlier at 2023-01-04
ts_with_outlier.loc[pd.to_datetime('2023-01-07')] = 3 # Introduce another outlier

# Fill NaNs first for consistent outlier detection on continuous data
ts_filled_for_outlier = ts_with_outlier.interpolate(method='linear')

print("\nSeries with Outliers (after initial NaN interpolation):")
print(ts_filled_for_outlier)

# Z-score based outlier detection (using rolling window for time series context)
window_size = 3
rolling_mean = ts_filled_for_outlier.rolling(window=window_size, center=True).mean()
rolling_std = ts_filled_for_outlier.rolling(window=window_size, center=True).std()

# Calculate Z-score relative to rolling window
# Handle potential division by zero for rolling_std if window_size is too small or data is constant
rolling_zscore = (ts_filled_for_outlier - rolling_mean) / rolling_std.replace(0, np.nan) # Replace 0 std with NaN to avoid inf

outlier_threshold = 2.0 # Common threshold, can be adjusted
outliers = ts_filled_for_outlier[np.abs(rolling_zscore) > outlier_threshold]

print(f"\nOutliers detected (Z-score > {outlier_threshold}):")
print(outliers)

# Handling outliers: Clipping
# Let's define upper and lower bounds based on IQR for demonstration
Q1 = ts_filled_for_outlier.quantile(0.25)
Q3 = ts_filled_for_outlier.quantile(0.75)
IQR = Q3 - Q1
lower_bound = Q1 - 1.5 * IQR
upper_bound = Q3 + 1.5 * IQR

ts_clipped = ts_filled_for_outlier.clip(lower=lower_bound, upper=upper_bound)

print(f"\nSeries after Clipping (bounds: [{lower_bound:.2f}, {upper_bound:.2f}]):")
print(ts_clipped)

# Plotting original, with outliers, and clipped series
plt.figure(figsize=(12, 6))
plt.plot(ts_filled_for_outlier.index, ts_filled_for_outlier.values, 'o-', label='Series with Outliers', color='blue')
plt.plot(outliers.index, outliers.values, 'X', label='Detected Outliers', color='red', markersize=10)
plt.plot(ts_clipped.index, ts_clipped.values, 'g--', label='Clipped Series', alpha=0.7)
plt.title('Outlier Detection and Handling (Clipping)')
plt.xlabel('Date')
plt.ylabel('Value')
plt.grid(True)
plt.legend()
plt.show()
```
A crucial safety note: when handling missing values or outliers, always perform these operations *after* splitting your data into training, validation, and test sets, or at least ensure that any statistics used for imputation/clipping are derived *only* from the training set. Applying imputation or outlier detection methods using information from the entire dataset (including the test set) leads to **data leakage**, where your model implicitly learns information from the future, resulting in overly optimistic performance estimates. This is a very common and critical mistake in time series preprocessing.

#### Key concepts
*   **Missing Values:** Gaps in a time series where data points are absent.
*   **Forward Fill (ffill):** Imputation technique where the last valid observation is carried forward to fill missing values.
*   **Backward Fill (bfill):** Imputation technique where the next valid observation is carried backward to fill missing values.
*   **Interpolation:** Estimating missing values based on surrounding known values, using methods like linear, polynomial, or spline.
*   **Outliers:** Data points that significantly deviate from the majority of observations in a time series.
*   **Z-score:** A statistical measure indicating how many standard deviations an element is from the mean. Used for outlier detection.
*   **Interquartile Range (IQR):** The range between the first quartile (Q1) and the third quartile (Q3), used to define outlier boundaries.
*   **Clipping (Winsorization):** A method to handle outliers by capping extreme values at a certain maximum or minimum threshold.
*   **Data Leakage:** Unintentionally using information from the test or validation set during model training or preprocessing, leading to inflated performance metrics.

#### Hands-on activity
**Activity: Imputing Missing Values and Handling Outliers in a Real-World Series**

**Objective:** Practice identifying and handling missing values and outliers in a time series dataset.

**Instructions:**
1.  Load the "Daily Minimum Temperatures in Melbourne" dataset (`daily-minimum-temperatures.csv`). This dataset contains daily minimum temperatures over 10 years (1981-1990).
2.  Introduce 5-10 random missing values into the 'Temp' column of the DataFrame to simulate real-world data issues.
3.  Apply **linear interpolation** to fill the missing values.
4.  Introduce 2-3 artificial outliers into the 'Temp' column (e.g., a temperature of 50 degrees Celsius or -10 degrees Celsius, which are unrealistic for Melbourne).
5.  Detect these outliers using a rolling Z-score method (e.g., a window of 7 days and a threshold of 2.5).
6.  Handle the detected outliers by **clipping** them to reasonable bounds (e.g., between -5 and 35 degrees Celsius).
7.  Plot the original series, the series with missing values/outliers, and the final processed series to visualize the impact of your operations.

**Code Template:**
```python
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
from scipy.stats import zscore

# 1. Load the dataset
try:
    df = pd.read_csv('daily-minimum-temperatures.csv', header=0, index_col=0, parse_dates=True, squeeze=True)
    df = df.to_frame(name='Temp') # Convert Series to DataFrame for consistency
except FileNotFoundError:
    print("daily-minimum-temperatures.csv not found. Generating synthetic data for demonstration.")
    dates = pd.date_range(start='1981-01-01', periods=3650, freq='D')
    temp = [10 + 5*np.sin(i/365 * 2*np.pi) + 2*np.random.randn() for i in range(3650)]
    df = pd.DataFrame({'Temp': temp}, index=dates)
    df.to_csv('daily-minimum-temperatures.csv')

print("Original DataFrame head:")
print(df.head())
print("Original missing values:", df['Temp'].isnull().sum())

# Create a copy for manipulation
df_processed = df.copy()

# 2. Introduce random missing values
num_missing = 10
missing_indices = np.random.choice(df_processed.index, num_missing, replace=False)
df_processed.loc[missing_indices, 'Temp'] = np.nan
print(f"\nMissing values introduced: {num_missing}")
print("Missing values after introduction:", df_processed['Temp'].isnull().sum())

# 3. Apply linear interpolation
df_interpolated = df_processed['Temp'].interpolate(method='linear')
print("\nMissing values after linear interpolation:", df_interpolated.isnull().sum())

# 4. Introduce artificial outliers
outlier_indices = np.random.choice(df_interpolated.index, 3, replace=False)
df_interpolated.loc[outlier_indices[0]] = 50.0 # High outlier
df_interpolated.loc[outlier_indices[1]] = -10.0 # Low outlier
df_interpolated.loc[outlier_indices[2]] = 45.0 # Another high outlier
print(f"\nOutliers introduced at: {outlier_indices.tolist()}")

# 5. Detect outliers using rolling Z-score
window_size = 7
rolling_mean = df_interpolated.rolling(window=window_size, center=True).mean()
rolling_std = df_interpolated.rolling(window=window_size, center=True).std()
rolling_zscore = (df_interpolated - rolling_mean) / rolling_std.replace(0, np.nan)

outlier_threshold = 2.5
outliers_detected = df_interpolated[np.abs(rolling_zscore) > outlier_threshold]
print(f"\nDetected outliers (Z-score > {outlier_threshold}):")
print(outliers_detected)

# 6. Handle outliers by clipping
lower_clip_bound = -5.0
upper_clip_bound = 35.0
df_clipped = df_interpolated.clip(lower=lower_clip_bound, upper=upper_clip_bound)
print(f"\nSeries after clipping (bounds: [{lower_clip_bound}, {upper_clip_bound}]):")
print(df_clipped.loc[outlier_indices]) # Check if outliers were clipped

# 7. Plotting
plt.figure(figsize=(15, 8))
plt.plot(df.index, df['Temp'], label='Original Series', alpha=0.7, color='gray')
plt.plot(df_processed.index, df_processed['Temp'], 'o', label='Series with Missing Values', alpha=0.5, color='orange')
plt.plot(df_interpolated.index, df_interpolated, label='Series after Interpolation (with Outliers)', color='blue')
plt.plot(outliers_detected.index, outliers_detected.values, 'X', markersize=10, color='red', label='Detected Outliers')
plt.plot(df_clipped.index, df_clipped, label='Final Processed Series (Clipped)', color='green', linestyle='--')

plt.title('Time Series Preprocessing: Missing Values and Outliers')
plt.xlabel('Date')
plt.ylabel('Temperature (°C)')
plt.legend()
plt.grid(True)
plt.show()
```

#### Assessment idea
1.  **Question:** You have a time series with a few isolated missing values (1-2 days each) within a generally smooth, continuous trend. Which imputation method would likely be most appropriate and why?
    *   A) Forward fill, because it's simple and preserves the last known value.
    *   B) Backward fill, because it uses future information which is always best for time series.
    *   C) Linear interpolation, because it estimates values based on the trend between surrounding points, maintaining the continuity.
    *   D) Removing the rows with missing values, as it avoids introducing any artificial data.

    **Correct Answer:** C) Linear interpolation, because it estimates values based on the trend between surrounding points, maintaining the continuity.
    **Explanation:** For short, isolated gaps in a smooth series, linear interpolation provides a reasonable estimate by drawing a straight line between the known points, which often aligns well with the underlying trend. Forward/backward fill can create step-like changes, and removal would lead to data loss and potentially irregular sampling.

2.  **Question:** You are preprocessing a time series dataset for deep learning. You decide to use a Z-score method to detect and clip outliers. Which of the following actions represents a critical data leakage mistake?
    *   A) Calculating the Z-score and clipping thresholds based only on the training set and then applying these same thresholds to the validation and test sets.
    *   B) Calculating the Z-score and clipping thresholds using the entire dataset (training, validation, and test sets combined) before splitting the data.
    *   C) Visualizing the outliers on the training set before deciding on a clipping strategy.
    *   D) Using a rolling Z-score with a window size of 7 days to detect local outliers.

    **Correct Answer:** B) Calculating the Z-score and clipping thresholds using the entire dataset (training, validation, and test sets combined) before splitting the data.
    **Explanation:** This is a classic example of data leakage. If you calculate statistics (like mean, standard deviation for Z-score, or min/max for clipping) using the entire dataset, your model implicitly gains knowledge about the future (from the validation and test sets) during the preprocessing step. This leads to an overoptimistic evaluation of your model's performance on unseen data. The correct approach is to derive all such statistics only from the training set and apply them consistently to all other sets.

#### AI generation note
Produce an 11-minute interactive lab walkthrough video. Begin by demonstrating how to create a pandas Series with intentional missing values and outliers. Then, show side-by-side code and plot comparisons of `ffill`, `bfill`, and `interpolate(method='linear')` on the missing data, highlighting their visual differences. Transition to outlier detection using a rolling Z-score, visualizing detected points on the plot. Conclude by demonstrating clipping outliers to a defined range. Emphasize the "data leakage" warning with a clear on-screen text overlay. The visual style should be a Jupyter notebook with clear output and plot updates. Include a mini-quiz question about the impact of different imputation methods.
---

### Chapter 2.3 — Feature Engineering for Time Series Forecasting

#### Learning objectives
*   Explain the importance of feature engineering in enhancing the predictive power of deep learning models for time series data.
*   Construct lagged features (autoregressive terms) to capture past dependencies in a time series.
*   Generate rolling window statistics (e.g., mean, standard deviation, min, max) as features to represent local trends and variability.
*   Extract time-based features (e.g., day of week, month, year, holiday flags) to account for calendar effects and seasonality.
*   Implement these feature engineering techniques using Python with pandas and NumPy.

#### Detailed lesson content
Feature engineering is a critical step in preparing time series data for deep learning models, even though deep learning architectures like LSTMs and CNNs are designed to automatically learn features. While these models excel at learning complex patterns, providing them with well-crafted, domain-specific features can significantly boost their performance, accelerate convergence, and improve interpretability. The goal is to transform raw time series observations into a richer set of input variables that explicitly capture temporal dependencies, seasonal patterns, and other relevant information that might be harder for a neural network to discover solely from raw values. This process bridges the gap between raw data and a model's understanding, allowing the model to focus on learning the most complex relationships rather than rediscovering basic temporal structures.

One of the most fundamental types of features for time series forecasting are **lagged features**, also known as autoregressive (AR) terms. These features represent the value of the time series at previous time steps. For example, if you want to predict tomorrow's temperature, knowing today's temperature, yesterday's, and the day before's temperature can be highly informative. By including `t-1`, `t-2`, ..., `t-N` values as input features, you are explicitly providing the model with historical context, allowing it to learn how past values influence future ones. The number of lags to include (`N`) is a hyperparameter that often depends on the autocorrelation structure of your series and the problem domain.

```python
import pandas as pd
import numpy as np

# Create a sample time series
dates = pd.date_range(start='2023-01-01', periods=10, freq='D')
values = [10, 12, 11, 15, 17, 16, 18, 20, 19, 22]
df = pd.DataFrame({'Value': values}, index=dates)

print("Original DataFrame:")
print(df)

# Create lagged features
df['Value_lag1'] = df['Value'].shift(1)
df['Value_lag2'] = df['Value'].shift(2)
df['Value_lag3'] = df['Value'].shift(3)

print("\nDataFrame with Lagged Features:")
print(df)
```
Notice that introducing lagged features will create `NaN` values at the beginning of your series. These rows typically need to be dropped or handled through imputation if you want to retain all data points, but usually, they are dropped as they don't have a full set of historical context.

Another powerful set of features comes from **rolling window statistics**. These features capture local trends, volatility, and ranges within a specific time window preceding the current observation. Common rolling statistics include the rolling mean, standard deviation, minimum, maximum, and sum. For instance, a rolling mean can smooth out noise and highlight underlying trends, while a rolling standard deviation can indicate periods of increased volatility. These features are particularly useful for deep learning models like CNNs, which can effectively process local patterns. The window size is a crucial parameter; a smaller window captures short-term dynamics, while a larger window reflects longer-term behavior.

```python
# Create rolling window statistics
window_size = 3
df['Rolling_Mean_3'] = df['Value'].rolling(window=window_size).mean()
df['Rolling_Std_3'] = df['Value'].rolling(window=window_size).std()
df['Rolling_Min_3'] = df['Value'].rolling(window=window_size).min()
df['Rolling_Max_3'] = df['Value'].rolling(window=window_size).max()

print("\nDataFrame with Rolling Window Statistics:")
print(df)
```
Similar to lagged features, rolling statistics will introduce `NaN` values at the beginning of the series, corresponding to the points where a full window cannot be formed.

Beyond the series' own past values, external information derived from the timestamp itself can be incredibly valuable. These are **time-based features**, which help models understand calendar effects and seasonality. Examples include the day of the week (Monday, Tuesday, etc.), day of the month, month of the year, quarter, year, and even whether a day is a holiday or a weekend. For instance, retail sales often peak on weekends or during specific holidays, and including these as features allows the model to learn these predictable patterns. Categorical time features (like day of week, month) should typically be one-hot encoded for deep learning models.

```python
# Create a longer sample series for time-based features
long_dates = pd.date_range(start='2023-01-01', periods=30, freq='D')
long_values = [10 + i%7 + 5*np.sin(i/30 * 2*np.pi) + np.random.rand() for i in range(30)]
df_long = pd.DataFrame({'Value': long_values}, index=long_dates)

# Extract time-based features
df_long['Year'] = df_long.index.year
df_long['Month'] = df_long.index.month
df_long['Day'] = df_long.index.day
df_long['DayOfWeek'] = df_long.index.dayofweek # Monday=0, Sunday=6
df_long['DayOfYear'] = df_long.index.dayofyear
df_long['WeekOfYear'] = df_long.index.isocalendar().week.astype(int) # Week number
df_long['Quarter'] = df_long.index.quarter
df_long['IsWeekend'] = (df_long.index.dayofweek >= 5).astype(int) # 1 for weekend, 0 for weekday

# One-hot encode categorical features (e.g., DayOfWeek, Month)
df_long = pd.get_dummies(df_long, columns=['DayOfWeek', 'Month'], prefix=['DayOfWeek', 'Month'])

print("\nDataFrame with Time-Based Features (partial view):")
print(df_long.head())
```
When creating these features, a critical common mistake is **data leakage**. Ensure that any features derived from rolling windows or lags are calculated in a way that prevents information from the future from influencing the past. For example, when creating a lagged feature `Value_lag1`, `df['Value'].shift(1)` correctly uses the value from the *previous* time step. Similarly, rolling window statistics should be calculated using `closed='left'` or `closed='right'` depending on whether the current point is included in the window, and always `min_periods` should be considered. For forecasting, the window should only include data *up to* the point of prediction, not including future data. Also, be mindful of creating too many highly correlated features, which can lead to multicollinearity and make models harder to train or interpret, though deep learning models are generally more robust to this than traditional statistical models. The key is to select features that genuinely add predictive power without introducing redundancy or leakage.

#### Key concepts
*   **Feature Engineering:** The process of creating new input features from existing raw data to improve model performance.
*   **Lagged Features (Autoregressive Terms):** Values of the time series from previous time steps, used as input features to capture temporal dependencies.
*   **Rolling Window Statistics:** Statistical measures (e.g., mean, std, min, max) calculated over a moving window of observations, capturing local trends and variability.
*   **Time-Based Features:** Features extracted from the timestamp itself, such as day of week, month, year, or holiday indicators, to account for calendar effects and seasonality.
*   **One-Hot Encoding:** A process of converting categorical variables into a numerical format suitable for machine learning algorithms, where each category becomes a binary (0 or 1) feature.
*   **Data Leakage:** The unintentional introduction of information from the test set into the training process, leading to an overly optimistic evaluation of model performance.

#### Hands-on activity
**Activity: Building a Feature-Rich Time Series Dataset**

**Objective:** Apply various feature engineering techniques to a time series dataset to prepare it for deep learning models.

**Instructions:**
1.  Load the "Daily Minimum Temperatures in Melbourne" dataset (`daily-minimum-temperatures.csv`) again. Ensure the 'Date' column is parsed as datetime and set as the index.
2.  Create three lagged features for the 'Temp' column: `Temp_lag1`, `Temp_lag2`, and `Temp_lag3`.
3.  Generate two rolling window statistics for 'Temp': a 7-day rolling mean (`Temp_rolling_mean_7`) and a 7-day rolling standard deviation (`Temp_rolling_std_7`). Ensure the window is "causal" (i.e., only uses past data).
4.  Extract the following time-based features: `Month`, `DayOfWeek`, `DayOfYear`, and `IsWeekend`.
5.  One-hot encode the `Month` and `DayOfWeek` features.
6.  Drop any rows that contain `NaN` values resulting from lagged or rolling features.
7.  Display the head of the resulting DataFrame with all engineered features.

**Code Template:**
```python
import pandas as pd
import numpy as np

# 1. Load the dataset
try:
    df = pd.read_csv('daily-minimum-temperatures.csv', header=0, index_col=0, parse_dates=True, squeeze=True)
    df = df.to_frame(name='Temp') # Convert Series to DataFrame for consistency
except FileNotFoundError:
    print("daily-minimum-temperatures.csv not found. Generating synthetic data for demonstration.")
    dates = pd.date_range(start='1981-01-01', periods=3650, freq='D')
    temp = [10 + 5*np.sin(i/365 * 2*np.pi) + 2*np.random.randn() for i in range(3650)]
    df = pd.DataFrame({'Temp': temp}, index=dates)
    df.to_csv('daily-minimum-temperatures.csv')

print("Original DataFrame head:")
print(df.head())

# 2. Create lagged features
df['Temp_lag1'] = df['Temp'].shift(1)
df['Temp_lag2'] = df['Temp'].shift(2)
df['Temp_lag3'] = df['Temp'].shift(3)

# 3. Generate rolling window statistics (causal window)
# .shift(1) ensures the window ends *before* the current day, avoiding future leakage
df['Temp_rolling_mean_7'] = df['Temp'].rolling(window=7, closed='left').mean().shift(1)
df['Temp_rolling_std_7'] = df['Temp'].rolling(window=7, closed='left').std().shift(1)

# Alternative for rolling window to ensure causality:
# df['Temp_rolling_mean_7'] = df['Temp'].shift(1).rolling(window=7).mean()
# df['Temp_rolling_std_7'] = df['Temp'].shift(1).rolling(window=7).std()

# 4. Extract time-based features
df['Month'] = df.index.month
df['DayOfWeek'] = df.index.dayofweek # Monday=0, Sunday=6
df['DayOfYear'] = df.index.dayofyear
df['IsWeekend'] = (df.index.dayofweek >= 5).astype(int)

# 5. One-hot encode Month and DayOfWeek
df = pd.get_dummies(df, columns=['Month', 'DayOfWeek'], prefix=['Month', 'DayOfWeek'])

# 6. Drop rows with NaN values (from lags and rolling stats)
df_features = df.dropna()

print("\nDataFrame with Engineered Features (first 5 rows after dropping NaNs):")
print(df_features.head())
print(f"\nShape of final DataFrame: {df_features.shape}")
```

#### Assessment idea
1.  **Question:** You are building a model to forecast monthly sales. You decide to include `Sales_lag1` (previous month's sales) and `Sales_lag12` (sales from the same month last year) as features. What type of time series components are you primarily trying to capture with these features, respectively?
    *   A) `Sales_lag1` for noise, `Sales_lag12` for trend.
    *   B) `Sales_lag1` for short-term dependency, `Sales_lag12` for seasonality.
    *   C) `Sales_lag1` for seasonality, `Sales_lag12` for short-term dependency.
    *   D) Both `Sales_lag1` and `Sales_lag12` for trend.

    **Correct Answer:** B) `Sales_lag1` for short-term dependency, `Sales_lag12` for seasonality.
    **Explanation:** `Sales_lag1` captures the immediate dependency of the current month's sales on the previous month's. `Sales_lag12` explicitly captures the yearly seasonal pattern by comparing sales to the same month in the prior year.

2.  **Question:** When creating rolling window features for time series forecasting, why is it crucial to ensure that the window only includes data *up to* the current time step, and not future data?
    *   A) To reduce the computational cost of feature engineering.
    *   B) To prevent data leakage, ensuring the model only learns from information available at the time of prediction.
    *   C) To make the rolling window statistics more robust to outliers.
    *   D) To simplify the one-hot encoding process for time-based features.

    **Correct Answer:** B) To prevent data leakage, ensuring the model only learns from information available at the time of prediction.
    **Explanation:** If a rolling window feature includes data from future time steps (e.g., a central window for forecasting), the model would implicitly "see" future information. This leads to data leakage, making the model appear to perform better than it would in a real-world forecasting scenario where future data is unknown. Features must be strictly causal.

#### AI generation note
Design a 10-minute live coding demo in a Jupyter notebook. Begin with a raw time series (e.g., stock prices or energy consumption). First, demonstrate creating lagged features, showing the `shift()` function and the resulting NaNs. Next, implement rolling mean and standard deviation, explaining the `closed='left'` or `shift(1)` for causality. Finally, extract `month`, `dayofweek`, and `is_weekend` features, showing how to one-hot encode them. Visualize the impact of each feature addition on the DataFrame. The tone should be hands-on and practical, with clear explanations of *why* each feature is useful. Include a short coding challenge to create a new interaction feature (e.g., `lag1 * rolling_mean`).
---

### Chapter 2.4 — Normalization and Scaling Techniques for Deep Learning

#### Learning objectives
*   Explain the fundamental reasons why normalization and scaling are essential preprocessing steps for deep learning models.
*   Differentiate between common scaling techniques: Min-Max Scaling, Standardization (Z-score normalization), and Robust Scaling.
*   Implement Min-Max Scaling and Standardization using `scikit-learn` on time series data.
*   Understand the critical importance of fitting scalers *only* on the training data to prevent data leakage.
*   Discuss the appropriate use cases for each scaling method based on data distribution and presence of outliers.

#### Detailed lesson content
Normalization and scaling are fundamental preprocessing steps for almost all deep learning models, especially when working with numerical input features. The primary reason for this is that neural networks are highly sensitive to the scale of input data. If features have vastly different ranges, the optimization algorithm (like gradient descent) will struggle. Features with larger values might dominate the gradient updates, leading to slower convergence, unstable training, or even preventing the model from learning effectively. For instance, if one feature ranges from 0 to 1000 and another from 0 to 1, the gradients associated with the larger feature will be much larger, causing the model to prioritize optimizing for that feature disproportionately. Scaling helps to bring all features into a comparable range, ensuring that each feature contributes equally to the learning process and leading to more stable and faster convergence.

There are several common scaling techniques, each with its own advantages and ideal use cases.

1.  **Min-Max Scaling (Normalization):** This technique scales features to a fixed range, typically between 0 and 1. It achieves this by subtracting the minimum value of the feature and then dividing by the range (max - min). The formula is: `X_scaled = (X - X_min) / (X_max - X_min)`. Min-Max scaling is particularly useful when you want to preserve the relationships between values within the feature while ensuring all features fall into a consistent, bounded range. It's often preferred for models that expect inputs in a specific range, like LSTMs with sigmoid or tanh activation functions in their gates. However, it is highly sensitive to outliers, as a single extreme value can drastically shift the entire range.

2.  **Standardization (Z-score Normalization):** This method transforms features to have a mean of 0 and a standard deviation of 1. The formula is: `X_scaled = (X - mean) / standard_deviation`. Standardization is less affected by outliers than Min-Max scaling, as it doesn't bound the values to a specific range. It's suitable for algorithms that assume a Gaussian distribution for the input features, although deep learning models don't strictly require this. Standardization is generally robust and widely used, as it helps with gradient stability regardless of the original data distribution.

3.  **Robust Scaling:** This technique is specifically designed to handle outliers. Instead of using the mean and standard deviation (which are sensitive to outliers), it scales features using the median and the Interquartile Range (IQR). The formula is: `X_scaled = (X - median) / IQR`. This makes it much more robust to extreme values, as the median and IQR are less influenced by them. If your time series data is known to contain significant outliers that you choose not to remove or clip, Robust Scaling can be a good alternative to Min-Max or Standardization.

Let's demonstrate Min-Max Scaling and Standardization using `scikit-learn` on a sample time series. Remember the critical rule: **scalers must be `fit` only on the training data and then `transform` applied to training, validation, and test sets.** This prevents data leakage.

```python
import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler, StandardScaler
import matplotlib.pyplot as plt

# Create a sample time series data
dates = pd.date_range(start='2023-01-01', periods=100, freq='D')
# Simulate a time series with a trend and some noise
values = [50 + 0.5*i + 10*np.sin(i/10) + np.random.randn()*5 for i in range(100)]
df = pd.DataFrame({'Value': values}, index=dates)

# Introduce an artificial outlier to demonstrate sensitivity
df.loc[df.index[70], 'Value'] = 300 # A very high outlier

print("Original Data (first 5 rows):")
print(df.head())
print(f"Original Min: {df['Value'].min():.2f}, Max: {df['Value'].max():.2f}, Mean: {df['Value'].mean():.2f}, Std: {df['Value'].std():.2f}")

# For demonstration, let's pretend we have a train/test split.
# In a real scenario, you'd split your data *before* scaling.
train_data = df['Value'].iloc[:80].values.reshape(-1, 1) # Reshape for sklearn
test_data = df['Value'].iloc[80:].values.reshape(-1, 1)

# --- Min-Max Scaling ---
min_max_scaler = MinMaxScaler()
min_max_scaler.fit(train_data) # Fit ONLY on training data

train_scaled_minmax = min_max_scaler.transform(train_data)
test_scaled_minmax = min_max_scaler.transform(test_data) # Transform test data using scaler fitted on train

# --- Standardization ---
standard_scaler = StandardScaler()
standard_scaler.fit(train_data) # Fit ONLY on training data

train_scaled_standard = standard_scaler.transform(train_data)
test_scaled_standard = standard_scaler.transform(test_data) # Transform test data using scaler fitted on train

print("\nMin-Max Scaled Train Data (first 5 values):")
print(train_scaled_minmax[:5].flatten())
print(f"Min-Max Scaled Train Min: {train_scaled_minmax.min():.2f}, Max: {train_scaled_minmax.max():.2f}")

print("\nStandard Scaled Train Data (first 5 values):")
print(train_scaled_standard[:5].flatten())
print(f"Standard Scaled Train Mean: {train_scaled_standard.mean():.2f}, Std: {train_scaled_standard.std():.2f}")

# Plotting the original and scaled data
plt.figure(figsize=(15, 6))

plt.subplot(1, 3, 1)
plt.plot(df.index, df['Value'])
plt.title('Original Data (with Outlier)')
plt.xlabel('Date')
plt.ylabel('Value')
plt.grid(True)

plt.subplot(1, 3, 2)
plt.plot(df.index[:80], train_scaled_minmax, label='Train Min-Max')
plt.plot(df.index[80:], test_scaled_minmax, label='Test Min-Max')
plt.title('Min-Max Scaled Data')
plt.xlabel('Date')
plt.ylabel('Scaled Value')
plt.grid(True)
plt.legend()

plt.subplot(1, 3, 3)
plt.plot(df.index[:80], train_scaled_standard, label='Train Standard')
plt.plot(df.index[80:], test_scaled_standard, label='Test Standard')
plt.title('Standard Scaled Data')
plt.xlabel('Date')
plt.ylabel('Scaled Value')
plt.grid(True)
plt.legend()

plt.tight_layout()
plt.show()
```
In the example above, observe how the outlier at index 70 dramatically compresses the rest of the data when using Min-Max scaling, pushing most values towards the lower end of the 0-1 range. Standardization, while also affected, maintains a more spread-out distribution around 0. This visual difference highlights why choosing the right scaler is important, especially with outliers.

A common mistake, as mentioned, is fitting the scaler on the entire dataset. This is a form of **data leakage** because the scaler learns parameters (min/max or mean/std) from the test set, which represents future, unseen data. When the model is deployed, it will encounter truly unseen data, and if the scaler was trained on future information, the real-world performance will be worse than the evaluation metrics suggest. Always `fit` on your training data, and then `transform` all splits (training, validation, and test) using that *same* fitted scaler. This ensures that your model's performance evaluation is realistic. Also, remember to inverse transform your predictions back to the original scale if you need to interpret them in their original units.

#### Key concepts
*   **Normalization/Scaling:** Preprocessing techniques that transform numerical features to a common range or distribution.
*   **Min-Max Scaling:** Scales features to a fixed range (e.g., 0 to 1) by subtracting the minimum and dividing by the range (max - min). Sensitive to outliers.
*   **Standardization (Z-score Normalization):** Transforms features to have a mean of 0 and a standard deviation of 1 by subtracting the mean and dividing by the standard deviation. Less sensitive to outliers than Min-Max.
*   **Robust Scaling:** Scales features using the median and Interquartile Range (IQR), making it highly resistant to outliers.
*   **Data Leakage:** Occurs when information from outside the training dataset is used to create the model, leading to overly optimistic performance estimates.
*   **`fit()` method:** In `scikit-learn` scalers, this method calculates the necessary parameters (e.g., min/max, mean/std) from the provided data.
*   **`transform()` method:** Applies the scaling transformation using the parameters learned during the `fit()` step.
*   **`fit_transform()` method:** Combines `fit()` and `transform()` in a single step, typically used only on the training data.

#### Hands-on activity
**Activity: Comparing Scaling Techniques on Time Series with and without Outliers**

**Objective:** Apply and compare Min-Max Scaling and Standardization on a time series, observing their behavior with and without an artificial outlier.

**Instructions:**
1.  Load the "Daily Minimum Temperatures in Melbourne" dataset.
2.  Split the data into training (first 80%) and testing (last 20%) sets.
3.  **Scenario 1: No Outliers.**
    *   Apply `MinMaxScaler` to the training data and transform both training and testing sets.
    *   Apply `StandardScaler` to the training data and transform both training and testing sets.
    *   Plot the original, Min-Max scaled, and Standard scaled versions of the *training* data.
4.  **Scenario 2: With Outlier.**
    *   Introduce a single, significant artificial outlier into the *training* portion of the original dataset (e.g., `df.loc[df.index[idx], 'Temp'] = 50.0`).
    *   Repeat the scaling steps from Scenario 1 (fit new scalers on the training data *with* the outlier).
    *   Plot the original (with outlier), Min-Max scaled (with outlier), and Standard scaled (with outlier) versions of the *training* data.
5.  Discuss the visual differences and the impact of the outlier on each scaling method.

**Code Template:**
```python
import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler, StandardScaler
import matplotlib.pyplot as plt

# 1. Load the dataset
try:
    df = pd.read_csv('daily-minimum-temperatures.csv', header=0, index_col=0, parse_dates=True, squeeze=True)
    df = df.to_frame(name='Temp')
except FileNotFoundError:
    print("daily-minimum-temperatures.csv not found. Generating synthetic data for demonstration.")
    dates = pd.date_range(start='1981-01-01', periods=3650, freq='D')
    temp = [10 + 5*np.sin(i/365 * 2*np.pi) + 2*np.random.randn() for i in range(3650)]
    df = pd.DataFrame({'Temp': temp}, index=dates)
    df.to_csv('daily-minimum-temperatures.csv')

# 2. Split data into training (80%) and testing (20%)
train_size = int(len(df) * 0.8)
train_df = df.iloc[:train_size].copy()
test_df = df.iloc[train_size:].copy()

# Reshape for sklearn
train_data_no_outlier = train_df['Temp'].values.reshape(-1, 1)
test_data_no_outlier = test_df['Temp'].values.reshape(-1, 1)

print("--- Scenario 1: No Outliers ---")

# Min-Max Scaling
min_max_scaler_no_outlier = MinMaxScaler()
train_scaled_minmax_no_outlier = min_max_scaler_no_outlier.fit_transform(train_data_no_outlier)
test_scaled_minmax_no_outlier = min_max_scaler_no_outlier.transform(test_data_no_outlier)

# Standardization
standard_scaler_no_outlier = StandardScaler()
train_scaled_standard_no_outlier = standard_scaler_no_outlier.fit_transform(train_data_no_outlier)
test_scaled_standard_no_outlier = standard_scaler_no_outlier.transform(test_data_no_outlier)

# Plotting Scenario 1
plt.figure(figsize=(18, 5))
plt.subplot(1, 3, 1)
plt.plot(train_df.index, train_data_no_outlier)
plt.title('Original Train Data (No Outlier)')
plt.subplot(1, 3, 2)
plt.plot(train_df.index, train_scaled_minmax_no_outlier)
plt.title('Min-Max Scaled Train Data (No Outlier)')
plt.subplot(1, 3, 3)
plt.plot(train_df.index, train_scaled_standard_no_outlier)
plt.title('Standard Scaled Train Data (No Outlier)')
plt.tight_layout()
plt.show()

print("\n--- Scenario 2: With Outlier ---")

# Introduce an artificial outlier in the training data
train_df_with_outlier = train_df.copy()
outlier_idx = np.random.randint(0, len(train_df_with_outlier))
train_df_with_outlier.iloc[outlier_idx, train_df_with_outlier.columns.get_loc('Temp')] = 50.0 # Introduce a high outlier
print(f"Outlier introduced at index {train_df_with_outlier.index[outlier_idx]} with value 50.0")

train_data_with_outlier = train_df_with_outlier['Temp'].values.reshape(-1, 1)

# Min-Max Scaling with outlier
min_max_scaler_with_outlier = MinMaxScaler()
train_scaled_minmax_with_outlier = min_max_scaler_with_outlier.fit_transform(train_data_with_outlier)

# Standardization with outlier
standard_scaler_with_outlier = StandardScaler()
train_scaled_standard_with_outlier = standard_scaler_with_outlier.fit_transform(train_data_with_outlier)

# Plotting Scenario 2
plt.figure(figsize=(18, 5))
plt.subplot(1, 3, 1)
plt.plot(train_df_with_outlier.index, train_data_with_outlier)
plt.title('Original Train Data (With Outlier)')
plt.subplot(1, 3, 2)
plt.plot(train_df_with_outlier.index, train_scaled_minmax_with_outlier)
plt.title('Min-Max Scaled Train Data (With Outlier)')
plt.subplot(1, 3, 3)
plt.plot(train_df_with_outlier.index, train_scaled_standard_with_outlier)
plt.title('Standard Scaled Train Data (With Outlier)')
plt.tight_layout()
plt.show()

print("\nDiscussion:")
print("In Scenario 1 (No Outliers), both Min-Max and Standard scaling distribute the data effectively.")
print("Min-Max scales to a 0-1 range, while Standard scaling centers around 0 with unit variance.")
print("In Scenario 2 (With Outlier), the Min-Max scaled data appears heavily compressed towards 0,")
print("because the single outlier dominates the max value, making the (X - X_min) / (X_max - X_min) ratio very small for most points.")
print("Standard scaling, while still affected, maintains a more spread-out distribution, as the mean and std are less sensitive to a single extreme point than min/max.")
print("This demonstrates Min-Max scaling's sensitivity to outliers and Standard scaling's relative robustness.")
```

#### Assessment idea
1.  **Question:** You are training an LSTM network for time series forecasting. Your input features range from 0 to 1000 for temperature and 0 to 1 for humidity. If you apply no scaling, what is the most likely consequence?
    *   A) The model will converge faster because the larger temperature values provide stronger gradients.
    *   B) The model might struggle to converge, or convergence will be slow and unstable, as the temperature feature will dominate gradient updates.
    *   C) The model's performance will be unaffected, as LSTMs are inherently robust to feature scaling.
    *   D) The model will automatically apply internal scaling, making external preprocessing unnecessary.

    **Correct Answer:** B) The model might struggle to converge, or convergence will be slow and unstable, as the temperature feature will dominate gradient updates.
    **Explanation:** Neural networks are sensitive to feature scales. Larger-ranged features (like temperature 0-1000) will produce larger gradients, causing the optimization algorithm to primarily adjust weights associated with that feature, potentially neglecting the smaller-ranged features (humidity 0-1). This imbalance leads to inefficient, unstable, or failed training.

2.  **Question:** You have split your time series data into `X_train`, `X_val`, and `X_test`. You decide to use `MinMaxScaler`. Which of the following code snippets correctly applies the scaler to prevent data leakage?
    *   A)
        ```python
        scaler = MinMaxScaler()
        X_train_scaled = scaler.fit_transform(X_train)
        X_val_scaled = scaler.fit_transform(X_val)
        X_test_scaled = scaler.fit_transform(X_test)
        ```
    *   B)
        ```python
        scaler = MinMaxScaler()
        X_scaled = scaler.fit_transform(np.concatenate((X_train, X_val, X_test)))
        X_train_scaled = X_scaled[:len(X_train)]
        X_val_scaled = X_scaled[len(X_train):len(X_train)+len(X_val)]
        X_test_scaled = X_scaled[len(X_train)+len(X_val):]
        ```
    *   C)
        ```python
        scaler = MinMaxScaler()
        X_train_scaled = scaler.fit_transform(X_train)
        X_val_scaled = scaler.transform(X_val)
        X_test_scaled = scaler.transform(X_test)
        ```
    *   D)
        ```python
        X_train_scaled = MinMaxScaler().fit_transform(X_train)
        X_val_scaled = MinMaxScaler().fit_transform(X_val)
        X_test_scaled = MinMaxScaler().fit_transform(X_test)
        ```

    **Correct Answer:** C)
    ```python
    scaler = MinMaxScaler()
    X_train_scaled = scaler.fit_transform(X_train)
    X_val_scaled = scaler.transform(X_val)
    X_test_scaled = scaler.transform(X_test)
    ```
    **Explanation:** Option C correctly fits the `MinMaxScaler` *only* on the training data (`X_train`) using `fit_transform()`, learning the min and max values from the training set. Then, it uses the *same* fitted scaler to `transform()` the validation (`X_val`) and test (`X_test`) sets. This prevents data leakage because the scaling parameters are derived solely from the data the model is allowed to learn from. Options A, B, and D all involve fitting the scaler on future data, leading to leakage.

#### AI generation note
Create a 10-minute video tutorial. Start with a visual explanation of why scaling is needed for neural networks (e.g., gradient descent on an unscaled vs. scaled contour plot). Then, demonstrate Min-Max scaling, Standardization, and Robust Scaling side-by-side on a synthetic time series in a Jupyter notebook. Crucially, show the impact of an outlier on Min-Max vs. Standardization visually. Emphasize the `fit` on train, `transform` on all splits rule with a clear code example and a visual warning. Include a comparison plot of the original and scaled distributions. The tone should be professional and safety-conscious. End with an interactive question about choosing the right scaler for a given data distribution.
---

### Chapter 2.5 — Transforming Time Series into Supervised Learning Format (Windowing)

#### Learning objectives
*   Understand the fundamental concept of transforming a sequential time series into a supervised learning problem using windowing.
*   Define and implement the sliding window technique to create input-output pairs for deep learning models.
*   Differentiate between single-step and multi-step forecasting horizons and configure windowing accordingly.
*   Prepare time series data into 3D NumPy arrays (samples, timesteps, features) suitable for recurrent neural networks (RNNs/LSTMs) and convolutional neural networks (CNNs).
*   Recognize common pitfalls like data leakage and misalignment during the windowing process.

#### Detailed lesson content
Deep learning models, particularly those designed for supervised learning, typically expect input data in a specific format: a set of input features (X) and corresponding target labels (y). Raw time series data, being a continuous sequence, doesn't inherently fit this structure. The process of transforming a time series into this `(X, y)` format is called **windowing**, or creating a supervised learning problem from a time series. This involves defining a "window" of past observations (the input sequence, `X`) that will be used to predict a future observation or sequence of observations (the target, `y`). This is a crucial step that bridges the gap between raw sequential data and the structured input required by deep learning architectures like MLPs, CNNs, and LSTMs.

The most common technique for windowing is the **sliding window approach**. Here, we define a `look_back` (or `input_sequence_length`) which is the number of past time steps used as input features, and a `horizon` (or `output_sequence_length`) which is the number of future time steps we want to predict. The window then "slides" along the time series, creating a new `(X, y)` pair at each step. For example, if `look_back=3` and `horizon=1`, to predict `t`, we use `t-3, t-2, t-1` as input. Then, to predict `t+1`, we use `t-2, t-1, t` as input, and so on.

Let's illustrate this with a simple Python function to create windows:

```python
import numpy as np
import pandas as pd

def create_windows(data, look_back, horizon):
    """
    Transforms a 1D time series into input-output windows for supervised learning.

    Args:
        data (np.ndarray): The 1D time series data.
        look_back (int): The number of past time steps to use as input (X).
        horizon (int): The number of future time steps to predict (y).

    Returns:
        tuple: (X, y) where X is a 2D array (samples, look_back) and
               y is a 2D array (samples, horizon).
    """
    X, y = [], []
    for i in range(len(data) - look_back - horizon + 1):
        X.append(data[i:(i + look_back)])
        y.append(data[(i + look_back):(i + look_back + horizon)])
    return np.array(X), np.array(y)

# Sample time series data
series = np.array([10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])

look_back_length = 3
forecast_horizon = 1 # Single-step forecasting

X_single, y_single = create_windows(series, look_back_length, forecast_horizon)

print(f"Original Series: {series}")
print(f"Look-back: {look_back_length}, Horizon: {forecast_horizon}")
print("\nInput sequences (X_single):")
print(X_single)
print("\nTarget values (y_single):")
print(y_single)

# Multi-step forecasting
forecast_horizon_multi = 2

X_multi, y_multi = create_windows(series, look_back_length, forecast_horizon_multi)

print(f"\nLook-back: {look_back_length}, Horizon: {forecast_horizon_multi}")
print("\nInput sequences (X_multi):")
print(X_multi)
print("\nTarget values (y_multi):")
print(y_multi)
```
In the example above, `X_single` would be suitable for an MLP or a simple RNN if reshaped. For LSTMs and CNNs, which expect 3D input (samples, timesteps, features), we need an additional step. If `data` is a single feature, `X` would be reshaped from `(samples, look_back)` to `(samples, look_back, 1)`. If `data` contains multiple features, `X` would be `(samples, look_back, num_features)`.

**Single-step forecasting** predicts only the next immediate value (`horizon=1`). This is simpler but might not be sufficient for applications requiring predictions further into the future. **Multi-step forecasting** predicts a sequence of future values (`horizon > 1`). This is generally more challenging as errors can compound over the forecast horizon. Deep learning models can handle multi-step forecasting in several ways:
1.  **Direct Multi-step:** Predict the entire `horizon` sequence directly in one go. The model's output layer would have `horizon` units.
2.  **Recursive Multi-step:** Predict the next step, then feed that prediction back into the model as an input to predict the step after that, and so on. This uses a single-step model recursively.
3.  **Multi-output Multi-step:** Similar to direct, but might use different heads for different steps.

For deep learning models like LSTMs and CNNs, the input data typically needs to be a 3D NumPy array.
-   **For LSTMs:** `(samples, timesteps, features)`. `samples` is the number of `(X, y)` pairs, `timesteps` is `look_back`, and `features` is the number of features at each timestep (e.g., 1 for a univariate series, or `num_features` for multivariate).
-   **For 1D CNNs:** `(samples, timesteps, features)`. Similar to LSTMs, where `timesteps` is the length of the sequence the CNN will convolve over.

Let's adapt our `create_windows` function for a multivariate time series and reshape for deep learning models:

```python
def create_windows_dl(data, look_back, horizon):
    """
    Transforms multivariate time series into input-output windows for deep learning.

    Args:
        data (np.ndarray): The 2D time series data (time_steps, num_features).
        look_back (int): The number of past time steps to use as input (X).
        horizon (int): The number of future time steps to predict (y).

    Returns:
        tuple: (X, y) where X is a 3D array (samples, look_back, num_features) and
               y is a 2D array (samples, horizon * num_features) or 3D (samples, horizon, num_features).
               Here, we'll return y as 3D for clarity.
    """
    X, y = [], []
    num_features = data.shape[1] if data.ndim > 1 else 1

    for i in range(len(data) - look_back - horizon + 1):
        X.append(data[i:(i + look_back)])
        y.append(data[(i + look_back):(i + look_back + horizon)])
    
    X = np.array(X)
    y = np.array(y)
    
    # Ensure X is 3D (samples, look_back, num_features)
    if X.ndim == 2 and num_features == 1:
        X = X.reshape(X.shape[0], X.shape[1], 1)
    
    # Ensure y is 3D (samples, horizon, num_features)
    if y.ndim == 2 and num_features == 1:
        y = y.reshape(y.shape[0], y.shape[1], 1)
    
    return X, y

# Sample multivariate time series data (e.g., temperature and humidity)
# 10 timesteps, 2 features
multivariate_series = np.array([
    [10, 50], [11, 52], [12, 51], [13, 53], [14, 55],
    [15, 54], [16, 56], [17, 58], [18, 57], [19, 59]
])

look_back_length = 3
forecast_horizon = 1 # Predict next single step (both features)

X_mv, y_mv = create_windows_dl(multivariate_series, look_back_length, forecast_horizon)

print(f"\nOriginal Multivariate Series:\n{multivariate_series}")
print(f"Look-back: {look_back_length}, Horizon: {forecast_horizon}")
print(f"\nInput sequences (X_mv) shape: {X_mv.shape}") # (samples, look_back, num_features)
print(X_mv)
print(f"\nTarget values (y_mv) shape: {y_mv.shape}") # (samples, horizon, num_features)
print(y_mv)
```
A critical common mistake during windowing is **data leakage**. When creating `(X, y)` pairs, ensure that the `y` (target) for a given `X` (input sequence) always represents data that occurs *after* the last element of `X`. If `y` includes any data points that are also part of `X` or occur before `X`'s last element, you've introduced leakage. Another mistake is **misalignment**: incorrectly shifting indices such that `X` and `y` do not correspond to the correct past and future relationship. Always visualize a few `(X, y)` pairs to confirm the alignment. Finally, after windowing, remember to split your `(X, y)` pairs into training, validation, and test sets *chronologically*. Do not shuffle the entire dataset before splitting, as this would destroy the temporal dependency and lead to data leakage across splits. The training set should always precede the validation set, which should precede the test set.

#### Key concepts
*   **Windowing (Sliding Window):** The process of transforming a sequential time series into input-output pairs (X, y) for supervised learning models by defining fixed-size windows that slide along the series.
*   **Look-back (Input Sequence Length):** The number of past time steps included in the input feature sequence (X) for a given prediction.
*   **Horizon (Output Sequence Length):** The number of future time steps to be predicted (y) based on the input sequence.
*   **Single-step Forecasting:** Predicting only the next immediate value in the time series (`horizon = 1`).
*   **Multi-step Forecasting:** Predicting a sequence of multiple future values in the time series (`horizon > 1`).
*   **3D NumPy Array:** The typical input format for recurrent neural networks (RNNs, LSTMs) and 1D convolutional neural networks (CNNs), structured as `(samples, timesteps, features)`.
*   **Data Leakage (in Windowing):** Incorrectly constructing windows such that future information is inadvertently included in the input `X` for a given target `y`.
*   **Chronological Split:** Dividing time series data into training, validation, and test sets based on time order, preserving temporal dependencies.

#### Hands-on activity
**Activity: Implementing Windowing for Univariate and Multivariate Time Series**

**Objective:** Implement the `create_windows_dl` function to prepare both univariate and multivariate time series data for deep learning models, correctly handling the 3D array format.

**Instructions:**
1.  Generate a synthetic univariate time series (e.g., a sine wave with noise).
2.  Use the `create_windows_dl` function (provided in the detailed lesson content) to transform this univariate series into `(X, y)` pairs with `look_back=5` and `horizon=1`. Print the shapes of `X` and `y` and the first few samples.
3.  Generate a synthetic multivariate time series (e.g., two correlated sine waves with noise).
4.  Use the `create_windows_dl` function to transform this multivariate series into `(X, y)` pairs with `look_back=10` and `horizon=3`. Print the shapes of `X` and `y` and the first few samples.
5.  Discuss how the shapes change for univariate vs. multivariate data and single-step vs. multi-step horizons.

**Code Template:**
```python
import numpy as np
import pandas as pd

def create_windows_dl(data, look_back, horizon):
    """
    Transforms univariate/multivariate time series into input-output windows for deep learning.

    Args:
        data (np.ndarray): The time series data. Can be 1D (univariate) or 2D (multivariate: time_steps, num_features).
        look_back (int): The number of past time steps to use as input (X).
        horizon (int): The number of future time steps to predict (y).

    Returns:
        tuple: (X, y) where X is a 3D array (samples, look_back, num_features) and
               y is a 3D array (samples, horizon, num_features).
    """
    X, y = [], []
    
    # Determine number of features
    if data.ndim == 1:
        num_features = 1
        data = data.reshape(-1, 1) # Reshape 1D to 2D (time_steps, 1)
    else:
        num_features = data.shape[1]

    for i in range(len(data) - look_back - horizon + 1):
        X.append(data[i:(i + look_back)])
        y.append(data[(i + look_back):(i + look_back + horizon)])
    
    X = np.array(X)
    y = np.array(y)
    
    # Ensure X is 3D (samples, look_back, num_features)
    # This is already handled by appending 2D slices to X, but good to be explicit
    
    # Ensure y is 3D (samples, horizon, num_features) if it's not already
    if y.ndim == 2 and horizon > 0 and num_features > 0: # For cases where horizon=1 and num_features=1, y might be 2D
        if y.shape[1] == num_features: # If y is (samples, num_features) for horizon=1
            y = y.reshape(y.shape[0], 1, num_features)
        elif y.shape[1] == horizon and num_features == 1: # If y is (samples, horizon) for num_features=1
            y = y.reshape(y.shape[0], y.shape[1], 1)
    
    return X, y

# --- 1. Univariate Time Series Example ---
print("--- Univariate Time Series ---")
uni_series = np.sin(np.linspace(0, 100, 200)) + np.random.randn(200) * 0.1 # Sine wave with noise
uni_look_back = 5
uni_horizon = 1

X_uni, y_uni = create_windows_dl(uni_series, uni_look_back, uni_horizon)

print(f"Univariate Series Length: {len(uni_series)}")
print(f"Look-back: {uni_look_back}, Horizon: {uni_horizon}")
print(f"X_uni shape: {X_uni.shape}") # Expected: (samples, look_back, 1)
print(f"y_uni shape: {y_uni.shape}") # Expected: (samples, horizon, 1)
print("\nFirst 3 X_uni samples:")
print(X_uni[:3])
print("\nFirst 3 y_uni samples:")
print(y_uni[:3])

# --- 2. Multivariate Time Series Example ---
print("\n--- Multivariate Time Series ---")
# Two correlated sine waves
multi_series_len = 200
feature1 = np.sin(np.linspace(0, 100, multi_series_len)) + np.random.randn(multi_series_len) * 0.1
feature2 = np.cos(np.linspace(0, 100, multi_series_len)) * 0.5 + np.random.randn(multi_series_len) * 0.05 + 0.5
multi_series = np.column_stack((feature1, feature2)) # Stack as columns (time_steps, num_features)

multi_look_back = 10
multi_horizon = 3

X_multi, y_multi = create_windows_dl(multi_series, multi_look_back, multi_horizon)

print(f"Multivariate Series Shape: {multi_series.shape}") # Expected: (time_steps, num_features)
print(f"Look-back: {multi_look_back}, Horizon: {multi_horizon}")
print(f"X_multi shape: {X_multi.shape}") # Expected: (samples, look_back, num_features)
print(f"y_multi shape: {y_multi.shape}") # Expected: (samples, horizon, num_features)
print("\nFirst 2 X_multi samples:")
print(X_multi[:2])
print("\nFirst 2 y_multi samples:")
print(y_multi[:2])

print("\n--- Discussion ---")
print("For univariate data, the last dimension of X and y is 1, representing a single feature.")
print("For multivariate data, the last dimension of X and y is `num_features` (e.g., 2 in this case).")
print("The `look_back` determines the length of the input sequence (second dimension of X).")
print("The `horizon` determines the length of the output sequence (second dimension of y).")
print("The first dimension ('samples') is the number of windows created, which decreases as `look_back` and `horizon` increase.")
```

#### Assessment idea
1.  **Question:** You are preparing a univariate time series for an LSTM model. You want to use the past 10 days of data to predict the temperature for the next 3 days. What would be the expected shape of your input `X` and target `y` NumPy arrays after appropriate windowing and reshaping for an LSTM? (Assume 100 total samples after windowing).
    *   A) `X.shape = (100, 10)`, `y.shape = (100, 3)`
    *   B) `X.shape = (100, 10, 1)`, `y.shape = (100, 3, 1)`
    *   C) `X.shape = (10, 100, 1)`, `y.shape = (3, 100, 1)`
    *   D) `X.shape = (100, 1, 10)`, `y.shape = (100, 1, 3)`

    **Correct Answer:** B) `X.shape = (100, 10, 1)`, `y.shape = (100, 3, 1)`
    **Explanation:** For LSTMs, the input shape is `(samples, timesteps, features)`. Here, `samples` is 100, `timesteps` (look-back) is 10, and `features` is 1 (univariate). The target `y` for multi-step forecasting also typically follows a `(samples, horizon, features)` structure, so `(100, 3, 1)`.

2.  **Question:** You have a time series dataset that spans from January 2020 to December 2023. After performing windowing, you want to split your `(X, y)` pairs into training, validation, and test sets. Which of the following splitting strategies is correct and why?
    *   A) Randomly shuffle all `(X, y)` pairs and then split them into 80% train, 10% validation, 10% test.
    *   B) Use `train_test_split` from `sklearn.model_selection` with `shuffle=True` to get 80% train, 20% test, and then split the training set again for validation.
    *   C) Split the `(X, y)` pairs chronologically: Use pairs from Jan 2020 - Dec 2022 for training, Jan 2023 - Jun 2023 for validation, and Jul 2023 - Dec 2023 for testing.
    *   D) Split the original raw time series into 80% train and 20% test, then perform windowing separately on each split.

    **Correct Answer:** C) Split the `(X, y)` pairs chronologically: Use pairs from Jan 2020 - Dec 2022 for training, Jan 2023 - Jun 2023 for validation, and Jul 2023 - Dec 2023 for testing.
    **Explanation:** For time series, it is crucial to maintain the temporal order. Randomly shuffling or splitting without regard for time (Options A and B) would introduce data leakage, as the model could learn from future data points present in the training set, leading to an unrealistic evaluation of its forecasting ability. Option D is also incorrect because windowing should ideally be done on the full sequence first, and then the generated `(X,y)` pairs are split chronologically. The correct approach (Option C) ensures that the model is always evaluated on data it has not seen from the past, mimicking a real-world forecasting scenario.

#### AI generation note
Create a 13-minute interactive code demo video. Begin with a simple 1D NumPy array. First, demonstrate the `create_windows` function for single-step univariate forecasting, showing the resulting `X` and `y` arrays and their shapes. Then, extend this to multi-step forecasting, again showing the output. Next, introduce a simple multivariate series and demonstrate `create_windows_dl`, emphasizing the 3D output shape for LSTMs. Use clear print statements for shapes and array contents. Visually highlight the "sliding" window process with animated overlays on the time series plot for a few steps. Conclude with a safety note on data leakage during chronological splitting, showing a correct and incorrect split. Include a small coding exercise to modify the windowing function to return `y` as a flattened 2D array for direct multi-output MLPs.
---

## Module 3: MLPs for Univariate Time Series Forecasting

Module 3: MLPs for Univariate Time Series Forecasting

### Chapter 3.1 — Introduction to MLPs for Time Series Forecasting

#### Learning objectives
*   Explain the fundamental concept of using Multi-Layer Perceptrons (MLPs) for time series forecasting.
*   Describe how time series data is transformed into a supervised learning problem suitable for MLPs using the sliding window method.
*   Identify the key components of an MLP architecture designed for univariate time series prediction.
*   Understand the limitations and common misconceptions when applying MLPs to sequential data.

#### Detailed lesson content
Welcome to Module 3, where we embark on our journey into applying deep learning models to time series data, starting with the foundational Multi-Layer Perceptron (MLP). You might be wondering why we're beginning with MLPs, which are typically associated with static, non-sequential data, when time series is inherently sequential. The answer lies in a clever data transformation technique: the sliding window method. While MLPs themselves do not inherently understand the temporal dependencies in data like recurrent neural networks do, we can *engineer* the input features to explicitly provide this temporal context. By presenting the MLP with a fixed-size "window" of past observations, we convert the time series forecasting problem into a standard supervised learning regression problem.

Consider a univariate time series, where we have a sequence of observations $x_1, x_2, \dots, x_t$. Our goal is to predict the next value, $x_{t+1}$, or perhaps a sequence of future values, $x_{t+1}, \dots, x_{t+h}$. For an MLP, we cannot simply feed $x_t$ and expect it to predict $x_{t+1}$ based on its memory of $x_{t-1}, x_{t-2}$, etc., because MLPs have no internal memory across sequential inputs. Instead, we create input-output pairs where the input `X` is a sequence of `n_steps_in` past observations, and the output `y` is the `n_steps_out` future observation(s). For example, to predict $x_{t+1}$ using the previous three values ($x_t, x_{t-1}, x_{t-2}$), our input `X` would be `[x_{t-2}, x_{t-1}, x_t]` and our output `y` would be `[x_{t+1}]`. This window then "slides" along the time series, generating multiple such input-output pairs. This process effectively creates a dataset where each row is an independent sample for the MLP, containing all the necessary temporal context within its features.

The architecture of an MLP for time series forecasting is straightforward. The input layer will have `n_steps_in` neurons, corresponding to the number of past observations in our sliding window. These inputs are fed into one or more hidden layers, typically dense layers with activation functions like ReLU (Rectified Linear Unit), which introduce non-linearity, allowing the model to learn complex relationships. Finally, the output layer will have `n_steps_out` neurons, corresponding to the number of future values we want to predict. For regression tasks like forecasting, the output layer usually employs a linear activation function, as we are predicting continuous values. The choice of the number of hidden layers and neurons per layer is a hyperparameter that often requires experimentation, but a common starting point is a few hidden layers with a decreasing number of neurons.

Let's illustrate with a simple conceptual example. Imagine we have a time series of daily temperature readings, and we want to predict tomorrow's temperature using the last 5 days' temperatures. Our sliding window size (`n_steps_in`) would be 5, and our forecast horizon (`n_steps_out`) would be 1.
An input sample `X` would look like `[Temp_Day-4, Temp_Day-3, Temp_Day-2, Temp_Day-1, Temp_Day]`.
The corresponding output `y` would be `[Temp_Day+1]`.
The MLP would then be trained to map these 5 input temperatures to the single output temperature.

A common mistake beginners make is to treat the time series as a sequence of independent points and feed them one by one to the MLP without the windowing transformation. This approach would completely strip the temporal context, leading to a model that simply tries to map a single past value to a future value, which is rarely effective for time series. Another pitfall is using an activation function like `softmax` or `sigmoid` in the output layer for a regression problem; these are for classification and will constrain the output to a specific range, which is inappropriate for predicting unbounded continuous values like temperature or stock prices. Always use a linear activation for regression outputs.

While MLPs are a good starting point due to their simplicity and ability to learn non-linear relationships, it's crucial to understand their inherent limitations for time series. They do not intrinsically model sequences or maintain a "memory" of past states. All temporal information must be explicitly encoded in the input features via the sliding window. This means that if the relevant temporal dependencies extend beyond the chosen window size, the MLP will not be able to capture them. Furthermore, MLPs struggle with very long-term dependencies or complex patterns that require understanding the order of events within the sequence, which is where more advanced architectures like Recurrent Neural Networks (RNNs) and Transformers excel. However, for many short-term forecasting tasks or when the temporal patterns are well-captured within a small window, MLPs can provide a surprisingly effective and computationally efficient baseline. This module will equip you with the skills to leverage MLPs effectively for such scenarios, setting a strong foundation for more complex models later in the course.

#### Key concepts
*   **Multi-Layer Perceptron (MLP):** A class of feedforward artificial neural networks consisting of at least three layers of nodes: an input layer, one or more hidden layers, and an output layer. Used for supervised learning tasks like regression and classification.
*   **Sliding Window Method:** A data transformation technique used to convert a time series forecasting problem into a supervised learning problem. It involves creating input-output pairs where the input is a sequence of past observations (the "window") and the output is one or more future observations.
*   **`n_steps_in` (Look-back window):** The number of past observations used as input features for predicting future values. This determines the size of the input layer in an MLP for time series.
*   **`n_steps_out` (Forecast horizon):** The number of future observations to be predicted by the model. This determines the size of the output layer in an MLP for time series.
*   **Univariate Time Series:** A time series consisting of observations of a single variable recorded over time.
*   **Linear Activation:** An activation function where the output is directly proportional to the input (i.e., `f(x) = x`). Commonly used in the output layer of regression models to allow for unbounded output values.

#### Hands-on activity
**Activity: Conceptualizing the Sliding Window**

Imagine you have the following univariate time series data: `[10, 12, 15, 13, 16, 18, 20, 19, 22, 25]`.
Your task is to transform this series into input-output pairs suitable for an MLP, where `n_steps_in = 3` and `n_steps_out = 1`.

**Instructions:**
1.  Manually create the first 3 input-output pairs (X, y) based on the given data and parameters.
2.  Write down the Python code using `numpy` to automate this transformation for the entire series.

**Code Template (for step 2):**
```python
import numpy as np

data = np.array([10, 12, 15, 13, 16, 18, 20, 19, 22, 25])
n_steps_in = 3
n_steps_out = 1

X, y = [], []
# Your code here to populate X and y using a loop and slicing
for i in range(len(data)):
    end_ix = i + n_steps_in
    out_end_ix = end_ix + n_steps_out
    if out_end_ix > len(data):
        break
    seq_x = data[i:end_ix]
    seq_y = data[end_ix:out_end_ix]
    X.append(seq_x)
    y.append(seq_y)

# Print the generated X and y to verify
print("Input sequences (X):", np.array(X))
print("Output targets (y):", np.array(y))
```

#### Assessment idea
1.  **Question:** You are building an MLP to forecast the next day's stock price using the previous 5 days' closing prices. If your time series data is `[100, 102, 101, 103, 105, 104, 106]`, what would be the first `(X, y)` pair generated by the sliding window method with `n_steps_in=5` and `n_steps_out=1`?
    *   A) `X=[100, 102, 101, 103, 105]`, `y=[104]`
    *   B) `X=[102, 101, 103, 105, 104]`, `y=[106]`
    *   C) `X=[100, 102, 101, 103, 105]`, `y=[106]`
    *   D) `X=[100, 102, 101, 103]`, `y=[105]`

    **Correct Answer:** A) `X=[100, 102, 101, 103, 105]`, `y=[104]`
    **Explanation:** The sliding window method takes `n_steps_in` consecutive values as input `X` and the next `n_steps_out` value(s) as the target `y`. For the first pair, `X` would be the first 5 values: `[100, 102, 101, 103, 105]`. The value immediately following this window, which is `104`, becomes the target `y`.

2.  **Question:** An MLP is being designed for a univariate time series forecasting task. The input layer has 10 neurons, and the output layer has 3 neurons. What do these numbers imply about the data transformation applied to the time series?
    *   A) The model uses 10 past observations to predict 3 future observations.
    *   B) The model uses 3 past observations to predict 10 future observations.
    *   C) The time series has 10 features, and the model predicts 3 categories.
    *   D) The batch size is 10, and there are 3 hidden layers.

    **Correct Answer:** A) The model uses 10 past observations to predict 3 future observations.
    **Explanation:** In an MLP for time series forecasting using the sliding window method, the number of input neurons corresponds to `n_steps_in` (the size of the look-back window), and the number of output neurons corresponds to `n_steps_out` (the forecast horizon). Therefore, 10 input neurons mean `n_steps_in = 10`, and 3 output neurons mean `n_steps_out = 3`.

#### AI generation note
Create a 10-minute animated video explaining the sliding window concept. Use a simple numerical time series `[10, 12, 15, 13, 16, 18, 20]` as an example. Visually demonstrate the window (`n_steps_in=3`, `n_steps_out=1`) sliding across the series, highlighting the `X` and `y` values generated at each step. Show a simple MLP diagram with input (3 nodes), one hidden layer (5 nodes), and output (1 node) to illustrate the architecture. Use clear text overlays for `n_steps_in`, `n_steps_out`, and the resulting `X, y` pairs. Include a reflection prompt: "How would the input shape change if we wanted to predict the next 2 values instead of 1?"

---

### Chapter 3.2 — Data Preparation for MLP Time Series Models

#### Learning objectives
*   Implement the sliding window transformation using Python to create supervised learning datasets from univariate time series.
*   Correctly reshape input data for MLP models in TensorFlow/Keras.
*   Apply appropriate scaling techniques (normalization or standardization) to time series data.
*   Perform a chronological train-test split suitable for time series forecasting.

#### Detailed lesson content
Effective data preparation is paramount for any machine learning task, and time series forecasting with MLPs is no exception. The core of preparing univariate time series data for an MLP lies in transforming it from a sequential list of observations into a dataset of input-output pairs using the sliding window method, as introduced in the previous chapter. This process creates `X` (features, or past observations) and `y` (labels, or future observations) that an MLP can learn from.

Let's dive into the practical implementation of the sliding window. We'll use Python with `numpy` for efficiency. The `create_dataset` function takes your raw time series, `n_steps_in`, and `n_steps_out` as arguments. It iterates through the series, extracting a segment of `n_steps_in` values for the input `X` and the subsequent `n_steps_out` values for the target `y`. It's crucial to handle the array indexing correctly to ensure that `X` and `y` align perfectly. A common mistake here is off-by-one errors in slicing, or not considering the full extent of the data, which can lead to `IndexError` or incorrect pairings.

```python
import numpy as np

def create_dataset(series, n_steps_in, n_steps_out):
    X, y = [], []
    for i in range(len(series)):
        # find the end of this pattern for the input sequence
        end_ix = i + n_steps_in
        # find the end of this pattern for the output sequence
        out_end_ix = end_ix + n_steps_out
        # check if we are beyond the series length for creating a full output sequence
        if out_end_ix > len(series):
            break
        # gather input and output parts of the pattern
        seq_x, seq_y = series[i:end_ix], series[end_ix:out_end_ix]
        X.append(seq_x)
        y.append(seq_y)
    return np.array(X), np.array(y)

# Example usage:
raw_series = np.array([10, 12, 15, 13, 16, 18, 20, 19, 22, 25, 23, 26, 28, 30])
n_steps_in = 3
n_steps_out = 1

X_data, y_data = create_dataset(raw_series, n_steps_in, n_steps_out)
print("Generated X_data shape:", X_data.shape)
print("Generated y_data shape:", y_data.shape)
print("First 3 X samples:\n", X_data[:3])
print("First 3 y samples:\n", y_data[:3])
```
The output of `create_dataset` will be `X_data` with shape `(n_samples, n_steps_in)` and `y_data` with shape `(n_samples, n_steps_out)`. For an MLP, the input layer expects a 2D array where each row is a sample and each column is a feature. Our `X_data` already fits this `(n_samples, n_steps_in)` shape perfectly. If `n_steps_out` is 1, `y_data` will be `(n_samples, 1)`, which is also suitable for Keras regression targets. If `n_steps_out` is greater than 1, `y_data` will be `(n_samples, n_steps_out)`, allowing the MLP to predict multiple future steps simultaneously.

Next, we address data scaling. Time series data often contains values with varying magnitudes, which can impede the training of neural networks. Gradient descent algorithms perform better when input features are on a similar scale. Two common techniques are Normalization (Min-Max Scaling) and Standardization (Z-score Scaling).
*   **Normalization** scales data to a fixed range, typically `[0, 1]`. This is useful when you know the approximate bounds of your data or when working with activation functions like sigmoid that output values in a `[0, 1]` range.
*   **Standardization** scales data to have a mean of 0 and a standard deviation of 1. This is generally preferred when the data distribution is Gaussian or when you don't know the exact bounds of your data. For time series, standardization is often a robust choice.

It is critical to fit the scaler *only* on the training data and then transform both the training and test sets using that *same* fitted scaler. Applying a scaler fitted on the entire dataset (including future test data) would be a form of data leakage, leading to overly optimistic performance estimates.

```python
from sklearn.preprocessing import MinMaxScaler, StandardScaler

# Chronological train-test split:
# It's crucial to split the data *before* scaling to prevent data leakage.
split_ratio = 0.8 # 80% for training, 20% for testing
train_size = int(len(X_data) * split_ratio)

X_train, y_train = X_data[:train_size], y_data[:train_size]
X_test, y_test = X_data[train_size:], y_data[train_size:]

print(f"Original X_train shape: {X_train.shape}, y_train shape: {y_train.shape}")
print(f"Original X_test shape: {X_test.shape}, y_test shape: {y_test.shape}")

# Now, apply scaling. Important: Fit on X_train, transform X_train and X_test.
# Also, fit on y_train, transform y_train and y_test if y values need scaling.
# For regression, it's common to scale both X and y, then inverse_transform y_pred for evaluation.

X_scaler = StandardScaler()
X_train_scaled = X_scaler.fit_transform(X_train)
X_test_scaled = X_scaler.transform(X_test) # Use the *same* scaler fitted on X_train

y_scaler = StandardScaler() # Create a separate scaler for y
y_train_scaled = y_scaler.fit_transform(y_train)
y_test_scaled = y_scaler.transform(y_test) # Transform y_test using the scaler fitted on y_train

print("\nShapes after scaling and splitting:")
print(f"X_train_scaled shape: {X_train_scaled.shape}, y_train_scaled shape: {y_train_scaled.shape}")
print(f"X_test_scaled shape: {X_test_scaled.shape}, y_test_scaled shape: {y_test_scaled.shape}")
```
A common mistake during scaling is to apply `fit_transform` directly on the entire `X_test` or `y_test` or even worse, fitting the scaler on the combined dataset. This leaks information from the future (test set) into the scaling parameters, leading to an overly optimistic model performance. Always fit the scaler *only* on the training data and then use `transform` for both training and test sets. When evaluating, remember to `inverse_transform` the model's predictions back to the original scale to make them interpretable and comparable with the original `y_test` values. This ensures a fair and realistic assessment of your model's forecasting ability.

By meticulously following these data preparation steps—sliding window transformation, chronological splitting, and appropriate scaling—you lay a robust foundation for building and training effective MLP models for univariate time series forecasting.

#### Key concepts
*   **Data Reshaping:** The process of changing the dimensions of an array or tensor to match the input requirements of a model. For MLPs, input data is typically 2D (`(samples, features)`).
*   **Normalization (Min-Max Scaling):** A data scaling technique that rescales numerical features to a specific range, typically `[0, 1]`, using the formula `(x - min) / (max - min)`.
*   **Standardization (Z-score Scaling):** A data scaling technique that transforms numerical features to have a mean of 0 and a standard deviation of 1, using the formula `(x - mean) / std_dev`.
*   **Chronological Train-Test Split:** A method of splitting time series data where the training set consists of earlier observations and the test set consists of later observations, preserving the temporal order.
*   **Data Leakage:** The unintentional introduction of information from the test set into the training process, leading to an artificially inflated performance evaluation.
*   **`fit_transform`:** A method in scikit-learn scalers that calculates the scaling parameters (e.g., mean and standard deviation for `StandardScaler`) from the data and then applies the transformation.
*   **`transform`:** A method in scikit-learn scalers that applies the transformation using *already fitted* scaling parameters.

#### Hands-on activity
**Activity: Prepare a Synthetic Time Series Dataset**

You are given a synthetic time series representing daily website visits. Your task is to apply the full data preparation pipeline: sliding window, chronological split, and standardization.

**Instructions:**
1.  Generate a synthetic time series using `np.sin` or similar, adding some noise.
2.  Apply the `create_dataset` function (provided in the lesson content or your own) with `n_steps_in = 5` and `n_steps_out = 2`.
3.  Perform a chronological train-test split, reserving 20% of the data for testing.
4.  Standardize both `X_train`, `X_test`, `y_train`, and `y_test` using `StandardScaler`. Remember to fit scalers only on training data.

**Code Template:**
```python
import numpy as np
from sklearn.preprocessing import StandardScaler

# 1. Generate synthetic time series
np.random.seed(42)
time = np.arange(100)
series = 10 * np.sin(time / 10) + np.random.normal(size=len(time), scale=1.5) + 50
series = series.astype(float) # Ensure float type

# Function to create dataset (copy from lesson or define here)
def create_dataset(series, n_steps_in, n_steps_out):
    X, y = [], []
    for i in range(len(series)):
        end_ix = i + n_steps_in
        out_end_ix = end_ix + n_steps_out
        if out_end_ix > len(series):
            break
        seq_x, seq_y = series[i:end_ix], series[end_ix:out_end_ix]
        X.append(seq_x)
        y.append(seq_y)
    return np.array(X), np.array(y)

# Define parameters
n_steps_in = 5
n_steps_out = 2

# 2. Apply sliding window
X_raw, y_raw = create_dataset(series, n_steps_in, n_steps_out)
print(f"Raw X shape: {X_raw.shape}, Raw y shape: {y_raw.shape}")

# 3. Perform chronological train-test split
split_ratio = 0.8
train_size = int(len(X_raw) * split_ratio)

X_train, y_train = X_raw[:train_size], y_raw[:train_size]
X_test, y_test = X_raw[train_size:], y_raw[train_size:]

print(f"X_train shape: {X_train.shape}, y_train shape: {y_train.shape}")
print(f"X_test shape: {X_test.shape}, y_test shape: {y_test.shape}")

# 4. Standardize data
X_scaler = StandardScaler()
X_train_scaled = X_scaler.fit_transform(X_train)
X_test_scaled = X_scaler.transform(X_test)

y_scaler = StandardScaler()
y_train_scaled = y_scaler.fit_transform(y_train)
y_test_scaled = y_scaler.transform(y_test)

print(f"X_train_scaled shape: {X_train_scaled.shape}, y_train_scaled shape: {y_train_scaled.shape}")
print(f"y_train_scaled mean: {y_train_scaled.mean():.2f}, std: {y_train_scaled.std():.2f}") # Verify scaling
print(f"X_test_scaled shape: {X_test_scaled.shape}, y_test_scaled shape: {y_test_scaled.shape}")

# Verify mean and std dev of scaled training data (should be close to 0 and 1)
print(f"\nX_train_scaled mean: {X_train_scaled.mean():.2f}, std: {X_train_scaled.std():.2f}")
print(f"y_train_scaled mean: {y_train_scaled.mean():.2f}, std: {y_train_scaled.std():.2f}")
```

#### Assessment idea
1.  **Question:** You have a univariate time series `[20, 22, 25, 23, 26, 28, 30]`. You want to create input-output pairs for an MLP with `n_steps_in=2` and `n_steps_out=1`. Which of the following `(X, y)` pairs would *not* be generated by the `create_dataset` function as described in the lesson?
    *   A) `X=[20, 22]`, `y=[25]`
    *   B) `X=[22, 25]`, `y=[23]`
    *   C) `X=[26, 28]`, `y=[30]`
    *   D) `X=[28, 30]`, `y=[?]` (This pair would be generated, but `y` would be missing)

    **Correct Answer:** D) `X=[28, 30]`, `y=[?]`
    **Explanation:** The `create_dataset` function includes a check `if out_end_ix > len(series): break`. For `X=[28, 30]`, `i` would be 5, `end_ix` would be `5+2=7`. `out_end_ix` would be `7+1=8`. Since `len(series)` is 7, `out_end_ix` (8) is greater than `len(series)` (7), so the loop would break before this pair is generated. The last valid pair would be `X=[26, 28]`, `y=[30]`.

2.  **Question:** When scaling time series data for an MLP, you perform a chronological train-test split. Which of the following is the correct sequence of operations for `StandardScaler` to avoid data leakage?
    *   A) `scaler.fit_transform(X_train)`, `scaler.fit_transform(X_test)`
    *   B) `scaler.fit(X_train)`, `scaler.transform(X_train)`, `scaler.transform(X_test)`
    *   C) `scaler.fit_transform(X_train)`, `scaler.transform(X_test)`
    *   D) `scaler.fit_transform(X_data_full)`, then split `X_data_full` into `X_train` and `X_test`

    **Correct Answer:** C) `scaler.fit_transform(X_train)`, `scaler.transform(X_test)`
    **Explanation:** Option C correctly fits the scaler only on the training data (`fit_transform(X_train)`), which calculates the mean and standard deviation from the training set and applies the transformation. Then, it uses the *same* fitted scaler to transform the test set (`transform(X_test)`) without recalculating parameters from the test data. Option A incorrectly fits a new scaler on the test set. Option B is functionally similar to C but `fit_transform` is a convenience method for `fit` then `transform`. Option D causes data leakage by fitting the scaler on the entire dataset, including future information.

#### AI generation note
Produce a 12-minute interactive code demo in a Jupyter Notebook environment. Start with raw `numpy` array data. Walk through the `create_dataset` function step-by-step, showing intermediate `X` and `y` values. Then, demonstrate the chronological train-test split with clear index slicing. Finally, implement `StandardScaler` for `X_train`, `X_test`, `y_train`, and `y_test`, emphasizing the `fit_transform` on training and `transform` on test. Include print statements for shapes and a mini-quiz asking about the importance of chronological splitting. Visual style should be side-by-side code and output, with annotations highlighting key lines.

---

### Chapter 3.3 — Building and Training a Basic MLP Model

#### Learning objectives
*   Design a basic Multi-Layer Perceptron (MLP) architecture for univariate time series forecasting using TensorFlow/Keras.
*   Select appropriate activation functions, loss functions, and optimizers for regression-based time series tasks.
*   Implement the training process for an MLP model, including specifying epochs and batch size.
*   Interpret the training loss curve to identify potential issues like underfitting or overfitting.

#### Detailed lesson content
With our data meticulously prepared, we are now ready to construct and train our first deep learning model for time series forecasting: a basic Multi-Layer Perceptron. We will use TensorFlow with its high-level Keras API, which simplifies the process of building and training neural networks. Keras allows us to stack layers sequentially, making model definition intuitive.

The core of our MLP will consist of `Dense` layers. A `Dense` layer is a fully connected layer, meaning every neuron in the previous layer connects to every neuron in the current layer. For our time series input, which is a 2D array of shape `(n_samples, n_steps_in)`, the input layer of our MLP will implicitly infer its input shape from the first `Dense` layer's `input_shape` argument. This `input_shape` should correspond to `(n_steps_in,)` because Keras expects the shape of a single sample, not the batch dimension.

Let's define a simple MLP for a scenario where `n_steps_in = 5` and `n_steps_out = 1`.

```python
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
import numpy as np # For dummy data generation

# Assume X_train_scaled has shape (n_samples, n_steps_in)
# and y_train_scaled has shape (n_samples, n_steps_out)
# Let's define n_steps_in and n_steps_out for this example
n_steps_in = 5
n_steps_out = 1 # For univariate single-step prediction

# 1. Define the model architecture
model = Sequential()
# Input layer: The first Dense layer needs input_shape
model.add(Dense(100, activation='relu', input_shape=(n_steps_in,))) # 100 neurons in first hidden layer
# Hidden layers: More Dense layers with ReLU activation
model.add(Dense(50, activation='relu')) # 50 neurons in second hidden layer
# Output layer: n_steps_out neurons, linear activation for regression
model.add(Dense(n_steps_out, activation='linear')) # Output layer for predicting 1 value

# Print a summary of the model to see the layers and parameters
model.summary()
```

In this architecture:
*   We start with a `Dense` layer of 100 neurons. The `input_shape=(n_steps_in,)` tells Keras that each input sample will be a vector of `n_steps_in` features. `relu` (Rectified Linear Unit) is a popular activation function for hidden layers due to its computational efficiency and ability to mitigate the vanishing gradient problem.
*   We add another `Dense` layer with 50 neurons, also using `relu`. You can add more hidden layers or adjust the number of neurons based on the complexity of your problem.
*   The final `Dense` layer has `n_steps_out` neurons and uses a `linear` activation function. For regression problems where we predict continuous values, a linear activation is crucial because it allows the output to take any real value, unlike `sigmoid` or `softmax` which constrain outputs to specific ranges (e.g., 0-1 for probabilities). Using an incorrect activation here is a common mistake that severely limits the model's predictive range.

Once the model architecture is defined, we need to `compile` it. Compilation configures the model for training by specifying the `optimizer`, `loss function`, and optionally `metrics`.
*   **Optimizer:** The optimizer is an algorithm used to update the weights and biases of the neural network during training to minimize the loss function. `Adam` (Adaptive Moment Estimation) is a highly recommended and widely used optimizer that often performs well in practice. Other options include `SGD`, `RMSprop`, etc.
*   **Loss Function:** For regression tasks like time series forecasting, common loss functions include Mean Squared Error (`mse`), Mean Absolute Error (`mae`), or Huber loss. `MSE` penalizes larger errors more heavily, while `MAE` provides a more robust measure of average error. We'll start with `mse`.
*   **Metrics:** While the model optimizes for the loss function, we can also monitor other metrics during training. `mae` is often a good choice to monitor alongside `mse` as it's more interpretable in the original scale of the data.

```python
# 2. Compile the model
model.compile(optimizer='adam', loss='mse', metrics=['mae'])
```

Now, the model is ready for training. We use the `model.fit()` method, passing our prepared training data (`X_train_scaled`, `y_train_scaled`), and specifying `epochs` and `batch_size`.
*   **Epochs:** An epoch represents one full pass through the entire training dataset. More epochs generally allow the model to learn more, but too many can lead to overfitting.
*   **Batch Size:** The number of samples processed before the model's internal parameters are updated. A larger batch size provides a more stable gradient estimate but requires more memory. A smaller batch size introduces more noise but can help escape local minima.

```python
# 3. Train the model
# For demonstration, let's create some dummy scaled data matching the shapes
# In a real scenario, these would come from Chapter 3.2's data preparation.
dummy_X_train_scaled = np.random.rand(100, n_steps_in)
dummy_y_train_scaled = np.random.rand(100, n_steps_out)

print("\nStarting model training...")
history = model.fit(dummy_X_train_scaled, dummy_y_train_scaled,
                    epochs=50,          # Number of times to iterate over the entire dataset
                    batch_size=32,      # Number of samples per gradient update
                    verbose=1)          # Display training progress

# Access training history (loss and metrics per epoch)
print("\nTraining History Keys:", history.history.keys())
```

During training, Keras will print the loss and metrics for each epoch. It's crucial to monitor these values. If the loss decreases steadily, the model is learning. If the loss plateaus or starts increasing significantly on a validation set (which we'll introduce in later modules for proper monitoring), it could indicate issues like underfitting (not enough epochs or model capacity) or overfitting (too many epochs, model memorizing training data). For now, we're just looking at training loss. A common mistake is to train for too few epochs, leading to an underfit model that hasn't fully learned the patterns in the data. Conversely, training for too many epochs without proper regularization can lead to overfitting, where the model performs excellently on training data but poorly on unseen data.

By understanding these steps, you can effectively build and train a foundational MLP model for univariate time series forecasting. This basic structure will serve as a stepping stone for more advanced deep learning architectures.

#### Key concepts
*   **`Sequential` Model (Keras):** A linear stack of layers, used for building simple neural network architectures where each layer has exactly one input tensor and one output tensor.
*   **`Dense` Layer (Keras):** A fully connected neural network layer where each neuron receives input from all neurons of the previous layer.
*   **`input_shape`:** The shape of a single input sample (excluding the batch dimension) expected by the first layer of a Keras model.
*   **`activation` Function:** A function applied to the output of a neuron to introduce non-linearity into the model, enabling it to learn complex patterns. Common examples include `relu`, `sigmoid`, `tanh`, `linear`.
*   **`compile` Method:** Configures the model for training by specifying the optimizer, loss function, and metrics.
*   **`optimizer`:** An algorithm (e.g., Adam, SGD) used to adjust the model's weights and biases during training to minimize the loss function.
*   **`loss` Function:** A measure of how well the model's predictions match the true target values. The goal of training is to minimize this function. For regression, `mse` (Mean Squared Error) and `mae` (Mean Absolute Error) are common.
*   **`fit` Method:** The method used to train the model on the provided training data for a specified number of epochs and batch size.
*   **`epochs`:** One complete pass through the entire training dataset.
*   **`batch_size`:** The number of training samples processed in one forward and backward pass before the model's parameters are updated.

#### Hands-on activity
**Activity: Build and Train an MLP for Temperature Forecasting**

Using the `X_train_scaled` and `y_train_scaled` data from the previous activity (or generate dummy data with appropriate shapes if you skipped it), build and train an MLP model to forecast the next two temperature values.

**Instructions:**
1.  Define an MLP model using `Sequential` with:
    *   An input `Dense` layer with 128 neurons and `relu` activation. `input_shape` should match `n_steps_in`.
    *   One or two additional `Dense` hidden layers (e.g., 64 neurons, `relu`).
    *   An output `Dense` layer with `n_steps_out` neurons and `linear` activation.
2.  Compile the model using the `adam` optimizer and `mse` loss, also tracking `mae`.
3.  Train the model for 100 epochs with a `batch_size` of 32.
4.  Print the model summary and the keys of the training history.

**Code Template:**
```python
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
import numpy as np

# Assume these are from your data preparation (Chapter 3.2)
# Or create dummy data for demonstration if needed:
n_samples = 80 # Example number of training samples
n_steps_in = 5
n_steps_out = 2

# Dummy scaled data (replace with your actual scaled data from previous activity)
X_train_scaled = np.random.rand(n_samples, n_steps_in)
y_train_scaled = np.random.rand(n_samples, n_steps_out)

# 1. Define the model architecture
model = Sequential()
model.add(Dense(128, activation='relu', input_shape=(n_steps_in,)))
model.add(Dense(64, activation='relu'))
model.add(Dense(n_steps_out, activation='linear')) # Output layer for n_steps_out predictions

# Print model summary
model.summary()

# 2. Compile the model
model.compile(optimizer='adam', loss='mse', metrics=['mae'])

# 3. Train the model
print("\nStarting model training...")
history = model.fit(X_train_scaled, y_train_scaled,
                    epochs=100,
                    batch_size=32,
                    verbose=0) # Set verbose=0 to suppress per-epoch output for cleaner activity output

print("\nModel training complete.")

# 4. Print training history keys
print("Training History Keys:", history.history.keys())
# You can also plot history.history['loss'] and history.history['mae'] later
```

#### Assessment idea
1.  **Question:** You are building an MLP for time series forecasting where `n_steps_in=10` and `n_steps_out=3`. Which Keras model definition is correctly structured for this task, assuming `relu` activation for hidden layers?
    *   A) `model = Sequential(); model.add(Dense(64, activation='relu', input_shape=(10,))); model.add(Dense(3, activation='softmax'))`
    *   B) `model = Sequential(); model.add(Dense(64, activation='relu', input_shape=(10,))); model.add(Dense(3, activation='linear'))`
    *   C) `model = Sequential(); model.add(Dense(10, activation='relu')); model.add(Dense(3, activation='linear'))`
    *   D) `model = Sequential(); model.add(Dense(64, activation='linear', input_shape=(10,))); model.add(Dense(3, activation='relu'))`

    **Correct Answer:** B) `model = Sequential(); model.add(Dense(64, activation='relu', input_shape=(10,))); model.add(Dense(3, activation='linear'))`
    **Explanation:**
    *   The `input_shape` for the first `Dense` layer should be `(n_steps_in,)`, which is `(10,)`.
    *   Hidden layers typically use `relu` for non-linearity.
    *   The output layer should have `n_steps_out` neurons (3 in this case) and use `linear` activation for regression tasks to allow for continuous, unbounded predictions.
    *   Option A uses `softmax` which is for classification. Option C misses `input_shape` in the first layer and uses `n_steps_in` as the number of neurons, which is not necessarily correct. Option D uses `linear` for hidden and `relu` for output, which is incorrect.

2.  **Question:** During the training of an MLP for time series forecasting, you observe that the training loss decreases steadily, but the Mean Absolute Error (MAE) on a separate validation set (not shown in this chapter, but imagine it exists) starts to increase after a certain number of epochs. What is the most likely issue, and what is a common technique to address it?
    *   A) Underfitting; increase the learning rate.
    *   B) Overfitting; add more layers to the model.
    *   C) Underfitting; decrease the batch size.
    *   D) Overfitting; implement early stopping or dropout.

    **Correct Answer:** D) Overfitting; implement early stopping or dropout.
    **Explanation:** If training loss continues to decrease but validation error starts to increase, it's a classic sign of overfitting. The model is memorizing the training data too well and losing its ability to generalize to unseen data. Early stopping (halting training when validation performance degrades) and dropout (randomly deactivating neurons during training to prevent co-adaptation) are effective regularization techniques to combat overfitting.

#### AI generation note
Create a 15-minute live coding video demonstrating the full process of building and training an MLP in Keras. Start with `X_train_scaled` and `y_train_scaled` data (can be dummy data or from the previous chapter's activity). Walk through `Sequential` model definition, adding `Dense` layers with `relu` and `linear` activations, and explaining `input_shape`. Show `model.summary()`. Then, compile the model with `adam` and `mse`. Finally, call `model.fit()` and explain `epochs` and `batch_size`. Visualize the training process by plotting the `history.history['loss']` curve using `matplotlib`. Include a checkpoint where the learner is asked to modify the number of neurons in a hidden layer and observe the change in the model summary.

---

### Chapter 3.4 — Evaluating MLP Time Series Forecasts

#### Learning objectives
*   Generate predictions from a trained MLP model on unseen test data.
*   Calculate and interpret common regression metrics (MAE, MSE, RMSE, R²) for time series forecasting.
*   Visualize actual vs. predicted values to qualitatively assess model performance.
*   Understand the importance of inverse scaling predictions for meaningful interpretation.

#### Detailed lesson content
After successfully building and training an MLP model, the next critical step is to evaluate its performance on unseen data. This assessment determines how well our model generalizes and whether it can make accurate predictions on future time steps. We'll use the `X_test_scaled` data, which the model has never encountered during training, to generate forecasts.

The first step is to make predictions using the `model.predict()` method. Remember that our model was trained on scaled data, so its predictions will also be in the scaled range. For meaningful interpretation and comparison with the original `y_test` values, we must `inverse_transform` these predictions back to their original scale using the `y_scaler` that was fitted on the training targets. This is a crucial step that is often overlooked by beginners, leading to misinterpretations of model performance.

```python
# Assuming 'model' is your trained Keras model,
# X_test_scaled and y_test_scaled are from Chapter 3.2,
# and y_scaler is the StandardScaler fitted on y_train.
# For demonstration, let's use dummy data and a dummy scaler/model.

import numpy as np
from sklearn.preprocessing import StandardScaler
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense

# Dummy setup for demonstration
n_samples_test = 20
n_steps_in = 5
n_steps_out = 1

X_test_scaled = np.random.rand(n_samples_test, n_steps_in)
y_test_scaled = np.random.rand(n_samples_test, n_steps_out)

# Dummy y_scaler (in a real scenario, this would be the actual scaler fitted on y_train)
# We need a fitted scaler to inverse_transform.
dummy_y_data_for_scaler_fit = np.random.rand(100, n_steps_out) * 100 + 50 # Simulate original scale
y_scaler = StandardScaler()
y_scaler.fit(dummy_y_data_for_scaler_fit)

# Dummy trained model (replace with your actual trained model)
model = Sequential([
    Dense(100, activation='relu', input_shape=(n_steps_in,)),
    Dense(50, activation='relu'),
    Dense(n_steps_out, activation='linear')
])
model.compile(optimizer='adam', loss='mse')
# A minimal 'fit' is needed for predict to work, even if on dummy data
model.fit(np.random.rand(100, n_steps_in), np.random.rand(100, n_steps_out), epochs=1, verbose=0)

# 1. Make predictions on the scaled test set
y_pred_scaled = model.predict(X_test_scaled)

# 2. Inverse transform predictions and actual test values to original scale
y_pred = y_scaler.inverse_transform(y_pred_scaled)
y_actual = y_scaler.inverse_transform(y_test_scaled)

print(f"Shape of inverse-transformed predictions: {y_pred.shape}")
print(f"Shape of inverse-transformed actuals: {y_actual.shape}")
```

Once we have our predictions and actual values in their original scale, we can calculate various regression metrics to quantify the model's performance.
*   **Mean Absolute Error (MAE):** This is the average of the absolute differences between predictions and actual values. It's robust to outliers and easily interpretable, as it's in the same units as the original data. A lower MAE indicates better performance.
    $MAE = \frac{1}{N} \sum_{i=1}^{N} |y_{actual,i} - y_{pred,i}|$
*   **Mean Squared Error (MSE):** This is the average of the squared differences between predictions and actual values. It penalizes larger errors more heavily than MAE. It's often used as a loss function during training.
    $MSE = \frac{1}{N} \sum_{i=1}^{N} (y_{actual,i} - y_{pred,i})^2$
*   **Root Mean Squared Error (RMSE):** The square root of MSE. It brings the error back to the original units of the data, making it more interpretable than MSE. RMSE is particularly sensitive to large errors.
    $RMSE = \sqrt{MSE}$
*   **R-squared ($R^2$) Score:** This metric represents the proportion of the variance in the dependent variable that is predictable from the independent variables. An $R^2$ of 1 indicates a perfect fit, while 0 indicates the model explains none of the variance. For time series, a negative $R^2$ can occur if the model performs worse than a simple horizontal line (mean) prediction.

```python
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import math

# Calculate metrics
mae = mean_absolute_error(y_actual, y_pred)
mse = mean_squared_error(y_actual, y_pred)
rmse = math.sqrt(mse)
r2 = r2_score(y_actual, y_pred)

print(f"\nEvaluation Metrics:")
print(f"Mean Absolute Error (MAE): {mae:.4f}")
print(f"Mean Squared Error (MSE): {mse:.4f}")
print(f"Root Mean Squared Error (RMSE): {rmse:.4f}")
print(f"R-squared (R2) Score: {r2:.4f}")
```
Interpreting these metrics requires domain knowledge. An MAE of 5 units might be excellent for predicting stock prices but terrible for predicting precise sensor readings. Always compare your model's performance against a simple baseline (e.g., predicting the last known value, or a moving average) to understand if your deep learning model offers a significant improvement.

Beyond quantitative metrics, it's incredibly valuable to visualize your forecasts. Plotting the actual values against the predicted values over the test period can reveal patterns of error, such as consistent over- or under-prediction, or difficulty in capturing peaks and troughs. This qualitative assessment can provide insights that numerical metrics alone might miss.

```python
import matplotlib.pyplot as plt

# If n_steps_out > 1, we might plot the first predicted step
# For simplicity, assume n_steps_out = 1 for plotting or plot the first output dimension
if y_actual.shape[1] > 1:
    print("\nWarning: Plotting only the first predicted step (y_pred[:, 0]) for visualization.")
    plot_y_actual = y_actual[:, 0]
    plot_y_pred = y_pred[:, 0]
else:
    plot_y_actual = y_actual.flatten()
    plot_y_pred = y_pred.flatten()

plt.figure(figsize=(12, 6))
plt.plot(plot_y_actual, label='Actual Values', color='blue')
plt.plot(plot_y_pred, label='Predicted Values', color='red', linestyle='--')
plt.title('MLP Forecast vs. Actuals on Test Set')
plt.xlabel('Time Step (in Test Set)')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()
```
A common mistake during evaluation is to compare scaled predictions with unscaled actuals, or vice-versa. This will lead to completely incorrect error calculations. Another pitfall is evaluating on the training set and reporting those metrics as the model's true performance; this gives an overly optimistic view because the model has already seen that data. Always use a separate, unseen test set for final evaluation. For time series, it's also important to consider the concept of "walk-forward validation" for a more robust evaluation, especially if the data distribution changes over time. This involves re-training or updating the model as new data becomes available, simulating a real-world forecasting scenario. While we won't implement full walk-forward validation here, understanding its principle is key for advanced time series forecasting.

By systematically applying these evaluation techniques, you gain a comprehensive understanding of your MLP's performance and its readiness for real-world application.

#### Key concepts
*   **`model.predict()`:** A Keras method used to generate predictions from a trained model on new input data.
*   **Inverse Transformation:** The process of converting scaled data back to its original scale using the inverse of the scaler that was originally fitted. Essential for interpreting model predictions.
*   **Mean Absolute Error (MAE):** An average of the absolute differences between predicted and actual values.
*   **Mean Squared Error (MSE):** An average of the squared differences between predicted and actual values, penalizing larger errors more.
*   **Root Mean Squared Error (RMSE):** The square root of MSE, bringing the error back to the original units of the data.
*   **R-squared ($R^2$) Score:** A statistical measure representing the proportion of the variance in the dependent variable that is predictable from the independent variables.
*   **Qualitative Assessment:** Evaluating model performance by visually inspecting plots of predictions against actuals.
*   **Walk-Forward Validation:** A robust evaluation strategy for time series models where the model is iteratively re-trained or updated with new data as it becomes available, simulating a real-world deployment.

#### Hands-on activity
**Activity: Evaluate Your Trained MLP**

Using the trained MLP model from the previous activity and the `X_test_scaled`, `y_test_scaled`, and `y_scaler` (or dummy equivalents), perform the following evaluation steps.

**Instructions:**
1.  Make predictions on `X_test_scaled` using your trained `model`.
2.  Inverse transform both the predictions and `y_test_scaled` back to their original scale using `y_scaler`.
3.  Calculate and print MAE, MSE, RMSE, and R² scores.
4.  Create a plot showing the actual values vs. predicted values for the test set.

**Code Template:**
```python
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
import numpy as np
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score
import math
import matplotlib.pyplot as plt

# --- Setup from previous activities (replace with your actual data/model if available) ---
n_samples_train = 80
n_samples_test = 20
n_steps_in = 5
n_steps_out = 2

# Dummy scaled data for X_test, y_test
X_test_scaled = np.random.rand(n_samples_test, n_steps_in)
y_test_scaled = np.random.rand(n_samples_test, n_steps_out)

# Dummy y_scaler (in a real scenario, this would be the actual scaler fitted on y_train)
# For this activity, we need a fitted scaler to inverse_transform.
# Let's create a dummy one that can inverse_transform the random y_test_scaled.
# In a real scenario, you'd save/pass the y_scaler from your training data preparation.
dummy_y_data_for_scaler_fit = np.random.rand(n_samples_train, n_steps_out) * 100 + 50 # Simulate original scale
y_scaler = StandardScaler()
y_scaler.fit(dummy_y_data_for_scaler_fit)

# Dummy trained model (replace with your actual trained model)
model = Sequential([
    Dense(128, activation='relu', input_shape=(n_steps_in,)),
    Dense(64, activation='relu'),
    Dense(n_steps_out, activation='linear')
])
model.compile(optimizer='adam', loss='mse')
# A minimal 'fit' is needed for predict to work, even if on dummy data
model.fit(np.random.rand(n_samples_train, n_steps_in), np.random.rand(n_samples_train, n_steps_out), epochs=1, verbose=0)
# --- End setup ---

# 1. Make predictions
y_pred_scaled = model.predict(X_test_scaled)

# 2. Inverse transform predictions and actuals
y_pred = y_scaler.inverse_transform(y_pred_scaled)
y_actual = y_scaler.inverse_transform(y_test_scaled)

print(f"First 5 actual values (original scale):\n{y_actual[:5]}")
print(f"First 5 predicted values (original scale):\n{y_pred[:5]}")

# 3. Calculate and print metrics
mae = mean_absolute_error(y_actual, y_pred)
mse = mean_squared_error(y_actual, y_pred)
rmse = math.sqrt(mse)
r2 = r2_score(y_actual, y_pred)

print(f"\nEvaluation Metrics:")
print(f"MAE: {mae:.4f}")
print(f"MSE: {mse:.4f}")
print(f"RMSE: {rmse:.4f}")
print(f"R2 Score: {r2:.4f}")

# 4. Plot actual vs. predicted values
# For n_steps_out > 1, we plot the first predicted step for simplicity
plot_y_actual = y_actual[:, 0] if n_steps_out > 1 else y_actual.flatten()
plot_y_pred = y_pred[:, 0] if n_steps_out > 1 else y_pred.flatten()

plt.figure(figsize=(12, 6))
plt.plot(plot_y_actual, label='Actual Values', color='blue')
plt.plot(plot_y_pred, label='Predicted Values', color='red', linestyle='--')
plt.title('MLP Forecast vs. Actuals on Test Set (First Output)')
plt.xlabel('Time Step (in Test Set)')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()
```

#### Assessment idea
1.  **Question:** You have trained an MLP model and made predictions `y_pred_scaled` on a test set. You also have the true test values `y_test_scaled`. Both are currently in a standardized scale. To correctly calculate the Mean Absolute Error (MAE) in the original units of your time series, what is the necessary next step before calculating MAE?
    *   A) Calculate MAE directly using `y_pred_scaled` and `y_test_scaled`.
    *   B) Inverse transform `y_pred_scaled` to its original scale, then calculate MAE with `y_test_scaled`.
    *   C) Inverse transform both `y_pred_scaled` and `y_test_scaled` to their original scales, then calculate MAE.
    *   D) Re-scale `y_test_scaled` to match the scale of `y_pred_scaled`.

    **Correct Answer:** C) Inverse transform both `y_pred_scaled` and `y_test_scaled` to their original scales, then calculate MAE.
    **Explanation:** To get a meaningful MAE in the original units, both the predictions and the actual values must be on the same, original scale. Calculating MAE with one scaled and one unscaled array, or both scaled, would yield a value that is not directly interpretable in the original context of the data.

2.  **Question:** Your MLP model consistently predicts values that are slightly lower than the actual values during peaks in the time series, and slightly higher during troughs. Which evaluation method would best help you identify this specific pattern of error?
    *   A) Calculating a low RMSE score.
    *   B) Observing a high R² score.
    *   C) Plotting the actual values against the predicted values over time.
    *   D) Checking if the MAE is close to zero.

    **Correct Answer:** C) Plotting the actual values against the predicted values over time.
    **Explanation:** While quantitative metrics like RMSE, R², and MAE provide an overall numerical summary of performance, they don't reveal the *nature* of the errors. A visual plot of actuals vs. predictions allows for a qualitative assessment, making it easy to spot systematic biases like under-prediction during peaks or over-prediction during troughs, which are crucial for understanding model limitations and guiding further improvements.

#### AI generation note
Design a 10-minute video lecture with interactive elements. Begin by showing a trained MLP model making predictions on `X_test_scaled`. Emphasize the `inverse_transform` step for both predictions and actuals, using visual overlays to show the scaled vs. original values. Then, clearly explain MAE, MSE, RMSE, and R² with their formulas and interpretations, using a side-by-side comparison. Conclude with a dynamic `matplotlib` plot showing actual vs. predicted values, with interactive sliders to zoom into different sections of the test set, highlighting areas where the model performs well or struggles. Include a short quiz question about the purpose of inverse scaling.

---

### Chapter 3.5 — Hyperparameter Tuning and Model Improvement for MLPs

#### Learning objectives
*   Identify key hyperparameters in MLP models that influence forecasting performance.
*   Apply basic hyperparameter tuning techniques like Grid Search or Random Search to optimize MLP architectures.
*   Implement regularization techniques such as Dropout to prevent overfitting in MLPs.
*   Utilize Early Stopping callbacks to efficiently train models and avoid excessive overfitting.
*   Understand how to save and load trained Keras models for future use.

#### Detailed lesson content
Building a basic MLP is just the beginning. To achieve optimal forecasting performance, we often need to fine-tune its configuration, a process known as hyperparameter tuning. Hyperparameters are settings that are external to the model and whose values cannot be estimated from data. Instead, they must be set by the practitioner. For MLPs, key hyperparameters include:

*   **Number of hidden layers:** More layers can capture more complex patterns but increase computational cost and risk of overfitting.
*   **Neurons per hidden layer:** The width of the network. Too few can lead to underfitting, too many to overfitting.
*   **Activation functions:** While ReLU is common, others like Leaky ReLU or ELU might perform better for specific datasets.
*   **Learning rate:** Controls the step size during optimization. Too high, and the model might overshoot the minimum; too low, and training can be very slow.
*   **Batch size:** The number of samples processed before updating weights. Affects training stability and speed.
*   **Epochs:** Number of full passes through the training data.

Manually experimenting with these combinations can be tedious and inefficient. Automated techniques like **Grid Search** and **Random Search** help explore the hyperparameter space.
*   **Grid Search:** Systematically tries every combination of specified hyperparameter values. It's exhaustive but can be computationally expensive for many hyperparameters or large ranges.
*   **Random Search:** Samples a fixed number of random combinations from the specified hyperparameter distributions. It's often more efficient than grid search, especially when only a few hyperparameters significantly impact performance.

For Keras models, `scikit-learn`'s `GridSearchCV` or `RandomizedSearchCV` can be used by wrapping the Keras model with `KerasRegressor` (or `KerasClassifier` for classification).

```python
from sklearn.model_selection import GridSearchCV
from tensorflow.keras.wrappers.scikit_learn import KerasRegressor
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense
import numpy as np

# Function to create the Keras model (required for KerasRegressor)
def create_mlp_model(n_neurons=100, activation='relu', learning_rate=0.001, n_steps_in=5, n_steps_out=1):
    model = Sequential()
    model.add(Dense(n_neurons, activation=activation, input_shape=(n_steps_in,)))
    model.add(Dense(n_neurons // 2, activation=activation)) # Half neurons in second layer
    model.add(Dense(n_steps_out, activation='linear'))
    optimizer = tf.keras.optimizers.Adam(learning_rate=learning_rate)
    model.compile(optimizer=optimizer, loss='mse')
    return model

# Define hyperparameters to tune
param_grid = {
    'n_neurons': [50, 100], # Reduced for faster demo
    'activation': ['relu'],
    'batch_size': [16, 32],
    'epochs': [10, 20], # Reduced for faster demo
    'learning_rate': [0.001]
}

# Wrap Keras model for scikit-learn
# Note: n_steps_in and n_steps_out need to be passed to create_mlp_model
# Let's use dummy data for demonstration.
dummy_X_train_scaled = np.random.rand(200, 5) # n_steps_in = 5
dummy_y_train_scaled = np.random.rand(200, 1) # n_steps_out = 1

keras_model = KerasRegressor(build_fn=create_mlp_model, verbose=0, n_steps_in=5, n_steps_out=1)

# Grid search (this can take a very long time, even with reduced params!)
# Uncomment and run with caution for actual tuning.
# print("Starting Grid Search (may take a while)...")
# grid = GridSearchCV(estimator=keras_model, param_grid=param_grid, n_jobs=-1, cv=3) # cv=3 for cross-validation
# grid_result = grid.fit(dummy_X_train_scaled, dummy_y_train_scaled)

# print(f"Best: {grid_result.best_score_:.4f} using {grid_result.best_params_}")
# print("Grid Search complete.")
```
**Common mistake:** Running Grid Search on too many parameters or too wide a range, leading to excessively long computation times. Start with a smaller grid and refine. Also, ensure your `create_mlp_model` function correctly accepts the hyperparameters you intend to tune.

Beyond tuning, regularization techniques are vital to prevent **overfitting**, where the model learns the training data too well, including its noise, and performs poorly on unseen data.
*   **Dropout:** A powerful regularization technique where a fraction of neurons are randomly "dropped out" (set to zero) during each training step. This prevents neurons from co-adapting too much and forces the network to learn more robust features. Dropout layers are typically added between `Dense` layers. The `rate` parameter specifies the fraction of input units to drop.

```python
from tensorflow.keras.layers import Dropout

n_steps_in = 5 # Assuming fixed from previous chapters
n_steps_out = 1 # Assuming fixed from previous chapters

model_with_dropout = Sequential()
model_with_dropout.add(Dense(128, activation='relu', input_shape=(n_steps_in,)))
model_with_dropout.add(Dropout(0.2)) # Drop 20% of neurons
model_with_dropout.add(Dense(64, activation='relu'))
model_with_dropout.add(Dropout(0.2))
model_with_dropout.add(Dense(n_steps_out, activation='linear'))
model_with_dropout.compile(optimizer='adam', loss='mse', metrics=['mae'])
model_with_dropout.summary()
# model_with_dropout.fit(...) # This model can now be trained with dropout
```
**Safety Note:** Apply Dropout only during training. During inference (prediction), all neurons are active, but their outputs are scaled down by the dropout rate to maintain the expected sum of outputs. Keras handles this automatically.

*   **Early Stopping:** This is a callback function that monitors a chosen metric (e.g., validation loss) during training and stops training when the metric stops improving for a specified number of epochs (patience). This prevents overfitting and saves computational resources.

```python
from tensorflow.keras.callbacks import EarlyStopping

early_stopping = EarlyStopping(monitor='val_loss', patience=10, restore_best_weights=True)

# When training, include the callback.
# You need a validation set for 'val_loss' to be monitored.
# Example with dummy data:
# dummy_X_train_scaled = np.random.rand(80, n_steps_in)
# dummy_y_train_scaled = np.random.rand(80, n_steps_out)
# dummy_X_val_scaled = np.random.rand(20, n_steps_in)
# dummy_y_val_scaled = np.random.rand(20, n_steps_out)

# history = model_with_dropout.fit(dummy_X_train_scaled, dummy_y_train_scaled,
#                                   epochs=200, # Set a high number of epochs, EarlyStopping will stop it
#                                   batch_size=32,
#                                   validation_data=(dummy_X_val_scaled, dummy_y_val_scaled), # Need a validation set for val_loss
#                                   callbacks=[early_stopping],
#                                   verbose=1)
```
**Critical:** Early stopping requires a `validation_data` set during `model.fit()` to monitor `val_loss` or `val_mae`. Without it, `monitor='val_loss'` will fail. This validation set should be distinct from both the training and final test sets.

Finally, once you have a well-performing model, you'll want to save it for future use without needing to retrain. Keras models can be saved in the TensorFlow SavedModel format or the older H5 format.

```python
# Save the entire model (architecture, weights, optimizer state)
model_with_dropout.save('my_best_mlp_forecast_model.h5') # Or .keras for newer format

# Later, load the model
loaded_model = tf.keras.models.load_model('my_best_mlp_forecast_model.h5')
print("\nLoaded model summary:")
loaded_model.summary()
# predictions = loaded_model.predict(X_test_scaled)
```
Saving and loading models is crucial for deployment and for resuming training without losing progress. Always save your best performing models. By mastering hyperparameter tuning, regularization, and model management, you elevate your MLP models from basic predictors to robust and reliable forecasting tools.

#### Key concepts
*   **Hyperparameter Tuning:** The process of selecting the optimal set of hyperparameters for a machine learning model to maximize its performance.
*   **Grid Search:** An exhaustive search method for hyperparameter tuning that tries every combination of a predefined set of hyperparameter values.
*   **Random Search:** A hyperparameter tuning method that samples a fixed number of random combinations from a specified distribution of hyperparameter values.
*   **`KerasRegressor`:** A wrapper class in `tensorflow.keras.wrappers.scikit_learn` that allows Keras models to be used with scikit-learn's model selection tools like `GridSearchCV`.
*   **Regularization:** Techniques used to prevent overfitting by adding constraints or penalties to the model, encouraging it to learn simpler patterns.
*   **Dropout:** A regularization technique where a random subset of neurons are temporarily ignored during training, reducing co-adaptation between neurons.
*   **Early Stopping:** A callback function that monitors a performance metric on a validation set and stops training when the metric stops improving, preventing overfitting and saving training time.
*   **`val_loss`:** The loss calculated on the validation dataset during training, used by Early Stopping to monitor generalization performance.
*   **Model Saving/Loading:** The process of serializing a trained model to disk and deserializing it back into memory, allowing for persistence and deployment.

#### Hands-on activity
**Activity: Implement Dropout and Early Stopping**

Take your MLP model from Chapter 3.3 and enhance it with Dropout layers and Early Stopping. You will need to split your training data further into a training set and a validation set for Early Stopping to work.

**Instructions:**
1.  Split your `X_train_scaled`, `y_train_scaled` data into an 80/20 train/validation split (chronologically, if possible, but a simple split is fine for this activity if you don't have enough data points for a second chronological split).
2.  Redefine your MLP model to include `Dropout` layers (e.g., `rate=0.2`) after each hidden `Dense` layer.
3.  Implement an `EarlyStopping` callback to monitor `val_loss` with a `patience` of 10 and `restore_best_weights=True`.
4.  Train the model using the new training and validation sets, incorporating the `EarlyStopping` callback. Set a high number of `epochs` (e.g., 200) to allow Early Stopping to trigger.
5.  Save your trained model.

**Code Template:**
```python
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Dropout
from tensorflow.keras.callbacks import EarlyStopping
import numpy as np
from sklearn.model_selection import train_test_split # For simple split, not ideal for time series but ok for activity

# --- Setup from previous activities (replace with your actual data/model if available) ---
n_samples_full_train = 100 # Total samples for training + validation
n_steps_in = 5
n_steps_out = 2

# Dummy scaled data for X_train_full, y_train_full
X_train_full = np.random.rand(n_samples_full_train, n_steps_in)
y_train_full = np.random.rand(n_samples_full_train, n_steps_out)
# --- End setup ---

# 1. Split training data into training and validation sets
# For simplicity, using train_test_split, but for real TS, a chronological split is better
# Use shuffle=False to maintain some order, mimicking chronological if possible
X_train_final, X_val_scaled, y_train_final, y_val_scaled = train_test_split(
    X_train_full, y_train_full, test_size=0.2, shuffle=False
)

print(f"X_train_final shape: {X_train_final.shape}, y_train_final shape: {y_train_final.shape}")
print(f"X_val_scaled shape: {X_val_scaled.shape}, y_val_scaled shape: {y_val_scaled.shape}")

# 2. Redefine MLP model with Dropout
model_improved = Sequential()
model_improved.add(Dense(128, activation='relu', input_shape=(n_steps_in,)))
model_improved.add(Dropout(0.2)) # Dropout layer
model_improved.add(Dense(64, activation='relu'))
model_improved.add(Dropout(0.2)) # Another Dropout layer
model_improved.add(Dense(n_steps_out, activation='linear'))

model_improved.compile(optimizer='adam', loss='mse', metrics=['mae'])
model_improved.summary()

# 3. Implement EarlyStopping callback
early_stopping = EarlyStopping(monitor='val_loss', patience=10, restore_best_weights=True, verbose=1)

# 4. Train the model with Early Stopping
print("\nStarting improved model training with Early Stopping...")
history_improved = model_improved.fit(X_train_final, y_train_final,
                                      epochs=200, # Set a high number, EarlyStopping will manage
                                      batch_size=32,
                                      validation_data=(X_val_scaled, y_val_scaled),
                                      callbacks=[early_stopping],
                                      verbose=1)

print("\nImproved model training complete.")

# 5. Save the trained model
model_improved.save('mlp_forecast_improved.h5')
print("Model saved as 'mlp_forecast_improved.h5'")

# Optional: Load and verify
loaded_model = tf.keras.models.load_model('mlp_forecast_improved.h5')
print("\nLoaded model summary:")
loaded_model.summary()
```

#### Assessment idea
1.  **Question:** You observe that your MLP model achieves very low training loss but significantly higher validation loss, indicating overfitting. Which two techniques are most appropriate to address this issue?
    *   A) Increase the number of hidden layers and neurons.
    *   B) Decrease the learning rate and increase the batch size.
    *   C) Add `Dropout` layers and implement `EarlyStopping`.
    *   D) Switch to a simpler loss function like MAE.

    **Correct Answer:** C) Add `Dropout` layers and implement `EarlyStopping`.
    **Explanation:** Overfitting means the model is memorizing the training data too well and failing to generalize. `Dropout` explicitly regularizes the network by randomly dropping neurons, preventing co-adaptation. `EarlyStopping` monitors validation performance and halts training when it starts to degrade, preventing the model from learning noise in the training data. Options A and B might exacerbate overfitting or just change training dynamics without directly addressing generalization. Option D is about the loss function, not regularization.

2.  **Question:** You are setting up `EarlyStopping` for your MLP model. You want to stop training if the validation Mean Absolute Error (`val_mae`) does not improve for 15 consecutive epochs, and you want to ensure the model retains the weights from the epoch with the best `val_mae`. Which `EarlyStopping` configuration correctly achieves this?
    *   A) `EarlyStopping(monitor='val_loss', patience=15, restore_best_weights=True)`
    *   B) `EarlyStopping(monitor='val_mae', patience=15, restore_best_weights=True, mode='min')`
    *   C) `EarlyStopping(monitor='mae', patience=15, restore_best_weights=True)`
    *   D) `EarlyStopping(monitor='val_mae', patience=15, restore_best_weights=False)`

    **Correct Answer:** B) `EarlyStopping(monitor='val_mae', patience=15, restore_best_weights=True, mode='min')`
    **Explanation:**
    *   `monitor='val_mae'` correctly targets the validation MAE.
    *   `patience=15` sets the desired number of epochs without improvement.
    *   `restore_best_weights=True` ensures the model reverts to the best-performing weights.
    *   `mode='min'` is crucial because MAE is a metric where lower values are better, so the monitor should look for a minimum. (Though `mode` defaults to 'auto' and usually infers correctly, explicitly setting it for clarity is good practice).
    *   Option A monitors `val_loss`. Option C monitors training `mae`, not validation. Option D does not restore the best weights.

#### AI generation note
Create a 12-minute interactive coding session. Start with the previously trained model (or a simple one). First, demonstrate adding `Dropout` layers and explain their purpose. Then, show how to create a validation split from the training data (emphasize chronological split for time series if data allows, otherwise a simple `shuffle=False` split). Implement and explain the `EarlyStopping` callback. Train the model with both `Dropout` and `EarlyStopping`, showing the verbose output where Early Stopping triggers. Plot the training and validation loss curves from the `history` object to visually demonstrate how Early Stopping prevents overfitting. Include a mini-challenge to modify the dropout rate and observe its effect on the training process.

---

## Module 4: CNNs for Univariate Time Series Forecasting

**Module Goal:** This module will equip you with the knowledge and practical skills to design, implement, and evaluate Convolutional Neural Networks (CNNs) for univariate time series forecasting, enabling you to capture local patterns and temporal dependencies effectively.

---

### Chapter 4.1 — Introduction to 1D Convolutional Neural Networks for Time Series

#### Learning objectives
*   Explain the fundamental concept of convolution in the context of 1D data.
*   Differentiate between Multi-Layer Perceptrons (MLPs) and 1D Convolutional Neural Networks (Conv1D) for time series tasks.
*   Articulate why Conv1D models are particularly well-suited for extracting local features and patterns from sequential data.
*   Describe the necessary input data shape transformations for feeding univariate time series into a Conv1D layer.

#### Detailed lesson content
Welcome to a pivotal module where we shift our focus from the fully connected layers of Multi-Layer Perceptrons (MLPs) to the powerful world of Convolutional Neural Networks (CNNs, specifically tailored for time series data. While MLPs can certainly learn from time series, they often struggle with explicitly capturing local patterns and temporal hierarchies efficiently. This is where CNNs, traditionally celebrated in computer vision for their ability to detect spatial features, offer a compelling advantage when adapted for sequential data. Our journey begins by understanding the core mechanism: the 1D convolution.

At its heart, convolution is a mathematical operation that applies a small, learnable filter (also known as a kernel) across an input to produce a feature map. In the context of 1D data, like a time series, this filter is a 1-dimensional array of weights that slides across the sequence, performing a dot product with the local segment of the input it currently covers. Imagine a flashlight moving along a line of numbers; the flashlight is our filter, and the numbers it illuminates are the local segment. The result of this dot product, a single value, becomes an element in the output feature map. This process is repeated by sliding the filter across the entire input sequence, typically one step (or 'stride') at a time, until the entire sequence has been processed. Each filter is designed to detect a specific type of local pattern – perhaps a sudden spike, a gradual rise, or a specific oscillatory behavior within the time series. By learning multiple such filters, a Conv1D layer can simultaneously extract various local features.

The key distinction between a Conv1D layer and a dense (MLP) layer lies in how they process input. An MLP's dense layer treats every input feature independently and connects every input to every output neuron, leading to a large number of parameters and a lack of explicit spatial or temporal awareness. In contrast, a Conv1D layer leverages two crucial properties: *sparse connectivity* and *parameter sharing*. Sparse connectivity means each output feature is only influenced by a small, localized region of the input, defined by the filter's size. This makes the model more efficient and forces it to focus on local patterns. Parameter sharing means the same filter weights are applied across different locations of the input sequence. This is incredibly powerful for time series, as a pattern (like a sudden drop) can occur at any point in time, and we want the model to detect it regardless of its absolute position. This also significantly reduces the number of parameters compared to an MLP, making CNNs more computationally efficient and less prone to overfitting, especially with limited data.

Why are CNNs particularly well-suited for time series forecasting? Time series data inherently possesses local dependencies and recurring patterns. A Conv1D layer excels at identifying these short-term, localized structures, such as trends, seasonality components, or anomalies, within specific windows of the sequence. For instance, a filter might learn to recognize a specific weekly pattern, a sudden price drop, or a characteristic acceleration in sensor readings. By stacking multiple convolutional layers, the network can learn hierarchical representations: early layers detect simple, primitive patterns, while deeper layers combine these primitive patterns into more complex, abstract features that span longer durations. This hierarchical feature extraction is a hallmark of deep learning and is incredibly valuable for understanding the underlying dynamics of time series.

A common mistake beginners make when working with Conv1D models is neglecting the input data shape. For a Conv1D layer, the input data needs to be structured as a 3D array: `(samples, timesteps, features)`. Let's break this down. `samples` refers to the number of individual time series examples in your batch (e.g., if you're training on 100 different windows of data, `samples` would be 100). `timesteps` is the length of each input sequence or window that the convolutional filter will slide over (e.g., if you're using the last 24 hours of data to predict the next hour, `timesteps` would be 24). Finally, `features` represents the number of variables at each timestep. For *univariate* time series, which is our focus in this module, `features` will always be 1, as we are dealing with a single observation per timestep. So, a univariate time series window of 24 timesteps would be reshaped from `(samples, 24)` to `(samples, 24, 1)`. Failing to reshape the data correctly will result in dimension errors when attempting to pass it to a Conv1D layer in frameworks like Keras or PyTorch. This is a critical first step in preparing your data for Conv1D models.

Consider a practical scenario: forecasting electricity consumption. A Conv1D model could learn to detect daily consumption peaks, weekend consumption drops, or specific load profiles associated with certain hours. A filter might activate strongly when it encounters the characteristic ramp-up of consumption in the morning hours, regardless of which specific morning it is. This ability to generalize patterns across time, thanks to parameter sharing, makes Conv1D networks highly effective and robust for various time series forecasting challenges, from financial markets to weather prediction and industrial sensor data. We are laying the groundwork for building powerful models that can automatically discover and leverage intricate temporal relationships within your data.

#### Key concepts
*   **Convolution (1D):** A mathematical operation where a small, learnable filter (kernel) slides across a 1-dimensional input sequence, performing a dot product with local segments to produce a feature map.
*   **Filter/Kernel:** A small, learnable 1D array of weights used in the convolution operation to detect specific local patterns.
*   **Feature Map:** The output of a convolutional layer, representing the detected features from the input sequence.
*   **Sparse Connectivity:** Each output unit in a convolutional layer is connected to only a small, local region of the input, reducing parameters and focusing on local patterns.
*   **Parameter Sharing:** The same filter weights are applied across different locations of the input sequence, allowing the model to detect a pattern regardless of its position and reducing the total number of parameters.
*   **Input Shape for Conv1D:** Data must be reshaped to `(samples, timesteps, features)`, where for univariate time series, `features` is 1.

#### Hands-on activity
**Activity: Reshaping Univariate Time Series for Conv1D Input**

In this activity, you will take a simulated univariate time series dataset and reshape it into the correct 3D format required for a Conv1D layer. This is a fundamental preprocessing step.

**Instructions:**
1.  Generate a synthetic univariate time series.
2.  Create input-output pairs (windows) suitable for forecasting.
3.  Reshape the input windows to the `(samples, timesteps, features)` format.

**Starter Code:**

```python
import numpy as np

# 1. Generate a synthetic univariate time series
# Let's create a simple sine wave with some noise
timesteps_total = 1000
time = np.arange(timesteps_total)
data = np.sin(time / 20) + np.random.normal(0, 0.1, timesteps_total)

print(f"Original data shape: {data.shape}")

# 2. Create input-output pairs (windows)
# We'll use a look-back window of 10 timesteps to predict the next timestep
look_back = 10
X, y = [], []
for i in range(len(data) - look_back):
    X.append(data[i:(i + look_back)])
    y.append(data[i + look_back])

X = np.array(X)
y = np.array(y)

print(f"Shape of X after windowing (before reshape): {X.shape}")
print(f"Shape of y after windowing: {y.shape}")

# Expected X shape: (samples, timesteps)
# For Conv1D, we need (samples, timesteps, features)
# For univariate, features = 1

# 3. Reshape the input windows for Conv1D
X_reshaped = X.reshape(X.shape[0], X.shape[1], 1)

print(f"Shape of X after reshaping for Conv1D: {X_reshaped.shape}")

# Expected output for X_reshaped.shape should be (990, 10, 1)
```

#### Assessment idea
1.  **Question:** Which of the following is NOT a primary advantage of 1D Convolutional Neural Networks (Conv1D) over Multi-Layer Perceptrons (MLPs) for univariate time series forecasting?
    a) Ability to capture local patterns and temporal dependencies efficiently.
    b) Reduced number of parameters due to sparse connectivity and parameter sharing.
    c) Inherent capability to handle variable-length input sequences without padding.
    d) Hierarchical feature extraction through stacking multiple convolutional layers.

    **Correct Answer:** c) Inherent capability to handle variable-length input sequences without padding.
    **Explanation:** While CNNs are powerful for time series, they typically require fixed-length input sequences (or padding to a fixed length) for a given layer configuration. Recurrent Neural Networks (RNNs) like LSTMs are inherently designed to handle variable-length sequences more naturally. Options a, b, and d are all key advantages of Conv1D models for time series.

2.  **Question:** You have a univariate time series dataset `series` of length 500. You want to create input windows of length 30 to predict the next single value. After creating the `X` and `y` arrays, what should be the final shape of `X` before feeding it into a Keras `Conv1D` layer?
    a) `(470, 30)`
    b) `(470, 30, 1)`
    c) `(500, 30, 1)`
    d) `(30, 1)`

    **Correct Answer:** b) `(470, 30, 1)`
    **Explanation:**
    *   The number of samples (`samples`) will be `total_length - look_back_window = 500 - 30 = 470`.
    *   The number of `timesteps` in each sample is the `look_back_window`, which is 30.
    *   For a *univariate* time series, the number of `features` at each timestep is 1.
    *   Therefore, the required shape is `(samples, timesteps, features)`, which translates to `(470, 30, 1)`.

#### AI generation note
Create a 10-minute animated video explaining the concept of 1D convolution. Use clear visual analogies, like a "sliding window" or "flashlight" over a sequence of numbers. Illustrate the dot product operation between the filter and the input segment. Show side-by-side comparisons of an MLP's dense connection vs. a Conv1D's sparse connectivity and parameter sharing with animated arrows and colored blocks. Conclude with a visual demonstration of reshaping a 2D univariate time series array `(samples, timesteps)` into the 3D `(samples, timesteps, 1)` format required for Conv1D, using a small example dataset. Include a reflection prompt asking learners to consider a real-world time series and imagine what patterns a Conv1D filter might detect.

---

### Chapter 4.2 — Building a Basic Conv1D Model for Univariate Forecasting

#### Learning objectives
*   Implement a simple Conv1D layer in a deep learning framework (e.g., Keras/TensorFlow or PyTorch).
*   Explain the role and impact of key Conv1D parameters: `filters`, `kernel_size`, `strides`, and `padding`.
*   Integrate pooling layers (e.g., `MaxPooling1D`) into a Conv1D architecture and describe their function.
*   Construct a complete basic Conv1D model for univariate time series forecasting, including input, convolutional, pooling, flattening, and dense output layers.

#### Detailed lesson content
Now that we understand the fundamental mechanics of 1D convolution, it's time to translate that theory into practice by building our first Conv1D model. We'll use a popular deep learning framework, Keras (part of TensorFlow), for its intuitive API, which allows us to quickly prototype and experiment with network architectures. The process involves defining the layers, compiling the model, and then training it on our prepared time series data.

Let's start by defining a single `Conv1D` layer. When you instantiate this layer, several key parameters come into play, each significantly influencing how the convolution operates and what kind of features the network can learn. The first is `filters`, which determines the number of feature maps the layer will produce. Each filter learns to detect a different local pattern, so more filters allow the network to capture a richer set of features. For instance, if you set `filters=32`, your layer will learn 32 distinct 1D filters, each scanning the input for its specific pattern. A common mistake is to use too few filters, which might limit the model's capacity to learn diverse features, or too many, leading to overfitting and increased computational cost.

Next, `kernel_size` specifies the length of the 1D convolution window. This is a crucial hyperparameter as it defines the temporal span over which the filter looks for patterns. A `kernel_size=3` means the filter will consider 3 consecutive timesteps at a time. A smaller kernel size allows the model to capture very fine-grained, short-term dependencies, while a larger kernel size enables it to detect patterns spanning a wider temporal context. For example, if your data has daily seasonality, a `kernel_size` around 7 might be effective for capturing weekly patterns. It's important to choose a `kernel_size` that aligns with the expected duration of patterns in your time series.

The `strides` parameter dictates how many timesteps the filter shifts after each convolution operation. A `stride=1` (the default) means the filter moves one timestep at a time, resulting in a feature map that is almost the same length as the input (depending on padding). A `stride=2` means the filter skips one timestep, effectively downsampling the input sequence and reducing the size of the feature map. This can be useful for reducing computational load and extracting higher-level features, but it also means some information might be skipped.

Finally, `padding` handles how the edges of the input sequence are treated. When a filter slides across the input, especially with larger `kernel_size` or `strides`, the output feature map can become shorter than the input. `padding='valid'` (the default) means no padding is applied, and the output size is reduced. `padding='same'` adds zeros to the beginning and end of the input sequence, ensuring that the output feature map has the same length as the input sequence. This is often preferred when you want to stack multiple convolutional layers without rapidly shrinking the sequence dimension.

After a convolutional layer, it's common practice to include a pooling layer, such as `MaxPooling1D`. Pooling layers serve two primary purposes: dimensionality reduction and making the learned features more robust to small shifts in position. `MaxPooling1D` works by sliding a window (defined by `pool_size`) over the feature map and taking the maximum value within that window. For example, `MaxPooling1D(pool_size=2)` would reduce the length of the feature map by half, keeping only the most salient feature from every two timesteps. This helps in reducing the number of parameters, speeding up computation, and preventing overfitting by providing a compressed, higher-level representation of the features.

Let's put it all together. A typical basic Conv1D architecture for univariate forecasting might look like this:
1.  **Input Layer:** Defines the expected input shape `(timesteps, features)`. Remember, for univariate, `features=1`.
2.  **Conv1D Layer:** Extracts local features using multiple filters.
3.  **Activation Function:** (e.g., 'relu') introduces non-linearity, allowing the model to learn complex relationships.
4.  **MaxPooling1D Layer:** Downsamples the feature maps, making the model more robust.
5.  **Flatten Layer:** Converts the 3D output of the convolutional and pooling layers into a 1D vector, preparing it for the dense output layer.
6.  **Dense Output Layer:** A standard fully connected layer that produces the final forecast. For a single-step univariate forecast, this will have 1 neuron.

Here's a common pitfall: forgetting to specify the `input_shape` in the first layer. Keras needs to know the dimensions of your input data to correctly build the computational graph. If your input `X` has a shape of `(samples, look_back, 1)`, then your `input_shape` for the `Conv1D` layer should be `(look_back, 1)`. Also, ensure you use an appropriate activation function for your output layer. For regression tasks like forecasting, a linear activation (or no activation specified, which defaults to linear) is standard for the final `Dense` layer. Using 'sigmoid' or 'softmax' on the output layer for a regression problem would incorrectly constrain the output values.

Consider a real-world scenario like forecasting stock prices. A Conv1D layer with a `kernel_size` of 5 might detect short-term momentum shifts or reversal patterns over a trading week. The `MaxPooling1D` layer would then summarize these patterns, making the model less sensitive to the exact timing of a peak or trough within that window. By carefully selecting these parameters, we empower our model to learn meaningful representations from the raw time series data, leading to more accurate forecasts. This foundational understanding of building a basic Conv1D model is crucial before we explore more advanced architectures and techniques.

```python
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv1D, MaxPooling1D, Flatten, Dense

# 1. Prepare dummy data (similar to previous activity)
look_back = 10
n_features = 1 # Univariate
# Simulate X_reshaped with shape (samples, look_back, n_features)
X_train = np.random.rand(100, look_back, n_features)
y_train = np.random.rand(100, 1) # Single value to predict

# 2. Build the Conv1D model
model = Sequential()
model.add(Conv1D(filters=32, kernel_size=3, activation='relu', input_shape=(look_back, n_features)))
model.add(MaxPooling1D(pool_size=2))
model.add(Flatten())
model.add(Dense(50, activation='relu'))
model.add(Dense(1)) # Output layer for single-step univariate forecast

# 3. Compile the model
model.compile(optimizer='adam', loss='mse')

# 4. Print model summary
model.summary()

# 5. (Optional) Fit the model
# model.fit(X_train, y_train, epochs=10, verbose=0)
# print("Model trained successfully!")
```

#### Key concepts
*   **`filters` (Conv1D parameter):** The number of output filters (feature maps) in the convolutional layer. Each filter learns a distinct local pattern.
*   **`kernel_size` (Conv1D parameter):** The length of the 1D convolution window, defining the temporal span over which the filter operates.
*   **`strides` (Conv1D parameter):** The number of steps the filter moves across the input sequence after each convolution operation.
*   **`padding` (Conv1D parameter):** Determines how the edges of the input sequence are handled. `'valid'` means no padding; `'same'` adds zero-padding to maintain output length.
*   **`MaxPooling1D`:** A pooling layer that downsamples the feature map by taking the maximum value within defined windows, reducing dimensionality and increasing robustness.
*   **`Flatten` layer:** Transforms the multi-dimensional output of convolutional/pooling layers into a 1D vector, preparing it for fully connected (Dense) layers.
*   **`Dense` layer:** A standard fully connected neural network layer, used here for the final output prediction.

#### Hands-on activity
**Activity: Experimenting with Conv1D Layer Parameters**

You will modify a basic Conv1D model by changing its `filters`, `kernel_size`, `strides`, and `pool_size` parameters and observe how these changes affect the model's summary (number of parameters, output shapes). This helps build intuition for their impact.

**Instructions:**
1.  Start with the provided Conv1D model template.
2.  Experiment with different values for `filters`, `kernel_size`, `strides` in the `Conv1D` layer, and `pool_size` in the `MaxPooling1D` layer.
3.  For each modification, run `model.summary()` and note the changes in the `Output Shape` and `Param #` columns for each layer.

**Starter Code:**

```python
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv1D, MaxPooling1D, Flatten, Dense

# Prepare dummy data
look_back = 20 # Let's use a slightly larger look_back for more noticeable changes
n_features = 1
X_train = np.random.rand(100, look_back, n_features)
y_train = np.random.rand(100, 1)

print(f"Input shape for Conv1D: {(look_back, n_features)}\n")

# --- Experiment 1: Baseline Model ---
print("--- Experiment 1: Baseline Model (filters=32, kernel_size=3, strides=1, pool_size=2) ---")
model1 = Sequential()
model1.add(Conv1D(filters=32, kernel_size=3, activation='relu', input_shape=(look_back, n_features)))
model1.add(MaxPooling1D(pool_size=2))
model1.add(Flatten())
model1.add(Dense(1))
model1.compile(optimizer='adam', loss='mse')
model1.summary()
print("\n" + "="*80 + "\n")

# --- Experiment 2: Increase kernel_size ---
print("--- Experiment 2: Increase kernel_size to 5 (filters=32, kernel_size=5, strides=1, pool_size=2) ---")
model2 = Sequential()
model2.add(Conv1D(filters=32, kernel_size=5, activation='relu', input_shape=(look_back, n_features)))
model2.add(MaxPooling1D(pool_size=2))
model2.add(Flatten())
model2.add(Dense(1))
model2.compile(optimizer='adam', loss='mse')
model2.summary()
print("\n" + "="*80 + "\n")

# --- YOUR CODE HERE: Add more experiments ---
# Example for Experiment 3: Change filters to 64
print("--- Experiment 3: Change filters to 64 (filters=64, kernel_size=3, strides=1, pool_size=2) ---")
model3 = Sequential()
model3.add(Conv1D(filters=64, kernel_size=3, activation='relu', input_shape=(look_back, n_features)))
model3.add(MaxPooling1D(pool_size=2))
model3.add(Flatten())
model3.add(Dense(1))
model3.compile(optimizer='adam', loss='mse')
model3.summary()
print("\n" + "="*80 + "\n")

# Experiment 4: Change strides to 2
print("--- Experiment 4: Change strides to 2 (filters=32, kernel_size=3, strides=2, pool_size=2) ---")
model4 = Sequential()
model4.add(Conv1D(filters=32, kernel_size=3, strides=2, activation='relu', input_shape=(look_back, n_features)))
model4.add(MaxPooling1D(pool_size=2))
model4.add(Flatten())
model4.add(Dense(1))
model4.compile(optimizer='adam', loss='mse')
model4.summary()
print("\n" + "="*80 + "\n")

# Experiment 5: Change pool_size to 4
print("--- Experiment 5: Change pool_size to 4 (filters=32, kernel_size=3, strides=1, pool_size=4) ---")
model5 = Sequential()
model5.add(Conv1D(filters=32, kernel_size=3, strides=1, activation='relu', input_shape=(look_back, n_features)))
model5.add(MaxPooling1D(pool_size=4))
model5.add(Flatten())
model5.add(Dense(1))
model5.compile(optimizer='adam', loss='mse')
model5.summary()
print("\n" + "="*80 + "\n")
```

#### Assessment idea
1.  **Question:** You are building a Conv1D model for a univariate time series with `look_back = 60` timesteps. You define a `Conv1D` layer with `filters=64`, `kernel_size=5`, `strides=1`, and `padding='valid'`. What will be the output shape of the `Conv1D` layer (excluding the batch dimension)?
    a) `(60, 64)`
    b) `(56, 64)`
    c) `(55, 64)`
    d) `(64, 56)`

    **Correct Answer:** b) `(56, 64)`
    **Explanation:**
    The output length of a Conv1D layer with `padding='valid'` is calculated as `(input_length - kernel_size + 1) / strides`.
    Here, `input_length = 60`, `kernel_size = 5`, `strides = 1`.
    Output length = `(60 - 5 + 1) / 1 = 56`.
    The number of features (or channels) in the output will be equal to the number of `filters`, which is 64.
    So, the output shape is `(56, 64)`.

2.  **Question:** Which of the following statements about `MaxPooling1D` in a Conv1D architecture is TRUE?
    a) It increases the number of learnable parameters in the model.
    b) Its primary role is to extract more complex temporal features.
    c) It helps in reducing the dimensionality of feature maps and makes features more robust to small shifts.
    d) It is typically applied before the `Conv1D` layer to preprocess the raw input.

    **Correct Answer:** c) It helps in reducing the dimensionality of feature maps and makes features more robust to small shifts.
    **Explanation:** `MaxPooling1D` does not have learnable parameters (a). Its primary role is not feature extraction but rather dimensionality reduction and feature summarization (b). It is applied *after* `Conv1D` layers, not before (d). Its main benefits are reducing computation, controlling overfitting, and creating more robust features by selecting the most prominent activation in a window.

#### AI generation note
Produce a 12-minute live coding video using Keras/TensorFlow. Start with the data reshaping from the previous chapter. Incrementally build a `Sequential` model: first adding `Conv1D` and explaining `filters`, `kernel_size`, `strides`, `padding` with visual overlays on the code. Then add `MaxPooling1D` and explain `pool_size`. Show the `model.summary()` output after each layer addition to demonstrate how output shapes and parameter counts change. Compile the model with `adam` optimizer and `mse` loss. Include a common mistake warning about incorrect `input_shape`. The interactive element should be a challenge to modify the `kernel_size` and `pool_size` and predict the new `model.summary()` output shapes before running the code.

---

### Chapter 4.3 — Advanced Conv1D Architectures: Dilated Convolutions and Residual Connections

#### Learning objectives
*   Identify the limitations of standard Conv1D layers in capturing long-range dependencies.
*   Explain the concept and benefits of dilated (atrous) convolutions for expanding the receptive field without increasing parameters.
*   Implement a Conv1D layer with dilation in a deep learning framework.
*   Describe the purpose and mechanism of residual connections in deep Conv1D networks.
*   Integrate residual connections into a Conv1D model to facilitate training of deeper architectures.

#### Detailed lesson content
As we delve deeper into Conv1D architectures, we inevitably encounter the challenge of capturing long-range dependencies within time series data. While stacking multiple standard Conv1D layers can increase the effective receptive field (the portion of the input that an output feature is influenced by), it often comes at the cost of increased computational complexity, a larger number of parameters, and the potential for vanishing gradients in very deep networks. This is where advanced techniques like dilated convolutions and residual connections become invaluable.

**Dilated Convolutions (Atrous Convolutions)** offer an elegant solution to expand the receptive field without adding more parameters or losing resolution. Instead of applying the filter to contiguous elements of the input, a dilated convolution inserts "holes" or skips elements between the filter's weights. The `dilation_rate` parameter controls this spacing. For example, a `dilation_rate=1` is a standard convolution (no dilation). A `dilation_rate=2` means the filter will skip one input element between each of its weights, effectively "seeing" a wider segment of the input. A `kernel_size=3` with `dilation_rate=2` would cover 5 input elements (`(kernel_size - 1) * dilation_rate + 1 = (3-1)*2+1 = 5`) but still only use 3 learnable weights. This is a powerful concept because it allows the network to gather information from a broader temporal context without increasing the number of weights or requiring deeper stacks of layers, thus preserving computational efficiency.

The benefits of dilated convolutions for time series are profound. They enable a Conv1D model to capture patterns that span longer durations, such as weekly or monthly seasonality, without needing very large kernel sizes that might overfit to specific local patterns. This is particularly useful in time series where patterns can be spread out over many timesteps. For instance, in energy consumption forecasting, a filter with a high dilation rate might identify a pattern that occurs every 24 hours or every 7 days, even if the `kernel_size` itself is small. When stacking dilated convolutional layers, it's common to increase the `dilation_rate` exponentially (e.g., 1, 2, 4, 8...), which allows each subsequent layer to cover an exponentially larger receptive field, covering the entire input sequence with relatively few layers.

While dilated convolutions help with the receptive field, deeper networks still face challenges like vanishing gradients, where gradients become extremely small during backpropagation, making it difficult for the network to learn. This is where **Residual Connections**, popularized by ResNet architectures, come into play. The core idea is to add the input of a block of layers directly to its output. Instead of learning a mapping `H(x)`, the block learns a *residual mapping* `F(x) = H(x) - x`. The output then becomes `F(x) + x`. This "shortcut" or "skip connection" allows gradients to flow more easily through the network, bypassing non-linear transformations and enabling the training of much deeper models without performance degradation.

For time series, residual connections can be implemented by taking the input to a Conv1D block, passing it through one or more Conv1D layers (with or without dilation), and then adding the original input to the output of these layers. It's crucial that the input and output of the residual connection have compatible shapes for element-wise addition. If the convolutional layers change the number of filters or the sequence length, a 1x1 convolution (a `Conv1D` layer with `kernel_size=1`) might be needed on the shortcut path to match the dimensions. This is often referred to as a "projection shortcut."

Let's illustrate with a simple Keras example for a residual block:

```python
from tensorflow.keras.layers import Input, Conv1D, Add, Activation
from tensorflow.keras.models import Model

# Assuming input_shape = (timesteps, features)
look_back = 50
n_features = 1
input_layer = Input(shape=(look_back, n_features))

# Main path
conv1 = Conv1D(filters=64, kernel_size=3, padding='same', activation='relu')(input_layer)
conv2 = Conv1D(filters=64, kernel_size=3, padding='same')(conv1) # No activation here yet

# Shortcut path - if input_layer and conv2 have different feature dimensions,
# you'd need a 1x1 conv on the shortcut:
# For this example, assuming input_layer has 1 feature, and conv2 has 64 features.
# So, we need a projection shortcut.
shortcut = Conv1D(filters=64, kernel_size=1, padding='same')(input_layer)

# Add the shortcut to the main path output
added = Add()([shortcut, conv2])
output_layer = Activation('relu')(added)

residual_model = Model(inputs=input_layer, outputs=output_layer)
residual_model.summary()
```
The common mistake here is forgetting to ensure shape compatibility for the `Add` layer. If the number of filters changes in the main path (e.g., from `n_features` to 64), the shortcut path must also transform the input to have the same number of features. This is typically done with a `Conv1D(kernel_size=1)` on the shortcut. Another common oversight is applying the final activation *after* the addition, not before, as shown in the example. The `Add` layer itself does not have an activation.

By combining dilated convolutions and residual connections, we can construct very deep and powerful Conv1D architectures that are capable of learning complex, multi-scale temporal patterns from univariate time series data. Dilated convolutions allow for an expanded receptive field without computational overhead, while residual connections ensure that gradients can flow effectively, enabling the training of these deeper, more expressive models. These techniques are foundational for state-of-the-art time series models like WaveNet and TCNs (Temporal Convolutional Networks), which are essentially sophisticated Conv1D architectures.

#### Key concepts
*   **Receptive Field:** The region of the input sequence that an output feature in a convolutional layer "sees" or is influenced by.
*   **Dilated Convolution (Atrous Convolution):** A type of convolution that inserts gaps or "holes" into the filter, allowing it to cover a wider receptive field without increasing the number of parameters or losing resolution.
*   **`dilation_rate`:** A parameter in Conv1D layers that controls the spacing between kernel points.
*   **Residual Connection (Skip Connection):** A direct connection that adds the input of a block of layers to its output, allowing gradients to flow more easily and facilitating the training of deeper networks.
*   **Vanishing Gradients:** A problem in deep neural networks where gradients become extremely small during backpropagation, hindering effective learning in early layers.
*   **1x1 Convolution (Projection Shortcut):** A `Conv1D` layer with `kernel_size=1` used in residual connections to match the number of feature maps (channels) between the shortcut path and the main path if they differ.

#### Hands-on activity
**Activity: Implementing a Dilated Conv1D Block with a Residual Connection**

You will build a small Conv1D block that incorporates both a dilated convolution and a residual connection. This will demonstrate how to combine these advanced techniques.

**Instructions:**
1.  Define an input layer with a suitable shape.
2.  Create a main path with a `Conv1D` layer using a `dilation_rate > 1`.
3.  Implement a residual connection by adding the original input to the output of the main path. Pay attention to shape compatibility.
4.  Compile and summarize the model to verify the architecture.

**Starter Code:**

```python
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Input, Conv1D, Add, Activation, Dense, Flatten

# Prepare dummy data parameters
look_back = 50 # Longer look_back to appreciate dilation
n_features = 1
# No need for actual data for building the model architecture, just input_shape

# Define input shape for the model
input_shape_for_model = (look_back, n_features)

# --- Build a Residual Block with Dilated Conv1D ---
def build_dilated_residual_block(input_tensor, filters, kernel_size, dilation_rate):
    # Main path
    x = Conv1D(filters=filters, kernel_size=kernel_size, padding='same',
               dilation_rate=dilation_rate, activation='relu')(input_tensor)
    x = Conv1D(filters=filters, kernel_size=kernel_size, padding='same')(x) # Second conv layer

    # Shortcut path
    # If input_tensor features != filters, we need a 1x1 conv on the shortcut
    if input_tensor.shape[-1] != filters:
        shortcut = Conv1D(filters=filters, kernel_size=1, padding='same')(input_tensor)
    else:
        shortcut = input_tensor

    # Add shortcut to main path output
    added = Add()([shortcut, x])
    output = Activation('relu')(added)
    return output

# Define the overall model
input_layer = Input(shape=input_shape_for_model)

# First block (standard Conv1D for initial feature extraction)
x = Conv1D(filters=32, kernel_size=3, padding='same', activation='relu')(input_layer)

# Now add a dilated residual block
x = build_dilated_residual_block(x, filters=64, kernel_size=3, dilation_rate=2)

# Add another dilated residual block with a higher dilation rate
x = build_dilated_residual_block(x, filters=64, kernel_size=3, dilation_rate=4)

# Final layers for forecasting
x = Flatten()(x)
x = Dense(50, activation='relu')(x)
output_layer = Dense(1)(x)

model = Model(inputs=input_layer, outputs=output_layer)
model.compile(optimizer='adam', loss='mse')
model.summary()
```

#### Assessment idea
1.  **Question:** You are designing a Conv1D model for a time series with a `look_back` window of 100 timesteps. You want to capture patterns that span a wide temporal range without significantly increasing the number of parameters. Which of the following techniques would be most effective for this purpose?
    a) Increasing the `kernel_size` of a standard `Conv1D` layer to 50.
    b) Stacking many `Conv1D` layers with `strides=2`.
    c) Using `Conv1D` layers with a high `dilation_rate`.
    d) Adding multiple `MaxPooling1D` layers.

    **Correct Answer:** c) Using `Conv1D` layers with a high `dilation_rate`.
    **Explanation:** Increasing `kernel_size` dramatically increases parameters and computation (a). Stacking `Conv1D` layers with `strides=2` reduces resolution and might lose fine-grained information (b). `MaxPooling1D` primarily downsamples and makes features robust to shifts, not necessarily expanding the receptive field efficiently for long-range patterns (d). Dilated convolutions specifically expand the receptive field by skipping input elements, covering a wider context with the same number of parameters, making them ideal for long-range dependencies.

2.  **Question:** In a residual connection, why is it sometimes necessary to use a `Conv1D(kernel_size=1)` layer on the shortcut path?
    a) To introduce non-linearity to the shortcut connection.
    b) To increase the temporal length of the shortcut path to match the main path.
    c) To match the number of feature maps (channels) between the input and output of the residual block.
    d) To perform additional feature extraction on the raw input before adding it.

    **Correct Answer:** c) To match the number of feature maps (channels) between the input and output of the residual block.
    **Explanation:** The `Add` layer requires its inputs to have compatible shapes. If the main path of the residual block changes the number of filters (i.e., the feature dimension), the shortcut path must also transform its input (the original input to the block) to have the same number of features. A `Conv1D(kernel_size=1)` is a computationally efficient way to change the number of feature maps without altering the temporal dimension. It does not primarily introduce non-linearity (a), increase temporal length (b), or perform extensive feature extraction (d), though it can be seen as a linear projection.

#### AI generation note
Create a 12-minute animated video with code overlays. Begin by illustrating the limitation of standard convolutions for long-range dependencies. Then, visually demonstrate dilated convolution: show a filter with `dilation_rate=1`, then `dilation_rate=2`, highlighting how it skips elements and expands the effective receptive field. Use a Keras code snippet to implement a `Conv1D` with `dilation_rate`. Next, explain residual connections with a clear diagram showing the "skip" path and the addition operation. Implement a simple residual block in Keras, emphasizing the shape compatibility for the `Add` layer and the role of `Conv1D(kernel_size=1)` if needed. The interactive element should be a prompt to identify a scenario in a time series (e.g., daily sales with weekly seasonality) where dilated convolutions would be particularly beneficial.

---

### Chapter 4.4 — Hyperparameter Tuning and Regularization for Conv1D Models

#### Learning objectives
*   Identify critical hyperparameters for Conv1D models, including filter count, kernel size, dilation rate, and learning rate.
*   Apply common regularization techniques such as Dropout, L1/L2 regularization, and Batch Normalization to Conv1D architectures.
*   Implement early stopping as a strategy to prevent overfitting during model training.
*   Design a systematic approach for hyperparameter tuning using techniques like grid search or random search.

#### Detailed lesson content
Building a Conv1D model is only half the battle; optimizing its performance requires careful attention to hyperparameter tuning and regularization. Hyperparameters are settings that are not learned from the data but are set by the model designer before training begins. Regularization techniques, on the other hand, are strategies used to prevent overfitting, ensuring our model generalizes well to unseen data rather than just memorizing the training set.

Let's first consider the key hyperparameters specific to Conv1D models. We've already discussed `filters`, `kernel_size`, and `dilation_rate`. The `filters` parameter determines the model's capacity to learn diverse features; too few might underfit, too many might overfit. `kernel_size` dictates the temporal window for local pattern detection; its optimal value often depends on the inherent periodicity or duration of patterns in your data. `dilation_rate` allows us to expand the receptive field without increasing parameters, crucial for capturing longer-range dependencies. Beyond these, general deep learning hyperparameters like `learning_rate` (how large a step the optimizer takes), `batch_size` (number of samples processed before updating weights), and the number of `epochs` (number of full passes through the training data) are equally important. The `pool_size` in `MaxPooling1D` layers also impacts downsampling and feature robustness.

The process of finding the optimal combination of these hyperparameters is called hyperparameter tuning. While manual tuning is possible, it's often inefficient. More systematic approaches include **Grid Search** and **Random Search**. Grid search exhaustively tries every combination of specified hyperparameter values. For example, if you test `filters` (32, 64), `kernel_size` (3, 5), and `learning_rate` (0.01, 0.001), you'd train 2x2x2 = 8 models. While thorough, it becomes computationally expensive very quickly as the number of hyperparameters and their possible values increase. **Random Search**, in contrast, samples random combinations from the specified hyperparameter distributions. Surprisingly, random search often finds better models in fewer iterations than grid search, especially when only a few hyperparameters truly matter, as it explores the search space more broadly. Tools like Keras Tuner, Optuna, or `scikit-learn`'s `GridSearchCV`/`RandomizedSearchCV` (with Keras/TensorFlow wrappers) can automate this process.

Now, let's turn our attention to **regularization techniques** crucial for Conv1D models.
1.  **Dropout:** This is one of the simplest yet most effective regularization methods. During training, `Dropout` randomly sets a fraction of input units to zero at each update step. This prevents neurons from co-adapting too much and forces the network to learn more robust features. For Conv1D, you can apply `Dropout` after convolutional layers or before dense layers. A common mistake is applying `Dropout` to the output layer or during inference; remember, `Dropout` is only for training. Typical `dropout_rate` values range from 0.2 to 0.5.

2.  **L1/L2 Regularization:** These techniques add a penalty term to the loss function, encouraging the model weights to be smaller. L1 regularization (Lasso) promotes sparsity by driving some weights to exactly zero, effectively performing feature selection. L2 regularization (Ridge) encourages smaller, more spread-out weights. In Keras, you can apply these to `kernel_regularizer` or `bias_regularizer` arguments within `Conv1D` or `Dense` layers. While effective, choosing the right regularization strength (`l1` or `l2` value) can be tricky and often requires tuning.

3.  **Batch Normalization:** This technique normalizes the activations of the previous layer at each batch, meaning it shifts and scales the inputs to a layer. This has several benefits: it accelerates training, acts as a mild regularizer (reducing the need for heavy dropout), and makes the network less sensitive to the initialization of weights. `BatchNormalization` layers are typically inserted between a convolutional or dense layer and its activation function. It's particularly useful in deeper networks to combat internal covariate shift.

4.  **Early Stopping:** This is a powerful and practical regularization strategy. Instead of training for a fixed number of epochs, `EarlyStopping` monitors a validation metric (e.g., validation loss or accuracy) and stops training when the metric stops improving for a specified number of epochs (`patience`). This prevents the model from overfitting by stopping training at the point where generalization performance is best. It's often used in conjunction with `ModelCheckpoint` to save the best model weights found during training.

A practical scenario might involve forecasting energy demand. You might start with a baseline Conv1D model, but notice it overfits on the training data, performing poorly on unseen validation data. Implementing `Dropout` after your `MaxPooling1D` layer, adding `BatchNormalization` before activations, and setting up `EarlyStopping` to monitor validation loss are crucial steps. Then, you'd use a hyperparameter tuning framework to systematically explore different `kernel_size`, `filters`, and `learning_rate` values, letting `EarlyStopping` determine the optimal training duration for each trial. This systematic approach ensures you build a robust and well-generalized forecasting model.

```python
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv1D, MaxPooling1D, Flatten, Dense, Dropout, BatchNormalization
from tensorflow.keras.callbacks import EarlyStopping
from tensorflow.keras.regularizers import l2

# Prepare dummy data
look_back = 20
n_features = 1
X_train = np.random.rand(1000, look_back, n_features)
y_train = np.random.rand(1000, 1)
X_val = np.random.rand(200, look_back, n_features)
y_val = np.random.rand(200, 1)

# Build a Conv1D model with regularization
model = Sequential()
model.add(Conv1D(filters=64, kernel_size=3, activation='relu', input_shape=(look_back, n_features),
                 kernel_regularizer=l2(0.001))) # L2 regularization
model.add(BatchNormalization()) # Batch Normalization
model.add(MaxPooling1D(pool_size=2))
model.add(Dropout(0.3)) # Dropout after pooling

model.add(Conv1D(filters=32, kernel_size=3, activation='relu', padding='same'))
model.add(BatchNormalization())
model.add(Dropout(0.3))

model.add(Flatten())
model.add(Dense(50, activation='relu', kernel_regularizer=l2(0.001))) # L2 on Dense layer
model.add(Dropout(0.5)) # More aggressive dropout before output
model.add(Dense(1))

model.compile(optimizer='adam', loss='mse')

# Define Early Stopping callback
early_stopping = EarlyStopping(monitor='val_loss', patience=10, restore_best_weights=True)

print("Model with regularization and early stopping configured.")
model.summary()

# (Optional) Fit the model with early stopping
# history = model.fit(X_train, y_train, epochs=100, batch_size=32,
#                     validation_data=(X_val, y_val), callbacks=[early_stopping], verbose=1)
```

#### Key concepts
*   **Hyperparameters:** Configuration settings of a model that are set before training and are not learned from the data (e.g., `filters`, `kernel_size`, `learning_rate`).
*   **Hyperparameter Tuning:** The process of finding the optimal combination of hyperparameters for a model to achieve the best performance.
*   **Grid Search:** An exhaustive search method that evaluates a model for every possible combination of hyperparameters specified in a grid.
*   **Random Search:** A method that samples random combinations of hyperparameters from a specified distribution, often more efficient than grid search for high-dimensional search spaces.
*   **Regularization:** Techniques used to prevent overfitting and improve the generalization ability of a model.
*   **Dropout:** A regularization technique that randomly sets a fraction of input units to zero during training, forcing the network to learn more robust features.
*   **L1/L2 Regularization:** Techniques that add a penalty term to the loss function based on the magnitude of weights, encouraging smaller weights and preventing overfitting.
*   **Batch Normalization:** A technique that normalizes the activations of the previous layer at each batch, accelerating training and acting as a mild regularizer.
*   **Early Stopping:** A regularization strategy that halts training when a monitored validation metric (e.g., validation loss) stops improving for a specified number of epochs, preventing overfitting.

#### Hands-on activity
**Activity: Applying Regularization and Early Stopping to a Conv1D Model**

You will take a basic Conv1D model and enhance it by adding `Dropout` layers, `BatchNormalization` layers, and configuring `EarlyStopping`. You'll then train the model and observe the effect of these techniques.

**Instructions:**
1.  Start with the provided basic Conv1D model structure.
2.  Add a `BatchNormalization` layer after the `Conv1D` layer and before its activation (or after activation if using a functional API, but usually before).
3.  Add a `Dropout` layer after the `MaxPooling1D` layer.
4.  Add another `Dropout` layer before the final `Dense` output layer.
5.  Configure `EarlyStopping` to monitor `val_loss` with a `patience` of 5 epochs and `restore_best_weights=True`.
6.  Train the model and observe the training history, particularly how `val_loss` behaves.

**Starter Code:**

```python
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv1D, MaxPooling1D, Flatten, Dense, Dropout, BatchNormalization
from tensorflow.keras.callbacks import EarlyStopping
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt

# 1. Prepare synthetic data
np.random.seed(42)
timesteps_total = 2000
time = np.arange(timesteps_total)
data = np.sin(time / 20) + np.random.normal(0, 0.1, timesteps_total) + np.linspace(0, 2, timesteps_total)

look_back = 20
X, y = [], []
for i in range(len(data) - look_back):
    X.append(data[i:(i + look_back)])
    y.append(data[i + look_back])

X = np.array(X)
y = np.array(y).reshape(-1, 1) # Ensure y is 2D

# Reshape X for Conv1D: (samples, timesteps, features)
X = X.reshape(X.shape[0], X.shape[1], 1)

# Split data into training and validation sets
X_train, X_val, y_train, y_val = train_test_split(X, y, test_size=0.2, random_state=42)

print(f"X_train shape: {X_train.shape}, y_train shape: {y_train.shape}")
print(f"X_val shape: {X_val.shape}, y_val shape: {y_val.shape}")

# 2. Build the Conv1D model with regularization and early stopping
model = Sequential()
model.add(Conv1D(filters=64, kernel_size=3, input_shape=(look_back, 1)))
model.add(BatchNormalization()) # YOUR CODE HERE: Add BatchNormalization
model.add(tf.keras.layers.Activation('relu')) # Activation after BN

model.add(MaxPooling1D(pool_size=2))
model.add(Dropout(0.3)) # YOUR CODE HERE: Add Dropout

model.add(Flatten())
model.add(Dense(50, activation='relu'))
model.add(Dropout(0.5)) # YOUR CODE HERE: Add another Dropout layer
model.add(Dense(1))

model.compile(optimizer='adam', loss='mse')
model.summary()

# 3. Configure Early Stopping
early_stopping = EarlyStopping(monitor='val_loss', patience=10, restore_best_weights=True, verbose=1) # YOUR CODE HERE: Configure EarlyStopping

# 4. Train the model
history = model.fit(X_train, y_train,
                    epochs=100,
                    batch_size=32,
                    validation_data=(X_val, y_val),
                    callbacks=[early_stopping], # YOUR CODE HERE: Pass the early_stopping callback
                    verbose=0) # Set verbose to 1 to see progress

print("\nTraining complete. Plotting loss history.")

# Plot training & validation loss
plt.figure(figsize=(10, 6))
plt.plot(history.history['loss'], label='Train Loss')
plt.plot(history.history['val_loss'], label='Validation Loss')
plt.title('Model Loss with Regularization and Early Stopping')
plt.xlabel('Epoch')
plt.ylabel('Loss (MSE)')
plt.legend()
plt.grid(True)
plt.show()
```

#### Assessment idea
1.  **Question:** You are training a Conv1D model and observe that the training loss continues to decrease, but the validation loss starts to increase significantly after a certain number of epochs. Which regularization technique would be most appropriate to address this specific problem?
    a) Increasing the `kernel_size`.
    b) Applying `BatchNormalization` after every `Conv1D` layer.
    c) Implementing `EarlyStopping` based on `val_loss`.
    d) Decreasing the `dropout_rate`.

    **Correct Answer:** c) Implementing `EarlyStopping` based on `val_loss`.
    **Explanation:** The described scenario is a classic sign of overfitting. `EarlyStopping` is specifically designed to prevent this by monitoring a validation metric and stopping training when performance on unseen data begins to degrade. While `BatchNormalization` (b) and `Dropout` (d, though decreasing it would likely worsen overfitting) are regularization techniques, `EarlyStopping` directly targets the problem of training too long. Increasing `kernel_size` (a) might even exacerbate overfitting if not chosen carefully.

2.  **Question:** A data scientist wants to reduce the number of learnable parameters in a Conv1D model while maintaining its ability to capture complex patterns. Which two hyperparameters or techniques, if adjusted appropriately, would directly contribute to reducing parameter count in a Conv1D layer?
    a) Increasing `filters` and `kernel_size`.
    b) Decreasing `filters` and increasing `dilation_rate`.
    c) Increasing `strides` and applying `L1 regularization`.
    d) Decreasing `filters` and `kernel_size`.

    **Correct Answer:** d) Decreasing `filters` and `kernel_size`.
    **Explanation:**
    *   The number of parameters in a `Conv1D` layer is roughly `(kernel_size * input_features + 1) * filters`.
    *   Decreasing `filters` directly reduces the number of parameters.
    *   Decreasing `kernel_size` also directly reduces the number of parameters.
    *   Increasing `filters` or `kernel_size` (a) would *increase* parameters.
    *   Increasing `dilation_rate` (b) does *not* change the number of parameters; it only changes how the existing kernel weights are applied.
    *   Increasing `strides` (c) reduces the output size but doesn't change the number of learnable parameters in the Conv1D layer itself. L1 regularization (c) affects weight values but not the count of parameters in the layer definition.

#### AI generation note
Create a 15-minute mixed format lesson with a slide deck and live coding. The slide deck should introduce each regularization technique (Dropout, Batch Norm, L1/L2, Early Stopping) with clear explanations and small diagrams. Then, transition to a live coding demo in Keras/TensorFlow. Start with a basic Conv1D model and incrementally add `BatchNormalization`, `Dropout` layers with varying rates, and `l2` regularization to `Conv1D` and `Dense` layers. Show how to configure `EarlyStopping` with `monitor` and `patience`. Train the model on synthetic data and visualize the training/validation loss curves, highlighting where early stopping would have occurred. The interactive element should be a mini-quiz asking learners to identify which regularization technique would best solve a given overfitting scenario.

---

### Chapter 4.5 — Interpreting Conv1D Models and Feature Importance

#### Learning objectives
*   Understand the general challenges and limitations of interpreting deep learning models.
*   Explain how convolutional filters in a Conv1D model can learn to detect specific local patterns in time series data.
*   Apply basic visualization techniques to inspect the learned filters of a Conv1D layer.
*   Discuss methods for approximating feature importance in Conv1D models, such as activation mapping or saliency maps.
*   Relate learned features back to real-world time series characteristics like trends, seasonality, or anomalies.

#### Detailed lesson content
Deep learning models, especially complex ones like CNNs, are often referred to as "black boxes" due to the difficulty in understanding their internal decision-making processes. While this is a general challenge in deep learning, gaining some insight into what a Conv1D model has learned can be incredibly valuable for debugging, building trust, and even discovering new patterns in your time series data. Interpreting Conv1D models primarily involves trying to understand what specific temporal patterns the convolutional filters are responding to.

The core idea is that each filter in a Conv1D layer is essentially a pattern detector. When a filter slides across the input sequence, it produces a high activation value when it encounters a segment that strongly matches the pattern it has learned. For instance, one filter might learn to activate strongly when it sees a sharp upward trend, another for a sudden dip, and yet another for a specific oscillatory pattern. By inspecting the weights of these filters directly, or more effectively, by visualizing the input segments that maximally activate them, we can begin to infer what temporal features the model considers important.

One basic visualization technique is to plot the weights of the learned filters directly. Since each filter is a 1D array, you can simply plot its values. If a filter has `kernel_size=5`, you'd plot 5 values. While this gives you the raw pattern, it can be abstract. A more intuitive approach is to find input segments from your training data that produce the highest activation for a specific filter. You can iterate through your validation set, pass it through the model, and record the input windows that cause the strongest response in a particular filter's feature map. Plotting these "maximally activating" input segments can reveal the specific temporal shape the filter is tuned to detect. For example, if a filter consistently activates for segments showing a steep rise followed by a plateau, you've likely found a "rising edge detector."

```python
# Example: Visualizing Conv1D filter weights (conceptual)
# Assuming 'model' is a trained Keras model and its first layer is Conv1D
# This is a conceptual example, actual implementation might vary slightly based on model structure.

# Access the weights of the first Conv1D layer
# Assuming model is already defined and trained, e.g., from previous chapters
# For demonstration, let's create a dummy model
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv1D, MaxPooling1D, Flatten, Dense
import numpy as np

look_back = 20
n_features = 1
model = Sequential()
model.add(Conv1D(filters=16, kernel_size=5, activation='relu', input_shape=(look_back, n_features)))
model.add(MaxPooling1D(pool_size=2))
model.add(Flatten())
model.add(Dense(1))
model.compile(optimizer='adam', loss='mse')
# Dummy training to have weights
X_dummy = np.random.rand(100, look_back, n_features)
y_dummy = np.random.rand(100, 1)
model.fit(X_dummy, y_dummy, epochs=5, verbose=0)

conv1d_layer = model.layers[0] # Assuming first layer is Conv1D
filters, biases = conv1d_layer.get_weights()

# Filters shape: (kernel_size, input_features, output_filters)
# For univariate: (kernel_size, 1, num_filters)
print(f"Shape of filters: {filters.shape}")

# Plotting the first few filters
import matplotlib.pyplot as plt

num_filters_to_plot = min(filters.shape[2], 8) # Plot up to 8 filters

plt.figure(figsize=(15, 6))
for i in range(num_filters_to_plot):
    plt.subplot(2, 4, i + 1)
    plt.plot(filters[:, 0, i]) # Plotting the 1D filter weights
    plt.title(f'Filter {i+1}')
    plt.grid(True)
plt.tight_layout()
plt.suptitle('Learned Conv1D Filter Weights', y=1.02, fontsize=16)
plt.show()
```

Beyond direct filter visualization, more advanced interpretability methods, often borrowed from computer vision, can be adapted. **Saliency Maps** or **Gradient-weighted Class Activation Mapping (Grad-CAM)** can highlight which parts of the input time series were most influential in making a specific prediction. For time series, this would mean identifying which timesteps contributed most to the forecast. These methods typically involve computing gradients of the output with respect to the input or intermediate feature maps. While more complex to implement, they offer a powerful way to pinpoint critical temporal regions.

A common mistake in interpretation is over-interpreting simple filter plots. A single filter's plot might look like random noise, but its true meaning emerges in combination with other filters and through the non-linear activations. It's also easy to fall into the trap of confirmation bias, seeing patterns you expect rather than what the model truly learned. Always validate your interpretations with quantitative analysis or by testing specific hypotheses.

Consider a real-world application like forecasting patient vital signs. A Conv1D model might learn filters that detect early signs of distress (e.g., a specific heart rate variability pattern) or a gradual deterioration. By interpreting these filters, clinicians could gain insights into the specific temporal biomarkers the model uses for prediction, potentially leading to earlier interventions. Similarly, in financial forecasting, filters might identify specific candlestick patterns or volume surges that precede price movements.

While deep learning models are complex, techniques for interpreting Conv1D layers allow us to peek inside the "black box." By understanding what local patterns our models are learning, we can gain confidence in their predictions, debug potential issues, and even derive new domain knowledge from the data. This blend of predictive power and interpretability is crucial for deploying deep learning solutions responsibly in critical applications.

#### Key concepts
*   **Model Interpretability:** The degree to which a human can understand the cause of a model's decision.
*   **Filter (Pattern Detector):** In Conv1D, each filter learns to recognize a specific local temporal pattern in the input sequence.
*   **Activation Map:** The output of a convolutional layer, showing where and how strongly a filter activated across the input.
*   **Maximally Activating Inputs:** Input segments that cause the highest activation in a specific filter, used to infer the pattern the filter has learned.
*   **Saliency Maps:** Visualization techniques that highlight the parts of the input that are most important for a model's prediction, typically by showing the gradient of the output with respect to the input.
*   **Grad-CAM (Gradient-weighted Class Activation Mapping):** A technique for visualizing the regions of an input that were important for a prediction, often by using gradients of a target concept flowing into convolutional layers.
*   **Black Box Model:** A model whose internal workings are opaque and difficult to understand, making its decisions hard to interpret.

#### Hands-on activity
**Activity: Visualizing Learned Conv1D Filters**

You will train a simple Conv1D model on a synthetic time series and then extract and visualize the weights of its first convolutional layer. This will give you a direct look at the patterns the model has learned.

**Instructions:**
1.  Generate a synthetic time series with clear, repeating patterns (e.g., sine wave with spikes).
2.  Prepare the data for Conv1D input (windowing and reshaping).
3.  Build and train a simple Conv1D model.
4.  Extract the weights from the first `Conv1D` layer.
5.  Plot the 1D filter weights to observe the learned patterns.

**Starter Code:**

```python
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv1D, MaxPooling1D, Flatten, Dense
import matplotlib.pyplot as plt

# 1. Generate synthetic data with clear patterns
np.random.seed(42)
timesteps_total = 1000
time = np.arange(timesteps_total)
# A base sine wave, plus a sharp spike every 50 timesteps, plus noise
data = np.sin(time / 10) + np.random.normal(0, 0.05, timesteps_total)
for i in range(0, timesteps_total, 50):
    if i + 5 < timesteps_total:
        data[i:i+5] += 0.5 # Add a small spike

# 2. Prepare data for Conv1D
look_back = 20
X, y = [], []
for i in range(len(data) - look_back):
    X.append(data[i:(i + look_back)])
    y.append(data[i + look_back])

X = np.array(X).reshape(-1, look_back, 1) # Reshape for Conv1D
y = np.array(y).reshape(-1, 1)

# Split for training (simple split for this activity)
X_train, y_train = X[:800], y[:800]
X_val, y_val = X[800:], y[800:]

print(f"X_train shape: {X_train.shape}, y_train shape: {y_train.shape}")

# 3. Build and train a simple Conv1D model
model = Sequential()
model.add(Conv1D(filters=16, kernel_size=5, activation='relu', input_shape=(look_back, 1)))
model.add(MaxPooling1D(pool_size=2))
model.add(Flatten())
model.add(Dense(1))

model.compile(optimizer='adam', loss='mse')
print("\nTraining model...")
model.fit(X_train, y_train, epochs=20, batch_size=32, verbose=0)
print("Model trained.")

# 4. Extract weights from the first Conv1D layer
conv1d_layer = model.layers[0] # Assuming it's the first layer
filters, biases = conv1d_layer.get_weights()

print(f"\nShape of extracted filters: {filters.shape}") # (kernel_size, input_features, output_filters)

# 5. Plot the 1D filter weights
num_filters_to_plot = filters.shape[2] # Plot all filters
plt.figure(figsize=(15, 8))
for i in range(num_filters_to_plot):
    plt.subplot(4, 4, i + 1) # Adjust subplot grid as needed
    plt.plot(filters[:, 0, i]) # Plot the 1D filter weights
    plt.title(f'Filter {i+1}')
    plt.grid(True)
plt.tight_layout()
plt.suptitle('Learned Conv1D Filter Weights', y=1.02, fontsize=16)
plt.show()

# Optional: Try to identify what kind of patterns these filters might detect based on their shape.
```

#### Assessment idea
1.  **Question:** You plot the weights of a Conv1D filter and observe a pattern that resembles a sharp, sudden increase followed by a rapid decrease. What kind of time series feature is this filter most likely designed to detect?
    a) A long-term trend.
    b) A slow, gradual oscillation.
    c) A sudden spike or anomaly.
    d) Consistent periodicity.

    **Correct Answer:** c) A sudden spike or anomaly.
    **Explanation:** The description "sharp, sudden increase followed by a rapid decrease" perfectly matches the characteristic shape of a spike or an anomalous event in a time series. Filters are local pattern detectors, and this specific shape indicates it's looking for transient, abrupt changes rather than long-term trends, slow oscillations, or consistent periodic patterns.

2.  **Question:** Which of the following statements best describes a limitation of directly plotting Conv1D filter weights for interpretation?
    a) Filter weights are always random and don't reveal any meaningful patterns.
    b) The true meaning of a filter often emerges from its interaction with other filters and non-linear activations, which isn't captured by a single plot.
    c) Plotting filter weights is computationally expensive and impractical for most models.
    d) Filter weights only show global patterns, not local ones.

    **Correct Answer:** b) The true meaning of a filter often emerges from its interaction with other filters and non-linear activations, which isn't captured by a single plot.
    **Explanation:** While plotting filter weights provides a direct view of the learned patterns, interpreting them in isolation can be misleading. Deep networks learn hierarchical features, and the full context of a filter's role involves how it combines with other filters in subsequent layers and how non-linear activation functions transform its output. It's not that they are random (a) or computationally expensive (c), and they specifically show *local* patterns, not global ones (d).

#### AI generation note
Create an 8-minute interactive Jupyter Notebook walkthrough. Start by explaining the "black box" problem. Then, guide the learner through loading a pre-trained simple Conv1D model (or quickly train one on a synthetic dataset with clear patterns like spikes or ramps). Show how to extract and plot the weights of the first Conv1D layer. Encourage learners to visually inspect the plots and hypothesize what patterns each filter might detect. Include a section where learners can input a small segment of time series data and see the activation values of specific filters. The interactive element should be a reflection prompt: "Based on the filter plots, describe one specific temporal pattern you believe your model is learning to detect."

---

### Chapter 4.6 — Case Study: Univariate Time Series Forecasting with a Hybrid Conv1D-Dense Model

#### Learning objectives
*   Load and preprocess a real-world univariate time series dataset for a forecasting task.
*   Implement data windowing and reshaping techniques specifically for Conv1D model input.
*   Design and build a complete hybrid Conv1D-Dense model architecture for univariate time series forecasting.
*   Train the model effectively, incorporating regularization and early stopping.
*   Evaluate the model's performance using appropriate time series metrics (e.g., MAE, RMSE) and visualize predictions.

#### Detailed lesson content
We've covered the theoretical underpinnings of Conv1D, built basic and advanced architectures, and explored interpretability. Now, it's time to bring all these concepts together in an end-to-end case study: univariate time series forecasting using a robust hybrid Conv1D-Dense model. This practical application will solidify your understanding and prepare you for real-world challenges. We'll use a publicly available dataset, such as daily minimum temperatures in Melbourne, Australia, to make our predictions.

The first critical step is **data loading and preprocessing**. Real-world time series often come with quirks: missing values, incorrect data types, or non-stationary properties. Our chosen dataset, daily minimum temperatures, is relatively clean, but we'll still need to parse dates, convert temperature strings to floats, and ensure the data is ordered chronologically. A common mistake here is not handling missing values appropriately; for time series, simple imputation (like mean or median) can distort temporal patterns. More advanced methods like forward-fill, backward-fill, or interpolation are often preferred, or simply dropping very short sequences if data is abundant. For this case study, we'll assume a clean dataset for simplicity.

Next, we move to **data windowing and reshaping**. As established, Conv1D layers require 3D input `(samples, timesteps, features)`. We need to transform our flat univariate series into overlapping or non-overlapping input-output pairs. For example, to predict tomorrow's temperature, we might use the last 5 days' temperatures as input. This involves creating a function that slides a window across the time series, extracting `look_back` timesteps for `X` and the next single timestep for `y`. Remember to reshape `X` to `(samples, look_back, 1)` and `y` to `(samples, 1)`. It's also crucial to split your data into training, validation, and test sets *chronologically*. Random splitting, as often done in classification, will lead to data leakage, where the model sees future data during training, resulting in overly optimistic performance metrics. Always split by time, ensuring your test set is the most recent data.

With the data prepared, we can design our **hybrid Conv1D-Dense model architecture**. A hybrid approach typically involves one or more Conv1D layers for feature extraction from the raw sequence, followed by pooling, and then a Flatten layer to feed the extracted features into a standard Dense (MLP) network for the final prediction. This allows the Conv1D layers to automatically learn salient temporal features, while the Dense layers can combine these features in complex ways to make the final forecast. We'll incorporate regularization techniques we discussed: `BatchNormalization` for stable training, `Dropout` to prevent overfitting, and `EarlyStopping` to optimize training duration.

```python
import numpy as np
import pandas as pd
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv1D, MaxPooling1D, Flatten, Dense, Dropout, BatchNormalization
from tensorflow.keras.callbacks import EarlyStopping
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_absolute_error, mean_squared_error
import matplotlib.pyplot as plt

# --- 1. Data Loading and Preprocessing ---
# Using a sample dataset for demonstration. In a real scenario, load from CSV.
# This is a synthetic representation of daily min temperatures
np.random.seed(42)
days = 365 * 10 # 10 years of data
dates = pd.date_range(start='2000-01-01', periods=days, freq='D')
temperatures = (np.sin(np.linspace(0, 30, days)) * 10 +
                np.cos(np.linspace(0, 100, days)) * 5 +
                np.random.normal(0, 2, days) + 15).round(1)
df = pd.DataFrame({'Date': dates, 'Temp': temperatures})
df['Temp'] = df['Temp'].astype(float) # Ensure float type

# Normalize the data
scaler = MinMaxScaler(feature_range=(0, 1))
scaled_data = scaler.fit_transform(df['Temp'].values.reshape(-1, 1))

# --- 2. Data Windowing and Reshaping ---
look_back = 30 # Use last 30 days to predict next day
def create_dataset(dataset, look_back=1):
    X, Y = [], []
    for i in range(len(dataset) - look_back):
        a = dataset[i:(i + look_back), 0]
        X.append(a)
        Y.append(dataset[i + look_back, 0])
    return np.array(X), np.array(Y)

X, y = create_dataset(scaled_data, look_back)

# Reshape X for Conv1D: (samples, timesteps, features)
X = X.reshape(X.shape[0], X.shape[1], 1)
y = y.reshape(-1, 1) # Ensure y is 2D

# Split into train, validation, and test sets (chronological split)
train_size = int(len(X) * 0.7)
val_size = int(len(X) * 0.15)
test_size = len(X) - train_size - val_size

X_train, y_train = X[0:train_size], y[0:train_size]
X_val, y_val = X[train_size:train_size+val_size], y[train_size:train_size+val_size]
X_test, y_test = X[train_size+val_size:len(X)], y[train_size+val_size:len(X)]

print(f"X_train shape: {X_train.shape}, y_train shape: {y_train.shape}")
print(f"X_val shape: {X_val.shape}, y_val shape: {y_val.shape}")
print(f"X_test shape: {X_test.shape}, y_test shape: {y_test.shape}")

# --- 3. Build Hybrid Conv1D-Dense Model ---
model = Sequential()
model.add(Conv1D(filters=64, kernel_size=5, activation='relu', input_shape=(look_back, 1)))
model.add(BatchNormalization())
model.add(MaxPooling1D(pool_size=2))
model.add(Dropout(0.3))

model.add(Conv1D(filters=32, kernel_size=3, activation='relu', padding='same'))
model.add(BatchNormalization())
model.add(Dropout(0.3))

model.add(Flatten()) # Prepare for Dense layers
model.add(Dense(100, activation='relu'))
model.add(Dropout(0.5))
model.add(Dense(1)) # Output for single-step forecast

model.compile(optimizer='adam', loss='mse')
model.summary()

# --- 4. Train the model with Early Stopping ---
early_stopping = EarlyStopping(monitor='val_loss', patience=15, restore_best_weights=True, verbose=1)

print("\nTraining the model...")
history = model.fit(X_train, y_train,
                    epochs=200, # Max epochs, EarlyStopping will stop it
                    batch_size=64,
                    validation_data=(X_val, y_val),
                    callbacks=[early_stopping],
                    verbose=0) # Set to 1 for progress bar

print("Training finished.")

# --- 5. Evaluate the model ---
train_predict_scaled = model.predict(X_train)
val_predict_scaled = model.predict(X_val)
test_predict_scaled = model.predict(X_test)

# Inverse transform predictions and actual values to original scale
train_predict = scaler.inverse_transform(train_predict_scaled)
train_actual = scaler.inverse_transform(y_train)
val_predict = scaler.inverse_transform(val_predict_scaled)
val_actual = scaler.inverse_transform(y_val)
test_predict = scaler.inverse_transform(test_predict_scaled)
test_actual = scaler.inverse_transform(y_test)

# Calculate metrics
train_mae = mean_absolute_error(train_actual, train_predict)
val_mae = mean_absolute_error(val_actual, val_predict)
test_mae = mean_absolute_error(test_actual, test_predict)
train_rmse = np.sqrt(mean_squared_error(train_actual, train_predict))
test_rmse = np.sqrt(mean_squared_error(test_actual, test_predict))

print(f"\nTrain MAE: {train_mae:.3f}, Train RMSE: {train_rmse:.3f}")
print(f"Validation MAE: {val_mae:.3f}")
print(f"Test MAE: {test_mae:.3f}, Test RMSE: {test_rmse:.3f}")

# --- Visualize predictions ---
def plot_predictions(actual, predictions, title):
    plt.figure(figsize=(15, 6))
    plt.plot(actual, label='Actual Values', color='blue')
    plt.plot(predictions, label='Predicted Values', color='red', linestyle='--')
    plt.title(title)
    plt.xlabel('Time Step')
    plt.ylabel('Temperature')
    plt.legend()
    plt.grid(True)
    plt.show()

plot_predictions(train_actual, train_predict, 'Train Set Predictions vs Actual')
plot_predictions(val_actual, val_predict, 'Validation Set Predictions vs Actual')
plot_predictions(test_actual, test_predict, 'Test Set Predictions vs Actual')
```

**Training and Evaluation** are the final steps. We'll compile the model using an appropriate optimizer (e.g., 'adam') and a loss function suitable for regression (e.g., 'mse' for Mean Squared Error). During training, we pass our `X_train` and `y_train`, along with `validation_data` and our `EarlyStopping` callback. After training, we evaluate the model's performance on the unseen `X_test` data. Common metrics for time series forecasting include Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), and Mean Absolute Percentage Error (MAPE). Remember to inverse transform your scaled predictions back to the original scale before calculating and interpreting these metrics, as raw scaled errors are not intuitive. A common safety note here is to always ensure your `scaler` is `fit` only on the training data and then used to `transform` all datasets (train, val, test) and `inverse_transform` predictions. Fitting the scaler on the entire dataset, including validation or test data, is another form of data leakage.

Finally, **visualizing predictions** is crucial. Plotting the actual values against the predicted values for the test set allows for a qualitative assessment of the model's performance. You can observe if the model captures trends, seasonality, and the magnitude of errors. This visual inspection often reveals insights that numerical metrics alone might miss, such as systematic over- or under-prediction during certain periods. This case study provides a complete pipeline, from raw data to a trained and evaluated Conv1D forecasting model, equipping you with the practical skills to tackle your own univariate time series problems.

#### Key concepts
*   **Data Preprocessing:** Cleaning, transforming, and scaling raw time series data to make it suitable for deep learning models.
*   **Data Windowing:** Creating input-output pairs (sequences) from a continuous time series for supervised learning.
*   **Chronological Split:** Dividing time series data into training, validation, and test sets based on time order to prevent data leakage.
*   **Hybrid Conv1D-Dense Model:** An architecture combining Conv1D layers for automatic feature extraction from sequences with Dense layers for final prediction.
*   **Mean Absolute Error (MAE):** A common regression metric that measures the average magnitude of errors, without considering their direction.
*   **Root Mean Squared Error (RMSE):** A common regression metric that measures the square root of the average of the squared errors, giving more weight to larger errors.
*   **Inverse Transform:** Converting scaled data or predictions back to their original scale using the fitted scaler.
*   **Data Leakage:** Unintentionally allowing information from the validation or test set to be used during training, leading to overly optimistic performance estimates.

#### Hands-on activity
**Activity: Implement and Evaluate a Hybrid Conv1D-Dense Model on a Real Dataset**

You will complete the provided code to build, train, and evaluate a Conv1D-Dense model for forecasting daily temperatures. This activity will involve implementing the chronological data split and ensuring correct scaling and inverse scaling.

**Instructions:**
1.  Review the provided data loading, preprocessing, and windowing steps.
2.  Ensure the chronological split for train/validation/test is correctly implemented.
3.  Complete the model definition with appropriate layers (Conv1D, BatchNormalization, MaxPooling1D, Dropout, Flatten, Dense).
4.  Compile and train the model using `EarlyStopping`.
5.  Implement the inverse transformation of predictions and actual values.
6.  Calculate and print MAE and RMSE for the test set.
7.  Visualize the actual vs. predicted values for the test set.

**Starter Code:**

```python
import numpy as np
import pandas as pd
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv1D, MaxPooling1D, Flatten, Dense, Dropout, BatchNormalization
from tensorflow.keras.callbacks import EarlyStopping
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_absolute_error, mean_squared_error
import matplotlib.pyplot as plt

# --- 1. Data Loading and Preprocessing (Provided) ---
# Load the "Daily minimum temperatures in Melbourne, Australia, 1981-1990" dataset
# For simplicity, we'll generate a synthetic dataset that mimics its characteristics.
# In a real scenario, you'd load a CSV:
# df = pd.read_csv('daily-minimum-temperatures.csv', header=0, index_col=0, parse_dates=True, squeeze=True)
# df = df.to_frame(name='Temp')

# Synthetic temperature data mimicking daily min temps
np.random.seed(42)
days = 365 * 10 # 10 years of data
dates = pd.date_range(start='1981-01-01', periods=days, freq='D')
temperatures = (np.sin(np.linspace(0, 30, days)) * 8 + # Seasonal component
                np.random.normal(0, 1.5, days) + # Noise
                np.linspace(10, 18, days) # Slight upward trend over 10 years
               ).round(1)
df = pd.DataFrame({'Date': dates, 'Temp': temperatures})
df['Temp'] = df['Temp'].astype(float)

# Normalize the data
scaler = MinMaxScaler(feature_range=(0, 1))
scaled_data = scaler.fit_transform(df['Temp'].values.reshape(-1, 1))

# --- 2. Data Windowing and Reshaping (Provided) ---
look_back = 60 # Use last 60 days to predict next day
def create_dataset(dataset, look_back=1):
    X, Y = [], []
    for i in range(len(dataset) - look_back):
        a = dataset[i:(i + look_back), 0]
        X.append(a)
        Y.append(dataset[i + look_back, 0])
    return np.array(X), np.array(Y)

X, y = create_dataset(scaled_data, look_back)
X = X.reshape(X.shape[0], X.shape[1], 1) # Reshape for Conv1D
y = y.reshape(-1, 1) # Ensure y is 2D

# Split into train, validation, and test sets (chronological split)
train_split_ratio = 0.7
val_split_ratio = 0.15
train_size = int(len(X) * train_split_ratio)
val_size = int(len(X) * val_split_ratio)
test_size = len(X) - train_size - val_size

X_train, y_train = X[0:train_size], y[0:train_size]
X_val, y_val = X[train_size:train_size+val_size], y[train_size:train_size+val_size]
X_test, y_test = X[train_size+val_size:len(X)], y[train_size+val_size:len(X)]

print(f"X_train shape: {X_train.shape}, y_train shape: {y_train.shape}")
print(f"X_val shape: {X_val.shape}, y_val shape: {y_val.shape}")
print(f"X_test shape: {X_test.shape}, y_test shape: {y_test.shape}")

# --- 3. Build Hybrid Conv1D-Dense Model (Complete the architecture) ---
model = Sequential()
# YOUR CODE HERE: Add Conv1D, BatchNormalization, MaxPooling1D, Dropout layers
model.add(Conv1D(filters=128, kernel_size=7, activation='relu', input_shape=(look_back, 1)))
model.add(BatchNormalization())
model.add(MaxPooling1D(pool_size=2))
model.add(Dropout(0.4))

model.add(Conv1D(filters=64, kernel_size=5, activation='relu', padding='same'))
model.add(BatchNormalization())
model.add(MaxPooling1D(pool_size=2))
model.add(Dropout(0.4))

model.add(Flatten()) # Flatten for Dense layers
# YOUR CODE HERE: Add Dense layers with Dropout
model.add(Dense(100, activation='relu'))
model.add(Dropout(0.5))
model.add(Dense(1)) # Output for single-step forecast

model.compile(optimizer='adam', loss='mse')
model.summary()

# --- 4. Train the model with Early Stopping (Provided) ---
early_stopping = EarlyStopping(monitor='val_loss', patience=20, restore_best_weights=True, verbose=1)

print("\nTraining the model...")
history = model.fit(X_train, y_train,
                    epochs=300, # Max epochs, EarlyStopping will stop it
                    batch_size=128,
                    validation_data=(X_val, y_val),
                    callbacks=[early_stopping],
                    verbose=0)
print("Training finished.")

# Plot training & validation loss
plt.figure(figsize=(10, 6))
plt.plot(history.history['loss'], label='Train Loss')
plt.plot(history.history['val_loss'], label='Validation Loss')
plt.title('Model Loss History')
plt.xlabel('Epoch')
plt.ylabel('Loss (MSE)')
plt.legend()
plt.grid(True)
plt.show()

# --- 5. Evaluate the model (Complete inverse transform and metrics) ---
train_predict_scaled = model.predict(X_train)
val_predict_scaled = model.predict(X_val)
test_predict_scaled = model.predict(X_test)

# YOUR CODE HERE: Inverse transform predictions and actual values to original scale
train_predict = scaler.inverse_transform(train_predict_scaled)
train_actual = scaler.inverse_transform(y_train)
val_predict = scaler.inverse_transform(val_predict_scaled)
val_actual = scaler.inverse_transform(y_val)
test_predict = scaler.inverse_transform(test_predict_scaled)
test_actual = scaler.inverse_transform(y_test)

# Calculate metrics
train_mae = mean_absolute_error(train_actual, train_predict)
val_mae = mean_absolute_error(val_actual, val_predict)
test_mae = mean_absolute_error(test_actual, test_predict)
train_rmse = np.sqrt(mean_squared_error(train_actual, train_predict))
test_rmse = np.sqrt(mean_squared_error(test_actual, test_predict))

print(f"\nTrain MAE: {train_mae:.3f}, Train RMSE: {train_rmse:.3f}")
print(f"Validation MAE: {val_mae:.3f}")
print(f"Test MAE: {test_mae:.3f}, Test RMSE: {test_rmse:.3f}")

# --- Visualize predictions (Provided) ---
def plot_predictions(actual, predictions, title):
    plt.figure(figsize=(15, 6))
    plt.plot(actual, label='Actual Values', color='blue')
    plt.plot(predictions, label='Predicted Values', color='red', linestyle='--')
    plt.title(title)
    plt.xlabel('Time Step')
    plt.ylabel('Temperature')
    plt.legend()
    plt.grid(True)
    plt.show()

plot_predictions(train_actual, train_predict, 'Train Set Predictions vs Actual')
plot_predictions(val_actual, val_predict, 'Validation Set Predictions vs Actual')
plot_predictions(test_actual, test_predict, 'Test Set Predictions vs Actual')
```

#### Assessment idea
1.  **Question:** You are preparing a univariate time series for Conv1D forecasting. You decide to use a `look_back` window of 60 timesteps. Which of the following data preparation steps is MOST critical to avoid data leakage and ensure a realistic evaluation of your model?
    a) Normalizing the entire dataset (train, val, test) using a single `MinMaxScaler` fitted on all data.
    b) Randomly shuffling the `X` and `y` pairs before splitting into train, validation, and test sets.
    c) Splitting the data into train, validation, and test sets chronologically, with the test set being the most recent data.
    d) Using a `Conv1D` layer with `padding='same'` to maintain the sequence length.

    **Correct Answer:** c) Splitting the data into train, validation, and test sets chronologically, with the test set being the most recent data.
    **Explanation:** Chronological splitting (c) is paramount for time series to prevent data leakage. If you randomly shuffle (b), your model might train on future data, leading to an artificially inflated performance estimate. Normalizing the entire dataset (a) with a scaler fitted on all data also introduces leakage, as the scaler learns from future data's distribution. `padding='same'` (d) is a model architecture detail, not a data leakage prevention strategy.

2.  **Question:** After training your hybrid Conv1D-Dense model, you calculate the Mean Absolute Error (MAE) on the test set. The MAE value is 0.05. What is the most important next step to interpret this MAE value meaningfully?
    a) Compare it to the R-squared value of the model.
    b) Inverse transform the MAE value back to the original data scale.
    c) Retrain the model with a different optimizer.
    d) Plot the training loss history.

    **Correct Answer:** b) Inverse transform the MAE value back to the original data scale.
    **Explanation:** Since the model was trained on scaled data (typically normalized to 0-1), the MAE of 0.05 is also on the scaled range. This value is not directly interpretable in the context of the original temperature units (e.g., Celsius). To understand the error in real-world terms, you must inverse transform the error (or the predictions and actual values before calculating MAE) using the same scaler that was fitted on the training data. This will give you an MAE in the original temperature units, which is much more intuitive and useful for stakeholders.

#### AI generation note
Create a 15-minute live coding walkthrough in a Jupyter Notebook. Begin by loading a synthetic time series dataset (mimicking real-world data like daily temperatures). Guide the learner through the entire data preparation pipeline: normalization using `MinMaxScaler`, creating `look_back` windows, and performing a chronological train/validation/test split. Then, incrementally build the hybrid Conv1D-Dense model, explaining each layer (Conv1D, BatchNormalization, MaxPooling1D, Dropout, Flatten, Dense) and its parameters. Train the model with `EarlyStopping`. Finally, demonstrate how to inverse transform predictions and actual values, calculate MAE and RMSE, and generate clear plots comparing actual vs. predicted values for the test set. The interactive element should be a challenge to modify the `look_back` window size and observe its impact on model performance (after re-running data prep).
---

## Module 5: LSTMs and GRUs for Univariate Time Series

This module dives into the powerful world of Recurrent Neural Networks (RNNs), specifically Long Short-Term Memory (LSTM) networks and Gated Recurrent Units (GRUs), tailored for univariate time series forecasting. You will learn the fundamental architecture of these models, understand how they address the limitations of traditional neural networks for sequential data, and gain practical skills in preparing time series data, building, training, and evaluating LSTM and GRU models. By the end of this module, you'll be able to confidently apply these state-of-the-art deep learning techniques to make accurate predictions on single-variable time series.

### Chapter 5.1 — Introduction to Recurrent Neural Networks (RNNs) for Time Series

#### Learning objectives
*   Explain the fundamental limitations of Feedforward Neural Networks (MLPs) and Convolutional Neural Networks (CNNs) when processing sequential data like time series.
*   Describe the core concept of recurrence in neural networks and how it enables processing sequences of arbitrary length.
*   Identify the key components of a simple Recurrent Neural Network (RNN) cell, including the hidden state and input-to-hidden connections.
*   Understand the vanishing and exploding gradient problems inherent in simple RNNs when dealing with long sequences.
*   Implement a basic `SimpleRNN` layer in a deep learning framework for a conceptual understanding of recurrence.

#### Detailed lesson content
Welcome to the module where we unlock the true potential of deep learning for sequential data, specifically time series. In previous modules, we explored how Multilayer Perceptrons (MLPs) and Convolutional Neural Networks (CNNs) can be adapted for time series forecasting. While effective for certain patterns and short-term dependencies, these architectures inherently struggle with the core nature of sequential data: memory. MLPs treat each input as independent, lacking any mechanism to remember past observations. Even when we craft features like lagged values, an MLP still processes these as distinct inputs without an internal state that evolves over time. CNNs, with their local receptive fields, excel at capturing spatial hierarchies and local patterns, which can be useful for identifying motifs in time series. However, their fixed-size filters and lack of an explicit memory mechanism make them less ideal for capturing long-range temporal dependencies or understanding the context that spans many time steps. Imagine trying to predict tomorrow's weather based on the last 30 days; an MLP would need 30 separate inputs, and a CNN would look for patterns in a fixed window. Neither intrinsically "remembers" the overall trend or specific events from the distant past within that 30-day window without careful feature engineering.

This is where Recurrent Neural Networks (RNNs) enter the scene. RNNs are specifically designed to handle sequential data by introducing the concept of an internal memory or "hidden state" that persists across time steps. Unlike feedforward networks, where information flows in one direction from input to output, RNNs have loops that allow information to be passed from one step of the sequence to the next. At each time step `t`, an RNN takes two inputs: the current input `x_t` and the hidden state `h_{t-1}` from the previous time step. It then computes a new hidden state `h_t` and an output `y_t` based on these inputs. This recurrent connection allows the network to build up a representation of the entire sequence, effectively "remembering" relevant information from earlier parts of the sequence. This memory is crucial for time series forecasting, where the value at the current time step is often highly dependent on values and patterns observed many steps in the past.

A simple RNN cell can be thought of as a function that takes `x_t` and `h_{t-1}` and produces `h_t`. Mathematically, this might look like `h_t = tanh(W_hh * h_{t-1} + W_xh * x_t + b_h)`, where `W_hh` are weights for the recurrent connection, `W_xh` are weights for the input connection, and `b_h` is a bias term. The `tanh` activation function is commonly used to introduce non-linearity. The output `y_t` can then be derived from `h_t` using another linear transformation and activation, e.g., `y_t = W_hy * h_t + b_y`. The crucial aspect here is that the same set of weights (`W_hh`, `W_xh`, `W_hy`) is used across all time steps. This weight sharing is what allows RNNs to generalize across different positions in the sequence and handle sequences of varying lengths. It's like applying the same "processing unit" repeatedly to each element of the sequence, updating its internal state along the way.

However, simple RNNs, while conceptually elegant, suffer from significant practical limitations, most notably the vanishing and exploding gradient problems. During backpropagation through time (BPTT), which is how RNNs learn, gradients are propagated backward through many time steps. If the recurrent weight matrices contain values that are either very small or very large, these gradients can either shrink exponentially (vanish) or grow exponentially (explode) as they propagate. Vanishing gradients make it extremely difficult for the network to learn long-term dependencies, as the influence of earlier inputs on the current hidden state becomes negligible. The network effectively "forgets" information from the distant past. Exploding gradients, on the other hand, lead to unstable training, large weight updates, and often result in `NaN` values in the model's parameters. While exploding gradients can sometimes be mitigated with gradient clipping (scaling down gradients if they exceed a certain threshold), vanishing gradients are a more fundamental challenge for simple RNNs.

Consider a practical scenario: predicting the demand for electricity over a year. Daily demand is influenced by factors like temperature, time of day, and day of the week, but also by long-term trends, seasonal patterns (e.g., summer vs. winter), and economic cycles. A simple RNN might struggle to connect a high demand in July to a specific policy change made in January, because the information from January would have vanished by the time the gradient signal reaches it. This inability to maintain information over long sequences severely limits the effectiveness of simple RNNs for many real-world time series problems. This limitation paved the way for more sophisticated recurrent architectures like LSTMs and GRUs, which we will explore in subsequent chapters, specifically designed to overcome these gradient issues and capture long-range dependencies more effectively. Despite their limitations, understanding the `SimpleRNN` is a vital stepping stone to appreciating the advancements made by LSTMs and GRUs.

```python
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import SimpleRNN, Dense
import matplotlib.pyplot as plt

# 1. Generate some synthetic time series data
# Let's create a simple sine wave with some noise
timesteps = 50
features = 1
total_samples = 1000

X_raw = np.sin(np.linspace(0, 100, total_samples)) + np.random.rand(total_samples) * 0.1
y_raw = np.roll(X_raw, -1) # Predict the next value

# For an RNN, we need to structure data as (samples, timesteps, features)
# Let's use a look_back window of 10
look_back = 10

X, y = [], []
for i in range(len(X_raw) - look_back - 1):
    X.append(X_raw[i:(i + look_back)])
    y.append(y_raw[i + look_back]) # Predict the value after the look_back window

X = np.array(X)
y = np.array(y)

# Reshape X for RNN input: (samples, timesteps, features)
# Our data currently is (samples, timesteps), so we add the feature dimension
X = X.reshape(X.shape[0], X.shape[1], features)

print(f"Shape of X: {X.shape}") # Expected: (num_samples, look_back, 1)
print(f"Shape of y: {y.shape}") # Expected: (num_samples,)

# 2. Build a simple RNN model
model = Sequential([
    SimpleRNN(units=50, activation='relu', input_shape=(look_back, features)),
    Dense(units=1) # Output a single value for forecasting
])

model.compile(optimizer='adam', loss='mse')
model.summary()

# 3. Train the model
history = model.fit(X, y, epochs=20, batch_size=32, verbose=0)

# 4. Make predictions
# Let's predict on the last few sequences from our dataset
test_input = X[-10:]
predictions = model.predict(test_input)

print("\nSample Predictions:")
for i in range(len(predictions)):
    print(f"Predicted: {predictions[i][0]:.4f}, Actual (next value): {y[-10+i]:.4f}")

# Plot training loss
plt.figure(figsize=(10, 6))
plt.plot(history.history['loss'])
plt.title('Simple RNN Model Loss')
plt.xlabel('Epoch')
plt.ylabel('Loss (MSE)')
plt.grid(True)
plt.show()

# Common mistake: Incorrect input shape.
# RNNs expect (batch_size, timesteps, features). If you forget the features dimension,
# you'll get an error. Always ensure your data is correctly reshaped.
# Another mistake: Forgetting to scale data. While not explicitly done here for simplicity,
# real-world time series data should almost always be scaled (e.g., Min-Max or StandardScaler)
# before feeding into neural networks, especially RNNs, to aid convergence and prevent
# exploding gradients.
```

#### Key concepts
*   **Recurrent Neural Network (RNN):** A type of neural network designed to process sequential data by maintaining an internal "hidden state" that captures information from previous steps in the sequence.
*   **Hidden State (h_t):** The internal memory of an RNN cell at time step `t`, which is a function of the current input `x_t` and the hidden state from the previous time step `h_{t-1}`.
*   **Recurrence:** The looping connection within an RNN that allows information to flow from one time step to the next, enabling the network to learn temporal dependencies.
*   **Backpropagation Through Time (BPTT):** The algorithm used to train RNNs, which involves unfolding the network over time and applying backpropagation to the unrolled network.
*   **Vanishing Gradient Problem:** A phenomenon in simple RNNs where gradients become extremely small as they propagate backward through many time steps, making it difficult for the network to learn long-term dependencies.
*   **Exploding Gradient Problem:** A phenomenon in simple RNNs where gradients become extremely large during backpropagation, leading to unstable training and large weight updates.
*   **Sequence-to-Vector Architecture:** An RNN configuration where an entire input sequence is processed to produce a single output vector (e.g., forecasting the next value in a series).

#### Hands-on activity
**Activity: Explore `SimpleRNN` with Varying Look-Back Windows**

Your task is to modify the provided `SimpleRNN` code to observe how the `look_back` window affects the model's ability to learn the synthetic sine wave pattern.

1.  **Change `look_back`:** Experiment with `look_back` values of `5`, `20`, and `50`.
2.  **Observe Performance:** Retrain the model for each `look_back` value and plot the training loss.
3.  **Analyze Predictions:** Make predictions and compare them visually or numerically for a small test set.
4.  **Reflect:** How does increasing the `look_back` window affect the training loss and the quality of predictions? What are the trade-offs?

```python
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import SimpleRNN, Dense
import matplotlib.pyplot as plt

def build_and_train_rnn(look_back_window):
    # 1. Generate synthetic time series data (same as before)
    timesteps = 50
    features = 1
    total_samples = 1000
    X_raw = np.sin(np.linspace(0, 100, total_samples)) + np.random.rand(total_samples) * 0.1
    y_raw = np.roll(X_raw, -1)

    X, y = [], []
    for i in range(len(X_raw) - look_back_window - 1):
        X.append(X_raw[i:(i + look_back_window)])
        y.append(y_raw[i + look_back_window])

    X = np.array(X).reshape(len(X), look_back_window, features)
    y = np.array(y)

    # 2. Build a simple RNN model
    model = Sequential([
        SimpleRNN(units=50, activation='relu', input_shape=(look_back_window, features)),
        Dense(units=1)
    ])
    model.compile(optimizer='adam', loss='mse')

    # 3. Train the model
    print(f"\nTraining SimpleRNN with look_back = {look_back_window}")
    history = model.fit(X, y, epochs=20, batch_size=32, verbose=0)

    # 4. Plot training loss
    plt.figure(figsize=(8, 4))
    plt.plot(history.history['loss'])
    plt.title(f'Simple RNN Model Loss (Look-back: {look_back_window})')
    plt.xlabel('Epoch')
    plt.ylabel('Loss (MSE)')
    plt.grid(True)
    plt.show()

    # 5. Make and print sample predictions
    if len(X) > 10:
        test_input = X[-10:]
        test_actuals = y[-10:]
        predictions = model.predict(test_input)
        print(f"Sample Predictions for look_back = {look_back_window}:")
        for i in range(len(predictions)):
            print(f"  Predicted: {predictions[i][0]:.4f}, Actual: {test_actuals[i]:.4f}")

# Experiment with different look_back windows
build_and_train_rnn(look_back_window=5)
build_and_train_rnn(look_back_window=20)
build_and_train_rnn(look_back_window=50) # This might show signs of vanishing gradients or less effective learning
```

#### Assessment idea
1.  **Question:** What is the primary limitation of a standard Feedforward Neural Network (MLP) when applied to time series forecasting, and how do Recurrent Neural Networks (RNNs) fundamentally address this limitation?
    *   **Correct Answer:** The primary limitation of an MLP is its inability to maintain an internal memory or state across sequential inputs. Each input to an MLP is treated independently, meaning it cannot inherently learn or leverage temporal dependencies that span multiple time steps. RNNs address this by introducing a recurrent connection, allowing information from previous time steps (via the hidden state) to influence the processing of the current time step. This internal memory enables RNNs to learn and capture patterns and dependencies over sequences.

2.  **Question:** You are training a simple RNN on a very long time series (thousands of time steps per sequence) and observe that the model's performance plateaus quickly, and it struggles to learn patterns that occurred early in the sequence. What common RNN problem is most likely occurring, and what is a basic technique to mitigate one type of this problem?
    *   **Correct Answer:** This scenario strongly suggests the **vanishing gradient problem**. When gradients become extremely small during backpropagation through many time steps, the updates to weights associated with earlier inputs become negligible, preventing the network from learning long-term dependencies. While not a complete solution for vanishing gradients, **gradient clipping** is a basic technique used to mitigate the **exploding gradient problem** (the opposite issue where gradients become too large). Gradient clipping involves scaling down gradients if their L2 norm exceeds a certain threshold, preventing unstable training. For vanishing gradients, more advanced architectures like LSTMs and GRUs are typically required, which we will cover next.

#### AI generation note
Create a 12-minute animated video explaining the concept of RNNs. Start by visually demonstrating the limitations of MLPs and CNNs for time series (e.g., showing an MLP processing individual points vs. a CNN with a fixed window). Then, animate the flow of information in a simple RNN cell, clearly showing the input `x_t`, the previous hidden state `h_{t-1}`, and the computation of the new hidden state `h_t` and output `y_t`. Use a clear, flowing diagram to illustrate the recurrent loop and weight sharing. Dedicate a segment to visually explain vanishing and exploding gradients, perhaps using a "gradient intensity" meter that shrinks or grows as it propagates backward through time. Include a live coding segment demonstrating the `SimpleRNN` example provided, showing the input shape transformation and model summary. The tone should be encouraging and foundational. Include captions and alt text for diagrams.
---
### Chapter 5.2 — Long Short-Term Memory (LSTM) Networks: Architecture and Mechanics

#### Learning objectives
*   Identify the core problem that Long Short-Term Memory (LSTM) networks were designed to solve in simple RNNs.
*   Describe the unique architecture of an LSTM cell, including the cell state and the three main gates: forget, input, and output gates.
*   Explain the function of each gate (forget, input, output) and how they regulate the flow of information into and out of the cell state.
*   Trace the path of information through an LSTM cell, demonstrating how it can selectively remember or forget past information.
*   Implement a basic LSTM layer in a deep learning framework for univariate time series forecasting.

#### Detailed lesson content
As we discovered in the previous chapter, simple Recurrent Neural Networks (RNNs) struggle with the vanishing gradient problem, making it difficult for them to learn and retain information over long sequences. This limitation severely hampers their effectiveness in many real-world time series forecasting tasks where long-term dependencies are crucial. Imagine trying to predict a financial market crash; the preceding indicators might have occurred months or even years ago. A simple RNN would likely "forget" these distant signals. To overcome this, the Long Short-Term Memory (LSTM) network was introduced by Hochreiter & Schmidhuber in 1997, revolutionizing the field of sequential data processing. LSTMs are a special kind of RNN, capable of learning long-term dependencies by employing a sophisticated internal mechanism that allows them to selectively remember or forget information.

The magic of LSTMs lies in their unique internal structure, which is far more complex than a simple RNN cell. The key innovation is the **cell state (C_t)**, which acts as a "conveyor belt" running straight through the entire chain of LSTM cells. This cell state carries information across many time steps, allowing it to be preserved over long durations. Information can be added to or removed from the cell state by a series of precisely controlled "gates." These gates are essentially neural network layers themselves, typically consisting of a sigmoid activation function, which outputs values between 0 and 1. A value of 0 means "let nothing through," while a value of 1 means "let everything through." There are three main types of gates in an LSTM cell: the forget gate, the input gate, and the output gate.

Let's break down the function of each gate and how they interact to manage the cell state:

1.  **Forget Gate (f_t):** This gate determines what information from the previous cell state `C_{t-1}` should be thrown away or "forgotten." It takes the current input `x_t` and the previous hidden state `h_{t-1}` as input, passes them through a sigmoid function, and produces a vector of values between 0 and 1. A 0 at a particular position means to completely forget that piece of information, while a 1 means to completely keep it.
    *   `f_t = σ(W_f · [h_{t-1}, x_t] + b_f)`

2.  **Input Gate (i_t):** This gate decides what new information from the current input `x_t` and previous hidden state `h_{t-1}` should be stored in the cell state. It has two parts:
    *   First, a sigmoid layer (the input gate layer `i_t`) decides which values we will update.
    *   Second, a `tanh` layer (`C̃_t`, the candidate cell state) creates a vector of new candidate values that could be added to the state.
    *   `i_t = σ(W_i · [h_{t-1}, x_t] + b_i)`
    *   `C̃_t = tanh(W_C · [h_{t-1}, x_t] + b_C)`

3.  **Updating the Cell State (C_t):** Now, the old cell state `C_{t-1}` is updated to the new cell state `C_t`. We multiply the old state by the forget gate's output `f_t` (forgetting what we decided to forget), and then add the product of the input gate's output `i_t` and the candidate cell state `C̃_t` (adding the new information we decided to keep).
    *   `C_t = f_t * C_{t-1} + i_t * C̃_t`

4.  **Output Gate (o_t):** Finally, this gate determines what part of the current cell state `C_t` will be output as the new hidden state `h_t`. It uses a sigmoid layer to decide which parts of the cell state to output, and then puts the cell state through a `tanh` (to push the values between -1 and 1) and multiplies it by the sigmoid output.
    *   `o_t = σ(W_o · [h_{t-1}, x_t] + b_o)`
    *   `h_t = o_t * tanh(C_t)`

This intricate interplay of gates allows LSTMs to maintain a stable gradient flow over long sequences, effectively solving the vanishing gradient problem. The cell state acts as a memory reservoir, and the gates act as sophisticated controllers that decide what information to store, what to discard, and what to output. This selective memory makes LSTMs incredibly powerful for tasks requiring the understanding of long-range dependencies, such as natural language processing, speech recognition, and, crucially for us, time series forecasting.

For a practical example, consider predicting the daily sales of a seasonal product like ice cream. Sales are influenced by recent weather, but also by the general season (e.g., summer months historically have higher sales regardless of a single cold day) and long-term marketing campaigns. An LSTM can "remember" that it's currently summer (via its cell state) and that a major campaign launched three months ago is still active, even if the immediate daily weather is fluctuating. The forget gate might discard irrelevant daily noise, the input gate might add information about a new local event, and the output gate would then combine this context to provide an accurate sales forecast.

When implementing LSTMs, frameworks like TensorFlow and PyTorch provide convenient `LSTM` layers. You simply specify the number of units (the dimensionality of the output space, which also corresponds to the cell state and hidden state size) and the `input_shape`. The framework handles all the complex gate computations internally. Common mistakes include incorrect input shape (remember `(samples, timesteps, features)`), not scaling the input data (which is critical for neural networks, especially RNNs), and choosing too many or too few units, which can lead to underfitting or overfitting. Careful hyperparameter tuning and data preprocessing are essential for successful LSTM deployment.

```python
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
from sklearn.preprocessing import MinMaxScaler
import matplotlib.pyplot as plt

# 1. Generate some synthetic time series data
# A more complex sine wave with increasing amplitude and noise
timesteps = 50
features = 1
total_samples = 2000 # More data for better learning
time = np.arange(total_samples)
amplitude = 1 + np.sin(time / 200) * 0.5 # Increasing amplitude
X_raw = amplitude * np.sin(time / 20) + np.random.rand(total_samples) * 0.2
y_raw = np.roll(X_raw, -1) # Predict the next value

# Scale the data
scaler = MinMaxScaler(feature_range=(0, 1))
X_scaled = scaler.fit_transform(X_raw.reshape(-1, 1))
y_scaled = scaler.transform(y_raw.reshape(-1, 1))

# For an LSTM, we need to structure data as (samples, timesteps, features)
look_back = 20 # Using a slightly larger look-back window
X, y = [], []
for i in range(len(X_scaled) - look_back - 1):
    X.append(X_scaled[i:(i + look_back), 0])
    y.append(y_scaled[i + look_back, 0])

X = np.array(X)
y = np.array(y)

# Reshape X for LSTM input: (samples, timesteps, features)
X = X.reshape(X.shape[0], X.shape[1], features)

print(f"Shape of X: {X.shape}") # Expected: (num_samples, look_back, 1)
print(f"Shape of y: {y.shape}") # Expected: (num_samples,)

# Split data into training and testing
train_size = int(len(X) * 0.8)
X_train, X_test = X[0:train_size], X[train_size:len(X)]
y_train, y_test = y[0:train_size], y[train_size:len(y)]

# 2. Build an LSTM model
model = Sequential([
    LSTM(units=100, activation='relu', input_shape=(look_back, features), return_sequences=False),
    # return_sequences=False means the LSTM layer only outputs the last hidden state for the sequence
    # If we wanted to stack more LSTM layers, we would set return_sequences=True
    Dense(units=1) # Output a single value for forecasting
])

model.compile(optimizer='adam', loss='mse')
model.summary()

# 3. Train the model
history = model.fit(X_train, y_train, epochs=50, batch_size=64, verbose=0, validation_split=0.1)

# 4. Make predictions and inverse transform
train_predict_scaled = model.predict(X_train)
test_predict_scaled = model.predict(X_test)

# Inverse transform predictions and actuals to original scale
train_predict = scaler.inverse_transform(train_predict_scaled)
y_train_inv = scaler.inverse_transform(y_train.reshape(-1, 1))
test_predict = scaler.inverse_transform(test_predict_scaled)
y_test_inv = scaler.inverse_transform(y_test.reshape(-1, 1))

# Plot training and validation loss
plt.figure(figsize=(12, 6))
plt.plot(history.history['loss'], label='Train Loss')
plt.plot(history.history['val_loss'], label='Validation Loss')
plt.title('LSTM Model Loss')
plt.xlabel('Epoch')
plt.ylabel('Loss (MSE)')
plt.legend()
plt.grid(True)
plt.show()

# Plot actual vs. predicted for a segment of the test set
plt.figure(figsize=(15, 7))
plt.plot(scaler.inverse_transform(X_scaled).flatten(), label='Original Data')
# Shift train predictions for plotting
train_plot = np.empty_like(X_raw)
train_plot[:] = np.nan
train_plot[look_back:len(train_predict)+look_back] = train_predict.flatten()

# Shift test predictions for plotting
test_plot = np.empty_like(X_raw)
test_plot[:] = np.nan
test_plot[len(train_predict)+(look_back*2)+1:len(X_raw)-1] = test_predict.flatten()

plt.plot(train_plot, label='Train Predict')
plt.plot(test_plot, label='Test Predict')
plt.title('LSTM Forecast on Synthetic Time Series')
plt.xlabel('Time Step')
plt.ylabel('Value')
plt.legend()
plt.show()

# Common mistake: Not scaling data. LSTMs are sensitive to input scale.
# Another mistake: Forgetting `return_sequences=True` when stacking LSTM layers,
# or setting it to `True` when only a single output is needed from the last LSTM.
```

#### Key concepts
*   **Long Short-Term Memory (LSTM):** A specialized type of Recurrent Neural Network (RNN) designed to overcome the vanishing gradient problem and learn long-term dependencies in sequential data.
*   **Cell State (C_t):** The "memory" of the LSTM, a vector that runs through the entire chain of cells, allowing information to be carried across many time steps with minimal degradation.
*   **Gate:** A mechanism within an LSTM cell (typically a sigmoid neural network layer) that controls the flow of information into or out of the cell state.
*   **Forget Gate (f_t):** Determines what information from the previous cell state `C_{t-1}` should be discarded.
*   **Input Gate (i_t):** Determines what new information from the current input `x_t` and previous hidden state `h_{t-1}` should be stored in the cell state.
*   **Candidate Cell State (C̃_t):** A new candidate value vector generated by a `tanh` layer, which the input gate then uses to update the cell state.
*   **Output Gate (o_t):** Determines what part of the current cell state `C_t` should be output as the new hidden state `h_t`.
*   **`return_sequences`:** A parameter in Keras/TensorFlow LSTM layers that, when `True`, outputs the hidden state for each time step in the input sequence, useful for stacking LSTM layers. When `False` (default), it outputs only the hidden state of the last time step.

#### Hands-on activity
**Activity: Stacked LSTMs for Enhanced Feature Learning**

Modify the provided LSTM code to implement a stacked LSTM architecture. Stacking LSTM layers can allow the network to learn higher-level temporal features.

1.  **Add a second LSTM layer:** Insert another `LSTM` layer after the first one.
2.  **`return_sequences=True`:** Ensure the *first* LSTM layer has `return_sequences=True` so that it outputs a sequence of hidden states for the second LSTM layer to consume. The *last* LSTM layer should have `return_sequences=False` (or default) if you're predicting a single value.
3.  **Adjust units:** Experiment with the number of units in each LSTM layer (e.g., 100 in the first, 50 in the second).
4.  **Train and Evaluate:** Retrain the model and observe if the stacked architecture improves performance or changes the learning curve compared to a single LSTM layer.

```python
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
from sklearn.preprocessing import MinMaxScaler
import matplotlib.pyplot as plt

# Data generation and scaling (same as previous example)
timesteps = 50
features = 1
total_samples = 2000
time = np.arange(total_samples)
amplitude = 1 + np.sin(time / 200) * 0.5
X_raw = amplitude * np.sin(time / 20) + np.random.rand(total_samples) * 0.2
y_raw = np.roll(X_raw, -1)

scaler = MinMaxScaler(feature_range=(0, 1))
X_scaled = scaler.fit_transform(X_raw.reshape(-1, 1))
y_scaled = scaler.transform(y_raw.reshape(-1, 1))

look_back = 20
X, y = [], []
for i in range(len(X_scaled) - look_back - 1):
    X.append(X_scaled[i:(i + look_back), 0])
    y.append(y_scaled[i + look_back, 0])

X = np.array(X).reshape(len(X), look_back, features)
y = np.array(y)

train_size = int(len(X) * 0.8)
X_train, X_test = X[0:train_size], X[train_size:len(X)]
y_train, y_test = y[0:train_size], y[train_size:len(y)]

# --- YOUR MODIFICATION STARTS HERE ---
# Build a stacked LSTM model
model_stacked = Sequential([
    LSTM(units=100, activation='relu', input_shape=(look_back, features), return_sequences=True), # Output sequences for the next LSTM
    LSTM(units=50, activation='relu', return_sequences=False), # Only output the last hidden state
    Dense(units=1)
])

model_stacked.compile(optimizer='adam', loss='mse')
model_stacked.summary()

# Train the model
print("\nTraining Stacked LSTM Model...")
history_stacked = model_stacked.fit(X_train, y_train, epochs=50, batch_size=64, verbose=0, validation_split=0.1)

# Make predictions and inverse transform (plotting code omitted for brevity, but you can add it back)
train_predict_scaled_stacked = model_stacked.predict(X_train)
test_predict_scaled_stacked = model_stacked.predict(X_test)

train_predict_stacked = scaler.inverse_transform(train_predict_scaled_stacked)
test_predict_stacked = scaler.inverse_transform(test_predict_scaled_stacked)

# Plot training and validation loss
plt.figure(figsize=(12, 6))
plt.plot(history_stacked.history['loss'], label='Train Loss (Stacked LSTM)')
plt.plot(history_stacked.history['val_loss'], label='Validation Loss (Stacked LSTM)')
plt.title('Stacked LSTM Model Loss')
plt.xlabel('Epoch')
plt.ylabel('Loss (MSE)')
plt.legend()
plt.grid(True)
plt.show()

# You can add back the full plotting code for actual vs. predicted if desired
# --- YOUR MODIFICATION ENDS HERE ---
```

#### Assessment idea
1.  **Question:** Explain the primary role of the "cell state" in an LSTM network and how it fundamentally differs from the "hidden state" in a simple RNN in addressing the vanishing gradient problem.
    *   **Correct Answer:** The cell state in an LSTM acts as a long-term memory or "conveyor belt" that runs through the entire sequence, allowing information to be carried across many time steps with minimal degradation. Unlike the hidden state in a simple RNN, which is constantly being overwritten and can suffer from vanishing gradients over long sequences, the cell state is explicitly controlled by gates (forget, input, output). These gates enable the LSTM to selectively add or remove information from the cell state, preserving relevant context over extended periods and thus mitigating the vanishing gradient problem by providing a direct path for gradients to flow.

2.  **Question:** You are designing an LSTM model for univariate time series forecasting where you need to stack two LSTM layers before a final `Dense` output layer. What critical parameter must be set on the *first* LSTM layer, and why is it necessary?
    *   **Correct Answer:** The `return_sequences` parameter on the *first* LSTM layer must be set to `True`. This is necessary because the second LSTM layer expects a sequence of hidden states as its input, one for each time step in the original input sequence. If `return_sequences` were `False` (the default), the first LSTM layer would only output the hidden state from the *last* time step, which is a single vector, not a sequence, and thus incompatible with the input requirements of the subsequent LSTM layer.

#### AI generation note
Create a 15-minute interactive slide deck with animated diagrams. Begin by contrasting the simple RNN cell with the LSTM cell, highlighting the addition of the cell state and gates. Dedicate a slide to each gate (forget, input, output), visually explaining its purpose and how it uses sigmoid activations to control information flow (e.g., a slider from 0 to 1). Animate the flow of information through a complete LSTM cell, showing how `x_t` and `h_{t-1}` interact with the gates to update `C_t` and `h_t`. Include simplified mathematical formulas alongside the visual explanations. Conclude with a segment showing the Python code for a basic LSTM layer and its `summary()`. The tone should be highly detailed and explanatory. Include an interactive element where the user can click on a gate to see a pop-up explanation of its function. Ensure all diagrams have descriptive alt text.
---
### Chapter 5.3 — Gated Recurrent Units (GRUs): A Simpler Alternative

#### Learning objectives
*   Understand the motivation behind the development of Gated Recurrent Units (GRUs) as a more computationally efficient alternative to LSTMs.
*   Describe the architecture of a GRU cell, identifying its two main gates: the update gate and the reset gate.
*   Explain the function of the update gate and the reset gate and how they control information flow.
*   Compare and contrast the internal mechanisms of GRUs with LSTMs, highlighting their similarities and differences.
*   Determine scenarios where GRUs might be preferred over LSTMs for time series forecasting.
*   Implement a basic GRU layer in a deep learning framework for univariate time series forecasting.

#### Detailed lesson content
While LSTMs effectively solve the vanishing gradient problem and have become a cornerstone for sequence modeling, their complexity comes with a computational cost. Each LSTM cell involves three gates and a cell state, leading to a larger number of parameters and increased computational overhead compared to a simple RNN. This complexity motivated the development of Gated Recurrent Units (GRUs) by Cho et al. in 2014. GRUs offer a simplified architecture that retains much of the LSTM's power in capturing long-term dependencies but with fewer parameters and faster computation. They achieve this by merging the cell state and hidden state, and by combining the forget and input gates into a single "update gate."

The GRU cell streamlines the information flow with only two gates:

1.  **Update Gate (z_t):** This gate determines how much of the previous hidden state `h_{t-1}` should be carried forward to the current hidden state `h_t`, and how much of the new candidate hidden state `h̃_t` should be incorporated. It acts as a combination of the forget and input gates of an LSTM. A value close to 1 means "keep the old information," while a value close to 0 means "discard the old information and mostly use the new candidate."
    *   `z_t = σ(W_z · [h_{t-1}, x_t] + b_z)`

2.  **Reset Gate (r_t):** This gate determines how much of the previous hidden state `h_{t-1}` should be "forgotten" or reset when computing the new candidate hidden state `h̃_t`. If `r_t` is close to 0, it essentially makes the model ignore the previous hidden state, allowing it to "reset" its memory for new inputs.
    *   `r_t = σ(W_r · [h_{t-1}, x_t] + b_r)`

3.  **Candidate Hidden State (h̃_t):** This is where the reset gate comes into play. It computes a new candidate hidden state using the current input `x_t` and a "reset" version of the previous hidden state (`r_t * h_{t-1}`). If the reset gate output `r_t` is small, `r_t * h_{t-1}` will be close to zero, effectively making the network "forget" the past when calculating the candidate.
    *   `h̃_t = tanh(W_h · [r_t * h_{t-1}, x_t] + b_h)`

4.  **Current Hidden State (h_t):** Finally, the new hidden state `h_t` is computed as a linear interpolation between the previous hidden state `h_{t-1}` and the candidate hidden state `h̃_t`, controlled by the update gate `z_t`.
    *   `h_t = (1 - z_t) * h_{t-1} + z_t * h̃_t`

Comparing GRUs to LSTMs, the most significant difference is the absence of a separate cell state in GRUs. The hidden state `h_t` in a GRU plays the role of both the hidden state and the cell state in an LSTM. This simplification means GRUs have fewer parameters, which can lead to faster training and potentially better generalization on smaller datasets where overfitting is a concern. The update gate in GRUs directly controls the balance between old and new information, effectively combining the roles of LSTM's forget and input gates. The reset gate, similar to the forget gate, helps the GRU decide how much of the past to disregard.

When should you choose a GRU over an LSTM?
*   **Computational Efficiency:** If you are working with very large datasets or require faster training times, GRUs can be a good choice due to their reduced complexity.
*   **Smaller Datasets:** With fewer parameters, GRUs might be less prone to overfitting on smaller datasets compared to LSTMs.
*   **Performance Parity:** In many practical applications, the performance difference between LSTMs and GRUs is negligible. It's often a matter of empirical testing to see which performs better for a specific task and dataset.
*   **Simplicity:** If interpretability or a simpler model architecture is preferred, GRUs offer a more straightforward design.

For instance, in forecasting energy consumption, which can involve massive datasets of minute-by-minute readings, a GRU might be preferred for its efficiency while still capturing daily and weekly patterns. If the dependencies are extremely long-term and subtle, like in some financial time series where events from years ago might still be relevant, LSTMs might theoretically have an edge due to their explicit cell state, but this is not always guaranteed.

Implementing GRUs in deep learning frameworks is as straightforward as LSTMs. TensorFlow/Keras provides a `GRU` layer that you can drop into your `Sequential` model. The input shape requirements (`(samples, timesteps, features)`) and the importance of data scaling remain the same. A common mistake is assuming one is always superior to the other; the best choice often depends on the specific problem and dataset. It's good practice to experiment with both architectures during model development.

```python
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import GRU, Dense
from sklearn.preprocessing import MinMaxScaler
import matplotlib.pyplot as plt

# 1. Generate synthetic time series data (same as LSTM example for fair comparison)
timesteps = 50
features = 1
total_samples = 2000
time = np.arange(total_samples)
amplitude = 1 + np.sin(time / 200) * 0.5
X_raw = amplitude * np.sin(time / 20) + np.random.rand(total_samples) * 0.2
y_raw = np.roll(X_raw, -1)

# Scale the data
scaler = MinMaxScaler(feature_range=(0, 1))
X_scaled = scaler.fit_transform(X_raw.reshape(-1, 1))
y_scaled = scaler.transform(y_raw.reshape(-1, 1))

look_back = 20
X, y = [], []
for i in range(len(X_scaled) - look_back - 1):
    X.append(X_scaled[i:(i + look_back), 0])
    y.append(y_scaled[i + look_back, 0])

X = np.array(X)
y = np.array(y)

# Reshape X for GRU input: (samples, timesteps, features)
X = X.reshape(X.shape[0], X.shape[1], features)

print(f"Shape of X: {X.shape}")
print(f"Shape of y: {y.shape}")

# Split data into training and testing
train_size = int(len(X) * 0.8)
X_train, X_test = X[0:train_size], X[train_size:len(X)]
y_train, y_test = y[0:train_size], y[train_size:len(y)]

# 2. Build a GRU model
model_gru = Sequential([
    GRU(units=100, activation='relu', input_shape=(look_back, features), return_sequences=False),
    Dense(units=1)
])

model_gru.compile(optimizer='adam', loss='mse')
model_gru.summary()

# 3. Train the model
print("\nTraining GRU Model...")
history_gru = model_gru.fit(X_train, y_train, epochs=50, batch_size=64, verbose=0, validation_split=0.1)

# 4. Make predictions and inverse transform
train_predict_scaled_gru = model_gru.predict(X_train)
test_predict_scaled_gru = model_gru.predict(X_test)

train_predict_gru = scaler.inverse_transform(train_predict_scaled_gru)
y_train_inv = scaler.inverse_transform(y_train.reshape(-1, 1))
test_predict_gru = scaler.inverse_transform(test_predict_scaled_gru)
y_test_inv = scaler.inverse_transform(y_test.reshape(-1, 1))

# Plot training and validation loss
plt.figure(figsize=(12, 6))
plt.plot(history_gru.history['loss'], label='Train Loss (GRU)')
plt.plot(history_gru.history['val_loss'], label='Validation Loss (GRU)')
plt.title('GRU Model Loss')
plt.xlabel('Epoch')
plt.ylabel('Loss (MSE)')
plt.legend()
plt.grid(True)
plt.show()

# Plot actual vs. predicted for a segment of the test set
plt.figure(figsize=(15, 7))
plt.plot(scaler.inverse_transform(X_scaled).flatten(), label='Original Data')
# Shift train predictions for plotting
train_plot = np.empty_like(X_raw)
train_plot[:] = np.nan
train_plot[look_back:len(train_predict_gru)+look_back] = train_predict_gru.flatten()

# Shift test predictions for plotting
test_plot = np.empty_like(X_raw)
test_plot[:] = np.nan
test_plot[len(train_predict_gru)+(look_back*2)+1:len(X_raw)-1] = test_predict_gru.flatten()

plt.plot(train_plot, label='Train Predict (GRU)')
plt.plot(test_plot, label='Test Predict (GRU)')
plt.title('GRU Forecast on Synthetic Time Series')
plt.xlabel('Time Step')
plt.ylabel('Value')
plt.legend()
plt.show()

# Common mistake: Not comparing GRU and LSTM performance empirically.
# While GRUs are simpler, LSTMs might perform better on specific, complex tasks.
# Always benchmark both if possible.
```

#### Key concepts
*   **Gated Recurrent Unit (GRU):** A simplified version of an LSTM, designed to be computationally more efficient while still effectively capturing long-term dependencies in sequential data.
*   **Update Gate (z_t):** In a GRU, this gate controls how much of the previous hidden state should be carried forward and how much of the new candidate hidden state should be incorporated. It combines the functionality of LSTM's forget and input gates.
*   **Reset Gate (r_t):** In a GRU, this gate determines how much of the previous hidden state should be "forgotten" or reset when calculating the new candidate hidden state, allowing the model to ignore past irrelevant information.
*   **Candidate Hidden State (h̃_t):** An intermediate state in a GRU that proposes new information to be added to the hidden state, influenced by the reset gate.
*   **Parameter Efficiency:** GRUs have fewer parameters than LSTMs due to the absence of a separate cell state and fewer gates, leading to faster training and potentially better generalization on smaller datasets.

#### Hands-on activity
**Activity: Compare LSTM and GRU Performance**

This activity challenges you to directly compare the performance of an LSTM and a GRU model on the same synthetic time series data.

1.  **Run both models:** Use the provided code snippets for both LSTM (from Chapter 5.2) and GRU (from this chapter) on the *exact same* dataset and data split.
2.  **Plot Loss Curves:** Plot the training and validation loss curves for both models on the *same* graph for easier comparison.
3.  **Compare Predictions:** Visually compare the predictions of both models on the test set.
4.  **Analyze:** Based on the loss curves and predictions, which model appears to learn faster or achieve lower error on this specific synthetic dataset? What might explain any observed differences?

```python
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, GRU, Dense
from sklearn.preprocessing import MinMaxScaler
import matplotlib.pyplot as plt

# 1. Data generation and scaling (ensure consistency for both models)
timesteps = 50
features = 1
total_samples = 2000
time = np.arange(total_samples)
amplitude = 1 + np.sin(time / 200) * 0.5
X_raw = amplitude * np.sin(time / 20) + np.random.rand(total_samples) * 0.2
y_raw = np.roll(X_raw, -1)

scaler = MinMaxScaler(feature_range=(0, 1))
X_scaled = scaler.fit_transform(X_raw.reshape(-1, 1))
y_scaled = scaler.transform(y_raw.reshape(-1, 1))

look_back = 20
X, y = [], []
for i in range(len(X_scaled) - look_back - 1):
    X.append(X_scaled[i:(i + look_back), 0])
    y.append(y_scaled[i + look_back, 0])

X = np.array(X).reshape(len(X), look_back, features)
y = np.array(y)

train_size = int(len(X) * 0.8)
X_train, X_test = X[0:train_size], X[train_size:len(X)]
y_train, y_test = y[0:train_size], y[train_size:len(y)]

# 2. Build and train LSTM model
print("--- Training LSTM Model ---")
model_lstm = Sequential([
    LSTM(units=100, activation='relu', input_shape=(look_back, features), return_sequences=False),
    Dense(units=1)
])
model_lstm.compile(optimizer='adam', loss='mse')
history_lstm = model_lstm.fit(X_train, y_train, epochs=50, batch_size=64, verbose=0, validation_split=0.1)

# 3. Build and train GRU model
print("--- Training GRU Model ---")
model_gru = Sequential([
    GRU(units=100, activation='relu', input_shape=(look_back, features), return_sequences=False),
    Dense(units=1)
])
model_gru.compile(optimizer='adam', loss='mse')
history_gru = model_gru.fit(X_train, y_train, epochs=50, batch_size=64, verbose=0, validation_split=0.1)

# 4. Plot loss curves for comparison
plt.figure(figsize=(14, 7))
plt.plot(history_lstm.history['loss'], label='LSTM Train Loss')
plt.plot(history_lstm.history['val_loss'], label='LSTM Validation Loss')
plt.plot(history_gru.history['loss'], label='GRU Train Loss')
plt.plot(history_gru.history['val_loss'], label='GRU Validation Loss')
plt.title('LSTM vs. GRU Model Loss Comparison')
plt.xlabel('Epoch')
plt.ylabel('Loss (MSE)')
plt.legend()
plt.grid(True)
plt.show()

# 5. Make predictions for both models
test_predict_lstm_scaled = model_lstm.predict(X_test)
test_predict_gru_scaled = model_gru.predict(X_test)

test_predict_lstm = scaler.inverse_transform(test_predict_lstm_scaled)
test_predict_gru = scaler.inverse_transform(test_predict_gru_scaled)
y_test_inv = scaler.inverse_transform(y_test.reshape(-1, 1))

# 6. Plot a segment of predictions for comparison
plt.figure(figsize=(15, 7))
plt.plot(y_test_inv[50:150], label='Actual Test Data')
plt.plot(test_predict_lstm[50:150], label='LSTM Predictions')
plt.plot(test_predict_gru[50:150], label='GRU Predictions')
plt.title('LSTM vs. GRU Test Predictions (Segment)')
plt.xlabel('Time Step in Test Set')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()
```

#### Assessment idea
1.  **Question:** Describe the main architectural difference between an LSTM and a GRU, and explain how this difference contributes to GRU's potential advantages in certain scenarios.
    *   **Correct Answer:** The main architectural difference is that a GRU combines the cell state and hidden state into a single hidden state, whereas an LSTM maintains them separately. Additionally, GRUs have two gates (update and reset gates), while LSTMs have three (forget, input, and output gates). This simplification means GRUs have fewer parameters than LSTMs. This reduction in parameters can lead to faster training times and potentially better generalization on smaller datasets, as there are fewer parameters to learn, which can help mitigate overfitting.

2.  **Question:** You are working on a time series forecasting project with a very large dataset (millions of data points) and strict computational resource constraints. You've found that both LSTMs and GRUs yield similar accuracy on a small prototype. Which model would you likely choose for the full-scale deployment and why?
    *   **Correct Answer:** In this scenario, you would likely choose the **GRU** model for full-scale deployment. Since both models yield similar accuracy on a prototype, the GRU's advantage in computational efficiency due to its simpler architecture and fewer parameters becomes the deciding factor. With millions of data points and limited resources, the faster training and inference times of a GRU would be highly beneficial without sacrificing performance.

#### AI generation note
Create a 10-minute slide deck with voiceover and animated comparisons. Start by briefly reiterating LSTM complexity. Then, introduce the GRU, showing its simplified cell diagram with only two gates. Dedicate a slide to each GRU gate (update, reset), explaining its function and how it contributes to the overall hidden state update. Visually compare the GRU's update gate to the combined function of LSTM's forget and input gates. Use a side-by-side comparison slide to highlight the architectural differences and parameter count implications. Conclude with a discussion on when to choose GRUs over LSTMs, using real-world analogies (e.g., "fast-food option" vs. "fine dining"). Include a quick demo of the `GRU` layer in Keras and its `summary()`. Ensure high-contrast visuals and clear audio.
---
### Chapter 5.4 — Preparing Univariate Time Series Data for LSTMs/GRUs

#### Learning objectives
*   Recall the specific 3D input shape `(samples, timesteps, features)` required by Keras/TensorFlow LSTM and GRU layers.
*   Implement the sliding window (or sequence generation) technique to transform a 1D univariate time series into the appropriate 3D input format.
*   Apply data normalization or scaling techniques (e.g., Min-Max Scaling) to time series data before feeding it into RNNs.
*   Understand the importance of maintaining temporal order during data splitting (training, validation, test sets) for time series forecasting.
*   Utilize TensorFlow's `timeseries_dataset_from_array` utility for efficient data preparation and batching.

#### Detailed lesson content
One of the most critical steps in successfully applying LSTMs and GRUs to time series forecasting is correctly preparing your data. Unlike traditional MLPs that expect a 2D input `(samples, features)`, or CNNs that might expect `(samples, width, height, channels)`, recurrent layers like `LSTM` and `GRU` in TensorFlow/Keras expect a 3D input tensor with the shape `(samples, timesteps, features)`. Understanding and correctly transforming your univariate time series data into this specific format is paramount, as incorrect shaping is a very common source of errors for beginners.

Let's break down this required shape:
*   **`samples`**: This is the number of independent sequences or training examples in your dataset. If you have a long time series, you'll typically create many shorter sequences from it.
*   **`timesteps`**: Also known as the `look_back` window or sequence length. This represents the number of past observations (time steps) that the RNN will consider to make a prediction. For example, if you're predicting tomorrow's stock price based on the last 10 days, your `timesteps` would be 10.
*   **`features`**: This is the number of variables at each time step. For univariate time series, this will almost always be `1`, as you're only considering a single variable (e.g., temperature, stock price, sales volume). If you were working with multivariate time series, this number would be greater than 1.

The primary technique for transforming a 1D univariate time series into this 3D format is the **sliding window** method, also known as sequence generation. Imagine you have a long sequence of data points `[d1, d2, d3, d4, d5, d6, d7, ...]`. If your `look_back` window (timesteps) is 3 and you want to predict the very next value, your first sample would be `[d1, d2, d3]` as input, and `d4` as the target. The second sample would then "slide" one step forward: `[d2, d3, d4]` as input, and `d5` as the target, and so on. This process generates many input-output pairs from a single long time series.

Here's a conceptual breakdown of the sliding window process:
1.  Define your `look_back` window (number of previous time steps to consider).
2.  Iterate through your time series data.
3.  For each iteration `i`, create an input sequence `X_i` from `data[i : i + look_back]`.
4.  Create the corresponding target `y_i` from `data[i + look_back]`.
5.  Collect all `X_i` and `y_i` into lists, then convert them to NumPy arrays.
6.  Finally, reshape your `X` array to `(samples, look_back, 1)` for a univariate series.

Beyond shaping, **data normalization or scaling** is absolutely crucial for LSTMs and GRUs, as it is for most neural networks. These models are highly sensitive to the scale of input data. Unscaled data can lead to:
*   **Slow Convergence:** Gradient descent algorithms struggle to find the optimal solution efficiently when features have vastly different scales.
*   **Vanishing/Exploding Gradients:** While LSTMs/GRUs mitigate these, extreme input values can still exacerbate the problem.
*   **Poor Performance:** The activation functions (like `tanh` and `sigmoid` within the gates) operate best within specific input ranges.
Common scaling techniques include:
*   **Min-Max Scaling:** Scales data to a fixed range, typically `[0, 1]`. `X_scaled = (X - X_min) / (X_max - X_min)`. This is often preferred for RNNs.
*   **Standardization (Z-score normalization):** Scales data to have a mean of 0 and a standard deviation of 1. `X_scaled = (X - mean) / std_dev`.
Remember to fit the scaler only on your training data and then apply the *same* fitted scaler to your validation and test sets to prevent data leakage. Also, remember to inverse transform your predictions back to the original scale for meaningful interpretation.

**Splitting time series data** requires special care. Unlike typical machine learning where data can be randomly shuffled and split, time series data has an inherent temporal order that must be preserved. Randomly splitting would introduce **data leakage**, where your model might "see" future information during training, leading to overly optimistic performance estimates. Therefore, you must split your data chronologically:
*   **Training Set:** The earliest portion of the data.
*   **Validation Set:** The next chronological portion, used for hyperparameter tuning and early stopping.
*   **Test Set:** The latest chronological portion, used for final, unbiased evaluation of the model's generalization performance.

For efficiently handling data preparation, especially with larger datasets, TensorFlow provides a convenient utility: `tf.keras.utils.timeseries_dataset_from_array`. This function can automatically generate windows, batch data, and handle shuffling (if desired, though usually avoided for time series). It's a powerful tool for creating `tf.data.Dataset` objects, which are optimized for performance with TensorFlow models.

```python
import numpy as np
import tensorflow as tf
from sklearn.preprocessing import MinMaxScaler
import matplotlib.pyplot as plt

# 1. Generate a synthetic univariate time series
total_points = 5000
time_steps = np.arange(total_points)
data = np.sin(time_steps / 100) + np.random.normal(0, 0.1, total_points) + (time_steps / 1000)

plt.figure(figsize=(12, 6))
plt.plot(data)
plt.title("Original Synthetic Time Series Data")
plt.xlabel("Time Step")
plt.ylabel("Value")
plt.grid(True)
plt.show()

# 2. Data Scaling
# Reshape data for scaler (sklearn expects 2D array: (n_samples, n_features))
data = data.reshape(-1, 1)
scaler = MinMaxScaler(feature_range=(0, 1))
scaled_data = scaler.fit_transform(data)

# 3. Define sequence parameters
look_back = 50 # Number of past time steps to use as input
forecast_horizon = 1 # Number of future time steps to predict (for univariate, usually 1)

# 4. Manual Sliding Window (for understanding the process)
def create_sequences(data, look_back, forecast_horizon):
    X, y = [], []
    for i in range(len(data) - look_back - forecast_horizon + 1):
        # Input sequence (look_back previous values)
        X.append(data[i:(i + look_back), 0])
        # Target value (the value 'forecast_horizon' steps after the sequence)
        y.append(data[i + look_back + forecast_horizon - 1, 0])
    return np.array(X), np.array(y)

X_manual, y_manual = create_sequences(scaled_data, look_back, forecast_horizon)

# Reshape X for RNN input: (samples, timesteps, features)
X_manual = X_manual.reshape(X_manual.shape[0], X_manual.shape[1], 1)

print(f"Manual X shape: {X_manual.shape}") # Expected: (num_samples, look_back, 1)
print(f"Manual y shape: {y_manual.shape}") # Expected: (num_samples,)

# 5. Chronological Data Splitting
train_ratio = 0.7
val_ratio = 0.15
test_ratio = 0.15

total_samples_generated = X_manual.shape[0]
train_split = int(total_samples_generated * train_ratio)
val_split = int(total_samples_generated * (train_ratio + val_ratio))

X_train, y_train = X_manual[:train_split], y_manual[:train_split]
X_val, y_val = X_manual[train_split:val_split], y_manual[train_split:val_split]
X_test, y_test = X_manual[val_split:], y_manual[val_split:]

print(f"Train shapes: X={X_train.shape}, y={y_train.shape}")
print(f"Validation shapes: X={X_val.shape}, y={y_val.shape}")
print(f"Test shapes: X={X_test.shape}, y={y_test.shape}")

# 6. Using tf.keras.utils.timeseries_dataset_from_array (Alternative for efficiency)
# This function creates (window, label) pairs.
# window_size = look_back
# shift = forecast_horizon
# batch_size for training

# For training data
train_dataset = tf.keras.utils.timeseries_dataset_from_array(
    data=scaled_data[:-forecast_horizon], # Exclude last 'forecast_horizon' points for inputs
    targets=scaled_data[look_back:], # Targets start after look_back window
    sequence_length=look_back,
    sequence_stride=1, # How many steps to slide the window
    sampling_rate=1,
    batch_size=32,
    shuffle=False, # Crucial for time series!
    start_index=0,
    end_index=train_split + look_back -1 # Ensure correct end index for training data
)

# For validation data (careful with indices to avoid overlap)
# The start_index for validation should be where training data ends + forecast_horizon
val_start_index = train_split
val_end_index = val_split + look_back -1

val_dataset = tf.keras.utils.timeseries_dataset_from_array(
    data=scaled_data,
    targets=scaled_data[look_back:],
    sequence_length=look_back,
    sequence_stride=1,
    sampling_rate=1,
    batch_size=32,
    shuffle=False,
    start_index=val_start_index,
    end_index=val_end_index
)

# For test data
test_start_index = val_split
test_dataset = tf.keras.utils.timeseries_dataset_from_array(
    data=scaled_data,
    targets=scaled_data[look_back:],
    sequence_length=look_back,
    sequence_stride=1,
    sampling_rate=1,
    batch_size=32,
    shuffle=False,
    start_index=test_start_index,
    end_index=None # Go to the end of the available data
)

print(f"\nTensorFlow Dataset sizes:")
print(f"Train dataset batches: {len(train_dataset)}")
print(f"Validation dataset batches: {len(val_dataset)}")
print(f"Test dataset batches: {len(test_dataset)}")

# Example of how to iterate a tf.data.Dataset
for batch_X, batch_y in train_dataset.take(1):
    print(f"\nFirst batch from tf.data.Dataset:")
    print(f"Batch X shape: {batch_X.shape}") # (batch_size, look_back, features)
    print(f"Batch y shape: {batch_y.shape}") # (batch_size, features)
    break

# Common mistake: Shuffling time series data. This destroys temporal dependencies and leads to data leakage.
# Always set `shuffle=False` for time series datasets.
# Another mistake: Not scaling data. This is critical for RNN performance.
# Incorrect `input_shape` in the LSTM/GRU layer definition. Ensure it matches `(timesteps, features)`.
```

#### Key concepts
*   **3D Input Shape:** The required `(samples, timesteps, features)` tensor format for Keras/TensorFlow LSTM and GRU layers.
*   **`samples`:** The total number of sequences (training examples) generated from the original time series.
*   **`timesteps` (Look-back Window):** The number of previous observations used as input for predicting the next value(s).
*   **`features`:** The number of variables at each time step. For univariate series, this is `1`.
*   **Sliding Window Method:** A technique for creating input-output sequence pairs from a long time series by iteratively taking a fixed-size window of past observations as input and the subsequent value(s) as target.
*   **Data Normalization/Scaling:** Transforming data to a common range (e.g., `[0, 1]` with Min-Max Scaling) to improve neural network training stability and performance.
*   **Chronological Data Splitting:** Dividing time series data into training, validation, and test sets based on time order to prevent data leakage and ensure realistic model evaluation.
*   **Data Leakage:** Occurs when information from the validation or test set is inadvertently used during model training, leading to an overestimation of model performance.
*   **`tf.keras.utils.timeseries_dataset_from_array`:** A TensorFlow utility for efficiently creating time series datasets with windowing and batching.

#### Hands-on activity
**Activity: Implement Multi-step Ahead Forecasting Data Preparation**

Modify the `create_sequences` function and the `tf.keras.utils.timeseries_dataset_from_array` usage to prepare data for predicting `N` future steps instead of just one.

1.  **Change `forecast_horizon`:** Set `forecast_horizon = 3` (or any `N > 1`). This means you want to predict the next 3 values.
2.  **Adjust `create_sequences`:** The target `y` should now be a sequence of `forecast_horizon` values. The shape of `y` will become `(samples, forecast_horizon)`.
3.  **Adjust `timeseries_dataset_from_array`:**
    *   The `targets` argument will need to be adjusted to provide sequences of `forecast_horizon` length. This is a bit trickier with `timeseries_dataset_from_array` directly for multi-step *output*, as its `targets` are typically single values or single feature vectors. You might need to manually construct the `targets` array for multi-step output, or use a `Dense(forecast_horizon)` layer in your model. For this exercise, focus on creating `X` and `y` where `y` is a sequence.
    *   For `targets` in `timeseries_dataset_from_array`, if you want to predict `forecast_horizon` steps, you would typically use `targets=scaled_data[look_back : - (forecast_horizon - 1)]` and the model output would be `Dense(forecast_horizon)`.

```python
import numpy as np
import tensorflow as tf
from sklearn.preprocessing import MinMaxScaler
import matplotlib.pyplot as plt

# 1. Generate a synthetic univariate time series
total_points = 5000
time_steps = np.arange(total_points)
data = np.sin(time_steps / 100) + np.random.normal(0, 0.1, total_points) + (time_steps / 1000)
data = data.reshape(-1, 1) # Reshape for scaler
scaler = MinMaxScaler(feature_range=(0, 1))
scaled_data = scaler.fit_transform(data)

# 2. Define sequence parameters for multi-step forecasting
look_back = 50 # Number of past time steps to use as input
forecast_horizon = 3 # <--- CHANGE THIS: Number of future time steps to predict

# 3. Modified Manual Sliding Window for Multi-step Ahead Forecasting
def create_sequences_multi_step(data, look_back, forecast_horizon):
    X, y = [], []
    for i in range(len(data) - look_back - forecast_horizon + 1):
        # Input sequence (look_back previous values)
        X.append(data[i:(i + look_back), 0])
        # Target sequence (forecast_horizon future values)
        y.append(data[(i + look_back):(i + look_back + forecast_horizon), 0])
    return np.array(X), np.array(y)

X_multi, y_multi = create_sequences_multi_step(scaled_data, look_back, forecast_horizon)

# Reshape X for RNN input: (samples, timesteps, features)
X_multi = X_multi.reshape(X_multi.shape[0], X_multi.shape[1], 1)

print(f"Multi-step X shape: {X_multi.shape}") # Expected: (num_samples, look_back, 1)
print(f"Multi-step y shape: {y_multi.shape}") # Expected: (num_samples, forecast_horizon)

# 4. Chronological Data Splitting (same logic as before)
train_ratio = 0.7
val_ratio = 0.15
test_ratio = 0.15

total_samples_generated = X_multi.shape[0]
train_split = int(total_samples_generated * train_ratio)
val_split = int(total_samples_generated * (train_ratio + val_ratio))

X_train_multi, y_train_multi = X_multi[:train_split], y_multi[:train_split]
X_val_multi, y_val_multi = X_multi[train_split:val_split], y_multi[train_split:val_split]
X_test_multi, y_test_multi = X_multi[val_split:], y_multi[val_split:]

print(f"\nMulti-step Train shapes: X={X_train_multi.shape}, y={y_train_multi.shape}")
print(f"Multi-step Validation shapes: X={X_val_multi.shape}, y={y_val_multi.shape}")
print(f"Multi-step Test shapes: X={X_test_multi.shape}, y={y_test_multi.shape}")

# 5. Using tf.keras.utils.timeseries_dataset_from_array for multi-step (advanced usage)
# For multi-step *output*, tf.keras.utils.timeseries_dataset_from_array is designed for sequence-to-vector or sequence-to-sequence where each output is a single point or a single vector.
# To get a target of shape (batch_size, forecast_horizon), you might need to manually construct the targets or use a mapping function.
# A more direct way to achieve this with tf.data is to use `window()` method on a `tf.data.Dataset` object, but for simplicity and direct comparison with manual, we'll stick to the manual y_multi for the target.
# If you were to use `timeseries_dataset_from_array`, your model's final Dense layer would need `units=forecast_horizon`.

# Example of how a model would consume this:
# from tensorflow.keras.models import Sequential
# from tensorflow.keras.layers import LSTM, Dense
# model_multi_step = Sequential([
#     LSTM(units=100, activation='relu', input_shape=(look_back, 1)),
#     Dense(units=forecast_horizon) # Output 'forecast_horizon' values
# ])
# model_multi_step.compile(optimizer='adam', loss='mse')
# model_multi_step.summary()
# history_multi = model_multi_step.fit(X_train_multi, y_train_multi, epochs=10, batch_size=32, validation_data=(X_val_multi, y_val_multi))
```

#### Assessment idea
1.  **Question:** You have a univariate time series of daily temperature readings. You want to use an LSTM to predict the temperature for the next day based on the past 7 days of readings. Describe the exact shape of the input tensor `X` that you would feed into the LSTM layer, assuming a batch size of 32.
    *   **Correct Answer:** The required input shape for the LSTM layer would be `(32, 7, 1)`.
        *   `32` represents the `samples` (batch size).
        *   `7` represents the `timesteps` (the look-back window of 7 past days).
        *   `1` represents the `features` (since it's a univariate time series, there's only one feature: temperature).

2.  **Question:** Why is it considered a critical mistake to randomly shuffle your time series data before splitting it into training, validation, and test sets for an LSTM model, and what is the correct approach?
    *   **Correct Answer:** Randomly shuffling time series data before splitting is a critical mistake because it introduces **data leakage**. This means that future information (data points from the validation or test set) could inadvertently be included in the training set, allowing the model to "see" the future. This leads to an overly optimistic evaluation of the model's performance and poor generalization to truly unseen future data. The correct approach is **chronological splitting**, where the data is divided sequentially: the earliest portion for training, the next portion for validation, and the latest portion for testing, preserving the natural temporal order.

#### AI generation note
Create a 10-minute interactive code demo in a Jupyter Notebook. Start with a raw 1D time series. Visually demonstrate the `(samples, timesteps, features)` shape with animated arrays changing dimensions. Walk through the manual sliding window function step-by-step, highlighting how `look_back` and `forecast_horizon` create `X` and `y`. Show the effect of `MinMaxScaler` on the data. Then, demonstrate `tf.keras.utils.timeseries_dataset_from_array`, explaining its parameters and showing the output batch shapes. Emphasize the `shuffle=False` parameter with a warning. Include a mini-quiz asking about the correct input shape for a given scenario. Visual style should be split-screen: code on left, animated array transformations/plots on right.
---
### Chapter 5.5 — Building and Training LSTM Models for Univariate Forecasting

#### Learning objectives
*   Construct a complete LSTM-based deep learning model in TensorFlow/Keras for univariate time series forecasting.
*   Select appropriate loss functions (e.g., MSE, MAE) and optimizers (e.g., Adam) for time series regression tasks.
*   Implement a training loop, including specifying epochs, batch size, and validation data.
*   Apply techniques like Early Stopping to prevent overfitting and improve model generalization.
*   Understand the role of hyperparameters (e.g., number of LSTM units, learning rate) and their impact on model performance.

#### Detailed lesson content
Having mastered the data preparation for LSTMs and GRUs, it's time to bring these components together and build a functional deep learning model for univariate time series forecasting. This chapter focuses on the practical aspects of model construction, training, and initial optimization using TensorFlow/Keras. The goal is to build a model that can learn complex temporal patterns from your sequences and predict future values accurately.

Let's start with the model architecture. A typical LSTM-based model for univariate forecasting (predicting a single next value) often follows a **sequence-to-vector** pattern. This means an input sequence of `timesteps` is fed into the LSTM layer, and the LSTM processes this sequence to produce a single output vector (the hidden state of the last time step), which is then fed into a `Dense` layer to produce the final prediction.

A basic LSTM model structure in Keras would look like this:
1.  **Input Layer:** Implicitly defined by the `input_shape` argument in the first recurrent layer. This `input_shape` should be `(timesteps, features)`.
2.  **LSTM Layer(s):** One or more `tf.keras.layers.LSTM` layers.
    *   `units`: The dimensionality of the output space (and the internal hidden state/cell state). A common starting point is 50-100 units.
    *   `activation`: Typically `tanh` for the recurrent activation, `relu` for the standard activation if you want to introduce more non-linearity.
    *   `input_shape`: Only for the first LSTM layer, e.g., `(look_back, 1)`.
    *   `return_sequences`: Set to `True` if stacking multiple LSTM layers, otherwise `False` (default) for the last LSTM layer before a `Dense` output.
3.  **Dense Output Layer:** A `tf.keras.layers.Dense` layer with `units=1` for univariate single-step forecasting. The activation function here would typically be `linear` (or omitted, as Keras defaults to linear for `Dense` layers without an explicit activation) for regression tasks. If you are doing multi-step forecasting (predicting `N` future values simultaneously), `units` would be `N`.

Once the model architecture is defined, the next crucial step is **compilation**. This involves specifying the optimizer, loss function, and optionally, metrics.
*   **Optimizer:** The algorithm used to update the model's weights during training. `Adam` is a widely popular and effective choice for deep learning models due to its adaptive learning rate capabilities. Other options include `RMSprop`, `SGD`, etc.
*   **Loss Function:** A measure of how well the model's predictions match the actual target values. For regression tasks like time series forecasting, common choices are:
    *   **Mean Squared Error (MSE):** `loss='mse'` or `tf.keras.losses.MeanSquaredError()`. Penalizes larger errors more heavily.
    *   **Mean Absolute Error (MAE):** `loss='mae'` or `tf.keras.losses.MeanAbsoluteError()`. Less sensitive to outliers than MSE.
    The choice often depends on the specific problem and desired error characteristics.
*   **Metrics:** Additional metrics to monitor during training, such as `mae` or `rmse` (Root Mean Squared Error, which can be custom defined or calculated from MSE).

**Training the model** involves calling the `model.fit()` method. Key parameters for `fit()` include:
*   `X_train`, `y_train`: Your training data.
*   `epochs`: The number of times the model will iterate over the entire training dataset. Too few epochs can lead to underfitting, too many to overfitting.
*   `batch_size`: The number of samples processed before the model's weights are updated. Smaller batch sizes introduce more noise but can help escape local minima; larger batch sizes provide a more stable gradient estimate.
*   `validation_data`: A tuple `(X_val, y_val)` or a `tf.data.Dataset` for monitoring performance on unseen data during training. This is crucial for detecting overfitting.

**Overfitting** is a common problem where the model learns the training data too well, including its noise and specific patterns, and performs poorly on new, unseen data. To combat this, **Early Stopping** is a powerful regularization technique. It monitors a chosen metric (e.g., validation loss) on the validation set and stops training if that metric stops improving for a specified number of epochs (`patience`). This prevents the model from continuing to learn the training data's noise.

```python
from tensorflow.keras.callbacks import EarlyStopping

early_stopping = EarlyStopping(
    monitor='val_loss', # Metric to monitor
    patience=10,        # Number of epochs with no improvement after which training will be stopped
    restore_best_weights=True # Restore model weights from the epoch with the best value of the monitored metric
)
```
You would then pass this `early_stopping` callback to the `model.fit()` method.

**Hyperparameter tuning** is an iterative process. The number of LSTM units, the learning rate of the optimizer, the batch size, and the `patience` for early stopping are all hyperparameters that significantly impact model performance. There's no one-size-fits-all answer; experimentation and techniques like grid search or random search are often employed.

Consider a real-world scenario: forecasting the daily closing price of a specific stock. We've prepared our data with a `look_back` window of 30 days. We build an LSTM with 100 units, use Adam optimizer, and MSE loss. During training, we monitor `val_loss`. If the `val_loss` starts increasing while `train_loss` continues to decrease, it's a clear sign of overfitting. Early stopping would then gracefully halt training, saving the model that performed best on the validation set. This systematic approach ensures we build robust and generalizable forecasting models.

```python
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
from tensorflow.keras.callbacks import EarlyStopping
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error, mean_absolute_error
import matplotlib.pyplot as plt

# 1. Data Preparation (re-using from Chapter 5.4 for consistency)
total_points = 5000
time_steps = np.arange(total_points)
data = np.sin(time_steps / 100) + np.random.normal(0, 0.1, total_points) + (time_steps / 1000)
data = data.reshape(-1, 1)

scaler = MinMaxScaler(feature_range=(0, 1))
scaled_data = scaler.fit_transform(data)

look_back = 50
forecast_horizon = 1 # Predicting next single value

def create_sequences(data, look_back, forecast_horizon):
    X, y = [], []
    for i in range(len(data) - look_back - forecast_horizon + 1):
        X.append(data[i:(i + look_back), 0])
        y.append(data[i + look_back + forecast_horizon - 1, 0])
    return np.array(X), np.array(y)

X_seq, y_seq = create_sequences(scaled_data, look_back, forecast_horizon)
X_seq = X_seq.reshape(X_seq.shape[0], X_seq.shape[1], 1) # Reshape for RNN input

train_ratio = 0.7
val_ratio = 0.15
test_ratio = 0.15

total_samples_generated = X_seq.shape[0]
train_split = int(total_samples_generated * train_ratio)
val_split = int(total_samples_generated * (train_ratio + val_ratio))

X_train, y_train = X_seq[:train_split], y_seq[:train_split]
X_val, y_val = X_seq[train_split:val_split], y_seq[train_split:val_split]
X_test, y_test = X_seq[val_split:], y_seq[val_split:]

print(f"Train shapes: X={X_train.shape}, y={y_train.shape}")
print(f"Validation shapes: X={X_val.shape}, y={y_val.shape}")
print(f"Test shapes: X={X_test.shape}, y={y_test.shape}")

# 2. Build the LSTM Model
model = Sequential([
    LSTM(units=100, activation='relu', input_shape=(look_back, 1), return_sequences=False),
    Dense(units=1) # Output a single value
])

# 3. Compile the Model
model.compile(optimizer='adam', loss='mse', metrics=['mae'])
model.summary()

# 4. Define Early Stopping Callback
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=15, # Increased patience slightly for this example
    restore_best_weights=True,
    verbose=1
)

# 5. Train the Model
print("\nTraining LSTM Model...")
history = model.fit(
    X_train, y_train,
    epochs=100, # Set a high number of epochs, EarlyStopping will stop it
    batch_size=64,
    validation_data=(X_val, y_val),
    callbacks=[early_stopping],
    verbose=0 # Set to 1 or 2 for more detailed output per epoch
)

# 6. Evaluate the Model on Test Set
loss, mae = model.evaluate(X_test, y_test, verbose=0)
print(f"\nTest Loss (MSE): {loss:.4f}")
print(f"Test MAE: {mae:.4f}")

# 7. Make Predictions and Inverse Transform
test_predictions_scaled = model.predict(X_test)
test_predictions = scaler.inverse_transform(test_predictions_scaled)
y_test_inv = scaler.inverse_transform(y_test.reshape(-1, 1))

# Calculate metrics on original scale
rmse = np.sqrt(mean_squared_error(y_test_inv, test_predictions))
mae_orig = mean_absolute_error(y_test_inv, test_predictions)
print(f"Test RMSE (Original Scale): {rmse:.4f}")
print(f"Test MAE (Original Scale): {mae_orig:.4f}")

# 8. Plot Training History
plt.figure(figsize=(12, 6))
plt.plot(history.history['loss'], label='Train Loss')
plt.plot(history.history['val_loss'], label='Validation Loss')
plt.title('LSTM Model Training History')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.legend()
plt.grid(True)
plt.show()

# 9. Plot Actual vs. Predicted for a segment of the test set
plt.figure(figsize=(15, 7))
plt.plot(y_test_inv[0:200], label='Actual Values')
plt.plot(test_predictions[0:200], label='Predicted Values')
plt.title('LSTM Forecast: Actual vs. Predicted (Test Set Segment)')
plt.xlabel('Time Step in Test Set')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()

# Common mistake: Not using validation data. Without it, you can't detect overfitting effectively.
# Another mistake: Setting epochs too low or too high without Early Stopping.
# Not inverse transforming predictions before evaluating on original scale metrics.
```

#### Key concepts
*   **Sequence-to-Vector Model:** An RNN architecture where an entire input sequence is processed to produce a single output vector (e.g., predicting the next single value).
*   **`tf.keras.layers.LSTM`:** The Keras layer for Long Short-Term Memory networks, requiring `units` and `input_shape`.
*   **`tf.keras.layers.Dense`:** A standard fully connected neural network layer, used here as the output layer for regression.
*   **Optimizer:** An algorithm (e.g., Adam) that adjusts model weights to minimize the loss function during training.
*   **Loss Function:** A metric (e.g., MSE, MAE) that quantifies the difference between predicted and actual values, guiding the optimization process.
*   **Epoch:** One complete pass through the entire training dataset.
*   **Batch Size:** The number of samples processed before the model's parameters are updated.
*   **Overfitting:** A phenomenon where a model learns the training data too well, including its noise, leading to poor performance on unseen data.
*   **Early Stopping:** A regularization technique that stops training when performance on a validation set stops improving, preventing overfitting and saving the best model weights.
*   **Hyperparameters:** Parameters whose values are set before the training process begins (e.g., number of units, learning rate, batch size, patience).

#### Hands-on activity
**Activity: Experiment with GRU and Hyperparameters**

Your task is to adapt the provided code to train a GRU model instead of an LSTM, and then experiment with some hyperparameters.

1.  **Switch to GRU:** Replace the `LSTM` layer with a `GRU` layer, keeping the `units` and `input_shape` the same initially.
2.  **Adjust `units`:** Experiment with different `units` values for the GRU layer (e.g., 50, 150).
3.  **Change Optimizer Learning Rate:** Modify the `Adam` optimizer's learning rate (e.g., `tf.keras.optimizers.Adam(learning_rate=0.005)` or `0.0001)`).
4.  **Observe Results:** Train the GRU model with these changes and compare its loss curves and test set performance (RMSE, MAE) against the LSTM model from the chapter.

```python
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import GRU, Dense # Changed from LSTM to GRU
from tensorflow.keras.callbacks import EarlyStopping
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error, mean_absolute_error
import matplotlib.pyplot as plt

# 1. Data Preparation (same as before)
total_points = 5000
time_steps = np.arange(total_points)
data = np.sin(time_steps / 100) + np.random.normal(0, 0.1, total_points) + (time_steps / 1000)
data = data.reshape(-1, 1)

scaler = MinMaxScaler(feature_range=(0, 1))
scaled_data = scaler.fit_transform(data)

look_back = 50
forecast_horizon = 1

def create_sequences(data, look_back, forecast_horizon):
    X, y = [], []
    for i in range(len(data) - look_back - forecast_horizon + 1):
        X.append(data[i:(i + look_back), 0])
        y.append(data[i + look_back + forecast_horizon - 1, 0])
    return np.array(X), np.array(y)

X_seq, y_seq = create_sequences(scaled_data, look_back, forecast_horizon)
X_seq = X_seq.reshape(X_seq.shape[0], X_seq.shape[1], 1)

train_ratio = 0.7
val_ratio = 0.15
test_ratio = 0.15

total_samples_generated = X_seq.shape[0]
train_split = int(total_samples_generated * train_ratio)
val_split = int(total_samples_generated * (train_ratio + val_ratio))

X_train, y_train = X_seq[:train_split], y_seq[:train_split]
X_val, y_val = X_seq[train_split:val_split], y_seq[train_split:val_split]
X_test, y_test = X_seq[val_split:], y_seq[val_split:]

# 2. Build the GRU Model (Modified)
model_gru = Sequential([
    GRU(units=80, activation='relu', input_shape=(look_back, 1), return_sequences=False), # Experiment with units (e.g., 50, 150)
    Dense(units=1)
])

# 3. Compile the Model (Modified learning rate)
optimizer_adam = tf.keras.optimizers.Adam(learning_rate=0.001) # Experiment with learning_rate (e.g., 0.005, 0.0001)
model_gru.compile(optimizer=optimizer_adam, loss='mse', metrics=['mae'])
model_gru.summary()

# 4. Define Early Stopping Callback
early_stopping = EarlyStopping(
    monitor='val_loss',
    patience=15,
    restore_best_weights=True,
    verbose=1
)

# 5. Train the Model
print("\nTraining GRU Model with custom hyperparameters...")
history_gru = model_gru.fit(
    X_train, y_train,
    epochs=100,
    batch_size=64,
    validation_data=(X_val, y_val),
    callbacks=[early_stopping],
    verbose=0
)

# 6. Evaluate the Model on Test Set
loss_gru, mae_gru = model_gru.evaluate(X_test, y_test, verbose=0)
print(f"\nGRU Test Loss (MSE): {loss_gru:.4f}")
print(f"GRU Test MAE: {mae_gru:.4f}")

# 7. Make Predictions and Inverse Transform
test_predictions_scaled_gru = model_gru.predict(X_test)
test_predictions_gru = scaler.inverse_transform(test_predictions_scaled_gru)
y_test_inv = scaler.inverse_transform(y_test.reshape(-1, 1))

rmse_gru = np.sqrt(mean_squared_error(y_test_inv, test_predictions_gru))
mae_orig_gru = mean_absolute_error(y_test_inv, test_predictions_gru)
print(f"GRU Test RMSE (Original Scale): {rmse_gru:.4f}")
print(f"GRU Test MAE (Original Scale): {mae_orig_gru:.4f}")

# 8. Plot Training History
plt.figure(figsize=(12, 6))
plt.plot(history_gru.history['loss'], label='GRU Train Loss')
plt.plot(history_gru.history['val_loss'], label='GRU Validation Loss')
plt.title('GRU Model Training History (Custom Hyperparameters)')
plt.xlabel('Epoch')
plt.ylabel('Loss')
plt.legend()
plt.grid(True)
plt.show()
```

#### Assessment idea
1.  **Question:** You are training an LSTM model for univariate time series forecasting. After 50 epochs, you observe that your training loss continues to decrease, but your validation loss has started to increase. What phenomenon is likely occurring, and what specific Keras callback would you implement to address this?
    *   **Correct Answer:** This scenario indicates **overfitting**. The model is learning the training data too well, including its noise, and is losing its ability to generalize to unseen data (the validation set). To address this, you would implement the `tf.keras.callbacks.EarlyStopping` callback. You would configure it to `monitor='val_loss'` and set a `patience` value (e.g., `patience=10`), which would stop training if the validation loss does not improve for 10 consecutive epochs and restore the model's weights from the epoch with the best validation loss.

2.  **Question:** For a univariate time series forecasting task where you need to predict the next single value, what would be the `units` argument for the final `tf.keras.layers.Dense` layer in your Keras model, and why?
    *   **Correct Answer:** The `units` argument for the final `tf.keras.layers.Dense` layer would be `1`. This is because for univariate single-step forecasting, the model is designed to output a single numerical value representing the prediction for the next time step. Each unit in a `Dense` layer corresponds to an output neuron, so one unit is sufficient for a single-value prediction.

#### AI generation note
Create a 15-minute live coding video. Start with the pre-processed time series data. Walk through building a `Sequential` Keras model with an LSTM layer and a `Dense` output. Explain the `units`, `activation`, and `input_shape` parameters in detail. Then, compile the model, explaining `optimizer='adam'`, `loss='mse'`, and `metrics=['mae']`. Introduce `EarlyStopping` with its `monitor` and `patience` parameters. Run `model.fit()`, showing the verbose output and how `EarlyStopping` intervenes. Visualize the training history (loss curves) and then plot actual vs. predicted values on a segment of the test set. Emphasize common mistakes like not using validation data or omitting early stopping. Visual style: Jupyter notebook with live code execution and real-time plot updates. Include a reflection prompt on hyperparameter choices.
---
### Chapter 5.6 — Evaluating and Interpreting LSTM/GRU Forecasts

#### Learning objectives
*   Select and calculate appropriate performance metrics (e.g., RMSE, MAE, MAPE) for evaluating time series forecasting models.
*   Visualize model predictions against actual values to qualitatively assess forecasting accuracy and identify patterns of error.
*   Perform residual analysis to understand the systematic errors and biases of the forecasting model.
*   Identify common pitfalls in time series forecasting evaluation, such as data leakage and inappropriate metric selection.
*   Discuss strategies for interpreting the behavior of LSTM/GRU models in the context of time series data.

#### Detailed lesson content
Building and training an LSTM or GRU model is only half the battle; the other equally crucial half is rigorously evaluating its performance and interpreting its forecasts. A model might appear to train well, but without proper evaluation on unseen data, its real-world utility remains unknown. This chapter focuses on the quantitative and qualitative methods to assess your deep learning time series forecasts.

**Quantitative Evaluation Metrics:**
For regression tasks like time series forecasting, several metrics are commonly used. It's important to calculate these metrics on the *original scale* of your data after inverse transforming predictions, as metrics on scaled data can be misleading.

1.  **Mean Squared Error (MSE):** `MSE = (1/N) * Σ(y_actual - y_predicted)^2`. This is often used as a loss function during training. It penalizes larger errors more heavily due to the squaring term.
2.  **Root Mean Squared Error (RMSE):** `RMSE = sqrt(MSE)`. RMSE is in the same units as the target variable, making it more interpretable than MSE. It represents the standard deviation of the prediction errors. A lower RMSE indicates a better fit.
3.  **Mean Absolute Error (MAE):** `MAE = (1/N) * Σ|y_actual - y_predicted|`. MAE measures the average magnitude of the errors without considering their direction. It is less sensitive to outliers than RMSE, as it doesn't square the errors. MAE is also in the same units as the target variable.
4.  **Mean Absolute Percentage Error (MAPE):** `MAPE = (1/N) * Σ(|y_actual - y_predicted| / |y_actual|) * 100%`. MAPE is a percentage error, making it useful for comparing model performance across different datasets or time series with different scales. However, it can be problematic when `y_actual` values are zero or very close to zero, leading to undefined or extremely large values.

The choice of metric depends on your specific problem. If large errors are particularly costly, RMSE might be preferred. If you want a robust measure less affected by extreme outliers, MAE could be better. If you need a relative error measure, MAPE can be useful with its caveats.

**Qualitative Assessment: Visualizing Forecasts:**
Numbers alone don't tell the whole story. Visualizing your model's predictions against actual values is indispensable for understanding its behavior.
*   **Time Series Plot:** Plot the actual time series, the training predictions, and the test predictions on the same graph. This helps you see if the model captures trends, seasonality, and sudden changes. Pay close attention to the test set predictions to ensure they follow the actual data without significant lag or bias.
*   **Zoomed-in Plots:** Often, a full time series plot can be too dense. Zooming into specific segments of the test set can reveal subtle errors or strengths.
*   **Prediction Intervals (Advanced):** While not directly covered here, generating prediction intervals (e.g., 95% confidence intervals) around your point forecasts can provide a measure of uncertainty, which is highly valuable in real-world applications.

**Residual Analysis:**
Residuals are the differences between the actual values and the predicted values (`residuals = y_actual - y_predicted`). Analyzing residuals can provide insights into systematic errors in your model:
*   **Plot of Residuals over Time:** If residuals show a pattern (e.g., consistently positive, consistently negative, or a cyclical pattern), it suggests that your model is systematically biased or failing to capture certain temporal dependencies. Ideally, residuals should be randomly distributed around zero.
*   **Histogram of Residuals:** A histogram can show if residuals are normally distributed. Deviations from normality might indicate uncaptured patterns or heteroscedasticity.
*   **Autocorrelation Function (ACF) of Residuals:** If the ACF of residuals shows significant spikes at certain lags, it means there is still autocorrelation in the errors, implying that the model has not captured all the temporal information in the data. This suggests the model could be improved.

**Common Pitfalls in Evaluation:**
*   **Data Leakage:** As discussed, this is the most critical mistake. If your test set contains information seen during training, your metrics will be artificially optimistic. Always ensure strict chronological splitting.
*   **Incorrect Scaling/Inverse Scaling:** Forgetting to inverse transform predictions or using the wrong scaler can lead to meaningless metrics on the original scale.
*   **Short Test Set:** A very short test set might not be representative of future data variability, leading to unreliable evaluation.
*   **Ignoring Baseline Models:** Always compare your deep learning model against simpler baseline models (e.g., ARIMA, naive forecast, simple average) to ensure it's actually providing value. A complex model that doesn't outperform a simple baseline is not useful.

**Interpreting LSTM/GRU Behavior:**
Interpreting deep learning models is challenging due to their black-box nature. However, for LSTMs/GRUs, some insights can be gained:
*   **Attention Mechanisms (Advanced):** While not standard in basic LSTMs/GRUs, attention layers (often used with Transformers) can highlight which parts of the input sequence were most influential in making a prediction.
*   **Feature Importance (Indirect):** For multivariate time series, analyzing the gradients with respect to input features can give an idea of which features the model relies on most. For univariate, this is less applicable directly to individual features but more to time steps.
*   **Error Analysis:** The residual plots and analysis mentioned above are the most practical way to interpret *why* your model is making certain errors, guiding further model improvements. For example, if your model consistently underpredicts during peak periods, it suggests it hasn't fully learned the dynamics of those specific events.

By combining quantitative metrics with thoughtful visual and residual analysis, you can gain a comprehensive understanding of your LSTM/GRU model's strengths and weaknesses, leading to more robust and reliable time series forecasts.

```python
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense
from tensorflow.keras.callbacks import EarlyStopping
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error, mean_absolute_error
import matplotlib.pyplot as plt
from statsmodels.graphics.tsaplots import plot_acf # For residual analysis

# 1. Data Preparation (re-using from Chapter 5.5 for consistency)
total_points = 5000
time_steps = np.arange(total_points)
data = np.sin(time_steps / 100) + np.random.normal(0, 0.1, total_points) + (time_steps / 1000)
data = data.reshape(-1, 1)

scaler = MinMaxScaler(feature_range=(0, 1))
scaled_data = scaler.fit_transform(data)

look_back = 50
forecast_horizon = 1

def create_sequences(data, look_back, forecast_horizon):
    X, y = [], []
    for i in range(len(data) - look_back - forecast_horizon + 1):
        X.append(data[i:(i + look_back), 0])
        y.append(data[i + look_back + forecast_horizon - 1, 0])
    return np.array(X), np.array(y)

X_seq, y_seq = create_sequences(scaled_data, look_back, forecast_horizon)
X_seq = X_seq.reshape(X_seq.shape[0], X_seq.shape[1], 1)

train_ratio = 0.7
val_ratio = 0.15
test_ratio = 0.15

total_samples_generated = X_seq.shape[0]
train_split = int(total_samples_generated * train_ratio)
val_split = int(total_samples_generated * (train_ratio + val_ratio))

X_train, y_train = X_seq[:train_split], y_seq[:train_split]
X_val, y_val = X_seq[train_split:val_split], y_seq[train_split:val_split]
X_test, y_test = X_seq[val_split:], y_seq[val_split:]

# 2. Build and Train LSTM Model (same as Chapter 5.5)
model = Sequential([
    LSTM(units=100, activation='relu', input_shape=(look_back, 1), return_sequences=False),
    Dense(units=1)
])
model.compile(optimizer='adam', loss='mse', metrics=['mae'])
early_stopping = EarlyStopping(
    monitor='val_loss', patience=15, restore_best_weights=True, verbose=0
)
print("Training LSTM Model for Evaluation...")
model.fit(
    X_train, y_train,
    epochs=100, batch_size=64,
    validation_data=(X_val, y_val),
    callbacks=[early_stopping],
    verbose=0
)

# 3. Make Predictions
test_predictions_scaled = model.predict(X_test)

# 4. Inverse Transform Predictions and Actuals
test_predictions = scaler.inverse_transform(test_predictions_scaled)
y_test_inv = scaler.inverse_transform(y_test.reshape(-1, 1))

# 5. Quantitative Evaluation Metrics
rmse = np.sqrt(mean_squared_error(y_test_inv, test_predictions))
mae = mean_absolute_error(y_test_inv, test_predictions)

# Calculate MAPE (handle division by zero if actuals can be 0)
def calculate_mape(y_true, y_pred):
    y_true, y_pred = np.array(y_true), np.array(y_pred)
    # Avoid division by zero: replace 0 actuals with a small epsilon
    # Or filter out points where y_true is 0, depending on context
    non_zero_indices = y_true != 0
    return np.mean(np.abs((y_true[non_zero_indices] - y_pred[non_zero_indices]) / y_true[non_zero_indices])) * 100

mape = calculate_mape(y_test_inv, test_predictions)

print(f"\n--- Model Evaluation on Test Set (Original Scale) ---")
print(f"RMSE: {rmse:.4f}")
print(f"MAE: {mae:.4f}")
print(f"MAPE: {mape:.2f}%")

# 6. Qualitative Assessment: Visualizing Forecasts
plt.figure(figsize=(18, 8))
plt.plot(y_test_inv, label='Actual Values')
plt.plot(test_predictions, label='Predicted Values')
plt.title('LSTM Forecast: Actual vs. Predicted on Test Set')
plt.xlabel('Time Step in Test Set')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()

# Zoomed-in plot
plt.figure(figsize=(18, 8))
plt.plot(y_test_inv[100:300], label='Actual Values')
plt.plot(test_predictions[100:300], label='Predicted Values')
plt.title('LSTM Forecast: Actual vs. Predicted (Zoomed-in Segment)')
plt.xlabel('Time Step in Test Set')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()

# 7. Residual Analysis
residuals = y_test_inv - test_predictions

plt.figure(figsize=(18, 8))
plt.plot(residuals, label='Residuals')
plt.axhline(0, color='red', linestyle='--', linewidth=0.8)
plt.title('Residuals Over Time')
plt.xlabel('Time Step in Test Set')
plt.ylabel('Error (Actual - Predicted)')
plt.legend()
plt.grid(True)
plt.show()

plt.figure(figsize=(10, 6))
plt.hist(residuals, bins=50)
plt.title('Histogram of Residuals')
plt.xlabel('Error Value')
plt.ylabel('Frequency')
plt.grid(True)
plt.show()

# Autocorrelation of Residuals
# Ensure residuals is 1D for plot_acf
residuals_1d = residuals.flatten()
plt.figure(figsize=(12, 6))
plot_acf(residuals_1d, lags=50, title='Autocorrelation Function of Residuals (ACF)')
plt.xlabel('Lag')
plt.ylabel('Autocorrelation')
plt.show()

# Common mistake: Evaluating metrics on scaled data. Always inverse transform for final metrics.
# Another mistake: Not performing residual analysis. It's crucial for understanding model shortcomings.
# Ignoring the context of the data when interpreting MAPE (e.g., near-zero actuals).
```

#### Key concepts
*   **Root Mean Squared Error (RMSE):** A common metric for regression, representing the square root of the average of the squared differences between predicted and actual values. It's in the same units as the target.
*   **Mean Absolute Error (MAE):** A metric that measures the average magnitude of the errors, less sensitive to outliers than RMSE. Also in the same units as the target.
*   **Mean Absolute Percentage Error (MAPE):** A percentage error metric useful for comparing models across different scales, but sensitive to near-zero actual values.
*   **Residuals:** The difference between the actual observed values and the values predicted by the model (`y_actual - y_predicted`).
*   **Residual Analysis:** The process of examining the residuals to identify patterns, biases, or uncaptured information in the model's errors.
*   **Autocorrelation Function (ACF):** A plot showing the correlation of a time series with its own lagged values. Used on residuals to detect uncaptured temporal patterns.
*   **Data Leakage:** The accidental inclusion of information from the validation or test set into the training process, leading to overoptimistic performance estimates.
*   **Inverse Transform:** Converting scaled data or predictions back to their original scale for meaningful interpretation and metric calculation.

#### Hands-on activity
**Activity: Analyze Residuals for a GRU Model**

Your task is to apply the evaluation and residual analysis techniques learned in this chapter to the GRU model you built in the previous activity.

1.  **Retrieve GRU Model:** Use the trained GRU model from the previous activity's solution.
2.  **Calculate Metrics:** Calculate RMSE, MAE, and MAPE for the GRU model's predictions on the test set (after inverse transforming).
3.  **Visualize Forecasts:** Plot the GRU's actual vs. predicted values on the test set, including a zoomed-in segment.
4.  **Perform Residual Analysis:**
    *   Plot the residuals over time.
    *   Plot a histogram of the residuals.
    *   Plot the Autocorrelation Function (ACF) of the residuals.
5.  **Compare and Interpret:** Compare the GRU's quantitative metrics and residual analysis plots with those of the LSTM model. Does one show more systematic errors? Are the residuals more randomly distributed for one model? What does this tell you about their respective learning capabilities on this dataset?

```python
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import GRU, Dense
from tensorflow.keras.callbacks import EarlyStopping
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import mean_squared_error, mean_absolute_error
import matplotlib.pyplot as plt
from statsmodels.graphics.tsaplots import plot_acf

# 1. Data Preparation (same as before)
total_points = 5000
time_steps = np.arange(total_points)
data = np.sin(time_steps / 100) + np.random.normal(0, 0.1, total_points) + (time_steps / 1000)
data = data.reshape(-1, 1)

scaler = MinMaxScaler(feature_range=(0, 1))
scaled_data = scaler.fit_transform(data)

look_back = 50
forecast_horizon = 1

def create_sequences(data, look_back, forecast_horizon):
    X, y = [], []
    for i in range(len(data) - look_back - forecast_horizon + 1):
        X.append(data[i:(i + look_back), 0])
        y.append(data[i + look_back + forecast_horizon - 1, 0])
    return np.array(X), np.array(y)

X_seq, y_seq = create_sequences(scaled_data, look_back, forecast_horizon)
X_seq = X_seq.reshape(X_seq.shape[0], X_seq.shape[1], 1)

train_ratio = 0.7
val_ratio = 0.15
test_ratio = 0.15

total_samples_generated = X_seq.shape[0]
train_split = int(total_samples_generated * train_ratio)
val_split = int(total_samples_generated * (train_ratio + val_ratio))

X_train, y_train = X_seq[:train_split], y_seq[:train_split]
X_val, y_val = X_seq[train_split:val_split], y_seq[train_split:val_split]
X_test, y_test = X_seq[val_split:], y_seq[val_split:]

# 2. Build and Train GRU Model (from previous activity, using example hyperparameters)
model_gru = Sequential([
    GRU(units=80, activation='relu', input_shape=(look_back, 1), return_sequences=False),
    Dense(units=1)
])
optimizer_adam = tf.keras.optimizers.Adam(learning_rate=0.001)
model_gru.compile(optimizer=optimizer_adam, loss='mse', metrics=['mae'])
early_stopping = EarlyStopping(
    monitor='val_loss', patience=15, restore_best_weights=True, verbose=0
)
print("Training GRU Model for Evaluation...")
model_gru.fit(
    X_train, y_train,
    epochs=100, batch_size=64,
    validation_data=(X_val, y_val),
    callbacks=[early_stopping],
    verbose=0
)

# 3. Make Predictions
test_predictions_scaled_gru = model_gru.predict(X_test)

# 4. Inverse Transform Predictions and Actuals
test_predictions_gru = scaler.inverse_transform(test_predictions_scaled_gru)
y_test_inv = scaler.inverse_transform(y_test.reshape(-1, 1))

# 5. Quantitative Evaluation Metrics
rmse_gru = np.sqrt(mean_squared_error(y_test_inv, test_predictions_gru))
mae_gru = mean_absolute_error(y_test_inv, test_predictions_gru)

def calculate_mape(y_true, y_pred):
    y_true, y_pred = np.array(y_true), np.array(y_pred)
    non_zero_indices = y_true != 0
    return np.mean(np.abs((y_true[non_zero_indices] - y_pred[non_zero_indices]) / y_true[non_zero_indices])) * 100

mape_gru = calculate_mape(y_test_inv, test_predictions_gru)

print(f"\n--- GRU Model Evaluation on Test Set (Original Scale) ---")
print(f"RMSE: {rmse_gru:.4f}")
print(f"MAE: {mae_gru:.4f}")
print(f"MAPE: {mape_gru:.2f}%")

# 6. Qualitative Assessment: Visualizing Forecasts
plt.figure(figsize=(18, 8))
plt.plot(y_test_inv, label='Actual Values')
plt.plot(test_predictions_gru, label='GRU Predicted Values')
plt.title('GRU Forecast: Actual vs. Predicted on Test Set')
plt.xlabel('Time Step in Test Set')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()

# Zoomed-in plot
plt.figure(figsize=(18, 8))
plt.plot(y_test_inv[100:300], label='Actual Values')
plt.plot(test_predictions_gru[100:300], label='GRU Predicted Values')
plt.title('GRU Forecast: Actual vs. Predicted (Zoomed-in Segment)')
plt.xlabel('Time Step in Test Set')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()

# 7. Residual Analysis
residuals_gru = y_test_inv - test_predictions_gru

plt.figure(figsize=(18, 8))
plt.plot(residuals_gru, label='GRU Residuals')
plt.axhline(0, color='red', linestyle='--', linewidth=0.8)
plt.title('GRU Residuals Over Time')
plt.xlabel('Time Step in Test Set')
plt.ylabel('Error (Actual - Predicted)')
plt.legend()
plt.grid(True)
plt.show()

plt.figure(figsize=(10, 6))
plt.hist(residuals_gru, bins=50)
plt.title('Histogram of GRU Residuals')
plt.xlabel('Error Value')
plt.ylabel('Frequency')
plt.grid(True)
plt.show()

residuals_gru_1d = residuals_gru.flatten()
plt.figure(figsize=(12, 6))
plot_acf(residuals_gru_1d, lags=50, title='Autocorrelation Function of GRU Residuals (ACF)')
plt.xlabel('Lag')
plt.ylabel('Autocorrelation')
plt.show()
```

#### Assessment idea
1.  **Question:** You have evaluated your LSTM model and found a high RMSE but a relatively low MAE on your test set. What does this suggest about the nature of your model's prediction errors, and why might you choose to prioritize MAE over RMSE in such a scenario?
    *   **Correct Answer:** A high RMSE coupled with a relatively low MAE suggests that your model is making a few large errors or is particularly sensitive to outliers. RMSE, by squaring the errors, amplifies the impact of larger discrepancies. In contrast, MAE treats all errors linearly. You might prioritize MAE in this scenario if you want a robust measure of average error that is less influenced by these occasional large mistakes, especially if those outliers are considered less critical or are known to be noisy data points.

2.  **Question:** After performing residual analysis on your GRU model's forecasts, you observe that the Autocorrelation Function (ACF) plot of the residuals shows significant spikes at lags 7, 14, and 21. What does this pattern indicate about your model, and what might be a potential next step to improve it?
    *   **Correct Answer:** Significant spikes in the ACF of residuals at lags 7, 14, and 21 indicate that there is still uncaptured **seasonality or periodicity** in your data, specifically a weekly pattern (7 days). The model has failed to fully learn and account for this recurring pattern in its predictions, leading to systematic errors. A potential next step to improve the model would be to explicitly incorporate this seasonal information, perhaps by:
        *   Increasing the `look_back` window to encompass multiple seasonal cycles.
        *   Adding seasonal features (e.g., day of the week, week of the year) as additional input `features` to your RNN model (transitioning to multivariate input).
        *   Considering more complex architectures designed for multi-seasonal patterns.

#### AI generation note
Create a 12-minute video tutorial with a mix of live coding and data visualization. Start by explaining RMSE, MAE, and MAPE, showing their formulas and discussing when to use each. Perform inverse transformation on predictions and actuals, then calculate and print these metrics live. Transition to qualitative analysis by plotting actual vs. predicted values for the full test set and a zoomed-in segment. Then, conduct a thorough residual analysis: plot residuals over time, show a histogram of residuals, and generate an ACF plot of residuals, explaining what patterns to look for (e.g., non-randomness, spikes). Conclude with a discussion on interpreting these findings and common pitfalls. Visual style: Jupyter notebook, clear plot annotations, side-by-side code and output/plots. Include a reflection prompt on which metric is most suitable for a given business case.
---

## Module 6: Encoder-Decoder & Attention Models for Time Series

This module delves into advanced sequence modeling techniques, moving beyond simple recurrent neural networks to architectures capable of handling complex input-output sequence relationships. You'll learn how to build and apply encoder-decoder models for multi-step time series forecasting, understand the limitations of fixed-context vectors, and then explore the revolutionary concept of attention mechanisms. We'll cover both additive and multiplicative attention, culminating in an introduction to self-attention and the Transformer architecture, demonstrating their power in capturing long-range dependencies and improving forecasting accuracy.

---

### Chapter 6.1 — Introduction to Sequence-to-Sequence Models for Time Series

#### Learning objectives
*   Explain the fundamental concept of sequence-to-sequence (Seq2Seq) models and their relevance to multi-step time series forecasting.
*   Identify the key components of a basic encoder-decoder architecture.
*   Understand the advantages of Seq2Seq models over traditional recurrent networks for generating sequences.
*   Recognize the limitations of the fixed-size context vector in early Seq2Seq models.

#### Detailed lesson content
Welcome to a pivotal module in our journey through deep learning for time series forecasting! Up until now, we've explored how MLPs, CNNs, and LSTMs can predict a single future value or a short sequence. However, many real-world applications demand forecasting multiple steps into the future, often called multi-step or multi-horizon forecasting. This is where sequence-to-sequence (Seq2Seq) models truly shine. A Seq2Seq model is a powerful neural network architecture designed to transform an input sequence into an output sequence, where the lengths of the input and output sequences can be different. Think of it like a language translator: it takes a sentence in one language (an input sequence) and produces a sentence in another language (an output sequence). In time series, our "language" is numerical data, and we're translating a sequence of past observations into a sequence of future predictions.

The core of a Seq2Seq model consists of two main components: an **encoder** and a **decoder**. The encoder's job is to read the entire input sequence, processing each element sequentially, and then compress all the information it has learned into a fixed-size representation, often called a **context vector** or **thought vector**. This context vector is essentially a numerical summary or "understanding" of the entire input sequence. For time series forecasting, the input sequence would be a window of past observations, say `[x_t-N, ..., x_t-1]`. The encoder, typically a Recurrent Neural Network (RNN) like an LSTM or GRU, processes these observations one by one, updating its internal state, and finally, its last hidden state becomes the context vector. This vector is then expected to encapsulate all the relevant patterns, trends, and seasonalities from the historical data.

Once the encoder has produced this context vector, it's passed to the **decoder**. The decoder's responsibility is to generate the output sequence, one element at a time, using the context vector as its initial state or as an input at each step. Like the encoder, the decoder is also typically an RNN (LSTM or GRU). For time series forecasting, the decoder will generate the future sequence `[y_t+1, ..., y_t+M]`. At each decoding step, the decoder takes the context vector and potentially the previously generated output (or a "start-of-sequence" token for the very first step) to predict the next value in the output sequence. This predicted value can then be fed back as an input to the decoder for the next prediction step, creating a recursive generation process. This recursive nature is what allows the model to produce sequences of arbitrary length, limited only by the design of the decoder.

The elegance of the encoder-decoder architecture lies in its ability to handle variable-length input and output sequences, making it incredibly versatile for tasks like machine translation, speech recognition, and, crucially for us, multi-step time series forecasting. Instead of predicting a single point, we can now predict a whole horizon of future values. However, early Seq2Seq models, especially those relying solely on a fixed-size context vector, faced a significant limitation. This single vector, regardless of how long and complex the input sequence was, had to compress *all* the information. For very long input sequences, this fixed-size bottleneck often led to information loss, making it difficult for the decoder to accurately retrieve relevant details from the distant past. Imagine trying to summarize an entire novel into a single sentence; you'd inevitably lose a lot of nuance and detail. This limitation became particularly apparent when dealing with long-range dependencies, where the forecast for a distant future point might depend on a specific event far back in the input history. Overcoming this bottleneck is precisely where attention mechanisms come into play, which we will explore in subsequent chapters.

#### Key concepts
*   **Sequence-to-Sequence (Seq2Seq) Model:** An architecture designed to transform an input sequence into an output sequence, often of different lengths.
*   **Encoder:** The part of a Seq2Seq model that processes the input sequence and compresses its information into a fixed-size context vector.
*   **Decoder:** The part of a Seq2Seq model that takes the context vector and generates the output sequence one element at a time.
*   **Context Vector (Thought Vector):** A fixed-size numerical representation that encapsulates the learned information from the entire input sequence, serving as the bridge between the encoder and decoder.
*   **Multi-step Forecasting:** Predicting multiple future values in a time series, rather than just the next single value.
*   **Fixed-size Bottleneck:** The limitation of early Seq2Seq models where a single, fixed-size context vector must store all information from potentially very long input sequences, leading to potential information loss.

#### Hands-on activity
**Conceptualizing an Encoder-Decoder for Energy Demand Forecasting**

Imagine you're tasked with forecasting hourly energy demand for the next 24 hours, given the past 72 hours of demand data, temperature, and day-of-week indicators.

**Task:** Write down the conceptual input and output sequences for this problem. Then, outline the high-level steps an encoder-decoder LSTM would take to process this data and generate the forecast. You don't need to write code, just describe the flow.

**Template for your outline:**

```
# Problem: Hourly Energy Demand Forecasting (Next 24 hours)
# Input: Past 72 hours of demand, temperature, day-of-week
# Output: Next 24 hours of demand

# 1. Input Sequence Definition:
#    - What are the features for each time step in the input sequence?
#    - What is the length of the input sequence?

# 2. Output Sequence Definition:
#    - What is the target for each time step in the output sequence?
#    - What is the length of the output sequence?

# 3. Encoder Role:
#    - What type of layer would the encoder typically be?
#    - How does it process the input sequence?
#    - What does it produce at the end?

# 4. Decoder Role:
#    - What type of layer would the decoder typically be?
#    - How does it use the encoder's output?
#    - How does it generate the output sequence step-by-step?
```

#### Assessment idea
1.  **Question:** Which of the following best describes the primary purpose of the context vector in a basic encoder-decoder model for time series forecasting?
    a) It determines the learning rate for the entire model.
    b) It acts as a fixed-size summary of the input sequence, passed from the encoder to the decoder.
    c) It specifies the number of future time steps to be predicted.
    d) It is used to normalize the input data before feeding it to the encoder.

    **Correct Answer:** b) It acts as a fixed-size summary of the input sequence, passed from the encoder to the decoder.
    **Explanation:** The context vector is the crucial link between the encoder and decoder. The encoder compresses all relevant information from the input sequence into this vector, which then serves as the initial state or primary input for the decoder to generate the output sequence.

2.  **Question:** Consider a scenario where you are using a basic encoder-decoder model to forecast stock prices 30 days into the future based on 90 days of historical data. What is a significant limitation you might encounter with this architecture, especially regarding the context vector?

    **Correct Answer:** The significant limitation is the "fixed-size bottleneck" of the context vector. For a long input sequence (90 days of data), the encoder must compress all the relevant information (trends, seasonality, sudden drops/spikes) into a single fixed-size vector. This compression can lead to information loss, making it challenging for the decoder to accurately capture long-range dependencies or subtle patterns from the distant past (e.g., a specific event 80 days ago) when forecasting 30 days ahead. As the input sequence length increases, this bottleneck becomes more pronounced, potentially degrading forecasting performance.

#### AI generation note
Create a 7-minute animated explainer video. Start with a visual analogy of a translator taking a paragraph and summarizing it into a key idea. Then, visually introduce the encoder as a network processing an input time series (e.g., past 5 days of stock prices), showing data points flowing in and a "thought bubble" (context vector) forming. Transition to the decoder taking this thought bubble and generating a future time series (e.g., next 3 days of stock prices), showing outputs appearing one by one. Highlight the fixed-size bottleneck with an animation of a large amount of information trying to squeeze into a small container. Include captions and alt text for all visual elements.

---

### Chapter 6.2 — Building an Encoder-Decoder LSTM for Time Series

#### Learning objectives
*   Design and implement an LSTM-based encoder for processing time series input sequences.
*   Design and implement an LSTM-based decoder that generates output sequences using the encoder's context.
*   Understand the process of state transfer from the encoder to the decoder.
*   Implement a basic encoder-decoder model using a deep learning framework like Keras or PyTorch for a univariate time series forecasting task.

#### Detailed lesson content
Having grasped the conceptual framework of encoder-decoder models, it's time to bring these ideas to life by building one using Long Short-Term Memory (LSTM) networks. LSTMs are particularly well-suited for sequence modeling due to their ability to capture long-term dependencies, making them a natural choice for both the encoder and decoder components. We'll focus on a univariate time series forecasting task, where we use a sequence of past observations to predict a sequence of future observations.

Let's begin with the **encoder**. The encoder's primary role is to read the input sequence, `X = [x_1, x_2, ..., x_N]`, and distill its essence into a fixed-size context vector. In an LSTM-based encoder, this is achieved by feeding the input sequence, one time step at a time, into an LSTM layer. The LSTM maintains an internal hidden state (`h`) and cell state (`c`) as it processes the sequence. After the final time step `x_N` has been processed, the LSTM's final hidden state and cell state are considered the context vector. These states effectively summarize all the information learned from the entire input sequence. We typically use an `LSTM` layer (or `GRU`) and configure it to return its states. In Keras, this means setting `return_state=True` and `return_sequences=False` for the encoder's final LSTM layer, as we only need the final states, not the output sequence at each step.

Here's a conceptual Keras code snippet for an encoder:

```python
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Input, LSTM, Dense

# Define an input sequence
encoder_inputs = Input(shape=(n_input_steps, n_features))

# Encoder LSTM
# return_state=True means it will output the last hidden state and cell state
encoder_lstm = LSTM(units=latent_dim, return_state=True)
encoder_outputs, state_h, state_c = encoder_lstm(encoder_inputs)

# We discard `encoder_outputs` and keep the states.
# `state_h` and `state_c` are our context vectors.
encoder_states = [state_h, state_c]

# Define the encoder model
encoder_model = Model(encoder_inputs, encoder_states)
```
In this setup, `latent_dim` represents the dimensionality of our context vector, which is also the number of units in the LSTM layer. The `n_input_steps` is the length of our input sequence, and `n_features` is the number of features at each time step (1 for univariate time series).

Next, we move to the **decoder**. The decoder's task is to take the context vector (the final states from the encoder) and generate the output sequence, `Y = [y_1, y_2, ..., y_M]`. The crucial step here is **state transfer**: the encoder's final hidden and cell states (`state_h`, `state_c`) are used to initialize the decoder's LSTM layer. This effectively "primes" the decoder with the knowledge of the input sequence. The decoder then generates the output sequence one step at a time. For each decoding step, the decoder receives an input and its previous hidden and cell states, and outputs a prediction and new states.

During training, a technique called **teacher forcing** is often employed. This means that at each decoding step, instead of feeding the decoder its *own previous prediction* as input for the next step, we feed it the *actual ground truth value* from the target sequence. This helps stabilize training and speeds up convergence, especially for longer output sequences. For the very first decoding step, we typically provide a "start-of-sequence" token or a special initial value (e.g., the last value of the input sequence or a zero vector) as input.

Here's a conceptual Keras code snippet for the decoder:

```python
# Define the decoder input
# The decoder will receive one input at a time (e.g., the previous actual value or a start token)
decoder_inputs = Input(shape=(1, n_features)) # For single-step prediction at a time

# Create the decoder LSTM, configured to return sequences and states
# We need to return sequences because the decoder generates multiple outputs
decoder_lstm = LSTM(units=latent_dim, return_sequences=True, return_state=True)

# The decoder's initial states are the encoder's final states
decoder_outputs, _, _ = decoder_lstm(decoder_inputs, initial_state=encoder_states)

# A Dense layer to project the LSTM's output to the desired output dimension (e.g., 1 for univariate)
decoder_dense = Dense(n_features)
decoder_outputs = decoder_dense(decoder_outputs)

# Define the full encoder-decoder model
model = Model(encoder_inputs, decoder_outputs)
```

**Common Mistakes and Safety Notes:**
1.  **Mismatching `latent_dim`:** Ensure the `units` parameter for the encoder and decoder LSTMs is the same (`latent_dim`). The states transferred must have compatible dimensions.
2.  **Incorrect `return_state` and `return_sequences`:** The encoder's *last* LSTM layer should have `return_state=True` and `return_sequences=False` (unless you're using attention, which we'll cover later). The decoder's LSTM should have `return_sequences=True` if you want to output a sequence of predictions, and `return_state=True` if you plan to chain multiple decoders or need the final state for something else (less common in simple forecasting).
3.  **State Initialization:** Forgetting to pass `initial_state=encoder_states` to the decoder's LSTM is a critical error; it breaks the link between the encoder's understanding and the decoder's generation.
4.  **Teacher Forcing vs. Inference:** Remember that the training setup with teacher forcing is different from inference. During inference, you don't have the ground truth for future steps. The decoder must recursively feed its *own predictions* back as input for the next step. This can lead to error accumulation, a common challenge in multi-step forecasting.
5.  **Input/Output Shape Misalignment:** Pay close attention to the `shape` arguments in `Input` layers and the expected input shape of your LSTM layers (typically `(timesteps, features)`). Time series data often needs to be reshaped.

Building this model is a significant step. It allows us to move beyond single-point predictions and tackle more complex, multi-horizon forecasting problems, laying the groundwork for even more sophisticated architectures like those incorporating attention.

#### Key concepts
*   **Encoder LSTM:** An LSTM layer configured to process the input sequence and output its final hidden and cell states (the context vector).
*   **Decoder LSTM:** An LSTM layer initialized with the encoder's final states, responsible for generating the output sequence one step at a time.
*   **State Transfer:** The process of passing the final hidden and cell states from the encoder's LSTM to initialize the decoder's LSTM.
*   **`latent_dim`:** The dimensionality of the hidden and cell states, representing the capacity of the context vector.
*   **`return_state` (Keras/TensorFlow):** A parameter for RNN layers that, when `True`, causes the layer to return its final hidden and cell states in addition to its outputs.
*   **`return_sequences` (Keras/TensorFlow):** A parameter for RNN layers that, when `True`, causes the layer to return the output for each time step in the input sequence, rather than just the last one.

#### Hands-on activity
**Implement a Basic Encoder-Decoder LSTM in Keras**

Your task is to complete the Keras code for a basic encoder-decoder LSTM model for univariate time series forecasting. The model should take an input sequence of length `N` and predict an output sequence of length `M`.

**Instructions:**
1.  Define the `latent_dim` (e.g., 100).
2.  Define `n_input_steps` (e.g., 10) and `n_output_steps` (e.g., 5).
3.  Assume `n_features = 1` for univariate data.
4.  Complete the encoder and decoder model definitions.

```python
import numpy as np
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Input, LSTM, Dense
from tensorflow.keras.optimizers import Adam

# --- Configuration ---
latent_dim = 100  # Dimensionality of the encoder's latent space
n_input_steps = 10 # Number of past time steps to consider
n_output_steps = 5 # Number of future time steps to predict
n_features = 1   # Univariate time series

# --- Encoder ---
encoder_inputs = Input(shape=(n_input_steps, n_features))
encoder_lstm = LSTM(units=latent_dim, return_state=True)
encoder_outputs, state_h, state_c = encoder_lstm(encoder_inputs)
encoder_states = [state_h, state_c] # This is our context vector

encoder_model = Model(encoder_inputs, encoder_states) # Define the encoder model

# --- Decoder ---
# The decoder will take the encoder states as initial states
# and predict one step at a time. During training, we use teacher forcing.
# For simplicity in this template, we'll define a decoder that expects
# the full output sequence as input for teacher forcing.
# In a real scenario, you'd feed one step at a time.

# Define the input for the decoder (e.g., the actual previous values for teacher forcing)
decoder_inputs = Input(shape=(n_output_steps, n_features))

# Create the decoder LSTM, initialized with encoder states
# It needs to return sequences to output predictions for all output steps
decoder_lstm = LSTM(units=latent_dim, return_sequences=True, return_state=True)
decoder_outputs, _, _ = decoder_lstm(decoder_inputs, initial_state=encoder_states)

# A Dense layer to project the LSTM's output to the desired output dimension
decoder_dense = Dense(n_features)
decoder_outputs = decoder_dense(decoder_outputs)

# --- Full Encoder-Decoder Model ---
# This model takes encoder_inputs and decoder_inputs (for teacher forcing)
# and outputs the predictions from the decoder.
model = Model([encoder_inputs, decoder_inputs], decoder_outputs)

# --- Compile the model ---
model.compile(optimizer='adam', loss='mse')

# --- Model Summary (Optional, for verification) ---
model.summary()

# --- Dummy Data Generation for testing shapes ---
# X_train_encoder: (batch_size, n_input_steps, n_features)
# X_train_decoder: (batch_size, n_output_steps, n_features) - for teacher forcing
# y_train_decoder: (batch_size, n_output_steps, n_features) - actual target output

# Generate some dummy data
num_samples = 1000
dummy_encoder_input = np.random.rand(num_samples, n_input_steps, n_features)
dummy_decoder_input = np.random.rand(num_samples, n_output_steps, n_features) # This would be shifted target data
dummy_decoder_target = np.random.rand(num_samples, n_output_steps, n_features)

# --- Training (Optional, for verification) ---
# print("\nTraining with dummy data (this might take a moment)...")
# model.fit([dummy_encoder_input, dummy_decoder_input], dummy_decoder_target,
#           batch_size=32, epochs=1, verbose=0)
# print("Dummy training complete.")

# --- Prediction (Optional, for verification) ---
# To predict, you'd typically build an inference model that uses the encoder
# to get states, then a separate decoder model that takes states and
# generates output step-by-step. This is more complex and will be covered later.
# For now, we're just setting up the training model.
```

#### Assessment idea
1.  **Question:** In an LSTM-based encoder-decoder model, what is the primary reason for setting `return_state=True` on the encoder's final LSTM layer?
    a) To ensure the encoder processes the entire input sequence.
    b) To allow the encoder to output a sequence of hidden states for attention mechanisms.
    c) To extract the final hidden and cell states, which serve as the context vector for the decoder.
    d) To prevent vanishing gradients during backpropagation through time.

    **Correct Answer:** c) To extract the final hidden and cell states, which serve as the context vector for the decoder.
    **Explanation:** `return_state=True` explicitly tells the Keras LSTM layer to output its final hidden state (`state_h`) and final cell state (`state_c`). These two states together form the context vector that encapsulates the information from the input sequence and is then passed to initialize the decoder.

2.  **Question:** You are building an encoder-decoder LSTM model for multi-step time series forecasting. During the training phase, you decide to use "teacher forcing." Describe what teacher forcing means in this context and explain one benefit it provides during training.

    **Correct Answer:** Teacher forcing is a training technique used in sequence generation models (like the decoder of an encoder-decoder model) where, at each time step, the actual ground truth value from the target sequence is fed as input to the decoder for predicting the *next* time step, rather than feeding the decoder's *own previous prediction*.
    **Benefit:** One significant benefit of teacher forcing is that it helps stabilize and accelerate the training process. By providing the correct previous input, it prevents the accumulation of errors that could occur if the decoder's own potentially incorrect predictions were fed back, which could quickly lead the model off track and make training unstable or very slow. It ensures the decoder learns to predict the next step given a correct previous step, making the learning process more guided.

#### AI generation note
Produce a 12-minute live coding video demonstrating the construction of an encoder-decoder LSTM in Keras. Start with a clean Jupyter Notebook. First, explain the encoder's role and write the Keras code for it, showing `return_state=True`. Then, explain state transfer and build the decoder, demonstrating how `initial_state` is used. Use a simple synthetic univariate time series dataset (e.g., sine wave with noise). Show how to prepare the data into `(samples, timesteps, features)` format for both encoder and decoder inputs/targets. Compile and briefly train the model with dummy data, emphasizing the input shapes. Use side-by-side code and terminal/output views. Include a mini-quiz on state transfer immediately after the decoder implementation.

---

### Chapter 6.3 — Multi-Step Forecasting with Encoder-Decoder Models

#### Learning objectives
*   Differentiate between direct multi-step forecasting and recursive multi-step forecasting strategies.
*   Explain the concept of teacher forcing and its role during the training of encoder-decoder models.
*   Implement an inference strategy for generating multi-step forecasts using a trained encoder-decoder model.
*   Identify common challenges and potential error accumulation in recursive multi-step forecasting.

#### Detailed lesson content
With a basic encoder-decoder LSTM model in place, our next crucial step is to understand how to effectively use it for multi-step forecasting, both during training and, more importantly, during inference. Multi-step forecasting involves predicting `M` future values, `[y_t+1, ..., y_t+M]`, given an input sequence `[x_t-N, ..., x_t]`. There are two primary strategies for multi-step forecasting: **direct forecasting** and **recursive forecasting**.

**Direct Multi-step Forecasting** involves training a single model to directly output all `M` future steps simultaneously. In the context of an encoder-decoder, this means the decoder is designed to produce a sequence of length `M` in one go. The advantage here is simplicity during inference, as a single forward pass yields all predictions. However, it implicitly assumes that each future step `y_t+k` is conditionally independent of `y_t+j` for `j < k` given the input sequence, which is often not true for time series. This can make it harder for the model to learn the complex dependencies between consecutive future steps. Our Keras model from the previous chapter, where `decoder_inputs` had `n_output_steps` and `decoder_lstm` had `return_sequences=True`, is set up for a form of direct multi-step forecasting during training, especially if we feed the full target sequence for teacher forcing.

**Recursive Multi-step Forecasting**, also known as iterative forecasting, is generally more aligned with how time series evolve. Here, the model predicts only one step into the future at a time. To predict the next step, the model uses its *own previous prediction* as part of the input for the current step. For an encoder-decoder, this means the decoder predicts `y_t+1`, then feeds `y_t+1` back into itself (along with its updated internal states) to predict `y_t+2`, and so on, until `M` predictions are made. This approach explicitly models the sequential dependency between future values. While more complex to implement for inference, it often yields better performance for longer horizons because it mimics the natural progression of time.

Let's delve into **Teacher Forcing** during training. As discussed, teacher forcing means that during the training of the decoder, instead of feeding its own *previous output* as input for the next time step, we provide the *actual ground truth value* from the target sequence. This significantly stabilizes training by ensuring the decoder always receives correct inputs, preventing the accumulation of errors that can derail learning. For example, if the decoder makes a small error predicting `y_t+1`, feeding that error back to predict `y_t+2` could amplify it. Teacher forcing mitigates this. In Keras, this is typically handled by providing a shifted version of the target sequence as `decoder_inputs` during `model.fit()`. The `decoder_inputs` for predicting `y_t+1` through `y_t+M` would be `[SOS_token, y_t+1_actual, ..., y_t+M-1_actual]`, where `SOS_token` is a start-of-sequence indicator or the last known input value.

**Inference Strategy for Recursive Forecasting:**
This is where the real challenge and nuance lie. During inference, we don't have future ground truth values. So, the decoder *must* rely on its own predictions.
1.  **Encoder Pass:** First, feed the input sequence `[x_t-N, ..., x_t]` to the encoder to obtain its final hidden and cell states (the context vector).
2.  **Initial Decoder Step:** Provide a "start-of-sequence" token (e.g., the last value of the input sequence, `x_t`, or a special token) as the first input to the decoder, along with the encoder's states. The decoder then predicts `y_t+1`.
3.  **Recursive Loop:** For subsequent predictions (e.g., `y_t+2`):
    *   Take the predicted `y_t+1`.
    *   Feed `y_t+1` as the new input to the decoder.
    *   Use the *updated* hidden and cell states from the previous decoder step.
    *   The decoder then predicts `y_t+2`.
    *   Repeat this process `M` times until all future steps are predicted.

Here's a conceptual Keras inference code structure:

```python
# Assuming 'encoder_model' and 'decoder_model' are already defined and trained
# encoder_model: Input(encoder_inputs) -> Output(encoder_states)
# decoder_model: Input([decoder_input_at_t, decoder_h_at_t, decoder_c_at_t]) -> Output([decoder_output_at_t, decoder_h_at_t+1, decoder_c_at_t+1])

def predict_sequence(input_seq, n_output_steps, encoder_model, decoder_model):
    # 1. Encode the input sequence to get the context vector
    states_value = encoder_model.predict(input_seq) # input_seq shape: (1, n_input_steps, n_features)

    # 2. Prepare the initial input for the decoder
    # This could be the last value of the input sequence, or a special token
    target_seq = np.zeros((1, 1, n_features))
    target_seq[0, 0, 0] = input_seq[0, -1, 0] # Use the last known value as first decoder input

    # 3. Store the generated output sequence
    output_sequence = []

    # 4. Recursively predict future steps
    for _ in range(n_output_steps):
        # Predict the next step
        output_token, h, c = decoder_model.predict([target_seq] + states_value)

        # Store the prediction
        output_sequence.append(output_token[0, 0, 0])

        # Update the target sequence for the next step (feed the prediction back)
        target_seq[0, 0, 0] = output_token[0, 0, 0]

        # Update states for the next step
        states_value = [h, c]

    return np.array(output_sequence)
```
**Common Challenges and Error Accumulation:**
The primary challenge with recursive forecasting is **error accumulation**. If the decoder makes a small prediction error at step `t+1`, that error is fed back as input for step `t+2`, potentially leading to a larger error, and so on. This can cause the forecasts to drift significantly from the true values, especially for longer prediction horizons. This is a fundamental trade-off: teacher forcing helps training, but the discrepancy between training (ground truth input) and inference (model's own prediction as input) can lead to performance degradation. Strategies to mitigate this include scheduled sampling (gradually switching from ground truth to model output during training), or designing models that are less prone to error accumulation (e.g., attention-based models).

Understanding these forecasting strategies and the nuances of training vs. inference is critical for successfully applying encoder-decoder models to real-world time series problems.

#### Key concepts
*   **Direct Multi-step Forecasting:** A strategy where a model directly predicts all future time steps simultaneously in a single pass.
*   **Recursive Multi-step Forecasting (Iterative Forecasting):** A strategy where a model predicts one future time step at a time, feeding its own prediction back as input to forecast the next step.
*   **Teacher Forcing:** A training technique for sequence generation where the actual ground truth value from the target sequence is used as input for the next decoding step, instead of the model's own previous prediction.
*   **Inference Strategy:** The specific procedure used to generate predictions from a trained model, especially for multi-step recursive forecasting where ground truth is unavailable.
*   **Error Accumulation:** The phenomenon in recursive forecasting where small errors in early predictions compound over time, leading to larger inaccuracies in later predictions.

#### Hands-on activity
**Designing an Inference Loop for Recursive Forecasting**

You have trained an encoder-decoder LSTM model. Now, you need to implement the inference logic to forecast 7 steps into the future. You will need to define separate encoder and decoder inference models.

**Instructions:**
1.  Review the provided Keras code snippet for the `predict_sequence` function.
2.  Complete the `decoder_inference_model` definition, ensuring it takes the previous output and the states as input, and returns the next output and updated states.
3.  Assume `n_input_steps=10`, `n_output_steps=7`, `n_features=1`, and `latent_dim=100`.

```python
import numpy as np
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Input, LSTM, Dense

# --- Configuration (from previous chapter) ---
latent_dim = 100
n_input_steps = 10
n_output_steps = 7 # We want to predict 7 steps ahead
n_features = 1

# --- Dummy Encoder Model (representing a trained encoder) ---
encoder_inputs = Input(shape=(n_input_steps, n_features))
encoder_lstm = LSTM(units=latent_dim, return_state=True)
encoder_outputs, state_h_enc, state_c_enc = encoder_lstm(encoder_inputs)
encoder_states = [state_h_enc, state_c_enc]
encoder_model = Model(encoder_inputs, encoder_states)

# --- Decoder Inference Model ---
# This model takes one time step as input and the previous decoder states
# and outputs the prediction for that step and the new decoder states.

decoder_state_input_h = Input(shape=(latent_dim,))
decoder_state_input_c = Input(shape=(latent_dim,))
decoder_states_inputs = [decoder_state_input_h, decoder_state_input_c]

decoder_inputs_inference = Input(shape=(1, n_features)) # Decoder takes one step at a time

decoder_lstm_inference = LSTM(units=latent_dim, return_sequences=True, return_state=True)
decoder_outputs_inference, state_h_dec, state_c_dec = decoder_lstm_inference(
    decoder_inputs_inference, initial_state=decoder_states_inputs)

decoder_dense_inference = Dense(n_features)
decoder_outputs_inference = decoder_dense_inference(decoder_outputs_inference)

# Define the decoder inference model
# It takes the input for the current step AND the previous states
# It outputs the prediction for the current step AND the new states
decoder_inference_model = Model(
    [decoder_inputs_inference] + decoder_states_inputs,
    [decoder_outputs_inference, state_h_dec, state_c_dec])

# --- Prediction Function (as discussed in content) ---
def predict_sequence(input_seq, n_output_steps, encoder_model, decoder_inference_model):
    # Encode the input sequence to get the context vector
    states_value = encoder_model.predict(input_seq)

    # Prepare the initial input for the decoder (e.g., last value of input sequence)
    target_seq = np.zeros((1, 1, n_features))
    target_seq[0, 0, 0] = input_seq[0, -1, 0] # Using last known value

    output_sequence = []

    # Recursively predict future steps
    for _ in range(n_output_steps):
        output_token, h, c = decoder_inference_model.predict([target_seq] + states_value)

        output_sequence.append(output_token[0, 0, 0])

        # Update the target sequence for the next step (feed the prediction back)
        target_seq[0, 0, 0] = output_token[0, 0, 0]

        # Update states for the next step
        states_value = [h, c]

    return np.array(output_sequence)

# --- Example Usage (dummy data) ---
# Create a dummy input sequence (e.g., 1 sample, 10 timesteps, 1 feature)
dummy_input = np.random.rand(1, n_input_steps, n_features)

# Make a prediction
predicted_sequence = predict_sequence(dummy_input, n_output_steps, encoder_model, decoder_inference_model)

print(f"Input sequence shape: {dummy_input.shape}")
print(f"Predicted sequence (first {n_output_steps} steps): {predicted_sequence}")
print(f"Predicted sequence shape: {predicted_sequence.shape}")
```

#### Assessment idea
1.  **Question:** You are building a model to forecast hourly temperature for the next 48 hours. If you choose a recursive multi-step forecasting strategy, what will be the input to the decoder for predicting the temperature at hour `t+2`, assuming the model has already predicted `t+1`?
    a) The actual ground truth temperature at hour `t+1`.
    b) The encoder's context vector and the model's *predicted* temperature for hour `t+1`.
    c) Only the encoder's context vector.
    d) The entire input sequence used by the encoder.

    **Correct Answer:** b) The encoder's context vector and the model's *predicted* temperature for hour `t+1`.
    **Explanation:** In recursive forecasting during inference, the decoder's own previous prediction (`y_t+1` in this case) is fed back as input for the next step (`y_t+2`). The encoder's context vector (or its initial states) would have been used to start the decoding process and its updated states would be passed along.

2.  **Question:** Explain the primary drawback of using a recursive multi-step forecasting approach compared to a direct approach, especially for long forecasting horizons. How does "teacher forcing" relate to this drawback?

    **Correct Answer:** The primary drawback of recursive multi-step forecasting, especially for long horizons, is **error accumulation**. Small prediction errors made at an early step (e.g., `y_t+1`) are fed back as input for subsequent steps (`y_t+2`, `y_t+3`, etc.). These errors can compound and magnify, causing the forecast to drift significantly from the true values further into the future.
    Teacher forcing is a training technique that *mitigates* this issue during training by feeding the *actual ground truth* values to the decoder for each step, rather than its own predictions. This stabilizes training and helps the model learn correct step-by-step transitions. However, the discrepancy between this "perfect" input during training and the "error-prone" input during recursive inference is precisely what leads to the error accumulation drawback in real-world deployment.

#### AI generation note
Create a 10-minute interactive code demo in a Jupyter Notebook. Begin by explaining the difference between direct and recursive forecasting with simple diagrams. Then, focus on the recursive inference process. Show the `encoder_model` and `decoder_inference_model` setup. Walk through the `predict_sequence` function step-by-step, using a small, clear synthetic dataset (e.g., 10 points, predict next 3). Visualize the input sequence, then show the first prediction, then how that prediction is fed back for the second, and so on. Emphasize the `states_value` update. Include a reflection prompt asking learners to consider the implications of error accumulation for a critical application like medical forecasting.

---

### Chapter 6.4 — Addressing Long-Range Dependencies: The Need for Attention

#### Learning objectives
*   Recall the limitations of standard RNNs (LSTMs/GRUs) in capturing very long-range dependencies.
*   Understand why the fixed-size context vector in basic encoder-decoder models creates an information bottleneck.
*   Explain the intuitive concept of "attention" in the context of sequence modeling.
*   Identify scenarios in time series forecasting where attention mechanisms would be particularly beneficial.

#### Detailed lesson content
We've successfully built an encoder-decoder LSTM, a powerful architecture for multi-step time series forecasting. However, as hinted earlier, even LSTMs and GRUs, while better than vanilla RNNs, can struggle with extremely long sequences. This struggle becomes particularly acute in the context of the basic encoder-decoder architecture due to a fundamental design limitation: the **fixed-size context vector**.

Recall that the encoder's job is to compress all the information from the entire input sequence, `[x_t-N, ..., x_t]`, into a single, fixed-dimensional vector. This vector, the `encoder_states` (hidden and cell states), then serves as the sole source of information for the decoder to generate the output sequence `[y_t+1, ..., y_t+M]`. Imagine you're trying to summarize a 100-page book into a single tweet. You'd inevitably lose a vast amount of detail, nuance, and specific information. The same happens with a fixed-size context vector. For short input sequences, this might be sufficient, but as the input sequence `N` grows very long, this single vector becomes an **information bottleneck**. It simply cannot adequately store all the fine-grained details and long-range dependencies present in the input.

This bottleneck manifests as a degradation in performance, especially when the decoder needs to retrieve specific information from the early parts of a very long input sequence. For instance, if you're forecasting energy demand for next winter, and a critical input feature from last summer (e.g., a specific maintenance schedule or a major policy change) is highly relevant, a fixed-size context vector might "forget" or dilute that information by the time the decoder needs it. The further back in the input sequence a relevant piece of information lies, the harder it is for the encoder to preserve it and for the decoder to access it through this compressed representation. This is a classic problem of **long-range dependencies** that even advanced RNNs like LSTMs can struggle with when the "distance" between relevant input and output elements becomes too large.

This is precisely where **attention mechanisms** come to the rescue. The core intuition behind attention is remarkably human-like: instead of trying to cram everything into a single summary, when we process information, we selectively "pay attention" to the most relevant parts of the input as needed. For example, when translating a sentence, we don't just read the whole sentence and then try to translate it from memory; we often re-read or focus on specific words or phrases in the source sentence as we generate each word in the target sentence.

In the context of an encoder-decoder model, an attention mechanism allows the decoder, at each step of generating an output, to "look back" at all the hidden states of the encoder (not just the final one) and selectively focus on the most relevant parts of the input sequence. Instead of a single, static context vector, attention creates a dynamic, weighted sum of the encoder's hidden states. The weights in this sum are learned, indicating how much "attention" the decoder should pay to each part of the input sequence for the current decoding step. This dynamic weighting effectively bypasses the fixed-size bottleneck, allowing the decoder to access information directly from any point in the input sequence, irrespective of its distance from the current decoding step.

Consider a time series example: forecasting the price of a commodity. The current price might be heavily influenced by recent news events (short-term dependency), but also by a supply chain disruption that occurred several months ago (long-term dependency). A standard encoder-decoder might struggle to retain the details of that distant supply chain event. An attention mechanism, however, would allow the decoder, when forecasting a future price, to dynamically "attend" to the specific encoder hidden state that best captured the information about that supply chain disruption, even if it was far back in the input sequence. This ability to selectively focus on relevant input parts significantly enhances the model's capacity to capture complex and long-range dependencies, leading to more accurate and robust forecasts.

#### Key concepts
*   **Long-Range Dependencies:** Relationships between data points that are far apart in a sequence, which are challenging for traditional RNNs to capture effectively.
*   **Information Bottleneck:** The limitation of the fixed-size context vector in basic encoder-decoder models, where all information from a potentially long input sequence must be compressed into a single vector, leading to potential loss of detail.
*   **Attention Mechanism:** A technique that allows the decoder to dynamically "look back" at all parts of the input sequence (via encoder hidden states) and selectively focus on the most relevant information for generating each output step.
*   **Dynamic Context Vector:** Unlike the fixed-size context vector, an attention-based context vector is a weighted sum of encoder hidden states, where weights are dynamically calculated at each decoding step.
*   **Encoder Hidden States:** The sequence of hidden states produced by the encoder's RNN at each time step, which attention mechanisms use to form the dynamic context.

#### Hands-on activity
**Scenario Analysis: When is Attention Crucial?**

You are presented with two time series forecasting scenarios. For each scenario, decide whether a standard encoder-decoder LSTM would likely suffice or if an attention mechanism would be highly beneficial. Justify your answer based on the concepts of long-range dependencies and the information bottleneck.

**Scenario 1: Short-term Stock Price Prediction**
*   **Input:** Last 10 days of a specific stock's closing prices, volume, and news sentiment scores.
*   **Output:** Next 3 days of closing prices.

**Scenario 2: Annual Crop Yield Prediction**
*   **Input:** Monthly rainfall, temperature, soil moisture, and fertilizer usage data for the past 24 months. Also, specific dates of major weather events (droughts, floods) and policy changes (subsidies) from the past 5 years.
*   **Output:** Annual crop yield for the next year.

**Template for your analysis:**

```
# Scenario 1: Short-term Stock Price Prediction
# Suffice or Beneficial with Attention?
# Justification:

# Scenario 2: Annual Crop Yield Prediction
# Suffice or Beneficial with Attention?
# Justification:
```

#### Assessment idea
1.  **Question:** In a standard encoder-decoder model, why is the fixed-size context vector considered an "information bottleneck" for long input sequences?
    a) It limits the number of layers that can be used in the decoder.
    b) It forces all information from the entire input sequence to be compressed into a single vector, potentially losing fine-grained details.
    c) It restricts the model to only process univariate time series.
    d) It prevents the use of LSTMs or GRUs in the encoder.

    **Correct Answer:** b) It forces all information from the entire input sequence to be compressed into a single vector, potentially losing fine-grained details.
    **Explanation:** The fixed-size context vector has a limited capacity. When the input sequence is very long, it becomes increasingly difficult for this single vector to retain all the necessary information, especially long-range dependencies, leading to an information loss and hindering the decoder's ability to make accurate predictions.

2.  **Question:** Describe an intuitive analogy that explains how an attention mechanism improves upon the fixed-size context vector limitation in encoder-decoder models for time series forecasting.

    **Correct Answer:** An intuitive analogy for attention is like a student studying for an exam. A basic encoder-decoder model is like a student who reads an entire textbook once and then tries to answer all exam questions solely from memory of that single reading (the fixed-size context vector). For short textbooks, this might work, but for a very long and complex textbook, they'll forget details.
    An attention-equipped model is like a student who, while answering each specific exam question, *dynamically refers back to the relevant sections or pages of the textbook* to retrieve precise information. They don't just rely on a single summary; they selectively "pay attention" to the parts of the source material most relevant to the current question. This allows them to access specific details from anywhere in the "textbook" (input sequence) as needed, overcoming the memory bottleneck.

#### AI generation note
Design an 8-minute animated conceptual video. Start by visually representing a long input time series (e.g., 100 days of weather data) flowing into an encoder. Show the encoder trying to compress this into a small, fixed-size "memory capsule" (context vector), illustrating information being lost or blurred. Then, introduce the decoder struggling to forecast from this limited capsule. Transition to attention: show the decoder, at each output step, "shining a spotlight" back onto different parts of the original input sequence, highlighting relevant sections. Use color coding to indicate "attention scores." Include an interactive drag-and-drop exercise where learners match time series forecasting scenarios to whether attention would be beneficial.

---

### Chapter 6.5 — Implementing Bahdanau (Additive) Attention for Time Series

#### Learning objectives
*   Understand the mathematical formulation and intuition behind Bahdanau (additive) attention.
*   Explain how attention weights are calculated and used to create a dynamic context vector.
*   Integrate Bahdanau attention into an encoder-decoder LSTM architecture for time series forecasting.
*   Implement a Bahdanau attention layer using a deep learning framework like Keras.

#### Detailed lesson content
Now that we understand *why* attention is needed, let's dive into *how* it works by implementing one of the pioneering attention mechanisms: **Bahdanau attention**, also known as additive attention. This mechanism was introduced by Bahdanau et al. in 2014 for machine translation, and its principles are directly applicable to time series forecasting. The core idea is to allow the decoder to look at all encoder hidden states and compute a weighted sum, where the weights indicate the "relevance" of each encoder state to the current decoding step.

At each time step `t` of the decoder, the Bahdanau attention mechanism performs the following steps:

1.  **Calculate Alignment Scores (Energy):** For each encoder hidden state `h_i` (where `i` ranges from 1 to `N`, the length of the input sequence) and the current decoder hidden state `s_t`, an "alignment score" or "energy" `e_ti` is computed. This score measures how well the `i`-th encoder state and the `t`-th decoder state "match" or are relevant to each other. Bahdanau attention uses a feedforward neural network (often a single hidden layer) to calculate this score. The formula typically looks like this:
    `e_ti = v_a^T * tanh(W_a * s_t + U_a * h_i + b_a)`
    Here, `v_a`, `W_a`, `U_a`, and `b_a` are learnable weight matrices and bias vectors. The `tanh` activation introduces non-linearity, allowing the model to learn complex relationships between states. This is why it's called "additive" attention – the decoder state and encoder state are added together (after linear transformations) before the non-linearity.

2.  **Normalize Alignment Scores to Attention Weights:** The raw alignment scores `e_ti` are then passed through a softmax function to obtain **attention weights** `α_ti`. The softmax ensures that all weights are positive and sum up to 1, effectively creating a probability distribution over the encoder hidden states.
    `α_ti = exp(e_ti) / sum_k(exp(e_tk))`
    These `α_ti` values are crucial: a higher `α_ti` means the decoder is paying more attention to the `i`-th encoder hidden state when generating the `t`-th output.

3.  **Compute Context Vector:** Finally, a **context vector** `c_t` is computed as a weighted sum of all encoder hidden states, using the attention weights `α_ti`.
    `c_t = sum_i(α_ti * h_i)`
    This `c_t` is a dynamic context vector, custom-tailored for the current decoding step `t`, focusing on the most relevant parts of the input sequence.

4.  **Concatenate and Predict:** The context vector `c_t` is then concatenated with the current decoder hidden state `s_t`. This combined vector `[c_t; s_t]` (or sometimes `[c_t; s_t-1]`) is fed into a final feedforward layer (or another RNN layer) to predict the next output `y_t`.

**Integrating Bahdanau Attention into Keras Encoder-Decoder:**
Implementing this in Keras requires a bit more architectural work than a simple LSTM. The encoder needs to return *all* its hidden states (not just the final one), which means setting `return_sequences=True` for the encoder's LSTM layer. The decoder will then need to compute attention at each step.

Here's a conceptual Keras structure for the attention mechanism within the decoder:

```python
import tensorflow as tf
from tensorflow.keras.layers import Layer, Dense, AdditiveAttention, Concatenate

# Custom Attention Layer (simplified for illustration, Keras has AdditiveAttention)
class BahdanauAttention(Layer):
    def __init__(self, units):
        super(BahdanauAttention, self).__init__()
        self.W1 = Dense(units) # For decoder hidden state
        self.W2 = Dense(units) # For encoder hidden states
        self.V = Dense(1)      # For alignment score

    def call(self, query, values): # query = decoder_h, values = encoder_h_sequence
        # query_with_time_axis shape == (batch_size, 1, units)
        # values shape == (batch_size, max_len, units)
        query_with_time_axis = tf.expand_dims(query, 1)

        # score shape == (batch_size, max_len, 1)
        # This is where the additive part comes: W1*query + W2*values
        score = self.V(tf.nn.tanh(self.W1(query_with_time_axis) + self.W2(values)))

        # attention_weights shape == (batch_size, max_len, 1)
        attention_weights = tf.nn.softmax(score, axis=1)

        # context_vector shape == (batch_size, units)
        context_vector = attention_weights * values
        context_vector = tf.reduce_sum(context_vector, axis=1)

        return context_vector, attention_weights

# --- Encoder (returns sequences) ---
encoder_inputs = Input(shape=(n_input_steps, n_features))
encoder_lstm = LSTM(units=latent_dim, return_sequences=True, return_state=True)
encoder_outputs, state_h_enc, state_c_enc = encoder_lstm(encoder_inputs) # encoder_outputs is the sequence of h_i
encoder_states = [state_h_enc, state_c_enc]

# --- Decoder ---
decoder_inputs = Input(shape=(n_output_steps, n_features)) # For teacher forcing
decoder_h_input = Input(shape=(latent_dim,))
decoder_c_input = Input(shape=(latent_dim,))
decoder_states_inputs = [decoder_h_input, decoder_c_input]

decoder_lstm = LSTM(units=latent_dim, return_sequences=True, return_state=True)
decoder_outputs, decoder_h, decoder_c = decoder_lstm(decoder_inputs, initial_state=encoder_states)

# --- Attention Layer ---
attention_layer = BahdanauAttention(latent_dim) # Or use tf.keras.layers.AdditiveAttention
context_vector, attention_weights = attention_layer(decoder_h, encoder_outputs) # decoder_h is sequence of decoder states

# Concatenate context vector with decoder output for final prediction
decoder_concat_input = Concatenate(axis=-1)([decoder_outputs, context_vector])
decoder_dense = Dense(n_features)
decoder_outputs_final = decoder_dense(decoder_concat_input)

# Full model training (simplified)
# model = Model([encoder_inputs, decoder_inputs], decoder_outputs_final)
```

**Common Mistakes:**
1.  **Encoder `return_sequences`:** Forgetting to set `return_sequences=True` for the encoder's LSTM layer. Without this, you only get the final hidden state, not the sequence of hidden states needed for attention.
2.  **Shape Mismatches:** Attention mechanisms are very sensitive to input shapes. Ensure `query` (decoder state) and `values` (encoder states) have compatible dimensions for the attention layer.
3.  **Decoder State for Attention:** Correctly identifying which decoder state (e.g., the current hidden state `s_t` or the previous one `s_t-1`) to use as the "query" for attention.
4.  **Context Vector Usage:** Properly concatenating or combining the generated context vector with the decoder's output or state before the final prediction layer.

Bahdanau attention significantly improves the model's ability to handle long-range dependencies by allowing the decoder to dynamically focus on relevant parts of the input sequence. This is a powerful step towards more accurate time series forecasting, especially for complex patterns.

#### Key concepts
*   **Bahdanau Attention (Additive Attention):** An attention mechanism where alignment scores are calculated by adding linear transformations of the decoder hidden state and encoder hidden states, followed by a non-linear activation.
*   **Alignment Score (Energy):** A measure of how relevant an encoder hidden state is to the current decoder hidden state.
*   **Attention Weights:** Normalized alignment scores (using softmax) that represent the probability distribution over encoder hidden states, indicating their importance.
*   **Dynamic Context Vector:** A weighted sum of encoder hidden states, where weights are determined by the attention mechanism at each decoding step, providing a focused summary of the input.
*   **`return_sequences=True` (Encoder):** Essential for the encoder to output the hidden state at each time step, which is required by attention mechanisms.

#### Hands-on activity
**Conceptualizing Bahdanau Attention Flow**

Given the following Keras model snippet, trace the flow of information through the Bahdanau attention mechanism. Specifically, identify:
1.  Which variable represents the sequence of encoder hidden states that the attention mechanism will "look at"?
2.  Which variable represents the decoder's "query" for attention at each step?
3.  What is the purpose of the `tf.nn.tanh` and `tf.nn.softmax` functions in the `BahdanauAttention` layer?

```python
import tensorflow as tf
from tensorflow.keras.layers import Layer, Dense, LSTM, Input, Concatenate

# Assume latent_dim, n_input_steps, n_features are defined

# Encoder
encoder_inputs = Input(shape=(n_input_steps, n_features))
encoder_lstm = LSTM(units=latent_dim, return_sequences=True, return_state=True)
encoder_outputs, state_h_enc, state_c_enc = encoder_lstm(encoder_inputs) # encoder_outputs is the sequence of h_i

# Decoder
decoder_inputs = Input(shape=(n_output_steps, n_features))
decoder_h_input = Input(shape=(latent_dim,))
decoder_c_input = Input(shape=(latent_dim,))
decoder_states_inputs = [decoder_h_input, decoder_c_input]

decoder_lstm = LSTM(units=latent_dim, return_sequences=True, return_state=True)
decoder_outputs, decoder_h, decoder_c = decoder_lstm(decoder_inputs, initial_state=encoder_states) # decoder_h is sequence of decoder states

# Bahdanau Attention Layer
class BahdanauAttention(Layer):
    def __init__(self, units):
        super(BahdanauAttention, self).__init__()
        self.W1 = Dense(units)
        self.W2 = Dense(units)
        self.V = Dense(1)

    def call(self, query, values): # query=decoder_h, values=encoder_outputs
        query_with_time_axis = tf.expand_dims(query, 1)
        score = self.V(tf.nn.tanh(self.W1(query_with_time_axis) + self.W2(values)))
        attention_weights = tf.nn.softmax(score, axis=1)
        context_vector = attention_weights * values
        context_vector = tf.reduce_sum(context_vector, axis=1)
        return context_vector, attention_weights

attention_layer = BahdanauAttention(latent_dim)
context_vector, attention_weights = attention_layer(decoder_h, encoder_outputs)

# Final output
decoder_concat_input = Concatenate(axis=-1)([decoder_outputs, context_vector])
decoder_dense = Dense(n_features)
decoder_outputs_final = decoder_dense(decoder_concat_input)
```

#### Assessment idea
1.  **Question:** In Bahdanau (additive) attention, what is the role of the `softmax` function applied to the alignment scores (`e_ti`)?
    a) To introduce non-linearity into the attention mechanism.
    b) To ensure that the attention weights sum up to 1, creating a probability distribution over encoder states.
    c) To scale the alignment scores to prevent vanishing gradients.
    d) To directly compute the context vector without needing a weighted sum.

    **Correct Answer:** b) To ensure that the attention weights sum up to 1, creating a probability distribution over encoder states.
    **Explanation:** The softmax function normalizes the raw alignment scores into a set of positive weights that sum to 1. This ensures that the attention weights can be interpreted as probabilities, indicating the relative importance of each encoder hidden state for the current decoding step.

2.  **Question:** When implementing an encoder for an LSTM-based encoder-decoder model with Bahdanau attention in Keras, what crucial parameter must be set for the encoder's LSTM layer, and why?

    **Correct Answer:** The crucial parameter is `return_sequences=True`.
    **Explanation:** Bahdanau attention (and most attention mechanisms) requires access to *all* the hidden states generated by the encoder at each time step, not just the final hidden state. Setting `return_sequences=True` ensures that the encoder's LSTM layer outputs the full sequence of hidden states, `h_1, h_2, ..., h_N`, which the attention mechanism then uses as "values" to compute the dynamic context vector. If `return_sequences` were `False`, only the last hidden state would be available, defeating the purpose of attention.

#### AI generation note
Create a 15-minute live coding video. Start by reviewing the encoder-decoder from Chapter 6.2. Then, introduce the Bahdanau attention mechanism step-by-step, explaining the `W1`, `W2`, `V` matrices, `tanh`, and `softmax` with visual overlays on the code. Implement a custom `BahdanauAttention` Keras `Layer`. Modify the encoder to `return_sequences=True`. Integrate the custom attention layer into the decoder. Use a synthetic time series dataset (e.g., a noisy sine wave with a long period) to demonstrate. Show the model summary and discuss the increased complexity. Include a segment visualizing the attention weights (e.g., a heatmap) during a prediction, showing which input steps are most attended to.

---

### Chapter 6.6 — Implementing Luong (Multiplicative) Attention for Time Series

#### Learning objectives
*   Understand the mathematical formulation and intuition behind Luong (multiplicative) attention.
*   Differentiate between Bahdanau and Luong attention mechanisms, particularly their scoring functions.
*   Implement a Luong attention layer using a deep learning framework like Keras.
*   Identify the common variants of Luong attention (dot, general, concat) and their characteristics.

#### Detailed lesson content
Building on our understanding of Bahdanau attention, let's explore another widely used attention mechanism: **Luong attention**, introduced by Luong et al. in 2015. While serving the same purpose as Bahdanau attention – allowing the decoder to selectively focus on encoder hidden states – Luong attention differs primarily in how it computes the alignment scores and how it integrates the context vector. It's often referred to as "multiplicative" attention because its scoring functions typically involve a multiplicative interaction between the decoder and encoder states, or a dot product.

The key distinction lies in the **alignment scoring function**. Instead of an additive feedforward network, Luong attention proposes simpler, more efficient scoring functions. At each decoder time step `t`, with decoder hidden state `s_t` and encoder hidden states `h_i`:

1.  **Calculate Alignment Scores (Energy):** Luong attention offers three main variants for computing the raw alignment score `e_ti`:
    *   **Dot Product (Global Attention):** This is the simplest and most efficient. It's a direct dot product between the decoder's hidden state and each encoder's hidden state.
        `e_ti = s_t^T * h_i`
        This works well when `s_t` and `h_i` have the same dimensionality.
    *   **General (Global Attention):** A slightly more complex variant that introduces a learnable weight matrix `W_a`.
        `e_ti = s_t^T * W_a * h_i`
        This allows for more flexibility and can be used when `s_t` and `h_i` have different dimensionalities, or to learn a more complex relationship.
    *   **Concat (Global Attention):** Similar to Bahdanau attention in spirit, but often implemented slightly differently in terms of where the concatenation happens. It concatenates the states and passes them through a linear layer, then a tanh, and finally a vector `v_a`.
        `e_ti = v_a^T * tanh(W_a * [s_t; h_i])`
        This is less "multiplicative" but is often grouped with Luong due to its global nature.

    The term "Global Attention" in Luong's original paper refers to the fact that the decoder attends to *all* encoder hidden states for each decoding step. This is in contrast to "Local Attention" (which we won't cover in depth here), where the decoder first predicts a "focused" window of encoder states to attend to, reducing computational cost for very long sequences.

2.  **Normalize Alignment Scores to Attention Weights:** Just like Bahdanau attention, the raw alignment scores `e_ti` are passed through a softmax function to obtain attention weights `α_ti`.
    `α_ti = exp(e_ti) / sum_k(exp(e_tk))`

3.  **Compute Context Vector:** A context vector `c_t` is computed as a weighted sum of all encoder hidden states, using the attention weights `α_ti`.
    `c_t = sum_i(α_ti * h_i)`

4.  **Concatenate and Predict:** This is another point of difference from Bahdanau. In Luong attention, the context vector `c_t` is typically concatenated with the *current decoder hidden state* `s_t` (after it has processed its input for the current step). This combined vector `[s_t; c_t]` is then passed through a `Dense` layer (often called `concat_layer` in papers) to produce the final output `y_t`.
    `y_t = W_p * tanh(W_c * [s_t; c_t])` (where `W_p` and `W_c` are learnable weights)

**Key Differences from Bahdanau Attention:**
*   **Scoring Function:** Bahdanau uses an additive feedforward network; Luong primarily uses multiplicative interactions (dot product, general).
*   **Context Vector Usage:** Bahdanau often concatenates the context vector with the *previous* decoder output or state before feeding it into the next RNN step. Luong typically concatenates the context vector with the *current* decoder hidden state (after the RNN step) and then passes it through a final layer for prediction. This is a subtle but important architectural difference.
*   **Computational Efficiency:** Luong's dot product and general attention are often more computationally efficient due to simpler scoring functions.

**Implementing Luong Attention (General) in Keras:**
Keras provides `tf.keras.layers.Attention` which implements dot-product attention. For general or concat, you might need a custom layer or manual implementation.

```python
import tensorflow as tf
from tensorflow.keras.layers import Layer, Dense, Dot, Activation, Concatenate, Permute, Multiply
from tensorflow.keras.models import Model, Input, Sequential

# --- Encoder (returns sequences) ---
# Same as Bahdanau:
encoder_inputs = Input(shape=(n_input_steps, n_features))
encoder_lstm = LSTM(units=latent_dim, return_sequences=True, return_state=True)
encoder_outputs, state_h_enc, state_c_enc = encoder_lstm(encoder_inputs) # encoder_outputs is the sequence of h_i
encoder_states = [state_h_enc, state_c_enc]

# --- Decoder ---
# Also similar, but we need the current decoder hidden state (state_h_dec) at each step
decoder_inputs = Input(shape=(n_output_steps, n_features)) # For teacher forcing
decoder_h_input = Input(shape=(latent_dim,))
decoder_c_input = Input(shape=(latent_dim,))
decoder_states_inputs = [decoder_h_input, decoder_c_input]

decoder_lstm = LSTM(units=latent_dim, return_sequences=True, return_state=True)
decoder_outputs, decoder_h, decoder_c = decoder_lstm(decoder_inputs, initial_state=encoder_states) # decoder_h is sequence of decoder states

# --- Luong Attention (General) ---
# We need to apply attention at each time step of the decoder output sequence.
# Keras's Attention layer is for dot product. For General, we need a custom approach.
# Let's use a simplified approach that mimics the general scoring:
# score = s_t^T * W_a * h_i

# Reshape encoder_outputs for broadcasting (batch, 1, max_len, units) for W_a * h_i
# No, simpler: W_a * h_i can be done once for all h_i
W_a = Dense(latent_dim, use_bias=False) # Learnable weight matrix W_a
encoder_outputs_transformed = W_a(encoder_outputs) # (batch, n_input_steps, latent_dim)

# Now for each decoder_h (batch, n_output_steps, latent_dim)
# We want to compute dot product with each encoder_outputs_transformed
# Use a custom layer or manual ops for this for each decoder step.
# For simplicity in this example, let's use Keras's Dot product layer,
# but note that `tf.keras.layers.Attention` is more robust for dot-product.

# Let's assume we want to apply attention for each decoder_h in decoder_h sequence
# This requires a TimeDistributed wrapper or a loop in the custom layer.

# For a simpler demonstration, let's use the last decoder hidden state (decoder_h_last = decoder_h[:,-1,:])
# and apply attention. In a full implementation, this would be done for each step.

# Example with Keras's AdditiveAttention to show structure, but it's Bahdanau-like.
# For Luong Dot-Product:
# attention_layer = tf.keras.layers.Attention()
# context_vector = attention_layer([decoder_h, encoder_outputs]) # query, value

# For Luong General (conceptual, as Keras doesn't have a direct layer for it):
# We need to compute score for each (decoder_h_step, encoder_output_step)
# This is usually done inside a custom layer or a more complex functional API.

# Let's use a simplified approach with a custom layer for Luong General
class LuongGeneralAttention(Layer):
    def __init__(self, units):
        super(LuongGeneralAttention, self).__init__()
        self.W_a = Dense(units, use_bias=False) # The W_a matrix
        self.concat_layer = Dense(units, activation='tanh') # For combining s_t and c_t
        self.V_output = Dense(n_features) # Final prediction layer

    def call(self, decoder_outputs_sequence, encoder_outputs_sequence):
        # decoder_outputs_sequence: (batch, n_output_steps, latent_dim) - sequence of s_t
        # encoder_outputs_sequence: (batch, n_input_steps, latent_dim) - sequence of h_i

        all_context_vectors = []
        all_attention_weights = []
        final_predictions = []

        # Loop through each decoder output step
        for i in range(decoder_outputs_sequence.shape[1]):
            s_t = decoder_outputs_sequence[:, i, :] # Current decoder hidden state (batch, latent_dim)
            s_t_expanded = tf.expand_dims(s_t, axis=1) # (batch, 1, latent_dim)

            # Compute W_a * h_i for all h_i (batch, n_input_steps, latent_dim)
            encoder_outputs_transformed = self.W_a(encoder_outputs_sequence)

            # Compute scores: s_t^T * (W_a * h_i)
            # This is a dot product between (batch, 1, latent_dim) and (batch, n_input_steps, latent_dim)
            # Resulting score shape: (batch, n_input_steps)
            score = tf.matmul(s_t_expanded, encoder_outputs_transformed, transpose_b=True)
            score = tf.squeeze(score, axis=1) # (batch, n_input_steps)

            # Apply softmax to get attention weights
            attention_weights = tf.nn.softmax(score, axis=1) # (batch, n_input_steps)
            all_attention_weights.append(tf.expand_dims(attention_weights, axis=1))

            # Compute context vector: weighted sum of encoder outputs
            # (batch, 1, n_input_steps) * (batch, n_input_steps, latent_dim) -> (batch, 1, latent_dim)
            context_vector = tf.matmul(tf.expand_dims(attention_weights, axis=1), encoder_outputs_sequence)
            context_vector = tf.squeeze(context_vector, axis=1) # (batch, latent_dim)
            all_context_vectors.append(tf.expand_dims(context_vector, axis=1))

            # Concatenate context vector with current decoder hidden state
            concat_output = tf.concat([s_t, context_vector], axis=-1) # (batch, 2*latent_dim)
            concat_output = self.concat_layer(concat_output) # (batch, latent_dim)

            # Final prediction
            prediction = self.V_output(concat_output) # (batch, n_features)
            final_predictions.append(tf.expand_dims(prediction, axis=1))

        return Concatenate(axis=1)(final_predictions), Concatenate(axis=1)(all_attention_weights)

luong_attention_layer = LuongGeneralAttention(latent_dim)
final_predictions_sequence, attention_weights_sequence = luong_attention_layer(decoder_h, encoder_outputs)

# --- Full Model ---
model = Model([encoder_inputs, decoder_inputs], final_predictions_sequence)
model.compile(optimizer='adam', loss='mse')
# model.summary()
```

**Common Mistakes:**
1.  **Confusion with Bahdanau:** Remember the scoring function and how the context vector is used (before vs. after current decoder state).
2.  **Shape Mismatches in Dot Products:** Ensure the dimensions align for matrix multiplications, especially when transposing.
3.  **Looping for Decoder Steps:** If implementing a custom attention layer that applies attention at each decoder step, you might need explicit loops or `tf.map_fn` if Keras's built-in layers don't cover your exact logic. The Keras `Attention` layer handles this implicitly for dot-product.
4.  **`use_bias=False` for `W_a`:** In Luong's general attention, `W_a` is often a weight matrix without a bias term.

Luong attention provides a robust and often more computationally efficient alternative to Bahdanau attention, especially the dot-product variant. Its integration further strengthens the encoder-decoder's ability to focus on relevant historical data, leading to improved multi-step time series forecasts.

#### Key concepts
*   **Luong Attention (Multiplicative Attention):** An attention mechanism characterized by simpler, often multiplicative, scoring functions (dot product, general).
*   **Dot Product Attention:** A Luong variant where alignment scores are computed by a direct dot product between the decoder hidden state and encoder hidden states.
*   **General Attention:** A Luong variant where alignment scores are computed by `s_t^T * W_a * h_i`, introducing a learnable weight matrix `W_a`.
*   **Concat Attention (Luong variant):** A Luong variant similar to Bahdanau but typically using a different concatenation and final prediction step.
*   **Global Attention:** A characteristic of Luong attention where the decoder attends to all encoder hidden states for each decoding step.

#### Hands-on activity
**Comparing Bahdanau and Luong Attention Scoring**

Consider a scenario where:
*   `s_t` (decoder hidden state) = `[0.5, -0.2, 0.8]`
*   `h_i` (an encoder hidden state) = `[0.1, 0.7, -0.3]`
*   Assume `W_a` for Luong General Attention is an identity matrix (for simplicity: `[[1,0,0],[0,1,0],[0,0,1]]`).
*   Assume `W1`, `W2`, `V` for Bahdanau are simple identity/ones (for simplicity: `W1=I, W2=I, V=[1,1,1]^T`, and no `tanh` or `bias` for conceptual comparison).

**Task:**
1.  Calculate the raw alignment score (`e_ti`) using Luong's **Dot Product** scoring function.
2.  Calculate the raw alignment score (`e_ti`) using Luong's **General** scoring function (with `W_a` as identity).
3.  Calculate the raw alignment score (`e_ti`) using a simplified Bahdanau-like additive approach (`s_t + h_i`, then sum elements).

```python
import numpy as np

s_t = np.array([0.5, -0.2, 0.8])
h_i = np.array([0.1, 0.7, -0.3])
W_a_identity = np.identity(3) # For Luong General

# 1. Luong Dot Product
luong_dot_product_score = # Your calculation here

# 2. Luong General (with W_a_identity)
# First, calculate W_a * h_i
W_a_h_i = # Your calculation here
luong_general_score = # Your calculation here

# 3. Simplified Bahdanau-like Additive
bahdanau_additive_score = # Your calculation here

print(f"Luong Dot Product Score: {luong_dot_product_score}")
print(f"Luong General Score: {luong_general_score}")
print(f"Simplified Bahdanau Additive Score: {bahdanau_additive_score}")
```

#### Assessment idea
1.  **Question:** What is the primary difference in how Bahdanau and Luong (dot product) attention calculate their raw alignment scores (`e_ti`)?
    a) Bahdanau uses a softmax function, while Luong uses a sigmoid.
    b) Bahdanau uses an additive feedforward network, while Luong uses a direct dot product.
    c) Bahdanau uses only the final encoder state, while Luong uses all encoder states.
    d) Bahdanau concatenates states, while Luong adds them.

    **Correct Answer:** b) Bahdanau uses an additive feedforward network, while Luong uses a direct dot product.
    **Explanation:** The fundamental distinction in their scoring functions is that Bahdanau employs an additive approach using a feedforward network with a `tanh` activation, whereas Luong's dot product attention directly calculates the dot product between the decoder and encoder hidden states.

2.  **Question:** You have implemented a Luong General Attention mechanism. After computing the context vector `c_t` for a given decoder step, how is `c_t` typically used to make the final prediction for that step, according to Luong's original formulation?

    **Correct Answer:** In Luong's original formulation, the context vector `c_t` is typically concatenated with the *current decoder hidden state* `s_t` (after `s_t` has processed its input for the current step). This combined vector `[s_t; c_t]` is then passed through a final `Dense` layer (often with a `tanh` activation) to produce the final output prediction for that time step. This differs from some Bahdanau implementations where `c_t` might be used to influence the *next* decoder RNN step.

#### AI generation note
Create a 12-minute live coding video. Begin by briefly summarizing Bahdanau attention. Then, introduce Luong attention, focusing on its dot product and general variants, visually comparing the scoring functions. Implement a custom `LuongGeneralAttention` Keras `Layer` within the encoder-decoder framework. Show how to prepare the `encoder_outputs` and `decoder_h` for the attention calculation. Use a synthetic time series dataset, perhaps one with clear periodic components. Demonstrate the model summary and discuss the architectural differences and potential computational benefits. Include a short interactive quiz comparing the computational complexity of Bahdanau vs. Luong dot product.

---

### Chapter 6.7 — Self-Attention and the Transformer Architecture for Time Series

#### Learning objectives
*   Explain the core concept of self-attention and how it differs from encoder-decoder attention.
*   Understand the purpose of Multi-Head Attention and Positional Encoding in the Transformer architecture.
*   Describe the high-level components of a Transformer encoder and decoder block.
*   Discuss the applicability and challenges of using Transformer models for time series forecasting.

#### Detailed lesson content
We've explored encoder-decoder models with Bahdanau and Luong attention, which significantly improved our ability to handle long-range dependencies by allowing the decoder to selectively look at the encoder's output. However, a revolutionary architecture, the **Transformer**, introduced in the paper "Attention Is All You Need" (Vaswani et al., 2017), takes attention to an entirely new level. The Transformer completely abandons recurrent (RNN) and convolutional (CNN) layers in favor of attention mechanisms, specifically **self-attention**.

**Self-Attention** is the cornerstone of the Transformer. Unlike the attention mechanisms we've seen so far, which calculate attention between a decoder state and encoder states, self-attention calculates attention *within a single sequence*. This means that for each element in an input sequence, the self-attention mechanism computes how much it should "attend" to every other element in the *same* sequence (including itself) to compute its new representation. This allows the model to weigh the importance of different parts of the input sequence when processing each individual element, capturing relationships regardless of their distance. For time series, this means that when processing a data point `x_t`, the model can directly weigh the importance of `x_t-1`, `x_t-10`, `x_t-100`, or any other `x_i` in the input window, without sequential processing bottlenecks.

The mechanism of self-attention involves three key concepts for each element `x_i` in the sequence:
1.  **Query (Q):** A representation of the current element `x_i` that is used to query other elements.
2.  **Key (K):** A representation of all other elements `x_j` that is used to be queried against.
3.  **Value (V):** A representation of all other elements `x_j` that contains the actual information to be extracted.

These Q, K, V vectors are derived by multiplying the input embedding of each element by three different learnable weight matrices (`W_Q`, `W_K`, `W_V`). The attention score between a query and a key is typically computed using a dot product, scaled by the square root of the key's dimension (`d_k`), and then passed through a softmax function to get attention weights. The output for each element is then a weighted sum of the Value vectors.
`Attention(Q, K, V) = softmax((Q * K^T) / sqrt(d_k)) * V`

A crucial extension to self-attention is **Multi-Head Attention**. Instead of performing a single self-attention calculation, Multi-Head Attention allows the model to jointly attend to information from different representation subspaces at different positions. It does this by splitting the Q, K, and V into multiple "heads," performing self-attention for each head independently, and then concatenating the results and projecting them back through a linear layer. This allows the model to learn different types of relationships (e.g., one head might focus on short-term patterns, another on long-term seasonality).

Since Transformers completely abandon recurrence, they lose the inherent sequential order information that RNNs provide. To reintroduce this, **Positional Encoding** is used. This involves adding a unique vector to the input embeddings at each position in the sequence. These positional encodings can be learned or fixed (e.g., using sine and cosine functions of different frequencies). For time series, positional encoding helps the model understand the relative or absolute position of each observation within the input window.

The **Transformer Architecture** is composed of stacked encoder and decoder blocks:
*   **Encoder Block:** Each encoder block typically consists of two sub-layers: a Multi-Head Self-Attention layer and a position-wise fully connected feed-forward network. Each of these sub-layers is followed by a residual connection and layer normalization. The encoder processes the input sequence, generating a sequence of contextualized representations.
*   **Decoder Block:** Each decoder block also has two main sub-layers, but with an additional third: a masked Multi-Head Self-Attention layer (to prevent attending to future outputs), a Multi-Head Attention layer (where queries come from the decoder's masked self-attention output, and keys/values come from the *encoder's* output), and a position-wise fully connected feed-forward network. This structure allows the decoder to attend to the input sequence (via the encoder's output) and its own previously generated output.

**Applicability and Challenges for Time Series Forecasting:**
Transformers have shown immense promise in time series forecasting, particularly for long sequences and complex multivariate data. Their ability to capture global dependencies directly, without the vanishing gradient problems of RNNs, makes them powerful. They can effectively model complex interactions between different time series variables (e.g., in multivariate forecasting) and across long time horizons.

However, challenges exist:
1.  **Computational Cost:** The self-attention mechanism has a quadratic complexity with respect to the sequence length (`O(N^2)`), making it computationally expensive for extremely long time series. Various "efficient Transformer" architectures (e.g., Reformer, Longformer) address this.
2.  **Positional Encoding for Time:** Standard positional encodings might not perfectly capture the complex temporal dynamics (e.g., seasonality, trend) inherent in time series. Specialized time-aware positional encodings or learned temporal embeddings are often explored.
3.  **Data Requirements:** Transformers are data-hungry. For smaller datasets, simpler RNNs might still perform comparably or better.
4.  **Interpretability:** While attention weights can offer some interpretability (showing which parts of the input are most relevant), the deep, multi-headed nature of Transformers can still make them complex "black boxes."

Despite these challenges, Transformers represent the state-of-the-art in many sequence modeling tasks, and their adoption in time series forecasting is rapidly growing, pushing the boundaries of what's possible in predicting the future.

#### Key concepts
*   **Self-Attention:** An attention mechanism that relates different positions of a single sequence to compute a representation of the sequence, allowing each element to weigh the importance of all other elements.
*   **Query (Q), Key (K), Value (V):** The three conceptual vectors derived from each input element in self-attention, used to calculate attention scores and derive contextualized representations.
*   **Multi-Head Attention:** An extension of self-attention that allows the model to jointly attend to information from different representation subspaces, improving its ability to capture diverse relationships.
*   **Positional Encoding:** A technique used in Transformers to inject information about the relative or absolute position of elements in a sequence, compensating for the lack of recurrence.
*   **Transformer Architecture:** A neural network architecture that relies entirely on self-attention mechanisms, abandoning recurrence and convolutions. It consists of stacked encoder and decoder blocks.
*   **Encoder Block (Transformer):** Contains a Multi-Head Self-Attention layer and a feed-forward network, processing the input sequence.
*   **Decoder Block (Transformer):** Contains masked Multi-Head Self-Attention, encoder-decoder Multi-Head Attention, and a feed-forward network, generating the output sequence.

#### Hands-on activity
**Designing a Transformer Input for Multivariate Time Series**

Imagine you are forecasting the next 12 months of sales for three different product lines (Product A, Product B, Product C) based on the past 24 months of sales data for each product, along with monthly marketing spend and economic indicators.

**Task:** Describe how you would prepare the input data for a Transformer model, specifically addressing:
1.  How would you represent each time step's features?
2.  How would you create the input sequence for the Transformer encoder?
3.  How would you incorporate positional information?

```
# Problem: Multivariate Sales Forecasting (3 product lines, 12 months ahead)
# Input: Past 24 months of sales (3 products), marketing spend, economic indicators.

# 1. Feature Representation per Time Step:
#    - What features would be combined for a single time step (e.g., month t)?
#    - What would be the dimensionality of this feature vector?

# 2. Input Sequence for Transformer Encoder:
#    - What is the length of the input sequence?
#    - How would the feature vectors from step 1 be arranged into this sequence?

# 3. Positional Encoding Strategy:
#    - Why is positional encoding necessary here?
#    - What type of positional encoding would you consider (e.g., learned, sinusoidal)?
#    - How would it be added to the input?
```

#### Assessment idea
1.  **Question:** What is the fundamental difference between self-attention (as used in Transformers) and the encoder-decoder attention (like Bahdanau or Luong) we discussed previously?
    a) Self-attention only works for univariate time series, while encoder-decoder attention works for multivariate.
    b) Self-attention calculates attention between elements *within the same sequence*, while encoder-decoder attention calculates attention between elements of *two different sequences* (encoder output and decoder state).
    c) Self-attention uses recurrent layers, while encoder-decoder attention uses convolutional layers.
    d) Self-attention does not use softmax, while encoder-decoder attention does.

    **Correct Answer:** b) Self-attention calculates attention between elements *within the same sequence*, while encoder-decoder attention calculates attention between elements of *two different sequences* (encoder output and decoder state).
    **Explanation:** This is the defining characteristic. Self-attention allows each element in a sequence to weigh the importance of all other elements in *that same sequence*, providing a rich contextual representation. Encoder-decoder attention, conversely, focuses the decoder on relevant parts of a *separate* input sequence (from the encoder).

2.  **Question:** Explain the purpose of Positional Encoding in the Transformer architecture for time series forecasting. Why is it particularly important given the Transformer's design?

    **Correct Answer:** Positional Encoding is crucial in the Transformer architecture because Transformers completely forgo recurrent neural networks (RNNs) and convolutional neural networks (CNNs). RNNs inherently process sequences step-by-step, thus preserving positional information. Without recurrence, the self-attention mechanism, by itself, is permutation-invariant; it treats all elements in a sequence equally regardless of their order.
    Therefore, Positional Encoding is added to the input embeddings to inject information about the relative or absolute position of each time step within the sequence. This allows the Transformer to understand the sequential order and temporal relationships (e.g., `x_t` comes after `x_t-1`), which is absolutely vital for time series forecasting where order matters profoundly for capturing trends, seasonality, and dependencies.

#### AI generation note
Create a 15-minute animated conceptual video with diagram overlays. Start by visually explaining self-attention: show a small time series sequence (e.g., 5 points), then for each point, illustrate Q, K, V generation and the dot product attention calculation with all other points. Transition to Multi-Head Attention, showing how different "heads" can focus on different aspects. Explain Positional Encoding with an animation of unique vectors being added to input embeddings. Finally, provide a high-level walkthrough of the Transformer encoder and decoder blocks, emphasizing the flow of information through self-attention and cross-attention layers. Use a real-world time series analogy (e.g., predicting weather patterns where distant events are relevant). Include a reflection prompt on the computational trade-offs of Transformers for very long time series.

---

## Module 7: Multivariate Time Series Forecasting with Deep Learning

This module delves into the complexities and powerful capabilities of deep learning models when applied to multivariate time series data. Unlike univariate forecasting, where we predict a single variable, multivariate forecasting involves predicting one or more variables that are interdependent, drawing insights from multiple related time series. We will explore how to adapt and extend the deep learning architectures you've learned—MLPs, CNNs, LSTMs, and Encoder-Decoders—to effectively model these intricate relationships and produce accurate forecasts for systems where multiple factors influence each other over time.

---

### Chapter 7.1 — Introduction to Multivariate Time Series and Challenges

#### Learning objectives
*   Define what constitutes a multivariate time series and differentiate it from univariate time series.
*   Identify common real-world scenarios where multivariate time series forecasting is essential.
*   Understand the key challenges associated with modeling and forecasting multivariate time series data.
*   Recognize the importance of inter-variable dependencies and temporal dynamics in multivariate analysis.

#### Detailed lesson content
Welcome to the fascinating world of multivariate time series forecasting! Up until now, we've primarily focused on univariate time series, where our goal was to predict a single variable based on its own past values. Think of forecasting a company's stock price based solely on its historical prices, or predicting daily temperature from past temperature readings. While incredibly useful, many real-world systems are far more complex, involving multiple interacting variables that evolve simultaneously over time. This is where multivariate time series come into play.

A **multivariate time series** is a collection of two or more time-dependent variables, where each variable influences and is influenced by the others, as well as by its own past. Imagine a smart home system where you're tracking indoor temperature, humidity, and the status of the HVAC system. These aren't independent; turning on the HVAC affects temperature and humidity, and high humidity might trigger the HVAC. Similarly, in financial markets, a stock's price might be influenced not just by its own past, but also by the trading volume, the performance of related indices, and economic indicators. In industrial settings, sensor readings from different parts of a machine (e.g., vibration, temperature, pressure) form a multivariate series, where anomalies in one might precede failures in another. The critical distinction here is the presence of **inter-variable dependencies**. These dependencies are the core of multivariate analysis and forecasting, as they provide richer context and predictive power than any single series alone.

The transition from univariate to multivariate forecasting introduces several significant challenges. Firstly, the **dimensionality of the data increases** substantially. Instead of a single sequence of values, we're now dealing with multiple parallel sequences. This means our models need to process more information, identify relevant features across different variables, and manage the increased computational load. Secondly, **capturing complex inter-dependencies** is paramount. It's not enough to model each series independently and then combine the forecasts. We need models that can inherently learn how changes in one variable propagate through the system and affect others. For instance, a sudden drop in a machine's oil pressure might immediately impact its vibration levels, and a good multivariate model should capture this causal or correlational link. Ignoring these relationships can lead to suboptimal or even inaccurate forecasts.

Another challenge lies in **feature engineering and selection**. With multiple variables, deciding which features are most relevant for predicting a target variable (or multiple target variables) becomes more complex. Do we include lagged values of all variables, or only a subset? How do we handle categorical features that might influence numerical time series? Furthermore, **data synchronization and missing values** can be more problematic. If different sensors record data at slightly different intervals or if some sensors temporarily fail, aligning the data and imputing missing values across multiple series requires careful consideration to maintain temporal integrity and inter-variable relationships.

Finally, **model interpretation and evaluation** become more nuanced. When forecasting multiple variables, how do we assess overall model performance? Is it acceptable for one variable's forecast to be less accurate if others are spot on? Visualizing and understanding the model's predictions across several dimensions, and identifying which input features contribute most to specific forecasts, requires more sophisticated techniques. Despite these challenges, the ability of deep learning models to automatically learn complex patterns and hierarchical representations from high-dimensional data makes them exceptionally well-suited for tackling multivariate time series forecasting. We will progressively build our understanding and skills to leverage these powerful tools throughout this module.

#### Key concepts
*   **Multivariate Time Series:** A collection of two or more time-dependent variables where each variable can influence and be influenced by the others.
*   **Inter-variable Dependencies:** The relationships and correlations between different variables within a multivariate time series.
*   **Dimensionality Increase:** The growth in the number of features or input dimensions when moving from univariate to multivariate data.
*   **Temporal Dynamics:** The evolution and patterns of variables over time, including trends, seasonality, and cycles.
*   **Cross-correlation:** A measure of the similarity between two time series as a function of the lag of one relative to the other, indicating how one series might lead or lag another.

#### Hands-on activity
**Activity: Exploring a Multivariate Dataset**
Your task is to load a multivariate time series dataset and perform initial exploratory data analysis to identify potential inter-variable dependencies.

**Instructions:**
1.  Load the provided CSV file `energy_consumption.csv` into a pandas DataFrame. This dataset contains hourly readings for 'Temperature (C)', 'Humidity (%)', and 'Energy_Consumption (kWh)'.
2.  Convert the 'Timestamp' column to a datetime index.
3.  Plot each time series individually to observe their patterns.
4.  Calculate the pairwise correlation matrix between 'Temperature (C)', 'Humidity (%)', and 'Energy_Consumption (kWh)'.
5.  Visualize the relationships using scatter plots for pairs of variables, and discuss any observed patterns or correlations.

**Code Template:**
```python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Create a dummy CSV for demonstration purposes
# In a real scenario, you would load your actual dataset.
data = {
    'Timestamp': pd.to_datetime(pd.date_range(start='2023-01-01', periods=100, freq='H')),
    'Temperature (C)': [20 + 5*i/100 + 2*abs(i%10 - 5) for i in range(100)],
    'Humidity (%)': [60 - 10*i/100 + 3*abs(i%15 - 7) for i in range(100)],
    'Energy_Consumption (kWh)': [100 + 20*i/100 + 15*abs(i%20 - 10) for i in range(100)]
}
df = pd.DataFrame(data)
df['Temperature (C)'] = df['Temperature (C)'] + df['Energy_Consumption (kWh)'] * 0.1 # Introduce dependency
df['Humidity (%)'] = df['Humidity (%)'] - df['Energy_Consumption (kWh)'] * 0.05 # Introduce dependency
df.to_csv('energy_consumption.csv', index=False)

# 1. Load the dataset
df = pd.read_csv('energy_consumption.csv')

# 2. Convert 'Timestamp' to datetime index
df['Timestamp'] = pd.to_datetime(df['Timestamp'])
df = df.set_index('Timestamp')

print("DataFrame Head:")
print(df.head())

# 3. Plot each time series
plt.figure(figsize=(15, 8))
plt.subplot(3, 1, 1)
plt.plot(df['Temperature (C)'])
plt.title('Temperature (C)')
plt.grid(True)

plt.subplot(3, 1, 2)
plt.plot(df['Humidity (%)'])
plt.title('Humidity (%)')
plt.grid(True)

plt.subplot(3, 1, 3)
plt.plot(df['Energy_Consumption (kWh)'])
plt.title('Energy Consumption (kWh)')
plt.grid(True)
plt.tight_layout()
plt.show()

# 4. Calculate pairwise correlation matrix
correlation_matrix = df.corr()
print("\nCorrelation Matrix:")
print(correlation_matrix)

# 5. Visualize relationships using scatter plots
sns.pairplot(df)
plt.suptitle('Pairwise Scatter Plots of Variables', y=1.02)
plt.show()

# Discussion points:
# - What patterns do you observe in the individual plots?
# - Which variables show the strongest correlations in the matrix?
# - Do the scatter plots visually confirm these correlations?
# - How might these dependencies impact forecasting?
```

#### Assessment idea
1.  **Question:** You are tasked with forecasting the future demand for electricity in a city. You have access to historical data on electricity consumption, average daily temperature, and daily sunlight hours. Explain why treating this as a multivariate time series problem is more advantageous than treating each as a univariate problem.
    **Answer:** Treating this as a multivariate time series problem is advantageous because electricity demand is not solely dependent on its own past values. It is heavily influenced by external factors like temperature (e.g., higher demand for AC in hot weather, heating in cold weather) and sunlight hours (e.g., lower demand during daylight due to solar panels, higher demand for lighting at night). A multivariate model can learn and leverage these inter-variable dependencies. For example, it can learn that when temperature rises above a certain threshold, electricity demand for cooling significantly increases. A univariate model for electricity demand would miss these crucial external influences, leading to less accurate and less robust forecasts.
2.  **Question:** Consider a multivariate time series consisting of three variables: `Stock_A_Price`, `Stock_B_Price`, and `Market_Index_Value`. If `Stock_A_Price` and `Stock_B_Price` are highly correlated with `Market_Index_Value`, but show little direct correlation with each other, what challenge does this present for a deep learning model, and how might a deep learning model implicitly address it?
    **Answer:** This scenario presents the challenge of identifying indirect dependencies or common latent factors. While `Stock_A_Price` and `Stock_B_Price` might not be directly correlated, their strong individual correlations with `Market_Index_Value` suggest that the market index acts as a common driver or latent variable influencing both. A deep learning model, especially one with recurrent layers (like LSTMs) or convolutional layers, can implicitly address this. Recurrent layers can learn long-range temporal dependencies and capture how the `Market_Index_Value`'s past behavior influences the future of both stocks. Convolutional layers can learn abstract features that represent the "market sentiment" or "overall economic health" derived from the `Market_Index_Value`, which then informs the predictions for the individual stocks. The model can learn to extract these common underlying patterns without being explicitly told about them, leveraging the shared influence of the market index.

#### AI generation note
Create a 7-minute introductory video explaining multivariate time series. Use clear animated diagrams to illustrate the difference between univariate (single line) and multivariate (multiple interacting lines, possibly with arrows indicating influence) data. Show real-world examples like sensor data from a factory floor (temperature, pressure, vibration) and financial data (stock price, volume, index). Highlight challenges like increased dimensionality and capturing inter-dependencies with visual metaphors (e.g., a complex web of connections). The tone should be encouraging and foundational. Include a reflection prompt at the end asking learners to identify a multivariate time series in their own domain.

---

### Chapter 7.2 — Data Preparation for Multivariate Time Series

#### Learning objectives
*   Master techniques for loading, aligning, and cleaning multivariate time series data.
*   Implement data scaling strategies appropriate for multiple features with varying ranges.
*   Construct input-output sequences (sliding windows) for multivariate deep learning models.
*   Understand the implications of different input and output shapes for multivariate forecasting models.

#### Detailed lesson content
Effective data preparation is the cornerstone of any successful deep learning project, and it becomes even more critical when working with multivariate time series. The quality and format of your input data directly impact your model's ability to learn meaningful patterns and generate accurate forecasts. Our journey begins with ensuring our data is clean, aligned, and scaled appropriately.

First, let's consider **data loading and alignment**. Multivariate time series often come from different sources—multiple sensors, databases, or APIs—and might not be perfectly synchronized. The initial step is to load all relevant series into a single data structure, typically a pandas DataFrame, where each column represents a different variable and the index is a shared timestamp. It's crucial that all series are sampled at the same frequency and that their timestamps are aligned. If data points are missing for certain timestamps in some series, you'll need to decide on an imputation strategy. Common methods include forward-fill (`ffill()`), backward-fill (`bfill()`), or interpolation (`interpolate()`). However, be cautious with imputation, especially for critical variables, as it can introduce artificial patterns or mask underlying issues. For example, `df.ffill()` will propagate the last valid observation forward, which might be acceptable for slowly changing variables but problematic for volatile ones.

Once aligned, **data scaling** becomes paramount. Different variables in a multivariate time series often have vastly different scales and units (e.g., temperature in Celsius, humidity in percentage, energy consumption in kWh). Deep learning models, particularly those using gradient-based optimization, are highly sensitive to feature scales. Features with larger numerical ranges can dominate the loss function and lead to slower convergence or unstable training. Therefore, it's almost always necessary to scale your data. Two popular methods are Min-Max Scaling and Standardization. **Min-Max Scaling** (using `sklearn.preprocessing.MinMaxScaler`) transforms features to a fixed range, typically \[0, 1] or \[-1, 1]. This is suitable when you know the approximate bounds of your data. **Standardization** (using `sklearn.preprocessing.StandardScaler`) transforms data to have a mean of 0 and a standard deviation of 1. This is generally preferred when the data distribution is approximately Gaussian or when outliers are present, as it's less sensitive to extreme values than Min-Max scaling. Remember to fit the scaler only on your training data and then apply the *same* fitted scaler to your validation and test sets to prevent data leakage.

After scaling, the next critical step is **structuring the data into input-output sequences** suitable for deep learning models. This is often referred to as "windowing" or "sliding window" transformation. For a multivariate time series, each "sample" in your training data will consist of an input sequence (a window of past observations across all features) and a corresponding output sequence (the future values you want to predict). If you have `n_features` variables, an input sequence of `n_steps_in` timesteps will have a shape of `(n_steps_in, n_features)`. The output sequence, predicting `n_steps_out` future timesteps for `n_output_features` (which could be all or a subset of `n_features`), will have a shape of `(n_steps_out, n_output_features)`.

Let's illustrate with an example. Suppose we have `X1, X2, X3` as our three features. If we want to predict the next `n_steps_out` values of `X1` and `X2` using the past `n_steps_in` values of `X1, X2, X3`:
*   **Input sequence (X):** `[[X1_t-n_steps_in+1, X2_t-n_steps_in+1, X3_t-n_steps_in+1], ..., [X1_t, X2_t, X3_t]]`
*   **Output sequence (y):** `[[X1_t+1, X2_t+1], ..., [X1_t+n_steps_out, X2_t+n_steps_out]]`

The process involves iterating through your time series, extracting these windows, and storing them as NumPy arrays. The final shape for a dataset ready for deep learning will typically be `(n_samples, n_steps_in, n_features)` for the input `X` and `(n_samples, n_steps_out, n_output_features)` for the output `y`. It's a common mistake to forget to reshape the data correctly or to mix up the feature and timestep dimensions, which can lead to `ValueError`s in your model. Always double-check the expected input shape of your chosen deep learning layer (e.g., `LSTM` expects `(batch_size, timesteps, features)`).

```python
# Example of windowing for multivariate data
def create_sequences(data, n_steps_in, n_steps_out):
    X, y = [], []
    for i in range(len(data)):
        # find the end of this pattern
        end_ix = i + n_steps_in
        out_end_ix = end_ix + n_steps_out
        # check if we are beyond the dataset
        if out_end_ix > len(data):
            break
        # gather input and output parts of the pattern
        seq_x = data[i:end_ix, :] # All features for n_steps_in
        seq_y = data[end_ix:out_end_ix, :] # All features for n_steps_out (or a subset)
        X.append(seq_x)
        y.append(seq_y)
    return np.array(X), np.array(y)

# Example usage:
# data = scaled_df.values # Assuming scaled_df is your scaled pandas DataFrame
# n_steps_in = 10
# n_steps_out = 5
# X, y = create_sequences(data, n_steps_in, n_steps_out)
# print(X.shape, y.shape) # Expected: (n_samples, n_steps_in, n_features), (n_samples, n_steps_out, n_features)
```
Finally, remember to split your prepared data into training, validation, and test sets **chronologically**. Random splitting is inappropriate for time series data because it leaks future information into the training set, leading to overly optimistic performance estimates. Always use a fixed point in time to divide your dataset.

#### Key concepts
*   **Data Alignment:** Ensuring all variables in a multivariate time series share the same timestamps and frequency.
*   **Imputation:** Techniques for filling in missing values in a time series (e.g., `ffill`, `bfill`, `interpolate`).
*   **Min-Max Scaling:** Rescaling features to a specific range, typically \[0, 1].
*   **Standardization:** Rescaling features to have a mean of 0 and a standard deviation of 1.
*   **Windowing (Sliding Window):** The process of transforming a time series into input-output pairs (sequences) for supervised learning.
*   **Input Sequence (`n_steps_in`):** The number of past timesteps used as input for a prediction.
*   **Output Sequence (`n_steps_out`):** The number of future timesteps to be predicted.
*   **Chronological Split:** Dividing time series data into train, validation, and test sets based on time order, not randomly.

#### Hands-on activity
**Activity: Prepare Multivariate Data for LSTM**
You will take a raw multivariate dataset, scale it, and transform it into input-output sequences suitable for an LSTM model.

**Instructions:**
1.  Load the `energy_consumption.csv` dataset (from Chapter 7.1 activity).
2.  Set 'Timestamp' as the index.
3.  Apply `MinMaxScaler` to all numerical features. Remember to fit on the training portion only. For this activity, assume the first 80% of data is training.
4.  Implement the `create_sequences` function provided in the lesson content.
5.  Use `n_steps_in = 24` (24 hours) and `n_steps_out = 6` (6 hours) to create your `X` and `y` sequences. The target `y` should predict all features.
6.  Print the shapes of the resulting `X` and `y` arrays.

**Code Template:**
```python
import pandas as pd
import numpy as np
from sklearn.preprocessing import MinMaxScaler
import matplotlib.pyplot as plt

# Re-create dummy CSV for demonstration if not already present
data = {
    'Timestamp': pd.to_datetime(pd.date_range(start='2023-01-01', periods=1000, freq='H')),
    'Temperature (C)': [20 + 5*np.sin(i/10) + np.random.randn() for i in range(1000)],
    'Humidity (%)': [60 - 10*np.cos(i/15) + np.random.randn() for i in range(1000)],
    'Energy_Consumption (kWh)': [100 + 20*np.sin(i/5) + 5*np.random.randn() for i in range(1000)]
}
df = pd.DataFrame(data)
df['Temperature (C)'] = df['Temperature (C)'] + df['Energy_Consumption (kWh)'] * 0.1
df['Humidity (%)'] = df['Humidity (%)'] - df['Energy_Consumption (kWh)'] * 0.05
df.to_csv('energy_consumption.csv', index=False)

# 1. Load the dataset
df = pd.read_csv('energy_consumption.csv')

# 2. Set 'Timestamp' as the index
df['Timestamp'] = pd.to_datetime(df['Timestamp'])
df = df.set_index('Timestamp')
df = df.dropna() # Ensure no NaNs, though our dummy data won't have them

# Define the split point for training (e.g., first 80% of data)
train_size = int(len(df) * 0.8)
train_data = df.iloc[:train_size]
full_data_values = df.values # Use the full data for sequence creation, but scaler fitted on train

# 3. Apply MinMaxScaler to all numerical features
scaler = MinMaxScaler(feature_range=(0, 1))
scaler.fit(train_data.values) # Fit only on training data
scaled_data = scaler.transform(full_data_values)

# 4. Implement the create_sequences function
def create_sequences(data, n_steps_in, n_steps_out):
    X, y = [], []
    for i in range(len(data)):
        end_ix = i + n_steps_in
        out_end_ix = end_ix + n_steps_out
        if out_end_ix > len(data):
            break
        seq_x = data[i:end_ix, :]
        seq_y = data[end_ix:out_end_ix, :]
        X.append(seq_x)
        y.append(seq_y)
    return np.array(X), np.array(y)

# 5. Use n_steps_in = 24 and n_steps_out = 6
n_steps_in = 24
n_steps_out = 6
X, y = create_sequences(scaled_data, n_steps_in, n_steps_out)

# 6. Print the shapes
print(f"Shape of X (input sequences): {X.shape}")
print(f"Shape of y (output sequences): {y.shape}")

# Expected output:
# Shape of X (input sequences): (N_samples, 24, 3)
# Shape of y (output sequences): (N_samples, 6, 3)
# where N_samples is (len(df) - n_steps_in - n_steps_out + 1)
```

#### Assessment idea
1.  **Question:** You are preparing a multivariate time series dataset with two features: `Sensor_A_Reading` (range 0-1000) and `Sensor_B_Reading` (range 0-10). You decide to use `MinMaxScaler` with `feature_range=(0, 1)`. Explain why fitting the scaler on the *entire* dataset before splitting into train/test is a common mistake, and what the correct procedure should be.
    **Answer:** Fitting the `MinMaxScaler` (or any scaler) on the entire dataset before splitting into train/test is a common mistake known as **data leakage**. This happens because the scaling parameters (min and max values) are calculated using information from both the training and testing sets. When the scaler is applied to the test set, it implicitly uses knowledge about the test set's distribution, which would not be available in a real-world forecasting scenario. This leads to an overly optimistic evaluation of the model's performance on unseen data. The correct procedure is to:
    1.  Split the raw data into training and testing sets chronologically.
    2.  Fit the `MinMaxScaler` *only* on the training data.
    3.  Transform both the training and testing data using the *same* fitted scaler. This ensures that the test set is scaled using parameters learned solely from the training data, simulating a real-world deployment where future data is truly unseen.
2.  **Question:** You have a multivariate time series with 5 features and want to predict the next 12 timesteps for all 5 features using the past 48 timesteps. Describe the exact shape of your input `X` and output `y` NumPy arrays after applying the `create_sequences` function, assuming you have `N` total samples after windowing.
    **Answer:**
    *   **Input `X` shape:** `(N, 48, 5)`
        *   `N`: The number of generated input-output sequences (samples).
        *   `48`: The number of past timesteps (input sequence length, `n_steps_in`).
        *   `5`: The number of features in the multivariate time series.
    *   **Output `y` shape:** `(N, 12, 5)`
        *   `N`: The number of generated input-output sequences (must match `X`).
        *   `12`: The number of future timesteps to predict (output sequence length, `n_steps_out`).
        *   `5`: The number of features being predicted (in this case, all 5 features).

#### AI generation note
Produce a 12-minute interactive lab walkthrough using a Jupyter Notebook. Demonstrate the full data preparation pipeline: loading a CSV with multiple columns, handling a few simulated missing values with `ffill()`, applying `StandardScaler` (showing fit on train, transform on all), and then the `create_sequences` function with clear variable naming and print statements for shapes. Use a split-screen view showing code on the left and output/plots on the right. Include a mini-quiz after the scaling section asking about data leakage. Emphasize common mistakes like incorrect scaling or shape mismatch.

---

### Chapter 7.3 — Multivariate MLP Models for Forecasting

#### Learning objectives
*   Understand how to adapt Multilayer Perceptrons (MLPs) to process multivariate time series data.
*   Implement different strategies for structuring MLP inputs for multivariate forecasting (e.g., flattened input, `TimeDistributed` layers).
*   Design and train a basic MLP model to perform multi-step, multi-variate forecasting.
*   Identify the limitations and appropriate use cases for MLPs in multivariate time series.

#### Detailed lesson content
While Multilayer Perceptrons (MLPs) are often associated with static tabular data, they can be effectively adapted for time series forecasting, including multivariate scenarios, especially when the temporal dependencies are relatively short-term or can be captured by carefully crafted lagged features. The key is how we structure the input data to present the time series information to the MLP.

Recall that a standard MLP expects a 2D input: `(n_samples, n_features)`. For time series, our input sequences are typically 3D: `(n_samples, n_steps_in, n_features)`. To bridge this gap, the most common approach is to **flatten** the input sequence. If we have `n_steps_in` timesteps and `n_features` features, each input sample `(n_steps_in, n_features)` is reshaped into a single long vector of size `(n_steps_in * n_features)`. This flattened vector then becomes the input to the first dense layer of our MLP.

Consider a scenario where we want to predict the next 3 timesteps of 'Energy Consumption' and 'Temperature' using the past 24 hours of 'Energy Consumption', 'Temperature', and 'Humidity'.
1.  **Input Shape:** `(n_samples, 24, 3)` (24 timesteps, 3 features)
2.  **Flattening:** This `(24, 3)` sequence for each sample becomes a `(72,)` vector.
3.  **MLP Input:** The MLP will receive `(n_samples, 72)` as its input.

The MLP then learns a mapping from this flattened historical context to the desired future output. The output layer's structure depends on your forecasting task:
*   **Direct Multi-output Forecasting:** If you want to predict `n_steps_out` future timesteps for `n_output_features` variables, your output layer will have `n_steps_out * n_output_features` neurons, typically with a linear activation function. The model directly outputs a flattened vector of all future predictions, which you then reshape back into `(n_steps_out, n_output_features)`.
*   **Single-step, Multi-variable Forecasting:** If you only predict the *next* timestep for multiple variables, the output layer will have `n_output_features` neurons.

Let's walk through building a simple multivariate MLP using Keras for multi-step, multi-variable forecasting.

```python
import numpy as np
from tensorflow import keras
from tensorflow.keras import layers

# Assume X_train, y_train are already prepared and scaled
# X_train shape: (n_samples, n_steps_in, n_features)
# y_train shape: (n_samples, n_steps_out, n_output_features)

# Example dummy data for demonstration
n_samples = 1000
n_steps_in = 24
n_features = 3
n_steps_out = 6
n_output_features = 3 # Predicting all features

X_train = np.random.rand(n_samples, n_steps_in, n_features)
y_train = np.random.rand(n_samples, n_steps_out, n_output_features)

# Reshape input for MLP: flatten the (n_steps_in, n_features) part
# from (n_samples, n_steps_in, n_features) to (n_samples, n_steps_in * n_features)
X_train_reshaped = X_train.reshape((n_samples, n_steps_in * n_features))

# Reshape output for MLP: flatten the (n_steps_out, n_output_features) part
# from (n_samples, n_steps_out, n_output_features) to (n_samples, n_steps_out * n_output_features)
y_train_reshaped = y_train.reshape((n_samples, n_steps_out * n_output_features))

# Define the MLP model
model = keras.Sequential([
    layers.Input(shape=(n_steps_in * n_features,)), # Input is the flattened sequence
    layers.Dense(200, activation='relu'),
    layers.Dense(100, activation='relu'),
    layers.Dense(n_steps_out * n_output_features, activation='linear') # Output flattened predictions
])

model.compile(optimizer='adam', loss='mse')
model.summary()

# Train the model (using dummy data, so loss will be high)
# history = model.fit(X_train_reshaped, y_train_reshaped, epochs=50, verbose=0)

# To make a prediction and reshape it back:
# raw_prediction = model.predict(X_test_reshaped)
# reshaped_prediction = raw_prediction.reshape((n_test_samples, n_steps_out, n_output_features))
```

**Common Mistakes with MLPs for Time Series:**
1.  **Ignoring Temporal Order:** While flattening the input, the MLP itself doesn't inherently understand the temporal sequence. It treats `[X_t-2, X_t-1, X_t]` and `[X_t-1, X_t, X_t-2]` as different feature vectors, but it doesn't know that `X_t-2` occurred before `X_t-1`. This limitation means MLPs struggle with long-term dependencies and complex temporal patterns like seasonality or trends that span many timesteps.
2.  **Overfitting:** With a large number of input features (due to `n_steps_in * n_features`), MLPs can easily overfit, especially on noisy data or when `n_samples` is not sufficiently large. Regularization techniques like dropout or L1/L2 penalties become crucial.
3.  **Lack of Feature Locality:** MLPs treat all input features equally, regardless of their position in the sequence or their original variable. They don't have the inductive biases that CNNs (for local patterns) or LSTMs (for sequential dependencies) possess.

Despite these limitations, MLPs can be surprisingly effective for:
*   **Short-term forecasting:** When the relevant historical context is limited to a few recent timesteps.
*   **When temporal features are explicitly engineered:** If you create features like "day of week," "month," "lagged values at seasonal intervals," and feed them into the MLP, it can leverage these.
*   **As a baseline:** MLPs provide a strong baseline against which more complex deep learning models can be compared. If an MLP performs nearly as well as an LSTM on your problem, it suggests that the temporal dependencies might not be as complex as initially thought, or that your feature engineering is very effective.

In summary, MLPs offer a straightforward way to apply deep learning to multivariate time series by transforming the sequential data into a fixed-size feature vector. Their simplicity makes them a good starting point, but their lack of inherent temporal understanding often makes them less powerful than recurrent or convolutional networks for capturing complex, long-range time series dynamics.

#### Key concepts
*   **Flattening:** Reshaping a 3D time series input `(n_samples, n_steps_in, n_features)` into a 2D input `(n_samples, n_steps_in * n_features)` for an MLP.
*   **Direct Multi-output Forecasting:** A strategy where a single MLP predicts all future timesteps for all target variables simultaneously, often requiring reshaping the output.
*   **Dense Layer:** The fundamental building block of an MLP, performing a linear transformation followed by an activation function.
*   **Temporal Order Ignorance:** A limitation of MLPs where they do not inherently understand the sequential order of input features after flattening.
*   **Baseline Model:** A simple, often less sophisticated model used as a reference point to evaluate the performance of more complex models.

#### Hands-on activity
**Activity: Build and Train a Multivariate MLP**
You will build and train a simple MLP model using the prepared multivariate data from the previous activity (`X`, `y` arrays).

**Instructions:**
1.  Use the `X` and `y` arrays generated in Chapter 7.2's activity.
2.  Reshape `X` and `y` into the 2D format suitable for an MLP.
3.  Define a Keras Sequential MLP model with at least two `Dense` hidden layers and a final `Dense` output layer.
4.  Compile the model using `adam` optimizer and `mse` loss.
5.  Train the model for a few epochs (e.g., 50-100) using a validation split.
6.  Print the model summary and the training history (loss).

**Code Template:**
```python
import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from tensorflow import keras
from tensorflow.keras import layers
import matplotlib.pyplot as plt

# --- Re-generate data and sequences from Chapter 7.2 for continuity ---
data = {
    'Timestamp': pd.to_datetime(pd.date_range(start='2023-01-01', periods=1000, freq='H')),
    'Temperature (C)': [20 + 5*np.sin(i/10) + np.random.randn() for i in range(1000)],
    'Humidity (%)': [60 - 10*np.cos(i/15) + np.random.randn() for i in range(1000)],
    'Energy_Consumption (kWh)': [100 + 20*np.sin(i/5) + 5*np.random.randn() for i in range(1000)]
}
df = pd.DataFrame(data)
df['Temperature (C)'] = df['Temperature (C)'] + df['Energy_Consumption (kWh)'] * 0.1
df['Humidity (%)'] = df['Humidity (%)'] - df['Energy_Consumption (kWh)'] * 0.05
df.to_csv('energy_consumption.csv', index=False)

df = pd.read_csv('energy_consumption.csv')
df['Timestamp'] = pd.to_datetime(df['Timestamp'])
df = df.set_index('Timestamp')
df = df.dropna()

train_size = int(len(df) * 0.8)
train_data_values = df.iloc[:train_size].values
full_data_values = df.values

scaler = MinMaxScaler(feature_range=(0, 1))
scaler.fit(train_data_values)
scaled_data = scaler.transform(full_data_values)

def create_sequences(data, n_steps_in, n_steps_out):
    X, y = [], []
    for i in range(len(data)):
        end_ix = i + n_steps_in
        out_end_ix = end_ix + n_steps_out
        if out_end_ix > len(data):
            break
        seq_x = data[i:end_ix, :]
        seq_y = data[end_ix:out_end_ix, :]
        X.append(seq_x)
        y.append(seq_y)
    return np.array(X), np.array(y)

n_steps_in = 24
n_steps_out = 6
X, y = create_sequences(scaled_data, n_steps_in, n_steps_out)
# --- End of data generation ---

# Determine number of features and output features
n_features = X.shape[2]
n_output_features = y.shape[2]

# 1. Reshape X and y for MLP
X_reshaped = X.reshape((X.shape[0], n_steps_in * n_features))
y_reshaped = y.reshape((y.shape[0], n_steps_out * n_output_features))

print(f"Reshaped X shape: {X_reshaped.shape}")
print(f"Reshaped y shape: {y_reshaped.shape}")

# 2. Define the MLP model
model = keras.Sequential([
    layers.Input(shape=(n_steps_in * n_features,)),
    layers.Dense(200, activation='relu'),
    layers.Dense(100, activation='relu'),
    layers.Dense(n_steps_out * n_output_features, activation='linear')
])

# 3. Compile the model
model.compile(optimizer='adam', loss='mse')

# 4. Print model summary
model.summary()

# 5. Train the model
print("\nTraining MLP model...")
history = model.fit(X_reshaped, y_reshaped,
                    epochs=100,
                    verbose=0, # Set to 1 to see progress
                    validation_split=0.2, # Use 20% of data for validation
                    batch_size=32)

# 6. Plot training history
plt.figure(figsize=(10, 6))
plt.plot(history.history['loss'], label='Train Loss')
plt.plot(history.history['val_loss'], label='Validation Loss')
plt.title('MLP Model Loss')
plt.xlabel('Epoch')
plt.ylabel('Mean Squared Error')
plt.legend()
plt.grid(True)
plt.show()

print(f"\nFinal training loss: {history.history['loss'][-1]:.4f}")
print(f"Final validation loss: {history.history['val_loss'][-1]:.4f}")
```

#### Assessment idea
1.  **Question:** You are building an MLP for multivariate time series forecasting. Your input `X` has a shape of `(1000, 12, 4)` (1000 samples, 12 timesteps, 4 features) and your output `y` has a shape of `(1000, 3, 4)` (1000 samples, 3 predicted timesteps, 4 predicted features). What should be the `input_shape` for the first `Dense` layer of your MLP, and what should be the number of units in the final `Dense` output layer?
    **Answer:**
    *   **`input_shape` for the first `Dense` layer:** The input `X` needs to be flattened from `(12, 4)` to `(12 * 4,) = (48,)` for each sample. So, the `input_shape` for the first `Dense` layer should be `(48,)`.
    *   **Number of units in the final `Dense` output layer:** The output `y` needs to be predicted as a flattened vector. Its shape for each sample is `(3, 4)`, which flattens to `(3 * 4,) = (12,)`. Therefore, the final `Dense` output layer should have `12` units.
2.  **Question:** An MLP model is trained to forecast multivariate time series data. During evaluation, it performs well on very short-term predictions (1-2 timesteps ahead) but significantly degrades for longer-term predictions (10+ timesteps ahead), even though the same `n_steps_in` (input window) is used. Explain a primary reason for this degradation specific to MLPs and suggest a deep learning architecture that might mitigate this issue.
    **Answer:** A primary reason for the degradation of MLP performance on longer-term predictions is its **lack of inherent ability to model sequential dependencies over long ranges**. When the input is flattened, the MLP treats all `n_steps_in * n_features` values as independent features in a single vector. It loses the explicit temporal ordering information. While it can learn some patterns, it struggles to capture complex, long-range temporal dynamics, such as trends, seasonality, or lagged correlations that span many timesteps. For longer forecasts, these complex temporal patterns become more crucial, and the MLP's "snapshot" view of the input is insufficient. A deep learning architecture that might mitigate this issue is a **Recurrent Neural Network (RNN)**, specifically an **LSTM (Long Short-Term Memory)** or **GRU (Gated Recurrent Unit)**. These models are designed to process sequences directly, maintaining an internal state that allows them to remember and propagate information across many timesteps, making them much more effective at capturing long-term dependencies and sequential patterns.

#### AI generation note
Create a 10-minute live coding video in a Jupyter Notebook. Start with the `X_reshaped` and `y_reshaped` data from the previous activity. Walk through defining, compiling, and training a Keras `Sequential` MLP model for multivariate forecasting. Show the `model.summary()` output and explain the input and output layer shapes. Plot the training and validation loss curves. Include a common mistake segment demonstrating what happens if `X` is not flattened correctly (e.g., `Input(shape=(n_steps_in, n_features))`) and the resulting error. The tone should be hands-on and problem-solving, with clear explanations of each code block.

---

### Chapter 7.4 — Multivariate CNN Models for Forecasting

#### Learning objectives
*   Explain how 1D Convolutional Neural Networks (CNNs) can be applied to multivariate time series data.
*   Implement `Conv1D` layers to extract features across timesteps and across multiple input variables.
*   Design and train a CNN model for multi-step, multi-variate time series forecasting.
*   Discuss the advantages and disadvantages of CNNs compared to MLPs and RNNs for this task.

#### Detailed lesson content
While MLPs offer a basic approach to multivariate time series, they lack the ability to inherently understand the sequential nature of the data. Convolutional Neural Networks (CNNs), particularly 1D CNNs, offer a powerful alternative by leveraging their ability to detect local patterns and features across a sequence. For multivariate time series, CNNs can learn patterns not only within each individual time series but also across different variables simultaneously.

A 1D CNN operates by applying a filter (kernel) that slides over the input sequence. For a multivariate time series, our input data has the shape `(n_samples, n_steps_in, n_features)`. When a `Conv1D` layer receives this input, its filters can be thought of as "looking" at a small window of `kernel_size` timesteps across *all* `n_features` at once. This means a single filter learns to identify a specific pattern (e.g., a sudden drop in temperature coinciding with a rise in humidity) that occurs over a short duration, considering all relevant variables.

Let's break down how a `Conv1D` layer processes multivariate input:
*   **Input:** `(batch_size, timesteps, features)`
*   **Filter:** A `Conv1D` filter has a `kernel_size` (number of timesteps it spans) and `input_channels` (which will be `n_features`). It produces `output_channels` (number of filters).
*   **Operation:** The filter slides across the `timesteps` dimension. At each position, it performs a dot product with the `kernel_size * n_features` values in its current window. This allows it to capture spatial (temporal) relationships within the window and across features.
*   **Output:** The output of a `Conv1D` layer will have a shape like `(batch_size, new_timesteps, filters)`. The `new_timesteps` dimension depends on `kernel_size`, `strides`, and `padding`.

A typical CNN architecture for multivariate time series forecasting might involve:
1.  **`Conv1D` Layers:** Multiple `Conv1D` layers can be stacked to learn hierarchical features. Early layers might capture simple patterns (e.g., spikes, dips), while deeper layers combine these into more abstract representations.
2.  **`MaxPooling1D` (or `AveragePooling1D`):** These layers reduce the dimensionality of the feature maps, making the model more robust to small shifts in patterns and reducing computational load.
3.  **`Flatten` Layer:** After several convolutional and pooling layers, the resulting 3D feature maps are flattened into a 2D vector.
4.  **`Dense` Layers:** One or more `Dense` layers then map these extracted features to the desired output forecast.

Here's a Keras example:

```python
import numpy as np
from tensorflow import keras
from tensorflow.keras import layers

# Assume X_train, y_train are already prepared and scaled
# X_train shape: (n_samples, n_steps_in, n_features)
# y_train shape: (n_samples, n_steps_out, n_output_features)

# Example dummy data for demonstration
n_samples = 1000
n_steps_in = 24
n_features = 3
n_steps_out = 6
n_output_features = 3 # Predicting all features

X_train = np.random.rand(n_samples, n_steps_in, n_features)
y_train = np.random.rand(n_samples, n_steps_out, n_output_features)

# Reshape output for MLP-like final layer: flatten the (n_steps_out, n_output_features) part
y_train_reshaped = y_train.reshape((n_samples, n_steps_out * n_output_features))

# Define the CNN model
model = keras.Sequential([
    layers.Input(shape=(n_steps_in, n_features)), # Input is (timesteps, features)
    layers.Conv1D(filters=64, kernel_size=3, activation='relu', padding='same'),
    layers.MaxPooling1D(pool_size=2),
    layers.Conv1D(filters=128, kernel_size=3, activation='relu', padding='same'),
    layers.MaxPooling1D(pool_size=2),
    layers.Flatten(), # Flatten the output of the convolutional layers
    layers.Dense(100, activation='relu'),
    layers.Dense(n_steps_out * n_output_features, activation='linear') # Output flattened predictions
])

model.compile(optimizer='adam', loss='mse')
model.summary()

# Train the model (using dummy data)
# history = model.fit(X_train, y_train_reshaped, epochs=50, verbose=0)
```

**Advantages of CNNs for Multivariate Time Series:**
*   **Local Pattern Recognition:** CNNs excel at detecting local patterns (e.g., short-term trends, specific event signatures) across all features simultaneously.
*   **Parameter Sharing:** Filters are shared across different parts of the input sequence, which helps in learning robust features and reduces the number of parameters compared to fully connected layers.
*   **Parallelization:** Convolutional operations are highly parallelizable, leading to faster training times compared to RNNs, especially for long sequences.
*   **Robustness to Translation:** Pooling layers provide a degree of invariance to the exact timing of a pattern, meaning a pattern can be detected even if it occurs at slightly different offsets in the sequence.

**Disadvantages and Common Mistakes:**
1.  **Lack of Long-Term Memory:** While CNNs are good at local patterns, they don't inherently maintain a "memory" of past states like RNNs. To capture very long-term dependencies, you might need very deep CNNs or large `kernel_size` values, which can be computationally expensive and less effective than RNNs for true sequence memory.
2.  **Determining `kernel_size` and `pool_size`:** Choosing appropriate values for these hyperparameters is crucial. A `kernel_size` that is too small might miss important patterns, while one that is too large might overfit or capture irrelevant noise. `pool_size` affects the degree of downsampling.
3.  **Padding:** Using `padding='same'` helps maintain the output sequence length, which can be useful, but `padding='valid'` reduces the sequence length. Understanding this impact on subsequent layers is important.
4.  **Output Reshaping:** Similar to MLPs, if you're predicting multiple future timesteps for multiple variables, the final `Dense` layer will output a flattened vector, which needs to be reshaped back to `(n_samples, n_steps_out, n_output_features)` for evaluation.

CNNs are particularly well-suited for problems where specific local events or patterns across multiple variables are highly indicative of future behavior, such as anomaly detection or forecasting in systems with clear event-driven dynamics. They offer a powerful blend of efficiency and pattern recognition capabilities for multivariate time series.

#### Key concepts
*   **1D Convolutional Layer (`Conv1D`):** A neural network layer that applies filters across a single dimension (time) of an input sequence.
*   **Kernel (Filter):** A small learnable matrix that slides over the input data, performing dot products to detect specific patterns.
*   **Multivariate Feature Extraction:** The ability of `Conv1D` filters to learn patterns simultaneously across multiple features within a given time window.
*   **Pooling Layer (`MaxPooling1D`):** A layer that reduces the spatial dimensions (timesteps) of the input, making the model more robust and reducing computation.
*   **Parameter Sharing:** The concept that a single filter is applied across different parts of the input sequence, reducing the total number of learnable parameters.

#### Hands-on activity
**Activity: Build and Train a Multivariate CNN**
You will build and train a 1D CNN model using the prepared multivariate data (`X`, `y` arrays) from previous activities.

**Instructions:**
1.  Use the `X` and `y` arrays generated in Chapter 7.2's activity.
2.  Ensure `y` is reshaped to `(n_samples, n_steps_out * n_output_features)` for the final `Dense` layer.
3.  Define a Keras Sequential CNN model with at least two `Conv1D` layers, followed by `MaxPooling1D` layers, a `Flatten` layer, and then `Dense` layers for output.
4.  Compile the model using `adam` optimizer and `mse` loss.
5.  Train the model for a few epochs (e.g., 50-100) using a validation split.
6.  Print the model summary and the training history (loss).

**Code Template:**
```python
import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from tensorflow import keras
from tensorflow.keras import layers
import matplotlib.pyplot as plt

# --- Re-generate data and sequences from Chapter 7.2 for continuity ---
data = {
    'Timestamp': pd.to_datetime(pd.date_range(start='2023-01-01', periods=1000, freq='H')),
    'Temperature (C)': [20 + 5*np.sin(i/10) + np.random.randn() for i in range(1000)],
    'Humidity (%)': [60 - 10*np.cos(i/15) + np.random.randn() for i in range(1000)],
    'Energy_Consumption (kWh)': [100 + 20*np.sin(i/5) + 5*np.random.randn() for i in range(1000)]
}
df = pd.DataFrame(data)
df['Temperature (C)'] = df['Temperature (C)'] + df['Energy_Consumption (kWh)'] * 0.1
df['Humidity (%)'] = df['Humidity (%)'] - df['Energy_Consumption (kWh)'] * 0.05
df.to_csv('energy_consumption.csv', index=False)

df = pd.read_csv('energy_consumption.csv')
df['Timestamp'] = pd.to_datetime(df['Timestamp'])
df = df.set_index('Timestamp')
df = df.dropna()

train_size = int(len(df) * 0.8)
train_data_values = df.iloc[:train_size].values
full_data_values = df.values

scaler = MinMaxScaler(feature_range=(0, 1))
scaler.fit(train_data_values)
scaled_data = scaler.transform(full_data_values)

def create_sequences(data, n_steps_in, n_steps_out):
    X, y = [], []
    for i in range(len(data)):
        end_ix = i + n_steps_in
        out_end_ix = end_ix + n_steps_out
        if out_end_ix > len(data):
            break
        seq_x = data[i:end_ix, :]
        seq_y = data[end_ix:out_end_ix, :]
        X.append(seq_x)
        y.append(seq_y)
    return np.array(X), np.array(y)

n_steps_in = 24
n_steps_out = 6
X, y = create_sequences(scaled_data, n_steps_in, n_steps_out)
# --- End of data generation ---

# Determine number of features and output features
n_features = X.shape[2]
n_output_features = y.shape[2]

# Reshape y for the final Dense layer (X is already in correct 3D shape for Conv1D)
y_reshaped = y.reshape((y.shape[0], n_steps_out * n_output_features))

print(f"X shape for CNN input: {X.shape}")
print(f"y reshaped for CNN output layer: {y_reshaped.shape}")

# 1. Define the CNN model
model = keras.Sequential([
    layers.Input(shape=(n_steps_in, n_features)), # Input is (timesteps, features)
    layers.Conv1D(filters=64, kernel_size=3, activation='relu', padding='same'),
    layers.MaxPooling1D(pool_size=2),
    layers.Conv1D(filters=128, kernel_size=3, activation='relu', padding='same'),
    layers.MaxPooling1D(pool_size=2),
    layers.Flatten(), # Flatten the output of the convolutional layers
    layers.Dense(100, activation='relu'),
    layers.Dense(n_steps_out * n_output_features, activation='linear') # Output flattened predictions
])

# 2. Compile the model
model.compile(optimizer='adam', loss='mse')

# 3. Print model summary
model.summary()

# 4. Train the model
print("\nTraining CNN model...")
history = model.fit(X, y_reshaped,
                    epochs=100,
                    verbose=0, # Set to 1 to see progress
                    validation_split=0.2,
                    batch_size=32)

# 5. Plot training history
plt.figure(figsize=(10, 6))
plt.plot(history.history['loss'], label='Train Loss')
plt.plot(history.history['val_loss'], label='Validation Loss')
plt.title('CNN Model Loss')
plt.xlabel('Epoch')
plt.ylabel('Mean Squared Error')
plt.legend()
plt.grid(True)
plt.show()

print(f"\nFinal training loss: {history.history['loss'][-1]:.4f}")
print(f"Final validation loss: {history.history['val_loss'][-1]:.4f}")
```

#### Assessment idea
1.  **Question:** You are designing a `Conv1D` layer for a multivariate time series with 5 features and an input sequence length of 30 timesteps. If you use `filters=32`, `kernel_size=5`, `strides=1`, and `padding='valid'`, what will be the output shape of this `Conv1D` layer (excluding the batch dimension)? Explain how the `kernel_size` and `filters` parameters contribute to the layer's ability to process multivariate data.
    **Answer:**
    *   **Output Shape:** The input shape (excluding batch) is `(30, 5)`. With `kernel_size=5`, `strides=1`, and `padding='valid'`, the output sequence length will be `(input_length - kernel_size + 1) / strides = (30 - 5 + 1) / 1 = 26`. Since `filters=32`, the output shape will be `(26, 32)`.
    *   **Contribution of `kernel_size` and `filters`:**
        *   **`kernel_size` (e.g., 5):** This determines the temporal window over which the filter operates. For a multivariate input, a `kernel_size` of 5 means each filter will look at 5 consecutive timesteps across *all 5 features simultaneously*. This allows the CNN to learn local patterns and interactions within a short time frame that involve multiple variables (e.g., a specific sequence of changes in temperature, humidity, and pressure).
        *   **`filters` (e.g., 32):** This determines the number of distinct patterns the `Conv1D` layer can learn to detect. Each of the 32 filters will learn to recognize a different local feature or combination of features across the `kernel_size` window. For multivariate data, this means the layer can extract 32 different types of combined temporal-inter-variable patterns, enriching the representation of the input sequence.
2.  **Question:** Compare and contrast the strengths of a multivariate MLP versus a multivariate CNN for forecasting a time series where sudden, short-duration events across multiple sensors are highly predictive of a future outcome. Which model would likely perform better and why?
    **Answer:**
    *   **Multivariate MLP Strengths:** MLPs are good at learning complex non-linear mappings from a fixed-size input vector to an output. If the "sudden, short-duration events" can be adequately represented by specific lagged features and their interactions, an MLP *can* learn them, but it treats all input features equally without inherent understanding of their temporal or local relationships. It requires explicit feature engineering to capture such events effectively.
    *   **Multivariate CNN Strengths:** CNNs, particularly 1D CNNs, are inherently designed for local pattern recognition in sequential data. Their filters can slide across the time dimension and simultaneously consider multiple features within a small `kernel_size` window. This makes them exceptionally well-suited to detect "sudden, short-duration events" that manifest as specific patterns across multiple sensors. The parameter sharing allows them to detect these patterns regardless of their exact position in the input window.
    *   **Conclusion:** The **multivariate CNN would likely perform better** in this scenario. Its inductive bias for local pattern detection and its ability to learn joint features across multiple variables within a temporal window make it far more effective at identifying and leveraging the specific "sudden, short-duration events" that are described as highly predictive. The MLP would struggle to learn these localized, multi-feature patterns without extensive and potentially difficult manual feature engineering.

#### AI generation note
Design an 11-minute animated video that visually explains how `Conv1D` layers process multivariate time series. Start with a 3D input tensor `(timesteps, features)`. Show a `kernel_size=3` filter sliding across the input, highlighting how it interacts with all features at once within its window. Use color-coding to represent filter weights and activation. Illustrate the output of a `Conv1D` layer and then a `MaxPooling1D` layer. Use a specific example like detecting a "spike in pressure coinciding with a drop in temperature" across two features. Conclude with a visual comparison of CNN vs. MLP strengths for pattern detection.

---

### Chapter 7.5 — Multivariate LSTM/GRU Models for Forecasting

#### Learning objectives
*   Understand the architecture and operation of LSTM and GRU networks for multivariate time series.
*   Implement `LSTM` and `GRU` layers in Keras to process sequences with multiple features.
*   Design and train recurrent neural network models for multi-step, multi-variate forecasting.
*   Compare the strengths and weaknesses of LSTMs and GRUs in capturing long-term dependencies in multivariate data.

#### Detailed lesson content
While MLPs and CNNs have their place in multivariate time series forecasting, Recurrent Neural Networks (RNNs), specifically Long Short-Term Memory (LSTM) and Gated Recurrent Unit (GRU) networks, are often considered the go-to architecture for problems requiring the model to understand and remember long-term temporal dependencies. Their unique gating mechanisms allow them to selectively remember or forget information over extended sequences, which is crucial for complex time series.

For multivariate time series, the input to an LSTM or GRU layer is naturally a 3D tensor of shape `(batch_size, timesteps, features)`. Each timestep `t` provides a vector of `n_features` values. At each timestep, the RNN cell processes this feature vector, updates its internal state (for LSTMs, this includes both a hidden state `h_t` and a cell state `c_t`; for GRUs, just `h_t`), and produces an output `o_t`. This output, or the final hidden state, then feeds into subsequent layers or is used for prediction. The beauty of LSTMs and GRUs is their ability to learn how the `n_features` at the current timestep interact with the accumulated memory from past timesteps across all features.

Let's look at the structure of an LSTM/GRU model for multivariate forecasting:
1.  **`LSTM` or `GRU` Layer:** The core of the model. You can stack multiple recurrent layers (`return_sequences=True` for intermediate layers) to learn hierarchical temporal representations. The final recurrent layer might have `return_sequences=False` if you only need the last hidden state for prediction, or `return_sequences=True` if you're using a `TimeDistributed` layer for sequence-to-sequence prediction.
2.  **`Dense` Layer (or `TimeDistributed(Dense)`):**
    *   If `return_sequences=False` from the last recurrent layer, you'll get a 2D output `(batch_size, units)`, which can directly feed into a `Dense` layer for a single-step or flattened multi-step prediction.
    *   If `return_sequences=True`, the output is `(batch_size, timesteps, units)`. To predict a sequence of outputs (e.g., `n_steps_out` future timesteps), you can wrap a `Dense` layer with `TimeDistributed`. This applies the same `Dense` layer independently to each timestep in the output sequence, allowing for sequence-to-sequence forecasting. This is particularly powerful for multivariate multi-step predictions.

Here's a Keras example using an LSTM for multi-step, multi-variate forecasting:

```python
import numpy as np
from tensorflow import keras
from tensorflow.keras import layers

# Assume X_train, y_train are already prepared and scaled
# X_train shape: (n_samples, n_steps_in, n_features)
# y_train shape: (n_samples, n_steps_out, n_output_features)

# Example dummy data for demonstration
n_samples = 1000
n_steps_in = 24
n_features = 3
n_steps_out = 6
n_output_features = 3 # Predicting all features

X_train = np.random.rand(n_samples, n_steps_in, n_features)
y_train = np.random.rand(n_samples, n_steps_out, n_output_features)

# Define the LSTM model
model = keras.Sequential([
    layers.Input(shape=(n_steps_in, n_features)), # Input is (timesteps, features)
    layers.LSTM(100, activation='relu', return_sequences=True), # Return sequences for stacking LSTMs
    layers.LSTM(50, activation='relu', return_sequences=False), # Only last output needed for final Dense layer
    layers.Dense(n_steps_out * n_output_features, activation='linear') # Output flattened predictions
])

# For sequence-to-sequence prediction, if you want to predict n_steps_out timesteps,
# each with n_output_features, you'd typically use TimeDistributed Dense:
# model_seq2seq = keras.Sequential([
#     layers.Input(shape=(n_steps_in, n_features)),
#     layers.LSTM(100, activation='relu', return_sequences=True), # Must return sequences
#     layers.TimeDistributed(layers.Dense(n_output_features, activation='linear')) # Apply Dense to each timestep
# ])
# In this case, y_train would remain (n_samples, n_steps_out, n_output_features)

model.compile(optimizer='adam', loss='mse')
model.summary()

# Train the model (using dummy data)
# history = model.fit(X_train, y_train.reshape((n_samples, n_steps_out * n_output_features)), epochs=50, verbose=0)
```

**LSTMs vs. GRUs:**
*   **LSTMs:** Have three gates (input, forget, output) and a cell state. This complex structure allows them to maintain long-term memory very effectively, making them robust to vanishing/exploding gradients. They are generally more powerful for very long sequences and complex dependencies.
*   **GRUs:** A simplified version of LSTMs with two gates (reset, update) and no separate cell state. They are typically faster to train and have fewer parameters than LSTMs, while often achieving comparable performance on many tasks. They are a good choice when computational resources are a concern or when you need a slightly simpler model.

**Advantages of LSTMs/GRUs for Multivariate Time Series:**
*   **Long-Term Dependency Capture:** Their gating mechanisms enable them to learn and remember patterns over extended periods, crucial for capturing seasonality, trends, and other long-range dynamics in multivariate data.
*   **Sequential Information Processing:** They inherently process data sequentially, making them ideal for understanding how the current state of multiple variables depends on their past states.
*   **Feature Interaction:** They can learn complex non-linear interactions between different features at each timestep and how these interactions evolve over time.

**Common Mistakes and Considerations:**
1.  **Vanishing/Exploding Gradients:** While LSTMs/GRUs mitigate this, deep stacks of recurrent layers can still suffer. Techniques like gradient clipping are often necessary.
2.  **Computational Cost:** RNNs are generally slower to train than CNNs or MLPs, especially for very long sequences, due to their sequential nature.
3.  **Hyperparameter Tuning:** Choosing the right number of units, layers, and `return_sequences` settings is critical and often requires experimentation.
4.  **`TimeDistributed` Layer Usage:** For sequence-to-sequence predictions (where `y` is also a sequence), `TimeDistributed(Dense(...))` is often the correct approach, ensuring that the `Dense` layer is applied independently to each output timestep. If `return_sequences=False` on the last LSTM, and you predict a flattened output, then `TimeDistributed` is not used.

LSTMs and GRUs are indispensable tools for multivariate time series forecasting, particularly when the temporal relationships are complex and span significant durations. They provide a robust framework for modeling the intricate dynamics of interdependent variables over time.

#### Key concepts
*   **Recurrent Neural Network (RNN):** A class of neural networks designed to process sequential data by maintaining an internal state (memory).
*   **Long Short-Term Memory (LSTM):** A type of RNN with internal gates (input, forget, output) and a cell state that allows it to learn long-term dependencies.
*   **Gated Recurrent Unit (GRU):** A simplified version of LSTM with fewer gates (reset, update) and no separate cell state, often offering a good balance of performance and computational efficiency.
*   **`return_sequences`:** A Keras parameter for RNN layers that determines whether to return the full sequence of outputs or only the last output.
*   **`TimeDistributed` Layer:** A Keras wrapper that applies a layer (e.g., `Dense`) to every timestep of an input sequence, useful for sequence-to-sequence tasks.
*   **Internal State/Memory:** The mechanism by which RNNs retain information from previous timesteps to inform current and future predictions.

#### Hands-on activity
**Activity: Build and Train a Multivariate LSTM Model**
You will build and train a basic LSTM model for multivariate time series forecasting using the prepared `X` and `y` arrays.

**Instructions:**
1.  Use the `X` and `y` arrays generated in Chapter 7.2's activity.
2.  Ensure `y` is reshaped to `(n_samples, n_steps_out * n_output_features)` if using a single `Dense` output layer, or kept as `(n_samples, n_steps_out, n_output_features)` if using `TimeDistributed(Dense)`. For this activity, let's use the single `Dense` output.
3.  Define a Keras Sequential model with at least one `LSTM` layer, followed by a `Dense` output layer.
4.  Compile the model using `adam` optimizer and `mse` loss.
5.  Train the model for a few epochs (e.g., 50-100) using a validation split.
6.  Print the model summary and the training history (loss).

**Code Template:**
```python
import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from tensorflow import keras
from tensorflow.keras import layers
import matplotlib.pyplot as plt

# --- Re-generate data and sequences from Chapter 7.2 for continuity ---
data = {
    'Timestamp': pd.to_datetime(pd.date_range(start='2023-01-01', periods=1000, freq='H')),
    'Temperature (C)': [20 + 5*np.sin(i/10) + np.random.randn() for i in range(1000)],
    'Humidity (%)': [60 - 10*np.cos(i/15) + np.random.randn() for i in range(1000)],
    'Energy_Consumption (kWh)': [100 + 20*np.sin(i/5) + 5*np.random.randn() for i in range(1000)]
}
df = pd.DataFrame(data)
df['Temperature (C)'] = df['Temperature (C)'] + df['Energy_Consumption (kWh)'] * 0.1
df['Humidity (%)'] = df['Humidity (%)'] - df['Energy_Consumption (kWh)'] * 0.05
df.to_csv('energy_consumption.csv', index=False)

df = pd.read_csv('energy_consumption.csv')
df['Timestamp'] = pd.to_datetime(df['Timestamp'])
df = df.set_index('Timestamp')
df = df.dropna()

train_size = int(len(df) * 0.8)
train_data_values = df.iloc[:train_size].values
full_data_values = df.values

scaler = MinMaxScaler(feature_range=(0, 1))
scaler.fit(train_data_values)
scaled_data = scaler.transform(full_data_values)

def create_sequences(data, n_steps_in, n_steps_out):
    X, y = [], []
    for i in range(len(data)):
        end_ix = i + n_steps_in
        out_end_ix = end_ix + n_steps_out
        if out_end_ix > len(data):
            break
        seq_x = data[i:end_ix, :]
        seq_y = data[end_ix:out_end_ix, :]
        X.append(seq_x)
        y.append(seq_y)
    return np.array(X), np.array(y)

n_steps_in = 24
n_steps_out = 6
X, y = create_sequences(scaled_data, n_steps_in, n_steps_out)
# --- End of data generation ---

# Determine number of features and output features
n_features = X.shape[2]
n_output_features = y.shape[2]

# Reshape y for the final Dense layer
y_reshaped = y.reshape((y.shape[0], n_steps_out * n_output_features))

print(f"X shape for LSTM input: {X.shape}")
print(f"y reshaped for LSTM output layer: {y_reshaped.shape}")

# 1. Define the LSTM model
model = keras.Sequential([
    layers.Input(shape=(n_steps_in, n_features)), # Input is (timesteps, features)
    layers.LSTM(100, activation='relu'), # LSTM layer, default return_sequences=False
    layers.Dense(n_steps_out * n_output_features, activation='linear') # Output flattened predictions
])

# 2. Compile the model
model.compile(optimizer='adam', loss='mse')

# 3. Print model summary
model.summary()

# 4. Train the model
print("\nTraining LSTM model...")
history = model.fit(X, y_reshaped,
                    epochs=100,
                    verbose=0, # Set to 1 to see progress
                    validation_split=0.2,
                    batch_size=32)

# 5. Plot training history
plt.figure(figsize=(10, 6))
plt.plot(history.history['loss'], label='Train Loss')
plt.plot(history.history['val_loss'], label='Validation Loss')
plt.title('LSTM Model Loss')
plt.xlabel('Epoch')
plt.ylabel('Mean Squared Error')
plt.legend()
plt.grid(True)
plt.show()

print(f"\nFinal training loss: {history.history['loss'][-1]:.4f}")
print(f"Final validation loss: {history.history['val_loss'][-1]:.4f}")
```

#### Assessment idea
1.  **Question:** You are building an LSTM model for multivariate time series forecasting where you need to predict a sequence of 5 future timesteps for 3 different variables. Your input `X` has a shape of `(N, 20, 4)` (N samples, 20 input timesteps, 4 features). Describe two different ways to structure the output layers of your Keras model to achieve this multi-step, multi-variate prediction, including the required `return_sequences` setting for the final `LSTM` layer in each case.
    **Answer:**
    *   **Method 1: Single `Dense` layer with flattened output:**
        *   The final `LSTM` layer should have `return_sequences=False`. This means it will output only the hidden state of the last timestep, which will have a shape of `(N, units)`.
        *   This output is then fed into a single `Dense` layer with `5 * 3 = 15` units (5 predicted timesteps * 3 predicted variables). The activation would typically be `linear`.
        *   The model's output shape would be `(N, 15)`, which would then need to be reshaped externally to `(N, 5, 3)` for evaluation.
    *   **Method 2: `TimeDistributed(Dense)` layer:**
        *   The final `LSTM` layer *must* have `return_sequences=True`. This means it will output a sequence of hidden states, with a shape of `(N, 20, units)`.
        *   This sequence is then fed into a `TimeDistributed(Dense(3, activation='linear'))` layer. The `TimeDistributed` wrapper applies the `Dense` layer independently to each of the 20 timesteps of the LSTM's output.
        *   The model's output shape would be `(N, 20, 3)`. If you only need the *next* 5 timesteps, you would need to slice this output (e.g., `output[:, -5:, :]`) or adjust your `y` target accordingly during training. More commonly, if you want to predict exactly `n_steps_out` timesteps, the `n_steps_in` and `n_steps_out` need to be aligned or an `Encoder-Decoder` architecture is used. For a direct sequence-to-sequence prediction, the output length of the `TimeDistributed` layer would match the input sequence length of the LSTM, so if you want to predict `n_steps_out` values, you'd typically need to design an Encoder-Decoder or use a custom output layer. 
        *   **Refined Method 2: `TimeDistributed(Dense)` with Encoder-Decoder (more appropriate for `n_steps_out != n_steps_in`):** An `Encoder-Decoder` architecture (covered in the next chapter) is typically used for `n_steps_in` to `n_steps_out` sequence mapping. For this method, the encoder LSTM would have `return_sequences=False` to pass its final state to a decoder LSTM. The decoder LSTM would then generate `n_steps_out` timesteps, each passed through a `TimeDistributed(Dense(3, activation='linear'))` layer. This is the most flexible way to get `(N, 5, 3)` output.
        *   Given the context of *just* output layers, Method 1 is the most direct application for a simple `Sequential` model predicting `n_steps_out` from `n_steps_in`. Method 2 with `return_sequences=True` and `TimeDistributed` would predict `n_steps_in` timesteps, not `n_steps_out`.
        *   *Let's stick to the simplest interpretation for this chapter, implying a direct mapping or using the final state of the LSTM to predict the future sequence.*
        *   **Revised Method 2 (more direct for a single LSTM):** If the problem implies predicting the *next* 5 timesteps *after* the input sequence, and the LSTM is the *only* sequence processing layer, then the `return_sequences=True` approach with `TimeDistributed` would predict 20 timesteps. To get exactly 5, you'd need to either truncate the input or use a more complex setup. For a simple Keras `Sequential` model predicting `n_steps_out` from `n_steps_in`, Method 1 is the most common. Let's re-evaluate the question to ensure it doesn't imply an encoder-decoder. "Describe two different ways to structure the output layers... to achieve this multi-step, multi-variate prediction".
        *   Okay, let's consider a common pattern:
            1.  **Flattened Dense Output:** `LSTM(..., return_sequences=False) -> Dense(n_steps_out * n_output_features)`
            2.  **RepeatVector + LSTM Decoder (simple Seq2Seq):** `LSTM(..., return_sequences=False) -> RepeatVector(n_steps_out) -> LSTM(..., return_sequences=True) -> TimeDistributed(Dense(n_output_features))`
        *   The second method is more advanced, but it *is* a way to structure the output layers.

    **Revised Answer for Q1:**
    *   **Method 1: Single `Dense` layer with flattened output:**
        *   The final `LSTM` layer should have `return_sequences=False`. This will output the final hidden state of the LSTM, which has a shape of `(N, units)`.
        *   This output is then fed into a single `Dense` layer. The number of units in this `Dense` layer should be `n_steps_out * n_output_features = 5 * 3 = 15`. The activation function would typically be `linear`.
        *   The model's output shape would be `(N, 15)`, which would then need to be reshaped externally to `(N, 5, 3)` for evaluation.
    *   **Method 2: `RepeatVector` and a `TimeDistributed(Dense)` decoder:**
        *   The initial `LSTM` (encoder) layer should have `return_sequences=False`. Its final hidden state `(N, units)` captures the summary of the input sequence.
        *   This output is then passed to a `RepeatVector(n_steps_out)` layer, which duplicates the hidden state `n_steps_out` times, creating an input of shape `(N, n_steps_out, units)`.
        *   This repeated vector is then fed into another `LSTM` layer (decoder) with `return_sequences=True`, producing an output sequence of shape `(N, n_steps_out, decoder_units)`.
        *   Finally, this sequence is passed through a `TimeDistributed(Dense(n_output_features, activation='linear'))` layer. This applies a `Dense` layer independently to each of the `n_steps_out` timesteps, resulting in an output shape of `(N, n_steps_out, n_output_features) = (N, 5, 3)`. This method explicitly generates a sequence of predictions.

2.  **Question:** In a scenario where you are forecasting energy consumption, temperature, and humidity for the next 24 hours based on the past 7 days of data, and you observe strong daily and weekly seasonality, would an MLP, CNN, or LSTM/GRU model be generally most suitable? Justify your choice.
    **Answer:** An **LSTM or GRU model** would generally be most suitable.
    *   **Justification:** The problem involves forecasting for the next 24 hours (multi-step) across multiple interdependent variables (multivariate) and explicitly mentions strong daily and weekly seasonality.
        *   **MLPs** struggle with long-term dependencies and seasonality because they flatten the input, losing explicit temporal ordering. They would require extensive manual feature engineering (e.g., creating lagged features for 7 days ago, day-of-week indicators) to capture seasonality, which can be brittle.
        *   **CNNs** are excellent at detecting local patterns, but their "memory" is limited by the `kernel_size` and stacking depth. While they can capture daily patterns with appropriate `kernel_size`, capturing weekly seasonality (7 * 24 = 168 timesteps) would require very large kernels or deep stacks, which is inefficient and less effective than RNNs for true long-range temporal memory.
        *   **LSTMs/GRUs** are specifically designed to capture long-term dependencies. Their gating mechanisms allow them to maintain and update an internal state over many timesteps, making them highly effective at learning and exploiting patterns like daily and weekly seasonality that span hundreds of timesteps. They can inherently learn to remember relevant information from days or weeks ago without explicit feature engineering, making them robust for this type of problem.

#### AI generation note
Create a 12-minute live coding video in a Jupyter Notebook. Start with the `X` and `y_reshaped` data. Walk through defining, compiling, and training a Keras `Sequential` model with one or two `LSTM` layers followed by a `Dense` output. Show `model.summary()`. Then, introduce a second model using `TimeDistributed(Dense)` (requiring `return_sequences=True` for the LSTM) and explain when this is appropriate. Plot the training/validation loss for both models. Include a segment on gradient clipping as a safety note for training LSTMs. The visual style should be split-screen, showing code and output.

---

### Chapter 7.6 — Advanced Architectures for Multivariate Forecasting: Encoder-Decoder with Attention

#### Learning objectives
*   Understand the fundamental concept of the Encoder-Decoder architecture for sequence-to-sequence forecasting.
*   Explain how attention mechanisms enhance Encoder-Decoder models by selectively focusing on relevant input timesteps.
*   Implement an Encoder-Decoder model with an attention mechanism using Keras for multivariate time series forecasting.
*   Evaluate the benefits of attention in interpreting model decisions and improving forecast accuracy.

#### Detailed lesson content
While standalone LSTMs and GRUs are powerful, they can struggle with very long input sequences or when the output sequence length is significantly different from the input sequence length. This is where the **Encoder-Decoder architecture** shines. It's a sequence-to-sequence (Seq2Seq) model specifically designed to map an input sequence of arbitrary length to an output sequence of arbitrary length, making it ideal for multi-step time series forecasting where `n_steps_in` often differs from `n_steps_out`.

The Encoder-Decoder architecture consists of two main components:
1.  **Encoder:** Typically an LSTM or GRU network that processes the entire input sequence `(n_steps_in, n_features)`. Its role is to read the input sequence and compress all the relevant information into a fixed-size context vector (the final hidden state and cell state of the encoder). This context vector acts as a summary of the input sequence. The encoder usually has `return_sequences=False` for its final layer to produce this single context vector.
2.  **Decoder:** Another LSTM or GRU network that takes the context vector from the encoder as its initial state. The decoder's role is to generate the output sequence `(n_steps_out, n_output_features)` one timestep at a time. It can be designed to take its own previous output as input for the next prediction (teacher forcing during training, or self-feeding during inference). For multivariate forecasting, each output timestep will consist of `n_output_features` values. The decoder typically has `return_sequences=True` for its main recurrent layer, followed by a `TimeDistributed(Dense(...))` layer to output the features for each predicted timestep.

The challenge with a basic Encoder-Decoder is that the fixed-size context vector might become a bottleneck, especially for very long input sequences. It might struggle to retain all critical information. This is where **Attention Mechanisms** come into play.

**Attention** allows the decoder to "look back" at the entire input sequence (or rather, the hidden states produced by the encoder at each timestep) at each step of its output generation. Instead of relying solely on a single context vector, the attention mechanism calculates an alignment score between the current decoder state and each of the encoder's hidden states. These scores are then used to create a weighted sum of the encoder's hidden states, forming a dynamic context vector that is specific to the current decoding step. This dynamic context vector is then used by the decoder to make its prediction.

**Benefits of Attention:**
*   **Improved Long-Term Dependency Handling:** By allowing the decoder to focus on relevant parts of the input sequence, attention mitigates the information bottleneck of the fixed-size context vector.
*   **Interpretability:** The attention weights themselves can be visualized. Higher weights indicate which parts of the input sequence (and thus which past timesteps/features) the model considered most important for generating a particular future prediction. This offers valuable insights into the model's decision-making process.
*   **Enhanced Accuracy:** By providing a more targeted context, attention often leads to more accurate forecasts, especially for complex, non-linear time series with varying dependencies.

Implementing an Encoder-Decoder with attention in Keras involves a bit more complexity, often requiring the Keras Functional API. A common approach uses `AdditiveAttention` (Bahdanau-style) or `DotProductAttention` (Luong-style).

```python
import numpy as np
from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.models import Model

# Assume X_train, y_train are already prepared and scaled
# X_train shape: (n_samples, n_steps_in, n_features)
# y_train shape: (n_samples, n_steps_out, n_output_features)

# Example dummy data for demonstration
n_samples = 1000
n_steps_in = 24
n_features = 3
n_steps_out = 6
n_output_features = 3

X_train = np.random.rand(n_samples, n_steps_in, n_features)
y_train = np.random.rand(n_samples, n_steps_out, n_output_features)

# --- Encoder ---
encoder_inputs = keras.Input(shape=(n_steps_in, n_features))
encoder_lstm = layers.LSTM(128, return_sequences=True, return_state=True)
encoder_outputs, state_h, state_c = encoder_lstm(encoder_inputs)
encoder_states = [state_h, state_c] # Encoder's final states

# --- Decoder ---
decoder_inputs = keras.Input(shape=(n_steps_out, n_output_features)) # Decoder input for teacher forcing
decoder_lstm = layers.LSTM(128, return_sequences=True, return_state=True)
decoder_outputs, _, _ = decoder_lstm(decoder_inputs, initial_state=encoder_states)

# --- Attention ---
# Attention layer takes two inputs: query (decoder_outputs) and value (encoder_outputs)
attention = layers.AdditiveAttention()([decoder_outputs, encoder_outputs])
# Concatenate attention output with decoder output
decoder_concat_input = layers.Concatenate(axis=-1)([decoder_outputs, attention])

# --- Output Layer ---
decoder_dense = layers.TimeDistributed(layers.Dense(n_output_features, activation='linear'))
output = decoder_dense(decoder_concat_input)

# Define the model
model = Model([encoder_inputs, decoder_inputs], output)
model.compile(optimizer='adam', loss='mse')
model.summary()

# For training, you need to provide a decoder_input sequence.
# This is usually the true output sequence shifted by one timestep (teacher forcing).
# For simplicity in this example, we'll use y_train directly as decoder_input,
# but in a real scenario, you'd prepare a shifted version.
# history = model.fit([X_train, y_train], y_train, epochs=50, verbose=0)
```
**Common Mistakes:**
1.  **Teacher Forcing:** During training, the decoder typically receives the *actual* previous output as input for the next step (teacher forcing). During inference, it must use its *own predicted* previous output. This difference needs careful handling.
2.  **Input/Output Shapes:** The functional API requires precise shape management. Ensure all layers receive inputs of the correct dimensions.
3.  **Attention Implementation:** Keras's `AdditiveAttention` and `DotProductAttention` layers simplify the process, but understanding how to correctly feed `query` and `value` (decoder outputs and encoder outputs) is key.

Encoder-Decoder models with attention represent the state-of-the-art for many sequence-to-sequence tasks, including complex multivariate time series forecasting, offering both superior performance and a degree of interpretability.

#### Key concepts
*   **Encoder-Decoder Architecture (Seq2Seq):** A neural network design consisting of an encoder (to summarize input) and a decoder (to generate output), used for mapping input sequences to output sequences.
*   **Context Vector:** The fixed-size representation of the input sequence generated by the encoder, summarizing its information.
*   **Attention Mechanism:** A technique that allows the decoder to dynamically weigh and focus on different parts of the encoder's output sequence when generating each step of its own output.
*   **Attention Weights:** Scores calculated by the attention mechanism, indicating the relevance of each encoder timestep to the current decoder timestep.
*   **Teacher Forcing:** A training technique for sequence generation models where the actual target output from the previous timestep is fed as input to the decoder for the current timestep.
*   **Functional API (Keras):** A way to define complex Keras models with multiple inputs, outputs, and shared layers, necessary for attention mechanisms.

#### Hands-on activity
**Activity: Implement a Basic Encoder-Decoder Model with Attention**
You will build a simplified Encoder-Decoder model with an attention mechanism using Keras's Functional API.

**Instructions:**
1.  Use the `X` and `y` arrays generated in Chapter 7.2's activity.
2.  Define the encoder using an `LSTM` layer.
3.  Define the decoder using another `LSTM` layer, initialized with the encoder's states.
4.  Implement `layers.AdditiveAttention` to connect the decoder's output to the encoder's output.
5.  Concatenate the attention output with the decoder's output and pass it through a `TimeDistributed(Dense)` layer.
6.  Define the model using `Model([encoder_inputs, decoder_inputs], output)`.
7.  Compile the model using `adam` optimizer and `mse` loss.
8.  Print the model summary. (Training this model effectively requires careful handling of `decoder_inputs` for teacher forcing, which is beyond the scope of this basic activity, but we'll set up the architecture.)

**Code Template:**
```python
import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from tensorflow import keras
from tensorflow.keras import layers
from tensorflow.keras.models import Model
import matplotlib.pyplot as plt

# --- Re-generate data and sequences from Chapter 7.2 for continuity ---
data = {
    'Timestamp': pd.to_datetime(pd.date_range(start='2023-01-01', periods=1000, freq='H')),
    'Temperature (C)': [20 + 5*np.sin(i/10) + np.random.randn() for i in range(1000)],
    'Humidity (%)': [60 - 10*np.cos(i/15) + np.random.randn() for i in range(1000)],
    'Energy_Consumption (kWh)': [100 + 20*np.sin(i/5) + 5*np.random.randn() for i in range(1000)]
}
df = pd.DataFrame(data)
df['Temperature (C)'] = df['Temperature (C)'] + df['Energy_Consumption (kWh)'] * 0.1
df['Humidity (%)'] = df['Humidity (%)'] - df['Energy_Consumption (kWh)'] * 0.05
df.to_csv('energy_consumption.csv', index=False)

df = pd.read_csv('energy_consumption.csv')
df['Timestamp'] = pd.to_datetime(df['Timestamp'])
df = df.set_index('Timestamp')
df = df.dropna()

train_size = int(len(df) * 0.8)
train_data_values = df.iloc[:train_size].values
full_data_values = df.values

scaler = MinMaxScaler(feature_range=(0, 1))
scaler.fit(train_data_values)
scaled_data = scaler.transform(full_data_values)

def create_sequences(data, n_steps_in, n_steps_out):
    X, y = [], []
    for i in range(len(data)):
        end_ix = i + n_steps_in
        out_end_ix = end_ix + n_steps_out
        if out_end_ix > len(data):
            break
        seq_x = data[i:end_ix, :]
        seq_y = data[end_ix:out_end_ix, :]
        X.append(seq_x)
        y.append(seq_y)
    return np.array(X), np.array(y)

n_steps_in = 24
n_steps_out = 6
X, y = create_sequences(scaled_data, n_steps_in, n_steps_out)
# --- End of data generation ---

# Determine number of features and output features
n_features = X.shape[2]
n_output_features = y.shape[2]

# --- 1. Define Encoder ---
encoder_inputs = keras.Input(shape=(n_steps_in, n_features))
encoder_lstm = layers.LSTM(128, return_sequences=True, return_state=True)
encoder_outputs, state_h, state_c = encoder_lstm(encoder_inputs)
encoder_states = [state_h, state_c] # Encoder's final states will initialize decoder

# --- 2. Define Decoder ---
# Decoder input for teacher forcing (shifted target sequence)
# For this basic setup, we'll use y as the decoder_input, but in real training,
# it would be the target sequence shifted by one timestep.
decoder_inputs = keras.Input(shape=(n_steps_out, n_output_features))
decoder_lstm = layers.LSTM(128, return_sequences=True, return_state=True)
decoder_outputs, _, _ = decoder_lstm(decoder_inputs, initial_state=encoder_states)

# --- 3. Implement Attention ---
# Attention layer takes two inputs: query (decoder_outputs) and value (encoder_outputs)
attention = layers.AdditiveAttention()([decoder_outputs, encoder_outputs])
# Concatenate attention output with decoder output
decoder_concat_input = layers.Concatenate(axis=-1)([decoder_outputs, attention])

# --- 4. Output Layer ---
decoder_dense = layers.TimeDistributed(layers.Dense(n_output_features, activation='linear'))
output = decoder_dense(decoder_concat_input)

# --- 5. Define the full model ---
model = Model([encoder_inputs, decoder_inputs], output)

# --- 6. Compile the model ---
model.compile(optimizer='adam', loss='mse')

# --- 7. Print model summary ---
model.summary()

print("\nNote: Training this model requires a carefully prepared decoder_input (e.g., shifted y_train).")
print("For this activity, we've focused on building the architecture.")
# To train, you would typically use something like:
# history = model.fit([X, y], y, epochs=50, verbose=0, validation_split=0.2, batch_size=32)
```

#### Assessment idea
1.  **Question:** Explain the primary limitation of a standard Encoder-Decoder model (without attention) when dealing with very long input sequences, and how an attention mechanism specifically addresses this limitation.
    **Answer:** The primary limitation of a standard Encoder-Decoder model without attention is the **information bottleneck** created by the fixed-size context vector. The encoder must compress all the relevant information from the entire input sequence into this single vector. For very long input sequences, it becomes increasingly difficult for this fixed-size vector to retain all the crucial details and long-range dependencies, leading to information loss and degraded performance, especially for the later parts of the output sequence.
    An attention mechanism addresses this by allowing the decoder to **dynamically access and weigh different parts of the encoder's output sequence** (the encoder's hidden states at each timestep) at every step of its own output generation. Instead of relying on a single, static context vector, attention creates a *dynamic* context vector for each decoding step. This means the decoder can "focus" on the most relevant input timesteps for generating the current output, effectively bypassing the information bottleneck and enabling the model to handle much longer input sequences more effectively.
2.  **Question:** You have built an Encoder-Decoder model with an attention mechanism for forecasting multivariate sensor data. After training, you visualize the attention weights and notice that for predicting a future temperature spike, the model consistently assigns high attention weights to past readings of both temperature and humidity from several hours ago, rather than just the most recent values. What does this suggest about the model's learning and the underlying data?
    **Answer:** This observation suggests several important insights:
    *   **Model's Learning:** The attention mechanism has successfully learned to identify and leverage **long-range, multi-variable dependencies** in the data. It's not simply relying on immediate past values but has discovered that a combination of temperature and humidity from several hours prior is a strong predictor for future temperature spikes. This demonstrates the power of attention in capturing complex, non-linear relationships over time.
    *   **Underlying Data:** The data itself likely contains **meaningful lagged correlations and inter-variable influences**. For example, perhaps a sustained period of high humidity combined with moderately rising temperatures (several hours ago) consistently precedes a rapid temperature spike due to specific environmental or system dynamics. The model has implicitly discovered this complex pattern, which would be very difficult to capture with simpler models like MLPs or even basic LSTMs without attention. It highlights that the "memory" of past states across multiple features is crucial for accurate forecasting in this specific scenario.

#### AI generation note
Create a 15-minute animated video with interactive elements. Begin by visually explaining the Encoder-Decoder concept with two distinct "machines" (encoder and decoder) and a "summary message" (context vector). Then, introduce attention as a "spotlight" the decoder can shine back on the encoder's "notes" (hidden states). Use a data flow diagram to illustrate the Keras Functional API structure, showing inputs, encoder, decoder, attention, concatenation, and output. Use a simplified multivariate example (e.g., predicting two future values from three past values) to visually trace the data flow. Include an interactive element where the learner drags a "spotlight" to highlight which input timesteps are most relevant for a specific output prediction, demonstrating attention.

---

### Chapter 7.7 — Evaluating and Interpreting Multivariate Forecasts

#### Learning objectives
*   Select appropriate evaluation metrics for multivariate time series forecasting tasks.
*   Implement methods for calculating and aggregating performance metrics across multiple predicted variables.
*   Visualize multivariate forecasts effectively to understand model performance and identify areas for improvement.
*   Discuss techniques for interpreting deep learning models to gain insights into feature importance and temporal contributions.

#### Detailed lesson content
After investing significant effort in building sophisticated deep learning models for multivariate time series forecasting, the next critical step is to rigorously evaluate their performance and interpret their predictions. Unlike univariate forecasting where a single metric often suffices, multivariate forecasting requires a more comprehensive approach to assessment.

**Evaluation Metrics for Multivariate Forecasts:**
For multivariate forecasting, where you predict `n_output_features` variables, common metrics like Mean Squared Error (MSE), Root Mean Squared Error (RMSE), Mean Absolute Error (MAE), and Mean Absolute Percentage Error (MAPE) can be extended.
1.  **Per-Variable Metrics:** The simplest approach is to calculate each metric independently for each predicted variable. For example, `MAE_Temperature`, `MAE_Humidity`, `MAE_Energy_Consumption`. This gives a granular view of how well the model performs on each specific series.
2.  **Aggregated Metrics:** To get an overall sense of model performance, you can average the per-variable metrics. For instance, `Average_MAE = (MAE_Temperature + MAE_Humidity + MAE_Energy_Consumption) / 3`. This provides a single number for comparison but can mask poor performance on individual variables.
3.  **Multivariate Specific Metrics:** Some metrics inherently consider multiple outputs. For instance, a **Multi-Output Mean Squared Error (MOMSE)** or **Multi-Output Root Mean Squared Error (MORSE)** would sum the squared errors across all output features for each timestep and then average. This treats all errors equally. Another approach is to use the **Determinant of the Covariance Matrix of Errors**, which is more complex but can capture correlations in prediction errors across variables. However, for most practical applications, aggregated MAE/RMSE are sufficient.

When implementing these, ensure you invert the scaling (if applied) on your predictions and actual values before calculating metrics, especially for interpretable metrics like MAE or RMSE, so they are in the original units.

```python
from sklearn.metrics import mean_squared_error, mean_absolute_error
import numpy as np

def calculate_multivariate_metrics(y_true, y_pred, feature_names=None):
    """
    Calculates per-feature and aggregated MAE and RMSE for multivariate forecasts.
    y_true, y_pred shapes: (n_samples, n_steps_out, n_output_features)
    """
    n_output_features = y_true.shape[2]
    
    # Flatten across n_steps_out for metric calculation if needed, or iterate
    # For simplicity, let's calculate per-feature across all timesteps
    
    maes = []
    rmses = []
    
    print("--- Per-Feature Metrics ---")
    for i in range(n_output_features):
        feature_name = feature_names[i] if feature_names else f"Feature {i+1}"
        
        # Flatten for metric calculation across all samples and timesteps for this feature
        true_flat = y_true[:, :, i].flatten()
        pred_flat = y_pred[:, :, i].flatten()
        
        mae = mean_absolute_error(true_flat, pred_flat)
        rmse = np.sqrt(mean_squared_error(true_flat, pred_flat))
        
        maes.append(mae)
        rmses.append(rmse)
        
        print(f"{feature_name}: MAE = {mae:.4f}, RMSE = {rmse:.4f}")
        
    print("\n--- Aggregated Metrics ---")
    print(f"Average MAE across features: {np.mean(maes):.4f}")
    print(f"Average RMSE across features: {np.mean(rmses):.4f}")

# Example usage:
# y_test_unscaled = scaler.inverse_transform(y_test_reshaped).reshape(y_test.shape)
# y_pred_unscaled = scaler.inverse_transform(y_pred_reshaped).reshape(y_pred.shape)
# calculate_multivariate_metrics(y_test_unscaled, y_pred_unscaled, feature_names=['Temp', 'Humidity', 'Energy'])
```

**Visualizing Multivariate Forecasts:**
Visualization is crucial for understanding where your model performs well and where it struggles.
*   **Time Series Plots:** Plot the actual values and predicted values for each feature over time. Overlaying multiple lines (actual vs. predicted for each variable) on separate subplots or a single plot with clear legends allows for easy comparison. This helps identify biases, under/over-prediction, and whether the model captures trends and seasonality.
*   **Residual Plots:** Plot the difference between actual and predicted values (residuals) for each feature. This can reveal patterns in errors (e.g., systematic errors at certain times of day, increasing error over the forecast horizon).
*   **Scatter Plots (Actual vs. Predicted):** For each feature, plot actual values against predicted values. A perfect model would show points lying on a 45-degree line. Deviations indicate bias or variance.

**Interpreting Deep Learning Models:**
Interpreting deep learning models for time series is challenging but rewarding.
*   **Attention Weights (from Encoder-Decoder with Attention):** As discussed in the previous chapter, visualizing attention weights can show which input timesteps and features the model focused on when making a particular prediction. This offers direct insight into temporal feature importance.
*   **Feature Importance (e.g., Permutation Importance):** While model-agnostic, techniques like permutation importance can be applied. You shuffle one input feature's values (e.g., all past 'Humidity' values) and observe the impact on forecast error. A large increase in error indicates high importance for that feature. This can be done for individual features or even specific timesteps of a feature.
*   **SHAP (SHapley Additive exPlanations) or LIME (Local Interpretable Model-agnostic Explanations):** These model-agnostic methods can explain individual predictions by showing how each input feature contributes to the forecast. For time series, this can be extended to show the contribution of specific lagged values of different features.
*   **Saliency Maps:** For CNNs, saliency maps can highlight which parts of the input sequence (timesteps and features) were most "activated" or influential for a given prediction.

**Common Mistakes in Evaluation and Interpretation:**
1.  **Ignoring Scaling:** Forgetting to inverse-scale predictions and actuals before calculating interpretable metrics (like MAE, RMSE) leads to metrics that are hard to understand or compare.
2.  **Evaluating on Training Data:** Always evaluate on a held-out test set to get an unbiased estimate of generalization performance.
3.  **Single Metric Blindness:** Relying on only one aggregated metric can hide critical issues. Always look at per-variable metrics and visualizations.
4.  **Misinterpreting Attention:** While attention weights are informative, they don't always imply direct causation. They show correlation of focus, not necessarily the sole reason for a prediction.
5.  **Lack of Baseline Comparison:** Always compare your deep learning model's performance against simpler baselines (e.g., Naive forecast, ARIMA, simple MLP) to ensure the complexity is justified.

By thoroughly evaluating and interpreting your multivariate deep learning forecasts, you not only gain confidence in your model but also uncover valuable insights into the underlying dynamics of your time series data, leading to better decision-making.

#### Key concepts
*   **Per-Variable Metrics:** Evaluation metrics calculated independently for each predicted output variable (e.g., MAE for temperature, MAE for humidity).
*   **Aggregated Metrics:** A single metric obtained by averaging or summing per-variable metrics to provide an overall performance score.
*   **Inverse Scaling:** Converting scaled predictions and actual values back to their original data range for meaningful metric calculation and interpretation.
*   **Time Series Plots:** Visualizations comparing actual and predicted values over time for each variable.
*   **Residual Plots:** Plots showing the difference between actual and predicted values, used to identify systematic errors.
*   **Attention Weights Visualization:** A technique to interpret Encoder-Decoder models by showing which input timesteps received the most attention for each output prediction.
*   **Permutation Importance:** A model-agnostic technique to estimate feature importance by shuffling feature values and observing the impact on model performance.

#### Hands-on activity
**Activity: Evaluate and Visualize Multivariate Forecasts**
You will perform a basic evaluation and visualization of the predictions from your previously trained LSTM model.

**Instructions:**
1.  Use the trained LSTM model from Chapter 7.5's activity.
2.  Generate predictions on a held-out test set (`X_test`).
3.  Inverse transform both the predictions and the true test labels (`y_test`) back to their original scale using the `scaler` object.
4.  Implement the `calculate_multivariate_metrics` function provided in the lesson content.
5.  Visualize the actual vs. predicted values for a few selected samples from the test set for each feature using time series plots.

**Code Template:**
```python
import numpy as np
import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from tensorflow import keras
from tensorflow.keras import layers
from sklearn.metrics import mean_squared_error, mean_absolute_error
import matplotlib.pyplot as plt

# --- Re-generate data, sequences, and train LSTM from Chapter 7.5 for continuity ---
data = {
    'Timestamp': pd.to_datetime(pd.date_range(start='2023-01-01', periods=1000, freq='H')),
    'Temperature (C)': [20 + 5*np.sin(i/10) + np.random.randn() for i in range(1000)],
    'Humidity (%)': [60 - 10*np.cos(i/15) + np.random.randn() for i in range(1000)],
    'Energy_Consumption (kWh)': [100 + 20*np.sin(i/5) + 5*np.random.randn() for i in range(1000)]
}
df = pd.DataFrame(data)
df['Temperature (C)'] = df['Temperature (C)'] + df['Energy_Consumption (kWh)'] * 0.1
df['Humidity (%)'] = df['Humidity (%)'] - df['Energy_Consumption (kWh)'] * 0.05
df.to_csv('energy_consumption.csv', index=False)

df = pd.read_csv('energy_consumption.csv')
df['Timestamp'] = pd.to_datetime(df['Timestamp'])
df = df.set_index('Timestamp')
df = df.dropna()

train_size_raw = int(len(df) * 0.8) # Raw data split point
train_data_values = df.iloc[:train_size_raw].values
full_data_values = df.values
feature_names = df.columns.tolist() # Get original feature names

scaler = MinMaxScaler(feature_range=(0, 1))
scaler.fit(train_data_values) # Fit only on raw training data
scaled_data = scaler.transform(full_data_values)

def create_sequences(data, n_steps_in, n_steps_out):
    X, y = [], []
    for i in range(len(data)):
        end_ix = i + n_steps_in
        out_end_ix = end_ix + n_steps_out
        if out_end_ix > len(data):
            break
        seq_x = data[i:end_ix, :]
        seq_y = data[end_ix:out_end_ix, :]
        X.append(seq_x)
        y.append(seq_y)
    return np.array(X), np.array(y)

n_steps_in = 24
n_steps_out = 6
X, y = create_sequences(scaled_data, n_steps_in, n_steps_out)

# Split X, y into train and test sets chronologically
train_samples = int(len(X) * 0.8)
X_train, X_test = X[:train_samples], X[train_samples:]
y_train, y_test = y[:train_samples], y[train_samples:]

n_features = X.shape[2]
n_output_features = y.shape[2]
y_train_reshaped = y_train.reshape((y_train.shape[0], n_steps_out * n_output_features))
y_test_reshaped = y_test.reshape((y_test.shape[0], n_steps_out * n_output_features))

model = keras.Sequential([
    layers.Input(shape=(n_steps_in, n_features)),
    layers.LSTM(100, activation='relu'),
    layers.Dense(n_steps_out * n_output_features, activation='linear')
])
model.compile(optimizer='adam', loss='mse')
model.fit(X_train, y_train_reshaped, epochs=50, verbose=0, batch_size=32)
# --- End of data generation and model training ---

# 1. Generate predictions on the test set
y_pred_reshaped = model.predict(X_test)

# 2. Inverse transform predictions and true values
# To inverse transform, we need to create a dummy array with the correct number of features
# and then replace the predicted/true values into it.
# The scaler was fitted on `n_features` columns.
dummy_pred_array = np.zeros((y_pred_reshaped.shape[0] * n_steps_out, n_features))
dummy_pred_array[:, :n_output_features] = y_pred_reshaped.reshape(-1, n_output_features)
y_pred_unscaled_flat = scaler.inverse_transform(dummy_pred_array)[:, :n_output_features]
y_pred_unscaled = y_pred_unscaled_flat.reshape(y_test.shape)

dummy_true_array = np.zeros((y_test_reshaped.shape[0] * n_steps_out, n_features))
dummy_true_array[:, :n_output_features] = y_test_reshaped.reshape(-1, n_output_features)
y_true_unscaled_flat = scaler.inverse_transform(dummy_true_array)[:, :n_output_features]
y_true_unscaled = y_true_unscaled_flat.reshape(y_test.shape)

# 3. Implement and use the calculate_multivariate_metrics function
def calculate_multivariate_metrics(y_true, y_pred, feature_names=None):
    n_output_features = y_true.shape[2]
    maes = []
    rmses = []
    
    print("--- Per-Feature Metrics ---")
    for i in range(n_output_features):
        name = feature_names[i] if feature_names and i < len(feature_names) else f"Feature {i+1}"
        true_flat = y_true[:, :, i].flatten()
        pred_flat = y_pred[:, :, i].flatten()
        
        mae = mean_absolute_error(true_flat, pred_flat)
        rmse = np.sqrt(mean_squared_error(true_flat, pred_flat))
        
        maes.append(mae)
        rmses.append(rmse)
        
        print(f"{name}: MAE = {mae:.4f}, RMSE = {rmse:.4f}")
        
    print("\n--- Aggregated Metrics ---")
    print(f"Average MAE across features: {np.mean(maes):.4f}")
    print(f"Average RMSE across features: {np.mean(rmses):.4f}")

print("\n--- Model Evaluation on Test Set ---")
calculate_multivariate_metrics(y_true_unscaled, y_pred_unscaled, feature_names=feature_names)

# 4. Visualize actual vs. predicted for a few samples
num_plot_samples = 3 # Number of test samples to visualize
plt.figure(figsize=(18, 5 * num_plot_samples))

for sample_idx in range(num_plot_samples):
    for feature_idx in range(n_output_features):
        ax = plt.subplot(num_plot_samples, n_output_features, sample_idx * n_output_features + feature_idx + 1)
        
        # Plot true values for the forecast horizon
        ax.plot(range(n_steps_out), y_true_unscaled[sample_idx, :, feature_idx], label='Actual', color='blue')
        # Plot predicted values for the forecast horizon
        ax.plot(range(n_steps_out), y_pred_unscaled[sample_idx, :, feature_idx], label='Predicted', color='red', linestyle='--')
        
        ax.set_title(f'Sample {sample_idx+1} - {feature_names[feature_idx]}')
        ax.set_xlabel('Forecast Step')
        ax.set_ylabel(feature_names[feature_idx])
        ax.legend()
        ax.grid(True)

plt.tight_layout()
plt.show()
```

#### Assessment idea
1.  **Question:** You have trained a deep learning model to forecast `Temperature`, `Pressure`, and `Humidity` for the next 10 timesteps. After inverse scaling, your `y_true` and `y_pred` arrays for the test set have shapes `(100, 10, 3)`. You calculate the MAE for each feature: `MAE_Temp = 1.5`, `MAE_Pressure = 5.2`, `MAE_Humidity = 3.1`. If you then calculate a single "Average MAE" by simply averaging these three values, what potential pitfall might this aggregated metric hide, and how can you mitigate it?
    **Answer:** The calculated "Average MAE" would be `(1.5 + 5.2 + 3.1) / 3 = 3.27`. The potential pitfall this aggregated metric might hide is **uneven performance across features, especially if some features have vastly different scales or importance**. In this case, `MAE_Pressure = 5.2` is significantly higher than `MAE_Temp = 1.5`. If `Pressure` is a critical variable where accuracy is paramount, a good average MAE might deceptively suggest overall good performance, masking the fact that the model is performing poorly on a crucial component.
    To mitigate this, you should always:
    *   **Report per-feature metrics:** Explicitly state the MAE for each individual feature.
    *   **Consider feature importance/scale:** If some features are more critical or have naturally larger ranges, their individual errors might need to be weighted differently or scrutinized more closely. For example, a 5.2 error in pressure might be acceptable if pressure values are in the thousands, but devastating if they are in the tens.
    *   **Use visualizations:** Plotting actual vs. predicted values for each feature separately allows for visual inspection of where the model struggles.
2.  **Question:** You observe that your deep learning model for multivariate time series forecasting consistently underpredicts `Energy_Consumption` during peak demand hours, even though it performs well during off-peak hours. What type of visualization would best highlight this specific issue, and what might this pattern suggest about your model or data?
    **Answer:**
    *   **Best Visualization:** A **Residual Plot** for `Energy_Consumption` over time would best highlight this issue. Plotting `(Actual_Energy_Consumption - Predicted_Energy_Consumption)` against time would clearly show negative residuals (underpredictions) consistently occurring during specific peak demand hours. A time series plot overlaying actual and predicted `Energy_Consumption` would also show this, but the residual plot explicitly quantifies the error and makes the pattern of underprediction more obvious.
    *   **What this pattern suggests:**
        *   **Model Limitation:** The model might not be adequately capturing the non-linear dynamics or extreme values associated with peak demand. Deep learning models can sometimes struggle with rare or extreme events if they are not sufficiently represented in the training data, or if the model architecture isn't complex enough to learn the specific triggers for peak demand.
        *   **Feature Deficiency:** There might be missing or insufficient features that explain peak demand. For example, if peak demand is heavily influenced by specific events (e.g., major sporting events, public holidays) or very granular weather conditions (e.g., specific humidity-temperature comfort indices) that are not included or properly engineered in the input features, the model won't have the information to predict these spikes accurately.
        *   **Data Imbalance:** Peak demand hours might be underrepresented in the training data, causing the model to optimize for the more frequent off-peak scenarios.
        *   **Scaling Issues:** While less likely to cause *consistent* underprediction only at peaks, improper scaling could exacerbate issues with extreme values.

#### AI generation note
Create a 10-minute interactive code demo in a Jupyter Notebook. Use the `y_true_unscaled` and `y_pred_unscaled` arrays from the activity. First, walk through the `calculate_multivariate_metrics` function, showing the output of per-feature and aggregated MAE/RMSE. Then, demonstrate plotting actual vs. predicted for 2-3 specific test samples across all features, emphasizing clear legends and titles. Finally, show how to create a residual plot for one feature, pointing out how to identify systematic errors. Include a reflection prompt asking learners to consider what a consistently positive residual might mean. The visual style should be split-screen (code/output) with clear plot annotations.

---

## Module 8: Advanced Topics & Deployment Strategies

This module elevates your understanding of deep learning for time series forecasting by exploring advanced modeling techniques and then guiding you through the critical steps of deploying, monitoring, and maintaining these sophisticated models in real-world production environments. You'll move beyond point forecasts to probabilistic predictions, learn to detect anomalies, leverage transfer learning, and gain insights into model interpretability. Finally, we'll cover the essential MLOps practices that ensure your forecasting solutions are robust, scalable, and continuously performant.

### Chapter 8.1 — Probabilistic Forecasting with Deep Learning

#### Learning objectives
*   Understand the limitations of point forecasting and the benefits of probabilistic forecasting for time series.
*   Implement a Mixture Density Network (MDN) using deep learning frameworks to predict a probability distribution.
*   Apply quantile regression with deep learning models to generate prediction intervals.
*   Interpret and evaluate probabilistic forecasts using metrics like Pinball Loss and Coverage.

#### Detailed lesson content
Traditional deep learning models for time series forecasting, like the LSTMs and CNNs we've explored, typically output a single point estimate for future values. While these point forecasts are useful, they inherently lack information about the uncertainty associated with the prediction. In many real-world scenarios, understanding this uncertainty is just as crucial as the forecast itself. Imagine forecasting electricity demand: a point estimate might suggest a certain load, but knowing the probability of that load being much higher or lower allows utility companies to manage resources more effectively and avoid costly outages or over-provisioning. This is where probabilistic forecasting comes into play, aiming to predict an entire probability distribution over future outcomes, rather than just a single value.

One powerful approach to probabilistic forecasting with deep learning is using a **Mixture Density Network (MDN)**. An MDN is essentially a neural network whose output layer is configured to predict the parameters of a mixture of probability distributions, rather than a single value. For a univariate time series, this often means predicting the parameters (e.g., mean, standard deviation, and mixture coefficients) of a Gaussian Mixture Model (GMM). The network learns to map input sequences to these parameters, allowing it to represent complex, multimodal, and heteroscedastic (varying variance) predictive distributions. For instance, if a time series exhibits different behaviors under different conditions, an MDN can capture these distinct modes within its predicted distribution. The loss function for training an MDN is typically the negative log-likelihood of the observed data under the predicted mixture distribution, which encourages the model to assign high probability to the actual outcomes.

Let's consider a practical example. Suppose we're forecasting hourly temperature. An MDN might predict a mixture of three Gaussian distributions for the temperature at a specific future hour. One Gaussian might have a mean around 20°C with a small standard deviation, representing a high probability of a mild temperature. Another might have a mean around 25°C with a larger standard deviation, capturing the possibility of a hotter day with more uncertainty. The third might have a mean around 15°C, representing a cooler scenario. The MDN outputs the means ($\mu_k$), standard deviations ($\sigma_k$), and mixing coefficients ($\pi_k$) for each of the $K$ components in the mixture. The sum of the mixing coefficients must equal 1. During inference, you can sample from this predicted mixture distribution to generate multiple possible future trajectories, or you can calculate prediction intervals directly from the cumulative distribution function.

Another widely used technique for probabilistic forecasting is **Quantile Regression**. Instead of predicting the parameters of a distribution, quantile regression directly estimates conditional quantiles of the target variable. For example, you might train separate deep learning models (or a single model with multiple output heads) to predict the 10th, 50th (median), and 90th percentiles of the future time series value. The 50th percentile serves as a robust point forecast (median), while the 10th and 90th percentiles define an 80% prediction interval. The key advantage here is that quantile regression makes no assumptions about the underlying distribution of the errors, making it very flexible. The loss function for quantile regression is the **Pinball Loss (or Quantile Loss)**, which penalizes under-predictions and over-predictions differently based on the chosen quantile. For a lower quantile (e.g., 0.1), under-predictions are penalized more heavily than over-predictions, while for an upper quantile (e.g., 0.9), over-predictions are penalized more.

When implementing quantile regression, a common mistake is to use a standard Mean Squared Error (MSE) loss. MSE aims to predict the conditional mean, not a specific quantile. Using Pinball Loss is crucial. Also, ensure your deep learning architecture is appropriate for time series (e.g., LSTMs, CNNs, Transformers) and that you're correctly handling input sequences. For MDNs, correctly parameterizing the output layer to produce means, standard deviations (ensuring they are positive, often via `exp()` activation), and mixing coefficients (via `softmax()` for probabilities) is critical. A common safety note for MDNs is numerical stability; ensuring standard deviations don't become too small can lead to issues, so adding a small epsilon or clamping values might be necessary. Evaluating probabilistic forecasts requires specific metrics. Beyond point forecast metrics like MAE or RMSE, we use metrics like **Pinball Loss** (for quantile forecasts), **Coverage** (the percentage of actual values falling within the predicted interval), and **Interval Width** (the average width of the prediction intervals). A good probabilistic forecast achieves high coverage with narrow intervals.

```python
import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import tensorflow_probability as tfp

tfd = tfp.distributions
tfpl = tfp.layers

# --- Example: Mixture Density Network for Time Series ---
# Assume X_train, y_train are prepared time series data
# X_train: (num_samples, timesteps, features)
# y_train: (num_samples, 1) - target value at t+1

# Define the number of mixture components
NUM_COMPONENTS = 5

# Build a simple LSTM-based MDN model
def build_mdn_model(input_shape, num_components):
    model = keras.Sequential([
        layers.Input(shape=input_shape),
        layers.LSTM(64, return_sequences=True),
        layers.LSTM(32),
        layers.Dense(tfpl.MixtureSameFamily.params_size(
            num_components,
            tfd.Normal.param_static_size(1)
        ), activation=None),
        tfpl.MixtureSameFamily(num_components, tfd.Normal, name='mdn_output')
    ])
    return model

# Custom negative log-likelihood loss function for MDN
def mdn_nll_loss(y_true, y_pred):
    return -y_pred.log_prob(y_true)

# Example usage (dummy data)
input_timesteps = 10
input_features = 1
X_train_dummy = np.random.rand(1000, input_timesteps, input_features)
y_train_dummy = np.random.rand(1000, 1) * 10 + np.sin(np.arange(1000)/100)[:, None]

mdn_model = build_mdn_model((input_timesteps, input_features), NUM_COMPONENTS)
mdn_model.compile(optimizer='adam', loss=mdn_nll_loss)
mdn_model.summary()

# Train the model (simplified)
# mdn_model.fit(X_train_dummy, y_train_dummy, epochs=10, batch_size=32)

# --- Example: Quantile Regression for Time Series ---
# Define a custom Pinball Loss function
def pinball_loss(y_true, y_pred, quantile):
    err = y_true - y_pred
    return keras.backend.mean(keras.backend.maximum(quantile * err, (quantile - 1) * err), axis=-1)

# Build a model for a specific quantile (e.g., 0.10)
def build_quantile_model(input_shape, quantile):
    model = keras.Sequential([
        layers.Input(shape=input_shape),
        layers.LSTM(64, return_sequences=True),
        layers.LSTM(32),
        layers.Dense(1, activation='linear', name=f'quantile_{quantile}')
    ])
    model.compile(optimizer='adam', loss=lambda y_true, y_pred: pinball_loss(y_true, y_pred, quantile))
    return model

# Example usage for 0.10 quantile
quantile_0_10_model = build_quantile_model((input_timesteps, input_features), 0.10)
quantile_0_10_model.summary()
# quantile_0_10_model.fit(X_train_dummy, y_train_dummy, epochs=10, batch_size=32)

# To get multiple quantiles, you'd train separate models or a multi-output model.
# For a multi-output model, the loss would be a sum of pinball losses for each output.
```

#### Key concepts
*   **Probabilistic Forecasting:** Predicting a probability distribution over future outcomes rather than a single point estimate, providing a measure of uncertainty.
*   **Mixture Density Network (MDN):** A type of neural network that outputs the parameters (e.g., means, standard deviations, mixing coefficients) of a mixture of probability distributions (e.g., Gaussian Mixture Model) to represent the predictive distribution.
*   **Quantile Regression:** A statistical method that estimates the conditional median or other quantiles of the response variable, rather than the conditional mean.
*   **Pinball Loss (Quantile Loss):** A specific loss function used in quantile regression that penalizes over-predictions and under-predictions asymmetrically based on the target quantile.
*   **Coverage:** A metric for evaluating prediction intervals, representing the percentage of actual observations that fall within the predicted interval.
*   **Interval Width:** A metric for evaluating prediction intervals, representing the average width of the predicted intervals; generally, narrower intervals with good coverage are preferred.

#### Hands-on activity
**Activity: Implement and Evaluate a Quantile Regression Model**

Your task is to build a deep learning model (e.g., LSTM-based) that predicts the 10th, 50th, and 90th quantiles for a synthetic time series dataset.

1.  **Generate Synthetic Data:** Create a time series with a clear trend and some heteroscedastic noise (noise magnitude varies with the series value or time). For example, `y = sin(t/10) + t/50 + noise * (1 + t/100)`.
2.  **Prepare Data:** Transform the time series into sequences suitable for an LSTM (e.g., look-back window of 20 time steps, predict the next value).
3.  **Build Quantile Models:**
    *   Define the `pinball_loss` function as provided in the lesson content.
    *   Create three separate LSTM models, each trained to predict one of the quantiles (0.10, 0.50, 0.90). Each model should use the `pinball_loss` with its respective quantile.
4.  **Train Models:** Train each model on your synthetic data.
5.  **Forecast and Evaluate:**
    *   Use the trained models to make predictions on a held-out test set.
    *   Calculate the Pinball Loss for each quantile on the test set.
    *   Calculate the coverage of the 80% prediction interval (between the 0.10 and 0.90 quantiles).
    *   Calculate the average width of the 80% prediction interval.
    *   Plot the actual values, the 0.50 quantile (median) forecast, and the 0.10/0.90 quantiles as a shaded region.

```python
import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import matplotlib.pyplot as plt

# 1. Generate Synthetic Data
def generate_data(num_samples=1000):
    t = np.arange(num_samples)
    base_signal = np.sin(t / 10) + t / 50
    # Heteroscedastic noise: noise magnitude increases with time
    noise = np.random.normal(0, 0.5 + t / 200, num_samples)
    y = base_signal + noise
    return y.astype(np.float32)

series = generate_data(1200) # Use 1200 samples for training/testing split

# 2. Prepare Data for LSTM
def create_sequences(data, look_back=20):
    X, Y = [], []
    for i in range(len(data) - look_back):
        X.append(data[i:(i + look_back)])
        Y.append(data[i + look_back])
    return np.array(X), np.array(Y)

look_back = 20
X_raw, Y_raw = create_sequences(series, look_back)

# Split into training and testing
train_size = int(len(X_raw) * 0.8)
X_train, X_test = X_raw[:train_size], X_raw[train_size:]
Y_train, Y_test = Y_raw[:train_size], Y_raw[train_size:]

# Reshape for LSTM: (samples, timesteps, features)
X_train = X_train.reshape(X_train.shape[0], X_train.shape[1], 1)
X_test = X_test.reshape(X_test.shape[0], X_test.shape[1], 1)
Y_train = Y_train.reshape(-1, 1)
Y_test = Y_test.reshape(-1, 1)

# 3. Define Pinball Loss and Build Quantile Models
def pinball_loss(y_true, y_pred, quantile):
    err = y_true - y_pred
    return keras.backend.mean(keras.backend.maximum(quantile * err, (quantile - 1) * err), axis=-1)

def build_quantile_model(input_shape, quantile, epochs=50, batch_size=32):
    model = keras.Sequential([
        layers.Input(shape=input_shape),
        layers.LSTM(64, return_sequences=True),
        layers.LSTM(32),
        layers.Dense(1, activation='linear')
    ])
    model.compile(optimizer='adam', loss=lambda y_true, y_pred: pinball_loss(y_true, y_pred, quantile))
    print(f"Training model for quantile {quantile}...")
    model.fit(X_train, Y_train, epochs=epochs, batch_size=batch_size, verbose=0)
    return model

# 4. Train Models (for quantiles 0.10, 0.50, 0.90)
input_shape = (look_back, 1)
q_0_10_model = build_quantile_model(input_shape, 0.10)
q_0_50_model = build_quantile_model(input_shape, 0.50)
q_0_90_model = build_quantile_model(input_shape, 0.90)

# 5. Forecast and Evaluate
pred_q_10 = q_0_10_model.predict(X_test)
pred_q_50 = q_0_50_model.predict(X_test)
pred_q_90 = q_0_90_model.predict(X_test)

# Calculate Pinball Loss on test set
loss_q_10 = pinball_loss(Y_test, pred_q_10, 0.10).numpy().mean()
loss_q_50 = pinball_loss(Y_test, pred_q_50, 0.50).numpy().mean()
loss_q_90 = pinball_loss(Y_test, pred_q_90, 0.90).numpy().mean()

print(f"\nTest Pinball Loss (Q 0.10): {loss_q_10:.4f}")
print(f"Test Pinball Loss (Q 0.50): {loss_q_50:.4f}")
print(f"Test Pinball Loss (Q 0.90): {loss_q_90:.4f}")

# Calculate Coverage and Interval Width for 80% PI
coverage = np.mean((Y_test >= pred_q_10) & (Y_test <= pred_q_90))
interval_width = np.mean(pred_q_90 - pred_q_10)

print(f"80% Prediction Interval Coverage: {coverage*100:.2f}%")
print(f"Average 80% Prediction Interval Width: {interval_width:.4f}")

# Plotting results
plt.figure(figsize=(15, 6))
plt.plot(Y_test, label='Actual Values', color='blue', alpha=0.7)
plt.plot(pred_q_50, label='Median Forecast (Q 0.50)', color='red', linestyle='--')
plt.fill_between(np.arange(len(pred_q_10)), pred_q_10.flatten(), pred_q_90.flatten(), color='orange', alpha=0.3, label='80% Prediction Interval')
plt.title('Quantile Regression Forecast with Prediction Interval')
plt.xlabel('Time Step')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()
```

#### Assessment idea
1.  **Question:** You are tasked with forecasting electricity consumption for a city, where over-prediction leads to wasted energy and under-prediction leads to blackouts. Which probabilistic forecasting technique would be most suitable for providing a robust prediction interval that prioritizes avoiding under-prediction, and why?
    *   **Correct Answer:** Quantile Regression would be most suitable. Specifically, you would train models to predict a lower quantile (e.g., 0.05 or 0.10) and an upper quantile (e.g., 0.95 or 0.90). To prioritize avoiding under-prediction (i.e., ensuring enough electricity is available), you would pay close attention to the upper quantile forecast. The Pinball Loss function used in quantile regression allows for asymmetric penalties, meaning you can specifically tune the model to be more conservative on the upper bound, ensuring a higher likelihood that actual consumption falls below the predicted upper limit. MDNs could also provide a distribution, but directly optimizing for specific quantiles with Pinball Loss offers more direct control over the interval properties.

2.  **Question:** A deep learning model for probabilistic forecasting outputs the parameters for a Gaussian Mixture Model (GMM). During inference, you want to generate 100 possible future scenarios for a given input sequence. Describe how you would use the model's output to achieve this.
    *   **Correct Answer:** The model outputs the means ($\mu_k$), standard deviations ($\sigma_k$), and mixing coefficients ($\pi_k$) for each of the $K$ Gaussian components. To generate 100 future scenarios, you would first sample a component $k$ from the categorical distribution defined by the mixing coefficients ($\pi_1, \dots, \pi_K$). Once a component $k$ is chosen, you would then sample a value from the Gaussian distribution $N(\mu_k, \sigma_k^2)$ corresponding to that component. Repeating this process 100 times (sampling a component, then sampling from the chosen component's Gaussian) would yield 100 possible future scenarios, reflecting the full predicted probability distribution.

#### AI generation note
Create a 12-minute interactive code demo video. Begin with a clear explanation of why probabilistic forecasting is needed, using a real-world energy demand example with visual analogies for uncertainty. Then, transition to a live coding session in a Jupyter Notebook, demonstrating the implementation of both an MDN (using `tensorflow_probability`) and a Quantile Regression model (with custom Pinball Loss) for a synthetic time series. Show the `model.summary()` for both. For the Quantile Regression part, plot the actual data, the median forecast, and the 80% prediction interval as a shaded region to visually highlight the uncertainty. Include an interactive element where learners adjust the quantile values in the `pinball_loss` function and observe how the forecast shifts. Emphasize common pitfalls like using MSE for quantiles. Provide accessibility with captions and a clear, well-commented notebook.

### Chapter 8.2 — Anomaly Detection in Time Series using Deep Learning

#### Learning objectives
*   Explain the concept of anomalies in time series data and their significance in various domains.
*   Implement deep learning models, such as Autoencoders and LSTMs, for unsupervised anomaly detection.
*   Define and apply reconstruction error, prediction error, and statistical thresholds for anomaly scoring.
*   Evaluate anomaly detection systems using metrics like Precision, Recall, and F1-score.

#### Detailed lesson content
Anomalies, also known as outliers or novelties, are data points or sequences that deviate significantly from the expected pattern or behavior in a time series. Detecting these anomalies is critical across numerous applications: identifying fraudulent transactions in financial data, pinpointing equipment malfunctions in industrial sensor readings, detecting cyber intrusions in network traffic, or flagging unusual patient vital signs in healthcare. The challenge in time series anomaly detection often lies in the temporal dependencies; an anomaly isn't just an unusual value, but an unusual value *in context* of its past. Deep learning models excel at learning complex temporal patterns, making them highly effective for this task.

One of the most common and intuitive deep learning approaches for unsupervised anomaly detection is using **Autoencoders**. An autoencoder is a neural network trained to reconstruct its input. It consists of an encoder that compresses the input into a lower-dimensional latent representation and a decoder that reconstructs the input from this latent representation. The core idea is that an autoencoder, when trained on "normal" or non-anomalous time series data, will learn to reconstruct these normal patterns very well. However, when presented with an anomalous input, it will struggle to reconstruct it accurately because it has not learned that pattern during training. The **reconstruction error** (e.g., Mean Squared Error between input and output) then serves as an anomaly score: a high reconstruction error indicates a high likelihood of an anomaly. For time series, we often use **Recurrent Autoencoders** (e.g., LSTM Autoencoders) or **Convolutional Autoencoders** (e.g., 1D CNN Autoencoders) to capture temporal features.

Let's walk through an LSTM Autoencoder example. You would feed sequences of normal time series data (e.g., 24 hours of sensor readings) into the encoder, which compresses it into a fixed-size vector. The decoder then takes this vector and tries to reconstruct the original 24-hour sequence. After training, when a new 24-hour sequence arrives, you pass it through the trained autoencoder. If the reconstruction error for this new sequence is significantly higher than the errors observed during training, it's flagged as an anomaly. To set a threshold, you typically calculate reconstruction errors for your training data and then use statistical methods (e.g., mean + 3 standard deviations, or a percentile-based threshold) to define what constitutes an "abnormal" error.

Another powerful deep learning technique involves using **predictive models** for anomaly detection. Instead of reconstructing the input, these models are trained to predict the next value (or sequence of values) in a time series. An LSTM or Transformer model, trained on normal data, will make accurate predictions for normal patterns. When an anomaly occurs, the actual value will deviate significantly from the model's prediction. The **prediction error** (e.g., the absolute difference or squared difference between the actual and predicted value) then becomes the anomaly score. This approach is particularly effective for detecting point anomalies or contextual anomalies where a value is unusual given its preceding context. For example, if a temperature sensor suddenly jumps from 20°C to 100°C, a predictive model trained on historical temperature data would predict a value close to 20°C, leading to a large prediction error and flagging the anomaly.

When implementing these models, a common mistake is training on data that already contains anomalies. For unsupervised anomaly detection, the assumption is that the training data is predominantly normal. If your training data is contaminated, the model might learn to reconstruct or predict anomalous patterns, reducing its ability to detect true anomalies. Another pitfall is setting an arbitrary threshold for anomaly scores. It's crucial to analyze the distribution of scores from normal data to set a statistically sound threshold (e.g., using a Gaussian distribution assumption or robust statistics like median absolute deviation). Safety notes include ensuring proper data scaling (e.g., Min-Max or StandardScaler) to prevent features with larger magnitudes from dominating the error calculation, and handling missing data appropriately before feeding it into deep learning models.

Evaluating anomaly detection systems is tricky because anomalies are often rare and imbalanced. Standard classification metrics like accuracy can be misleading. Instead, we rely on **Precision**, **Recall**, and **F1-score**. Precision measures the proportion of detected anomalies that are truly anomalous. Recall measures the proportion of actual anomalies that were correctly detected. F1-score is the harmonic mean of precision and recall, providing a balanced view. For time series, defining what constitutes a "true" anomaly can be complex, especially with collective anomalies (a sequence of points that are anomalous together). Often, a detected anomaly is considered correct if it falls within a certain temporal window of a true anomaly.

```python
import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import matplotlib.pyplot as plt
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import precision_recall_fscore_support

# --- 1. Generate Synthetic Time Series with Anomalies ---
def generate_time_series_with_anomalies(n_steps=1000, n_anomalies=10):
    time = np.arange(n_steps)
    series = np.sin(time / 10) + np.random.normal(0, 0.1, n_steps) # Normal pattern
    
    # Introduce anomalies
    anomaly_indices = np.random.choice(n_steps - 50, n_anomalies, replace=False) + 25 # Avoid start/end
    anomalies = np.zeros(n_steps, dtype=bool)

    for idx in anomaly_indices:
        series[idx:idx+5] += np.random.uniform(2, 5) * np.sin(np.arange(5) * np.pi / 4) # Spiky anomaly
        anomalies[idx:idx+5] = True
    
    return series, anomalies

series, anomalies = generate_time_series_with_anomalies(n_steps=1500, n_anomalies=15)

# --- 2. Data Preprocessing ---
# Scale the data
scaler = MinMaxScaler()
series_scaled = scaler.fit_transform(series.reshape(-1, 1)).flatten()

# Create sequences for LSTM Autoencoder
def create_sequences(data, seq_len):
    X = []
    for i in range(len(data) - seq_len + 1):
        X.append(data[i:(i + seq_len)])
    return np.array(X)

SEQUENCE_LENGTH = 50
X_sequences = create_sequences(series_scaled, SEQUENCE_LENGTH)

# Split into training (normal data) and testing (with anomalies)
train_size = int(len(X_sequences) * 0.7)
X_train = X_sequences[:train_size]
X_test = X_sequences[train_size:]
# Corresponding anomaly labels for test set (shifted by sequence_length-1)
anomalies_test = anomalies[train_size + SEQUENCE_LENGTH - 1:]

# Reshape for LSTM: (samples, timesteps, features)
X_train = X_train.reshape(X_train.shape[0], X_train.shape[1], 1)
X_test = X_test.reshape(X_test.shape[0], X_test.shape[1], 1)

# --- 3. Build LSTM Autoencoder Model ---
def build_lstm_autoencoder(input_shape):
    model = keras.Sequential([
        layers.Input(shape=input_shape),
        layers.LSTM(64, activation='relu', return_sequences=True),
        layers.LSTM(32, activation='relu', return_sequences=False),
        layers.RepeatVector(input_shape[0]), # Repeats the last output to match sequence length
        layers.LSTM(32, activation='relu', return_sequences=True),
        layers.LSTM(64, activation='relu', return_sequences=True),
        layers.TimeDistributed(layers.Dense(input_shape[1])) # Output a single feature for each timestep
    ])
    model.compile(optimizer='adam', loss='mse')
    return model

input_shape = (SEQUENCE_LENGTH, 1)
autoencoder = build_lstm_autoencoder(input_shape)
autoencoder.summary()

# Train the model on normal data (X_train)
print("\nTraining LSTM Autoencoder...")
history = autoencoder.fit(X_train, X_train, epochs=20, batch_size=32, verbose=0)
print("Training complete.")

# --- 4. Anomaly Detection ---
# Get reconstruction errors on training data to set threshold
X_train_pred = autoencoder.predict(X_train)
train_mse = np.mean(np.power(X_train - X_train_pred, 2), axis=(1, 2))

# Set a threshold (e.g., 95th percentile of training errors)
threshold = np.percentile(train_mse, 95) 
print(f"Anomaly threshold (95th percentile of training MSE): {threshold:.4f}")

# Get reconstruction errors on test data
X_test_pred = autoencoder.predict(X_test)
test_mse = np.mean(np.power(X_test - X_test_pred, 2), axis=(1, 2))

# Detect anomalies
anomalies_detected = (test_mse > threshold).astype(int)

# --- 5. Evaluation ---
# Align actual anomalies with detected anomalies
# Note: This is a simplified alignment. In real-world, you might need more sophisticated windowing.
# Here, we assume anomalies_test are labels for the _last_ point in each sequence.
# For simplicity, we compare sequence-level anomaly detection with point-level labels.
# A more robust evaluation would involve matching windows.
# For this example, we'll compare the sequence-level detection to the point-level label of the *last* element in the sequence.
# This is an approximation.
actual_anomalies_for_eval = anomalies[train_size + SEQUENCE_LENGTH - 1 : train_size + SEQUENCE_LENGTH - 1 + len(test_mse)]
# If any point in the sequence is anomalous, we consider the sequence anomalous for this simplified eval
# This is still a simplification. A better approach would be to label sequences based on whether they *contain* an anomaly.
# For now, let's just use the 'anomalies_test' directly.

precision, recall, f1, _ = precision_recall_fscore_support(actual_anomalies_for_eval, anomalies_detected, average='binary', zero_division=0)

print(f"\nAnomaly Detection Metrics:")
print(f"Precision: {precision:.4f}")
print(f"Recall: {recall:.4f}")
print(f"F1-score: {f1:.4f}")

# --- Plotting Results ---
plt.figure(figsize=(18, 8))
plt.plot(series[train_size + SEQUENCE_LENGTH-1:], label='Original Test Series (Unscaled)', alpha=0.7)
plt.scatter(np.where(actual_anomalies_for_eval)[0], series[train_size + SEQUENCE_LENGTH-1:][np.where(actual_anomalies_for_eval)[0]], 
            color='red', s=50, label='Actual Anomalies', zorder=5)
plt.scatter(np.where(anomalies_detected)[0], series[train_size + SEQUENCE_LENGTH-1:][np.where(anomalies_detected)[0]], 
            color='green', marker='x', s=100, label='Detected Anomalies', zorder=6)
plt.title('Time Series Anomaly Detection with LSTM Autoencoder')
plt.xlabel('Time Step (relative to test start)')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()

plt.figure(figsize=(18, 5))
plt.plot(test_mse, label='Test Reconstruction Error (MSE)', color='blue', alpha=0.7)
plt.axhline(y=threshold, color='red', linestyle='--', label=f'Threshold ({threshold:.2f})')
plt.scatter(np.where(anomalies_detected)[0], test_mse[np.where(anomalies_detected)[0]], 
            color='green', marker='x', s=50, label='Detected Anomalies', zorder=5)
plt.title('Reconstruction Error and Anomaly Threshold')
plt.xlabel('Sequence Index')
plt.ylabel('MSE')
plt.legend()
plt.grid(True)
plt.show()
```

#### Key concepts
*   **Anomaly (Outlier/Novelty):** A data point or sequence that significantly deviates from the expected patterns or behaviors in a time series.
*   **Autoencoder:** A neural network trained to reconstruct its input, comprising an encoder (compressing input to latent space) and a decoder (reconstructing input from latent space).
*   **Reconstruction Error:** The difference between the input and the autoencoder's reconstructed output; a high reconstruction error indicates an anomaly.
*   **Predictive Model for Anomaly Detection:** Using a deep learning model (e.g., LSTM) trained to forecast future values, where large discrepancies between predicted and actual values (prediction error) indicate anomalies.
*   **Anomaly Score:** A numerical value indicating the degree of abnormality of a data point or sequence, often derived from reconstruction error or prediction error.
*   **Thresholding:** The process of setting a cutoff value for anomaly scores, above which a data point is classified as anomalous.
*   **Precision, Recall, F1-score:** Metrics used to evaluate the performance of anomaly detection systems, especially in imbalanced datasets. Precision measures true positives among all positives, Recall measures true positives among all actual positives, and F1-score is their harmonic mean.

#### Hands-on activity
**Activity: Implement Anomaly Detection using a Predictive LSTM Model**

Instead of an Autoencoder, this activity focuses on using a predictive LSTM for anomaly detection.

1.  **Re-use Data:** Use the same `series` and `anomalies` data generated in the lesson content.
2.  **Prepare Data for Predictive LSTM:**
    *   Create sequences where `X` is a look-back window (e.g., 50 steps) and `Y` is the *next* single value.
    *   Split into training (normal data) and testing (with anomalies).
3.  **Build Predictive LSTM Model:**
    *   Create a simple LSTM model that takes a sequence of `SEQUENCE_LENGTH` steps and outputs a single predicted value.
    *   Compile with `optimizer='adam'` and `loss='mse'`.
4.  **Train Model:** Train the LSTM model on `X_train` and `Y_train`.
5.  **Calculate Prediction Errors:**
    *   Use the trained model to predict values for `X_test`.
    *   Calculate the absolute prediction error: `abs(Y_test - Y_pred)`.
    *   Calculate prediction errors for `X_train` as well to establish a baseline.
6.  **Set Anomaly Threshold:** Determine a threshold based on the distribution of prediction errors from the training set (e.g., 99th percentile).
7.  **Detect and Evaluate Anomalies:**
    *   Flag test points where the prediction error exceeds the threshold as anomalies.
    *   Calculate Precision, Recall, and F1-score against the `anomalies_test` labels.
    *   Plot the original test series, actual anomalies, and detected anomalies. Also, plot the prediction errors and the threshold.

```python
import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import matplotlib.pyplot as plt
from sklearn.preprocessing import MinMaxScaler
from sklearn.metrics import precision_recall_fscore_support

# Re-use data from lesson content
def generate_time_series_with_anomalies(n_steps=1000, n_anomalies=10):
    time = np.arange(n_steps)
    series = np.sin(time / 10) + np.random.normal(0, 0.1, n_steps) # Normal pattern
    anomaly_indices = np.random.choice(n_steps - 50, n_anomalies, replace=False) + 25
    anomalies = np.zeros(n_steps, dtype=bool)
    for idx in anomaly_indices:
        series[idx:idx+5] += np.random.uniform(2, 5) * np.sin(np.arange(5) * np.pi / 4)
        anomalies[idx:idx+5] = True
    return series, anomalies

series, anomalies = generate_time_series_with_anomalies(n_steps=1500, n_anomalies=15)

# Scale the data
scaler = MinMaxScaler()
series_scaled = scaler.fit_transform(series.reshape(-1, 1)).flatten()

# 2. Prepare Data for Predictive LSTM
SEQUENCE_LENGTH = 50
def create_sequences_predictive(data, seq_len):
    X, Y = [], []
    for i in range(len(data) - seq_len): # Predict next value
        X.append(data[i:(i + seq_len)])
        Y.append(data[i + seq_len])
    return np.array(X), np.array(Y)

X_raw, Y_raw = create_sequences_predictive(series_scaled, SEQUENCE_LENGTH)

train_size = int(len(X_raw) * 0.7)
X_train, X_test = X_raw[:train_size], X_raw[train_size:]
Y_train, Y_test = Y_raw[:train_size], Y_raw[train_size:]

# Reshape for LSTM: (samples, timesteps, features)
X_train = X_train.reshape(X_train.shape[0], X_train.shape[1], 1)
X_test = X_test.reshape(X_test.shape[0], X_test.shape[1], 1)
Y_train = Y_train.reshape(-1, 1)
Y_test = Y_test.reshape(-1, 1)

# Corresponding anomaly labels for test set (Y_test corresponds to actual_anomalies_for_eval)
actual_anomalies_for_eval = anomalies[train_size + SEQUENCE_LENGTH : train_size + SEQUENCE_LENGTH + len(Y_test)]

# 3. Build Predictive LSTM Model
def build_predictive_lstm(input_shape):
    model = keras.Sequential([
        layers.Input(shape=input_shape),
        layers.LSTM(64, activation='relu', return_sequences=True),
        layers.LSTM(32, activation='relu'),
        layers.Dense(1, activation='linear') # Predict a single value
    ])
    model.compile(optimizer='adam', loss='mse')
    return model

input_shape = (SEQUENCE_LENGTH, 1)
predictive_lstm = build_predictive_lstm(input_shape)
predictive_lstm.summary()

# 4. Train Model
print("\nTraining Predictive LSTM...")
history = predictive_lstm.fit(X_train, Y_train, epochs=20, batch_size=32, verbose=0)
print("Training complete.")

# 5. Calculate Prediction Errors
train_predictions = predictive_lstm.predict(X_train)
train_errors = np.abs(Y_train - train_predictions)

test_predictions = predictive_lstm.predict(X_test)
test_errors = np.abs(Y_test - test_predictions)

# 6. Set Anomaly Threshold (e.g., 99th percentile of training errors)
threshold = np.percentile(train_errors, 99)
print(f"Anomaly threshold (99th percentile of training absolute errors): {threshold:.4f}")

# 7. Detect and Evaluate Anomalies
anomalies_detected = (test_errors > threshold).astype(int)

precision, recall, f1, _ = precision_recall_fscore_support(actual_anomalies_for_eval, anomalies_detected.flatten(), average='binary', zero_division=0)

print(f"\nAnomaly Detection Metrics:")
print(f"Precision: {precision:.4f}")
print(f"Recall: {recall:.4f}")
print(f"F1-score: {f1:.4f}")

# Plotting results
plt.figure(figsize=(18, 8))
plt.plot(series[train_size + SEQUENCE_LENGTH:], label='Original Test Series (Unscaled)', alpha=0.7)
plt.scatter(np.where(actual_anomalies_for_eval)[0], series[train_size + SEQUENCE_LENGTH:][np.where(actual_anomalies_for_eval)[0]], 
            color='red', s=50, label='Actual Anomalies', zorder=5)
plt.scatter(np.where(anomalies_detected.flatten())[0], series[train_size + SEQUENCE_LENGTH:][np.where(anomalies_detected.flatten())[0]], 
            color='green', marker='x', s=100, label='Detected Anomalies', zorder=6)
plt.title('Time Series Anomaly Detection with Predictive LSTM')
plt.xlabel('Time Step (relative to test start)')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()

plt.figure(figsize=(18, 5))
plt.plot(test_errors, label='Test Prediction Error (Absolute)', color='blue', alpha=0.7)
plt.axhline(y=threshold, color='red', linestyle='--', label=f'Threshold ({threshold:.2f})')
plt.scatter(np.where(anomalies_detected.flatten())[0], test_errors[np.where(anomalies_detected.flatten())[0]], 
            color='green', marker='x', s=50, label='Detected Anomalies', zorder=5)
plt.title('Prediction Error and Anomaly Threshold')
plt.xlabel('Time Step (relative to test start)')
plt.ylabel('Absolute Error')
plt.legend()
plt.grid(True)
plt.show()
```

#### Assessment idea
1.  **Question:** You are monitoring sensor data from a critical industrial machine. A sudden, short-lived spike in temperature (a point anomaly) could indicate a severe impending failure. You've trained an LSTM Autoencoder on normal operational data. How would you use this model to detect such a spike, and what is a common pitfall to avoid when setting the anomaly threshold?
    *   **Correct Answer:** To detect the spike, you would feed sequences of sensor data (e.g., a 1-hour window) into the trained LSTM Autoencoder. The model would attempt to reconstruct this sequence. If a sudden temperature spike occurs within the sequence, the autoencoder, having only learned normal patterns, would likely fail to reconstruct that specific anomalous part accurately, resulting in a high reconstruction error for that sequence. This high reconstruction error would serve as the anomaly score. A common pitfall when setting the anomaly threshold is to pick an arbitrary value. Instead, you should analyze the distribution of reconstruction errors from a large dataset of *known normal* operational data. A statistically derived threshold, such as the 99th percentile of training errors or a value based on the mean plus several standard deviations, is more robust than an arbitrary guess.

2.  **Question:** In an anomaly detection system for network traffic, you are concerned about both false positives (flagging normal traffic as anomalous) and false negatives (missing actual attacks). Which evaluation metric would be most appropriate to balance these concerns, and why?
    *   **Correct Answer:** The F1-score would be the most appropriate metric to balance concerns about both false positives and false negatives. Precision (reducing false positives) and Recall (reducing false negatives) are often in tension. A high precision means fewer false alarms, which is good for operational efficiency. A high recall means fewer missed attacks, which is critical for security. The F1-score is the harmonic mean of Precision and Recall, providing a single metric that rewards models with a good balance between these two. Maximizing F1-score encourages a system that is both accurate in its anomaly flags and comprehensive in its detection.

#### AI generation note
Produce a 10-minute video combining animated diagrams and a live coding demo. Start with an animation illustrating different types of time series anomalies (point, contextual, collective) with real-world examples (e.g., credit card fraud, machine failure). Then, transition to a Jupyter Notebook demonstrating the implementation of an LSTM Autoencoder for anomaly detection on a synthetic time series with injected anomalies. Show the training process and then visualize the reconstruction errors. Clearly explain how to set a threshold using percentiles. The video should include a split-screen view showing the original time series with detected anomalies overlaid, and a separate plot of the reconstruction error with the threshold. Conclude with a brief interactive quiz asking learners to identify the type of anomaly or interpret an F1-score. Ensure clear captions and visual aids for complex concepts.

### Chapter 8.3 — Transfer Learning and Few-Shot Learning for Time Series

#### Learning objectives
*   Define transfer learning and few-shot learning in the context of deep learning for time series.
*   Explain how pre-trained models can be adapted for new, related time series forecasting tasks.
*   Implement strategies for fine-tuning pre-trained deep learning models for time series.
*   Discuss the challenges and opportunities of applying transfer learning to diverse time series datasets.

#### Detailed lesson content
In the realm of deep learning, training powerful models often requires vast amounts of labeled data. However, for many real-world time series problems, such extensive datasets are simply not available. This is where **Transfer Learning** and **Few-Shot Learning** become invaluable. Transfer learning involves taking a model that has been pre-trained on a large, general dataset and adapting it to a new, specific task with limited data. The intuition is that the pre-trained model has already learned useful features and patterns from the source domain, and these learned representations can be beneficial for the target domain, even if the tasks are slightly different. For time series, this might mean a model trained on a large collection of sensor data (e.g., industrial IoT) could be fine-tuned for a specific new sensor type or machine.

The process of transfer learning typically involves a few key steps. First, you select a pre-trained model. For time series, this could be a large Transformer model trained on diverse time series datasets, or even a deep LSTM/CNN model trained on a generic forecasting task. Second, you load the pre-trained weights into your model architecture. Third, you modify the output layer of the model to suit your specific target task (e.g., changing the number of output units for a different forecast horizon or switching from classification to regression). Finally, you fine-tune the model on your smaller target dataset. Fine-tuning can involve training only the newly added output layers while keeping the pre-trained layers frozen, or unfreezing some or all of the pre-trained layers and training them with a very small learning rate. The latter approach allows the model to adapt its learned features more specifically to the new data without catastrophically forgetting the general patterns it learned initially.

Consider a scenario where you have a large dataset of electricity consumption from various households (source domain) and a new household for which you only have a few weeks of data (target domain). Instead of training a model from scratch on the few weeks of data (which would likely lead to overfitting), you could take a deep LSTM model pre-trained on the large household dataset. You would then replace its final forecasting layer with a new one and fine-tune this new layer, and perhaps the last few LSTM layers, using the limited data from the new household. This leverages the general patterns of electricity consumption learned from many households, adapting them to the specific consumption habits of the new one.

**Few-Shot Learning** is a more extreme form of transfer learning, where the target task has *very* few examples (e.g., 1-5 examples per class in classification, or very short time series for forecasting). While direct fine-tuning might still be possible, few-shot learning often employs meta-learning techniques. Meta-learning aims to "learn to learn," meaning the model learns how to quickly adapt to new tasks with minimal examples. For time series, this could involve training a meta-learner on a collection of diverse forecasting tasks, such that it learns a good initialization or a good update rule that allows it to quickly achieve reasonable performance on a completely new forecasting task with only a handful of examples. An example is Model-Agnostic Meta-Learning (MAML), which trains a model such that a few gradient steps on a new task's data will lead to good performance.

A common mistake in transfer learning is aggressively fine-tuning the entire pre-trained model on a very small target dataset with a high learning rate. This can quickly lead to **catastrophic forgetting**, where the model loses the valuable general features it learned during pre-training and overfits to the limited new data. It's often safer to start by freezing most pre-trained layers and only training the new output layers. Then, gradually unfreeze earlier layers and use a very small learning rate for fine-tuning. Another safety note is data mismatch: if the source domain data is vastly different from the target domain data (e.g., training on audio signals and then trying to fine-tune for financial time series), transfer learning might not yield significant benefits. Always ensure there's a reasonable degree of similarity or shared underlying structure between the domains.

```python
import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import matplotlib.pyplot as plt
from sklearn.preprocessing import MinMaxScaler

# --- 1. Generate Synthetic Source Data (Large, complex) ---
def generate_source_data(num_samples=5000, seq_len=100):
    t = np.arange(num_samples + seq_len)
    # More complex signal with multiple components
    signal = 0.5 * np.sin(t / 10) + 0.2 * np.cos(t / 5) + 0.1 * np.sin(t / 2) + 0.05 * t
    noise = np.random.normal(0, 0.1, len(signal))
    series = signal + noise
    
    X, Y = [], []
    for i in range(num_samples):
        X.append(series[i:i+seq_len])
        Y.append(series[i+seq_len])
    return np.array(X).reshape(-1, seq_len, 1), np.array(Y).reshape(-1, 1)

X_source, Y_source = generate_source_data()
print(f"Source data shape: X={X_source.shape}, Y={Y_source.shape}")

# --- 2. Build and Pre-train a Base LSTM Model (Source Task) ---
def build_base_lstm(input_shape):
    model = keras.Sequential([
        layers.Input(shape=input_shape),
        layers.LSTM(128, activation='relu', return_sequences=True, name='lstm_1'),
        layers.LSTM(64, activation='relu', name='lstm_2'),
        layers.Dense(32, activation='relu', name='dense_1'),
        layers.Dense(1, activation='linear', name='output_layer')
    ])
    model.compile(optimizer='adam', loss='mse')
    return model

base_model = build_base_lstm(X_source.shape[1:])
base_model.summary()

print("\nPre-training base model on source data...")
base_model.fit(X_source, Y_source, epochs=5, batch_size=64, verbose=0) # Reduced epochs for demo
print("Pre-training complete.")

# --- 3. Generate Synthetic Target Data (Small, slightly different pattern) ---
def generate_target_data(num_samples=100, seq_len=100):
    t = np.arange(num_samples + seq_len)
    # Slightly different signal, e.g., higher frequency or different offset
    signal = 0.7 * np.sin(t / 8) + 0.3 * np.cos(t / 4) + 0.03 * t + 0.5 # Different coefficients and offset
    noise = np.random.normal(0, 0.08, len(signal))
    series = signal + noise
    
    X, Y = [], []
    for i in range(num_samples):
        X.append(series[i:i+seq_len])
        Y.append(series[i+seq_len])
    return np.array(X).reshape(-1, seq_len, 1), np.array(Y).reshape(-1, 1)

X_target, Y_target = generate_target_data()
print(f"Target data shape: X={X_target.shape}, Y={Y_target.shape}")

# --- 4. Transfer Learning: Fine-tuning the Pre-trained Model ---

# Option A: Freeze all layers except the new output layer
transfer_model_frozen = keras.Model(inputs=base_model.input, outputs=base_model.get_layer('dense_1').output)
for layer in transfer_model_frozen.layers:
    layer.trainable = False

# Add a new output layer
new_output = layers.Dense(1, activation='linear', name='new_output_layer')(transfer_model_frozen.output)
transfer_model_frozen = keras.Model(inputs=transfer_model_frozen.input, outputs=new_output)

transfer_model_frozen.compile(optimizer='adam', loss='mse')
print("\nTransfer model (frozen layers) summary:")
transfer_model_frozen.summary()
print("Fine-tuning transfer model with frozen base layers...")
transfer_model_frozen.fit(X_target, Y_target, epochs=10, batch_size=16, verbose=0) # More epochs for small data
print("Fine-tuning complete (frozen layers).")

# Option B: Unfreeze some layers and fine-tune with a small learning rate
transfer_model_unfrozen = keras.Model(inputs=base_model.input, outputs=base_model.output) # Start with full pre-trained model

# Unfreeze the last LSTM layer and the dense layers
for layer in transfer_model_unfrozen.layers:
    if layer.name in ['lstm_2', 'dense_1', 'output_layer']: # or any specific layers you want to unfreeze
        layer.trainable = True
    else:
        layer.trainable = False # Keep earlier layers frozen

transfer_model_unfrozen.compile(optimizer=keras.optimizers.Adam(learning_rate=1e-4), loss='mse') # Small learning rate
print("\nTransfer model (partially unfrozen layers) summary:")
transfer_model_unfrozen.summary()
print("Fine-tuning transfer model with partially unfrozen layers (small LR)...")
transfer_model_unfrozen.fit(X_target, Y_target, epochs=10, batch_size=16, verbose=0)
print("Fine-tuning complete (partially unfrozen layers).")

# --- 5. Compare Performance (Simplified) ---
# For a real comparison, you'd also train a model from scratch on target data
# and evaluate on a separate test set. Here, we'll just show predictions.

# Predict on target data using the fine-tuned model
predictions_frozen = transfer_model_frozen.predict(X_target)
predictions_unfrozen = transfer_model_unfrozen.predict(X_target)

# Plotting
plt.figure(figsize=(15, 6))
plt.plot(Y_target, label='Actual Target Values', color='blue', alpha=0.7)
plt.plot(predictions_frozen, label='Frozen Fine-tuned Predictions', color='red', linestyle='--')
plt.plot(predictions_unfrozen, label='Unfrozen Fine-tuned Predictions (small LR)', color='green', linestyle=':')
plt.title('Transfer Learning for Time Series Forecasting')
plt.xlabel('Time Step')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()

# Train a model from scratch on the small target dataset for comparison
print("\nTraining a model from scratch on target data for comparison...")
model_from_scratch = build_base_lstm(X_target.shape[1:])
model_from_scratch.fit(X_target, Y_target, epochs=10, batch_size=16, verbose=0)
predictions_scratch = model_from_scratch.predict(X_target)

plt.figure(figsize=(15, 6))
plt.plot(Y_target, label='Actual Target Values', color='blue', alpha=0.7)
plt.plot(predictions_scratch, label='From Scratch Predictions', color='purple', linestyle='-.')
plt.plot(predictions_unfrozen, label='Unfrozen Fine-tuned Predictions (small LR)', color='green', linestyle=':')
plt.title('Comparison: From Scratch vs. Fine-tuned')
plt.xlabel('Time Step')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()
```

#### Key concepts
*   **Transfer Learning:** A machine learning technique where a model trained on one task (source domain) is re-purposed for a second related task (target domain), leveraging learned features to improve performance on the new task, especially with limited data.
*   **Few-Shot Learning:** A subfield of machine learning where models are trained to learn from very few examples (e.g., 1-5) per class or task, often employing meta-learning techniques.
*   **Pre-trained Model:** A deep learning model whose weights have been learned from a large dataset on a related task.
*   **Fine-tuning:** The process of adapting a pre-trained model to a new task by continuing to train its weights (either partially or entirely) on the new, smaller dataset, typically with a lower learning rate.
*   **Catastrophic Forgetting:** A phenomenon where a neural network, when fine-tuned on new data, loses the knowledge and representations it learned from the original pre-training data.
*   **Meta-Learning (Learning to Learn):** A type of machine learning that aims to train models to learn new tasks or adapt to new data distributions quickly and efficiently, often by learning optimal initialization parameters or update rules.

#### Hands-on activity
**Activity: Transfer Learning for a New Sensor Forecasting Task**

Imagine you have a pre-trained LSTM model that forecasts temperature from a specific type of industrial sensor. Now, you have a *new* type of sensor, but only a small amount of historical data for it. Your task is to apply transfer learning to adapt the pre-trained model to forecast for this new sensor.

1.  **Pre-trained Model (Provided):** Use the `build_base_lstm` and pre-trained weights from the lesson content (simulated by running `base_model.fit`).
2.  **Generate New Sensor Data:** Create a synthetic time series for a "new sensor" that has a similar underlying pattern but with a different amplitude, frequency, or offset, and significantly less data points (e.g., 100-200 samples).
3.  **Adapt and Fine-tune:**
    *   Load the pre-trained `base_model`.
    *   Create a new model by taking the pre-trained layers (excluding the final output layer).
    *   **Freeze all layers except the last LSTM layer (`lstm_2`) and add a new `Dense(1)` output layer.**
    *   Compile this new model with `optimizer=keras.optimizers.Adam(learning_rate=1e-4)` and `loss='mse'`.
    *   Train this fine-tuned model on the small "new sensor" dataset.
4.  **Compare:**
    *   Train a separate LSTM model *from scratch* on the same small "new sensor" dataset.
    *   Make predictions on the "new sensor" data using both the fine-tuned model and the model trained from scratch.
    *   Plot the actual values, the fine-tuned predictions, and the from-scratch predictions on the same graph to visually compare their performance. Observe how transfer learning helps.

```python
import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import matplotlib.pyplot as plt
from sklearn.preprocessing import MinMaxScaler

# --- 1. Pre-trained Model (from lesson content) ---
def generate_source_data(num_samples=5000, seq_len=100):
    t = np.arange(num_samples + seq_len)
    signal = 0.5 * np.sin(t / 10) + 0.2 * np.cos(t / 5) + 0.1 * np.sin(t / 2) + 0.05 * t
    noise = np.random.normal(0, 0.1, len(signal))
    series = signal + noise
    X, Y = [], []
    for i in range(num_samples):
        X.append(series[i:i+seq_len])
        Y.append(series[i+seq_len])
    return np.array(X).reshape(-1, seq_len, 1), np.array(Y).reshape(-1, 1)

X_source, Y_source = generate_source_data()

def build_base_lstm(input_shape):
    model = keras.Sequential([
        layers.Input(shape=input_shape),
        layers.LSTM(128, activation='relu', return_sequences=True, name='lstm_1'),
        layers.LSTM(64, activation='relu', name='lstm_2'),
        layers.Dense(32, activation='relu', name='dense_1'),
        layers.Dense(1, activation='linear', name='output_layer')
    ])
    model.compile(optimizer='adam', loss='mse')
    return model

base_model = build_base_lstm(X_source.shape[1:])
print("Pre-training base model on source data...")
base_model.fit(X_source, Y_source, epochs=5, batch_size=64, verbose=0)
print("Pre-training complete.")

# --- 2. Generate New Sensor Data (Target Task) ---
def generate_new_sensor_data(num_samples=150, seq_len=100):
    t = np.arange(num_samples + seq_len)
    # New sensor data: different amplitude, frequency, and offset
    signal = 1.0 * np.sin(t / 7) + 0.4 * np.cos(t / 3) + 0.02 * t + 1.2
    noise = np.random.normal(0, 0.05, len(signal))
    series = signal + noise
    X, Y = [], []
    for i in range(num_samples):
        X.append(series[i:i+seq_len])
        Y.append(series[i+seq_len])
    return np.array(X).reshape(-1, seq_len, 1), np.array(Y).reshape(-1, 1)

X_new_sensor, Y_new_sensor = generate_new_sensor_data()
print(f"\nNew sensor data shape: X={X_new_sensor.shape}, Y={Y_new_sensor.shape}")

# --- 3. Adapt and Fine-tune ---
# Create a new model from the base model, excluding the final output layer
# We want to keep lstm_1 and lstm_2. The output of lstm_2 is the input to the new dense layer.
transfer_model = keras.Sequential(base_model.layers[:-2]) # Exclude dense_1 and output_layer

# Freeze all layers in the base part
for layer in transfer_model.layers:
    layer.trainable = False

# Unfreeze the last LSTM layer (lstm_2)
transfer_model.get_layer('lstm_2').trainable = True

# Add new dense layers for the target task
transfer_model.add(layers.Dense(32, activation='relu', name='new_dense_1'))
transfer_model.add(layers.Dense(1, activation='linear', name='new_output_layer'))

transfer_model.compile(optimizer=keras.optimizers.Adam(learning_rate=1e-4), loss='mse')
print("\nTransfer model (partially unfrozen) summary:")
transfer_model.summary()

print("Fine-tuning transfer model on new sensor data...")
transfer_model.fit(X_new_sensor, Y_new_sensor, epochs=50, batch_size=8, verbose=0) # More epochs, smaller batch for small data
print("Fine-tuning complete.")

# --- 4. Compare ---
# Train a model from scratch on the small new sensor dataset
print("\nTraining a model from scratch on new sensor data for comparison...")
model_from_scratch = build_base_lstm(X_new_sensor.shape[1:])
model_from_scratch.fit(X_new_sensor, Y_new_sensor, epochs=50, batch_size=8, verbose=0)
print("From scratch training complete.")

# Make predictions
predictions_transfer = transfer_model.predict(X_new_sensor)
predictions_scratch = model_from_scratch.predict(X_new_sensor)

# Plotting
plt.figure(figsize=(15, 6))
plt.plot(Y_new_sensor, label='Actual New Sensor Values', color='blue', alpha=0.7)
plt.plot(predictions_transfer, label='Transfer Learning Predictions', color='red', linestyle='--')
plt.plot(predictions_scratch, label='From Scratch Predictions', color='green', linestyle=':')
plt.title('Transfer Learning vs. From Scratch for New Sensor Forecasting')
plt.xlabel('Time Step')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()
```

#### Assessment idea
1.  **Question:** You have a deep learning model pre-trained on a massive dataset of global stock market indices for daily forecasting. Now, your task is to forecast the price of a specific cryptocurrency, for which you only have a few months of hourly data. Describe the steps you would take to apply transfer learning to this problem, and explain a key risk you need to mitigate.
    *   **Correct Answer:**
        1.  **Load Pre-trained Model:** Load the architecture and weights of the deep learning model pre-trained on stock market indices.
        2.  **Adapt Input/Output:** Ensure the input layer can handle the hourly frequency and potentially different feature set of cryptocurrency data. The output layer would need to be adapted for the specific cryptocurrency price prediction task (e.g., a single regression output).
        3.  **Feature Engineering (Optional but Recommended):** While the model might learn temporal features, creating relevant features for cryptocurrency (e.g., volume, sentiment from social media, blockchain metrics) could significantly help.
        4.  **Fine-tuning Strategy:**
            *   **Initial Phase (Frozen Layers):** Freeze most of the pre-trained layers (especially the early feature extraction layers) and only train the newly added output layer(s) on the few months of cryptocurrency data. This allows the model to learn the specific mapping for crypto without corrupting the general time series patterns.
            *   **Second Phase (Unfrozen Layers):** Gradually unfreeze some of the later pre-trained layers (e.g., the last LSTM or Transformer block) and continue training with a very small learning rate. This allows the model to subtly adapt its learned representations to the nuances of cryptocurrency data.
        5.  **Evaluation:** Evaluate the fine-tuned model on a held-out test set of cryptocurrency data.
        A key risk to mitigate is **catastrophic forgetting**. Because the target dataset (cryptocurrency) is small and potentially has different underlying dynamics than stock indices, aggressively fine-tuning all layers with a high learning rate could cause the model to forget the valuable general patterns it learned from the large stock market dataset, leading to poor performance and overfitting to the limited crypto data. Using a staged fine-tuning approach with low learning rates helps prevent this.

2.  **Question:** What is the primary difference between traditional transfer learning and few-shot learning, and in what scenario would you explicitly seek a few-shot learning approach over standard fine-tuning?
    *   **Correct Answer:** The primary difference lies in the *amount* of data available for the target task. Traditional transfer learning typically assumes you have a moderately sized target dataset (enough for effective fine-tuning without complete catastrophic forgetting), whereas few-shot learning deals with scenarios where there are *extremely* limited examples for the new task (e.g., 1-5 examples). You would explicitly seek a few-shot learning approach when you encounter a brand new time series forecasting task for which you literally have only a handful of historical observations, making even standard fine-tuning challenging due to the severe data scarcity. In such cases, meta-learning techniques (which are central to few-shot learning) are designed to enable rapid adaptation from such minimal data.

#### AI generation note
Create a 12-minute mixed-format lesson. Start with an animated explanation of transfer learning and few-shot learning concepts, using analogies like learning to drive different types of vehicles. Then, transition to a live coding demonstration in a Jupyter Notebook. Show the process of loading a pre-trained LSTM model (simulated training on source data), adapting its layers for a new, small target time series dataset (e.g., a new sensor), and then fine-tuning it. Clearly demonstrate freezing and unfreezing layers and using a low learning rate. Compare the performance visually by plotting predictions from the fine-tuned model against a model trained from scratch on the small dataset. Highlight the benefits of transfer learning. Include an interactive element where learners identify which layers should be frozen/unfrozen in a given scenario.

### Chapter 8.4 — Explainable AI (XAI) for Time Series Models

#### Learning objectives
*   Understand the importance of Explainable AI (XAI) in deep learning for time series forecasting.
*   Apply model-agnostic XAI techniques like SHAP and LIME to interpret deep learning time series predictions.
*   Utilize attention mechanisms within Transformer models as an intrinsic interpretability tool.
*   Discuss the challenges and best practices for explaining complex deep learning time series models.

#### Detailed lesson content
Deep learning models, particularly those with complex architectures like LSTMs, GRUs, and Transformers, are often considered "black boxes." While they can achieve impressive forecasting accuracy, understanding *why* they make a particular prediction can be challenging. This lack of transparency can be a significant barrier in critical applications like healthcare, finance, or industrial control, where trust, regulatory compliance, and debugging capabilities are paramount. **Explainable AI (XAI)** aims to address this by developing methods to make AI models more understandable to humans. For time series forecasting, XAI helps answer questions like: Which past time steps or input features were most influential in predicting the next value? Why did the model predict a sudden spike or dip?

One powerful category of XAI techniques is **model-agnostic methods**, which can be applied to any black-box model without needing to know its internal architecture. Two prominent examples are SHAP (SHapley Additive exPlanations) and LIME (Local Interpretable Model-agnostic Explanations). **SHAP** values are based on game theory and provide a unified measure of feature importance. For a time series prediction, SHAP can tell you how much each past time step's value (or each feature at a specific time step) contributed to the final forecast, relative to a baseline prediction. It works by creating a coalition of features and calculating the marginal contribution of each feature across all possible permutations. This can be computationally intensive but provides a globally consistent and locally accurate explanation. For time series, you might calculate SHAP values for each feature at each time step in an input sequence to understand their impact on the predicted future value.

**LIME**, on the other hand, focuses on providing local explanations. For a specific prediction, LIME perturbs the input data (e.g., by masking out certain time steps or features in a time series sequence), feeds these perturbed samples to the black-box model, and then trains a simple, interpretable model (like a linear model) on the perturbed data and their corresponding predictions. The weights of this local interpretable model then indicate the importance of different features (time steps/values) for that specific prediction. LIME is generally faster than SHAP but provides only local explanations. For time series, LIME can highlight which specific segments or features within an input window were most influential for a particular forecast.

Beyond model-agnostic methods, some deep learning architectures offer **intrinsic interpretability**. **Attention mechanisms**, commonly found in Transformer models and increasingly in LSTMs, are a prime example. Attention allows the model to dynamically weigh the importance of different parts of the input sequence when making a prediction. By visualizing the attention weights, we can see which past time steps the model "focused" on most when generating a forecast. For instance, if a Transformer model is forecasting stock prices, its attention mechanism might reveal that it heavily weighted the closing prices from 1 day, 5 days, and 20 days ago, while largely ignoring data from 10 days ago. This provides a direct, built-in explanation of the model's focus.

When applying XAI, a common mistake is over-interpreting the explanations. XAI tools provide insights into model behavior, but they don't necessarily reveal true causal relationships in the underlying data. Another pitfall is using XAI on poorly performing models; an explanation of a bad prediction is still an explanation of a bad prediction. Always ensure your model is performing well before diving deep into its interpretability. Safety notes include being mindful of computational cost, especially for SHAP on long time series or large datasets, and ensuring that the perturbations used by LIME are meaningful for time series data (e.g., masking entire time steps rather than just individual features within a step). The choice of baseline for SHAP (e.g., average time series, zero vector) can also significantly impact the interpretation.

```python
import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import matplotlib.pyplot as plt
import shap # Make sure to install: pip install shap
from sklearn.preprocessing import MinMaxScaler

# --- 1. Generate Synthetic Time Series Data ---
def generate_time_series(n_steps=500, seq_len=20):
    time = np.arange(n_steps + seq_len)
    series = np.sin(time / 10) + np.cos(time / 5) + np.random.normal(0, 0.1, len(time))
    
    X, Y = [], []
    for i in range(n_steps):
        X.append(series[i:i+seq_len])
        Y.append(series[i+seq_len])
    return np.array(X).reshape(-1, seq_len, 1), np.array(Y).reshape(-1, 1), series

X_data, Y_data, full_series = generate_time_series(n_steps=1000, seq_len=50)

# Scale data
scaler_X = MinMaxScaler()
X_data_scaled = scaler_X.fit_transform(X_data.reshape(-1, X_data.shape[-1])).reshape(X_data.shape)
scaler_Y = MinMaxScaler()
Y_data_scaled = scaler_Y.fit_transform(Y_data)

# --- 2. Build and Train a Simple LSTM Model ---
def build_lstm_model(input_shape):
    model = keras.Sequential([
        layers.Input(shape=input_shape),
        layers.LSTM(64, activation='relu'),
        layers.Dense(32, activation='relu'),
        layers.Dense(1, activation='linear')
    ])
    model.compile(optimizer='adam', loss='mse')
    return model

lstm_model = build_lstm_model(X_data_scaled.shape[1:])
lstm_model.fit(X_data_scaled, Y_data_scaled, epochs=10, batch_size=32, verbose=0)
print("LSTM model trained.")

# --- 3. Apply SHAP for Model Interpretation ---
# SHAP requires a background dataset and a prediction function
# For time series, the background dataset should represent typical inputs
background = X_data_scaled[np.random.choice(X_data_scaled.shape[0], 100, replace=False)]

# Define a prediction function for SHAP
def f_predict(x):
    # x will be (num_samples, seq_len, 1)
    return lstm_model.predict(x)

# Create a SHAP Explainer
# Using DeepExplainer for Keras/TensorFlow models
explainer = shap.DeepExplainer(lstm_model, background)

# Select a specific instance to explain (e.g., the last sequence in the test set)
instance_to_explain_scaled = X_data_scaled[-10:-9] # (1, seq_len, 1)
instance_to_explain_unscaled = scaler_X.inverse_transform(instance_to_explain_scaled.reshape(-1,1)).reshape(instance_to_explain_scaled.shape)

# Calculate SHAP values for the instance
shap_values = explainer.shap_values(instance_to_explain_scaled)

# shap_values will be a list of arrays, one for each output. For a single output, it's [array].
# The shape of shap_values[0] will be (1, seq_len, 1)
print(f"SHAP values shape: {shap_values[0].shape}")

# Visualize SHAP values for the instance
plt.figure(figsize=(15, 6))
plt.plot(instance_to_explain_unscaled[0, :, 0], label='Input Sequence (Unscaled)', color='blue')
plt.bar(np.arange(SEQUENCE_LENGTH), shap_values[0][0, :, 0], 
        width=0.8, color=['red' if s < 0 else 'green' for s in shap_values[0][0, :, 0]], 
        alpha=0.6, label='SHAP Value Contribution')
plt.title('SHAP Values for a Single Time Series Prediction')
plt.xlabel('Time Step in Sequence')
plt.ylabel('Value / SHAP Contribution')
plt.legend()
plt.grid(True)
plt.show()

# --- Example: Intrinsic Interpretability with Attention (Conceptual) ---
# For a full attention example, we'd need a Transformer model.
# Here's a conceptual placeholder for how you'd extract and visualize attention weights.

# Assume you have a Transformer model with an attention layer
# class TransformerBlock(layers.Layer):
#     def __init__(self, embed_dim, num_heads, ff_dim, rate=0.1):
#         super().__init__()
#         self.att = layers.MultiHeadAttention(num_heads=num_heads, key_dim=embed_dim)
#         self.ffn = keras.Sequential(
#             [layers.Dense(ff_dim, activation="relu"), layers.Dense(embed_dim),]
#         )
#         self.layernorm1 = layers.LayerNormalization(epsilon=1e-6)
#         self.layernorm2 = layers.LayerNormalization(epsilon=1e-6)
#         self.dropout1 = layers.Dropout(rate)
#         self.dropout2 = layers.Dropout(rate)

#     def call(self, inputs, training):
#         attn_output, attention_weights = self.att(inputs, inputs, return_attention_scores=True) # key part
#         attn_output = self.dropout1(attn_output, training=training)
#         out1 = self.layernorm1(inputs + attn_output)
#         ffn_output = self.ffn(out1)
#         ffn_output = self.dropout2(ffn_output, training=training)
#         return self.layernorm2(out1 + ffn_output), attention_weights

# If you had a Transformer model, you would get attention_weights from its call method.
# Then, you would visualize these weights.
# For example, for a single prediction:
# input_sequence = X_data_scaled[-1:]
# _, attention_weights = transformer_model(input_sequence)
# # attention_weights would typically be of shape (batch_size, num_heads, query_seq_len, key_seq_len)
# # For a single head, single instance, it might be (1, 1, seq_len, seq_len)
# avg_attention_weights = attention_weights[0, 0, -1, :].numpy() # Attention of last token to all previous
# plt.figure(figsize=(15, 6))
# plt.bar(np.arange(SEQUENCE_LENGTH), avg_attention_weights)
# plt.title('Attention Weights for Last Time Step Prediction')
# plt.xlabel('Time Step in Sequence')
# plt.ylabel('Attention Weight')
# plt.grid(True)
# plt.show()
```

#### Key concepts
*   **Explainable AI (XAI):** A field of AI that focuses on developing methods and techniques to make AI models more understandable, transparent, and interpretable to humans.
*   **Model-Agnostic XAI:** Interpretability techniques that can be applied to any machine learning model without needing access to its internal architecture or parameters.
*   **SHAP (SHapley Additive exPlanations):** A model-agnostic XAI method based on game theory that assigns each feature an importance value (SHAP value) for a particular prediction, representing its contribution to moving the prediction from the baseline.
*   **LIME (Local Interpretable Model-agnostic Explanations):** A model-agnostic XAI method that explains individual predictions by perturbing the input data, observing the black-box model's responses, and training a simple, interpretable local model on these perturbed samples.
*   **Intrinsic Interpretability:** The property of a model being inherently understandable due to its architecture, such as attention mechanisms in Transformers.
*   **Attention Mechanism:** A component in neural networks (especially Transformers) that allows the model to dynamically weigh the importance of different parts of an input sequence when processing information or making a prediction.

#### Hands-on activity
**Activity: Interpret LSTM Forecasts using SHAP**

Your task is to use SHAP to understand which parts of an input time series sequence are most influential for a given LSTM's prediction.

1.  **Pre-trained LSTM (Provided):** Use the `build_lstm_model` and trained `lstm_model` from the lesson content.
2.  **Select an Instance:** Choose a specific input sequence from your `X_data_scaled` (e.g., `X_data_scaled[100:101]`) to explain.
3.  **Configure SHAP:**
    *   Define a `background` dataset for SHAP (e.g., 100 random samples from `X_data_scaled`).
    *   Create a prediction function `f_predict` that takes a batch of sequences and returns the model's predictions.
    *   Initialize `shap.DeepExplainer` with your `lstm_model` and `background`.
4.  **Calculate and Visualize SHAP Values:**
    *   Compute SHAP values for your chosen instance.
    *   Plot the original (unscaled) input sequence.
    *   Overlay a bar chart of the SHAP values for each time step in the sequence. Use different colors for positive and negative contributions to clearly show which time steps push the prediction up or down.
    *   **Reflection:** Based on the plot, describe which time steps appear most important for the prediction and why this might be the case (e.g., recent values, specific patterns).

```python
import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import matplotlib.pyplot as plt
import shap # Make sure to install: pip install shap
from sklearn.preprocessing import MinMaxScaler

# --- 1. Pre-trained LSTM (from lesson content) ---
def generate_time_series(n_steps=500, seq_len=20):
    time = np.arange(n_steps + seq_len)
    series = np.sin(time / 10) + np.cos(time / 5) + np.random.normal(0, 0.1, len(time))
    
    X, Y = [], []
    for i in range(n_steps):
        X.append(series[i:i+seq_len])
        Y.append(series[i+seq_len])
    return np.array(X).reshape(-1, seq_len, 1), np.array(Y).reshape(-1, 1), series

X_data, Y_data, full_series = generate_time_series(n_steps=1000, seq_len=50)

# Scale data
scaler_X = MinMaxScaler()
X_data_scaled = scaler_X.fit_transform(X_data.reshape(-1, X_data.shape[-1])).reshape(X_data.shape)
scaler_Y = MinMaxScaler()
Y_data_scaled = scaler_Y.fit_transform(Y_data)

def build_lstm_model(input_shape):
    model = keras.Sequential([
        layers.Input(shape=input_shape),
        layers.LSTM(64, activation='relu'),
        layers.Dense(32, activation='relu'),
        layers.Dense(1, activation='linear')
    ])
    model.compile(optimizer='adam', loss='mse')
    return model

lstm_model = build_lstm_model(X_data_scaled.shape[1:])
lstm_model.fit(X_data_scaled, Y_data_scaled, epochs=10, batch_size=32, verbose=0)
print("LSTM model trained.")

# --- 2. Select an Instance ---
# Let's pick an instance from the end of the data for explanation
instance_index = -50
instance_to_explain_scaled = X_data_scaled[instance_index : instance_index + 1] # (1, seq_len, 1)
instance_to_explain_unscaled = scaler_X.inverse_transform(instance_to_explain_scaled.reshape(-1,1)).reshape(instance_to_explain_scaled.shape)

# --- 3. Configure SHAP ---
# Background dataset for SHAP (100 random samples)
background = X_data_scaled[np.random.choice(X_data_scaled.shape[0], 100, replace=False)]

# Prediction function for SHAP
def f_predict(x):
    return lstm_model.predict(x)

# Initialize SHAP DeepExplainer
explainer = shap.DeepExplainer(lstm_model, background)

# --- 4. Calculate and Visualize SHAP Values ---
shap_values = explainer.shap_values(instance_to_explain_scaled)

plt.figure(figsize=(15, 6))
plt.plot(instance_to_explain_unscaled[0, :, 0], label='Input Sequence (Unscaled)', color='blue', marker='o', markersize=4, linestyle='-')
plt.bar(np.arange(instance_to_explain_unscaled.shape[1]), shap_values[0][0, :, 0], 
        width=0.8, color=['red' if s < 0 else 'green' for s in shap_values[0][0, :, 0]], 
        alpha=0.6, label='SHAP Value Contribution')
plt.title(f'SHAP Values for Time Series Prediction at Index {instance_index}')
plt.xlabel('Time Step in Sequence (Relative)')
plt.ylabel('Value / SHAP Contribution')
plt.legend()
plt.grid(True)
plt.axhline(0, color='gray', linewidth=0.8) # Add a zero line for reference
plt.show()

# Reflection:
print("\nReflection:")
print("The SHAP values indicate the contribution of each time step in the input sequence to the final prediction.")
print("Green bars represent positive contributions (pushing the prediction higher), while red bars represent negative contributions (pushing the prediction lower).")
print("Typically, recent time steps (towards the right of the plot) tend to have stronger contributions due to the recency bias of LSTMs.")
print("However, specific patterns or turning points further back in the sequence can also show significant SHAP values if the model learned to rely on them.")
print("For this specific plot, observe if any particular peaks, troughs, or trends in the input sequence align with large positive or negative SHAP values.")
```

#### Assessment idea
1.  **Question:** You are using a Transformer model to forecast energy demand, and your stakeholders want to understand which historical periods the model considers most important for its current forecast. Which XAI technique would be most directly applicable and provide intrinsic interpretability for this specific model type? Explain how you would use it.
    *   **Correct Answer:** The **Attention Mechanism** within the Transformer model would be most directly applicable and provide intrinsic interpretability. Transformers are built upon self-attention, which calculates weights indicating the relevance of each input token (or time step in this context) to every other token. To understand which historical periods are important for the current forecast, you would extract and visualize the attention weights from the Transformer's attention heads. Specifically, you would look at the attention scores that the final output prediction (or the last token in the sequence, if predicting the next step) assigns to all previous time steps in the input sequence. Higher attention weights indicate periods that the model "focused" on more, directly revealing their perceived importance for the forecast.

2.  **Question:** You have a proprietary deep learning model for financial time series forecasting, and you need to explain a specific prediction to a regulator. You do not have access to the model's internal architecture, only its prediction API. Which model-agnostic XAI technique would be suitable for generating a local explanation for this single prediction, and what is a potential drawback of this method?
    *   **Correct Answer:** **LIME (Local Interpretable Model-agnostic Explanations)** would be a suitable model-agnostic technique for generating a local explanation for a single prediction. LIME works by perturbing the specific input (e.g., masking out certain features or time steps in the financial time series), feeding these perturbed inputs to the black-box model's API to get predictions, and then training a simple, interpretable model (like a linear regressor) on the perturbed data and their corresponding black-box predictions. The weights of this local model then explain the importance of different features for that particular prediction. A potential drawback of LIME is that its explanations are *local* and may not generalize to other predictions. The choice of perturbation strategy for time series (e.g., how to mask or modify segments) can also significantly influence the explanation, and if not done carefully, it might generate unrealistic perturbed samples.

#### AI generation note
Design an 11-minute video lesson with a strong visual component. Start with an animated segment explaining the "black box" problem and the need for XAI, using a time series forecasting example (e.g., predicting stock prices). Then, transition to a live coding demo in a Jupyter Notebook. First, show a simple LSTM model making a prediction. Then, integrate SHAP to explain that prediction. Visually represent the SHAP values using a waterfall plot or a bar chart overlaid on the input time series, clearly indicating positive/negative contributions. Briefly discuss the concept of attention mechanisms with a simple diagram, showing how attention weights can intrinsically reveal important time steps. Conclude with a short reflection prompt asking learners to consider ethical implications of XAI in sensitive domains. Ensure high-contrast visuals for SHAP plots and clear code comments.

### Chapter 8.5 — Real-time Forecasting and Online Learning

#### Learning objectives
*   Differentiate between batch forecasting and real-time/online forecasting paradigms.
*   Understand the architectural considerations for building real-time deep learning forecasting systems.
*   Implement strategies for online learning, including continuous model retraining and incremental updates.
*   Discuss challenges like data drift, concept drift, and computational constraints in real-time environments.

#### Detailed lesson content
Most of the deep learning models we've discussed so far operate in a **batch forecasting** paradigm: data is collected over a period, a model is trained offline on this historical batch, and then it's used to make predictions for a future period. This works well for many applications, but it falls short when forecasts are needed instantaneously or when the underlying data patterns change rapidly. This is where **Real-time Forecasting** and **Online Learning** become crucial. Real-time forecasting refers to systems that can ingest new data as it arrives and produce forecasts with minimal latency, often within milliseconds or seconds. Online learning (or incremental learning) takes this a step further by allowing the model itself to continuously adapt and update its parameters as new data streams in, without requiring a full retraining from scratch.

Architecturally, building real-time deep learning forecasting systems involves several key components. At the core is a **streaming data pipeline** capable of ingesting data from various sources (e.g., IoT sensors, financial feeds, web analytics) using technologies like Apache Kafka, RabbitMQ, or AWS Kinesis. This data then needs to be preprocessed on the fly, often using stream processing frameworks (e.g., Apache Flink, Spark Streaming) to perform tasks like scaling, windowing, and feature extraction. The trained deep learning model is then deployed as a **low-latency inference service** (e.g., a REST API endpoint) that consumes these preprocessed data streams and outputs predictions. For deep learning models, this often means deploying optimized versions (e.g., using TensorFlow Lite, ONNX Runtime, or TorchScript) on specialized hardware (GPUs, TPUs, edge devices) to meet strict latency requirements.

The true power of real-time forecasting is unlocked with **Online Learning**. In dynamic environments, the relationships between features and targets can change over time, a phenomenon known as **concept drift**. For example, consumer buying patterns might shift due to a new product launch or economic changes. A batch-trained model would quickly become stale. Online learning addresses this by either continuously retraining the model on a sliding window of recent data or by incrementally updating its weights. **Continuous retraining** involves periodically (e.g., hourly, daily) retraining the entire model or a significant portion of it on the most recent data. This is more robust but computationally expensive. **Incremental learning** aims to update the model's weights with each new data point or small batch, often using techniques like stochastic gradient descent directly on the incoming stream. This is faster but can be prone to instability or catastrophic forgetting if not carefully managed.

Implementing online learning with deep neural networks presents unique challenges. Deep learning models are typically optimized with large batch sizes and many epochs, which is not suitable for single-sample updates. One common strategy is to use **mini-batch online learning**, where the model is updated on small batches of recent data as they accumulate. Another approach is to employ **transfer learning in an online setting**, where a robust base model is pre-trained offline, and only its final layers are continuously fine-tuned with new data. This helps prevent catastrophic forgetting. Techniques like **reservoir sampling** can be used to maintain a representative sample of historical data for retraining or validation.

Common mistakes in real-time forecasting include underestimating the latency requirements of the entire pipeline (from data ingestion to prediction delivery), neglecting proper error handling in streaming environments, and failing to monitor for data drift or concept drift. **Data drift** refers to changes in the statistical properties of the input features, while **concept drift** refers to changes in the relationship between input features and the target variable. Both can severely degrade model performance. Safety notes for online learning include implementing robust checkpointing mechanisms to save model states, using adaptive learning rates, and having a fallback mechanism to revert to a stable, previously trained model if online updates lead to performance degradation. It's also critical to have real-time monitoring of model performance and data quality.

```python
import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import time
import collections
from sklearn.preprocessing import MinMaxScaler

# --- 1. Simulate a Real-time Data Stream ---
def simulate_data_stream(total_steps=1000, anomaly_at=None):
    t = 0
    while t < total_steps:
        # Simulate a base signal with some noise
        value = 0.5 * np.sin(t / 10) + 0.2 * np.cos(t / 5) + np.random.normal(0, 0.1)
        
        # Introduce a concept drift or anomaly after a certain point
        if anomaly_at and t > anomaly_at:
            value += np.sin((t - anomaly_at) / 2) * 0.5 # A new pattern emerges
        
        yield t, value
        t += 1
        time.sleep(0.01) # Simulate real-time delay

# --- 2. Data Preprocessing for Online Learning ---
# Use a deque to maintain a sliding window of recent data
SEQUENCE_LENGTH = 50
BUFFER_SIZE = 100 # How many recent (X, Y) pairs to keep for retraining
data_buffer = collections.deque(maxlen=BUFFER_SIZE + SEQUENCE_LENGTH) # Need enough for sequences + target
scaler_X = MinMaxScaler()
scaler_Y = MinMaxScaler()

# Initial data for scaler fitting and model training
initial_data_points = 200
initial_series = [v for _, v in simulate_data_stream(initial_data_points)]
scaler_X.fit(np.array(initial_series).reshape(-1, 1))
scaler_Y.fit(np.array(initial_series).reshape(-1, 1)) # Assuming Y is same scale as X

# --- 3. Build a Simple LSTM Model for Forecasting ---
def build_lstm_model(input_shape):
    model = keras.Sequential([
        layers.Input(shape=input_shape),
        layers.LSTM(64, activation='relu'),
        layers.Dense(32, activation='relu'),
        layers.Dense(1, activation='linear')
    ])
    model.compile(optimizer='adam', loss='mse')
    return model

lstm_model = build_lstm_model((SEQUENCE_LENGTH, 1))
lstm_model.summary()

# Initial training on a small batch of data
def prepare_batch_data(buffer, seq_len):
    if len(buffer) < seq_len + 1:
        return None, None
    
    X_batch, Y_batch = [], []
    for i in range(len(buffer) - seq_len):
        X_batch.append(list(buffer)[i : i + seq_len])
        Y_batch.append(list(buffer)[i + seq_len])
    
    X_batch = np.array(X_batch).reshape(-1, seq_len, 1)
    Y_batch = np.array(Y_batch).reshape(-1, 1)
    
    X_scaled = scaler_X.transform(X_batch.reshape(-1, 1)).reshape(X_batch.shape)
    Y_scaled = scaler_Y.transform(Y_batch)
    return X_scaled, Y_scaled

# Populate buffer with initial data and train
for val in initial_series:
    data_buffer.append(val)

X_initial, Y_initial = prepare_batch_data(data_buffer, SEQUENCE_LENGTH)
if X_initial is not None:
    print(f"\nInitial training on {X_initial.shape[0]} samples...")
    lstm_model.fit(X_initial, Y_initial, epochs=10, batch_size=16, verbose=0)
    print("Initial training complete.")
else:
    print("Not enough initial data to train.")

# --- 4. Online Learning Loop (Simulated Continuous Retraining) ---
print("\nStarting simulated real-time forecasting and online learning...")
forecasts = []
actual_values = []
retrain_interval = 50 # Retrain every 50 new data points
data_stream = simulate_data_stream(total_steps=500, anomaly_at=300) # Continue stream after initial

for i, (t_step, new_value) in enumerate(data_stream):
    actual_values.append(new_value)
    data_buffer.append(new_value)

    # Ensure enough data for at least one sequence
    if len(data_buffer) >= SEQUENCE_LENGTH:
        # Prepare the latest sequence for prediction
        current_sequence_unscaled = np.array(list(data_buffer)[-SEQUENCE_LENGTH:]).reshape(1, SEQUENCE_LENGTH, 1)
        current_sequence_scaled = scaler_X.transform(current_sequence_unscaled.reshape(-1, 1)).reshape(current_sequence_unscaled.shape)
        
        # Make a real-time prediction
        scaled_prediction = lstm_model.predict(current_sequence_scaled, verbose=0)[0, 0]
        unscaled_prediction = scaler_Y.inverse_transform([[scaled_prediction]])[0, 0]
        forecasts.append(unscaled_prediction)
        
        # print(f"Time: {t_step}, Actual: {new_value:.2f}, Forecast: {unscaled_prediction:.2f}")

        # Online Learning: Periodically retrain the model on the recent buffer
        if (i + 1) % retrain_interval == 0 and len(data_buffer) >= SEQUENCE_LENGTH + 1:
            print(f"--- Retraining at time step {t_step} ---")
            X_retrain, Y_retrain = prepare_batch_data(data_buffer, SEQUENCE_LENGTH)
            if X_retrain is not None and X_retrain.shape[0] > 0:
                # Use a small learning rate for fine-tuning in online setting
                # For simplicity, we recompile here, but in production, you'd adjust optimizer LR
                lstm_model.compile(optimizer=keras.optimizers.Adam(learning_rate=1e-4), loss='mse')
                lstm_model.fit(X_retrain, Y_retrain, epochs=5, batch_size=8, verbose=0) # Fewer epochs, smaller batch
                print(f"Retrained on {X_retrain.shape[0]} recent samples.")
            else:
                print("Not enough data in buffer for retraining.")
            # Revert to original learning rate if needed for next training cycle
            lstm_model.compile(optimizer='adam', loss='mse')

# --- 5. Visualize Results ---
plt.figure(figsize=(15, 6))
# Adjust indices for plotting as forecasts start after SEQUENCE_LENGTH
plt.plot(np.arange(len(actual_values)), actual_values, label='Actual Values', color='blue', alpha=0.7)
plt.plot(np.arange(len(forecasts)), forecasts, label='Online Forecasts', color='red', linestyle='--')
plt.title('Real-time Forecasting with Online Learning (Simulated)')
plt.xlabel('Time Step')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()
```

#### Key concepts
*   **Batch Forecasting:** The traditional approach where a model is trained once on a historical dataset and then used to make predictions for a future period without continuous updates.
*   **Real-time Forecasting:** Systems designed to ingest new data as it arrives and produce forecasts with very low latency (e.g., milliseconds to seconds).
*   **Online Learning (Incremental Learning):** A machine learning paradigm where models continuously adapt and update their parameters as new data streams in, without requiring full retraining from scratch.
*   **Streaming Data Pipeline:** An architectural setup for ingesting, processing, and analyzing data continuously as it is generated, often using tools like Kafka, Kinesis, Flink, or Spark Streaming.
*   **Concept Drift:** A phenomenon where the statistical properties of the target variable, which the model is trying to predict, change over time in unforeseen ways, leading to model degradation.
*   **Data Drift:** A change in the statistical properties of the input features to the model over time, which can also lead to reduced model performance.
*   **Low-latency Inference Service:** A deployed model accessible via an API (e.g., REST) that can respond to prediction requests very quickly, essential for real-time applications.
*   **Catastrophic Forgetting:** The tendency of neural networks to forget previously learned information when new information is learned, a significant challenge in incremental online learning.

#### Hands-on activity
**Activity: Simulate Online Learning with a Sliding Window**

Your task is to extend the provided online learning simulation. Instead of retraining the entire model periodically, implement a simpler "sliding window" retraining where the model is updated using only the most recent `BUFFER_SIZE` data points.

1.  **Re-use Setup:** Start with the `simulate_data_stream`, `build_lstm_model`, and `prepare_batch_data` functions from the lesson content.
2.  **Initial Training:** Perform the initial training as before.
3.  **Modify Online Learning Loop:**
    *   Within the main loop, after a new data point arrives and a prediction is made, check if `len(data_buffer)` is sufficient to form a training batch of `BUFFER_SIZE` sequences (e.g., `BUFFER_SIZE + SEQUENCE_LENGTH`).
    *   If it is, extract `X_retrain` and `Y_retrain` using `prepare_batch_data` but *only from the last `BUFFER_SIZE` elements of the `data_buffer`*.
    *   Train the `lstm_model` for a *very small number of epochs* (e.g., 1-2 epochs) on this latest small batch. This simulates incremental learning.
    *   Continue making predictions and updating the buffer.
4.  **Observe and Reflect:** Run the simulation and observe how the forecasts adapt, especially if you introduce a `concept_drift` (e.g., by setting `anomaly_at` in `simulate_data_stream`). Compare this to a scenario where no online learning happens (i.e., you remove the retraining step).

```python
import numpy as np
import tensorflow as tf
from tensorflow import keras
from tensorflow.keras import layers
import time
import collections
import matplotlib.pyplot as plt
from sklearn.preprocessing import MinMaxScaler

# --- 1. Re-use Setup ---
def simulate_data_stream(total_steps=1000, anomaly_at=None):
    t = 0
    while t < total_steps:
        value = 0.5 * np.sin(t / 10) + 0.2 * np.cos(t / 5) + np.random.normal(0, 0.1)
        if anomaly_at and t > anomaly_at:
            value += np.sin((t - anomaly_at) / 2) * 0.5 # A new pattern emerges
        yield t, value
        t += 1
        time.sleep(0.005) # Faster simulation

SEQUENCE_LENGTH = 50
BUFFER_SIZE = 100 # How many recent (X, Y) pairs to keep for retraining
data_buffer = collections.deque(maxlen=BUFFER_SIZE + SEQUENCE_LENGTH)
scaler_X = MinMaxScaler()
scaler_Y = MinMaxScaler()

initial_data_points = 200
initial_series = [v for _, v in simulate_data_stream(initial_data_points)]
scaler_X.fit(np.array(initial_series).reshape(-1, 1))
scaler_Y.fit(np.array(initial_series).reshape(-1, 1))

def build_lstm_model(input_shape):
    model = keras.Sequential([
        layers.Input(shape=input_shape),
        layers.LSTM(64, activation='relu'),
        layers.Dense(32, activation='relu'),
        layers.Dense(1, activation='linear')
    ])
    model.compile(optimizer='adam', loss='mse')
    return model

lstm_model = build_lstm_model((SEQUENCE_LENGTH, 1))

def prepare_batch_data(buffer_list, seq_len, num_samples_for_batch=None):
    if len(buffer_list) < seq_len + 1:
        return None, None
    
    # If num_samples_for_batch is specified, take only the latest samples
    if num_samples_for_batch:
        start_idx = max(0, len(buffer_list) - num_samples_for_batch - seq_len)
        data_to_process = buffer_list[start_idx:]
    else:
        data_to_process = buffer_list
    
    if len(data_to_process) < seq_len + 1: # Ensure enough for at least one sequence
        return None, None

    X_batch, Y_batch = [], []
    for i in range(len(data_to_process) - seq_len):
        X_batch.append(data_to_process[i : i + seq_len])
        Y_batch.append(data_to_process[i + seq_len])
    
    X_batch = np.array(X_batch).reshape(-1, seq_len, 1)
    Y_batch = np.array(Y_batch).reshape(-1, 1)
    
    X_scaled = scaler_X.transform(X_batch.reshape(-1, 1)).reshape(X_batch.shape)
    Y_scaled = scaler_Y.transform(Y_batch)
    return X_scaled, Y_scaled

# 2. Initial Training
for val in initial_series:
    data_buffer.append(val)

X_initial, Y_initial = prepare_batch_data(list(data_buffer), SEQUENCE_LENGTH)
if X_initial is not None:
    print(f"\nInitial training on {X_initial.shape[0]} samples...")
    lstm_model.fit(X_initial, Y_initial, epochs=10, batch_size=16, verbose=0)
    print("Initial training complete.")
else:
    print("Not enough initial data to train.")

# --- 3. Modify Online Learning Loop (Sliding Window Retraining) ---
print("\nStarting simulated real-time forecasting with sliding window online learning...")
forecasts = []
actual_values = []
retrain_frequency = 10 # Retrain every 10 new data points
data_stream_gen = simulate_data_stream(total_steps=500, anomaly_at=300)

for i, (t_step, new_value) in enumerate(data_stream_gen):
    actual_values.append(new_value)
    data_buffer.append(new_value)

    if len(data_buffer) >= SEQUENCE_LENGTH:
        current_sequence_unscaled = np.array(list(data_buffer)[-SEQUENCE_LENGTH:]).reshape(1, SEQUENCE_LENGTH, 1)
        current_sequence_scaled = scaler_X.transform(current_sequence_unscaled.reshape(-1, 1)).reshape(current_sequence_unscaled.shape)
        
        scaled_prediction = lstm_model.predict(current_sequence_scaled, verbose=0)[0, 0]
        unscaled_prediction = scaler_Y.inverse_transform([[scaled_prediction]])[0, 0]
        forecasts.append(unscaled_prediction)
        
        # Online Learning: Update model on a sliding window of recent data
        if (i + 1) % retrain_frequency == 0:
            print(f"--- Online update at time step {t_step} ---")
            # Get the latest BUFFER_SIZE samples for retraining
            X_retrain_window, Y_retrain_window = prepare_batch_data(list(data_buffer), SEQUENCE_LENGTH, num_samples_for_batch=BUFFER_SIZE)
            
            if X_retrain_window is not None and X_retrain_window.shape[0] > 0:
                # Use a very small number of epochs for incremental update
                lstm_model.compile(optimizer=keras.optimizers.Adam(learning_rate=1e-4), loss='mse')
                lstm_model.fit(X_retrain_window, Y_retrain_window, epochs=1, batch_size=4, verbose=0) # Very small batch, 1 epoch
                print(f"Updated on {X_retrain_window.shape[0]} recent samples.")
            else:
                print("Not enough data in buffer for windowed update.")
            lstm_model.compile(optimizer='adam', loss='mse') # Revert to original LR for next cycle

# --- 4. Visualize Results ---
plt.figure(figsize=(15, 6))
plt.plot(np.arange(len(actual_values)), actual_values, label='Actual Values', color='blue', alpha=0.7)
plt.plot(np.arange(len(forecasts)), forecasts, label='Online Forecasts (Sliding Window)', color='red', linestyle='--')
plt.title('Real-time Forecasting with Sliding Window Online Learning (Simulated)')
plt.xlabel('Time Step')
plt.ylabel('Value')
plt.legend()
plt.grid(True)
plt.show()

print("\nReflection:")
print("Observe how the red 'Online Forecasts' line adapts to the 'Actual Values', especially after the 'anomaly_at' point where the pattern shifts.")
print("With online learning, the model should gradually adjust its predictions to the new underlying pattern, whereas a static model would continue to predict based on old patterns, leading to increasing error.")
print("The frequency of retraining (`retrain_frequency`) and the size of the retraining window (`BUFFER_SIZE`) are critical hyperparameters that balance adaptability with computational cost and stability.")
```

#### Assessment idea
1.  **Question:** A smart home system uses a deep learning model to forecast indoor temperature, which then controls the HVAC system. The homeowner regularly opens windows, introducing sudden, unpredictable drops in temperature that are not part of the model's training data. This leads to poor forecasts. Which type of drift is this, and what online learning strategy would be most suitable to handle it without requiring constant manual intervention?
    *   **Correct Answer:** This scenario describes **concept drift**. The relationship between the input features (e.g., outdoor temperature, time of day) and the target variable (indoor temperature) is changing due to an unmodeled external factor (windows opening). A suitable online learning strategy would be **continuous model retraining on a sliding window of recent data**. As new data (including instances where windows are opened) streams in, the model would periodically be retrained on the most recent `N` hours or days of data. This allows the model to gradually learn the new patterns and adapt its internal representations to account for the impact of window openings, even if it doesn't explicitly know *when* a window is open. Incremental updates could also work, but continuous retraining on a small, recent batch is often more robust for deep learning models.

2.  **Question:** You are deploying a deep learning model for real-time stock price forecasting. The model needs to make predictions within 100 milliseconds of receiving new market data. What are two critical architectural considerations for your inference service to meet this low-latency requirement?
    *   **Correct Answer:**
        1.  **Model Optimization and Hardware Acceleration:** The deep learning model should be optimized for inference speed. This often involves converting the model to a more efficient format (e.g., TensorFlow Lite, ONNX, TorchScript), quantizing its weights (e.g., to FP16 or INT8), and deploying it on specialized hardware like GPUs, TPUs, or even dedicated inference accelerators (e.g., NVIDIA Jetson for edge deployments). Running inference on a CPU might not meet the 100ms requirement for complex deep learning models.
        2.  **Efficient API and Scalable Infrastructure:** The inference service should be exposed via a lightweight and efficient API (e.g., a simple REST endpoint built with Flask/FastAPI or gRPC). The underlying infrastructure needs to be highly scalable and responsive. This means using containerization (Docker) and orchestration (Kubernetes) to quickly scale up or down based on demand, and potentially employing serverless functions (AWS Lambda, Azure Functions) for event-driven, bursty workloads, ensuring that the model is always ready to serve requests without cold start delays.

#### AI generation note
Create a 13-minute mixed-format lesson. Begin with an animated comparison of batch vs. real-time forecasting, highlighting the need for online learning using a dynamic time series example (e.g., changing traffic patterns). Transition to a live coding demo in a Jupyter Notebook. Show the simulation of a data stream, how a `deque` maintains a sliding window, and the process of making real-time predictions. Then, integrate the "sliding window" online learning strategy, demonstrating how the model is updated with small batches of recent data. Visually plot the actual values and the online forecasts, emphasizing how the forecast adapts to a simulated concept drift. Include a brief interactive quiz where learners identify scenarios requiring online learning. Ensure clear visual cues for data flow and model updates.

### Chapter 8.6 — Model Deployment Strategies: From Local to Cloud

#### Learning objectives
*   Understand the various stages and considerations for deploying deep learning time series models.
*   Implement a basic REST API for serving deep learning forecasts locally using Flask or FastAPI.
*   Explain the role of containerization (Docker) in creating reproducible and portable model deployments.
*   Compare and contrast cloud-based deployment options (e.g., AWS SageMaker, Google AI Platform, Azure ML) for time series models.

#### Detailed lesson content
Developing a powerful deep learning model for time series forecasting is only half the battle; the other half is successfully deploying it so that it can be used to generate real-world predictions. **Model deployment** refers to the process of integrating a trained machine learning model into an existing production environment, making its predictions available to other applications or users. This involves transforming the model from a research artifact into a robust, scalable, and maintainable service. The deployment strategy chosen depends heavily on factors like expected traffic, latency requirements, computational resources, and existing infrastructure.

The simplest form of deployment is often a **local REST API**. This involves wrapping your trained model within a web framework (like Flask or FastAPI in Python) that exposes an endpoint. When a request comes to this endpoint (e.g., with a new time series sequence as input), the API loads the model, processes the input, generates a forecast, and returns it as a response. This is excellent for testing, low-traffic internal tools, or scenarios where data privacy dictates keeping everything on-premises. However, managing dependencies and scaling can become cumbersome.

```python
# Example: Basic Flask API for a time series model (conceptual)
# Requires: pip install Flask numpy tensorflow scikit-learn

from flask import Flask, request, jsonify
import numpy as np
import tensorflow as tf
from tensorflow import keras
import joblib # For loading scaler

app = Flask(__name__)

# --- Load Model and Scaler (simulate pre-trained) ---
# In a real scenario, you'd load your actual trained model and scalers
# For this example, let's assume we have a simple LSTM model and a scaler
# You would replace this with your actual model loading logic
try:
    model = keras.models.load_model('my_time_series_lstm_model.h5')
    scaler_X = joblib.load('scaler_X.pkl')
    scaler_Y = joblib.load('scaler_Y.pkl')
    SEQUENCE_LENGTH = model.input_shape[1]
    print("Model and scalers loaded successfully.")
except Exception as e:
    print(f"Error loading model/scalers: {e}. Creating dummy model/scalers.")
    # Create a dummy model and scalers for demonstration if files don't exist
    SEQUENCE_LENGTH = 50
    model = keras.Sequential([
        keras.layers.Input(shape=(SEQUENCE_LENGTH, 1)),
        keras.layers.LSTM(64, activation='relu'),
        keras.layers.Dense(1, activation='linear')
    ])
    model.compile(optimizer='adam', loss='mse')
    # Dummy fit to have some weights
    dummy_X = np.random.rand(10, SEQUENCE_LENGTH, 1)
    dummy_Y = np.random.rand(10, 1)
    model.fit(dummy_X, dummy_Y, epochs=1, verbose=0)

    scaler_X = MinMaxScaler()
    scaler_X.fit(np.random.rand(100, 1))
    scaler_Y = MinMaxScaler()
    scaler_Y.fit(np.random.rand(100, 1))

@app.route('/predict', methods=['POST'])
def predict():
    if not request.json or 'time_series' not in request.json:
        return jsonify({'error': 'Invalid request: "time_series" data missing.'}), 400

    raw_series = request.json['time_series']
    
    # Input validation
    if not isinstance(raw_series, list) or len(raw_series) != SEQUENCE_LENGTH:
        return jsonify({'error': f'Invalid time_series length. Expected {SEQUENCE_LENGTH} values.'}), 400
    
    try:
        # Convert to numpy array and reshape for scaler
        input_data = np.array(raw_series).reshape(-1, 1)
        
        # Scale input data
        scaled_input = scaler_X.transform(input_data)
        
        # Reshape for model (batch_size, timesteps, features)
        model_input = scaled_input.reshape(1, SEQUENCE_LENGTH, 1)
        
        # Make prediction
        scaled_prediction = model.predict(model_input, verbose=0)[0, 0]
        
        # Inverse transform the prediction
        unscaled_prediction = scaler_Y.inverse_transform([[scaled_prediction]])[0, 0]
        
        return jsonify({'forecast': float(unscaled_prediction)})
    except Exception as e:
        return jsonify({'error': f'Prediction failed: {str(e)}'}), 500

if __name__ == '__main__':
    # To run this:
    # 1. Save the code as app.py
    # 2. In terminal, navigate to the directory and run: python app.py
    # 3. The server will start on http://127.0.0.1:5000/
    # To test with curl:
    # curl -X POST -H "Content-Type: application/json" -d '{"time_series": [0.1, 0.2, ..., 0.1] (50 values)}' http://127.0.0.1:5000/predict
    app.run(debug=True, host='0.0.0.0', port=5000)

```
The next crucial step for robust deployment is **containerization**, primarily using **Docker**. Docker allows you to package your application (including your Python code, Flask/FastAPI server, trained model, scalers, and all dependencies) into a single, isolated, and portable unit called a container image. This solves the "it works on my machine" problem by ensuring that your deployment environment is identical to your development environment. A Dockerfile specifies all the steps to build this image, from the base operating system to installing Python packages and copying your application code. Once built, this image can be run consistently on any machine that has Docker installed, whether it's a local server, a virtual machine, or a cloud platform.

For scalable and managed deployments, **cloud platforms** offer specialized Machine Learning services.
*   **AWS SageMaker:** Provides a comprehensive suite of tools for the entire ML lifecycle, including managed hosting for models. You can deploy your deep learning time series model as a real-time endpoint, a batch transform job, or integrate it into a SageMaker pipeline. It handles infrastructure provisioning, scaling, and monitoring.
*   **Google Cloud AI Platform (now part of Vertex AI):** Offers similar capabilities, allowing you to deploy custom models, manage versions, and scale resources automatically. Vertex AI unifies various ML services, providing a strong MLOps platform.
*   **Azure Machine Learning:** Microsoft's offering for building, deploying, and managing ML models. It supports deploying models as real-time endpoints or batch endpoints, with integrated monitoring and MLOps features.

These cloud platforms abstract away much of the infrastructure complexity. They often support auto-scaling (automatically adding or removing compute instances based on traffic), A/B testing for model versions, and integrated monitoring. When deploying to the cloud, common mistakes include not optimizing the model for inference (leading to high latency/cost), neglecting security best practices (e.g., API key management, network isolation), and failing to properly manage environment variables or sensitive credentials. A safety note is to always containerize your application first, even if deploying locally, as it provides a clean, reproducible environment that simplifies the eventual transition to cloud deployment. Also, ensure your model artifacts (weights, scalers, configuration) are stored securely and versioned, ideally in an object storage service like S3, GCS, or Azure Blob Storage.

#### Key concepts
*   **Model Deployment:** The process of making a trained machine learning model available for use in a production environment to generate predictions.
*   **REST API:** A common architectural style for web services that allows different applications to communicate over HTTP, often used to expose machine learning models for inference.
*   **Flask/FastAPI:** Lightweight Python web frameworks commonly used to build REST APIs for machine learning models.
*   **Containerization:** Packaging an application and all its dependencies into a single, isolated, and portable unit (a container image) to ensure consistent execution across different environments.
*   **Docker:** A popular platform for building, sharing, and running containerized applications.
*   **AWS SageMaker:** A fully managed service by Amazon Web Services that helps developers and data scientists build, train, and deploy machine learning models.
*   **Google Cloud AI Platform (Vertex AI):** Google Cloud's unified platform for machine learning development and deployment, offering managed services for model hosting, versioning, and scaling.
*   **Azure Machine Learning:** Microsoft Azure's cloud-based service for managing the end-to-end machine learning lifecycle, including model deployment and monitoring.

#### Hands-on activity
**Activity: Containerize a Simple Forecasting API with Docker**

Your task is to create a Dockerfile and build a Docker image for the provided Flask API, making it ready for portable deployment.

1.  **Save Flask App:** Save the provided Flask API code as `app.py` in a new directory (e.g., `time_series_api`).
2.  **Create `requirements.txt`:** In the same directory, create a `requirements.txt` file listing the Python dependencies:
    ```
    Flask==2.3.3
    numpy==1.24.3
    tensorflow==2.13.0 # Or your specific TF version
    scikit-learn==1.2.2 # For joblib and MinMaxScaler
    ```
3.  **Create `Dockerfile`:** In the same directory, create a `Dockerfile` to containerize the application.
4.  **Build Docker Image:** Open your terminal, navigate to the `time_series_api` directory, and build the Docker image.
5.  **Run Docker Container:** Run the Docker container and test the API using `curl` or a tool like Postman.

```dockerfile
# Dockerfile for Time Series Forecasting API

# Use an official Python runtime as a parent image
FROM python:3.9-slim-buster

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the Flask application and any model/scaler files into the container
# IMPORTANT: In a real scenario, you'd ensure 'my_time_series_lstm_model.h5', 'scaler_X.pkl', 'scaler_Y.pkl' exist
# or handle their absence gracefully (as done in app.py for this demo).
COPY app.py .
# COPY my_time_series_lstm_model.h5 .
# COPY scaler_X.pkl .
# COPY scaler_Y.pkl .

# Expose the port the app runs on
EXPOSE 5000

# Define environment variable for Flask (optional, but good practice)
ENV FLASK_APP=app.py
ENV FLASK_ENV=production # Set to production for deployment

# Run the Flask app using Gunicorn for production (more robust than app.run)
# For simplicity and demo, we'll use Flask's built-in server as in app.py
# CMD ["gunicorn", "--bind", "0.0.0.0:5000", "app:app"]
CMD ["python", "app.py"]
```

**Instructions to run:**
1.  Save the Flask API code as `app.py`.
2.  Save the `requirements.txt` content as `requirements.txt`.
3.  Save the `Dockerfile` content as `Dockerfile`.
4.  Open your terminal in the directory containing these three files.
5.  **Build the Docker image:**
    ```bash
    docker build -t time-series-forecast-api .
    ```
6.  **Run the Docker container:**
    ```bash
    docker run -p 5000:5000 time-series-forecast-api
    ```
    (The `-p 5000:5000` maps port 5000 on your host to port 5000 inside the container.)
7.  **Test the API (in a new terminal window):**
    ```bash
    curl -X POST -H "Content-Type: application/json" -d '{"time_series": [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 2.0, 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 4.9, 5.0]}' http://localhost:5000/predict
    ```
    (Adjust the `time_series` array to contain 50 float values as required by `SEQUENCE_LENGTH` in `app.py` for a valid test.)

#### Assessment idea
1.  **Question:** You have developed a deep learning model for predicting energy consumption in a smart grid. This model needs to handle variable load, from a few requests per minute during off-peak hours to hundreds of requests per second during peak demand. Which cloud deployment strategy would be most suitable for this scenario, and what key feature of this strategy addresses the variable load requirement?
    *   **Correct Answer:** A **managed real-time endpoint deployment** on a cloud platform like AWS SageMaker, Google Cloud Vertex AI, or Azure Machine Learning would be most suitable. The key feature addressing the variable load requirement is **auto-scaling**. These platforms automatically provision and de-provision compute resources (e.g., EC2 instances, VMs) based on the incoming request traffic. During off-peak hours, the system can scale down to a minimum number of instances to save costs, and during peak demand, it can automatically scale up to handle hundreds of requests per second without manual intervention, ensuring high availability and performance.

2.  **Question:** Your team has developed a highly specialized deep learning model for forecasting seismic activity, which relies on a specific version of TensorFlow and several custom Python libraries. You need to ensure that this model runs consistently across development, testing, and production environments, preventing "dependency hell." How would you achieve this, and what is the main benefit of your chosen approach?
    *   **Correct Answer:** You would achieve this by **containerizing the application using Docker**. A Dockerfile would specify the exact base image (e.g., `python:3.9-slim`), install the precise versions of TensorFlow and all custom Python libraries, and then package the model, code, and all dependencies into a single, immutable Docker image. The main benefit of this approach is **reproducibility and portability**. Once the Docker image is built, it encapsulates the entire environment, guaranteeing that the model runs identically regardless of where the container is deployed (developer's laptop, CI/CD pipeline, staging server, or production cloud). This eliminates "dependency hell" and ensures consistent behavior across all environments.

#### AI generation note
Create a 15-minute live coding and demonstration video. Start by explaining the purpose of model deployment and the challenges. Then, walk through setting up a simple Flask API for a dummy time series forecasting model in a Python script. Demonstrate how to run it locally and test with `curl`. Next, introduce Docker, explain the `Dockerfile` line by line, and then live-code building the Docker image and running the container. Show testing the containerized API. Finally, provide a high-level overview of cloud deployment options (SageMaker, Vertex AI, Azure ML) using animated diagrams to illustrate their managed services and auto-scaling capabilities. Include a reflection prompt on choosing the right deployment strategy. Emphasize best practices like dependency management and model versioning.

### Chapter 8.7 — Monitoring and Maintaining Deployed Forecasting Models

#### Learning objectives
*   Understand the critical importance of continuous monitoring for deployed deep learning time series models.
*   Identify key metrics for monitoring model performance (e.g., forecast error, bias) and data quality (e.g., data drift, missing values).
*   Implement basic monitoring dashboards and alerts for time series forecasting models.
*   Develop strategies for model retraining and version management in production.

#### Detailed lesson content
Deploying a deep learning time series forecasting model is not a one-time event; it's the beginning of an ongoing lifecycle that requires continuous **monitoring and maintenance**. Even the most accurate model can degrade over time due to changes in the real-world environment, a phenomenon often referred to as **model decay**. Without robust monitoring, a degraded model can silently produce inaccurate forecasts, leading to poor business decisions, financial losses, or operational failures. Effective monitoring provides early warning signs, allowing you to proactively intervene and maintain the value of your forecasting solution.

The first crucial aspect is **monitoring model performance**. This involves tracking forecast accuracy metrics (like MAE, RMSE, MAPE, Pinball Loss for probabilistic forecasts) on actual observed values as they become available. It's not enough to just look at the error; you also need to monitor for **forecast bias** (e.g., consistently over-predicting or under-predicting), which can indicate a systemic issue. These metrics should be calculated on a rolling basis (e.g., daily, weekly) and visualized on dashboards. Alerts should be configured to trigger if performance drops below a predefined threshold or if bias becomes significant. For time series, it's particularly important to monitor performance across different segments or time periods, as a model might perform well overall but poorly during specific seasons or events.

Equally important is **monitoring data quality and integrity**. Deep learning models are highly sensitive to their input data. Changes in the data distribution, missing values, or corrupted data can severely impact forecasts. Key aspects to monitor include:
*   **Data Drift:** Changes in the statistical properties of the input features over time. For example, if a sensor starts reporting values in a different range.
*   **Concept Drift:** Changes in the relationship between input features and the target variable. For instance, if a new policy changes consumer behavior, the historical relationship between price and demand might no longer hold.
*   **Missing Values:** Tracking the percentage of missing data points in incoming streams.
*   **Outliers/Anomalies:** Detecting unusual values in input features that might indicate data corruption or a novel event requiring attention.
Monitoring data quality often involves statistical checks (e.g., mean, variance, range, distribution shifts) on incoming data compared to the training data distribution. Tools like Evidently AI or Great Expectations can automate these checks.

Implementing monitoring typically involves a few steps. First, integrate logging and metrics collection into your deployed model and data pipeline. This means logging inputs, predictions, and actuals (once available). Second, choose a monitoring platform (e.g., Prometheus/Grafana, Datadog, cloud-native services like AWS CloudWatch, Google Cloud Monitoring, Azure Monitor) to store, visualize, and alert on these metrics. Dashboards should provide a clear, at-a-glance view of model health and data quality.

**Model maintenance** primarily revolves around **retraining and version management**. When monitoring indicates performance degradation or significant drift, retraining the model becomes necessary. This can be done:
*   **Periodically:** On a fixed schedule (e.g., monthly, quarterly) to capture gradual changes.
*   **Event-driven:** Triggered by specific events (e.g., a new product launch, a system upgrade).
*   **Performance-driven:** Triggered automatically when model performance metrics fall below a threshold.
Retraining often involves using a fresh, larger dataset that includes the most recent data. After retraining, the new model version must be rigorously evaluated before deployment. **Version management** is crucial: always keep track of which model version is deployed, its training data, hyperparameters, and performance metrics. This allows for rollbacks to previous stable versions if a new deployment introduces unforeseen issues. Using model registries (e.g., MLflow, SageMaker Model Registry, Vertex AI Model Registry) helps manage this complexity.

A common mistake is to only monitor accuracy and neglect data quality. A drop in accuracy is often a symptom of underlying data issues. Another pitfall is retraining without proper validation, potentially deploying a worse model. Always validate new model versions on a representative hold-out set that includes recent data. Safety notes include having automated rollback procedures, ensuring that monitoring systems themselves are reliable, and establishing clear communication channels between data scientists, engineers, and stakeholders when issues are detected.

#### Key concepts
*   **Model Monitoring:** The continuous process of tracking the performance, health, and behavior of a deployed machine learning model in a production environment.
*   **Model Decay (Model Drift):** The degradation of a model's performance over time due to changes in the underlying data distribution or relationships (data drift, concept drift).
*   **Forecast Bias:** A systematic tendency of a forecasting model to consistently over-predict or under-predict the actual values.
*   **Data Quality Monitoring:** Tracking metrics related to the integrity, consistency, and statistical properties of the input data stream to a deployed model.
*   **Retraining Strategy:** A defined approach for updating a deployed model, either periodically, event-driven, or performance-driven, using new data to maintain its accuracy.
*   **Model Version Management:** The practice of tracking, storing, and managing different iterations of a machine learning model, including their training data, hyperparameters, and performance.
*   **Monitoring Dashboard:** A visual interface that displays key metrics and alerts related to model performance and data quality, providing an at-a-glance overview.
*   **Alerting System:** A mechanism that automatically notifies relevant personnel (e.g., via email, Slack) when predefined thresholds for model performance or data quality are breached.

#### Hands-on activity
**Activity: Simulate Model Monitoring and Alerting**

Your task is to simulate monitoring a deployed time series forecasting model by tracking its error over time and setting up a simple alerting mechanism.

1.  **Simulate Real-time Data and Forecasts:**
    *   Generate a synthetic time series (`actual_values`) with a gradual trend shift (concept drift) after a certain point.
    *   Simulate `forecasts` from a "deployed model." Initially, make the forecasts follow the `actual_values` well.
    *   After the concept drift, make the `forecasts` gradually diverge from `actual_values` to simulate model decay.
2.  **Calculate Rolling Error:**
    *   Calculate the absolute error (`abs(actual - forecast)`) at each time step.
    *   Calculate a **rolling Mean Absolute Error (MAE)** over a window (e.g., 50 time steps).
3.  **Implement Alerting:**
    *   Define an `alert_threshold` for the rolling MAE (e.g., 0.2).
    *   If the rolling MAE exceeds this threshold, print an alert message indicating potential model degradation.
4.  **Visualize:** Plot the `actual_values`, `forecasts`, `rolling_mae`, and the `alert_threshold` on a single graph to visualize the model's performance and when alerts would trigger.

```python
import numpy as np
import matplotlib.pyplot as plt
import pandas as pd # For rolling mean

# 1. Simulate Real-time Data and Forecasts
N_STEPS = 500
CONCEPT_DRIFT_START = 300

time_steps = np.arange(N_STEPS)

# Simulate actual values with a concept drift
actual_values = np.sin(time_steps / 20) + np.random.normal(0, 0.1, N_STEPS)
# Introduce concept drift: a new trend emerges
actual_values[CONCEPT_DRIFT_START:] += (time_steps[CONCEPT_DRIFT_START:] - CONCEPT_DRIFT_START) / 50 * 0.5

# Simulate forecasts from a deployed model
forecasts = np.copy(actual_values) # Initially, forecasts are perfect
# Simulate model decay after concept drift
decay_rate = 0.01
for i in range(CONCEPT_DRIFT_START, N_STEPS):
    # Forecasts gradually diverge from actuals after drift
    forecasts[i] = actual_values[i] - (i - CONCEPT_DRIFT_START) * decay_rate * np.random.uniform(0.5, 1.5)
    # Add some noise to forecasts
    forecasts[i] += np.random.normal(0, 0.05) 

# 2. Calculate Rolling Error
absolute_errors = np.abs(actual_values - forecasts)

ROLLING_WINDOW = 50 # Number of time steps for rolling MAE
rolling_mae = pd.Series(absolute_errors).rolling(window=ROLLING_WINDOW).mean()

# 3. Implement Alerting
ALERT_THRESHOLD = 0.2 # Example threshold for MAE

alerts = []
for i in range(len(rolling_mae)):
    if not pd.isna(rolling_mae.iloc[i]) and rolling_mae.iloc[i] > ALERT_THRESHOLD:
        alerts.append((i, rolling_mae.iloc[i]))

print(f"Simulated Monitoring Results:")
if alerts:
    print(f"Alerts triggered when rolling MAE exceeded {ALERT_THRESHOLD:.2f}:")
    for idx, mae in alerts:
        print(f"  Time Step {idx}: Rolling MAE = {mae:.4f}")
else:
    print("No alerts triggered. Model performance remained within acceptable limits.")

# 4. Visualize
plt.figure(figsize=(18, 8))

plt.subplot(2, 1, 1)
plt.plot(time_steps, actual_values, label='Actual Values', color='blue', alpha=0.7)
plt.plot(time_steps, forecasts, label='Deployed Model Forecasts', color='red', linestyle='--')
plt.axvline(x=CONCEPT_DRIFT_START, color='green', linestyle=':', label='Concept Drift Start')
plt.title('Actuals vs. Forecasts with Simulated Model Decay')
plt.xlabel('Time Step')
plt.ylabel('Value')
plt.legend()
plt.grid(True)

plt.subplot(2, 1, 2)
plt.plot(time_steps, rolling_mae, label=f'Rolling MAE (Window={ROLLING_WINDOW})', color='purple')
plt.axhline(y=ALERT_THRESHOLD, color='orange', linestyle='--', label=f'Alert Threshold ({ALERT_THRESHOLD:.2f})')
for idx, mae in alerts:
    plt.plot(idx, mae, 'ro', markersize=8, label='Alert Triggered' if 'Alert Triggered' not in plt.gca().get_legend_handles_labels()[1] else "")
plt.title('Model Performance Monitoring (Rolling MAE)')
plt.xlabel('Time Step')
plt.ylabel('MAE')
plt.legend()
plt.grid(True)

plt.tight_layout()
plt.show()
```

#### Assessment idea
1.  **Question:** Your deep learning model forecasts daily sales for an e-commerce platform. After a major holiday promotion, you notice that the model consistently under-predicts sales by about 15% every day, even though its overall MAE is still within acceptable limits. What specific issue does this indicate, and why is it important to monitor beyond just overall error metrics?
    *   **Correct Answer:** This indicates a significant **forecast bias**. While the overall MAE might not be critically high, a consistent under-prediction of 15% means the model is systematically wrong in one direction. It is crucial to monitor beyond just overall error metrics because:
        *   **Business Impact:** Consistent under-prediction of sales can lead to stockouts, missed revenue opportunities, and poor inventory management, even if the average error seems okay.
        *   **Root Cause Analysis:** Bias often points to an underlying problem like concept drift (e.g., the holiday permanently shifted the baseline sales, and the model hasn't adapted), data drift (e.g., a new advertising campaign changed customer demographics), or an unmodeled external factor.
        *   **Actionability:** Detecting bias provides a clear signal that the model needs retraining or recalibration, or that new features are required to capture the changed dynamics.

2.  **Question:** You are responsible for a deployed deep learning model that forecasts electricity load. You observe that the model's performance has significantly degraded, and your monitoring system shows that the distribution of incoming weather data (a key input feature) has subtly shifted compared to the training data. What type of drift is this, and what immediate action should you consider to address it?
    *   **Correct Answer:** This is an example of **data drift**. The input feature distribution (weather data) has changed, which is causing the model's performance to degrade because it was trained on a different distribution. The immediate action to consider is **retraining the model on a fresh dataset that includes the new, shifted weather data distribution**. This will allow the model to learn the new statistical properties of the input features and adapt its internal representations accordingly. Before deploying the retrained model, it should be thoroughly validated on a recent hold-out set to ensure it has indeed improved performance and does not introduce new issues.

#### AI generation note
Create a 14-minute video lesson. Begin with an animated segment illustrating model decay and the consequences of unmonitored models (e.g., a factory machine breaking down due to poor predictive maintenance). Transition to a live coding demo in a Jupyter Notebook. Simulate a time series with concept drift and a forecasting model that degrades. Show how to calculate rolling MAE using pandas and implement a simple Python-based alerting mechanism that prints messages when MAE exceeds a threshold. Visualize the actuals, forecasts, rolling MAE, and alert thresholds on a plot. Discuss the importance of data drift and concept drift monitoring with simple diagrams. Conclude with a clear explanation of retraining strategies and the importance of model versioning, using a flowchart for the MLOps lifecycle.

### Chapter 8.8 — MLOps for Time Series Forecasting Pipelines

#### Learning objectives
*   Define MLOps and explain its importance for robust and scalable time series forecasting.
*   Understand the components of a typical MLOps pipeline for deep learning time series models.
*   Design a CI/CD (Continuous Integration/Continuous Deployment) workflow for forecasting models.
*   Discuss tools and best practices for managing model lifecycle, from experimentation to production.

#### Detailed lesson content
Having explored advanced deep learning models, deployment strategies, and monitoring techniques, it's time to integrate these concepts into a cohesive framework: **MLOps (Machine Learning Operations)**. MLOps is a set of practices that aims to streamline the machine learning lifecycle, from experimentation and development to deployment, monitoring, and maintenance, ensuring that models are reliable, scalable, and continuously deliver value in production. For time series forecasting, MLOps is particularly critical due to the dynamic nature of data, the need for frequent retraining, and the potential for model decay.

A typical MLOps pipeline for deep learning time series forecasting comprises several interconnected stages:
1.  **Data Ingestion & Preparation:** This stage focuses on reliably collecting raw time series data from various sources (databases, APIs, streaming platforms), cleaning it, handling missing values, scaling, and transforming it into features suitable for deep learning models. This often involves data versioning to track changes in datasets.
2.  **Model Training & Experimentation:** Here, data scientists develop, train, and evaluate various deep learning architectures (MLPs, CNNs, LSTMs, Transformers). This stage requires robust experiment tracking (e.g., MLflow, Weights & Biases) to log hyperparameters, model weights, metrics, and code versions, allowing for reproducibility and comparison of different models.
3.  **Model Evaluation & Validation:** Before deployment, models undergo rigorous evaluation on unseen data, including backtesting for time series, to ensure performance, robustness, and generalization. This also involves bias checks, explainability analysis, and ensuring the model meets business requirements.
4.  **Model Packaging & Versioning:** Once validated, the trained model, along with its associated artifacts (scalers, preprocessing logic, environment dependencies), is packaged into a deployable format (e.g., a Docker image, ONNX format). A model registry is used to store and version these packaged models, providing a single source of truth.
5.  **Model Deployment:** The packaged model is deployed to a production environment, often as a microservice via a REST API. This can involve A/B testing, canary deployments, or blue/green deployments to minimize risk.
6.  **Model Monitoring & Alerting:** Post-deployment, the model's performance, data quality, and infrastructure health are continuously monitored. Alerts are triggered if anomalies, drift, or performance degradation are detected.
7.  **Model Retraining & Optimization:** Based on monitoring feedback, models are periodically or event-driven retrained with fresh data to combat model decay. The entire pipeline can be re-executed, or specific components updated.

**Continuous Integration/Continuous Deployment (CI/CD)** is a cornerstone of MLOps. For time series forecasting, a CI/CD pipeline would automate:
*   **CI (Continuous Integration):** Triggered by code changes (e.g., a new model architecture, updated preprocessing logic). It involves running automated tests (unit tests, integration tests), building the Docker image for the model, and potentially running initial model training and evaluation on a small dataset.
*   **CD (Continuous Deployment):** If CI passes, the CD pipeline takes over. It deploys the new model version to a staging environment for further testing (e.g., shadow deployment, A/B testing) and, if successful, promotes it to production. This often involves updating the model registry and deploying the new containerized service.

Tools that facilitate MLOps include:
*   **Orchestration:** Apache Airflow, Kubeflow Pipelines, AWS Step Functions, Azure Data Factory for managing complex workflows.
*   **Experiment Tracking & Model Registry:** MLflow, Weights & Biases, Comet ML, DVC.
*   **Containerization:** Docker.
*   **Cloud ML Platforms:** AWS SageMaker, Google Cloud Vertex AI, Azure ML, which offer integrated MLOps capabilities.

A common mistake is treating MLOps as an afterthought, leading to brittle, unmaintainable systems. Another pitfall is neglecting the "Ops" part, focusing only on model development without robust automation, monitoring, and governance. Safety notes include ensuring proper access control and security across the pipeline, implementing automated rollback procedures for failed deployments, and maintaining clear documentation for all pipeline stages and model versions. The goal is to create a robust, automated, and observable system that allows for rapid iteration and reliable delivery of forecasting capabilities.

```python
# --- Conceptual MLOps Pipeline Steps (No executable code for full pipeline, but illustrative) ---

# 1. Data Ingestion & Preparation (Conceptual)
def ingest_and_prepare_data(source_config):
    """
    Simulates ingesting raw time series data and preparing it.
    This would involve:
    - Connecting to data sources (e.g., Kafka, S3, Database)
    - Cleaning, handling missing values, outlier detection
    - Feature engineering (lag features, rolling statistics, datetime features)
    - Scaling (MinMaxScaler, StandardScaler)
    - Creating sequences for deep learning (look-back windows)
    - Data versioning (e.g., DVC)
    """
    print("Step 1: Ingesting and preparing time series data...")
    # Example: Load data, apply scalers, create sequences
    # X_train, Y_train, X_val, Y_val = ...
    # Store processed data and scalers (e.g., to S3, GCS)
    print("Data prepared and versioned.")
    return {"X_train": "path/to/X_train.npy", "Y_train": "path/to/Y_train.npy", "scaler_X": "path/to/scaler_X.pkl"}

# 2. Model Training & Experimentation (Conceptual)
import mlflow # Example for experiment tracking

def train_model(data_paths, model_config):
    """
    Simulates training a deep learning time series model.
    This would involve:
    - Loading prepared data
    - Defining model architecture (e.g., LSTM, Transformer)
    - Training the model
    - Logging metrics, hyperparameters, and model artifacts with MLflow
    - Saving the best model
    """
    print("Step 2: Training deep learning model...")
    with mlflow.start_run(run_name="time_series_forecast_run"):
        mlflow.log_params(model_config)
        # model = build_lstm_model(...)
        # model.fit(X_train, Y_train, ...)
        # mlflow.log_metric("val_loss", val_loss)
        # mlflow.tensorflow.log_model(model, "model")
        print("Model trained and experiment logged with MLflow.")
        return "mlruns/run_id/model_artifact_path"

# 3. Model Evaluation & Validation (Conceptual)
def evaluate_model(model_artifact_path, test_data_path):
    """
    Simulates evaluating the trained model and validating its performance.
    This would involve:
    - Loading the model and test data
    - Making predictions
    - Calculating evaluation metrics (MAE, RMSE, Pinball Loss, Coverage)
    - Backtesting
    - Anomaly detection on residuals
    - Generating explainability reports (SHAP, LIME)
    - Checking for bias
    """
    print("Step 3: Evaluating and validating model performance...")
    # model = mlflow.tensorflow.load_model(model_artifact_path)
    # predictions = model.predict(X_test)
    # metrics = calculate_metrics(Y_test, predictions)
    # assert metrics["mae"] < threshold, "Model MAE too high!"
    print("Model evaluated and passed validation checks.")
    return {"metrics": {"mae": 0.15, "rmse": 0.2}}

# 4. Model Packaging & Versioning (Conceptual)
def package_and_version_model(model_artifact_path, current_version):
    """
    Simulates packaging the model into a deployable format and registering it.
    This would involve:
    - Creating a Dockerfile for the inference service
    - Building the Docker image
    - Pushing the image to a container registry (e.g., Docker Hub, ECR, GCR)
    - Registering the model in a model registry (e.g., MLflow Model Registry, SageMaker Model Registry)
    """
    print(f"Step 4: Packaging and versioning model (v{current_version})...")
    # docker_image_name = f"my-forecast-model:v{current_version}"
    # build_docker_image(docker_image_name, model_artifact_path)
    # push_docker_image(docker_image_name)
    # mlflow.register_model(model_uri=model_artifact_path, name="TimeSeriesForecastModel", version=current_version)
    print(f"Model v{current_version} packaged and registered.")
    return f"my-forecast-model:v{current_version}"

# 5. Model Deployment (Conceptual)
def deploy_model(docker_image_name, deployment_strategy="blue_green"):
    """
    Simulates deploying the model to a production environment.
    This would involve:
    - Provisioning infrastructure (e.g., Kubernetes, SageMaker Endpoint)
    - Deploying the Docker container
    - Implementing deployment strategies (blue/green, canary, A/B testing)
    - Setting up API endpoints
    """
    print(f"Step 5: Deploying model {docker_image_name} using {deployment_strategy} strategy...")
    # deploy_to_kubernetes(docker_image_name)
    # setup_api_gateway()
    print("Model deployed to production.")

# 6. Model Monitoring & Alerting (Conceptual)
def setup_monitoring():
    """
    Simulates setting up continuous monitoring and alerting.
    This would involve:
    - Instrumenting the deployed model for logging inputs, predictions, actuals
    - Setting up data quality checks (drift detection)
    - Configuring performance metrics dashboards (e.g., Grafana)
    - Setting up alerts (e.g., PagerDuty, Slack)
    """
    print("Step 6: Setting up model monitoring and alerting...")
    print("Monitoring dashboards and alerts configured.")

# 7. Model Retraining & Optimization (Conceptual)
def trigger_retraining(reason="scheduled"):
    """
    Simulates triggering the retraining pipeline.
    This could be based on:
    - Schedule (e.g., daily, weekly)
    - Performance degradation detected by monitoring
    - Significant data/concept drift detected
    - Manual trigger for new features/hyperparameters
    """
    print(f"Step 7: Retraining pipeline triggered due to: {reason}...")
    # This would typically re-run the entire pipeline from Step 1 or a subset.
    print("Retraining pipeline initiated.")

print("--- Conceptual MLOps Pipeline for Time Series Forecasting ---")
data_info = ingest_and_prepare_data({})
model_artifact = train_model(data_info, {"lstm_units": 64, "epochs": 10})
evaluation_results = evaluate_model(model_artifact, "path/to/test_data.npy")
if evaluation_results["metrics"]["mae"] < 0.2: # Example threshold
    model_image = package_and_version_model(model_artifact, "1.0.0")
    deploy_model(model_image)
    setup_monitoring()
    # Simulate a later event that triggers retraining
    # trigger_retraining(reason="performance_degradation")
else:
    print("Model did not pass validation. Not deploying.")
```

#### Key concepts
*   **MLOps (Machine Learning Operations):** A set of practices that combines Machine Learning, DevOps, and Data Engineering to standardize and streamline the entire machine learning lifecycle, from development to deployment and maintenance.
*   **MLOps Pipeline:** An automated, end-to-end workflow that orchestrates the various stages of the machine learning lifecycle, including data preparation, model training, evaluation, deployment, and monitoring.
*   **Continuous Integration (CI):** A DevOps practice where developers frequently merge code changes into a central repository, followed by automated builds and tests to detect integration issues early.
*   **Continuous Deployment (CD):** A DevOps practice where code changes that pass all automated tests are automatically released to production, enabling rapid and reliable delivery of new features or model versions.
*   **Experiment Tracking:** The process of systematically logging and managing all aspects of machine learning experiments, including hyperparameters, metrics, code versions, and model artifacts, for reproducibility and comparison.
*   **Model Registry:** A centralized repository for storing, versioning, and managing trained machine learning models, along with their metadata, making them discoverable and deployable.
*   **Data Versioning:** The practice of tracking changes to datasets over time, ensuring reproducibility of experiments and models by linking them to specific data versions.
*   **Orchestration:** The automated configuration, coordination, and management of computer systems, applications, and services, used in MLOps to manage complex workflows (e.g., Airflow, Kubeflow).

#### Hands-on activity
**Activity: Design a CI/CD Workflow for a Time Series Forecasting Model**

Your task is to outline a detailed CI/CD workflow for a deep learning time series forecasting model that predicts hourly energy consumption. Assume your code is in a Git repository and you're using Docker for containerization and a cloud platform for deployment.

**Workflow Steps to Design:**

1.  **Code Commit & CI Trigger:** What action initiates the CI pipeline?
2.  **CI Pipeline Stages:** List the key automated steps that occur during Continuous Integration.
    *   *Hint: Think about code quality, dependencies, and initial model validation.*
3.  **Artifact Generation (from CI):** What key artifacts are produced if CI is successful?
4.  **CD Trigger & Pipeline Stages:** What action initiates the CD pipeline, and what are its key automated steps?
    *   *Hint: Think about deployment to different environments, testing, and promotion.*
5.  **Rollback Strategy:** What happens if a deployed model performs poorly or causes issues in production?

**Example Outline (fill in details):**

```markdown
**CI/CD Workflow for Hourly Energy Consumption Forecasting Model**

**1. Code Commit & CI Trigger:**
*   **Action:** A developer pushes new code (e.g., updated model architecture, new feature engineering script) to the `main` branch of the Git repository.
*   **Trigger:** A webhook configured in the Git repository (e.g., GitHub Actions, GitLab CI, Jenkins) automatically triggers the CI pipeline.

**2. CI Pipeline Stages:**
*   **Stage 1: Linting & Unit Tests**
    *   **Description:** Runs static code analysis (e.g., Flake8, Black) and executes all Python unit tests for preprocessing functions, model architecture components, etc.
    *   **Outcome:** Fails if linting errors or unit test failures are found.
*   **Stage 2: Dependency Check & Environment Setup**
    *   **Description:** Verifies `requirements.txt` for consistency and builds a clean virtual environment or Docker base image with all specified dependencies.
    *   **Outcome:** Ensures all dependencies are resolvable and compatible.
*   **Stage 3: Model Training (Small Scale) & Initial Evaluation**
    *   **Description:** Trains the new model version on a small, representative subset of the historical energy consumption data. Logs hyperparameters and basic metrics (e.g., validation MAE) to MLflow. Performs a quick sanity check (e.g., MAE < X).
    *   **Outcome:** Provides early feedback on model trainability and basic performance.
*   **Stage 4: Docker Image Build**
    *   **Description:** If all previous stages pass, a Docker image containing the trained model (from Stage 3), inference code, and all necessary dependencies is built. The image is tagged with the Git commit hash.
    *   **Outcome:** A versioned Docker image ready for deployment.

**3. Artifact Generation (from CI):**
*   If CI is successful, the following artifacts are generated:
    *   Docker image (tagged with commit hash) pushed to a container registry (e.g., AWS ECR).
    *   MLflow run ID with logged parameters, metrics, and a small-scale model artifact.

**4. CD Trigger & Pipeline Stages:**
*   **Trigger:** Upon successful completion of the CI pipeline and Docker image push.
*   **Stage 1: Staging Deployment (Shadow or Canary)**
    *   **Description:** The new Docker image is deployed to a staging environment. This could be a "shadow deployment" (new model processes requests in parallel with production but doesn't serve users) or a "canary deployment" (new model serves a small percentage of live traffic).
    *   **Outcome:** Allows for real-world testing without full production impact.
*   **Stage 2: Full Model Training & Comprehensive Evaluation**
    *   **Description:** In the staging environment, the model is retrained on the full, up-to-date historical energy consumption dataset. A comprehensive backtesting suite is run, including metrics like MAE, RMSE, bias, coverage for probabilistic forecasts, and potentially XAI analysis.
    *   **Outcome:** A fully trained and rigorously validated model, with all metrics logged to MLflow.
*   **Stage 3: Model Registration & Versioning**
    *   **Description:** If the full evaluation passes predefined thresholds, the fully trained model artifact is registered in the MLflow Model Registry (or cloud-native registry) with a new production version number.
    *   **Outcome:** The model is officially available for production deployment.
*   **Stage 4: Production Deployment**
    *   **Description:** The new model version from the registry is deployed to the production environment. This could involve a blue/green deployment strategy to minimize downtime. The old model is kept running until the new one is fully validated in production.
    *   **Outcome:** New model version is serving live traffic.
*   **Stage 5: Post-Deployment Smoke Tests & Monitoring Activation**
    *   **Description:** A set of quick "smoke tests" are run against the live production endpoint. Monitoring dashboards (e.g., Grafana) are updated to track the performance of the new model version, and alerts are activated.
    *   **Outcome:** Confirmation of live functionality and continuous performance tracking.

**5. Rollback Strategy:**
*   **Trigger:** If monitoring detects significant performance degradation, data/concept drift, or critical errors post-deployment.
*   **Action:** The CD pipeline can be triggered to automatically or manually roll back to the last known stable model version from the Model Registry. This involves deploying the previous Docker image or model artifact.
*   **Outcome:** Rapid recovery from deployment issues, minimizing impact on users and business operations.
```

#### Assessment idea
1.  **Question:** Your team is developing a deep learning model to forecast demand for a chain of grocery stores. They frequently experiment with new features (e.g., local event data, social media sentiment) and model architectures. Which MLOps practice is most crucial for managing these experiments effectively, ensuring reproducibility, and allowing for easy comparison of different model versions?
    *   **Correct Answer:** **Experiment Tracking** is the most crucial MLOps practice for this scenario. It involves systematically logging and managing all aspects of each experiment, including:
        *   **Hyperparameters:** Learning rate, batch size, number of LSTM units, etc.
        *   **Metrics:** Validation MAE, RMSE, training loss, etc.
        *   **Code Version:** The specific Git commit hash of the code used for training.
        *   **Data Version:** The specific version of the dataset used.
        *   **Model Artifacts:** The trained model weights.
        Tools like MLflow, Weights & Biases, or Comet ML facilitate this. By meticulously tracking these details, the team can easily reproduce past experiments, compare the performance of different models and feature sets, and understand which changes led to improvements or regressions, without ambiguity.

2.  **Question:** A critical deep learning model forecasting power grid stability has just been deployed to production. Immediately after deployment, the monitoring system flags a sharp increase in prediction errors and unusual resource utilization. Describe the function of a **CI/CD pipeline** in this context, focusing on how it would have helped prevent this issue and how it can aid in recovery.
    *   **Correct Answer:** In this context, a robust **CI/CD pipeline** serves several critical functions:
        *   **Prevention (CI):** The Continuous Integration (CI) part of the pipeline would have run automated tests (unit, integration, potentially small-scale model validation) on the new model's code and artifacts before deployment. If the new model introduced a bug or performed poorly even on a small validation set, CI would have failed, preventing it from reaching deployment. It also ensures all dependencies are correctly packaged.
        *   **Prevention (CD - Staging):** The Continuous Deployment (CD) part, especially with strategies like **staging environments (e.g., shadow or canary deployments)**, would have deployed the new model to a non-production or limited-traffic environment first. The sharp increase in prediction errors and resource utilization would have been detected in this isolated environment, allowing the team to catch the issue before it impacted the critical production power grid.
        *   **Recovery (CD - Rollback):** If the issue somehow slipped into production, the CD pipeline would facilitate rapid recovery through an **automated rollback strategy**. Upon detection of the problem by the monitoring system, the CD pipeline could be automatically or manually triggered to revert to the last known stable model version in production, minimizing the downtime and impact on power grid stability.

#### AI generation note
Create a 15-minute animated video that visualizes the entire MLOps pipeline for time series forecasting. Start with a high-level overview of MLOps, then animate each stage: Data Ingestion (showing data streams), Experimentation (showing different models being trained and metrics logged), Evaluation (backtesting and XAI reports), Packaging (Docker containerization), Deployment (blue/green strategy), Monitoring (dashboards and alerts), and Retraining (looping back to data ingestion). Emphasize the role of CI/CD throughout the pipeline with clear visual cues for automated triggers and checks. Use a real-world example like forecasting demand for a retail chain. Include an interactive element where learners drag and drop MLOps tools (e.g., MLflow, Docker, Grafana) to their corresponding pipeline stages.

---

## Final Capstone Project

Congratulations on reaching this stage of your Deep Learning for Time Series Forecasting journey! This capstone project is your opportunity to synthesize the knowledge and skills you've acquired throughout the course, applying them to a real-world time series problem. You will choose one of the following three project options, each designed to challenge you to preprocess data, build and train deep learning models (MLPs, CNNs, LSTMs), evaluate their performance, and interpret your results. Remember to document your process thoroughly, showcasing your understanding of both the theoretical concepts and practical implementation details.

### Project Option 1: Smart City Energy Load Forecasting

**Description:** In this project, you will act as a data scientist for a smart city initiative, tasked with forecasting future electricity demand. Accurate energy load forecasting is crucial for grid stability, resource allocation, and optimizing energy trading. You will work with historical energy consumption data, potentially augmented with external factors like weather conditions (temperature, humidity) and temporal features (day of week, hour of day). Your goal is to predict the electricity load for the next 24 to 48 hours.

**Requirements:**
1.  **Data Acquisition & Preprocessing:** Obtain a publicly available energy load dataset (e.g., from Kaggle, a government energy agency, or a similar source). Clean the data, handle missing values, and perform necessary transformations like differencing or scaling. Engineer relevant temporal features (e.g., one-hot encode day of week, cyclical features for hour of day).
2.  **Model Implementation:** Implement at least two distinct deep learning architectures:
    *   A Multilayer Perceptron (MLP) model, using a sliding window approach to create input features.
    *   At least one sequence model (e.g., LSTM or GRU) or a 1D Convolutional Neural Network (CNN).
3.  **Training & Evaluation:** Train your models on historical data and evaluate their performance on a held-out test set. Use appropriate time series evaluation metrics such as Mean Absolute Error (MAE), Root Mean Squared Error (RMSE), and Mean Absolute Percentage Error (MAPE). Visualize your predictions against actual values.
4.  **Hyperparameter Tuning:** Experiment with different hyperparameters for your chosen models (e.g., number of layers, units per layer, learning rate, window size) to optimize performance.
5.  **Report & Analysis:** Document your entire process, including data sources, preprocessing steps, model architectures, training procedures, evaluation results, and a comparative analysis of the models' strengths and weaknesses. Discuss potential real-world implications and limitations.

**Stretch Goals:**
*   Incorporate additional external regressors (e.g., holiday indicators, economic data) if available.
*   Explore multivariate forecasting, predicting multiple energy zones or types simultaneously.
*   Implement an ensemble method combining the predictions from your different models.
*   Discuss how your model could be deployed in a real-time forecasting system.

**Evaluation Criteria:**
*   **Data Handling (20%):** Quality of data cleaning, feature engineering, and appropriate time series splitting.
*   **Model Implementation (30%):** Correctness and clarity of deep learning model architectures (MLP, LSTM/CNN).
*   **Evaluation & Analysis (30%):** Appropriate use of metrics, insightful comparison of models, clear visualizations, and discussion of results.
*   **Code Quality & Documentation (20%):** Well-structured, commented code, and a comprehensive project report.

**Estimated Time:** 25-35 hours

### Project Option 2: E-commerce Sales Forecasting with Promotional Impact

**Description:** For an e-commerce business, accurately forecasting future sales is critical for inventory management, marketing strategy, and resource planning. This project challenges you to predict daily or weekly sales for a specific product category or an entire store, taking into account inherent seasonality, trend, and the significant impact of promotional events. You will need to carefully engineer features that capture these dynamics.

**Requirements:**
1.  **Data Acquisition & Preprocessing:** Source a retail sales dataset (e.g., from Kaggle, a public retail data repository). The dataset should ideally include sales figures and information about promotional activities or holidays. Address missing values, outliers, and prepare the data for deep learning. Create features for seasonality (e.g., day of week, month of year), trend, and promotional indicators.
2.  **Model Implementation:** Develop at least two deep learning models capable of handling both numerical time series data and categorical features (like promotion flags):
    *   A deep learning model (e.g., MLP or a simple CNN) that concatenates time series features with engineered categorical features.
    *   A recurrent neural network (LSTM or GRU) that can learn from the sequence of sales and integrate external promotional information effectively.
3.  **Training & Evaluation:** Train your models on a historical sales dataset and evaluate their performance on unseen future data. Use metrics like MAE, RMSE, and MAPE. Pay close attention to how well your models capture promotional spikes and seasonal patterns.
4.  **Feature Importance Analysis:** Analyze which features (e.g., day of week, specific promotions) seem to have the most significant impact on your model's predictions.
5.  **Report & Analysis:** Present your methodology, including data preparation, model architectures, training details, and evaluation results. Discuss the challenges of forecasting sales with promotional impacts and how your models address them. Compare the performance of your chosen models.

**Stretch Goals:**
*   Experiment with different ways to encode categorical promotional features (e.g., one-hot encoding, embedding layers).
*   Forecast multiple product categories or stores simultaneously (multivariate output).
*   Investigate the impact of lead time for promotional information on forecast accuracy.
*   Perform a sensitivity analysis to understand how changes in promotional intensity might affect sales predictions.

**Evaluation Criteria:**
*   **Data Handling & Feature Engineering (25%):** Effectiveness of preprocessing, creation of seasonal and promotional features.
*   **Model Implementation (25%):** Correctness and suitability of deep learning models for mixed data types.
*   **Evaluation & Analysis (30%):** Robust evaluation, insightful interpretation of promotional impacts, and model comparison.
*   **Code Quality & Documentation (20%):** Clean code, clear explanations, and a well-structured report.

**Estimated Time:** 25-35 hours

### Project Option 3: Predictive Maintenance for Industrial Equipment

**Description:** In manufacturing and industrial settings, predicting equipment failures before they occur is invaluable for reducing downtime, optimizing maintenance schedules, and extending asset lifespan. This project involves building a deep learning model to forecast the remaining useful life (RUL) or predict the next failure event of an industrial machine based on multivariate sensor data (e.g., temperature, pressure, vibration, RPM). This is a critical application of time series forecasting in the realm of Industry 4.0.

**Requirements:**
1.  **Data Acquisition & Preprocessing:** Obtain a publicly available predictive maintenance dataset (e.g., NASA turbofan engine degradation dataset, a similar dataset from Kaggle). The dataset should contain sensor readings over time for multiple machines, along with their operational cycles or failure times. Clean the data, handle missing values, normalize sensor readings, and engineer a target variable for RUL or failure prediction.
2.  **Model Implementation:** Implement at least two deep learning models suitable for sequence-to-sequence or sequence-to-regression tasks:
    *   A 1D Convolutional Neural Network (CNN) to extract relevant features from the sensor sequences.
    *   A Recurrent Neural Network (LSTM or GRU) specifically designed to model the temporal dependencies in the sensor data and predict RUL or failure probability.
3.  **Training & Evaluation:** Train your models on the prepared dataset, ensuring a robust time-based split for training and testing. Evaluate the models using appropriate regression metrics (MAE, RMSE) for RUL prediction, or classification metrics (precision, recall, F1-score, ROC AUC) if predicting a binary failure event within a future window.
4.  **Anomaly Detection & Interpretation:** Discuss how your model could potentially identify anomalous sensor patterns that precede failures. Visualize model predictions and highlight any common patterns in sensor data leading to failure.
5.  **Report & Analysis:** Detail your data preprocessing steps, model architectures, training methodology, and evaluation results. Compare the performance of your CNN and RNN models, discussing their strengths in capturing different aspects of the degradation process. Discuss the practical implications of your findings for predictive maintenance.

**Stretch Goals:**
*   Explore multi-task learning, where the model simultaneously predicts RUL and a binary failure flag.
*   Implement an attention mechanism within your RNN to understand which sensor readings or time steps are most critical for prediction.
*   Consider a survival analysis approach if the dataset supports it, predicting the probability of failure over time.
*   Discuss the challenges of deploying such a model in a real-time industrial environment.

**Evaluation Criteria:**
*   **Data Handling & Target Engineering (25%):** Quality of data cleaning, normalization, and accurate creation of RUL or failure target variables.
*   **Model Implementation (25%):** Correctness and suitability of CNN and RNN architectures for multivariate sensor sequences.
*   **Evaluation & Analysis (30%):** Appropriate use of metrics, insightful discussion of degradation patterns, and model comparison.
*   **Code Quality & Documentation (20%):** Well-organized, commented code, and a comprehensive project report.

**Estimated Time:** 25-35 hours

## Final Examination

This final examination is designed to assess your comprehensive understanding of deep learning for time series forecasting, covering concepts from data preprocessing and feature engineering to model architecture design, training, and evaluation. It includes a mix of conceptual questions, code tracing, code writing, and design/debugging scenarios to ensure you can both articulate theoretical principles and apply them practically.

### Part 1: Conceptual Understanding (40 points)

**Question 1 (10 points): Stationarity and Differencing**
Explain the concept of stationarity in time series analysis and why it is often a desirable property for deep learning models. Describe how differencing helps achieve stationarity, providing a simple mathematical example for a first-order difference.
*   **Answer:** A time series is considered stationary if its statistical properties (mean, variance, autocorrelation) do not change over time. This means it has no trend, no seasonality, and a constant variance. Deep learning models, especially those that rely on capturing patterns from past observations to predict the future, often perform better with stationary data because it simplifies the learning task; the model doesn't need to learn a changing mean or variance. Non-stationary data can lead to unstable gradients, poor generalization, and spurious correlations.
    Differencing is a transformation applied to a time series to remove trends and seasonality, thereby making it stationary. A first-order difference calculates the difference between consecutive observations.
    Mathematically, for a time series $Y_t$, the first-order difference is $Y'_t = Y_t - Y_{t-1}$.
    For example, if a series is $[10, 12, 15, 19, 24]$, its first-order difference would be:
    $Y'_2 = 12 - 10 = 2$
    $Y'_3 = 15 - 12 = 3$
    $Y'_4 = 19 - 15 = 4$
    $Y'_5 = 24 - 19 = 5$
    Resulting in $[2, 3, 4, 5]$. This new series has removed the original upward trend.
*   **Partial Credit:** 4 points for defining stationarity and its importance, 4 points for explaining differencing, 2 points for the mathematical example.

**Question 2 (10 points): Attention Mechanism in Time Series**
Describe the core idea behind the "attention mechanism" in deep learning models, particularly in the context of sequence-to-sequence time series forecasting. How does it address a key limitation of traditional RNNs when dealing with long sequences?
*   **Answer:** The attention mechanism allows a deep learning model to selectively focus on different parts of the input sequence when producing an output. In sequence-to-sequence time series forecasting, where an encoder processes an input sequence and a decoder generates an output sequence, traditional RNNs (like LSTMs or GRUs) compress the entire input sequence into a fixed-size context vector. This fixed-size vector often struggles to retain information from very long sequences, leading to a "bottleneck" where early information is lost as the sequence progresses.
    Attention addresses this by allowing the decoder to "look back" at all encoder hidden states at each decoding step. Instead of relying solely on the final context vector, the decoder computes a weighted sum of all encoder hidden states, where the weights (attention scores) indicate the relevance of each input time step to the current output prediction. This dynamic weighting mechanism enables the model to give more focus to the most pertinent past information, effectively overcoming the fixed-size context vector bottleneck and improving performance on long-range dependencies.
*   **Partial Credit:** 4 points for describing the core idea of attention, 3 points for explaining its application in sequence-to-sequence time series, 3 points for detailing how it mitigates the RNN bottleneck.

**Question 3 (10 points): Look-Ahead Bias**
Define "look-ahead bias" in the context of time series forecasting model development. Provide a concrete example of how this bias can inadvertently be introduced during data preprocessing or feature engineering.
*   **Answer:** Look-ahead bias (also known as data leakage or future leakage) occurs when information from the future is unintentionally used during the training or evaluation of a time series forecasting model. This leads to an overly optimistic assessment of the model's performance because it has access to data it would not have in a real-world prediction scenario.
    A concrete example of how look-ahead bias can be introduced is when applying data scaling (e.g., Min-Max scaling or StandardScaler) to the *entire* dataset (training + validation + test sets) *before* splitting it. If you calculate the minimum and maximum values (or mean and standard deviation) for scaling using data from the future test set, that future information is implicitly encoded into the scaling parameters applied to the training data. When the model is trained, it effectively "sees" information about the future data distribution, leading to inflated performance metrics during evaluation. The correct approach is to calculate scaling parameters *only* on the training set and then apply those same parameters to the validation and test sets.
*   **Partial Credit:** 4 points for defining look-ahead bias, 6 points for a clear, concrete example related to data preprocessing or feature engineering.

**Question 4 (10 points): CNN vs. RNN for Time Series**
Contrast the primary strengths and typical use cases for a 1D Convolutional Neural Network (CNN) versus a Recurrent Neural Network (RNN, specifically LSTM) when applied to time series forecasting.
*   **Answer:**
    *   **1D Convolutional Neural Networks (CNNs):**
        *   **Strengths:** Excellent at capturing local patterns and features (e.g., short-term trends, specific shapes) within a fixed-size window of a time series. They are computationally efficient due to parallelizable convolutions and can be effective at extracting hierarchical features. CNNs are also less prone to vanishing/exploding gradients in very long sequences compared to vanilla RNNs, and they can handle varying input lengths by using pooling or padding.
        *   **Use Cases:** Feature extraction from raw sensor data, identifying specific event signatures, short-term forecasting where local patterns are dominant, or as a feature extractor layer before an RNN/MLP for longer-term dependencies. They are particularly good for identifying patterns that are invariant to their position in the sequence.
    *   **Recurrent Neural Networks (RNNs - LSTMs/GRUs):**
        *   **Strengths:** Specifically designed to model sequential dependencies and maintain an internal "memory" of past information. LSTMs and GRUs effectively mitigate the vanishing gradient problem, allowing them to learn long-range temporal dependencies. They are naturally suited for sequence-to-sequence tasks and can capture complex, evolving relationships over time.
        *   **Use Cases:** Long-term forecasting, sequence-to-sequence prediction (e.g., predicting a future sequence of values), natural language processing (where sequences are fundamental), modeling complex dynamic systems, and scenarios where the order and history of observations are paramount.
    *   **Contrast:** CNNs excel at extracting spatial (or temporal, in 1D) features from fixed windows, acting like pattern detectors. RNNs, on the other hand, are designed to understand the *evolution* of a sequence over time, maintaining a state that summarizes the entire history. While CNNs find patterns, RNNs learn the grammar of the sequence. Often, they are combined (e.g., CNN for feature extraction, LSTM for sequence modeling) to leverage both strengths.
*   **Partial Credit:** 4 points for CNN strengths/use cases, 4 points for RNN strengths/use cases, 2 points for a clear comparative statement.

### Part 2: Code Tracing and Writing (40 points)

**Question 5 (10 points): Pandas Differencing and Shifting**
Consider the following `pandas` DataFrame `df`:
```python
import pandas as pd
data = {'value': [10, 12, 15, 11, 13, 16, 14, 17, 20, 18]}
df = pd.DataFrame(data)
```
What will be the content of `df['diff_value']` and `df['lag_value']` after executing the following code?
```python
df['diff_value'] = df['value'].diff()
df['lag_value'] = df['value'].shift(1)
```
*   **Answer:**
    `df['diff_value']` will contain the first-order difference of the 'value' column.
    `df['lag_value']` will contain the 'value' from the previous row (lag 1).

    The resulting DataFrame `df` will look like this:
    ```
       value  diff_value  lag_value
    0     10         NaN        NaN
    1     12         2.0       10.0
    2     15         3.0       12.0
    3     11        -4.0       15.0
    4     13         2.0       11.0
    5     16         3.0       13.0
    6     14        -2.0       16.0
    7     17         3.0       14.0
    8     20         3.0       17.0
    9     18        -2.0       20.0
    ```
*   **Partial Credit:** 5 points for `diff_value` column, 5 points for `lag_value` column. Deduct for incorrect NaN placement or calculation errors.

**Question 6 (10 points): PyTorch LSTM Output Shape**
Given the following PyTorch LSTM setup:
```python
import torch
import torch.nn as nn

batch_size = 4
sequence_length = 10
input_features = 5
hidden_size = 8
num_layers = 2

lstm = nn.LSTM(input_features, hidden_size, num_layers, batch_first=True)
input_tensor = torch.randn(batch_size, sequence_length, input_features)

output, (h_n, c_n) = lstm(input_tensor)
```
What will be the `torch.Size` of `output`, `h_n`, and `c_n`?
*   **Answer:**
    *   `output.shape`: `torch.Size([batch_size, sequence_length, hidden_size])` which is `torch.Size([4, 10, 8])`
        *   Explanation: When `batch_first=True`, the output tensor's dimensions are (batch, sequence, hidden_size). `output` contains the hidden state for each time step of the *last* layer.
    *   `h_n.shape`: `torch.Size([num_layers, batch_size, hidden_size])` which is `torch.Size([2, 4, 8])`
        *   Explanation: `h_n` contains the final hidden state for each layer. Its dimensions are (num_layers * num_directions, batch, hidden_size). Since it's a unidirectional LSTM, `num_directions` is 1.
    *   `c_n.shape`: `torch.Size([num_layers, batch_size, hidden_size])` which is `torch.Size([2, 4, 8])`
        *   Explanation: `c_n` contains the final cell state for each layer. Its dimensions are (num_layers * num_directions, batch, hidden_size).
*   **Partial Credit:** 3 points for `output`, 3.5 points for `h_n`, 3.5 points for `c_n`.

**Question 7 (10 points): Min-Max Scaling for Time Series**
Write a Python function using `scikit-learn`'s `MinMaxScaler` to perform min-max scaling on a time series dataset. The function should take training data and test data as input, ensuring that the scaling parameters (min and max) are learned *only* from the training set and then applied to both training and test sets. Return the scaled training and test data.
```python
from sklearn.preprocessing import MinMaxScaler
import numpy as np

def scale_time_series(train_data: np.ndarray, test_data: np.ndarray) -> tuple[np.ndarray, np.ndarray]:
    """
    Applies Min-Max scaling to time series data, learning parameters only from the training set.

    Args:
        train_data (np.ndarray): The training time series data.
        test_data (np.ndarray): The testing time series data.

    Returns:
        tuple[np.ndarray, np.ndarray]: Scaled training and testing data.
    """
    # Your code here
    pass

# Example usage:
# train = np.array([10, 12, 15, 11, 13]).reshape(-1, 1)
# test = np.array([16, 14, 17, 20, 18]).reshape(-1, 1)
# scaled_train, scaled_test = scale_time_series(train, test)
# print("Scaled Train:\n", scaled_train)
# print("Scaled Test:\n", scaled_test)
```
*   **Answer:**
    ```python
    from sklearn.preprocessing import MinMaxScaler
    import numpy as np

    def scale_time_series(train_data: np.ndarray, test_data: np.ndarray) -> tuple[np.ndarray, np.ndarray]:
        """
        Applies Min-Max scaling to time series data, learning parameters only from the training set.

        Args:
            train_data (np.ndarray): The training time series data.
            test_data (np.ndarray): The testing time series data.

        Returns:
            tuple[np.ndarray, np.ndarray]: Scaled training and testing data.
        """
        scaler = MinMaxScaler(feature_range=(0, 1))

        # Fit the scaler ONLY on the training data
        scaler.fit(train_data)

        # Transform both training and test data using the fitted scaler
        scaled_train = scaler.transform(train_data)
        scaled_test = scaler.transform(test_data)

        return scaled_train, scaled_test

    # Example usage:
    # train = np.array([10, 12, 15, 11, 13]).reshape(-1, 1)
    # test = np.array([16, 14, 17, 20, 18]).reshape(-1, 1)
    # scaled_train, scaled_test = scale_time_series(train, test)
    # print("Scaled Train:\n", scaled_train)
    # print("Scaled Test:\n", scaled_test)
    # Expected output for example:
    # Scaled Train:
    #  [[0.  ]
    #  [0.5 ]
    #  [1.  ]
    #  [0.25]
    #  [0.75]]
    # Scaled Test:
    #  [[1.25]
    #  [0.75]
    #  [1.5 ]
    #  [2.25]
    #  [1.75]]
    ```
*   **Partial Credit:** 5 points for correct `scaler.fit(train_data)`, 5 points for correctly transforming both using the *same* fitted scaler.

**Question 8 (10 points): PyTorch MLP for Time Series Forecasting**
Write a basic PyTorch `nn.Module` class for a simple Multilayer Perceptron (MLP) regressor. This MLP should take a flattened input window of time series data and predict the next single value.
The model should:
*   Accept `input_size` (which will be the window size).
*   Have at least two hidden layers with ReLU activation.
*   Output a single value.
```python
import torch
import torch.nn as nn

class SimpleMLPForecaster(nn.Module):
    def __init__(self, input_size: int, hidden_size1: int, hidden_size2: int):
        super(SimpleMLPForecaster, self).__init__()
        # Your layers here
        pass

    def forward(self, x: torch.Tensor) -> torch.Tensor:
        # Your forward pass here
        pass

# Example usage:
# model = SimpleMLPForecaster(input_size=10, hidden_size1=64, hidden_size2=32)
# dummy_input = torch.randn(32, 10) # Batch size 32, window size 10
# output = model(dummy_input)
# print(output.shape) # Should be torch.Size([32, 1])
```
*   **Answer:**
    ```python
    import torch
    import torch.nn as nn

    class SimpleMLPForecaster(nn.Module):
        def __init__(self, input_size: int, hidden_size1: int, hidden_size2: int):
            super(SimpleMLPForecaster, self).__init__()
            self.fc1 = nn.Linear(input_size, hidden_size1)
            self.relu1 = nn.ReLU()
            self.fc2 = nn.Linear(hidden_size1, hidden_size2)
            self.relu2 = nn.ReLU()
            self.fc3 = nn.Linear(hidden_size2, 1) # Output a single value

        def forward(self, x: torch.Tensor) -> torch.Tensor:
            # Input x is expected to be (batch_size, input_size)
            x = self.fc1(x)
            x = self.relu1(x)
            x = self.fc2(x)
            x = self.relu2(x)
            x = self.fc3(x)
            return x

    # Example usage:
    # model = SimpleMLPForecaster(input_size=10, hidden_size1=64, hidden_size2=32)
    # dummy_input = torch.randn(32, 10) # Batch size 32, window size 10
    # output = model(dummy_input)
    # print(output.shape) # Should be torch.Size([32, 1])
    ```
*   **Partial Credit:** 3 points for `__init__` with correct layers, 3 points for correct `forward` pass, 2 points for ReLU activations, 2 points for single output.

### Part 3: Design and Debugging (20 points)

**Question 9 (10 points): Designing for Multivariate Forecasting**
You need to forecast the next 24 hours of electricity demand for a city, considering hourly data, day of the week, and temperature. Propose a deep learning architecture (MLP, CNN, or LSTM-based) and justify your choice. Explain how each input feature (historical demand, day of week, temperature) would be incorporated into your chosen architecture.
*   **Answer:**
    An **LSTM-based architecture** would be highly suitable for this task due to its ability to capture long-term temporal dependencies and handle multiple input features effectively.
    **Justification:** Electricity demand is a classic time series with strong temporal patterns (hourly, daily, weekly, seasonal). LSTMs are designed to learn from sequences and maintain memory over long periods, which is crucial for forecasting 24 hours ahead based on historical data. While CNNs could extract local patterns and MLPs could combine features, an LSTM's sequential processing is inherently better for predicting future steps in a time series.

    **Incorporation of Features:**
    1.  **Historical Demand (Primary Time Series):** The core input would be a sequence of past hourly electricity demand values. This sequence would be fed directly into the LSTM layers. For example, a window of the last 168 hours (one week) of demand could be used as the primary input sequence.
    2.  **Day of the Week (Categorical Feature):** Day of the week is a cyclical categorical feature. It can be incorporated in a few ways:
        *   **One-Hot Encoding:** Convert the day of the week (e.g., Monday, Tuesday) into a one-hot encoded vector (e.g., `[1,0,0,0,0,0,0]` for Monday). This vector can then be concatenated with the other features at each time step of the input sequence or fed into a separate embedding layer whose output is then concatenated.
        *   **Embedding Layer:** A more sophisticated approach is to use an `nn.Embedding` layer in PyTorch. The day of the week (represented as an integer 0-6) would pass through this embedding layer, generating a dense vector representation. This embedding vector would then be concatenated with the other features.
    3.  **Temperature (Numerical External Regressor):** Temperature is a continuous numerical feature that has a strong influence on electricity demand. It would be treated as an additional feature at each time step. The hourly temperature forecast for the input window (and potentially for the prediction horizon if available) would be concatenated directly with the historical demand values (and potentially the day-of-week embedding/one-hot vector) before being fed into the LSTM layer.

    **Overall Architecture Sketch:**
    *   **Input Layer:** A sequence of feature vectors, where each vector at time `t` contains `[historical_demand_t, temperature_t, day_of_week_embedding_t]`.
    *   **LSTM Layers:** Multiple stacked LSTM layers to learn complex temporal patterns from the combined input sequences.
    *   **Output Layer:** A Dense (Linear) layer applied to the final hidden state of the LSTM (or a sequence of hidden states if using sequence-to-sequence) to predict the 24 future hourly demand values.
*   **Partial Credit:** 3 points for choosing and justifying LSTM, 2 points for historical demand incorporation, 2.5 points for day of week incorporation, 2.5 points for temperature incorporation.

**Question 10 (10 points): Debugging a Flat Line Prediction**
A student's LSTM model for univariate time series forecasting consistently predicts a flat line (i.e., the same value for all future time steps), even after many epochs. They've checked their data preprocessing (no NaNs, scaled correctly) and confirmed their loss function (MSE) is appropriate. What are two common reasons for this "flat line" behavior in deep learning models, and how would you investigate each?
*   **Answer:**
    Two common reasons for an LSTM model predicting a flat line are:

    1.  **Vanishing Gradients / Insufficient Learning Rate:**
        *   **Reason:** If gradients become extremely small during backpropagation, the model's weights and biases update very little, effectively halting learning. This can happen in deep networks or LSTMs that struggle to propagate gradients through long sequences, even with their internal gates. If the learning rate is also too small, even small gradients won't lead to meaningful updates. The model might converge to a local minimum that simply predicts the mean or median of the training data, resulting in a flat line.
        *   **Investigation:**
            *   **Monitor Gradients:** During training, log the L2 norm of the gradients for each layer. If they consistently approach zero, vanishing gradients are likely.
            *   **Learning Rate Schedule:** Experiment with a higher learning rate or a learning rate scheduler (e.g., `ReduceLROnPlateau`, `CosineAnnealingLR`) to help the model escape local minima.
            *   **Activation Functions:** Ensure appropriate activation functions are used (e.g., ReLU for hidden layers, not sigmoid/tanh everywhere which can saturate).
            *   **Network Depth:** If the network is extremely deep, consider reducing depth or using residual connections.
            *   **LSTM Variants:** Ensure the LSTM/GRU implementation is correct and consider if a simpler model (e.g., a shallow MLP) also exhibits this behavior.

    2.  **Incorrect Target/Input Alignment or Data Imbalance:**
        *   **Reason:** While the student checked preprocessing, subtle issues in how input sequences (`X`) are paired with target values (`y`) can lead to problems. If, for instance, `y` is always the same value for a given `X` window (e.g., due to an error in creating the target, or if the target itself is inherently very stable/constant in the training set), the model will learn to predict that constant. Similarly, if the training data is heavily biased towards a single output value, the model might learn to always predict that dominant value.
        *   **Investigation:**
            *   **Inspect `X` and `y` Pairs:** Manually inspect several `(X, y)` pairs from the training dataset. Verify that for varying input sequences `X`, the corresponding target `y` also varies meaningfully.
            *   **Target Distribution:** Plot the distribution of the target variable (`y`) in the training set. If it's heavily skewed or concentrated around a single value, the model might simply be learning to predict that mode.
            *   **Small Batch Debugging:** Train the model on a very small, carefully constructed synthetic dataset where you know the expected output. If it still fails, the issue is likely architectural or in the training loop.
            *   **Loss Curve Analysis:** A flat loss curve (or one that quickly plateaus at a high value) despite many epochs suggests the model isn't learning. If the loss *does* decrease but predictions are flat, it might be minimizing a trivial loss (e.g., predicting the mean) which is locally optimal.
*   **Partial Credit:** 5 points for each reason and its investigation. Reasons should be distinct and actionable.

## Course Conclusion

You have successfully navigated the intricate world of Deep Learning for Time Series Forecasting! This course has equipped you with a robust toolkit to tackle complex sequential data problems, moving beyond traditional statistical methods to leverage the power of neural networks. You are now proficient in preparing diverse time series datasets, understanding the nuances of stationarity, and engineering features that capture temporal dynamics. You have gained practical experience in building, training, and evaluating Multilayer Perceptrons (MLPs), 1D Convolutional Neural Networks (CNNs), and Recurrent Neural Networks (LSTMs) using PyTorch, applying them to both univariate and multivariate forecasting challenges.

Beyond model implementation, you've developed critical thinking skills essential for any deep learning practitioner. You can now articulate the strengths and weaknesses of different architectures, diagnose common model performance issues, and design evaluation strategies tailored to time series data. The capstone project has provided you with invaluable hands-on experience, allowing you to integrate these skills to solve realistic forecasting problems, from energy demand prediction to predictive maintenance. This foundation positions you to confidently approach a wide array of real-world forecasting tasks and continue your journey in advanced deep learning.

### Where to Go Next

The field of deep learning for time series is continuously evolving. To further enhance your expertise and stay at the forefront, consider exploring these advanced topics and resources:

*   **Advanced Architectures:** Dive deeper into **Transformers and Attention Mechanisms** specifically adapted for time series (e.g., Temporal Fusion Transformers, Informer, Autoformer). Explore **Dilated Causal Convolutions** (like WaveNet) for very long sequences and high-frequency data.
*   **Probabilistic Forecasting:** Move beyond point predictions to understand uncertainty. Explore techniques like **Quantile Regression LSTMs**, **Gaussian Processes**, or **Bayesian Deep Learning** to generate prediction intervals and quantify forecast confidence.
*   **MLOps for Time Series:** Learn how to deploy, monitor, and maintain your forecasting models in production environments. This includes topics like model versioning, continuous integration/continuous deployment (CI/CD), and real-time inference pipelines.
*   **Specialized Libraries & Frameworks:** Investigate libraries like `GluonTS` (Amazon) or `Prophet` (Facebook) which offer high-level APIs and pre-built models for various forecasting scenarios, often integrating deep learning components.
*   **Community and Competitions:** Engage with the time series forecasting community on platforms like Kaggle. Participating in competitions provides excellent practical experience and exposure to diverse datasets and problem-solving approaches.
*   **Further Reading:**
    *   **Books:** "Forecasting: Principles and Practice" by Rob J Hyndman and George Athanasopoulos (for a strong statistical foundation), and "Deep Learning for Time Series Forecasting" by Jason Brownlee (for practical implementations).
    *   **Research Papers:** Follow recent advancements in time series deep learning by reading papers from top conferences (NeurIPS, ICML, ICLR, AAAI).

Keep practicing, keep building, and keep exploring. The skills you've developed in this course are highly valuable and applicable across numerous industries. We wish you the best in your continued learning and professional endeavors!

---


> End of Syllabus: Deep Learning for Time Series Forecasting
> Course ID: deep-learning-for-time-series-forecasting
> Total modules: 8
> Total chapters: 48
> Level: Intermediate
> Subcategory: Deep Learning & Neural Networks
> Generated by: Cohortia Syllabus Generator
> Format: Markdown
