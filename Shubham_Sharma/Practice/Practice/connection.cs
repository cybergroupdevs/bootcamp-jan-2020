using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Practice
{
    public class connection
    {
        static SqlConnection con;
        public connection()
        {
            try
            {
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();
                //While mentioning something else instead of localhost, we should keep in mind about the escape sequences
                builder.ConnectionString = "Data Source=CYG262;Initial Catalog=Practice1;Integrated Security=True;";
                con = new SqlConnection(builder.ConnectionString);
            }
            catch(Exception e)
            {
                Console.WriteLine(e);
            }
            
        }
        static public SqlConnection giveConnection()
        {
            return con;
        }
    }
}
