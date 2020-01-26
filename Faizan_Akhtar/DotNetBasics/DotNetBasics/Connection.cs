using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;

namespace DotNetBasics
{
    class Connection
    {
       public static SqlConnection doConnection()
        {
            try
            {
                SqlConnectionStringBuilder builder = new SqlConnectionStringBuilder();
                builder.ConnectionString = "Data Source=CYG290\\SQLEXPRESS;Initial Catalog=cSharpBasic;Integrated Security=True;";

                SqlConnection connection = new SqlConnection(builder.ConnectionString);
                
                    return connection;
                

            }
            catch (SqlException e)
            {
                Console.WriteLine(e.ToString());
                return null;
            }
        }
    }
}
