<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS, DELETE, PUT");
header("Content-Type: application/json; charset=UTF-8");
header('Access-Control-Allow-Credentials', 'true');
header("Access-Control-Allow-Headers: Content-Type, Origin, Accept, Authorization, X-Requested-With");

class Admin extends CI_Controller {

	public function __construct()
    {
		parent::__construct();
		$this->load->model('Admin_model');

    }
	public function index()
	{
		echo "hii sa";
	}

    public function insertdata()
    {    
        $data = json_decode(file_get_contents('php://input'), true);    
        if( ! empty($data)) 
        { 
            $name = $data['name'];
            $dob = $data['dob'];
            $email = $data['email'];
            $password = $data['password'];
             
            $admindata=array(
                'name'=>$name,
                'dob'=>$dob,
                'email'=>$email,
                'password'=>$password,
                'is_deleted'=>1,
                 );
       
            $insertadmin = $this->Admin_model->insertadmindata($admindata);
            if($insertadmin)
                    {        
                        echo json_encode(["success"=>"1","msg"=>"Admin Inserted."]);
                    }
                    else
                    {
                        echo json_encode(["success"=>"0","msg"=>"Admin Not Inserted!"]);
                    }           
        }
          else 
          {
            echo json_encode(["success"=>"0","msg"=>"Admin Not Inserted!"]);
          }
    } 
    public function checkadmin()
    {
        $data = json_decode(file_get_contents('php://input'), true);    
        if( ! empty($data)) 
        { 
            $email = $data['email'];
            $password = $data['password'];
                    
            $admindata = $this->Admin_model->checkadmin($email,$password);
            if($admindata)
                    {      
                        echo json_encode($admindata);
                          // echo json_encode(["success"=>"1","msg"=>"User found" ,"userdata"=>$Userdata]);
                    }
                    else
                    {
                        echo json_encode(["success"=>"0","msg"=>"error ! Please, enter valid details !"]);
                    }           
        }
          else 
          {
            echo json_encode(["success"=>"0","msg"=>"User Not found!"]);
          }
    }

    public function adduser()
    {    
        $data = json_decode(file_get_contents('php://input'), true);    
        if( ! empty($data)) 
        { 
            $name = $data['name'];
            $dob = $data['dob'];
            $email = $data['email'];
            $password = $data['password'];
            $about = $data['about'];
             
            $userdata=array(
                'name'=>$name,
                'dob'=>$dob,
                'email'=>$email,
                'password'=>$password,
                'about'=>$about,
                'is_deleted'=>1,
                 );
       
            $insertUser = $this->Admin_model->insertuserdata($userdata);
            if($insertUser)
                    {        
                        echo json_encode(["success"=>"1","msg"=>"User Inserted."]);
                    }
                    else
                    {
                        echo json_encode(["success"=>"0","msg"=>"User Not Inserted!"]);
                    }           
        }else 
          {
            echo json_encode(["success"=>"0","msg"=>"User Not Inserted!"]);
          }
    } 
    public function userlist()
    {
        $data=$this->Admin_model->userlist();
        //    print_r($data); exit;
        echo json_encode($data);

    }
    public function deleteuser()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $userid = $data['userid'];    
        $userdetail=$this->Admin_model->userdetail($userid);
        $userid=$userdetail[0]['userid'];
        if ($userid)
            {
                $dataArray = array(
				'userid'=>$userid,
				'is_deleted' =>0,
				);
				$lastupdate=$this->Admin_model->deleteuser($dataArray);
				if ($lastupdate)
                {
                    echo json_encode(["success"=>"1","msg"=>"User deleted."]);

				}else
                {
                    echo json_encode(["success"=>"0","msg"=>"something went wrong"]);
				}
			}else
            {
                echo json_encode(["success"=>"0","msg"=>"something went wrong"]);
            }
    }

    public function userdetail()
    {
        $data = json_decode(file_get_contents('php://input'), true);
        $userid = $data['userid'];    
        $userdetail=$this->Admin_model->userdetail($userid);
        echo json_encode($userdetail);  
    }
}