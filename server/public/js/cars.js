/**
* @brief : Classe qui gere la voiture 
**/

function Car(image, frame_width, frame_height, frame_duration)
{
	//////////////////////////////////////////////////////////////
	// Attributs
	/////////////////////////////////////////////////////////////
	var m_car;
	var m_speed;
	var m_carFilename;
	//this variable define your position by the algorithm made in the track class
	var m_score;
	var m_isIA;
	var pushed;
	
	///////////////////////////////////////////////////////////////
	// Méthodes
	///////////////////////////////////////////////////////////////
	/**
	* @brief : Constructeur de la classe Car
	**/
    this.constructor = function()
	{
		m_carFilename = image;
		//on définie la valeur des variables
		m_car = new jaws.Sprite({ image: m_carFilename, scale_image: 0.10, anchor_x:0.25, anchor_y:0.5, angle:180});
		//m_car.animation = new jaws.Animation({sprite_sheet: jaws.assets.get(image), frame_size: [frame_width,frame_height], frame_duration: frame_duration , orientation :"right"});
		//m_car.setImage(m_car.animation.frames[1]);

		//creating 4 new variables for the sprite
		m_car.vx = m_car.vy = 0;
		m_car.agx = m_car.agy = 0;

		m_isIA = false;
		pushed = false;
    }
	 
	 /**
	 *@brief : Permet de mouvement du perso
	 **/

	this.move = function (elapsedTime /*,tile_map*/ )
	{
		m_car.vx = m_car.agx;
		m_car.vy = m_car.agy;

		m_car.move(elapsedTime * m_car.vx , elapsedTime * m_car.vy);
		debug = document.getElementById("debug");
		debug.innerHTML = "<p> move "+this.getX()+" :: "+this.getY()+"</p>";
	}
	
	/**
	* @brief : gestion des sprites
	**/
	// this.show = function () 
	// {	
	// 	if ( m_goRight )
	// 	{
	// 		m_car.setImage( m_car.go_right.next() );
	// 	}			
	// }

	this.haveToSend = function ()
	{
		return pushed;
	}

	/**
	* @brief : Accesseur de m_player
	**/
	this.getSprite = function ()
	{
		return m_car;
	}

	this.setPosition = function (carInfos)
	{
		m_car.moveTo(carInfos.position.x, carInfos.position.y);
		m_car.rotateTo(-carInfos.angle/Math.PI*180-90);
	}

	this.getX = function()
	{
		return m_car.x;
	}

	this.getY = function()
	{
		return m_car.y;
	}

	this.setAccelerationX = function(agx)
	{
		m_car.agx = agx;
	}

	this.setAccelerationY = function(agy)
	{
		m_car.agy = agy;
	}	

	this.getAccelerationX = function()
	{
		return m_car.agx;
	}

	this.getAccelerationY = function()
	{
		return m_car.agy;
	}

	this.switchToIA = function()
	{


	}

	this.switchToPlayer = function()
	{


	}
//end of class
}