using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace Practice
{
    public class connection
    {
        static public SqlConnection giveConnection()
        {
            try
            {
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();
                //While mentioning something else instead of localhost, we should keep in mind about the escape sequences
                builder.ConnectionString = "Data Source=CYG262;Initial Catalog=Practice1;Integrated Security=True;";
                SqlConnection connection = new SqlConnection(builder.ConnectionString);
                return connection;
            }
            catch(SqlException e)
            {
                Console.WriteLine(e.ToString());
                return null;
            }
        }
    }
}
