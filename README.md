## What Do I Do?

Resize the image and crop to fit the give width and height

## How To Use

1. Clone this project
2. Run

``` 
npm install
```
3. In current project folder, to start change filename, run in terminal:

``` 
node -e 'require("./index").resizeCrop()'
```

## Arguments

``` javascript
.resizeCrop([inputFolder,[outputFolder,[width, [height, [quality]]]]])
```

| Arguments     | Default       | Optional      |
| ------------- |:-------------:|:-------------:|
| inputFolder   | "./input"     | true          |
| outputFolder  | "./output"    | true          |
| width         | 50            | true          |
| height        | 50            | true          |
| quality       | 100           | true          |
