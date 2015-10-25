<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// Getting and Creating Henchmen
Route::get('/henchmen', 'HenchmenController@getHenchmen');
Route::post('/henchmen/{name}', 'HenchmenController@createHenchmen');
Route::delete('/henchmen/{name}', 'HenchmenController@deleteHenchmen');

Route::get('{all}', function($uri)
{
    return View::make('layouts.master');
})->where('all', '.*');

