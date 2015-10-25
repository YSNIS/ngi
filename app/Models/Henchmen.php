<?php 

namespace App\Models;

	use Illuminate\Database\Eloquent\Model;

	class Henchmen extends Model 
	{
		protected $table = 'henchmen';
		protected $fillable = ['name', 'group', 'date_hired'];


		public static function getHenchmen() {
			return Henchmen::all();
		}

		public static function createHenchmen($name) {
			$henchmen = new Henchmen;
			$henchmen->name = $name;
			$henchmen->save();
			return $henchmen;
		}

		public static function deleteHenchmen($id) {
			$henchmen = Henchmen::find($id);
			$henchmen->delete();
			return Henchmen::all();
		}

	}

?>