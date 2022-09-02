<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Admin_model extends CI_Model
{
    function insertadmindata($admindata)
    {
		$insert=$this->db->insert('admin',$admindata);
		return $this->db->insert_id();
    }  
	
	public function checkadmin($email,$password)
	{
	  $this->db->select('*');
	  $this->db->from('admin');
	  $this->db->where('email',$email);
	  $this->db->where('password',$password);
	  $this->db->where('is_deleted',1);
	  $query=$this->db->get();
	  return $query->result_array();
	}
	public function insertuserdata($userdata)
    {
		$insert=$this->db->insert('user',$userdata);
		return $this->db->insert_id();
    } 
	public function userlist()
	{
		$this->db->select('*');
		$this->db->from("user");
		$this->db->where('is_deleted',1);
		$query = $this->db->get();
		return $query->result_array();
	}
	public function userdetail($userid)
	{
		$this->db->select('*');
		$this->db->from("user");
		$this->db->where('userid',$userid);
		$this->db->where('is_deleted',1);
		$query = $this->db->get();
		return $query->result_array();
	}
	public function deleteuser($data=array())
	{
	  $this->db->where('userid',$data['userid']);
	  $this->db->update("user",$data);
	  return true;
	}	
}