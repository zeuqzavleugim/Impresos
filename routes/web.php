<?php

use App\Http\Controllers\ContactController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () { return Inertia::render('Home'); })->name('home');
Route::get('/impresion-en-alta-resolucion', function () { return Inertia::render('ImpresionGranFormato'); })->name('impresion');
Route::get('/decoracion-perzonaliada-con-vinil', function () { return Inertia::render('DecoracionVinil'); })->name('decoracion');
Route::get('/recorte-de-vinil-perzonalisado', function () { return Inertia::render('RecorteVinil'); })->name('recorte');
Route::get('/contacto', function () { return Inertia::render('Contacto'); })->name('servicioContacto');
Route::get('/blog', function () { return Inertia::render('Blogs'); })->name('servicioBlogs');

Route::get('/politicas-de-privacidad', function () { return Inertia::render('Privacidad'); })->name('politicas');
Route::get('/terminos-y-condiciones', function () { return Inertia::render('Terminos'); })->name('terminos');
Route::get('/preguntas-frecuentes', function () { return Inertia::render('PregFrecuentes'); })->name('PregFrecuentes');


Route::get('/blog/estrategias-branding-impresion-vinil-hoteles-restaurantes', function () { return Inertia::render('Blogs/EstrategiasBranding'); })->name('EstrategiasBranding');
Route::get('/blog/optimizacion-imagen-corporativa-oficinas-vinil', function () { return Inertia::render('Blogs/OptimizacionImagenCorporativa'); })->name('ImagenCorporativa');
Route::get('/blog/vinil-alta-resolucion-experiencia-cliente-restaurantes', function () { return Inertia::render('Blogs/TransformarExperienciaCliente'); })->name('TransformarExperiencia');
Route::get('/blog/poder-vinil-branding-corporativo', function () { return Inertia::render('Blogs/PoderVinilAltaResolucion'); })->name('PoderVinilAltaResolucion');

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');

require __DIR__.'/auth.php';
