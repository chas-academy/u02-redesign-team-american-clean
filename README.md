# u02-redesign-team-american-clean

## Hero image
```
  <div class="hero-img">
      <h1>Välkommen till myh.se!</h1>

      <a href="#" class="button primary">Våra verksamhetsområden</a>
    </div>
```

## Buttons 
Two button designs, default style:
```
<a href="#" class="button">Våra verksamhetsområden</a>
```

Primary button: Add `.primary`.

Make a large button with `.large`.

## Simple page submenu
```
 <ul class="page-nav">
            <li><a href="#">Yrkeshögskoleutbildning</a></li>
            <li><a href="#">Konst- och kulturutbildning</a></li>
            <li><a href="#">Tolkutbildning</a></li>
            <li><a href="#">Utbildning med endast tillsyn</a></li>
 </ul>
```

##Breadcrumbs
```
<ul class="breadcrumbs">
              <li><a href="#">Start</a></li>
              <li><a href="#">Nästa</a></li>
              <li>Nästa</li>
</ul>
```


## Grid
The grid is based on three equal columns without space default. 

Use the grid class as wrapper element.
```
<div class="grid">
</div>
```

Apply space between columns by adding the gap class.
```
<div class="grid gap">
 <div></div>
 <div></div>
 <div></div>
</div>
```

Create a content section (2/3 columns) by using col-2-3 class.
```
<div class="grid gap">
  <div class="col-2-3"></div>
  <div></div>
</div>
```
