# Units Converter
A simple library to convert units. Heavily based on [convert-units](https://github.com/ben-ng/convert-units).

[![CircleCI](https://circleci.com/gh/nosferatoy/units-converter.svg?style=svg)](https://circleci.com/gh/nosferatoy/units-converter)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/145ef4b5949d4be78a2bf577f078be49)](https://www.codacy.com/app/nosferatoy/units-converter?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=nosferatoy/units-converter&amp;utm_campaign=Badge_Grade)
[![Codacy Badge](https://api.codacy.com/project/badge/Coverage/145ef4b5949d4be78a2bf577f078be49)](https://www.codacy.com/app/nosferatoy/units-converter?utm_source=github.com&utm_medium=referral&utm_content=nosferatoy/units-converter&utm_campaign=Badge_Coverage)

An [example](https://github.com/mugrufis/units-converter-consumer) implementation of the library.

### Key Features
* Tree shakable.
* No dependencies.
* Build for es6, cmj and umd.
* Tested to 4 significant figures.

## Installation

```
npm install units-converter --save
```

## Usage

The library provide a simple chained API to transform units of the same type.
The units are broken down to modules, so it is possible and recommended, to load only the unite types that you are using.
```js
import { voltage } from 'units-converter';

voltage(1).from('V').to('mV').value;
//1000
```
or

```js
import * as converter from 'units-converter';

converter.voltage(1).from('V').to('mV').value;
//1000

converter.mass(1).from('lb').to('oz').value;
//16
```

* Convert unit will return an object of the unit specifed in the "to" function
```js
import { length } from 'units-converter';

length(1200).from('mm').to('m');
 /* {
      value: 1.2,
      unit: 'm',
      system: 'metric',
      singular: 'Meter',
      plural: 'Meters'
    } */
```
* Convert unit to Best
```js
import { length } from 'units-converter';

// the smallest unit with a value above 1
length(12000).from('mm').toBest();
/* {  
      value: 1.2,
      unit: 'm',
      system: 'metric',
      singular: 'Meter',
      plural: 'Meters'
    } */

// the smallest unit excluding meters
length(12000).from('mm').toBest({ exclude: ['m'] });
 /* {
      value: 1200,
      unit: 'cm',
      system: 'metric',
      singular: 'Centimeter',
      plural: 'Centimeters'
    } */

// the smallest unit with a value equal to or above 10
length(900).from('mm').toBest({ cutOffNumber: 10 });
 /* {
      value: 90,
      unit: 'cm',
      system: 'metric',
      singular: 'Centimeter',
      plural: 'Centimeters'
    } */
    
// the smallest unit with a value equal to or above 10
length(1000).from('mm').toBest({ cutOffNumber: 10 });
 /* {
      value: 100,
      unit: 'cm',
      system: 'metric',
      singular: 'Centimeter',
      plural: 'Centimeters'
    } */
```

* Possibilities will return an array with the abbreviations of the available units
```js
import { voltage } from 'units-converter';

voltage().from('V').possibilities();
// [ 'V', 'mV', 'kV' ]
```

* Describe will return an object with all the details of the unit
```js
import { voltage } from 'units-converter';

voltage().describe('V');

/* { 
      unit: 'V', 
      system: 'metric', 
      singular: 'Volt', 
      plural: 'Volts' 
    } */
```

* List will return and array with the description of all the available units
```js
import { voltage } from 'units-converter';

voltage().list();

/* [
    { 
      unit: 'V', 
      system: 'metric', 
      singular: 'Volt', 
      plural: 'Volts' 
    },
    {
      unit: 'mV',
      system: 'metric',
      singular: 'Millivolt',
      plural: 'Millivolts'
    },
    {
      unit: 'kV',
      system: 'metric',
      singular: 'Kilovolt',
      plural: 'Kilovolts'
    }
  ] */
```

## Units

<details><summary>Length</summary>
<p>

* mm
* cm
* m
* in
* ft-us
* ft
* fathom
* mi
* nMi
 
</p>
</details>

<details><summary>Area</summary>
<p>
  
* mm2
* cm2
* m2
* ha
* km2
* in2
* ft2
* ac
* mi2

</p>
</details>

<details><summary>Mass</summary>
<p>
  
* mcg
* mg
* g
* kg
* oz
* lb
* mt
* t

</p>
</details>

<details><summary>Volume</summary>
<p>
  
* mm3
* cm3
* ml
* l
* kl
* m3
* km3
* tsp
* Tbs
* in3
* fl-oz
* cup
* pnt
* qt
* gal
* ft3
* yd3

</p>
</details>

<details><summary>Volume Flow Rate</summary>
<p>
  
* mm3/s
* cm3/s
* ml/s
* cl/s
* dl/s
* l/s
* l/min
* l/h
* kl/s
* kl/min
* kl/h
* m3/s
* m3/min
* m3/h
* km3/s
* tsp/s
* Tbs/s
* in3/s
* in3/min
* in3/h
* fl-oz/s
* fl-oz/min
* fl-oz/h
* cup/s
* pnt/s
* pnt/min
* pnt/h
* qt/s
* gal/s
* gal/min
* gal/h
* ft3/s
* ft3/min
* ft3/h
* yd3/s
* yd3/min
* yd3/h'

</p>
</details>

<details><summary>Temperature</summary>
<p>
  
* C
* F
* K
* R

</p>
</details>

<details><summary>Time</summary>
<p>
  
* ns
* mu
* ms
* s
* min
* h
* d
* week
* month
* year

</p>
</details>

<details><summary>Frequency</summary>
<p>
  
* Hz
* mHz
* kHz
* MHz
* GHz
* THz
* rpm
* deg/s
* rad/s

</p>
</details>

<details><summary>Speed</summary>
<p>
  
* m/s
* km/h
* m/h
* knot
* ft/s

</p>
</details>

<details><summary>Pace</summary>
<p>
  
* s/m
* min/km
* s/ft
* min/km

</p>
</details>

<details><summary>Pressure</summary>
<p>
  
* Pa
* hPa
* kPa
* MPa
* bar
* torr
* psi
* ksi

</p>
</details>

<details><summary>Digital</summary>
<p>
  
* b
* Kb
* Mb
* Gb
* Tb
* B
* KB
* MB
* GB
* TB

</p>
</details>

<details><summary>Illuminance</summary>
<p>
  
* lx
* ft-cd

</p>
</details>

<details><summary>Parts-Per</summary>
<p>
  
* ppm
* ppb
* ppt
* ppq

</p>
</details>

<details><summary>Voltage</summary>
<p>
  
* V
* mV
* kV

</p>
</details>

<details><summary>Current</summary>
<p>
  
* A
* mA
* kA

</p>
</details>

<details><summary>Power</summary>
<p>
  
* W
* mW
* kW
* MW
* GW

</p>
</details>

<details><summary>Apparent Power</summary>
<p>
  
* VA
* mVA
* kVA
* MVA
* GVA

</p>
</details>

<details><summary>Reactive Power</summary>
<p>
  
* VAR
* mVAR
* kVAR
* MVAR
* GVAR

</p>
</details>

<details><summary>Energy</summary>
<p>
  
* Wh
* mWh
* kWh
* MWh
* GWh
* J
* kJ

</p>
</details>

<details><summary>Reactive Energy</summary>
<p>
  
* VARh
* mVARh
* kVARh
* MVARh
* GVARh

</p>
</details>

<details><summary>Angle</summary>
<p>
  
* deg
* rad
* grad
* arcmin
* arcsec

</p>
</details>

<details><summary>Charge</summary>
<p>
  
* c
* mC
* μC
* nC
* pC

</p>
</details>

<details><summary>Force</summary>
<p>
  
* N
* kN
* lbf

</p>
</details>

<details><summary>Acceleration</summary>
<p>
  
* g (g-force)
* m/s2

</p>
</details>

## Road map

* Add types to support better integration with typescript using projects.

* Add functionality for the addition of custom units.

* Add more units, the goal is to approach the amount of units provided by [matlab](https://www.mathworks.com/help/symbolic/units-list.html).

* Rewrite the project with typescript.